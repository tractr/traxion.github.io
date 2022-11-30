"use strict";(self.webpackChunktraxion=self.webpackChunktraxion||[]).push([[3461],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),l=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(f,i(i({ref:t},s),{},{components:n})):o.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],c={id:"index",title:"Add Docusaurus to your project",sidebar_label:"Add Docusaurus"},u=void 0,l={unversionedId:"how-to/documentation/index",id:"how-to/documentation/index",title:"Add Docusaurus to your project",description:"Create a documentation",source:"@site/docs/how-to/documentation/index.md",sourceDirName:"how-to/documentation",slug:"/how-to/documentation/",permalink:"/traxion.github.io/docs/how-to/documentation/",draft:!1,editUrl:"https://github.com/tractr/traxion/tree/main/apps/docs/docs/how-to/documentation/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Add Docusaurus to your project",sidebar_label:"Add Docusaurus"},sidebar:"documentation",previous:{title:"Troubleshooting",permalink:"/traxion.github.io/docs/how-to/workspace/troubleshooting/"},next:{title:"Configuration",permalink:"/traxion.github.io/docs/how-to/documentation/configuration/"}},s={},p=[{value:"Create a documentation",id:"create-a-documentation",level:2},{value:"Install packages",id:"install-packages",level:3},{value:"Usage",id:"usage",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"create-a-documentation"},"Create a documentation"),(0,a.kt)("p",null,"Docusaurus is a static documentation generator from markdown files."),(0,a.kt)("h3",{id:"install-packages"},"Install packages"),(0,a.kt)("p",null,"Run the following command to install docusaurus packages:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -D @nx-plus/docusaurus\n")),(0,a.kt)("p",null,"Generate a docusaurus application, run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"nx g @nx-plus/docusaurus:app docs\n")),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Run the following command to start the development server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"nx serve docs\n")),(0,a.kt)("admonition",{title:"Troubleshooting",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If an error occurs, it may be a webpack problem. Try to install ",(0,a.kt)("inlineCode",{parentName:"p"},"npm i -D webpack@5"),".")))}m.isMDXComponent=!0}}]);