"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[6519],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),k=o,m=u["".concat(l,".").concat(k)]||u[k]||d[k]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=k;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},71763:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={},c="Event Store Docker \u90e8\u7f72",i={unversionedId:"instruction/store-with-docker",id:"version-v1.10.0/instruction/store-with-docker",title:"Event Store Docker \u90e8\u7f72",description:"1. \u524d\u63d0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.10.0/instruction/02-store-with-docker.md",sourceDirName:"instruction",slug:"/instruction/store-with-docker",permalink:"/zh/docs/instruction/store-with-docker",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.10.0/instruction/02-store-with-docker.md",tags:[],version:"v1.10.0",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Event Store \u4e8b\u4ef6\u5b58\u50a8",permalink:"/zh/docs/instruction/store"},next:{title:"EventMesh Runtime \u5feb\u901f\u5f00\u59cb",permalink:"/zh/docs/instruction/runtime"}},l={},s=[{value:"1. \u524d\u63d0",id:"1-\u524d\u63d0",level:2},{value:"2. Docker \u90e8\u7f72",id:"2-docker-\u90e8\u7f72",level:2},{value:"2.1 \u62c9\u53d6\u955c\u50cf",id:"21-\u62c9\u53d6\u955c\u50cf",level:3},{value:"2.2 \u8fd0\u884c\u5bb9\u5668",id:"22-\u8fd0\u884c\u5bb9\u5668",level:3}],p={toc:s};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"event-store-docker-\u90e8\u7f72"},"Event Store Docker \u90e8\u7f72"),(0,o.kt)("h2",{id:"1-\u524d\u63d0"},"1. \u524d\u63d0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u4f7f\u7528 64 \u4f4d\u7684 Linux / Unix \u7cfb\u7edf"),(0,o.kt)("li",{parentName:"ul"},"4GB+ \u53ef\u7528\u78c1\u76d8\uff0c\u7528\u4e8e Event Store \u670d\u52a1\u5668\u3002")),(0,o.kt)("p",null,"\u672c\u6587\u5c06\u4ee5 RocketMQ \u4e8b\u4ef6\u5b58\u50a8\u4e3a\u4f8b\uff0c\u60a8\u4e5f\u53ef\u4ee5\u9009\u62e9\u5176\u5b83 ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/roadmap#%E4%BA%8B%E4%BB%B6%E5%AD%98%E5%82%A8%E5%AE%9E%E7%8E%B0%E7%8A%B6%E6%80%81"},"EventMesh \u652f\u6301\u7684\u4e8b\u4ef6\u5b58\u50a8"),"\u3002EventMesh \u5728\u975e standalone \u6a21\u5f0f\u4e0b\uff0c\u4f9d\u8d56 RocketMQ \u4f5c\u4e3a\u5b58\u50a8\u5c42\u3002\u82e5\u60a8\u4fdd\u6301\u9ed8\u8ba4\u7684 standalone \u6a21\u5f0f\uff0c\u5219\u53ef\u8df3\u8fc7\u8be5\u6b65\uff0c\u76f4\u63a5\u8fdb\u884c EventMesh Runtime \u7684\u90e8\u7f72\u3002"),(0,o.kt)("p",null,"\u5728\u751f\u4ea7\u73af\u5883\u5e94\u4f7f\u7528 standalone \u4e4b\u5916\u7684\u4e8b\u4ef6\u5b58\u50a8\uff0c\u4ee5\u652f\u6301\u66f4\u5927\u7684\u541e\u5410\u91cf\u548c\u66f4\u9ad8\u7684\u53ef\u7528\u6027\u3002"),(0,o.kt)("h2",{id:"2-docker-\u90e8\u7f72"},"2. Docker \u90e8\u7f72"),(0,o.kt)("h3",{id:"21-\u62c9\u53d6\u955c\u50cf"},"2.1 \u62c9\u53d6\u955c\u50cf"),(0,o.kt)("p",null,"\u5728\u547d\u4ee4\u884c\u8f93\u5165\u5982\u4e0b\u547d\u4ee4\u76f4\u63a5\u4ece Docker Hub \u4e0a\u83b7\u53d6 RocketMQ \u955c\u50cf\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"#\u83b7\u53d6 rocketmq \u955c\u50cf\nsudo docker pull apache/rocketmq:4.9.4\n")),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5217\u51fa\u5e76\u67e5\u770b\u672c\u5730\u5df2\u6709\u7684\u955c\u50cf\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker images\n")),(0,o.kt)("p",null,"\u5982\u679c\u7ec8\u7aef\u663e\u793a\u5982\u4e0b\u6240\u793a\u7684\u955c\u50cf\u4fe1\u606f\uff0c\u5219\u8bf4\u660e RocketMQ \u955c\u50cf\u5df2\u7ecf\u6210\u529f\u4e0b\u8f7d\u5230\u672c\u5730\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"REPOSITORY        TAG       IMAGE ID       CREATED         SIZE\napache/rocketmq   4.9.4     a2a50ca263c3   13 months ago   548MB\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"rocketmq_docker_1",src:r(12659).Z,width:"1670",height:"1026"})),(0,o.kt)("h3",{id:"22-\u8fd0\u884c\u5bb9\u5668"},"2.2 \u8fd0\u884c\u5bb9\u5668"),(0,o.kt)("p",null,"\u8fd0\u884c namesrv \u5bb9\u5668\u548c broker \u5bb9\u5668\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker run -d -p 9876:9876 \\\n  -v `pwd`/data/namesrv/logs:/root/logs \\\n  -v `pwd`/data/namesrv/store:/root/store \\\n  --name rmqnamesrv \\\n  apache/rocketmq:4.9.4 \\\n  sh mqnamesrv\n")),(0,o.kt)("p",null,"\u8fd0\u884c broker \u5bb9\u5668\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'sudo docker run -d -p 10911:10911 -p 10909:10909 \\\n  -v `pwd`/data/broker/logs:/root/logs \\\n  -v `pwd`/data/broker/store:/root/store \\\n  --name rmqbroker \\\n  --link rmqnamesrv:namesrv \\\n  -e "NAMESRV_ADDR=namesrv:9876" \\\n  apache/rocketmq:4.9.4 \\\n  sh mqbroker -c ../conf/broker.conf\n\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"rocketmq_docker_2",src:r(16028).Z,width:"1670",height:"996"})),(0,o.kt)("p",null,"\u8bf7\u6ce8\u610f ",(0,o.kt)("inlineCode",{parentName:"p"},"rocketmq-broker ip")," \u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"pod ip"),", \u5982\u679c\u4f60\u60f3\u4fee\u6539\u8fd9\u4e2a ip, \u53ef\u4ee5\u901a\u8fc7\u6302\u8f7d\u5bb9\u5668\u4e2d ",(0,o.kt)("inlineCode",{parentName:"p"},"broker.conf")," \u6587\u4ef6\u7684\u65b9\u5f0f\u5e76\u4fee\u6539\u6587\u4ef6\u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"brokerIP1")," \u914d\u7f6e\u9879\u4e3a\u81ea\u5b9a\u4e49\u503c\u3002"),(0,o.kt)("p",null,"\u81f3\u6b64 Event Store \u7684\u90e8\u7f72\u5df2\u5b8c\u6210\uff0c\u8bf7\u8f6c\u81f3\u4e0b\u4e00\u6b65\u5b8c\u6210 ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/instruction/runtime-with-docker"},"EventMesh Runtime")," \u7684\u90e8\u7f72\u3002"))}u.isMDXComponent=!0},12659:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rocketmq_docker_1-f0b1a3b2fac7c2af6a5ebbab371f79f6.png"},16028:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rocketmq_docker_2-6bc9495c8815c12a48502db178167faa.png"}}]);