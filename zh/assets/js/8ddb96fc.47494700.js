"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[3620],{3905:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>N});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),d=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},k=function(t){var e=d(t.components);return n.createElement(m.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),c=d(a),s=r,N=c["".concat(m,".").concat(s)]||c[s]||u[s]||l;return a?n.createElement(N,i(i({ref:e},k),{},{components:a})):n.createElement(N,i({ref:e},k))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p[c]="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},53752:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={},i="EventMesh \u6a21\u5f0f\u6ce8\u518c\u4e2d\u5fc3 (OpenSchema)",p={unversionedId:"design-document/schema-registry",id:"design-document/schema-registry",title:"EventMesh \u6a21\u5f0f\u6ce8\u518c\u4e2d\u5fc3 (OpenSchema)",description:"Schema \u548c Schema \u6ce8\u518c\u6982\u8ff0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/design-document/03-schema-registry.md",sourceDirName:"design-document",slug:"/design-document/schema-registry",permalink:"/zh/docs/next/design-document/schema-registry",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/docs/design-document/03-schema-registry.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Slack",permalink:"/zh/docs/next/design-document/connect/slack-connector"},next:{title:"EventMesh SPI",permalink:"/zh/docs/next/design-document/spi"}},m={},d=[{value:"Schema \u548c Schema \u6ce8\u518c\u6982\u8ff0",id:"schema-\u548c-schema-\u6ce8\u518c\u6982\u8ff0",level:2},{value:"Schema",id:"schema",level:3},{value:"Schema \u6ce8\u518c\u4e2d\u5fc3",id:"schema-\u6ce8\u518c\u4e2d\u5fc3",level:3},{value:"\u4e0d\u540c\u9879\u76ee\u4e2d Schema \u6ce8\u518c\u8868\u7684\u6bd4\u8f83",id:"\u4e0d\u540c\u9879\u76ee\u4e2d-schema-\u6ce8\u518c\u8868\u7684\u6bd4\u8f83",level:3},{value:"OpenSchema \u6982\u89c8",id:"openschema-\u6982\u89c8",level:2},{value:"\u9700\u6c42\uff08\u76ee\u6807\uff09",id:"\u9700\u6c42\u76ee\u6807",level:2},{value:"\u8be6\u7ec6\u8bbe\u8ba1",id:"\u8be6\u7ec6\u8bbe\u8ba1",level:2},{value:"\u67b6\u6784\u8bbe\u8ba1",id:"\u67b6\u6784\u8bbe\u8ba1",level:3},{value:"Schema Registry \u4e0b\u7684\u4fe1\u606f\u4f20\u8f93\u8fc7\u7a0b",id:"schema-registry-\u4e0b\u7684\u4fe1\u606f\u4f20\u8f93\u8fc7\u7a0b",level:3},{value:"\u5f53\u524d\u8fdb\u5ea6",id:"\u5f53\u524d\u8fdb\u5ea6",level:2},{value:"\u72b6\u6001",id:"\u72b6\u6001",level:3},{value:"\u4fee\u6539\u5efa\u8bae",id:"\u4fee\u6539\u5efa\u8bae",level:3},{value:"\u72b6\u6001\u4ee3\u7801\u548c\u5f02\u5e38\u4ee3\u7801",id:"\u72b6\u6001\u4ee3\u7801\u548c\u5f02\u5e38\u4ee3\u7801",level:4},{value:"API \u5f00\u53d1\u72b6\u6001",id:"api-\u5f00\u53d1\u72b6\u6001",level:4},{value:"\u9879\u76ee\u603b\u4f53\u7ed3\u6784",id:"\u9879\u76ee\u603b\u4f53\u7ed3\u6784",level:4},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",level:2}],k={toc:d};function c(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},k,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"eventmesh-\u6a21\u5f0f\u6ce8\u518c\u4e2d\u5fc3-openschema"},"EventMesh \u6a21\u5f0f\u6ce8\u518c\u4e2d\u5fc3 (OpenSchema)"),(0,r.kt)("h2",{id:"schema-\u548c-schema-\u6ce8\u518c\u6982\u8ff0"},"Schema \u548c Schema \u6ce8\u518c\u6982\u8ff0"),(0,r.kt)("h3",{id:"schema"},"Schema"),(0,r.kt)("p",null,"\u6a21\u5f0f\u4ee3\u8868\u5bf9\u5e8f\u5217\u5316\u5b9e\u4f8b\uff08\u5b57\u7b26\u4e32/\u6d41/s \u6587\u4ef6/\u2026\u2026\uff09\u7684\u63cf\u8ff0\uff0c\u5177\u6709\u4e24\u4e2a\u5c5e\u6027\u3002\u9996\u5148\uff0c\u5b83\u4e5f\u662f\u5e8f\u5217\u5316\u7c7b\u578b\u7684\u683c\u5f0f\u3002\u5176\u6b21\uff0c\u5b83\u5b9a\u4e49\u4e86\u8fd9\u4e9b\u5e8f\u5217\u5316\u5b9e\u4f8b\u5e94\u6ee1\u8db3\u7684\u8981\u6c42\u3002"),(0,r.kt)("p",null,"\u9664\u4e86\u63cf\u8ff0\u5e8f\u5217\u5316\u5b9e\u4f8b\uff0c\u6a21\u5f0f\u8fd8\u53ef\u7528\u4e8e\u9a8c\u8bc1\u5b9e\u4f8b\u662f\u5426\u5408\u6cd5\u3002\u56e0\u4e3a\u5b83\u5b9a\u4e49\u4e86\u5e8f\u5217\u5316\u5b9e\u4f8b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),"\uff08\u548c\u5176\u4ed6\u5c5e\u6027\uff09\u4ee5\u53ca\u5185\u90e8\u7684\u952e\u3002\u4ee5 JSON \u6a21\u5f0f\u4e3a\u4f8b\uff0c\u5b83\u4e0d\u4ec5\u53ef\u7528\u4e8e\u63cf\u8ff0 JSON \u5b57\u7b26\u4e32\uff0c\u8fd8\u53ef\u7528\u4e8e\u9a8c\u8bc1\u5b57\u7b26\u4e32\u662f\u5426\u6ee1\u8db3\u6a21\u5f0f ",(0,r.kt)("a",{parentName:"p",href:"#%E5%8F%82%E8%80%83%E6%96%87%E7%8C%AE"},"[1]")," \u4e2d\u5b9a\u4e49\u7684\u5c5e\u6027\u3002"),(0,r.kt)("p",null,"\u5e38\u89c1\u7684\u6a21\u5f0f\u6709 JSON \u6a21\u5f0f\u3001Protobuf \u6a21\u5f0f\u548c Avro \u6a21\u5f0f\u3002"),(0,r.kt)("h3",{id:"schema-\u6ce8\u518c\u4e2d\u5fc3"},"Schema \u6ce8\u518c\u4e2d\u5fc3"),(0,r.kt)("p",null,"\u6a21\u5f0f\u6ce8\u518c\u4e2d\u5fc3\u662f\u4e00\u4e2a\u63d0\u4f9b RESTful \u63a5\u53e3\u7684\u670d\u52a1\u5668\u3002\u5b83\u53ef\u4ee5\u63a5\u6536\u548c\u5b58\u50a8\u6765\u81ea\u5ba2\u6237\u7aef\u7684\u6a21\u5f0f\uff0c\u5e76\u4e3a\u5176\u4ed6\u5ba2\u6237\u7aef\u4ece\u4e2d\u68c0\u7d22\u6a21\u5f0f\u63d0\u4f9b\u63a5\u53e3\u3002"),(0,r.kt)("p",null,"\u5b83\u53ef\u7528\u4e8e\u9a8c\u8bc1\u8fc7\u7a0b\u548c\uff08\u53bb\uff09\u5e8f\u5217\u5316\u8fc7\u7a0b"),(0,r.kt)("h3",{id:"\u4e0d\u540c\u9879\u76ee\u4e2d-schema-\u6ce8\u518c\u8868\u7684\u6bd4\u8f83"},"\u4e0d\u540c\u9879\u76ee\u4e2d Schema \u6ce8\u518c\u8868\u7684\u6bd4\u8f83"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u9879\u76ee"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5e94\u7528\u7a0b\u5e8f"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"EMQ",(0,r.kt)("a",{parentName:"td",href:"#%E5%8F%82%E8%80%83%E6%96%87%E7%8C%AE"},"[2]")),(0,r.kt)("td",{parentName:"tr",align:"left"},'\u4e3b\u8981\u7528\u4e8e\uff08\u53bb\uff09\u5e8f\u5217\u5316\u8fc7\u7a0b\u3002\u4f7f\u7528 "\u6a21\u5f0f\u6ce8\u518c\u8868 "\u548c "\u89c4\u5219\u5339\u914d "\u5c06\u4fe1\u606f\u4ece\u4e00\u79cd\u5e8f\u5217\u5316\u683c\u5f0f\u4f20\u8f93\u5230\u53e6\u4e00\u79cd\u5e8f\u5217\u5316\u683c\u5f0f\u3002serialization format to another.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Pulsar",(0,r.kt)("a",{parentName:"td",href:"#%E5%8F%82%E8%80%83%E6%96%87%E7%8C%AE"},"[3]")),(0,r.kt)("td",{parentName:"tr",align:"left"},'\u4e3b\u8981\u7528\u4e8e\u9a8c\u8bc1\u8fc7\u7a0b\u3002\u4f7f\u7528 "\u6a21\u5f0f\u6ce8\u518c\u8868 "\u9a8c\u8bc1\u62a5\u6587\u3002')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Confluentinc",(0,r.kt)("a",{parentName:"td",href:"#%E5%8F%82%E8%80%83%E6%96%87%E7%8C%AE"},"[4]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5728\u9a8c\u8bc1\u548c\uff08\u53bb\uff09\u5e8f\u5217\u5316\u8fc7\u7a0b\u4e2d\u3002")))),(0,r.kt)("h2",{id:"openschema-\u6982\u89c8"},"OpenSchema \u6982\u89c8"),(0,r.kt)("p",null,"OpenSchema",(0,r.kt)("a",{parentName:"p",href:"#%E5%8F%82%E8%80%83%E6%96%87%E7%8C%AE"},"[5]")," \u63d0\u51fa\u4e86\u5728\u8d8a\u6765\u8d8a\u591a\u7684\u73b0\u4ee3\u4e91\u539f\u751f\u5e94\u7528\u7a0b\u5e8f\u4e2d\u4ea4\u6362\u6d88\u606f\u548c\u4e8b\u4ef6\u65f6\u7684\u6570\u636e\u6a21\u5f0f\u89c4\u8303\u3002\u5b83\u4ece\u4e09\u4e2a\u65b9\u9762\uff08\u4e3b\u9898/\u6a21\u5f0f/\u517c\u5bb9\u6027\uff09\u8bbe\u8ba1\u4e86\u7528\u4e8e\u5b58\u50a8\u548c\u68c0\u7d22 Avro\u3001JSON Schema \u548c Protobuf3 \u6a21\u5f0f\u7684 RESTful \u63a5\u53e3\u3002"),(0,r.kt)("h2",{id:"\u9700\u6c42\u76ee\u6807"},"\u9700\u6c42\uff08\u76ee\u6807\uff09"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u9700\u6c42 ID"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9700\u6c42\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bc4\u4ef7"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"F-1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u4f20\u8f93\u8fc7\u7a0b\u4e2d\uff0c\u4fe1\u606f\u65e0\u9700\u5305\u542b\u6a21\u5f0f\u4fe1\u606f\uff0c\u4ece\u800c\u63d0\u9ad8\u6548\u7387\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u529f\u80fd\u6027")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"F-2"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u6839\u636e\u6a21\u5f0f\u9a8c\u8bc1\u6765\u81ea\u751f\u4ea7\u8005\u7684\u4fe1\u606f\u5185\u5bb9\u662f\u5426\u6b63\u786e\u5e8f\u5217\u5316\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u529f\u80fd\u6027")))),(0,r.kt)("h2",{id:"\u8be6\u7ec6\u8bbe\u8ba1"},"\u8be6\u7ec6\u8bbe\u8ba1"),(0,r.kt)("h3",{id:"\u67b6\u6784\u8bbe\u8ba1"},"\u67b6\u6784\u8bbe\u8ba1"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"OpenSchema",src:a(61616).Z,width:"1280",height:"720"})),(0,r.kt)("h3",{id:"schema-registry-\u4e0b\u7684\u4fe1\u606f\u4f20\u8f93\u8fc7\u7a0b"},"Schema Registry \u4e0b\u7684\u4fe1\u606f\u4f20\u8f93\u8fc7\u7a0b"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Process",src:a(76048).Z,width:"5681",height:"2956"})),(0,r.kt)("p",null,"\u4fe1\u606f\u4f20\u8f93\u7684\u9ad8\u7ea7\u6d41\u7a0b\u5305\u62ec\u4ee5\u4e0b 10 \u4e2a\u6b65\u9aa4\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'1: \u6d88\u8d39\u8005\u4ece EventMesh \u8ba2\u9605 "\u4e3b\u9898 "\u4fe1\u606f\u3002'),(0,r.kt)("li",{parentName:"ul"},"2: \u751f\u4ea7\u8005\u5411 EventMesh \u6ce8\u518c\u6a21\u5f0f\u3002"),(0,r.kt)("li",{parentName:"ul"},"3: EventMesh \u5411\u6a21\u5f0f\u6ce8\u518c\u4e2d\u5fc3\u6ce8\u518c\u6a21\u5f0f\u3002"),(0,r.kt)("li",{parentName:"ul"},"4: \u6a21\u5f0f\u6ce8\u518c\u4e2d\u5fc3\u8fd4\u56de\u65b0\u521b\u5efa\u6a21\u5f0f\u7684 ID\uff1bEventMesh \u7f13\u5b58\u8be5 ID \u548c\u6a21\u5f0f\u3002"),(0,r.kt)("li",{parentName:"ul"},"5: EventMesh \u5c06\u6a21\u5f0f\u7684 ID \u8fd4\u56de\u7ed9\u751f\u4ea7\u8005\u3002"),(0,r.kt)("li",{parentName:"ul"},"6: Producer \u5728\u4fe1\u606f\u524d\u9762\u4fee\u8865 ID\uff0c\u5e76\u5c06\u4fe1\u606f\u53d1\u9001\u5230 EventMesh\u3002"),(0,r.kt)("li",{parentName:"ul"},"7: EventMesh \u9a8c\u8bc1\u5165\u53e3\u7aef\u53e3\u4e2d\u7684\u62a5\u6587\u5e76\u5c06\u5176\u53d1\u9001\u5230 EventStore\uff1bEventMesh \u4ece EventStore \u4e2d\u68c0\u7d22\u62a5\u6587\u3002"),(0,r.kt)("li",{parentName:"ul"},"8: EventMesh \u89e3\u5c01 id \u5e76\u5c06\u5176\u53d1\u9001\u81f3\u6a21\u5f0f\u6ce8\u518c\u8868\uff08\u5982\u679c\u672c\u5730\u7f13\u5b58\u4e2d\u4e0d\u5b58\u5728\u6b64\u7c7b",(0,r.kt)("inlineCode",{parentName:"li"},"<id, schema>"),"\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},"9: Schema Registry \u8fd4\u56de\u6a21\u5f0f\uff0cEventMesh \u5bf9\u5176\u8fdb\u884c\u7f13\u5b58\u3002"),(0,r.kt)("li",{parentName:"ul"},"10: EventMesh \u5728\u6d88\u606f\u524d\u4fee\u8865\u6a21\u5f0f\uff0c\u5e76\u5c06\u5176\u63a8\u9001\u7ed9\u6d88\u8d39\u8005\u3002")),(0,r.kt)("h2",{id:"\u5f53\u524d\u8fdb\u5ea6"},"\u5f53\u524d\u8fdb\u5ea6"),(0,r.kt)("h3",{id:"\u72b6\u6001"},"\u72b6\u6001"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5f53\u524d\u72b6\u6001"),": \u5f00\u53d1\u4e2d"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8ba8\u8bba issue"),": ISSUE #339"),(0,r.kt)("h3",{id:"\u4fee\u6539\u5efa\u8bae"},"\u4fee\u6539\u5efa\u8bae"),(0,r.kt)("p",null,"\u8be5\u63d0\u6848\u6709\u4e24\u4e2a\u65b9\u9762\u3002"),(0,r.kt)("p",null,"\u9996\u5148\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u5f00\u653e\u6a21\u5f0f\u6ce8\u518c\u8868\uff0c\u5176\u4e2d\u5305\u62ec\u6a21\u5f0f\u7684\u5b58\u50a8\u548c\u517c\u5bb9\u6027\u68c0\u67e5\u3002\n\u8be5\u63d0\u6848\u6b63\u5728\u5236\u5b9a\u4e2d\u3002"),(0,r.kt)("p",null,"\u5176\u6b21\u662f EventMesh \u4e2d Open Schema \u7684\u96c6\u6210\uff0c\u5176\u4e2d\u5305\u62ec\u67b6\u6784\u9a8c\u8bc1\u3002\u8be5\u63d0\u6848\u6709\u5f85\u5236\u5b9a\u3002"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u7b2c\u4e00\u4e2a\u63d0\u6848\uff0c\u4e00\u4e9b\u8fdb\u5c55\u60c5\u51b5\u5982\u4e0b\u3002"),(0,r.kt)("h4",{id:"\u72b6\u6001\u4ee3\u7801\u548c\u5f02\u5e38\u4ee3\u7801"},"\u72b6\u6001\u4ee3\u7801\u548c\u5f02\u5e38\u4ee3\u7801"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"No."),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u72b6\u6001\u7801"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u5f02\u5e38\u7801"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u72b6\u6001"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"401"),(0,r.kt)("td",{parentName:"tr",align:"center"},"40101"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u672a\u6388\u6743\u5f02\u5e38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"404"),(0,r.kt)("td",{parentName:"tr",align:"center"},"40401"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Schema \u4e0d\u5b58\u5728\u5f02\u5e38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:"center"},"^"),(0,r.kt)("td",{parentName:"tr",align:"center"},"40402"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Subject \u4e0d\u5b58\u5728\u5f02\u5e38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:"center"},"^"),(0,r.kt)("td",{parentName:"tr",align:"center"},"40403"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u7248\u672c\u4e0d\u5b58\u5728\u5f02\u5e38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:"center"},"409"),(0,r.kt)("td",{parentName:"tr",align:"center"},"40901"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u517c\u5bb9\u6027\u5f02\u5e38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:"center"},"422"),(0,r.kt)("td",{parentName:"tr",align:"center"},"42201"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Schema \u683c\u5f0f\u5f02\u5e38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:"center"},"^"),(0,r.kt)("td",{parentName:"tr",align:"center"},"42202"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Subject \u683c\u5f0f\u5f02\u5e38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:"center"},"^"),(0,r.kt)("td",{parentName:"tr",align:"center"},"42203"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u7248\u672c\u683c\u5f0f\u5f02\u5e38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:"center"},"^"),(0,r.kt)("td",{parentName:"tr",align:"center"},"42204"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u517c\u5bb9\u6027\u683c\u5f0f\u5f02\u5e38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:"center"},"500"),(0,r.kt)("td",{parentName:"tr",align:"center"},"50001"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u5b58\u50a8\u670d\u52a1\u5f02\u5e38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:"center"},"^"),(0,r.kt)("td",{parentName:"tr",align:"center"},"50002"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u8d85\u65f6\u5f02\u5e38"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714")))),(0,r.kt)("h4",{id:"api-\u5f00\u53d1\u72b6\u6001"},"API \u5f00\u53d1\u72b6\u6001"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"No."),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"URL"),(0,r.kt)("th",{parentName:"tr",align:null},"\u54cd\u5e94"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5f02\u5e38"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4ee3\u7801\u662f\u5426\u5b8c\u6210"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6d4b\u8bd5\u662f\u5426\u5b8c\u6210"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"/schemas/ids/{string: id}"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Schema.class")),(0,r.kt)("td",{parentName:"tr",align:null},"40101\\40401\\50001"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"/schemas/ids/{string: id}/subjects"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SubjectAndVersion.class")),(0,r.kt)("td",{parentName:"tr",align:null},"40101\\40401\\50001"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"/subjects"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"List\\<String>")),(0,r.kt)("td",{parentName:"tr",align:null},"40101\\50001"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"/subjects/{string: subject}/versions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"List\\<Integer>")),(0,r.kt)("td",{parentName:"tr",align:null},"40101\\40402\\50001"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"DELETE"),(0,r.kt)("td",{parentName:"tr",align:null},"/subjects/(string: subject)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"List\\<Integer>")),(0,r.kt)("td",{parentName:"tr",align:null},"40101\\40402\\50001"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"/subjects/(string: subject)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Subject.class")),(0,r.kt)("td",{parentName:"tr",align:null},"40101\\40402\\50001"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"/subjects/(string: subject)/versions/(version: version)/schema"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SubjectWithSchema.class")),(0,r.kt)("td",{parentName:"tr",align:null},"40101\\40402\\40403\\50001"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"POST"),(0,r.kt)("td",{parentName:"tr",align:null},"/subjects/(string: subject)/versions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SchemaIdResponse.class")),(0,r.kt)("td",{parentName:"tr",align:null},"40101\\40901\\42201\\50001\\50002"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"POST"),(0,r.kt)("td",{parentName:"tr",align:null},"/subjects/(string: subject)/"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Subject.class")),(0,r.kt)("td",{parentName:"tr",align:null},"40101\\40901\\42202\\50001\\50002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"DELETE"),(0,r.kt)("td",{parentName:"tr",align:null},"/subjects/(string: subject)/versions/(version: version)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"40101\\40402\\40403\\40901\\50001"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:null},"POST"),(0,r.kt)("td",{parentName:"tr",align:null},"/compatibility/subjects/(string: subject)/versions/(version: version)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"CompatibilityResultResponse.class")),(0,r.kt)("td",{parentName:"tr",align:null},"40101\\40402\\40403\\42201\\42203\\50001"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"/compatibility/(string: subject)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Compatibility.class")),(0,r.kt)("td",{parentName:"tr",align:null},"40101\\40402\\50001"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2714"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"13"),(0,r.kt)("td",{parentName:"tr",align:null},"PUT"),(0,r.kt)("td",{parentName:"tr",align:null},"/compatibility/(string: subject)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Compatibility.class")),(0,r.kt)("td",{parentName:"tr",align:null},"40101\\40402\\40901\\42204\\50001"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,r.kt)("h4",{id:"\u9879\u76ee\u603b\u4f53\u7ed3\u6784"},"\u9879\u76ee\u603b\u4f53\u7ed3\u6784"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SchemaController.java"),"+",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaService.java")," : ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenSchema 7.1.1~7.1.2 (API 1~2)")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SubjectController.java"),"+",(0,r.kt)("inlineCode",{parentName:"p"},"SubjectService.java")," : ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenSchema 7.2.1~7.2.8 (API 3~10)")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CompatibilityController.java"),"+",(0,r.kt)("inlineCode",{parentName:"p"},"CompatibilityService.java")," : ",(0,r.kt)("inlineCode",{parentName:"p"},"OpenSchema 7.3.1~7.3.3 (API 11~13)")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"Check for Compatibility")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u9879\u76ee\u7ed3\u6784",src:a(28140).Z,width:"1006",height:"922"})),(0,r.kt)("h2",{id:"\u53c2\u8003\u6587\u732e"},"\u53c2\u8003\u6587\u732e"),(0,r.kt)("p",null,"[1][Schema \u9a8c\u8bc1\u5668 (github.com)]","(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/search?q=schema+validator"},"https://github.com/search?q=schema+validator"),")"),(0,r.kt)("p",null,"[2][EMQ: Schema Registry]","(",(0,r.kt)("a",{parentName:"p",href:"https://www.jianshu.com/p/33e0655c642b"},"https://www.jianshu.com/p/33e0655c642b"),")"),(0,r.kt)("p",null,"[3][Pulsar: Schema Registry]","(",(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/PaB66-Si00cX80py5ig5Mw"},"https://mp.weixin.qq.com/s/PaB66-Si00cX80py5ig5Mw"),")"),(0,r.kt)("p",null,"[4][confluentinc/schema-registry]","(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/confluentinc/schema-registry"},"https://github.com/confluentinc/schema-registry"),")"),(0,r.kt)("p",null,"[5][openmessaging/openschema]","(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openmessaging/openschema"},"https://github.com/openmessaging/openschema"),")"))}c.isMDXComponent=!0},61616:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/schema-registry-architecture-e376404fc6051685e1e14f6ea15e9bd8.png"},76048:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/schema-registry-process-204fb6690bbd4f93f6b3571df13b114b.jpg"},28140:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/schema-registry-project-structure-468c4e4f7a31528a51d8d289fb4afb50.png"}}]);