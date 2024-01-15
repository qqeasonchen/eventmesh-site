"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[5896],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(n),k=l,d=u["".concat(o,".").concat(k)]||u[k]||i[k]||r;return n?a.createElement(d,p(p({ref:t},m),{},{components:n})):a.createElement(d,p({ref:t},m))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,p=new Array(r);p[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:l,p[1]=s;for(var c=2;c<r;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},44552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>i,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),l=(n(67294),n(3905));const r={},p="\u8fd0\u884c Java SDK Demo",s={unversionedId:"instruction/demo",id:"version-v1.10.0/instruction/demo",title:"\u8fd0\u884c Java SDK Demo",description:"Maven Central",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.10.0/instruction/05-demo.md",sourceDirName:"instruction",slug:"/instruction/demo",permalink:"/zh/docs/instruction/demo",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.10.0/instruction/05-demo.md",tags:[],version:"v1.10.0",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EventMesh Runtime Docker \u5feb\u901f\u5f00\u59cb",permalink:"/zh/docs/instruction/runtime-with-docker"},next:{title:"EventMesh \u4e0e K8S \u96c6\u6210",permalink:"/zh/docs/instruction/operator"}},o={},c=[{value:"1. TCP",id:"1-tcp",level:2},{value:"1.1 \u5f02\u6b65\u6d88\u606f",id:"11-\u5f02\u6b65\u6d88\u606f",level:3},{value:"1.2 \u5e7f\u64ad\u6d88\u606f",id:"12-\u5e7f\u64ad\u6d88\u606f",level:3},{value:"2. HTTP",id:"2-http",level:2},{value:"2.1 \u5f02\u6b65\u4e8b\u4ef6",id:"21-\u5f02\u6b65\u4e8b\u4ef6",level:3},{value:"3. GRPC",id:"3-grpc",level:2},{value:"3.1 \u5f02\u6b65\u4e8b\u4ef6\u53d1\u9001 \u548c Webhook \u8ba2\u9605",id:"31-\u5f02\u6b65\u4e8b\u4ef6\u53d1\u9001-\u548c-webhook-\u8ba2\u9605",level:3},{value:"3.2 \u540c\u6b65\u4e8b\u4ef6\u53d1\u9001\u548c\u4e8b\u4ef6\u6d41\u8ba2\u9605",id:"32-\u540c\u6b65\u4e8b\u4ef6\u53d1\u9001\u548c\u4e8b\u4ef6\u6d41\u8ba2\u9605",level:3},{value:"3.3 \u6279\u91cf\u4e8b\u4ef6\u53d1\u5e03",id:"33-\u6279\u91cf\u4e8b\u4ef6\u53d1\u5e03",level:3},{value:"4. \u4f7f\u7528 Shell \u811a\u672c\u8fd0\u884c Demo",id:"4-\u4f7f\u7528-shell-\u811a\u672c\u8fd0\u884c-demo",level:2},{value:"4.1 TCP",id:"41-tcp",level:3},{value:"TCP Sub",id:"tcp-sub",level:4},{value:"TCP Pub",id:"tcp-pub",level:4},{value:"4.2 TCP Broadcast",id:"42-tcp-broadcast",level:3},{value:"TCP Sub Broadcast",id:"tcp-sub-broadcast",level:4},{value:"TCP Pub Broadcast",id:"tcp-pub-broadcast",level:4},{value:"4.3 HTTP",id:"43-http",level:3},{value:"HTTP Sub",id:"http-sub",level:4},{value:"HTTP Pub",id:"http-pub",level:4}],m={toc:c},u="wrapper";function i(e){let{components:t,...r}=e;return(0,l.kt)(u,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u8fd0\u884c-java-sdk-demo"},"\u8fd0\u884c Java SDK Demo"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://maven-badges.herokuapp.com/maven-central/org.apache.eventmesh/eventmesh-sdk-java"},(0,l.kt)("img",{parentName:"a",src:"https://maven-badges.herokuapp.com/maven-central/org.apache.eventmesh/eventmesh-sdk-java/badge.svg",alt:"Maven Central"}))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"eventmesh-sdk-java \u4f5c\u4e3a\u5ba2\u6237\u7aef\uff0c\u4e0e EventMesh Runtime \u901a\u4fe1\uff0c\u7528\u4e8e\u5b8c\u6210\u6d88\u606f\u7684\u53d1\u9001\u548c\u63a5\u6536\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"eventmesh-sdk-java \u652f\u6301\u5f02\u6b65\u6d88\u606f\u548c\u5e7f\u64ad\u6d88\u606f\u3002\u5f02\u6b65\u6d88\u606f\u8868\u793a\u751f\u4ea7\u8005\u53ea\u53d1\u9001\u6d88\u606f\uff0c\u4e0d\u5173\u5fc3\u56de\u590d\u6d88\u606f\u3002\u5e7f\u64ad\u6d88\u606f\u8868\u793a\u751f\u4ea7\u8005\u53d1\u9001\u4e00\u6b21\u6d88\u606f\uff0c\u6240\u6709\u8ba2\u9605\u5e7f\u64ad\u4e3b\u9898\u7684\u6d88\u8d39\u8005\u90fd\u5c06\u6536\u5230\u6d88\u606f\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"eventmesh-sdk-java \u652f\u6301 HTTP\u3001TCP \u548c GRPC \u534f\u8bae\u3002")),(0,l.kt)("p",null,"TCP\u3001HTTP \u548c GRPC \u793a\u4f8b\u90fd\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"eventmesh-examples"),"\u6a21\u5757\u4e0b\u3002"),(0,l.kt)("h2",{id:"1-tcp"},"1. TCP"),(0,l.kt)("h3",{id:"11-\u5f02\u6b65\u6d88\u606f"},"1.1 \u5f02\u6b65\u6d88\u606f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e3b\u9898 TEST-TOPIC-TCP-ASYNC\uff0c\u53ef\u4ee5\u901a\u8fc7 rocketmq-console \u6216\u8005 rocketmq tools \u547d\u4ee4")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u542f\u52a8\u6d88\u8d39\u8005\uff0c\u8ba2\u9605\u4e0a\u4e00\u6b65\u9aa4\u5df2\u7ecf\u521b\u5efa\u7684 Topic"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u8fd0\u884c org.apache.eventmesh.tcp.demo.sub.eventmeshmessage.AsyncSubscribe \u7684 main \u65b9\u6cd5\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u542f\u52a8\u53d1\u9001\u7aef\uff0c\u53d1\u9001\u6d88\u606f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u8fd0\u884c org.apache.eventmesh.tcp.demo.pub.eventmeshmessage.AsyncPublish \u7684 main \u65b9\u6cd5\n")),(0,l.kt)("h3",{id:"12-\u5e7f\u64ad\u6d88\u606f"},"1.2 \u5e7f\u64ad\u6d88\u606f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e3b\u9898 TEST-TOPIC-TCP-BROADCAST\uff0c\u53ef\u4ee5\u901a\u8fc7 rocketmq-console \u6216\u8005 rocketmq tools \u547d\u4ee4")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u542f\u52a8\u6d88\u8d39\u7aef\uff0c\u8ba2\u9605\u4e0a\u4e00\u6b65\u9aa4\u5df2\u7ecf\u521b\u5efa\u7684 Topic"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u8fd0\u884c org.apache.eventmesh.tcp.demo.sub.eventmeshmessage.AsyncSubscribeBroadcast \u7684 main \u65b9\u6cd5\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u542f\u52a8\u53d1\u9001\u7aef\uff0c\u53d1\u9001\u5e7f\u64ad\u6d88\u606f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u8fd0\u884c org.apache.eventmesh.tcp.demo.pub.eventmeshmessage.AsyncPublishBroadcast \u7684 main \u65b9\u6cd5\n")),(0,l.kt)("p",null,"\u66f4\u591a\u5173\u4e8e TCP \u90e8\u5206\u7684\u5185\u5bb9\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/sdk-java/tcp"},"EventMesh TCP")),(0,l.kt)("h2",{id:"2-http"},"2. HTTP"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5bf9\u4e8e HTTP\uff0ceventmesh-sdk-java \u5bf9\u5f02\u6b65\u4e8b\u4ef6\u5b9e\u73b0\u4e86\u53d1\u9001\u4e0e\u8ba2\u9605\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u5728 Demo \u4e2d\uff0cJava \u7c7b",(0,l.kt)("inlineCode",{parentName:"p"},"EventMeshMessage"),"\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"content"),"\u5b57\u6bb5\u8868\u793a\u4e00\u4e2a\u7279\u6b8a\u7684\u534f\u8bae\u3002\u56e0\u6b64\uff0c\u5982\u679c\u60a8\u8981\u4f7f\u7528 eventmesh-sdk-java \u7684 http-client\uff0c\u5219\u53ea\u9700\u8bbe\u8ba1\u534f\u8bae\u7684\u5185\u5bb9\u5e76\u5728\u540c\u4e00\u65f6\u95f4\u63d0\u4f9b\u6d88\u8d39\u8005\u7684\u5e94\u7528\u7a0b\u5e8f\u3002")),(0,l.kt)("h3",{id:"21-\u5f02\u6b65\u4e8b\u4ef6"},"2.1 \u5f02\u6b65\u4e8b\u4ef6"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u751f\u4ea7\u8005\u5c06\u4e8b\u4ef6\u53d1\u9001\u7ed9\u4e0b\u6e38\u5373\u53ef\uff0c\u65e0\u9700\u7b49\u5f85\u54cd\u5e94\u3002")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e3b\u9898 TEST-TOPIC-HTTP-ASYNC\uff0c\u53ef\u4ee5\u901a\u8fc7 rocketmq-console \u6216\u8005 rocketmq tools \u547d\u4ee4")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u542f\u52a8\u6d88\u8d39\u7aef\uff0c\u8ba2\u9605 Topic"),(0,l.kt)("p",{parentName:"li"},"\u5f02\u6b65\u4e8b\u4ef6\u6d88\u8d39\u7aef\u4e3a SpringBoot Demo\uff0c\u8fd0\u884c Demo \u5373\u53ef\u542f\u52a8\u670d\u52a1\u5e76\u5b8c\u6210 Topic \u8ba2\u9605"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u8fd0\u884c org.apache.eventmesh.http.demo.sub.SpringBootDemoApplication \u7684 main \u65b9\u6cd5\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u542f\u52a8\u53d1\u9001\u7aef\uff0c\u53d1\u9001\u6d88\u606f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u8fd0\u884c org.apache.eventmesh.http.demo.pub.eventmeshmessage.AsyncPublishInstance \u7684 main \u65b9\u6cd5\n")),(0,l.kt)("p",null,"\u66f4\u591a\u5173\u4e8e HTTP \u90e8\u5206\u7684\u5185\u5bb9\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/sdk-java/http"},"EventMesh HTTP"),"\u3002"),(0,l.kt)("h2",{id:"3-grpc"},"3. GRPC"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"eventmesh-sdk-java \u5b9e\u73b0\u4e86 gRPC \u534f\u8bae\u3002\u5b83\u80fd\u5f02\u6b65\u6216\u540c\u6b65\u5730\u53d1\u9001\u4e8b\u4ef6\u5230 EventMesh Runtime\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u5b83\u53ef\u4ee5\u901a\u8fc7 Webhook \u548c\u4e8b\u4ef6\u6d41\u65b9\u5f0f\u8ba2\u9605\u6d88\u8d39\u4e8b\u4ef6\uff0c\u540c\u65f6\u4e5f\u652f\u6301 CNCF CloudEvents \u534f\u8bae\u3002")),(0,l.kt)("h3",{id:"31-\u5f02\u6b65\u4e8b\u4ef6\u53d1\u9001-\u548c-webhook-\u8ba2\u9605"},"3.1 \u5f02\u6b65\u4e8b\u4ef6\u53d1\u9001 \u548c Webhook \u8ba2\u9605"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u751f\u4ea7\u8005\u53ef\u4ee5\u5f02\u6b65\u5730\u53d1\u9001\u4e8b\u4ef6\u5230 EventMesh Runtime\uff0c\u4e0d\u9700\u8981\u7b49\u5f85\u4e8b\u4ef6\u50a8\u5b58\u5230 Event Store\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u5bf9\u4e8e Webhook \u6d88\u8d39\u8005\uff0c\u4e8b\u4ef6\u4f1a\u63a8\u9001\u5230\u6d88\u8d39\u8005\u7684 HTTP Endpoint URL\uff0c\u5373\u6d88\u8d39\u8005\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"subscribeUrl"),"\u3002\u6b64\u65b9\u6cd5\u548c\u524d\u9762\u7684 Http EventMesh client \u7c7b\u4f3c\u3002")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728 rocketmq \u521b\u5efa\u4e3b\u9898 TEST-TOPIC-GRPC-ASYNC"),(0,l.kt)("li",{parentName:"ul"},"\u542f\u52a8 publisher \u53d1\u9001\u4e8b\u4ef6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u8fd0\u884c org.apache.eventmesh.grpc.pub.eventmeshmessage.AsyncPublishInstance \u7684 main \u65b9\u6cd5\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u542f\u52a8 webhook \u6d88\u8d39\u8005")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u8fd0\u884c org.apache.eventmesh.grpc.sub.app.SpringBootDemoApplication \u7684 main \u65b9\u6cd5\n")),(0,l.kt)("h3",{id:"32-\u540c\u6b65\u4e8b\u4ef6\u53d1\u9001\u548c\u4e8b\u4ef6\u6d41\u8ba2\u9605"},"3.2 \u540c\u6b65\u4e8b\u4ef6\u53d1\u9001\u548c\u4e8b\u4ef6\u6d41\u8ba2\u9605"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u751f\u4ea7\u8005\u540c\u6b65\u5730\u53d1\u9001\u4e8b\u4ef6\u5230 EventMesh Runtime\uff0c\u540c\u65f6\u7b49\u5f85\u4e8b\u4ef6\u50a8\u5b58\u5230 Event Store\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u5bf9\u4e8e\u4e8b\u4ef6\u6d41\u6d88\u8d39\u8005\uff0c\u4e8b\u4ef6\u4ee5\u6d41\u7684\u5f62\u5f0f\u63a8\u9001\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"ReceiveMsgHook")," \u5ba2\u6237\u7aef\u3002\u6b64\u65b9\u6cd5\u7c7b\u4f3c\u4e8e EventMesh client\u3002")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728 rocketmq \u521b\u5efa\u4e3b\u9898 TEST-TOPIC-GRPC-RR"),(0,l.kt)("li",{parentName:"ul"},"\u542f\u52a8 Request-Reply publisher \u53d1\u9001\u4e8b\u4ef6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u8fd0\u884c org.apache.eventmesh.grpc.pub.eventmeshmessage.RequestReplyInstance \u7684 main \u65b9\u6cd5\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u542f\u52a8 stream subscriber")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u8fd0\u884c org.apache.eventmesh.grpc.sub.EventmeshAsyncSubscribe \u7684 main \u65b9\u6cd5\n")),(0,l.kt)("h3",{id:"33-\u6279\u91cf\u4e8b\u4ef6\u53d1\u5e03"},"3.3 \u6279\u91cf\u4e8b\u4ef6\u53d1\u5e03"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5f02\u6b65\u5730\u6279\u91cf\u53d1\u5e03\u591a\u4e2a\u4e8b\u4ef6\u5230 EventMesh Runtime\u3002")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728 rocketmq \u521b\u5efa\u4e3b\u9898 TEST-TOPIC-GRPC-ASYNC"),(0,l.kt)("li",{parentName:"ul"},"\u542f\u52a8 publisher \u6765\u6279\u91cf\u53d1\u5e03\u4e8b\u4ef6")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u8fd0\u884c org.apache.eventmesh.grpc.pub.eventmeshmessage.BatchPublishInstance \u7684 main \u65b9\u6cd5\n")),(0,l.kt)("p",null,"\u66f4\u591a\u5173\u4e8e gRPC \u90e8\u5206\u7684\u5185\u5bb9\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/sdk-java/grpc"},"EventMesh gRPC"),"\u3002"),(0,l.kt)("h2",{id:"4-\u4f7f\u7528-shell-\u811a\u672c\u8fd0\u884c-demo"},"4. \u4f7f\u7528 Shell \u811a\u672c\u8fd0\u884c Demo"),(0,l.kt)("p",null,"\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/instruction/store"},"Event Store")," \u548c ",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/instruction/runtime"},"EventMesh Runtime")," \u5b8c\u6210\u8fd0\u884c\u73af\u5883\u7684\u90e8\u7f72"),(0,l.kt)("p",null,"\u5b8c\u6210 Store \u548c Runtime \u7684\u90e8\u7f72\u540e\uff0c\u5c31\u53ef\u4ee5\u5728 eventmesh-examples \u6a21\u5757\u4e0b\u8fd0\u884c\u6211\u4eec\u7684 Demo \u6765\u4f53\u9a8c EventMesh \u4e86\uff1a"),(0,l.kt)("p",null,"gradle \u7f16\u8bd1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd apache-eventmesh-1.9.0-src/eventmesh-examples\ngradle clean dist\n\ncd ./dist/bin\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"demo_1",src:n(51019).Z,width:"1674",height:"1814"})),(0,l.kt)("h3",{id:"41-tcp"},"4.1 TCP"),(0,l.kt)("h4",{id:"tcp-sub"},"TCP Sub"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"bash tcp_eventmeshmessage_sub.sh\n")),(0,l.kt)("p",null,"\u6253\u5f00\u5bf9\u5e94 log \u6587\u4ef6\u67e5\u770b\u65e5\u5fd7\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd /root/apache-eventmesh-1.9.0-src/eventmesh-examples/dist/logs\ntail -f demo_tcp_pub.out\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"demo_2",src:n(88752).Z,width:"3360",height:"608"})),(0,l.kt)("h4",{id:"tcp-pub"},"TCP Pub"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"bash tcp_pub_eventmeshmessage.sh\n")),(0,l.kt)("p",null,"\u6253\u5f00\u5bf9\u5e94 log \u6587\u4ef6\u67e5\u770b\u65e5\u5fd7\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd /root/apache-eventmesh-1.9.0-src/eventmesh-examples/dist/logs\ntail -f demo_tcp_sub.out\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"demo_3",src:n(49037).Z,width:"3360",height:"938"})),(0,l.kt)("h3",{id:"42-tcp-broadcast"},"4.2 TCP Broadcast"),(0,l.kt)("h4",{id:"tcp-sub-broadcast"},"TCP Sub Broadcast"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sh tcp_sub_eventmeshmessage_broadcast.sh\n")),(0,l.kt)("p",null,"\u6253\u5f00\u5bf9\u5e94 log \u6587\u4ef6\u67e5\u770b\u65e5\u5fd7\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd /root/apache-eventmesh-1.9.0-src/eventmesh-examples/dist/logs\ntail -f demo_tcp_sub_broadcast.out\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"demo_4",src:n(49037).Z,width:"3360",height:"938"})),(0,l.kt)("h4",{id:"tcp-pub-broadcast"},"TCP Pub Broadcast"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sh tcp_pub_eventmeshmessage_broadcast.sh\n")),(0,l.kt)("p",null,"\u6253\u5f00\u5bf9\u5e94 log \u6587\u4ef6\u67e5\u770b\u65e5\u5fd7\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd /root/apache-eventmesh-1.9.0-src/eventmesh-examples/dist/logs\ntail -f demo_tcp_pub_broadcast.out\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"demo_5",src:n(45599).Z,width:"1674",height:"712"})),(0,l.kt)("h3",{id:"43-http"},"4.3 HTTP"),(0,l.kt)("h4",{id:"http-sub"},"HTTP Sub"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sh http_sub.sh\n")),(0,l.kt)("p",null,"\u6253\u5f00\u5bf9\u5e94 log \u6587\u4ef6\u67e5\u770b\u65e5\u5fd7\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd /root/apache-eventmesh-1.9.0-src/eventmesh-examples/dist/logs\ntail -f demo_http_sub.out\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"demo_6",src:n(7068).Z,width:"1676",height:"1602"})),(0,l.kt)("h4",{id:"http-pub"},"HTTP Pub"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sh http_pub_eventmeshmessage.sh\n")),(0,l.kt)("p",null,"\u6253\u5f00\u5bf9\u5e94 log \u6587\u4ef6\u67e5\u770b\u65e5\u5fd7\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd /root/apache-eventmesh-1.9.0-src/eventmesh-examples/dist/logs\ntail -f demo_http_pub.out\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"demo_7",src:n(3588).Z,width:"1678",height:"1358"})),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"/logs")," \u76ee\u5f55\u4e0b\u9762\u770b\u5230\u4e0d\u540c\u6a21\u5f0f\u7684\u8fd0\u884c\u65e5\u5fd7\u3002"))}i.isMDXComponent=!0},51019:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/demo_1-b291f31a55c282cc6775f5f581787295.png"},88752:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/demo_2-b61900f597947956b537e7152a515d08.png"},49037:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/demo_3-1371c099695cba603d6fb92bc386f769.png"},45599:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/demo_5-fcc659377a2ba205aea8a61ea71807d8.png"},7068:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/demo_6-9bac3a1ffcbd2bb5a655c4272b95dd69.png"},3588:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/demo_7-b9e8974276045974d66075f3de722268.png"}}]);