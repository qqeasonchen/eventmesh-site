"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[4675],{3905:(e,n,o)=>{o.d(n,{Zo:()=>u,kt:()=>g});var t=o(67294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function c(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?c(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function a(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},c=Object.keys(e);for(t=0;t<c.length;t++)o=c[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)o=c[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=t.createContext({}),s=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},u=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=s(o),p=r,g=m["".concat(l,".").concat(p)]||m[p]||d[p]||c;return o?t.createElement(g,i(i({ref:n},u),{},{components:o})):t.createElement(g,i({ref:n},u))}));function g(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=o.length,i=new Array(c);i[0]=p;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[m]="string"==typeof e?e:r,i[1]=a;for(var s=2;s<c;s++)i[s]=o[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}p.displayName="MDXCreateElement"},30478:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>a,toc:()=>s});var t=o(87462),r=(o(67294),o(3905));const c={},i="MongoDB",a={unversionedId:"design-document/connect/mongodb-connector",id:"design-document/connect/mongodb-connector",title:"MongoDB",description:"MongoDBSinkConnector\uff1a\u4ece EventMesh \u5230 MongoDB",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/design-document/03-connect/04-mongodb-connector.md",sourceDirName:"design-document/03-connect",slug:"/design-document/connect/mongodb-connector",permalink:"/zh/docs/next/design-document/connect/mongodb-connector",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/docs/design-document/03-connect/04-mongodb-connector.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Redis",permalink:"/zh/docs/next/design-document/connect/redis-connector"},next:{title:"Knative",permalink:"/zh/docs/next/design-document/connect/knative-connector"}},l={},s=[{value:"MongoDBSinkConnector\uff1a\u4ece EventMesh \u5230 MongoDB",id:"mongodbsinkconnector\u4ece-eventmesh-\u5230-mongodb",level:2},{value:"MongoDBSourceConnector\uff1a\u4ece MongoDB \u5230 EventMesh",id:"mongodbsourceconnector\u4ece-mongodb-\u5230-eventmesh",level:2}],u={toc:s};function m(e){let{components:n,...o}=e;return(0,r.kt)("wrapper",(0,t.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mongodb"},"MongoDB"),(0,r.kt)("h2",{id:"mongodbsinkconnector\u4ece-eventmesh-\u5230-mongodb"},"MongoDBSinkConnector\uff1a\u4ece EventMesh \u5230 MongoDB"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u542f\u52a8\u4f60\u7684 MongoDB \u670d\u52a1\u548c EventMesh Runtime\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u542f\u7528 sinkConnector \u5e76\u68c0\u67e5 ",(0,r.kt)("inlineCode",{parentName:"li"},"sink-config.yml"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u542f\u52a8\u4f60\u7684 MongoDBConnectorServer\uff0c\u5b83\u5c06\u8ba2\u9605\u5230 EventMesh Runtime \u4e2d ",(0,r.kt)("inlineCode",{parentName:"li"},"pubSubConfig.subject")," \u4e2d\u5b9a\u4e49\u7684\u4e3b\u9898\uff0c\u5e76\u5c06\u6570\u636e\u53d1\u9001\u5230 MongoDB \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"connectorConfig.collection"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"pubSubConfig.subject")," \u4e2d\u6307\u5b9a\u7684 Topic\uff0c\u5411 EventMesh \u53d1\u9001\u6d88\u606f\uff0c\u7136\u540e\u4f60\u5c06\u5728 MongoDB \u4e2d\u63a5\u6536\u5230\u8be5\u6d88\u606f\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"pubSubConfig:\n  # \u9ed8\u8ba4\u7aef\u53e3 10000\n  meshAddress: your.eventmesh.server:10000\n  subject: TopicTest  \n  idc: FT  \n  env: PRD  \n  group: rabbitmqSink  \n  appId: 5031  \n  userName: rabbitmqSinkUser  \n  passWord: rabbitmqPassWord  \nconnectorConfig:  \n  connectorName: mongodbSink\n  # \u652f\u6301 REPLICA_SET \u548c STANDALONE\n  connectorType: STANDALONE\n  # mongodb://root:root@127.0.0.1:27018,127.0.0.1:27019\n  url: mongodb://127.0.0.1:27018\n  database: yourDB\n  collection: yourCol\n")),(0,r.kt)("h2",{id:"mongodbsourceconnector\u4ece-mongodb-\u5230-eventmesh"},"MongoDBSourceConnector\uff1a\u4ece MongoDB \u5230 EventMesh"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u542f\u52a8\u4f60\u7684 MongoDB \u670d\u52a1\u548c EventMesh Runtime\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u542f\u7528 sourceConnector \u5e76\u68c0\u67e5 ",(0,r.kt)("inlineCode",{parentName:"li"},"source-config.yml"),"\uff08\u4e0e sink-config.yml \u57fa\u672c\u76f8\u540c\uff09\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u542f\u52a8\u4f60\u7684 MongoDBSourceConnector\uff0c\u5b83\u5c06\u8ba2\u9605\u5230 MongoDB \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"connectorConfig.collection"),"\uff0c\u5e76\u5c06\u6570\u636e\u53d1\u9001\u5230 EventMesh Runtime \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"pubSubConfig.subject"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5411 MongoDB \u4e2d ",(0,r.kt)("inlineCode",{parentName:"li"},"yourDB")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"yourCol")," \u5199\u5165\u4e00\u4e2a CloudEvent \u6d88\u606f\uff0c\u7136\u540e\u4f60\u5c06\u5728 EventMesh \u4e2d\u63a5\u6536\u5230\u8be5\u6d88\u606f\u3002")))}m.isMDXComponent=!0}}]);