"use strict";(self.webpackChunk_trxn_traxion_api=self.webpackChunk_trxn_traxion_api||[]).push([[255],{609:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var r=t(7896),a=t(1461),i=(t(2784),t(876)),o=["components"],s={id:"getting-started",title:"Getting started",sidebar_label:"Getting started",slug:"/"},l=void 0,p={unversionedId:"Overview/getting-started",id:"Overview/getting-started",title:"Getting started",description:"Introduction",source:"@site/docs/01-Overview/02-getting-started.md",sourceDirName:"01-Overview",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/tractr/traxion/tree/main/apps/docs/docs/01-Overview/02-getting-started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"getting-started",title:"Getting started",sidebar_label:"Getting started",slug:"/"},sidebar:"mySidebar",previous:{title:"Main concepts",permalink:"/Overview/main-concepts"},next:{title:"Prisma Configuration",permalink:"/Overview/prisma-configuration"}},d={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Installing Dependencies",id:"installing-dependencies",level:2},{value:"Configuring the Generator within the Prisma Schema",id:"configuring-the-generator-within-the-prisma-schema",level:2},{value:"Generating Your Code",id:"generating-your-code",level:2},{value:"Configuring Your NestJS App",id:"configuring-your-nestjs-app",level:2},{value:"Schema example with seed",id:"schema-example-with-seed",level:2}],c={toc:u},m="wrapper";function g(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)(m,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"In this guide, we will explore how to generate code for a NestJS application from a Prisma schema with the help of Traxion, a collection of Node.js libraries. NestJS, a widely used Node.js framework, offers a robust foundation for building scalable and modular applications, while Prisma is a modern Node.js ORM that simplifies database interactions. Let's dive right in!"),(0,i.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,i.kt)("p",null,"This guide assumes that you have a NestJS application with a configured Prisma schema. You can refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/recipes/prisma#set-up-prisma"},"nestjs documentation")," for Prisma setup information."),(0,i.kt)("p",null,"Ensure that your NestJS application with a Prisma schema is correctly linked to your database (SQLite, PostgreSQL, or others), and is able to run ",(0,i.kt)("inlineCode",{parentName:"p"},"npx prisma generate"),"."),(0,i.kt)("h2",{id:"installing-dependencies"},"Installing Dependencies"),(0,i.kt)("p",null,"Traxion is a Prisma generator that utilizes the data within Prisma to create a fully functional GraphQL API. Let's start by installing the Traxion generator dependency:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -D @trxn/prisma-traxion-generator\n")),(0,i.kt)("p",null,"The generated code will need certain Node packages to run effectively. Install these packages in your app using the command below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save \\\n  @trxn/nestjs-database \\\n  @trxn/nestjs-casl \\\n  @trxn/nestjs-core \\\n  @trxn/nestjs-graphql \\\n  @nestjs/apollo \\\n  @nestjs/graphql \\\n  @paljs/plugins \\\n  @casl/ability \\\n  @casl/prisma \\\n  class-transformer\n")),(0,i.kt)("h2",{id:"configuring-the-generator-within-the-prisma-schema"},"Configuring the Generator within the Prisma Schema"),(0,i.kt)("p",null,"Add the following lines to your schema:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-prisma"},'generator traxion {\n  provider         = "traxion-prisma-generator"\n  // Relative to the schema.prisma file\n  output           = "../src/generated"\n  // Path relative to the output directory\n  tsConfigFilePath = "../../tsconfig.json"\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"output")," directory will contain your generated files. Avoid adding any code here as it will be replaced every time you run Prisma generate."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"tsConfigFilePath")," should point to a valid ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),", which will help configure tsMorph correctly according to your application's TypeScript configuration."),(0,i.kt)("p",null,"This generator relies on a specific ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," table with certain constraints. This guide doesn't cover user configuration. When using this generator for the first time, use the following minimal ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," model:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-prisma"},'model User {\n  id       Int    @id @default(autoincrement())\n  email    String @unique\n  /// @trxn/role\n  role     String @default("user")\n  /// @trxn/hidden\n  /// @trxn/encrypted\n  password String\n}\n')),(0,i.kt)("h2",{id:"generating-your-code"},"Generating Your Code"),(0,i.kt)("p",null,"Now that Prisma is fully configured, you can generate your code in the standard Prisma way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx prisma generate\n")),(0,i.kt)("p",null,"Post-generation, you'll find the generated code in the directory specified in your schema."),(0,i.kt)("p",null,"Please note that Traxion does not handle file formatting. This process is project-specific, so we recommend incorporating a format step in your generation process (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "scripts": {\n    ...\n    "generate": "npx prisma generate && npm run format"\n  }\n  ...\n}\n')),(0,i.kt)("p",null,"It's also important not to version the generated code and let your CI/CD process handle this step during app deployment."),(0,i.kt)("h2",{id:"configuring-your-nestjs-app"},"Configuring Your NestJS App"),(0,i.kt)("p",null,"Lastly, you can import ",(0,i.kt)("inlineCode",{parentName:"p"},"TraxionModule")," from the generated folder and utilize it in your ",(0,i.kt)("inlineCode",{parentName:"p"},"app.module.ts"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Module } from '@nestjs/common';\nimport { TraxionModule } from './generated/modules/traxion.module';\n\n@Module({\n  imports: [TraxionModule],\n  controllers: [],\n  providers: [],\n})\nexport class AppModule {}\n")),(0,i.kt)("p",null,"Now, you're all set! Launch your app and enjoy your fully-featured, authorized GraphQL API."),(0,i.kt)("h2",{id:"schema-example-with-seed"},"Schema example with seed"),(0,i.kt)("p",null,"If you want to test out what is generated with traxion and how traxion handle authentication and ownerships you can try this schema and the seed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-prisma"},'// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\ngenerator client {\n  provider = "prisma-client-js"\n}\n\ndatasource db {\n  provider = "postgresql"\n  url      = env("DATABASE_URL")\n}\n\ngenerator traxion {\n  provider         = "traxion-prisma-generator"\n  output           = "../src/generated"\n  // Path relative to the output directory\n  tsConfigFilePath = "../../tsconfig.app.json"\n}\n\nmodel User {\n  id       Int    @id @default(autoincrement())\n  email    String @unique\n  /// @trxn/hidden\n  /// @trxn/encrypted\n  password String\n  /// @trxn/roles\n  role    String  @default("user")\n  // Profile relation (one-to-one)\n  profile Profile?\n  // Task relation (one-to-many)\n  tasks Task[] @relation("TaskToAuthor")\n  // Shared task relation (many-to-many)\n  sharedTasks Task[] @relation("TaskToUser")\n}\n\nmodel Profile {\n  id        Int     @id @default(autoincrement())\n  firstName  String\n  lastName  String\n  bio       String?\n  user      User    @relation(fields: [userId], references: [id])\n  userId    Int     @unique\n}\n\nmodel Task {\n  id          Int        @id @default(autoincrement())\n  title       String\n  description String?\n  status      String     @default("draft")\n  author      User       @relation("TaskToAuthor", fields: [authorId], references: [id])\n  authorId    Int\n  sharedWith  User[]     @relation("TaskToUser")\n}\n')),(0,i.kt)("p",null,"And you can add the ",(0,i.kt)("inlineCode",{parentName:"p"},"seed.ts")," next to your schema file (don't forget to add the seed target inside your package.json file):"),(0,i.kt)("p",null,"Note: you will need to install ",(0,i.kt)("inlineCode",{parentName:"p"},"@ngneat/falso")," as a dev dependency and to add this configuration inside your package.json:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "prisma": {\n    "schema": "prisma/schema.prisma",\n    "seed": "npx ts-node --project ./prisma/seed.ts"\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { randFirstName, randLastName, randText } from '@ngneat/falso';\nimport { PrismaClient, Role } from '@prisma/client';\nimport * as bcrypt from 'bcrypt';\n\nconst prisma = new PrismaClient();\n\nexport function createUser({\n  email,\n  password,\n  roles,\n  sharedTasksWith = [],\n}: {\n  email: string;\n  password: string;\n  roles: Role[];\n  sharedTasksWith?: string[];\n}) {\n  console.info(`Creating user ${email}`);\n  return prisma.user.create({\n    data: {\n      email,\n      password: bcrypt.hashSync(password, 10),\n      roles,\n      profile: {\n        create: {\n          firstName: randFirstName(),\n          lastName: randLastName(),\n          bio: randText(),\n        },\n      },\n      tasks: {\n        create: [\n          {\n            title: `${email}'s task`,\n            description: randText(),\n            status: 'open',\n            ...(sharedTasksWith.length > 0 && {\n              sharedWith: {\n                connect: sharedTasksWith.map((userEmail) => ({\n                  email: userEmail,\n                })),\n              },\n            }),\n          },\n        ],\n      },\n    },\n  });\n}\n\nasync function seed() {\n  const users = [\n    await createUser({\n      email: 'admin@traxion.dev',\n      password: 'password',\n      roles: [Role.admin],\n    }),\n    await createUser({\n      email: 'user1@traxion.dev',\n      password: 'password',\n      roles: [Role.user],\n    }),\n    await createUser({\n      email: 'user2@traxion.dev',\n      password: 'password',\n      roles: [Role.user],\n      sharedTasksWith: ['user1@traxion.dev'],\n    }),\n  ];\n\n  console.info(`Seeded ${users.length} users`);\n}\n\nseed().catch((e) => {\n  console.error(e);\n  process.exit(1);\n});\n")))}g.isMDXComponent=!0},876:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var r=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return t?r.createElement(g,o(o({ref:n},d),{},{components:t})):r.createElement(g,o({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);