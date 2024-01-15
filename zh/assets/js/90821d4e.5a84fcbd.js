"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[1599],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,k=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5078:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={},l="Event Store \u4e8b\u4ef6\u5b58\u50a8",c={unversionedId:"instruction/store",id:"instruction/store",title:"Event Store \u4e8b\u4ef6\u5b58\u50a8",description:"1 \u524d\u63d0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/instruction/01-store.md",sourceDirName:"instruction",slug:"/instruction/store",permalink:"/zh/docs/next/instruction/store",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/docs/instruction/01-store.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EventMesh \u4ea7\u54c1\u8def\u7ebf\u56fe",permalink:"/zh/docs/next/roadmap"},next:{title:"Event Store Docker \u90e8\u7f72",permalink:"/zh/docs/next/instruction/store-with-docker"}},i={},s=[{value:"1 \u524d\u63d0",id:"1-\u524d\u63d0",level:2},{value:"2 \u4e0b\u8f7d",id:"2-\u4e0b\u8f7d",level:2},{value:"3 \u542f\u52a8",id:"3-\u542f\u52a8",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"event-store-\u4e8b\u4ef6\u5b58\u50a8"},"Event Store \u4e8b\u4ef6\u5b58\u50a8"),(0,o.kt)("h2",{id:"1-\u524d\u63d0"},"1 \u524d\u63d0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u4f7f\u7528 64 \u4f4d\u7684 Linux / Unix \u7cfb\u7edf"),(0,o.kt)("li",{parentName:"ul"},"64 \u4f4d JDK 8 \u6216 JDK 11"),(0,o.kt)("li",{parentName:"ul"},"4GB+ \u53ef\u7528\u78c1\u76d8\uff0c\u7528\u4e8e Event Store \u670d\u52a1\u5668\u3002")),(0,o.kt)("p",null,"\u672c\u6587\u5c06\u4ee5 RocketMQ \u4e8b\u4ef6\u5b58\u50a8\u4e3a\u4f8b\uff0c\u60a8\u4e5f\u53ef\u4ee5\u9009\u62e9\u5176\u5b83 ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/next/roadmap#%E4%BA%8B%E4%BB%B6%E5%AD%98%E5%82%A8%E5%AE%9E%E7%8E%B0%E7%8A%B6%E6%80%81"},"EventMesh \u652f\u6301\u7684\u4e8b\u4ef6\u5b58\u50a8"),"\u3002EventMesh \u5728\u975e standalone \u6a21\u5f0f\u4e0b\uff0c\u4f9d\u8d56 RocketMQ \u4f5c\u4e3a\u5b58\u50a8\u5c42\u3002\u82e5\u60a8\u4fdd\u6301\u9ed8\u8ba4\u7684 standalone \u6a21\u5f0f\uff0c\u5219\u53ef\u8df3\u8fc7\u8be5\u6b65\uff0c\u76f4\u63a5\u8fdb\u884c EventMesh Runtime \u7684\u90e8\u7f72\u3002"),(0,o.kt)("p",null,"\u5728\u751f\u4ea7\u73af\u5883\u5e94\u4f7f\u7528 standalone \u4e4b\u5916\u7684\u4e8b\u4ef6\u5b58\u50a8\uff0c\u4ee5\u652f\u6301\u66f4\u5927\u7684\u541e\u5410\u91cf\u548c\u66f4\u9ad8\u7684\u53ef\u7528\u6027\u3002"),(0,o.kt)("h2",{id:"2-\u4e0b\u8f7d"},"2 \u4e0b\u8f7d"),(0,o.kt)("p",null,"\u4ece ",(0,o.kt)("a",{parentName:"p",href:"https://rocketmq.apache.org/download/"},"RocketMQ \u5b98\u65b9\u7f51\u7ad9")," \u4e0b\u8f7d Binary \u4ee3\u7801\uff08\u63a8\u8350\u4f7f\u7528 4.9.* \u7248\u672c\uff09\uff0c\u8fd9\u91cc\u4ee5 4.9.4 \u4e3a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"unzip rocketmq-all-4.9.4-bin-release.zip\ncd rocketmq-all-4.9.4-bin-release/\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"rocketmq_1",src:r(86721).Z,width:"1674",height:"346"})),(0,o.kt)("h2",{id:"3-\u542f\u52a8"},"3 \u542f\u52a8"),(0,o.kt)("p",null,"\u542f\u52a8 Name Server\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"nohup sh bin/mqnamesrv & tail -f ~/logs/rocketmqlogs/namesrv.log\n")),(0,o.kt)("p",null,"\u5982\u679c\u5728\u770b\u5230 The Name Server boot success...\uff0c\u5219\u8bf4\u660e Name Server \u542f\u52a8\u6210\u529f\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"rocketmq_2",src:r(85127).Z,width:"1676",height:"846"})),(0,o.kt)("p",null,"\u542f\u52a8 Broker\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"nohup sh bin/mqbroker -n localhost:9876 &\ntail -f ~/logs/rocketmqlogs/broker.log\n")),(0,o.kt)("p",null,"\u5982\u679c\u770b\u5230 The broker boot success...\uff0c\u5219\u8bf4\u660e Broker \u542f\u52a8\u6210\u529f"),(0,o.kt)("p",null,"\u81f3\u6b64 Event Store \u7684\u90e8\u7f72\u5df2\u5b8c\u6210\uff0c\u8bf7\u8f6c\u81f3\u4e0b\u4e00\u6b65\u5b8c\u6210 ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/next/instruction/runtime"},"EventMesh Runtime")," \u7684\u90e8\u7f72"),(0,o.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,o.kt)("p",null,"\u5173\u4e8e RocketMQ \u7684\u5176\u4ed6\u66f4\u591a\u8d44\u6599\uff0c\u8bf7\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://rocketmq.apache.org/docs/quick-start/"},"https://rocketmq.apache.org/docs/quick-start/"),"."))}m.isMDXComponent=!0},86721:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rocketmq_1-cf2134e63e6f1a8fd073dc6fc80d706f.png"},85127:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rocketmq_2-6cb39241202920164fbc621facde31dd.png"}}]);