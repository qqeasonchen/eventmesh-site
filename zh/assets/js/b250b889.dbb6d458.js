"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[2547],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>v});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var h=n.createContext({}),l=function(e){var t=n.useContext(h),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=l(e.components);return n.createElement(h.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,h=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),c=l(a),m=r,v=c["".concat(h,".").concat(m)]||c[m]||p[m]||s;return a?n.createElement(v,i(i({ref:t},o),{},{components:a})):n.createElement(v,i({ref:t},o))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=m;var u={};for(var h in t)hasOwnProperty.call(t,h)&&(u[h]=t[h]);u.originalType=e,u[c]="string"==typeof e?e:r,i[1]=u;for(var l=2;l<s;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},86613:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const s={title:"v1.9.0 Release",date:new Date("2023-06-30T18:00:00.000Z"),hide_table_of_contents:!1,author:"xmw1992",author_url:"https://github.com/xmw1992",author_image_url:"https://avatars.githubusercontent.com/u/13237619",sidebar_position:11},i=void 0,u={unversionedId:"release-notes/v1.9.0",id:"release-notes/v1.9.0",title:"v1.9.0 Release",description:"Feature",source:"@site/events/release-notes/v1.9.0.md",sourceDirName:"release-notes",slug:"/release-notes/v1.9.0",permalink:"/zh/events/release-notes/v1.9.0",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"v1.9.0 Release",date:"2023-06-30T18:00:00.000Z",hide_table_of_contents:!1,author:"xmw1992",author_url:"https://github.com/xmw1992",author_image_url:"https://avatars.githubusercontent.com/u/13237619",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"v1.10.0 Release",permalink:"/zh/events/release-notes/v1.10.0"},next:{title:"v1.8.0 Release",permalink:"/zh/events/release-notes/v1.8.0"}},h={},l=[{value:"Feature",id:"feature",level:2},{value:"Enhancement",id:"enhancement",level:2},{value:"Bug",id:"bug",level:2},{value:"Doc",id:"doc",level:2}],o={toc:l},c="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"feature"},"Feature"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/3805"},"Feature #3805")," Add EventMesh Connector API"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/3913"},"Feature #3913")," Add Source Connector RocketMQ Module"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/3920"},"Feature #3920")," Add Sink Connector RocketMQ Module"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/4123"},"Feature #4123")," Add EventMesh OpenFunction Source/Sink Connector")),(0,r.kt)("h2",{id:"enhancement"},"Enhancement"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/3288"},"Enhancement #3288")," Refactor ConsumerGroupManager"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/3290"},"Enhancement #3290")," Refactor ConsumerManager"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/3323"},"Enhancement #3323")," Unsubscribe from a single topic"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/3339"},"Enhancement #3339")," Refactor EventMeshGrpcProducer"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/3485"},"Enhancement #3485")," Optimize Grpc protocol for Java"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/3870"},"Enhancement #3870")," Specifying the initial capacity of Map can save resources"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/3897"},"Enhancement #3897")," Admin, RocketMQAdmin, StandaloneAdmin and AbstractRmqAdmin can be more clearer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/3917"},"Enhancement #3917")," GrpcSummaryMetrics and TcpSummaryMetrics can share an parent class"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/3983"},"Enhancement #3983")," Optimize MessageQueue"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/4069"},"Enhancement #4069")," Add TLSConfig to registry plugin Consul."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/4133"},"Enhancement #4133")," Optimize OpenFunctionSourceConnector poll")),(0,r.kt)("h2",{id:"bug"},"Bug"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/3269"},"Bug #3269")," Load plugin failure"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/3271"},"Bug #3271")," Fix handle http message throw IllegalReferenceCountException"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/3273"},"Bug #3273")," Incorrect validation may cause the batch send of events to fail"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/3284"},"Bug #3284")," HTTP server HttpRequest release bug"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/3306"},"Bug #3306")," KafkaConsumerRunner Thread Closes Unexceptedly"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/3307"},"Bug #3307")," Kafka Consumer Closing Twice"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/3458"},"Bug #3458")," EventMeshHttpProducer publish Read timed out"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/3496"},"Bug #3496")," Can't build on jdk17"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/3595"},"Bug #3595")," Throw StorageResourceServiceKnativeImpl StorageResourceServiceKnativeImpl when start runtime with start.sh"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/3667"},"Bug #3667")," Rocketmq request callback timeout"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/3707"},"Bug #3707")," Thread leak exists when rocketmq consumer was shutdown"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/4141"},"Bug #4141")," GRPC subscribe error"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/4150"},"Bug #4150")," Fix ci compile error for JDK 11 in eventmesh-connector-openfunction"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/4144"},"Bug #4144")," Subscription is almost impossible to be cancelled when the TCP sub client is closed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/4161"},"Bug #4161")," JsonUtils not support serialize java.time.LocalDate"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/4164"},"Bug #4164")," EventMeshGrpcConsumer client subscribe topic error"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/4166"},"Bug #4166")," AsyncPublishInstance has no push messages.")),(0,r.kt)("h2",{id:"doc"},"Doc"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/3453"},"Doc #3453")," There are no images used in the document."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/3942"},"Doc #3942")," Update README.zh-CN.md")))}p.isMDXComponent=!0}}]);