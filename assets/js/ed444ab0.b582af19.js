/*! For license information please see ed444ab0.b582af19.js.LICENSE.txt */
"use strict";(self.webpackChunk_trxn_traxion_api=self.webpackChunk_trxn_traxion_api||[]).push([[628],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=l(n),f=o,m=c["".concat(u,".").concat(f)]||c[f]||d[f]||a;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2023:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>k,frontMatter:()=>c,metadata:()=>f,toc:()=>y});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=(n(2784),["components"]),i={toc:[{value:"Installation",id:"installation",level:2},{value:"Getting Started",id:"getting-started",level:2}]},u="wrapper";function l(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)(u,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"user-module"},"User Module"),(0,a.kt)("p",null,"The nestjs-user module is a wrapper module around the UserService that will be used\nin another ",(0,a.kt)("inlineCode",{parentName:"p"},"@trxn/nestjs-")," user based packages. This module ask you to provide a\nUserService that need to implement an interface to be used to fetch and update a user"),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"You can install the nestjs-user module using npm:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @trxn/nestjs-user\n")),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"In your workspace create you own UserModule that will import, configure and export\nyour own UserModule:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Module } from '@nestjs/common';\nimport { UserModule as TraxionUserModule } from '@trxn/nestjs-user';\n\n@Module({\n  imports: [\n    TraxionUserModule.register({\n      UserService: {\n        provide: USER_SERVICE, \n        useClass: UserService, // Provide a class that implement UserService interface\n      }\n    }),\n  ],\n  exports: [TraxionUserModule],\n})\nexport class UserModule {}\n")),(0,a.kt)("p",null,"The interface to respect is the following one:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export type User = {\n  [key: string]: unknown;\n};\n\nexport type MinimalUser = User & {\n  id: UserId;\n  email: string;\n  password: string;\n};\n\nexport interface UserOrmService {\n  findUnique<U extends User = MinimalUser>(params: {\n    where: {\n      id?: UserId;\n      [key: string]: unknown;\n    };\n    select?: {\n      [key: string]: unknown;\n    };\n  }): Promise<U | null>;\n\n  update<U extends User = MinimalUser>(params: {\n    where: {\n      id?: UserId;\n      [key: string]: unknown;\n    };\n    data?: {\n      [key: string]: unknown;\n    };\n  }): Promise<U>;\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"UserService")," module options respect the ",(0,a.kt)("inlineCode",{parentName:"p"},"Provider")," type from ",(0,a.kt)("inlineCode",{parentName:"p"},"@nestjs/common")," so you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"useFactory"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"useFactory")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"useExisting"),"."),(0,a.kt)("p",null,"For the last one to use ",(0,a.kt)("inlineCode",{parentName:"p"},"useExisting")," you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"imports")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"providers")," module options to add to the ",(0,a.kt)("inlineCode",{parentName:"p"},"TraxionUserModule")," the existing provider. If the imports module export a ",(0,a.kt)("inlineCode",{parentName:"p"},"USER_SERVICE")," token you are not required to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"UserService")," module option. Let's take an exemple:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@Module({\n  providers: {\n    provide: USER_SERVICE,\n    useClass: MyOwnUserOrmService, // Implement UserOrmService interface\n  },\n  exports: [USER_SERVICE],\n})\nexport class ModelsModule {}\n\n@Module({\n  imports: [\n    TraxionUserModule.register({\n      imports: [ModelsModule], // Import your module with the USER_SERVICE token exported\n      \n      // You can also import your provider directly:\n      providers: [{\n        provide: USER_SERVICE,\n        useClass: MyOwnUserOrmService, // Implement UserOrmService interface\n      }]\n    }),\n  ],\n  exports: [TraxionUserModule],\n})\nexport class UserModule {}\n")))}l.isMDXComponent=!0;var p=["components"],c={id:"use-nestjs-user",hide_title:!0,sidebar_label:"The user module"},d=void 0,f={unversionedId:"how-to/authentication/use-nestjs-user",id:"how-to/authentication/use-nestjs-user",title:"use-nestjs-user",description:"",source:"@site/docs/how-to/authentication/0-use-nestjs-user.mdx",sourceDirName:"how-to/authentication",slug:"/how-to/authentication/use-nestjs-user",permalink:"/docs/how-to/authentication/use-nestjs-user",draft:!1,editUrl:"https://github.com/tractr/traxion/tree/main/apps/docs/docs/how-to/authentication/0-use-nestjs-user.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"use-nestjs-user",hide_title:!0,sidebar_label:"The user module"},sidebar:"documentation",previous:{title:"Database migration",permalink:"/docs/how-to/database/database-migration-with-prisma"},next:{title:"Authenticate your routes",permalink:"/docs/how-to/authentication/use-nestjs-authentication"}},m={},y=[],h={toc:y},v="wrapper";function k(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)(v,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l,{mdxType:"SourceMarkdown"}))}k.isMDXComponent=!0},3426:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),u=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),c=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,h={};function v(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||m}function k(){}function b(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||m}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=v.prototype;var g=b.prototype=new k;g.constructor=b,y(g,v.prototype),g.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,x={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,r){var o,a={},s=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)S.call(t,o)&&!U.hasOwnProperty(o)&&(a[o]=t[o]);var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){for(var l=Array(u),p=0;p<u;p++)l[p]=arguments[p+2];a.children=l}if(e&&e.defaultProps)for(o in u=e.defaultProps)void 0===a[o]&&(a[o]=u[o]);return{$$typeof:n,type:e,key:s,ref:i,props:a,_owner:x.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var _=/\/+/g;function M(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,o,a,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0}}if(u)return s=s(u=e),e=""===a?"."+M(u,0):a,w(s)?(o="",null!=e&&(o=e.replace(_,"$&/")+"/"),C(s,t,o,"",(function(e){return e}))):null!=s&&(O(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(_,"$&/")+"/")+e)),t.push(s)),1;if(u=0,a=""===a?".":a+":",w(e))for(var l=0;l<e.length;l++){var p=a+M(i=e[l],l);u+=C(i,t,o,p,s)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),l=0;!(i=e.next()).done;)u+=C(i=i.value,t,o,p=a+M(i,l++),s);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function E(e,t,n){if(null==e)return e;var r=[],o=0;return C(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function N(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},T={transition:null}},2784:(e,t,n)=>{n(3426)}}]);