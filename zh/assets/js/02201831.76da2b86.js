"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[6802],{3905:(t,n,e)=>{e.d(n,{Zo:()=>d,kt:()=>N});var a=e(67294);function l(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){l(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function u(t,n){if(null==t)return{};var e,a,l=function(t,n){if(null==t)return{};var e,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||(l[e]=t[e]);return l}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var p=a.createContext({}),k=function(t){var n=a.useContext(p),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},d=function(t){var n=k(t.components);return a.createElement(p.Provider,{value:n},t.children)},o="mdxType",m={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(t,n){var e=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),o=k(e),g=l,N=o["".concat(p,".").concat(g)]||o[g]||m[g]||r;return e?a.createElement(N,i(i({ref:n},d),{},{components:e})):a.createElement(N,i({ref:n},d))}));function N(t,n){var e=arguments,l=n&&n.mdxType;if("string"==typeof t||l){var r=e.length,i=new Array(r);i[0]=g;var u={};for(var p in n)hasOwnProperty.call(n,p)&&(u[p]=n[p]);u.originalType=t,u[o]="string"==typeof t?t:l,i[1]=u;for(var k=2;k<r;k++)i[k]=e[k];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}g.displayName="MDXCreateElement"},64218:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>u,toc:()=>k});var a=e(87462),l=(e(67294),e(3905));const r={},i="\u4f7f\u7528 Webhook \u8ba2\u9605\u4e8b\u4ef6",u={unversionedId:"design-document/event-handling-and-integration/webhook",id:"version-v1.8.0/design-document/event-handling-and-integration/webhook",title:"\u4f7f\u7528 Webhook \u8ba2\u9605\u4e8b\u4ef6",description:"Webhook \u4f7f\u7528\u6d41\u7a0b",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.8.0/design-document/01-event-handling-and-integration/05-webhook.md",sourceDirName:"design-document/01-event-handling-and-integration",slug:"/design-document/event-handling-and-integration/webhook",permalink:"/zh/docs/v1.8.0/design-document/event-handling-and-integration/webhook",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.8.0/design-document/01-event-handling-and-integration/05-webhook.md",tags:[],version:"v1.8.0",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Event Bridge",permalink:"/zh/docs/v1.8.0/design-document/event-handling-and-integration/event-bridge"},next:{title:"EventMesh \u5de5\u4f5c\u6d41",permalink:"/zh/docs/v1.8.0/design-document/event-handling-and-integration/workflow"}},p={},k=[{value:"Webhook \u4f7f\u7528\u6d41\u7a0b",id:"webhook-\u4f7f\u7528\u6d41\u7a0b",level:2},{value:"\u7b2c\u4e00\u6b65\uff1a\u5728 eventmesh \u914d\u7f6e Webhook \u76f8\u5173\u4fe1\u606f\u5e76\u4e14\u542f\u52a8",id:"\u7b2c\u4e00\u6b65\u5728-eventmesh-\u914d\u7f6e-webhook-\u76f8\u5173\u4fe1\u606f\u5e76\u4e14\u542f\u52a8",level:3},{value:"\u7b2c\u4e8c\u6b65\uff1a\u6dfb\u52a0 Webhook \u914d\u7f6e\u4fe1\u606f",id:"\u7b2c\u4e8c\u6b65\u6dfb\u52a0-webhook-\u914d\u7f6e\u4fe1\u606f",level:3},{value:"\u6dfb\u52a0\u63a5\u53e3",id:"\u6dfb\u52a0\u63a5\u53e3",level:4},{value:"\u901a\u8fc7 callbackPath \u67e5\u8be2 WebHookConfig",id:"\u901a\u8fc7-callbackpath-\u67e5\u8be2-webhookconfig",level:4},{value:"\u901a\u8fc7 manufacturer \u67e5\u8be2 WebHookConfig \u5217\u8868",id:"\u901a\u8fc7-manufacturer-\u67e5\u8be2-webhookconfig-\u5217\u8868",level:4},{value:"\u66f4\u65b0\u63a5\u53e3",id:"\u66f4\u65b0\u63a5\u53e3",level:4},{value:"\u5220\u9664\u63a5\u53e3",id:"\u5220\u9664\u63a5\u53e3",level:4},{value:"\u7b2c\u4e09\u6b65\uff1a\u67e5\u770b\u914d\u7f6e\u662f\u5426\u6210\u529f",id:"\u7b2c\u4e09\u6b65\u67e5\u770b\u914d\u7f6e\u662f\u5426\u6210\u529f",level:3},{value:"\u7b2c\u56db\u6b65\uff1a\u914d\u7f6e cloudevent \u7684\u6d88\u8d39\u8005",id:"\u7b2c\u56db\u6b65\u914d\u7f6e-cloudevent-\u7684\u6d88\u8d39\u8005",level:3},{value:"\u7b2c\u4e94\u6b65\uff1a\u5728\u5382\u5546\u914d\u7f6e Webhook \u76f8\u5173\u4fe1\u606f",id:"\u7b2c\u4e94\u6b65\u5728\u5382\u5546\u914d\u7f6e-webhook-\u76f8\u5173\u4fe1\u606f",level:3},{value:"\u5382\u5546 Webhook \u64cd\u4f5c\u8bf4\u660e",id:"\u5382\u5546-webhook-\u64cd\u4f5c\u8bf4\u660e",level:2},{value:"github \u6ce8\u518c",id:"github-\u6ce8\u518c",level:3},{value:"\u7b2c\u4e00\u6b65\uff1a\u8fdb\u5165\u5bf9\u5e94\u7684\u9879\u76ee",id:"\u7b2c\u4e00\u6b65\u8fdb\u5165\u5bf9\u5e94\u7684\u9879\u76ee",level:4},{value:"\u7b2c\u4e8c\u6b65\uff1a\u70b9\u51fbsetting",id:"\u7b2c\u4e8c\u6b65\u70b9\u51fbsetting",level:4},{value:"\u7b2c\u4e09\u6b65\uff1a\u70b9\u51fbWebhooks",id:"\u7b2c\u4e09\u6b65\u70b9\u51fbwebhooks",level:4},{value:"\u7b2c\u56db\u6b65\uff1a\u70b9\u51fb Add webhook",id:"\u7b2c\u56db\u6b65\u70b9\u51fb-add-webhook",level:4},{value:"\u7b2c\u4e94\u6b65: \u586b\u5199webhook\u4fe1\u606f",id:"\u7b2c\u4e94\u6b65-\u586b\u5199webhook\u4fe1\u606f",level:4}],d={toc:k},o="wrapper";function m(t){let{components:n,...r}=t;return(0,l.kt)(o,(0,a.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u4f7f\u7528-webhook-\u8ba2\u9605\u4e8b\u4ef6"},"\u4f7f\u7528 Webhook \u8ba2\u9605\u4e8b\u4ef6"),(0,l.kt)("h2",{id:"webhook-\u4f7f\u7528\u6d41\u7a0b"},"Webhook \u4f7f\u7528\u6d41\u7a0b"),(0,l.kt)("h3",{id:"\u7b2c\u4e00\u6b65\u5728-eventmesh-\u914d\u7f6e-webhook-\u76f8\u5173\u4fe1\u606f\u5e76\u4e14\u542f\u52a8"},"\u7b2c\u4e00\u6b65\uff1a\u5728 eventmesh \u914d\u7f6e Webhook \u76f8\u5173\u4fe1\u606f\u5e76\u4e14\u542f\u52a8"),(0,l.kt)("p",null,"\u914d\u7f6e\u8bf4\u660e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# \u662f\u5426\u542f\u52a8Webhook admin\u670d\u52a1\neventMesh.webHook.admin.start=true\n\n# Webhook\u4e8b\u4ef6\u914d\u7f6e\u5b58\u50a8\u6a21\u5f0f\u3002\u76ee\u524d\u53ea\u652f\u6301file\u4e0enacos\neventMesh.webHook.operationMode=file\n# \u6587\u4ef6\u5b58\u50a8\u6a21\u5f0f\u7684\u6587\u4ef6\u5b58\u653e\u8def\u5f84\uff0c\u5982\u679c\u5199\u4e0a#{eventMeshHome}\uff0c\u5728eventMesh\u6839\u76ee\u5f55\neventMesh.webHook.fileMode.filePath= #{eventMeshHome}/webhook\n\n# nacos\u5b58\u50a8\u6a21\u5f0f\uff0c\u914d\u7f6e\u547d\u540d\u89c4\u5219\u662feventMesh.webHook.nacosMode.{nacos \u539f\u751f\u914d\u7f6ekey} \u5177\u4f53\u7684\u914d\u7f6e\u8bf7\u770b [nacos github api](https://github.com/alibaba/nacos/blob/develop/api/src/main/java/com/alibaba/nacos/api/SystemPropertyKeyConst.java)\n## nacos\u7684\u5730\u5740\neventMesh.webHook.nacosMode.serverAddr=127.0.0.1:8848\n\n# Webhook CloudEvent \u53d1\u9001\u6a21\u5f0f\u3002\u4e0e eventMesh.connector.plugin.type \u914d\u7f6e\u4e00\u6837\neventMesh.webHook.producer.connector=standalone\n")),(0,l.kt)("h3",{id:"\u7b2c\u4e8c\u6b65\u6dfb\u52a0-webhook-\u914d\u7f6e\u4fe1\u606f"},"\u7b2c\u4e8c\u6b65\uff1a\u6dfb\u52a0 Webhook \u914d\u7f6e\u4fe1\u606f"),(0,l.kt)("p",null,"\u914d\u7f6e\u4fe1\u606f\u8bf4\u660e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'   /**\n    * \u5382\u5546\u53d1\u9001\u4e8b\u4ef6\u65f6\u8c03\u7528\u7684\u5730\u5740\u3002[http or https]://[domain or IP]:[port]/webhook/[callbackPath]\n    * \u5728\u5382\u5546\u7684Webhook\u914d\u7f6e\u4e2d\u9700\u8981\u586b\u5199\u5b8c\u6574url\uff0c\u6bd4\u5982\uff1ahttp://127.0.0.1:10504/webhook/test/event\n    * callbackPath \u552f\u4e00\n    * manufacturer callback path\n    */\n    private String callbackPath;\n\n    /**\n     * \u5382\u5546\u7684\u540d\u5b57\n     * manufacturer name ,like github\n     */\n    private String manufacturerName;\n\n    /**\n     * \u5382\u5546\u7684\u57df\u540d\n     * manufacturer domain name, like www.github.com\n     */\n    private String manufacturerDomain;\n\n    /**\n     * \u5382\u5546\u7684\u4e8b\u4ef6\u540d\n     * Webhook event name ,like rep-push\n     */\n    private String manufacturerEventName;\n\n    /**\n     *\n     * http header content type\n     */\n    private String contentType = "application/json";\n\n    /**\n     * \u8bf4\u660e\n     * description of this WebHookConfig\n     */\n    private String description;\n\n    /**\n     * \u6709\u4e00\u4e9b\u5382\u5546\u4f7f\u7528\u9a8c\u7b7e\u65b9\u5f0f\uff0c\n     * secret key ,for authentication\n     */\n    private String secret;\n\n    /**\n     *  \u6709\u4e00\u4e9b\u5382\u5546\u4f7f\u7528\u9a8c\u7b7e\u65b9\u5f0f\uff0c\u4f7f\u7528\u8d26\u6237\u5bc6\u7801\u65b9\u5f0f\n     * userName ,for HTTP authentication\n     */\n    private String userName;\n\n    /**\n     *  \u6709\u4e00\u4e9b\u5382\u5546\u4f7f\u7528\u9a8c\u7b7e\u65b9\u5f0f\uff0c\u4f7f\u7528\u8d26\u6237\u5bc6\u7801\u65b9\u5f0f\n     * password ,for HTTP authentication\n     */\n    private String password;\n\n\n\n    /**\n     * \u4e8b\u4ef6\u53d1\u9001\u5230\u90a3\u4e2a topic\n     * roll out event name ,like topic to mq\n     */\n    private String cloudEventName;\n\n    /**\n     * roll out data format -> CloudEvent serialization mode\n     * If HTTP protocol is used, the request header contentType needs to be marked\n     */\n    private String dataContentType = "application/json";\n\n    /**\n     * cloudEvent \u4e8b\u4ef6\u5bf9\u8c61\u552f\u4e00\u6807\u8bc6\u7b26\u8bc6\u522b\u65b9\u5f0f\uff0cuuid \u6216\u8005 manufacturerEventId(\u5382\u5546 id)\n     * id of cloudEvent ,like uuid/manufacturerEventId\n     */\n    private String cloudEventIdGenerateMode;\n\n')),(0,l.kt)("h4",{id:"\u6dfb\u52a0\u63a5\u53e3"},"\u6dfb\u52a0\u63a5\u53e3"),(0,l.kt)("p",null,"\u8def\u5f84\uff1a /webhook/insertWebHookConfig"),(0,l.kt)("p",null,"\u65b9\u6cd5\uff1aPOST"),(0,l.kt)("p",null,"contentType\uff1a application/json"),(0,l.kt)("p",null,"\u8f93\u5165\u53c2\u6570\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callbackPath"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u5730\u5740\uff0c\u552f\u4e00\u5730\u5740"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"manufacturerName"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5382\u5546\u540d"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"manufacturerDomain"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5382\u5546\u7684\u57df\u540d"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"manufacturerEventName"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5382\u5546\u4e8b\u4ef6\u540d"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"contentType"),(0,l.kt)("td",{parentName:"tr",align:null},"http connettype"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"application/json")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u8bf4\u660e"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secret"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9a8c\u7b7e\u5bc6\u94a5"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"userName"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u5bc6\u7801"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cloudEventName"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e8b\u4ef6\u540d"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cloudEventIdGenerateMode"),(0,l.kt)("td",{parentName:"tr",align:null},"cloudEvent \u4e8b\u4ef6\u5bf9\u8c61\u552f\u4e00\u6807\u8bc6\u7b26\u8bc6\u522b\u65b9\u5f0f\uff0cuuid \u6216\u8005 manufacturerEventId(\u5382\u5546 id)"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"manufacturerEventId")))),(0,l.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "callbackPath":"/webhook/github/eventmesh/all",\n    "manufacturerName":"github",\n    "manufacturerDomain":"www.github.com",\n    "manufacturerEventName":"all",\n    "cloudEventName":"github-eventmesh",\n    "secret": "testSecret"\n}\n')),(0,l.kt)("p",null,"\u8f93\u51fa\u53c2\u6570\uff1a1 \u6210\u529f\uff0c0 \u5931\u8d25"),(0,l.kt)("h4",{id:"\u901a\u8fc7-callbackpath-\u67e5\u8be2-webhookconfig"},"\u901a\u8fc7 callbackPath \u67e5\u8be2 WebHookConfig"),(0,l.kt)("p",null,"\u8def\u5f84\uff1a /webhook/queryWebHookConfigById"),(0,l.kt)("p",null,"\u65b9\u6cd5\uff1aPOST"),(0,l.kt)("p",null,"contentType\uff1a application/json"),(0,l.kt)("p",null,"\u8f93\u5165\u53c2\u6570\uff1a\n| \u5b57\u6bb5 | \u8bf4\u660e | \u7c7b\u578b | \u5fc5\u987b | \u9ed8\u8ba4\u503c |\n| -- | -- | -- | -- | -- |\n| callbackPath | \u8c03\u7528\u5730\u5740\uff0c\u552f\u4e00\u5730\u5740 | string | \u662f | null |\n| manufacturerName | \u8c03\u7528\u5730\u5740\u7684\u63d0\u4f9b\u65b9 | string | \u662f | null |"),(0,l.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "callbackPath":"/webhook/github/eventmesh/all",\n    "manufacturerName":"github"\n}\n')),(0,l.kt)("p",null,"\u8f93\u51fa\u53c2\u6570\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callbackPath"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u5730\u5740\uff0c\u552f\u4e00\u5730\u5740"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"manufacturerName"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5382\u5546\u540d"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"manufacturerDomain"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5382\u5546\u7684\u57df\u540d"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"manufacturerEventName"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5382\u5546\u4e8b\u4ef6\u540d"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"contentType"),(0,l.kt)("td",{parentName:"tr",align:null},"http connettype"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"application/json")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u8bf4\u660e"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secret"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9a8c\u7b7e\u5bc6\u94a5"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"userName"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u5bc6\u7801"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cloudEventName"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e8b\u4ef6\u540d\uff08\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cloudEventIdGenerateMode"),(0,l.kt)("td",{parentName:"tr",align:null},"cloudEvent \u4e8b\u4ef6\u5bf9\u8c61\u552f\u4e00\u6807\u8bc6\u7b26\u8bc6\u522b\u65b9\u5f0f\uff0cuuid \u6216\u8005 manufacturerEventId(\u5382\u5546 id)"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"manufacturerEventId")))),(0,l.kt)("h4",{id:"\u901a\u8fc7-manufacturer-\u67e5\u8be2-webhookconfig-\u5217\u8868"},"\u901a\u8fc7 manufacturer \u67e5\u8be2 WebHookConfig \u5217\u8868"),(0,l.kt)("p",null,"\u8def\u5f84\uff1a /webhook/queryWebHookConfigByManufacturer"),(0,l.kt)("p",null,"\u65b9\u6cd5\uff1aPOST"),(0,l.kt)("p",null,"contentType\uff1a application/json"),(0,l.kt)("p",null,"\u8f93\u5165\u53c2\u6570\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"manufacturerName"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5382\u5546\u540d"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pageNum"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5206\u9875\u67e5\u8be2\u4e2d\u7684\u9875\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pageSize"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6bcf\u4e00\u9875\u7684\u7ed3\u679c\u6570\u91cf"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"null")))),(0,l.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "manufacturerName":"github",\n    "pageNum":1,\n    "pageSize":2\n}\n')),(0,l.kt)("p",null,"\u8f93\u51fa\u53c2\u6570\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callbackPath"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u5730\u5740\uff0c\u552f\u4e00\u5730\u5740"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"manufacturerName"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5382\u5546\u540d"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"manufacturerDomain"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5382\u5546\u7684\u57df\u540d"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"manufacturerEventName"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5382\u5546\u4e8b\u4ef6\u540d"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"contentType"),(0,l.kt)("td",{parentName:"tr",align:null},"http connettype"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"application/json")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u8bf4\u660e"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secret"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9a8c\u7b7e\u5bc6\u94a5"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"userName"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u5bc6\u7801"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cloudEventName"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e8b\u4ef6\u540d\uff08\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cloudEventIdGenerateMode"),(0,l.kt)("td",{parentName:"tr",align:null},"cloudEvent \u4e8b\u4ef6\u5bf9\u8c61\u552f\u4e00\u6807\u8bc6\u7b26\u8bc6\u522b\u65b9\u5f0f\uff0cuuid \u6216\u8005 manufacturerEventId(\u5382\u5546 id)"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"manufacturerEventId")))),(0,l.kt)("h4",{id:"\u66f4\u65b0\u63a5\u53e3"},"\u66f4\u65b0\u63a5\u53e3"),(0,l.kt)("p",null,"\u8def\u5f84\uff1a /webhook/updateWebHookConfig"),(0,l.kt)("p",null,"\u65b9\u6cd5\uff1aPOST"),(0,l.kt)("p",null,"contentType\uff1a application/json"),(0,l.kt)("p",null,"\u8f93\u5165\u53c2\u6570\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callbackPath"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u5730\u5740\uff0c\u552f\u4e00\u5730\u5740"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"manufacturerName"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5382\u5546\u540d"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"manufacturerDomain"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5382\u5546\u7684\u57df\u540d"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"manufacturerEventName"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5382\u5546\u4e8b\u4ef6\u540d"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"contentType"),(0,l.kt)("td",{parentName:"tr",align:null},"http connettype"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"application/json")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u8bf4\u660e"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secret"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9a8c\u7b7e\u5bc6\u94a5"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"userName"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u5bc6\u7801"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cloudEventName"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e8b\u4ef6\u540d"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cloudEventIdGenerateMode"),(0,l.kt)("td",{parentName:"tr",align:null},"cloudEvent \u4e8b\u4ef6\u5bf9\u8c61\u552f\u4e00\u6807\u8bc6\u7b26\u8bc6\u522b\u65b9\u5f0f\uff0cuuid \u6216\u8005 manufacturerEventId(\u5382\u5546 id)"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"manufacturerEventId")))),(0,l.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "callbackPath":"/webhook/github/eventmesh/all",\n    "manufacturerName":"github",\n    "manufacturerDomain":"www.github.com",\n    "manufacturerEventName":"all",\n    "cloudEventName":"github-eventmesh",\n    "secret": "testSecret"\n}\n')),(0,l.kt)("p",null,"\u8f93\u51fa\u53c2\u6570\uff1a1 \u6210\u529f\uff0c0 \u5931\u8d25"),(0,l.kt)("h4",{id:"\u5220\u9664\u63a5\u53e3"},"\u5220\u9664\u63a5\u53e3"),(0,l.kt)("p",null,"\u8def\u5f84\uff1a /webhook/deleteWebHookConfig"),(0,l.kt)("p",null,"\u65b9\u6cd5\uff1aPOST"),(0,l.kt)("p",null,"contentType\uff1a application/json"),(0,l.kt)("p",null,"\u8f93\u5165\u53c2\u6570\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"callbackPath"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u5730\u5740\uff0c\u552f\u4e00\u5730\u5740"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"manufacturerName"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u5730\u5740\u7684\u63d0\u4f9b\u65b9"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"null")))),(0,l.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "callbackPath":"/webhook/github/eventmesh/all",\n    "manufacturerName":"github"\n}\n')),(0,l.kt)("p",null,"\u8f93\u51fa\u53c2\u6570\uff1a1 \u6210\u529f\uff0c0 \u5931\u8d25"),(0,l.kt)("h3",{id:"\u7b2c\u4e09\u6b65\u67e5\u770b\u914d\u7f6e\u662f\u5426\u6210\u529f"},"\u7b2c\u4e09\u6b65\uff1a\u67e5\u770b\u914d\u7f6e\u662f\u5426\u6210\u529f"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"file \u5b58\u50a8\u6a21\u5f0f\u3002\u8bf7\u5230 eventMesh.webHook.fileMode.filePath \u76ee\u5f55\u4e0b\u67e5\u770b\u3002\u6587\u4ef6\u540d\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"/"),"\u8f6c\u6362\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"."),"\u7684 callbackPath\u3002"),(0,l.kt)("li",{parentName:"ol"},"nacos \u5b58\u50a8\u6a21\u5f0f\u3002\u8bf7\u5230 eventMesh.webHook.nacosMode.serverAddr \u914d\u7f6e\u7684 nacos \u670d\u52a1\u4e2d\u67e5\u770b\u3002")),(0,l.kt)("h3",{id:"\u7b2c\u56db\u6b65\u914d\u7f6e-cloudevent-\u7684\u6d88\u8d39\u8005"},"\u7b2c\u56db\u6b65\uff1a\u914d\u7f6e cloudevent \u7684\u6d88\u8d39\u8005"),(0,l.kt)("h3",{id:"\u7b2c\u4e94\u6b65\u5728\u5382\u5546\u914d\u7f6e-webhook-\u76f8\u5173\u4fe1\u606f"},"\u7b2c\u4e94\u6b65\uff1a\u5728\u5382\u5546\u914d\u7f6e Webhook \u76f8\u5173\u4fe1\u606f"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5382\u5546\u64cd\u4f5c\u8bf7\u770b",(0,l.kt)("a",{parentName:"p",href:"#%E5%8E%82%E5%95%86-Webhook-%E6%93%8D%E4%BD%9C%E8%AF%B4%E6%98%8E"},"\u5382\u5546 Webhook \u64cd\u4f5c\u8bf4\u660e"))),(0,l.kt)("h2",{id:"\u5382\u5546-webhook-\u64cd\u4f5c\u8bf4\u660e"},"\u5382\u5546 Webhook \u64cd\u4f5c\u8bf4\u660e"),(0,l.kt)("h3",{id:"github-\u6ce8\u518c"},"github \u6ce8\u518c"),(0,l.kt)("h4",{id:"\u7b2c\u4e00\u6b65\u8fdb\u5165\u5bf9\u5e94\u7684\u9879\u76ee"},"\u7b2c\u4e00\u6b65\uff1a\u8fdb\u5165\u5bf9\u5e94\u7684\u9879\u76ee"),(0,l.kt)("h4",{id:"\u7b2c\u4e8c\u6b65\u70b9\u51fbsetting"},"\u7b2c\u4e8c\u6b65\uff1a\u70b9\u51fbsetting"),(0,l.kt)("p",null,(0,l.kt)("img",{src:e(35761).Z,width:"1966",height:"132"})),(0,l.kt)("h4",{id:"\u7b2c\u4e09\u6b65\u70b9\u51fbwebhooks"},"\u7b2c\u4e09\u6b65\uff1a\u70b9\u51fbWebhooks"),(0,l.kt)("p",null,(0,l.kt)("img",{src:e(15532).Z,width:"664",height:"714"})),(0,l.kt)("h4",{id:"\u7b2c\u56db\u6b65\u70b9\u51fb-add-webhook"},"\u7b2c\u56db\u6b65\uff1a\u70b9\u51fb Add webhook"),(0,l.kt)("p",null,(0,l.kt)("img",{src:e(69360).Z,width:"1196",height:"270"})),(0,l.kt)("h4",{id:"\u7b2c\u4e94\u6b65-\u586b\u5199webhook\u4fe1\u606f"},"\u7b2c\u4e94\u6b65: \u586b\u5199webhook\u4fe1\u606f"),(0,l.kt)("p",null,(0,l.kt)("img",{src:e(72884).Z,width:"1168",height:"1030"})),(0,l.kt)("p",null,"Payload URL: EventMesh \u670d\u52a1\u5730\u5740\u548c\u8c03\u7528\u5730\u5740\uff0c\u9700\u5305\u542b\u534f\u8bae\u5934\u3002\u4f8b\u5982\uff0c\u5f53\u8c03\u7528\u5730\u5740 ",(0,l.kt)("inlineCode",{parentName:"p"},"callbackPath")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"/webhook/github/eventmesh/all")," \u65f6\uff0cPayload URL \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"http://www.example.com:10105/webhook/github/eventmesh/all")),(0,l.kt)("p",null,"Content Type: http header content type"),(0,l.kt)("p",null,"Secret: \u9a8c\u7b7e\u5b57\u7b26\u4e32"))}m.isMDXComponent=!0},69360:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/webhook-github-add-185bf8d63c1b465e206bfe7deabd43fc.png"},72884:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/webhook-github-info-aabfbb67a9dcdc908674b880bc087780.png"},35761:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/webhook-github-setting-27fa2024d0625a7443957776ecbc7e3a.png"},15532:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/webhook-github-webhooks-8f08530fcf0f98859e5d1697049eec18.png"}}]);