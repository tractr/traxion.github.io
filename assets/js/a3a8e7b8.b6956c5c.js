"use strict";(self.webpackChunk_trxn_traxion_api=self.webpackChunk_trxn_traxion_api||[]).push([[840],{2917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var o=n(7896),r=n(1461),a=(n(2784),n(876)),i=["components"],l={id:"file-storage-on-aws-s3",title:"File Storage on AWS S3",sidebar_label:"File Storage on AWS S3"},s=void 0,p={unversionedId:"how-to/file-storage/file-storage-on-aws-s3",id:"how-to/file-storage/file-storage-on-aws-s3",title:"File Storage on AWS S3",description:"Introduction",source:"@site/docs/how-to/file-storage/file-storage-on-aws-s3.md",sourceDirName:"how-to/file-storage",slug:"/how-to/file-storage/file-storage-on-aws-s3",permalink:"/docs/how-to/file-storage/file-storage-on-aws-s3",draft:!1,editUrl:"https://github.com/tractr/traxion/tree/main/apps/docs/docs/how-to/file-storage/file-storage-on-aws-s3.md",tags:[],version:"current",frontMatter:{id:"file-storage-on-aws-s3",title:"File Storage on AWS S3",sidebar_label:"File Storage on AWS S3"},sidebar:"documentation",previous:{title:"Extend a generated controller",permalink:"/docs/how-to/nestjs/extend-a-generated-controller"},next:{title:"Use Minio to mock AWS S3",permalink:"/docs/how-to/file-storage/use-minio"}},d={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Example",id:"example",level:3},{value:"Common use case",id:"common-use-case",level:2},{value:"Upload a file to the file storage with a presigned url",id:"upload-a-file-to-the-file-storage-with-a-presigned-url",level:3},{value:"Download a file from file storage with a presigned URL",id:"download-a-file-from-file-storage-with-a-presigned-url",level:3},{value:"Temporary files",id:"temporary-files",level:2},{value:"Delivering temporary files to a permanent location",id:"delivering-temporary-files-to-a-permanent-location",level:3},{value:"Delete expired temporary files",id:"delete-expired-temporary-files",level:3}],c={toc:u},m="wrapper";function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)(m,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Storing, managing and distributing files is a common task for web applications. However, it can quickly become a cumbersome task to manage for your nodejs application and is usually best delegated to a specialized file storage service like AWS S3 or Minio."),(0,a.kt)("p",null,"It involves three parts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Your backend application, which is responsible for negotiating a presigned download url with the file storage service."),(0,a.kt)("li",{parentName:"ul"},"Your frontend application, which must request this presigned upload url from the backend and then upload the user's file to the file storage."),(0,a.kt)("li",{parentName:"ul"},"The file storage service itself.")),(0,a.kt)("p",null,"Traxion provides the following two packages to interact with the file storage service:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@trxn/nestjs-file-storage")," allows you to connect your NestJS backend application to a file storage service to manipulate files and negotiate presigned urls."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@trxn/angular-file-storage")," contains helpers for connecting your frontend application to your backend and file storage service.")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"You must first install the packages in the project: ",(0,a.kt)("inlineCode",{parentName:"p"},"npm i --save @trxn/nestjs-file-storage @trxn/angular-file-storage"),"."),(0,a.kt)("p",null,"Both packages expose modules that extend the ",(0,a.kt)("inlineCode",{parentName:"p"},"ModuleOptionsFactory")," and should be imported into your backend and frontend applications respectively and registered with their configuration."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// file: apps/api/src/app/app.module.ts\n\nimport { Module } from '@nestjs/common';\n\nimport {\n  FileStorageController,\n  FileStorageModule,\n  PresignedDownloadConfiguration,\n  PresignedUploadConfiguration,\n} from '@trxn/nestjs-file-storage';\n\n@Module({\n  imports: [\n    FileStorageModule.register({\n   // Public key of your file storage user\n      accessKey: 'minio',\n\n   // Private key of your file storage user\n      secretKey: 'password',\n\n   // Domain to access the file storage\n      endPoint: 'localhost',\n\n   // Port to access the file storage\n      port: 9000,\n\n   // Denotes if ssl should be used\n      // (can be disabled for dev envs, but should be used in production)\n      useSSL: false,\n\n   // The name of your file storage bucket\n      defaultBucket: 'bucket',\n\n   // Here you can configure the validity time of presigned download urls \n   // (default to 300s)\n      presignedDownload: {} as PresignedDownloadConfiguration,\n\n   // Here you can configure the validity time of presigned download urls \n   // (default to 300s)\n   // You can also add restrictions on allowed file size and mime type\n      presignedUpload: {} as PresignedUploadConfiguration,\n    }),\n  ],\n})\nexport class AppModule {}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// file: apps/pwa/src/app/app.module.ts\n\nimport { NgModule } from '@angular/core';\n\nimport { FileStorageModule } from '@trxn/angular-file-storage';\n\n@NgModule({\n  imports: [\n    FileStorageModule.register({\n   // The name of your file storage bucket\n      defaultBucket: 'bucket',\n   \n   // Endpoint to request presigned upload url (default to 'upload')\n      presignedUploadEndpoint: 'upload',\n\n   // Endpoint to request presigned download url (default to 'download')\n      presignedDownloadEndpoint: 'download',\n    }),\n  ],\n})\nexport class AppModule {}\n")),(0,a.kt)("p",null,"The configuration expected by the ",(0,a.kt)("inlineCode",{parentName:"p"},"register")," method is available via the TypeScript interfaces or in the source code:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tractr/traxion/blob/main/libs/nestjs/file-storage/src/lib/interfaces/file-storage-configuration-public.interface.ts"},"@trxn/nestjs-file-storage configuration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tractr/traxion/blob/main/libs/angular/file-storage/src/lib/interfaces/file-storage-configuration.interface.ts"},"@trxn/angular-file-storage configuration"))),(0,a.kt)("p",null,"For more details about registering a dynamic module, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/fundamentals/dynamic-modules"},"NestJS documentation"),"."),(0,a.kt)("h2",{id:"common-use-case"},"Common use case"),(0,a.kt)("p",null,"One of the most common features that may require the use of file storage is authentication and file manipulation permissions. You probably want to grant read or write permissions to certain files based on a set of conditions, but you don't want the files to flow through your backend because that would be too bandwidth intensive."),(0,a.kt)("p",null,"To achieve this, you can use presigned URLs. Presigned URLs are similar to tokens: they have a limited lifetime and are only valid for one type of operation."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For more information on presigned URLs, see the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-presigned-url.html"},"AWS documentation"),".")),(0,a.kt)("p",null,"For example, a user who wants to upload his avatar image to storage would take the following steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The frontend requests a presigned url from the backend. The presigned URL should allow the current user to upload their image to the file storage."),(0,a.kt)("li",{parentName:"ul"},"Once the backend has validated that the user has sufficient permissions, it negotiates a presigned URL with the file storage and sends it back to the frontend."),(0,a.kt)("li",{parentName:"ul"},"The frontend is now able to upload the user's image to the file store by performing a POST to the presigned URL.")),(0,a.kt)("p",null,"In this scenario, the backend is responsible for verifying authentication, permissions, but the responsibility for hosting and serving the files is delegated to the file store."),(0,a.kt)("h3",{id:"upload-a-file-to-the-file-storage-with-a-presigned-url"},"Upload a file to the file storage with a presigned url"),(0,a.kt)("p",null,"As explained earlier, this is one of the most common cases of using a file storage service.\nIf your application does not need to run custom logic when uploading a file to the file store, you can use the pre-built ",(0,a.kt)("inlineCode",{parentName:"p"},"FileStorageController"),".\nSimply import it from ",(0,a.kt)("inlineCode",{parentName:"p"},"@trxn/nestjs-file-storage")," and add it to your ",(0,a.kt)("inlineCode",{parentName:"p"},"app.module.ts"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// file: apps/api/src/app/app.module.ts\n\nimport { \n FileStorageModule, \n FileStorageController \n} from '@trxn/nestjs-file-storage';\n\n@Module({\n  imports: [\n    FileStorageModule.register({\n      accessKey: 'minio',\n      secretKey: 'password',\n      endPoint: 'localhost',\n      port: 9000,\n      useSSL: false,\n      defaultBucket: 'bucket',\n      presignedDownload: {} as PresignedDownloadConfiguration,\n      presignedUpload: {} as PresignedUploadConfiguration,\n    }),\n  ],\n  controllers: [FileStorageController], // FileStorageController is imported here\n})\nexport class AppModule {}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"FileStorageController")," exposes two endpoints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"upload")," endpoint can be used to request an upload presigned URL."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"download")," endpoint can be used to request a download presigned URL.")),(0,a.kt)("p",null,"On the frontend side of your application, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"tractr-file-storage-upload-button")," button component exported from ",(0,a.kt)("inlineCode",{parentName:"p"},"@trxn/angular-file-storage")," to automatically send files uploaded by the users to the file storage."),(0,a.kt)("p",null,"Then you should listen to the ",(0,a.kt)("inlineCode",{parentName:"p"},"uploadResult")," event to get information about the uploaded file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- file: your-angular-component.html --\x3e\n\n<trxn-file-storage-upload-button\n  acceptedFileTypes="image/jpeg,impage/png"\n  sizeLimit="1000"\n  (uploadResult)="handleUploadResult($event)"\n>Upload</trxn-file-storage-upload-button>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// file: your-angular-component.ts\n\nimport { Component, EventEmitter, Output } from '@angular/core';\nimport { FileStorageUploadResult } from '@trxn/angular-file-storage';\n\n@Component({\n  selector: 'app-atom-gallery-photo-selector',\n  templateUrl: './atom-gallery-photo-selector.component.html',\n  styleUrls: ['./atom-gallery-photo-selector.component.less'],\n})\nexport class YourAngularComponent {\n  @Output() photoUploaded = new EventEmitter<FileStorageUploadResult>();\n\n  handleUploadResult(uploadResult: FileStorageUploadResult): void {\n    this.photoUpdated.emit(uploadResult);\n    console.log(uploadResult);\n    /* uploadResult\n    {\n      url: string // Url of the uploaded file\n      mimeType: string // MIME type of the uploaded file\n      size: number // File size (in bits)\n    }\n    */\n  }\n}\n")),(0,a.kt)("p",null,"Under the hood, the ",(0,a.kt)("inlineCode",{parentName:"p"},"trxn-file-storage-upload-button")," uses ",(0,a.kt)("inlineCode",{parentName:"p"},"FileStorageService")," to request a presigned upload url and transfer the file to file storage."),(0,a.kt)("p",null,"If your application requires custom logic on the frontend, the ",(0,a.kt)("inlineCode",{parentName:"p"},"FileStorageService")," can be used directly and exposes methods to request the presigned url and transfer the file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Component } from '@angular/core';\n\nimport { FileStorageService } from '../../services';\n\n@Component({\n  selector: 'custom-upload-button',\n  templateUrl: './custom-upload-button.component.html',\n  styleUrls: ['./custom-upload-button.component.less'],\n})\nexport class UploadButtonComponent {\n  constructor(private fileStorageService: FileStorageService) {}\n\n  /**\n   * Callback to upload file to file storage\n   *\n   * @param item\n   * @returns Observable that resolve as an object\n   * containing, the temporary url of the uploaded file,\n   * its size and MIME type\n   */\n  uploadFileToStorage(file: File) {\n    return this.fileStorageService.uploadFileToFileStorage(file);\n  }\n}\n")),(0,a.kt)("p",null,"On the backend, the default controller simply requests a presigned URL from the file storage. If you have some business logic, you can write your own controller and use the ",(0,a.kt)("inlineCode",{parentName:"p"},"FileStorageService"),"."),(0,a.kt)("p",null,"NestJS controller example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Get, Query } from '@nestjs/common';\n\nimport { \n GetPresignedDownloadUrlQueryDto,\n  GetPresignedUploadUrlQueryDto,\n FileStorageService\n} from '@trxn/nestjs-file-storage';\n\n@Controller('file-storage')\nexport class FileStorageController {\n  constructor(private fileStorageService: FileStorageService) {}\n\n  /**\n   * Get presigned upload url\n   */\n  @Get('upload')\n  getPresignedUploadUrl(@Query() queryDto: GetPresignedUploadUrlQueryDto) {\n\n  // Business logique could be added here or in some nestjs guards\n\n    const { mimeType, fileSize } = queryDto;\n  // Request presigned url to the file storage and returns it\n    return this.fileStorageService.getPresignedUploadUrl(mimeType, fileSize);\n  }\n}\n")),(0,a.kt)("h3",{id:"download-a-file-from-file-storage-with-a-presigned-url"},"Download a file from file storage with a presigned URL"),(0,a.kt)("p",null,"Read access to a file can also be restricted by using presigned URLs for downloading. The mechanism is very similar to the one presented in the upload section."),(0,a.kt)("p",null,"For this example, consider a ",(0,a.kt)("inlineCode",{parentName:"p"},"PrivateImageComponent")," that takes as input the file path on the storage, requests a presigned upload URL, and displays the file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';\nimport { Observable } from 'rxjs';\n\nimport { FileStorageService } from '../../services';\n\n@Component({\n  selector: 'tractr-file-storage-upload-button',\n  templateUrl: './upload-button.component.html',\n  styleUrls: ['./upload-button.component.less'],\n})\nexport class PrivateImageComponent implements OnChanges {\n  /**\n   * Image of the file on the storage (example 'images/1234.png')\n   *\n   */\n  @Input() imagePath!: string;\n\n  /**\n   * Image download url\n   */\n  imageUrl$?: Observable<{ url: string }>;\n\n  constructor(private fileStorageService: FileStorageService) {}\n\n  ngOnChanges({ imagePath }: SimpleChanges) {\n    if (imagePath)\n      this.imageUrl$ = this.fileStorageService.getPresignedDownloadUrl(\n        imagePath.currentValue as string,\n      );\n  }\n}\n")),(0,a.kt)("p",null,"On the backend, run the business logic to verify that the user is authorized to read the file, and then, with the provided ",(0,a.kt)("inlineCode",{parentName:"p"},"FileStorageService"),", negotiate the URL with the file storage."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Controller, Get, Query } from '@nestjs/common';\n\nimport {\n  GetPresignedDownloadUrlQueryDto,\n  GetPresignedUploadUrlQueryDto,\n FileStorageService\n} from '@trxn/nestjs-file-storage';\n\n@Controller('file-storage')\nexport class FileStorageController {\n  constructor(private fileStorageService: FileStorageService) {}\n\n  /**\n   * Get presigned download url\n   */\n  @Get('download')\n  async getPresignedDownloadUrl(\n    @Query() queryDto: GetPresignedDownloadUrlQueryDto,\n  ) {\n\n  // Business logique could be added here or in some nestjs guards\n\n    const { file } = queryDto;\n  // Request presigned url to the file storage and returns it\n    const url = await this.fileStorageService.getPresignedDownloadUrl(file);\n    return { url };\n  }\n}\n")),(0,a.kt)("h2",{id:"temporary-files"},"Temporary files"),(0,a.kt)("p",null,"When uploading files to storage, it is common for a file to be uploaded during a process that may fail or be interrupted. For example, a user could upload their avatar image while creating their account and never complete the account creation."),(0,a.kt)("p",null,'Since file storage solutions do not implement any type of "transaction", we rely on a dedicated folder to store temporary files.'),(0,a.kt)("p",null,"By default, uploaded files are stored in a temporary folder on the storage. Depending on your internal logic, you should move these files to a permanent location when necessary, and periodically clean up this temporary folder."),(0,a.kt)("p",null,"In the avatar example, the avatar image should be moved to a permanent location only when the account creation is completed. This temporary folder should be periodically cleaned up to remove images uploaded by users who have not completed the account creation."),(0,a.kt)("p",null,"The location of the temporary folder can be set when configuring the NestJS ",(0,a.kt)("inlineCode",{parentName:"p"},"FileStorageModule")," with the ",(0,a.kt)("inlineCode",{parentName:"p"},"temporaryPrefix")," option (default is ",(0,a.kt)("inlineCode",{parentName:"p"},"tmp/"),")."),(0,a.kt)("h3",{id:"delivering-temporary-files-to-a-permanent-location"},"Delivering temporary files to a permanent location"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"FileStorageService")," exposes a ",(0,a.kt)("inlineCode",{parentName:"p"},"commitTemporaryFile")," method that moves a file from the temporary folder to a permanent location. Here is an example of a method that would commit a temporary image when a user is created:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { FileStorageService } from '@trxn/nestjs-file-storage';\n\nInjectable()\nexport class UserService {\n \n constructor(private fileStorageService: FileStorageService) {}\n\n async create(user: User) {\n  const avatarImageTempPath = user.avatarUrl;\n  const avatarImageDefinitivePath = `images/${uuid()}.jpg`;\n\n  try {\n   // Move the file out of the temporary folder\n   await this.fileStorageService.commitTemporaryFile(\n    avatarImageTempPath, \n    avatarImageDefinitivePath\n   );\n  } catch (e) {\n   // handle potential errors with the file storage\n  }\n  //...\n  // Save your user with the new avatar path\n }\n}\n")),(0,a.kt)("h3",{id:"delete-expired-temporary-files"},"Delete expired temporary files"),(0,a.kt)("p",null,"By configuring the NestJS ",(0,a.kt)("inlineCode",{parentName:"p"},"FileStorageModule"),", you can provide a ",(0,a.kt)("inlineCode",{parentName:"p"},"temporaryTTL")," option to set the lifetime of temporary files (in seconds, with a default value of 2 hours)."),(0,a.kt)("p",null,"The NestJS ",(0,a.kt)("inlineCode",{parentName:"p"},"FileStorageService")," exposes a ",(0,a.kt)("inlineCode",{parentName:"p"},"pruneTemporaryFiles")," method which will delete all files older than the TTL in the temporary folder."),(0,a.kt)("p",null,"This method should be called periodically (e.g. in a Cron) if you don't want the temporary folder to overflow."),(0,a.kt)("admonition",{title:"Other file manipulations",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The NestJS ",(0,a.kt)("inlineCode",{parentName:"p"},"FileStorageService")," uses the Minio javascript client and extends it, making all the Minio client methods available for custom operations as well. For more information, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://min.io/docs/minio/linux/developers/javascript/API.html"},"Minio documentation"),".")))}g.isMDXComponent=!0},876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var o=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return n?o.createElement(g,i(i({ref:t},d),{},{components:n})):o.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);