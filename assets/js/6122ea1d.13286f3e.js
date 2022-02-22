"use strict";(self.webpackChunkstack=self.webpackChunkstack||[]).push([[7518],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return t?o.createElement(g,i(i({ref:n},c),{},{components:t})):o.createElement(g,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3030:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>p,toc:()=>c,default:()=>d});var o=t(7462),a=t(3366),r=(t(7294),t(3905)),i=["components"],l={id:"upload-a-file-to-aws-s3",title:"Upload a file to AWS S3",sidebar_label:"Upload a file to AWS S3"},s=void 0,p={unversionedId:"how-to/angular/use-cases/upload-a-file-to-aws-s3",id:"how-to/angular/use-cases/upload-a-file-to-aws-s3",title:"Upload a file to AWS S3",description:"Package's author: Maxim Darr\xe9",source:"@site/docs/how-to/angular/use-cases/upload-a-file-to-aws-s3.md",sourceDirName:"how-to/angular/use-cases",slug:"/how-to/angular/use-cases/upload-a-file-to-aws-s3",permalink:"/docs/how-to/angular/use-cases/upload-a-file-to-aws-s3",editUrl:"https://github.com/tractr/stack/tree/main/apps/docs/docs/how-to/angular/use-cases/upload-a-file-to-aws-s3.md",tags:[],version:"current",frontMatter:{id:"upload-a-file-to-aws-s3",title:"Upload a file to AWS S3",sidebar_label:"Upload a file to AWS S3"},sidebar:"documentation",previous:{title:"Create a user profile page",permalink:"/docs/how-to/angular/use-cases/create-a-user-profile-page"},next:{title:"Troubleshooting",permalink:"/docs/how-to/angular/troubleshooting/"}},c=[{value:"Installation",id:"installation",children:[{value:"Synchronous configuration",id:"synchronous-configuration",children:[{value:"Example",id:"example",children:[],level:4}],level:3},{value:"Asynchronous configuration",id:"asynchronous-configuration",children:[],level:3}],level:2},{value:"Description",id:"description",children:[],level:2}],u={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Package's author: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/maxmousse"},"Maxim Darr\xe9")))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"To install the package, run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm i --save @tractr/angular-file-storage"),"."),(0,r.kt)("p",null,"Then, to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"FileStorageService")," in your application, you must import the ",(0,r.kt)("inlineCode",{parentName:"p"},"FileStorageModule")," in the module that needs the ",(0,r.kt)("inlineCode",{parentName:"p"},"FileStorageService"),"."),(0,r.kt)("p",null,"Please note that you should register the module and provide an adequate configuration."),(0,r.kt)("h3",{id:"synchronous-configuration"},"Synchronous configuration"),(0,r.kt)("p",null,"You can call the ",(0,r.kt)("inlineCode",{parentName:"p"},"register")," method with the module configuration."),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"app.module.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Module } from '@nestjs/common';\n\nimport {\n  FileStorageController,\n  FileStorageModule,\n  PresignedDownloadConfiguration,\n  PresignedUploadConfiguration,\n} from '@tractr/nestjs-file-storage';\n\n@Module({\n  imports: [\n    FileStorageModule.registerAsync({\n      useFactory: (defaultConfig) => ({\n        ...defaultConfig,\n        accessKey: 'minio',\n        secretKey: 'password',\n        endPoint: 'localhost',\n        port: 9000,\n        useSSL: false,\n        defaultBucket: 'bucket',\n        presignedDownload: {} as PresignedDownloadConfiguration,\n        presignedUpload: {} as PresignedUploadConfiguration,\n      }),\n    }),\n  ],\n  controllers: [FileStorageController],\n})\nexport class AppModule {}\n")),(0,r.kt)("h3",{id:"asynchronous-configuration"},"Asynchronous configuration"),(0,r.kt)("p",null,"You can call the ",(0,r.kt)("inlineCode",{parentName:"p"},"registerAsync")," method with the module configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Module } from '@nestjs/common';\n\nimport {\n  FileStorageController,\n  FileStorageModule,\n  PresignedDownloadConfiguration,\n  PresignedUploadConfiguration,\n} from '@tractr/nestjs-file-storage';\n\n@Module({\n  imports: [\n    FileStorageModule.registerAsync({\n      useFactory: (defaultConfig) => ({\n        ...defaultConfig,\n        accessKey: 'minio',\n        secretKey: 'password',\n        endPoint: 'localhost',\n        port: 9000,\n        useSSL: false,\n        defaultBucket: 'bucket',\n        presignedDownload: {} as PresignedDownloadConfiguration,\n        presignedUpload: {} as PresignedUploadConfiguration,\n      }),\n    }),\n  ],\n  controllers: [FileStorageController],\n})\nexport class AppModule {}\n")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Coming soon")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This page is under construction."),(0,r.kt)("p",{parentName:"div"},"Join our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.traxion.dev/"},"Discord")," server to get notified when it's ready."))))}d.isMDXComponent=!0}}]);