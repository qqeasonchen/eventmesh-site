"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[4006],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),i=c(n),h=s,d=i["".concat(p,".").concat(h)]||i[h]||m[h]||r;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[i]="string"==typeof e?e:s,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},62820:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),s=(n(67294),n(3905));const r={},o="Run eventmesh-sdk-java demo",l={unversionedId:"instruction/demo",id:"version-v1.3.0/instruction/demo",title:"Run eventmesh-sdk-java demo",description:"Maven Central",source:"@site/versioned_docs/version-v1.3.0/instruction/05-demo.md",sourceDirName:"instruction",slug:"/instruction/demo",permalink:"/docs/v1.3.0/instruction/demo",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.3.0/instruction/05-demo.md",tags:[],version:"v1.3.0",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EventMesh Runtime with Docker",permalink:"/docs/v1.3.0/instruction/runtime-with-docker"},next:{title:"EventMesh Runtime Protocol",permalink:"/docs/v1.3.0/design-document/event-handling-and-integration/runtime-protocol"}},p={},c=[{value:"1. TCP DEMO",id:"1-tcp-demo",level:2},{value:"1.1 ASYNC",id:"11-async",level:3},{value:"1.2 BROADCAST",id:"12-broadcast",level:3},{value:"2 HTTP DEMO",id:"2-http-demo",level:2},{value:"2.1 ASYNC",id:"21-async",level:3},{value:"3 GRPC DEMO",id:"3-grpc-demo",level:2},{value:"3.1 ASYNC PUBLISH &amp; WEBHOOK SUBSCRIBE",id:"31-async-publish--webhook-subscribe",level:3},{value:"3.2 SYNC PUBLISH &amp; STREAM SUBSCRIBE",id:"32-sync-publish--stream-subscribe",level:3},{value:"3.3 PUBLISH BATCH MESSAGE",id:"33-publish-batch-message",level:3},{value:"4. Run these demos by yourself",id:"4-run-these-demos-by-yourself",level:2},{value:"4.1 TCP",id:"41-tcp",level:3},{value:"4.2 TCP Broadcast",id:"42-tcp-broadcast",level:3},{value:"4.3 HTTP",id:"43-http",level:3}],u={toc:c},i="wrapper";function m(e){let{components:t,...r}=e;return(0,s.kt)(i,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"run-eventmesh-sdk-java-demo"},"Run eventmesh-sdk-java demo"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://maven-badges.herokuapp.com/maven-central/org.apache.eventmesh/eventmesh-sdk-java"},(0,s.kt)("img",{parentName:"a",src:"https://maven-badges.herokuapp.com/maven-central/org.apache.eventmesh/eventmesh-sdk-java/badge.svg",alt:"Maven Central"}))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"EventMesh-sdk-java as the client\uff0cand comminucate with eventmesh-runtime\uff0cto finish the message sub and pub"),(0,s.kt)("p",{parentName:"blockquote"},"EventMesh-sdk-java support both async and broadcast."),(0,s.kt)("p",{parentName:"blockquote"},"EventMesh-sdk-java support HTTP, TCP and gRPC.")),(0,s.kt)("p",null,"The test demos of TCP, HTTP \u548c GRPC are in the module ",(0,s.kt)("strong",{parentName:"p"},"eventmesh-examples"),":"),(0,s.kt)("h2",{id:"1-tcp-demo"},"1. TCP DEMO"),(0,s.kt)("h3",{id:"11-async"},"1.1 ASYNC"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Start consumer to subscribe the topic (we have created the TEST-TOPIC-TCP-ASYNC by default, you can also create other topic to test)")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Run the main method of org.apache.eventmesh.tcp.demo.sub.eventmeshmessage.AsyncSubscribe\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Start producer to publish async message")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Run the main method of org.apache.eventmesh.tcp.demo.pub.eventmeshmessage.AsyncPublish\n")),(0,s.kt)("h3",{id:"12-broadcast"},"1.2 BROADCAST"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Start subscriber to subscribe the topic (we have created the TEST-TOPIC-TCP-BROADCAST by default, you can also create other topic to test)")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Run the main method of org.apache.eventmesh.tcp.demo.sub.eventmeshmessage.AsyncSubscribeBroadcast\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Start publisher to publish async message")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Run the main method of org.apache.eventmesh.tcp.demo.pub.eventmeshmessage.AsyncPublishBroadcast\n")),(0,s.kt)("p",null,"More information about EventMesh-TCP, please refer to ",(0,s.kt)("a",{parentName:"p",href:"/docs/v1.3.0/sdk-java/tcp"},"EventMesh TCP")),(0,s.kt)("h2",{id:"2-http-demo"},"2 HTTP DEMO"),(0,s.kt)("h3",{id:"21-async"},"2.1 ASYNC"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The subscriber is a SpringBoot demo, so run this demo to start subscriber (we have created the topic TEST-TOPIC-HTTP-ASYNC by default, you can also create other topic to test)")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Run the main method of org.apache.eventmesh.http.demo.sub.SpringBootDemoApplication\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Start publisher to publish message")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Run the main method of org.apache.eventmesh.http.demo.pub.eventmeshmessage.AsyncPublishInstance\n")),(0,s.kt)("p",null,"More information about EventMesh-HTTP, please refer to ",(0,s.kt)("a",{parentName:"p",href:"/docs/v1.3.0/sdk-java/http"},"EventMesh HTTP")),(0,s.kt)("h2",{id:"3-grpc-demo"},"3 GRPC DEMO"),(0,s.kt)("h3",{id:"31-async-publish--webhook-subscribe"},"3.1 ASYNC PUBLISH & WEBHOOK SUBSCRIBE"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Start publisher to publish message (we have created the topic TEST-TOPIC-GRPC-ASYNC by default, you can also create other topic to test)")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Run the main method of org.apache.eventmesh.grpc.pub.eventmeshmessage.AsyncPublishInstance\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Start webhook subscriber")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Run the main method of org.apache.eventmesh.grpc.sub.app.SpringBootDemoApplication\n")),(0,s.kt)("h3",{id:"32-sync-publish--stream-subscribe"},"3.2 SYNC PUBLISH & STREAM SUBSCRIBE"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Start Request-Reply publisher to publish message (we have created the topic TEST-TOPIC-GRPC-RR by default, you can also create other topic to test)")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Run the main method of org.apache.eventmesh.grpc.pub.eventmeshmessage.RequestReplyInstance\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Start stream subscriber")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Run the main method of org.apache.eventmesh.grpc.sub.EventmeshAsyncSubscribe\n")),(0,s.kt)("h3",{id:"33-publish-batch-message"},"3.3 PUBLISH BATCH MESSAGE"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Start publisher to publish batch message (we have created the TEST-TOPIC-GRPC-ASYNC by default, you can also create other topic to test)")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Run the main method of org.apache.eventmesh.grpc.pub.eventmeshmessage.BatchPublishInstance\n")),(0,s.kt)("p",null,"More information about EventMesh-gRPC, please refer to ",(0,s.kt)("a",{parentName:"p",href:"/docs/v1.3.0/sdk-java/grpc"},"EventMesh gRPC")),(0,s.kt)("h2",{id:"4-run-these-demos-by-yourself"},"4. Run these demos by yourself"),(0,s.kt)("p",null,"Please refer to ",(0,s.kt)("a",{parentName:"p",href:"/docs/v1.3.0/instruction/store"},"EventMesh Store")," and ",(0,s.kt)("a",{parentName:"p",href:"/docs/v1.3.0/instruction/runtime"},"EventMesh Runtime")," to finish the necessary deployment before try our demo"),(0,s.kt)("p",null,"After finishing the deployment of store and runtime, you can run our demos in module ",(0,s.kt)("inlineCode",{parentName:"p"},"eventmesh-examples"),":"),(0,s.kt)("p",null,"gradle\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"cd apache-eventmesh-1.9.0-src/eventmesh-examples\ngradle clean dist\n\ncd ./dist/bin\n")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"demo_1",src:n(51019).Z,width:"1674",height:"1814"})),(0,s.kt)("h3",{id:"41-tcp"},"4.1 TCP"),(0,s.kt)("p",null,"TCP Sub"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"bash tcp_eventmeshmessage_sub.sh\n")),(0,s.kt)("p",null,"Open the corresponding log file to view the log:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"cd /root/apache-eventmesh-1.9.0-src/eventmesh-examples/dist/logs\ntail -f demo_tcp_pub.out\n")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"demo_2",src:n(88752).Z,width:"3360",height:"608"})),(0,s.kt)("p",null,"TCP Pub"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"bash tcp_pub_eventmeshmessage.sh\n")),(0,s.kt)("p",null,"Open the corresponding log file to view the log:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"cd /root/apache-eventmesh-1.9.0-src/eventmesh-examples/dist/logs\ntail -f demo_tcp_sub.out\n")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"demo_3",src:n(49037).Z,width:"3360",height:"938"})),(0,s.kt)("h3",{id:"42-tcp-broadcast"},"4.2 TCP Broadcast"),(0,s.kt)("p",null,"TCP Sub Broadcast"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"sh tcp_sub_eventmeshmessage_broadcast.sh\n")),(0,s.kt)("p",null,"Open the corresponding log file to view the log:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"cd /root/apache-eventmesh-1.9.0-src/eventmesh-examples/dist/logs\ntail -f demo_tcp_sub_broadcast.out\n")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"demo_4",src:n(98456).Z,width:"1676",height:"1198"})),(0,s.kt)("p",null,"TCP Pub Broadcast"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"sh tcp_pub_eventmeshmessage_broadcast.sh\n")),(0,s.kt)("p",null,"Open the corresponding log file to view the log:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"cd /root/apache-eventmesh-1.9.0-src/eventmesh-examples/dist/logs\ntail -f demo_tcp_pub_broadcast.out\n")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"demo_5",src:n(45599).Z,width:"1674",height:"712"})),(0,s.kt)("h3",{id:"43-http"},"4.3 HTTP"),(0,s.kt)("p",null,"HTTP Sub"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"sh http_sub.sh\n")),(0,s.kt)("p",null,"Open the corresponding log file to view the log:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"cd /root/apache-eventmesh-1.9.0-src/eventmesh-examples/dist/logs\ntail -f demo_http_sub.out\n")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"demo_6",src:n(7068).Z,width:"1676",height:"1602"})),(0,s.kt)("p",null,"HTTP Pub"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"sh http_pub_eventmeshmessage.sh\n")),(0,s.kt)("p",null,"Open the corresponding log file to view the log:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"cd /root/apache-eventmesh-1.9.0-src/eventmesh-examples/dist/logs\ntail -f demo_http_pub.out\n")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"demo_7",src:n(3588).Z,width:"1678",height:"1358"})),(0,s.kt)("p",null,"You can see the run logs for the different modes under the ",(0,s.kt)("inlineCode",{parentName:"p"},"/logs")," directory."))}m.isMDXComponent=!0},51019:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/demo_1-b291f31a55c282cc6775f5f581787295.png"},88752:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/demo_2-b61900f597947956b537e7152a515d08.png"},49037:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/demo_3-1371c099695cba603d6fb92bc386f769.png"},98456:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/demo_4-5031b1cb06595792ea59b7ba07da9b52.png"},45599:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/demo_5-fcc659377a2ba205aea8a61ea71807d8.png"},7068:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/demo_6-9bac3a1ffcbd2bb5a655c4272b95dd69.png"},3588:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/demo_7-b9e8974276045974d66075f3de722268.png"}}]);