"use strict";(self.webpackChunkstack=self.webpackChunkstack||[]).push([[5690],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},l),{},{components:n})):a.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4150:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>c,metadata:()=>p,toc:()=>l,default:()=>u});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"index",title:"Configuration",sidebar_label:"Configuration"},c=void 0,p={unversionedId:"how-to/database/configuration/index",id:"how-to/database/configuration/index",title:"Configuration",description:"This page is under construction.",source:"@site/docs/how-to/database/configuration/index.md",sourceDirName:"how-to/database/configuration",slug:"/how-to/database/configuration/",permalink:"/docs/how-to/database/configuration/",editUrl:"https://github.com/tractr/stack/tree/main/apps/docs/docs/how-to/database/configuration/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Configuration",sidebar_label:"Configuration"},sidebar:"documentation",previous:{title:"Database",permalink:"/docs/how-to/database/"},next:{title:"Browse Data",permalink:"/docs/how-to/database/use-cases/browse-data-with-prisma-studio"}},l=[{value:"Install",id:"install",children:[],level:2},{value:"Description",id:"description",children:[{value:"Usage",id:"usage",children:[],level:3}],level:2}],d={toc:l};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Coming soon")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This page is under construction."),(0,o.kt)("p",{parentName:"div"},"Join our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.traxion.dev/"},"Discord")," server to get notified when it's ready."))),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"npm i --save-dev @tractr/hapify-templates-prisma")),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"This package contains the hapify templates to generate Prisma database schema."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("p",null,"In your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "name": "my-library",\n  "version": "1.0.0",\n  "hapify": { "extends": ["@tractr/hapify-templates-prisma"] }\n}\n')),(0,o.kt)("p",null,"If you would like to extend or modify these properties, create a ",(0,o.kt)("inlineCode",{parentName:"p"},".hapifyrc.js"),"\nfile in your projects root directory and export your desired modifications."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  extends: ['hapify-templates-prisma'],\n};\n")),(0,o.kt)("p",null,"Or you can create a ",(0,o.kt)("inlineCode",{parentName:"p"},".hapifyrc.json")," file in your projects root directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"{ \"extends\": [ '@tractr/hapify-templates-prisma' ] }\n")))}u.isMDXComponent=!0}}]);