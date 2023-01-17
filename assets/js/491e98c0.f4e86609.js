/*! For license information please see 491e98c0.f4e86609.js.LICENSE.txt */
"use strict";(self.webpackChunk_trxn_traxion_api=self.webpackChunk_trxn_traxion_api||[]).push([[142],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,d=u["".concat(p,".").concat(m)]||u[m]||f[m]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},825:(e,t,r)=>{r.d(t,{ZP:()=>p});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={toc:[]};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"You need to ",(0,o.kt)("a",{parentName:"p",href:"/docs/references/schematics/how-to"},"install the schematics packages")," before\nyou can use this schematic.")))}p.isMDXComponent=!0},4998:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>f,default:()=>b,frontMatter:()=>u,metadata:()=>m,toc:()=>y});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=r(825),l=(r(2784),["components"]),p={toc:[{value:"Description",id:"description",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Options",id:"options",level:2}]};function s(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"npm-publish"},"NPM publish"),(0,o.kt)("p",null,"Add npm publish configuration to a NX project"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"nx g @trxn/schematics:npm-publish <nxProjectName> <repositoryUrl>\n")),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Add configuration of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bikecoders/ngx-deploy-npm"},(0,o.kt)("inlineCode",{parentName:"a"},"ngx-deploy-npm"))," to a NX project."),(0,o.kt)("p",null,"The following steps will be performed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Update ",(0,o.kt)("inlineCode",{parentName:"li"},"workspace.json")," to add ",(0,o.kt)("inlineCode",{parentName:"li"},"targets.publish")," to the ",(0,o.kt)("inlineCode",{parentName:"li"},"project")),(0,o.kt)("li",{parentName:"ul"},"Update ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," to add the latest version of ",(0,o.kt)("inlineCode",{parentName:"li"},"ngx-deploy-npm")),(0,o.kt)("li",{parentName:"ul"},"Update ",(0,o.kt)("inlineCode",{parentName:"li"},"<projectPath>/package.json")," to add ",(0,o.kt)("inlineCode",{parentName:"li"},"repository")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"publishConfig")," options")),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Argument"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<nxProjectName>")),(0,o.kt)("td",{parentName:"tr",align:null},"The NX project name")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<repositoryUrl>")),(0,o.kt)("td",{parentName:"tr",align:null},"The git url used to host the workspace")))),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Option"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--registry [registryUrl]")),(0,o.kt)("td",{parentName:"tr",align:null},"The NPM registry url used to push the package (default to: ",(0,o.kt)("inlineCode",{parentName:"td"},"https://registry.npmjs.org"),").",(0,o.kt)("br",null)," Alias: ",(0,o.kt)("inlineCode",{parentName:"td"},"-r"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--access [access]")),(0,o.kt)("td",{parentName:"tr",align:null},"The npm publish access level: ",(0,o.kt)("inlineCode",{parentName:"td"},"public")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"retricted")," (default to: ",(0,o.kt)("inlineCode",{parentName:"td"},"restricted"),").")))))}s.isMDXComponent=!0;var c=["components"],u={id:"npm-publish",hide_title:!0,sidebar_label:"NPM Publish"},f=void 0,m={unversionedId:"references/schematics/npm-publish",id:"references/schematics/npm-publish",title:"npm-publish",description:"",source:"@site/docs/references/schematics/npm-publish.mdx",sourceDirName:"references/schematics",slug:"/references/schematics/npm-publish",permalink:"/docs/references/schematics/npm-publish",draft:!1,editUrl:"https://github.com/tractr/traxion/tree/main/apps/docs/docs/references/schematics/npm-publish.mdx",tags:[],version:"current",frontMatter:{id:"npm-publish",hide_title:!0,sidebar_label:"NPM Publish"},sidebar:"documentation",previous:{title:"Hapify Library",permalink:"/docs/references/schematics/hapify-library"},next:{title:"Prettier Config",permalink:"/docs/references/schematics/prettier-config"}},d={},y=[],h={toc:y};function b(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.ZP,{mdxType:"Warning"}),(0,o.kt)(s,{mdxType:"SourceMarkdown"}))}b.isMDXComponent=!0},3426:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),p=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),m=Symbol.iterator;var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,h={};function b(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||d}function k(){}function g(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||d}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=b.prototype;var v=g.prototype=new k;v.constructor=g,y(v,b.prototype),v.isPureReactComponent=!0;var N=Array.isArray,j=Object.prototype.hasOwnProperty,w={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,n){var a,o={},i=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)j.call(t,a)&&!O.hasOwnProperty(a)&&(o[a]=t[a]);var p=arguments.length-2;if(1===p)o.children=n;else if(1<p){for(var s=Array(p),c=0;c<p;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(a in p=e.defaultProps)void 0===o[a]&&(o[a]=p[a]);return{$$typeof:r,type:e,key:i,ref:l,props:o,_owner:w.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var C=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,a,o,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var p=!1;if(null===e)p=!0;else switch(l){case"string":case"number":p=!0;break;case"object":switch(e.$$typeof){case r:case n:p=!0}}if(p)return i=i(p=e),e=""===o?"."+P(p,0):o,N(i)?(a="",null!=e&&(a=e.replace(C,"$&/")+"/"),S(i,t,a,"",(function(e){return e}))):null!=i&&(x(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,a+(!i.key||p&&p.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(p=0,o=""===o?".":o+":",N(e))for(var s=0;s<e.length;s++){var c=o+P(l=e[s],s);p+=S(l,t,a,c,i)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),s=0;!(l=e.next()).done;)p+=S(l=l.value,t,a,c=o+P(l,s++),i);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return p}function T(e,t,r){if(null==e)return e;var n=[],a=0;return S(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function D(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var M={current:null},E={transition:null}},2784:(e,t,r)=>{r(3426)}}]);