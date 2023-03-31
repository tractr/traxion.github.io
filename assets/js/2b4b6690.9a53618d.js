"use strict";(self.webpackChunk_trxn_traxion_api=self.webpackChunk_trxn_traxion_api||[]).push([[60],{6284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var a=n(7896),r=n(1461),i=(n(2784),n(876)),o=["components"],l={id:"index",title:"Get started",sidebar_label:"Get started"},s=void 0,d={unversionedId:"get-started/index",id:"get-started/index",title:"Get started",description:"Configuring Traxion",source:"@site/docs/get-started/index.md",sourceDirName:"get-started",slug:"/get-started/",permalink:"/docs/get-started/",draft:!1,editUrl:"https://github.com/tractr/traxion/tree/main/apps/docs/docs/get-started/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Get started",sidebar_label:"Get started"},sidebar:"documentation",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Generated & custom code",permalink:"/docs/get-started/generated-vs-custom-code"}},p={},c=[{value:"Configuring Traxion",id:"configuring-traxion",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Generating a Traxion workspace",id:"generating-a-traxion-workspace",level:2},{value:"Templates details",id:"templates-details",level:3},{value:"Installing dependencies",id:"installing-dependencies",level:2},{value:"Generating code",id:"generating-code",level:2},{value:"Running the modeling GUI",id:"running-the-modeling-gui",level:2},{value:"Updating the code",id:"updating-the-code",level:2}],u={toc:c},m="wrapper";function g(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"configuring-traxion"},"Configuring Traxion"),(0,i.kt)("p",null,"Traxion is a tool that allows you to generate a lot of code based on your modeling. This guide will show you how to set up Traxion in an Nx@14 workspace."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")," and ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npm")," installed on your computer."),(0,i.kt)("li",{parentName:"ul"},"Basic knowledge of command line commands."),(0,i.kt)("li",{parentName:"ul"},"Familiarity with ",(0,i.kt)("a",{parentName:"li",href:"https://nestjs.com/"},"Nest.js"),", ",(0,i.kt)("a",{parentName:"li",href:"https://www.prisma.io/"},"Prisma")," and ",(0,i.kt)("a",{parentName:"li",href:"https://angular.io/"},"Angular")," is recommended, as Traxion is built on top of it.")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"To create a new Nx@14 workspace and install Traxion, run the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-nx-workspace@14 my-workspace\ncd my-workspace\nnpm install --save-dev @trxn/schematics\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This package hosts all schematics used to setup Traxion in an NX Workspace.")),(0,i.kt)("h2",{id:"generating-a-traxion-workspace"},"Generating a Traxion workspace"),(0,i.kt)("p",null,"To generate a Traxion workspace, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"nx generate @trxn/schematics:traxion-workspace\n")),(0,i.kt)("p",null,"This command will create the necessary files and folders for a Traxion workspace."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"To get more information about this schematic, please refer to")),(0,i.kt)("h3",{id:"templates-details"},"Templates details"),(0,i.kt)("p",null,"This schematic installs and configures the following default libraries to provide the following functionalities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rext-client")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"angular-rext-client"),": These libraries enable the creation, reading, updating, deleting, finding, and counting of routes for each template using an HTTP client and its Angular wrapper built with RxJS."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"models"),": These TypeScript classes represent the data models."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"casl"),": This library controls access to data models on the server-side."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nestjs-models"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"nestjs-models-common"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"nestjs-models-rest"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"nestjs-graphql"),": These NestJS models, services, and controllers support both REST and GraphQL."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rest-dtos"),": This library generates ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Data_transfer_object"},"DTO")," for each data model."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"react-admin"),": This library generates the configuration of ",(0,i.kt)("a",{parentName:"li",href:"https://marmelab.com/react-admin/"},"ReactAdmin")," based on the data models.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"To get more information about this schematic, please refer to ")),(0,i.kt)("h2",{id:"installing-dependencies"},"Installing dependencies"),(0,i.kt)("p",null,"To install the necessary dependencies, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,i.kt)("p",null,"Note that using the --force option may be necessary for version 14"),(0,i.kt)("h2",{id:"generating-code"},"Generating code"),(0,i.kt)("p",null,"To generate the code, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run generate\n")),(0,i.kt)("h2",{id:"running-the-modeling-gui"},"Running the modeling GUI"),(0,i.kt)("p",null,"To open the modeling GUI, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run hpf\n")),(0,i.kt)("p",null,"This command will open the modeling GUI on localhost:4800, where you can update your modeling."),(0,i.kt)("h2",{id:"updating-the-code"},"Updating the code"),(0,i.kt)("p",null,"To update the code, repeat steps npm run generate."),(0,i.kt)("p",null,"Note: These steps may vary slightly depending on the configuration of your project and your needs. Be sure to consult the documentation of each tool used for more detailed information."),(0,i.kt)("p",null,"With these steps, you should have a working Traxion setup in your Nx@14 workspace. You can now use Traxion to generate code based on your modeling. For more information on using Traxion, please"))}g.isMDXComponent=!0},876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);