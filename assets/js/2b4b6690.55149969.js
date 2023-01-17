"use strict";(self.webpackChunk_trxn_traxion_api=self.webpackChunk_trxn_traxion_api||[]).push([[60],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),h=i,u=d["".concat(s,".").concat(h)]||d[h]||m[h]||r;return a?n.createElement(u,l(l({ref:t},c),{},{components:a})):n.createElement(u,l({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8661:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),l=["components"],o={id:"index",title:"Get started",sidebar_label:"Get started"},s=void 0,p={unversionedId:"get-started/index",id:"get-started/index",title:"Get started",description:"Pre-requisites",source:"@site/docs/get-started/index.md",sourceDirName:"get-started",slug:"/get-started/",permalink:"/docs/get-started/",draft:!1,editUrl:"https://github.com/tractr/traxion/tree/main/apps/docs/docs/get-started/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Get started",sidebar_label:"Get started"},sidebar:"documentation",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Generated & custom code",permalink:"/docs/get-started/generated-vs-custom-code"}},c={},d=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Create the workspace",id:"create-the-workspace",level:2},{value:"Create a new NX Workspace",id:"create-a-new-nx-workspace",level:3},{value:"Install Traxion&#39;s schematics",id:"install-traxions-schematics",level:3},{value:"Initialise the workspace",id:"initialise-the-workspace",level:3},{value:"Configure workspace",id:"configure-workspace",level:2},{value:"Configure ESLint",id:"configure-eslint",level:3},{value:"Configure Prettier",id:"configure-prettier",level:3},{value:"Setup Hapify and data models",id:"setup-hapify-and-data-models",level:2},{value:"Install Hapify templates",id:"install-hapify-templates",level:3},{value:"Templates details",id:"templates-details",level:4},{value:"Generate the libraries",id:"generate-the-libraries",level:3},{value:"Browse and edit data models",id:"browse-and-edit-data-models",level:3},{value:"Generate the applications",id:"generate-the-applications",level:2},{value:"Generate the API application",id:"generate-the-api-application",level:3},{value:"Generate the PWA application",id:"generate-the-pwa-application",level:3},{value:"Generate the Admin application",id:"generate-the-admin-application",level:3},{value:"Start the applications",id:"start-the-applications",level:2},{value:"Start the database",id:"start-the-database",level:3},{value:"Old",id:"old",level:2}],m={toc:d};function h(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("p",null,"Traxion is based on NX and its CLI. You need this ",(0,r.kt)("inlineCode",{parentName:"p"},"nx")," CLI to be installed globally before starting."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -g nx\n")),(0,r.kt)("h2",{id:"create-the-workspace"},"Create the workspace"),(0,r.kt)("h3",{id:"create-a-new-nx-workspace"},"Create a new NX Workspace"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx create-nx-workspace my-project --preset apps --nxCloud false\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This command will create a new NX Workspace with the following architecture :"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"my-project\n\u251c\u2500\u2500 .editorconfig\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 .prettierignore\n\u251c\u2500\u2500 .prettierrc\n\u251c\u2500\u2500 .vscode\n\u2502\xa0\xa0 \u2514\u2500\u2500 extensions.json\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 apps\n\u2502\xa0\xa0 \u2514\u2500\u2500 .gitkeep\n\u251c\u2500\u2500 libs\n\u2502\xa0\xa0 \u2514\u2500\u2500 .gitkeep\n\u251c\u2500\u2500 nx.json\n\u251c\u2500\u2500 package-lock.json\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 tools\n\u2502\xa0\xa0 \u251c\u2500\u2500 generators\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 .gitkeep\n\u2502\xa0\xa0 \u2514\u2500\u2500 tsconfig.tools.json\n\u251c\u2500\u2500 tsconfig.base.json\n\u2514\u2500\u2500 workspace.json\n"))),(0,r.kt)("h3",{id:"install-traxions-schematics"},"Install Traxion's schematics"),(0,r.kt)("p",null,"Browse to the new folder :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd my-project\n")),(0,r.kt)("p",null,"Then, install the Traxion's schematics package:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev @tractr/schematics\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This package hosts all schematics used to setup Traxion in an NX Workspace.")),(0,r.kt)("h3",{id:"initialise-the-workspace"},"Initialise the workspace"),(0,r.kt)("p",null,"Run the ",(0,r.kt)("inlineCode",{parentName:"p"},"init-workspace")," schematic :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"nx generate @tractr/schematics:init-workspace\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To get more information about this schematic, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/references/schematics/traxion-workspace"},"this page"))),(0,r.kt)("h2",{id:"configure-workspace"},"Configure workspace"),(0,r.kt)("h3",{id:"configure-eslint"},"Configure ESLint"),(0,r.kt)("p",null,"Run the ",(0,r.kt)("inlineCode",{parentName:"p"},"eslint-config")," schematic :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"nx generate @tractr/schematics:eslint-config\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To get more information about this schematic, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/references/schematics/eslint-config"},"this page"))),(0,r.kt)("h3",{id:"configure-prettier"},"Configure Prettier"),(0,r.kt)("p",null,"Run the ",(0,r.kt)("inlineCode",{parentName:"p"},"prettier-config")," schematic :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"nx generate @tractr/schematics:prettier-config\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To get more information about this schematic, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/references/schematics/prettier-config"},"this page"))),(0,r.kt)("h2",{id:"setup-hapify-and-data-models"},"Setup Hapify and data models"),(0,r.kt)("h3",{id:"install-hapify-templates"},"Install Hapify templates"),(0,r.kt)("p",null,"Generated libraries are based on ",(0,r.kt)("a",{parentName:"p",href:"https://docs.hapify.io/"},"Hapify")," templates.\nThese libraries host the code related to the data models of your projects."),(0,r.kt)("p",null,"This schematic will install them :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"nx generate @tractr/schematics:hapify-library --directory generated\n")),(0,r.kt)("p",null,"Then choose the library to install :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"? Which template your library will host? \u2026\n\u276f angular-rext-client\n  casl\n  dbml\n  models\n  nestjs-models\n  nestjs-graphql\n  nestjs-models-common\n  nestjs-models-rest\n  react-admin\n  rest-dtos\n  rext-client\n")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"You have to run this schematic for each library.")),(0,r.kt)("h4",{id:"templates-details"},"Templates details"),(0,r.kt)("p",null,"Here is the functionality of each of these libraries:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rext-client")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"angular-rext-client"),": Provides an HTTP client and its angular wrapper, built with RxJS, for Create, Read, Update, Delete, Find & Count routes for each template."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"models"),": TypeScript classes that represent the data models."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"casl"),": Manages access to data models on the server-side."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nestjs-models"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"nestjs-models-common"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"nestjs-models-rest")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"nestjs-graphql"),": NestJS models, services, and controllers, for REST and GraphQL."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rest-dtos"),": Creates ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Data_transfer_object"},"DTO")," for each data model."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"react-admin"),": Generates configuration of ",(0,r.kt)("a",{parentName:"li",href:"https://marmelab.com/react-admin/"},"ReactAdmin"),", based on data models."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dbml"),": Generates a description of the data models in ",(0,r.kt)("a",{parentName:"li",href:"https://www.dbml.org/"},"DBML"),", so you can use it with other tools.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To get more information about this schematic, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/references/schematics/hapify-library"},"this page"))),(0,r.kt)("h3",{id:"generate-the-libraries"},"Generate the libraries"),(0,r.kt)("p",null,"Use the following command to generate the code based on the data models and the templates added before:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm run generate\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This command has been added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," by the previous schematics")),(0,r.kt)("h3",{id:"browse-and-edit-data-models"},"Browse and edit data models"),(0,r.kt)("p",null,"To open the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.hapify.io/getting-started/existing-boilerplate/step-2-edit-models/"},"Hapify GUI"),", run this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm run hpf:serve\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"After editing the models, you need to run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run generate")," in order to regenerate the code")),(0,r.kt)("h2",{id:"generate-the-applications"},"Generate the applications"),(0,r.kt)("h3",{id:"generate-the-api-application"},"Generate the API application"),(0,r.kt)("p",null,"This will create a server based on NestJS."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"nx generate @tractr/schematics:api-app\n")),(0,r.kt)("p",null,"For example, use this option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u2714 What name would you like to use? \xb7 api\n")),(0,r.kt)("h3",{id:"generate-the-pwa-application"},"Generate the PWA application"),(0,r.kt)("p",null,"This is the front-end for end-users."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"nx generate @tractr/schematics:pwa-app\n")),(0,r.kt)("p",null,"For example, use this option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u2714 What name would you like to use? \xb7 pwa\n")),(0,r.kt)("h3",{id:"generate-the-admin-application"},"Generate the Admin application"),(0,r.kt)("p",null,"This is the front-end for super-admins."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"nx generate @tractr/schematics:admin-app\n")),(0,r.kt)("p",null,"Use the following options. Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"my-project")," by the project name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u2714 What name would you like to use? \xb7 admin\n\u2714 What is the path of the react admin library? \xb7 @my-project/generated-react-admin\n\u2714 What is the path of the rext client library? \xb7 @my-rpoject/generated-rext-client\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"At this point you have 3 applications ready to be started.")),(0,r.kt)("h2",{id:"start-the-applications"},"Start the applications"),(0,r.kt)("h3",{id:"start-the-database"},"Start the database"),(0,r.kt)("p",null,"During the ",(0,r.kt)("inlineCode",{parentName:"p"},"@tractr/schematics:init-workspace")," schematic, a ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file and a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file were created."),(0,r.kt)("p",null,"These files allow to start a ",(0,r.kt)("inlineCode",{parentName:"p"},"postgres")," server using Docker."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose up -d\n")),(0,r.kt)("h2",{id:"old"},"Old"),(0,r.kt)("p",null,"Behind the scenes, this previous command will create a new workspace by running the following commands:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"create-hapify-workpsace")," (cli)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"create-nx-workspace")," (cli)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hapify-workspace")," (schematics)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"eslint-config")," (schematics)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prettier-config")," (schematics)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"github-workflow")," (schematics)"),(0,r.kt)("li",{parentName:"ul"},"(",(0,r.kt)("inlineCode",{parentName:"li"},"nestjs-application"),") (schematics)"),(0,r.kt)("li",{parentName:"ul"},"(",(0,r.kt)("inlineCode",{parentName:"li"},"angular-application"),") (schematics)"),(0,r.kt)("li",{parentName:"ul"},"(",(0,r.kt)("inlineCode",{parentName:"li"},"react-admin-application"),") (schematics)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hapify-library")," (schematics)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prisma-library")," (schematics)")))))),(0,r.kt)("admonition",{title:"Coming soon",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"In the future, a single command will perform all these steps:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx create-traxion-workspace\n"))))}h.isMDXComponent=!0}}]);