"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[3613],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),i=p(n),h=r,d=i["".concat(u,".").concat(h)]||i[h]||m[h]||s;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[i]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>i,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const s={},o="Run our demos",l={unversionedId:"instruction/demo",id:"instruction/demo",title:"Run our demos",description:"Maven Central",source:"@site/docs/instruction/03-demo.md",sourceDirName:"instruction",slug:"/instruction/demo",permalink:"/zh/docs/instruction/demo",draft:!1,editUrl:"https://github.com/apache/incubator-eventmesh-site/edit/master/docs/instruction/03-demo.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EventMesh Runtime",permalink:"/zh/docs/instruction/runtime"},next:{title:"HTTP Protocol",permalink:"/zh/docs/sdk-java/http"}},u={},p=[{value:"1 TCP DEMO",id:"1-tcp-demo",level:2},{value:"1.1 ASYNC",id:"11-async",level:3},{value:"1.2 BROADCAST",id:"12-broadcast",level:3},{value:"2 HTTP DEMO",id:"2-http-demo",level:2},{value:"2.1 ASYNC",id:"21-async",level:3},{value:"3 GRPC DEMO",id:"3-grpc-demo",level:2},{value:"3.1 ASYNC PUBLISH &amp; WEBHOOK SUBSCRIBE",id:"31-async-publish--webhook-subscribe",level:3},{value:"3.2 SYNC PUBLISH &amp; STREAM SUBSCRIBE",id:"32-sync-publish--stream-subscribe",level:3},{value:"3.3 PUBLISH BATCH MESSAGE",id:"33-publish-batch-message",level:3},{value:"4 Run these demos by yourself",id:"4-run-these-demos-by-yourself",level:2},{value:"TCP Sub",id:"tcp-sub",level:3},{value:"TCP Pub",id:"tcp-pub",level:3},{value:"TCP Sub Broadcast",id:"tcp-sub-broadcast",level:3},{value:"TCP Pub Broadcast",id:"tcp-pub-broadcast",level:3},{value:"HTTP Sub",id:"http-sub",level:3},{value:"HTTP Pub",id:"http-pub",level:3}],c={toc:p};function i(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"run-our-demos"},"Run our demos"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://maven-badges.herokuapp.com/maven-central/org.apache.eventmesh/eventmesh-sdk-java"},(0,r.kt)("img",{parentName:"a",src:"https://maven-badges.herokuapp.com/maven-central/org.apache.eventmesh/eventmesh-sdk-java/badge.svg",alt:"Maven Central"}))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"EventMesh-sdk-java as the client\uff0cand comminucate with eventmesh-runtime\uff0cto finish the message sub and pub"),(0,r.kt)("p",{parentName:"blockquote"},"EventMesh-sdk-java support both async and broadcast."),(0,r.kt)("p",{parentName:"blockquote"},"EventMesh-sdk-java support HTTP, TCP and gRPC.")),(0,r.kt)("p",null,"The test demos of TCP, HTTP \u548c GRPC are in the module ",(0,r.kt)("strong",{parentName:"p"},"eventmesh-examples")),(0,r.kt)("h2",{id:"1-tcp-demo"},"1 TCP DEMO"),(0,r.kt)("h3",{id:"11-async"},"1.1 ASYNC"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start consumer to subscribe the topic (we have created the TEST-TOPIC-TCP-ASYNC by default, you can also create other topic to test)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Run the main method of org.apache.eventmesh.tcp.demo.sub.eventmeshmessage.AsyncSubscribe\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start producer to publish async message")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Run the main method of org.apache.eventmesh.tcp.demo.pub.eventmeshmessage.AsyncPublish\n")),(0,r.kt)("h3",{id:"12-broadcast"},"1.2 BROADCAST"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start subscriber to subscribe the topic (we have created the TEST-TOPIC-TCP-BROADCAST by default, you can also create other topic to test)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Run the main method of org.apache.eventmesh.tcp.demo.sub.eventmeshmessage.AsyncSubscribeBroadcast\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start publisher to publish async message")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Run the main method of org.apache.eventmesh.tcp.demo.pub.eventmeshmessage.AsyncPublishBroadcast\n")),(0,r.kt)("p",null,"More information about EventMesh-TCP, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sdk-java/03-tcp.md"},"EventMesh TCP")),(0,r.kt)("h2",{id:"2-http-demo"},"2 HTTP DEMO"),(0,r.kt)("h3",{id:"21-async"},"2.1 ASYNC"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The subscriber is a SpringBoot demo, so run this demo to start subscriber (we have created the topic TEST-TOPIC-HTTP-ASYNC by default, you can also create other topic to test)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Run the main method of org.apache.eventmesh.http.demo.sub.SpringBootDemoApplication\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start publisher to publish message")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Run the main method of org.apache.eventmesh.http.demo.pub.eventmeshmessage.AsyncPublishInstance\n")),(0,r.kt)("p",null,"More information about EventMesh-HTTP, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sdk-java/02-http.md"},"EventMesh HTTP")),(0,r.kt)("h2",{id:"3-grpc-demo"},"3 GRPC DEMO"),(0,r.kt)("h3",{id:"31-async-publish--webhook-subscribe"},"3.1 ASYNC PUBLISH & WEBHOOK SUBSCRIBE"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start publisher to publish message (we have created the topic TEST-TOPIC-GRPC-ASYNC by default, you can also create other topic to test)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Run the main method of org.apache.eventmesh.grpc.pub.eventmeshmessage.AsyncPublishInstance\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start webhook subscriber")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Run the main method of org.apache.eventmesh.grpc.sub.app.SpringBootDemoApplication\n")),(0,r.kt)("h3",{id:"32-sync-publish--stream-subscribe"},"3.2 SYNC PUBLISH & STREAM SUBSCRIBE"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start Request-Reply publisher to publish message (we have created the topic TEST-TOPIC-GRPC-RR by default, you can also create other topic to test)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Run the main method of org.apache.eventmesh.grpc.pub.eventmeshmessage.RequestReplyInstance\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start stream subscriber")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Run the main method of org.apache.eventmesh.grpc.sub.EventmeshAsyncSubscribe\n")),(0,r.kt)("h3",{id:"33-publish-batch-message"},"3.3 PUBLISH BATCH MESSAGE"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start publisher to publish batch message (we have created the TEST-TOPIC-GRPC-ASYNC by default, you can also create other topic to test)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Run the main method of org.apache.eventmesh.grpc.pub.eventmeshmessage.BatchPublishInstance\n")),(0,r.kt)("p",null,"More information about EventMesh-gRPC, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sdk-java/04-grpc.md"},"EventMesh gRPC")),(0,r.kt)("h2",{id:"4-run-these-demos-by-yourself"},"4 Run these demos by yourself"),(0,r.kt)("p",null,"Please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/instruction/01-store.md"},"EventMesh Store")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/instruction/02-runtime.md"},"EventMesh Runtime")," to finish the necessary deployment before try our demo"),(0,r.kt)("p",null,"After finishing the deployment of store and runtime, you can run our demos in module ",(0,r.kt)("inlineCode",{parentName:"p"},"eventmesh-examples"),":"),(0,r.kt)("h3",{id:"tcp-sub"},"TCP Sub"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd bin\nsh tcp_eventmeshmessage_sub.sh\n")),(0,r.kt)("h3",{id:"tcp-pub"},"TCP Pub"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd bin\nsh tcp_pub_eventmeshmessage.sh\n")),(0,r.kt)("h3",{id:"tcp-sub-broadcast"},"TCP Sub Broadcast"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd bin\nsh tcp_sub_eventmeshmessage_broadcast.sh\n")),(0,r.kt)("h3",{id:"tcp-pub-broadcast"},"TCP Pub Broadcast"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd bin\nsh tcp_pub_eventmeshmessage_broadcast.sh\n")),(0,r.kt)("h3",{id:"http-sub"},"HTTP Sub"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd bin\nsh http_sub.sh\n")),(0,r.kt)("h3",{id:"http-pub"},"HTTP Pub"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd bin\nsh http_pub_eventmeshmessage.sh\n")),(0,r.kt)("p",null,"You can review the log in the folder ",(0,r.kt)("inlineCode",{parentName:"p"},"/logs")))}i.isMDXComponent=!0}}]);