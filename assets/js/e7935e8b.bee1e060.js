"use strict";(self.webpackChunk_trxn_traxion_api=self.webpackChunk_trxn_traxion_api||[]).push([[732],{4142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>j,contentTitle:()=>u,default:()=>k,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var a=n(7896),i=n(1461),r=(n(2784),n(876)),l=["components"],o={toc:[{value:"Installation",id:"installation",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Injecting the MailjetService",id:"injecting-the-mailjetservice",level:2},{value:"Using Templates",id:"using-templates",level:2},{value:"API",id:"api",level:2},{value:"send",id:"send",level:3},{value:"Conclusion",id:"conclusion",level:2}]},s="wrapper";function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)(s,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mailjet-module"},"Mailjet Module"),(0,r.kt)("p",null,"The nestjs-mailjet module provides a simple wrapper for the Mailjet API,\nallowing NestJS applications to easily send transactional emails using the\nMailjet email delivery service."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"You can install the nestjs-mailjet module using npm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @trxn/nestjs-mailjet\n")),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"To use the nestjs-mailjet module, you first need to import it into your NestJS\napplication. You can do this by adding the MailjetModule to your app's imports array:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { MailjetModule } from '@trxn/nestjs-mailjet';\n\n@Module({\n  imports: [\n    MailjetModule.forRoot({\n      apiKey: 'your_api_key',\n      apiSecret: 'your_api_secret',\n    }),\n  ],\n})\nexport class AppModule {}\n")),(0,r.kt)("p",null,"The forRoot method takes an options object with the following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"apiKey"),": The Mailjet API key."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"apiSecret"),": The Mailjet API secret."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sandboxMode")," (optional): A boolean value indicating whether to enable sandbox mode. Default is ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,r.kt)("p",null,"This module options extends the mailjet ",(0,r.kt)("inlineCode",{parentName:"p"},"ClientParams")," options. You can find more ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/node-mailjet"},"here"),"."),(0,r.kt)("h2",{id:"injecting-the-mailjetservice"},"Injecting the MailjetService"),(0,r.kt)("p",null,"Once the MailjetModule is imported, you can inject the MailjetService into your controllers or services:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Injectable } from '@nestjs/common';\nimport { MailjetService } from '@trxn/nestjs-mailjet';\n\n@Injectable()\nexport class EmailsService {\n  constructor(private readonly mailjetService: MailjetService) {}\n\n  async sendEmail(data: any) {\n    const { from, to, subject, html, text } = data;\n\n    await this.mailjetService.send({\n      from,\n      to,\n      subject,\n      html,\n      text,\n    });\n  }\n}\n")),(0,r.kt)("p",null,"The MailjetModule expose the same service with an alias token: 'MAILER_CLIENT' from the ",(0,r.kt)("inlineCode",{parentName:"p"},"@trxn/nestjs-mailer")," package. So you can import this service like this too:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Injectable } from '@nestjs/common';\nimport { MAILER_CLIENT } from '@trxn/nestjs-mailer';\nimport { MailjetService } from '@trxn/nestjs-mailjet';\n\n@Injectable()\nexport class EmailsService {\n  constructor(@Inject(MAILER_CLIENT) private readonly mailjetService: MailjetService) {}\n\n  async sendEmail(data: any) {\n    const { from, to, subject, html, text } = data;\n\n    await this.mailjetService.send({\n      from,\n      to,\n      subject,\n      html,\n      text,\n    });\n  }\n}\n")),(0,r.kt)("h2",{id:"using-templates"},"Using Templates"),(0,r.kt)("p",null,"You can also use email templates with the MailjetService by passing a templateId and context:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"await this.mailjetService.send({\n  from,\n  to,\n  subject,\n  context: {\n    templateId: 12345,\n    name: 'John Doe',\n    orderNumber: 12345,\n  },\n});\n")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("p",null,"The MailjetService provides a single method for sending email:"),(0,r.kt)("h3",{id:"send"},"send"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"send(params: SendEmailParams): Promise<any>\n")),(0,r.kt)("p",null,"Sends an email using the Mailjet API."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"params")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SendEmailParams")),(0,r.kt)("td",{parentName:"tr",align:null},"The email parameters.")))),(0,r.kt)("p",null,"The SendEmailParams interface has the following properties:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface SendEmailParams {\n  from: string;\n  to: string | string[];\n  subject?: string;\n  html?: string;\n  text?: string;\n  context?: Record<string, any> & {\n    templateId?: number;\n  };\n}\n")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"The nestjs-mailjet module provides a simple and convenient way to send transactional emails via the Mailjet API in a NestJS application. By using this module, you can easily integrate email sending functionality into your app and focus on building other important features."))}m.isMDXComponent=!0;var p=["components"],c={id:"use-mailjet",hide_title:!0,sidebar_label:"Configure Mailjet"},u=void 0,d={unversionedId:"how-to/mailer/use-mailjet",id:"how-to/mailer/use-mailjet",title:"use-mailjet",description:"",source:"@site/docs/how-to/mailer/use-mailjet.mdx",sourceDirName:"how-to/mailer",slug:"/how-to/mailer/use-mailjet",permalink:"/docs/how-to/mailer/use-mailjet",draft:!1,editUrl:"https://github.com/tractr/traxion/tree/main/apps/docs/docs/how-to/mailer/use-mailjet.mdx",tags:[],version:"current",frontMatter:{id:"use-mailjet",hide_title:!0,sidebar_label:"Configure Mailjet"},sidebar:"documentation",previous:{title:"Use Minio to mock AWS S3",permalink:"/docs/how-to/file-storage/use-minio"},next:{title:"Configure Mailer with MailjetModule",permalink:"/docs/how-to/mailer/use-mailer-with-mailjet"}},j={},h=[],g={toc:h},f="wrapper";function k(e){var t=e.components,n=(0,i.Z)(e,p);return(0,r.kt)(f,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(m,{mdxType:"SourceMarkdown"}))}k.isMDXComponent=!0},876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>j});var a=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(n),d=i,j=c["".concat(s,".").concat(d)]||c[d]||u[d]||r;return n?a.createElement(j,l(l({ref:t},p),{},{components:n})):a.createElement(j,l({ref:t},p))}));function j(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var m=2;m<r;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);