"use strict";(self.webpackChunk_trxn_traxion_api=self.webpackChunk_trxn_traxion_api||[]).push([[949],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var d=2;d<a;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7642:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],i={id:"extend-a-generated-controller",title:"How to extend a generated controller",sidebar_label:"Extend a generated controller"},l=void 0,d={unversionedId:"how-to/nestjs/extend-a-generated-controller",id:"how-to/nestjs/extend-a-generated-controller",title:"How to extend a generated controller",description:"Structure of the REST API libraries",source:"@site/docs/how-to/nestjs/extend-a-generated-controller.md",sourceDirName:"how-to/nestjs",slug:"/how-to/nestjs/extend-a-generated-controller",permalink:"/docs/how-to/nestjs/extend-a-generated-controller",draft:!1,editUrl:"https://github.com/tractr/traxion/tree/main/apps/docs/docs/how-to/nestjs/extend-a-generated-controller.md",tags:[],version:"current",frontMatter:{id:"extend-a-generated-controller",title:"How to extend a generated controller",sidebar_label:"Extend a generated controller"},sidebar:"documentation",previous:{title:"Configure Tailwind CSS",permalink:"/docs/how-to/angular/configure-tailwind-css"},next:{title:"Configuration",permalink:"/docs/how-to/database/configuration"}},c={},p=[{value:"Structure of the REST API libraries",id:"structure-of-the-rest-api-libraries",level:2},{value:"Add new route",id:"add-new-route",level:3},{value:"Adding the necessary DTOs and models",id:"adding-the-necessary-dtos-and-models",level:3},{value:"Updating the <code>common-rext-client</code>",id:"updating-the-common-rext-client",level:3},{value:"Update of the rext client for Angular",id:"update-of-the-rext-client-for-angular",level:3}],u={toc:p};function m(e){var t=e.components,i=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"structure-of-the-rest-api-libraries"},"Structure of the REST API libraries"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"REST libraries structure",src:n(3795).Z,width:"1491",height:"990"})),(0,a.kt)("p",null,"The REST API is divided into several libraries that form 3 groups:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"common"),": the common libraries are pure TypeScript and are framework agnostic. They can be used either on the backend or on the frontend."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nestjs"),": backend libraries related to the NestJS framework."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"angular")," : the frontend libraries related to the Angular framework.")),(0,a.kt)("p",null,"Here are the libraries that make up the REST API:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"common-models"),": It defines the types and validators of the model objects returned by the API. It is used on the backend and the frontend to ensure the type safety of the API and the client."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"common-rest-dtos"),": It defines the types and validators of the parameters that can be used to call the API routes (search parameters, create and update operation body, etc.). It is used on the backend and frontend side to ensure type safety of the API and the client."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"common-rext-client")," : this library contains the typed client (SDK) of the API rest. It is agnostic and can be used on both the front-end and the back-end."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"angular-rext-client"),": this library provides an Angular wrapper around ",(0,a.kt)("inlineCode",{parentName:"li"},"common-rext-client")," by adding the Angular dependency injection context. It exposes Angular services to call the REST API."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nestjs-models-common"),": this library contains the NestJS services responsible for the business logic layer. These services are then used by the REST layer and the GraphQL layer. This is the place where the business logic must be added."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nestjs-models-rest"),": this library contains the controllers and services for the REST API.")),(0,a.kt)("h3",{id:"add-new-route"},"Add new route"),(0,a.kt)("p",null,"Let's consider an example: you want to add a route to the generated ",(0,a.kt)("inlineCode",{parentName:"p"},"UserController")," to return the friends of a user. Before adding custom code, the file structure in the nestjs-models-rest library should look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"libs/nestjs/models-rest\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 generated\n    \u2502   \u2514\u2500\u2500 nestjs-models-rest\n    \u2502       \u2514\u2500\u2500 src\n    \u2502           \u251c\u2500\u2500 ...\n    \u2502           \u2514\u2500\u2500 user\n    \u2502               \u251c\u2500\u2500 controllers\n    \u2502               \u2514\u2500\u2500 services\n    \u251c\u2500\u2500 index.ts\n")),(0,a.kt)("p",null,"Create a file to host your custom controller in ",(0,a.kt)("inlineCode",{parentName:"p"},"libs/nestjs/models-rest/src/user.controller.ts"),". You need to declare a class that extends the generated controller, and add your custom method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { UserController as GeneratedUserController } from './generated';\nimport { User } from '@scope/common-models';\nimport { UserGetFriendsDto } from '@scope/common-dtos';\n\nexport class UserController extends GeneratedUserController {\n\n    // IMPORTANT NOTE: If the added route is less specific thant existing routes in the generated\n    // controller, you must redeclare them or they'll be shadowed by the new route\n    @Get('friends/specific')\n    getUserFriendsSpecificRoute(@parmas() searchDto: UserGetFriendsDto): Promise<User[]> {\n        super.getUserFriendsSpecificRoute(searchDto);\n    }\n\n    @Get('friends')\n    getUserFriends(@parmas() searchDto: UserGetFriendsDto): Promise<User[]> {\n        // here goes the custom code to handle the request\n        // ...\n    }\n}\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The order of declaration of routes in a Nestjs controller is important: routes are evaluated in the same order as they are declared and the first route whose URL matches the URL of the request is executed. So, you have to declare the routes from the most specific to the most generic. In the same way, when a controller is extended and a route is added, the more specific routes must be redeclared so they are not overloaded by a more generic route.")),(0,a.kt)("p",null,"Once the new controller is added, the Nestjs module declaring the controllers must be updated to use the new ",(0,a.kt)("inlineCode",{parentName:"p"},"UserController")," and not the generated one."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// Before:\nimport { UserController } from './generated';\n\n// After:\nimport { UserController } from './user.controller';\n\n@Module({\n    // ...\n  controllers: [\n    UserController,\n    // ...\n  ]\n    // ...\n})\nexport class NestjsModelsRestModule {}\n")),(0,a.kt)("p",null,"Also, if the controllers are exported by the library via the ",(0,a.kt)("inlineCode",{parentName:"p"},"index.ts")," file, you have to update the exports to publish the custom controller and not the generated controller."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// Before:\nexport { UserController } from './generated';\n\n// After:\nexport { UserController } from './user.controller';\n")),(0,a.kt)("h3",{id:"adding-the-necessary-dtos-and-models"},"Adding the necessary DTOs and models"),(0,a.kt)("p",null,"Adding a new route usually means adding new models and DTOs. In the case of the previous example, you would need to add ",(0,a.kt)("inlineCode",{parentName:"p"},"UserGetFriendsDto")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"common-dtos")," library and export it."),(0,a.kt)("h3",{id:"updating-the-common-rext-client"},"Updating the ",(0,a.kt)("inlineCode",{parentName:"h3"},"common-rext-client")),(0,a.kt)("p",null,"Once the new route has been added to the API, and the DTOs updated, it is possible to update the ",(0,a.kt)("inlineCode",{parentName:"p"},"common-rext-client")," library, so that the new route can be easily used by the client, taking advantage of end-to-end typing."),(0,a.kt)("p",null,"The procedure to do this is similar to adding the new route on the backend. In the library, ",(0,a.kt)("inlineCode",{parentName:"p"},"common-rext-client"),", we need to create a new service extending the generated service responsible for the resource we want to extend."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"libs/common/rext-client\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 generated\n    \u2502   \u2514\u2500\u2500 rext-client\n    \u2502       \u2514\u2500\u2500 services\n    \u2502           \u251c\u2500\u2500 user.service.ts\n    \u2502           \u2514\u2500\u2500 ...\n    \u251c\u2500\u2500 index.ts\n    \u2514\u2500\u2500 services\n        \u251c\u2500\u2500 user.service.ts\n        \u2514\u2500\u2500 index.ts\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// file: libs/common/rext-client/src/sercives/user.service.ts\nimport { UserService as GeneratedUserService } from './generated';\nimport { User } from '@scope/common-models';\nimport { UserGetFriendsDto } from '@scope/common-dtos';\n\nexport class UserService extends GeneratedUserService {\n\n    // Add the new custom method\n  public findUserFriends$(\n    findManyQuery?: UserGetFriendsDto,\n    options?: FindManyOptions,\n  ): Observable<User[]> {\n    return fromDto(findManyQuery, UserGetFriendsDto).pipe(\n      switchMap((params) =>\n        findMany(this.apiUrl, { ...params }, options).pipe(\n          extractAjaxResponseData(),\n          transformAndValidateMap(User),\n        ),\n      ),\n    );\n  }\n}\n")),(0,a.kt)("p",null,"In order for the APi client to be correctly typed and benefit from the same validation as the API, the DTOs and models previously defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"common-rest-dtos")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"common-models")," are reused in the new function definition."),(0,a.kt)("p",null,"Once this is done, all that remains is to update the index to export the custom service instead of the generated service."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// file: libs/common/rext-client/src/index.ts\n// Before:\nexport { UserService } from './generated';\n\n// After:\nexport { UserService } from './services/user.service';\n")),(0,a.kt)("h3",{id:"update-of-the-rext-client-for-angular"},"Update of the rext client for Angular"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"angular-rext-client")," library extends the services generated in ",(0,a.kt)("inlineCode",{parentName:"p"},"common-rext-client")," and adds the decorators required for Angular dependency injection."),(0,a.kt)("p",null,"In the case of adding a route in an existing service, there is nothing to do in this library."))}m.isMDXComponent=!0},3795:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rest-structure-dcd75574a83a82e0cfc53efb9c62c48e.png"}}]);