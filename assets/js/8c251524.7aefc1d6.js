"use strict";(self.webpackChunkstack=self.webpackChunkstack||[]).push([[2996],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3265:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=n(3117),o=n(102),r=(n(7294),n(3905)),i=["components"],s={id:"manage-file-storage-with-aws-s3",title:"Manage file storage with AWS S3",sidebar_label:"Manage file storage with AWS S3"},l=void 0,c={unversionedId:"how-to/nestjs/use-cases/manage-file-storage-with-aws-s3",id:"how-to/nestjs/use-cases/manage-file-storage-with-aws-s3",title:"Manage file storage with AWS S3",description:"Package's author: Maxim Darr\xe9",source:"@site/docs/how-to/nestjs/use-cases/manage-file-storage-with-aws-s3.md",sourceDirName:"how-to/nestjs/use-cases",slug:"/how-to/nestjs/use-cases/manage-file-storage-with-aws-s3",permalink:"/traxion.github.io/docs/how-to/nestjs/use-cases/manage-file-storage-with-aws-s3",draft:!1,editUrl:"https://github.com/tractr/stack/tree/main/apps/docs/docs/how-to/nestjs/use-cases/manage-file-storage-with-aws-s3.md",tags:[],version:"current",frontMatter:{id:"manage-file-storage-with-aws-s3",title:"Manage file storage with AWS S3",sidebar_label:"Manage file storage with AWS S3"},sidebar:"documentation",previous:{title:"Override validation for a generated route",permalink:"/traxion.github.io/docs/how-to/nestjs/use-cases/override-validation-for-a-generated-route"},next:{title:"Troubleshooting",permalink:"/traxion.github.io/docs/how-to/nestjs/troubleshooting/"}},p={},u=[{value:"Installation",id:"installation",level:2},{value:"Synchronous configuration",id:"synchronous-configuration",level:3},{value:"Example",id:"example",level:4},{value:"Asynchronous configuration",id:"asynchronous-configuration",level:3},{value:"Example",id:"example-1",level:4},{value:"Description",id:"description",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Package's author: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/maxmousse"},"Maxim Darr\xe9")))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"To install the package, run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm i --save @tractr/nestjs-file-storage"),"."),(0,r.kt)("p",null,"Then, to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"FileStorageService")," in your application, you must import the ",(0,r.kt)("inlineCode",{parentName:"p"},"FileStorageModule")," in the module that needs the ",(0,r.kt)("inlineCode",{parentName:"p"},"FileStorageService"),"."),(0,r.kt)("p",null,"Please note that you should register the module and provide an adequate configuration."),(0,r.kt)("h3",{id:"synchronous-configuration"},"Synchronous configuration"),(0,r.kt)("p",null,"If the configuration is accessible without an asynchronous operation, you can call the ",(0,r.kt)("inlineCode",{parentName:"p"},"register")," method with the module configuration."),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"app.module.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Module } from '@nestjs/common';\n\nimport {\n  FileStorageController,\n  FileStorageModule,\n  PresignedDownloadConfiguration,\n  PresignedUploadConfiguration,\n} from '@tractr/nestjs-file-storage';\n\n@Module({\n  imports: [\n    FileStorageModule.register({\n      accessKey: 'minio',\n      secretKey: 'password',\n      endPoint: 'localhost',\n      port: 9000,\n      useSSL: false,\n      defaultBucket: 'bucket',\n      presignedDownload: {} as PresignedDownloadConfiguration,\n      presignedUpload: {} as PresignedUploadConfiguration,\n    }),\n  ],\n  controllers: [FileStorageController],\n})\nexport class AppModule {}\n")),(0,r.kt)("h3",{id:"asynchronous-configuration"},"Asynchronous configuration"),(0,r.kt)("p",null,"If you need to wait for an asynchronous operation to access the file storage configuration (a http call or another service instantiation), you can call the ",(0,r.kt)("inlineCode",{parentName:"p"},"registerAsync"),"."),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"app.module.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Module } from '@nestjs/common';\n\nimport {\n  FileStorageController,\n  FileStorageModule,\n  PresignedDownloadConfiguration,\n  PresignedUploadConfiguration,\n} from '@tractr/nestjs-file-storage';\n\n@Module({\n  imports: [\n    FileStorageModule.registerAsync({\n      useFactory: (defaultConfig) => ({\n        ...defaultConfig,\n        accessKey: 'minio',\n        secretKey: 'password',\n        endPoint: 'localhost',\n        port: 9000,\n        useSSL: false,\n        defaultBucket: 'bucket',\n        presignedDownload: {} as PresignedDownloadConfiguration,\n        presignedUpload: {} as PresignedUploadConfiguration,\n      }),\n    }),\n  ],\n  controllers: [FileStorageController],\n})\nexport class AppModule {}\n")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Coming soon")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This page is under construction."),(0,r.kt)("p",{parentName:"div"},"Join our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.traxion.dev/"},"Discord")," server to get notified when it's ready."))))}m.isMDXComponent=!0}}]);