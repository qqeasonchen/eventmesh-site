"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[6158],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,k=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(k,c(c({ref:t},p),{},{components:r})):n.createElement(k,c({ref:t},p))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},59395:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},c="\u90e8\u7f72 EventMesh \u7684\u4e8b\u4ef6\u5b58\u50a8\uff08\u4f7f\u7528 Docker\uff09",s={unversionedId:"instruction/store-with-docker",id:"version-v1.1.1/instruction/store-with-docker",title:"\u90e8\u7f72 EventMesh \u7684\u4e8b\u4ef6\u5b58\u50a8\uff08\u4f7f\u7528 Docker\uff09",description:"eventmesh\u5728\u975estandalone\u6a21\u5f0f\u4e0b\uff0c\u4f9d\u8d56RocketMQ\u4f5c\u4e3a\u5b58\u50a8\u5c42\uff1b\u82e5\u91c7\u7528standalone\u6a21\u5f0f\uff0c\u5219\u53ef\u8df3\u8fc7\u8be5\u6b65\uff0c\u76f4\u63a5\u8fdb\u884cruntime\u7684\u90e8\u7f72\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1.1/instruction/02-store-with-docker.md",sourceDirName:"instruction",slug:"/instruction/store-with-docker",permalink:"/zh/docs/v1.1.1/instruction/store-with-docker",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.1.1/instruction/02-store-with-docker.md",tags:[],version:"v1.1.1",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u90e8\u7f72 EventMesh \u7684\u4e8b\u4ef6\u5b58\u50a8",permalink:"/zh/docs/v1.1.1/instruction/store"},next:{title:"Eventmesh-runtime \u5feb\u901f\u5165\u95e8\u8bf4\u660e",permalink:"/zh/docs/v1.1.1/instruction/runtime"}},i={},l=[{value:"1. \u4f9d\u8d56",id:"1-\u4f9d\u8d56",level:2},{value:"2. Docker\u90e8\u7f72",id:"2-docker\u90e8\u7f72",level:2},{value:"2.1 \u62c9\u53d6\u955c\u50cf",id:"21-\u62c9\u53d6\u955c\u50cf",level:3},{value:"2.2 \u8fd0\u884c\u5bb9\u5668",id:"22-\u8fd0\u884c\u5bb9\u5668",level:3}],p={toc:l},u="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u90e8\u7f72-eventmesh-\u7684\u4e8b\u4ef6\u5b58\u50a8\u4f7f\u7528-docker"},"\u90e8\u7f72 EventMesh \u7684\u4e8b\u4ef6\u5b58\u50a8\uff08\u4f7f\u7528 Docker\uff09"),(0,o.kt)("p",null,"eventmesh\u5728\u975estandalone\u6a21\u5f0f\u4e0b\uff0c\u4f9d\u8d56RocketMQ\u4f5c\u4e3a\u5b58\u50a8\u5c42\uff1b\u82e5\u91c7\u7528standalone\u6a21\u5f0f\uff0c\u5219\u53ef\u8df3\u8fc7\u8be5\u6b65\uff0c\u76f4\u63a5\u8fdb\u884cruntime\u7684\u90e8\u7f72\u3002"),(0,o.kt)("h2",{id:"1-\u4f9d\u8d56"},"1. \u4f9d\u8d56"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u5efa\u8bae\u4f7f\u752864\u4f4d\u64cd\u4f5c\u7cfb\u7edf\uff0c\u5efa\u8bae\u4f7f\u7528Linux/Unix\uff1b\n64\u4f4dJDK 1.8+\uff1b\nGradle\u81f3\u5c11\u4e3a7.0, \u63a8\u83507.0.*\uff1b\n4g+\u53ef\u7528\u78c1\u76d8\u7528\u4e8eeventmesh-store\u670d\u52a1\u5668\uff1b\n")),(0,o.kt)("h2",{id:"2-docker\u90e8\u7f72"},"2. Docker\u90e8\u7f72"),(0,o.kt)("h3",{id:"21-\u62c9\u53d6\u955c\u50cf"},"2.1 \u62c9\u53d6\u955c\u50cf"),(0,o.kt)("p",null,"\u5728\u547d\u4ee4\u884c\u8f93\u5165\u5982\u4e0b\u547d\u4ee4\u76f4\u63a5\u4ece docker hub \u4e0a\u83b7\u53d6 RocketMQ \u955c\u50cf\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"#\u83b7\u53d6 rocketmq \u955c\u50cf\nsudo docker pull apache/rocketmq:4.9.4\n")),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5217\u51fa\u5e76\u67e5\u770b\u672c\u5730\u5df2\u6709\u7684\u955c\u50cf\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker images\n")),(0,o.kt)("p",null,"\u5982\u679c\u7ec8\u7aef\u663e\u793a\u5982\u4e0b\u6240\u793a\u7684\u955c\u50cf\u4fe1\u606f\uff0c\u5219\u8bf4\u660e EventMesh \u955c\u50cf\u5df2\u7ecf\u6210\u529f\u4e0b\u8f7d\u5230\u672c\u5730\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"REPOSITORY        TAG       IMAGE ID       CREATED         SIZE\napache/rocketmq   4.9.4     a2a50ca263c3   13 months ago   548MB\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"rocketmq_docker_1",src:r(12659).Z,width:"1670",height:"1026"})),(0,o.kt)("h3",{id:"22-\u8fd0\u884c\u5bb9\u5668"},"2.2 \u8fd0\u884c\u5bb9\u5668"),(0,o.kt)("p",null,"\u8fd0\u884cnamerv\u5bb9\u5668\u548cbroker\u5bb9\u5668\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker run -d -p 9876:9876 \\\n  -v `pwd`/data/namesrv/logs:/root/logs \\\n  -v `pwd`/data/namesrv/store:/root/store \\\n  --name rmqnamesrv \\\n  apache/rocketmq:4.9.4 \\\n  sh mqnamesrv\n")),(0,o.kt)("p",null,"\u8fd0\u884cbroker\u5bb9\u5668\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'sudo docker run -d -p 10911:10911 -p 10909:10909 \\\n  -v `pwd`/data/broker/logs:/root/logs \\\n  -v `pwd`/data/broker/store:/root/store \\\n  --name rmqbroker \\\n  --link rmqnamesrv:namesrv \\\n  -e "NAMESRV_ADDR=namesrv:9876" \\\n  apache/rocketmq:4.9.4 \\\n  sh mqbroker -c ../conf/broker.conf\n\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"rocketmq_docker_2",src:r(16028).Z,width:"1670",height:"996"})),(0,o.kt)("p",null,"\u8bf7\u6ce8\u610f ",(0,o.kt)("strong",{parentName:"p"},"rocketmq-broker ip")," \u662f ",(0,o.kt)("strong",{parentName:"p"},"pod ip"),", \u5982\u679c\u4f60\u60f3\u4fee\u6539\u8fd9\u4e2aip, \u53ef\u4ee5\u901a\u8fc7\u6302\u8f7d\u5bb9\u5668\u4e2d ",(0,o.kt)("strong",{parentName:"p"},"broker.conf")," \u6587\u4ef6\u7684\u65b9\u5f0f\u5e76\u4fee\u6539\u6587\u4ef6\u4e2d\u7684 ",(0,o.kt)("strong",{parentName:"p"},"brokerIP1")," \u914d\u7f6e\u9879\u4e3a\u81ea\u5b9a\u4e49\u503c\u3002"),(0,o.kt)("p",null,"\u81f3\u6b64eventmesh-store\u7684\u90e8\u7f72\u5df2\u5b8c\u6210\uff0c\u8bf7\u8f6c\u81f3\u4e0b\u4e00\u6b65\u5b8c\u6210 ",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/v1.1.1/instruction/runtime-with-docker"},"eventmesh-runtime")," \u7684\u90e8\u7f72\u3002"))}m.isMDXComponent=!0},12659:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rocketmq_docker_1-f0b1a3b2fac7c2af6a5ebbab371f79f6.png"},16028:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rocketmq_docker_2-6bc9495c8815c12a48502db178167faa.png"}}]);