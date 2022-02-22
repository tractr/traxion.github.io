"use strict";(self.webpackChunkstack=self.webpackChunkstack||[]).push([[7652],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return n?i.createElement(f,l(l({ref:t},p),{},{components:n})):i.createElement(f,l({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2054:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>s,metadata:()=>c,toc:()=>p,default:()=>d});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),l=["components"],o={id:"eslint",title:"ESLint",sidebar_label:"ESLint"},s=void 0,c={unversionedId:"references/schematics/eslint",id:"references/schematics/eslint",title:"ESLint",description:"You need to install the schamatics packages before you can use this schematic.",source:"@site/docs/references/schematics/eslint.md",sourceDirName:"references/schematics",slug:"/references/schematics/eslint",permalink:"/docs/references/schematics/eslint",editUrl:"https://github.com/tractr/stack/tree/main/apps/docs/docs/references/schematics/eslint.md",tags:[],version:"current",frontMatter:{id:"eslint",title:"ESLint",sidebar_label:"ESLint"},sidebar:"documentation",previous:{title:"Release",permalink:"/docs/references/schematics/release"},next:{title:"Prettier",permalink:"/docs/references/schematics/prettier"}},p=[{value:"Eslint config",id:"eslint-config",children:[{value:"Description",id:"description",children:[],level:3},{value:"Options",id:"options",children:[],level:3}],level:2}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"You need to ",(0,a.kt)("a",{parentName:"p",href:"./how-to"},"install the schamatics packages")," before you can use this schematic."))),(0,a.kt)("h2",{id:"eslint-config"},"Eslint config"),(0,a.kt)("p",null,"Add ESLint and its configuration to a NX project."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"nx g @tractr/schematics:eslint-config\n")),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"Add and configure ESLint ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tractr/stack/tree/main/libs/config/eslint"},(0,a.kt)("inlineCode",{parentName:"a"},"@tractr/eslint-config"))," to a NX project."),(0,a.kt)("p",null,"The following steps will be performed: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Generate the ESLint base configuration from ",(0,a.kt)("inlineCode",{parentName:"li"},"@nrwl/linter")," module."),(0,a.kt)("li",{parentName:"ul"},"Add specific configuration to ",(0,a.kt)("inlineCode",{parentName:"li"},".eslintrc.json")," to set the ",(0,a.kt)("inlineCode",{parentName:"li"},"import/internal-regex")," and the rules of ",(0,a.kt)("inlineCode",{parentName:"li"},"import/no-unresolved")),(0,a.kt)("li",{parentName:"ul"},"Update ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," to add the latest version of ",(0,a.kt)("inlineCode",{parentName:"li"},"@tractr/eslint-config")," and these ESLint packages:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"eslint-config-airbnb-base")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"eslint-config-prettier")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"eslint-import-resolver-alias")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"eslint-import-resolver-typescript")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"eslint-import-resolver-webpack")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"eslint-plugin-cypress")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"eslint-plugin-import")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"eslint-plugin-jest")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"eslint-plugin-json-files"))))),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("p",null,"No options are provided for this package."))}d.isMDXComponent=!0}}]);