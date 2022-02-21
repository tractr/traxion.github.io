"use strict";(self.webpackChunkstack=self.webpackChunkstack||[]).push([[123],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=c(r),u=n,m=f["".concat(s,".").concat(u)]||f[u]||d[u]||o;return r?a.createElement(m,p(p({ref:t},l),{},{components:r})):a.createElement(m,p({ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8008:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>c,toc:()=>l,default:()=>f});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),p=["components"],i={id:"terraform",title:"New application - Terraform",sidebar_label:"Terraform"},s=void 0,c={unversionedId:"get-started/step-by-step/apps/terraform",id:"get-started/step-by-step/apps/terraform",title:"New application - Terraform",description:"Create the Terraform application",source:"@site/docs/get-started/step-by-step/apps/terraform.md",sourceDirName:"get-started/step-by-step/apps",slug:"/get-started/step-by-step/apps/terraform",permalink:"/docs/get-started/step-by-step/apps/terraform",editUrl:"https://github.com/tractr/stack/tree/main/apps/docs/docs/get-started/step-by-step/apps/terraform.md",tags:[],version:"current",frontMatter:{id:"terraform",title:"New application - Terraform",sidebar_label:"Terraform"},sidebar:"documentation",previous:{title:"Admin",permalink:"/docs/get-started/step-by-step/apps/admin"},next:{title:"Docusaurus",permalink:"/docs/get-started/step-by-step/apps/docusaurus"}},l=[{value:"Create the Terraform application",id:"create-the-terraform-application",children:[{value:"Ignore paths",id:"ignore-paths",children:[],level:3}],level:2},{value:"Add scripts to run Terraform",id:"add-scripts-to-run-terraform",children:[],level:2},{value:"Applications detection based on Dockerfiles",id:"applications-detection-based-on-dockerfiles",children:[],level:2}],d={toc:l};function f(e){var t=e.components,r=(0,n.Z)(e,p);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"create-the-terraform-application"},"Create the Terraform application"),(0,o.kt)("h3",{id:"ignore-paths"},"Ignore paths"),(0,o.kt)("p",null,"Add these lines to the ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ignore"},"terraform.tfstate*\n")),(0,o.kt)("h2",{id:"add-scripts-to-run-terraform"},"Add scripts to run Terraform"),(0,o.kt)("h2",{id:"applications-detection-based-on-dockerfiles"},"Applications detection based on Dockerfiles"))}f.isMDXComponent=!0}}]);