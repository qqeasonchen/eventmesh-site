"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[4982],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>c});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},p=Object.keys(t);for(n=0;n<p.length;n++)a=p[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(n=0;n<p.length;n++)a=p[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),d=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):m(m({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(i.Provider,{value:e},t.children)},o="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,p=t.originalType,i=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),o=d(a),u=r,c=o["".concat(i,".").concat(u)]||o[u]||k[u]||p;return a?n.createElement(c,m(m({ref:e},s),{},{components:a})):n.createElement(c,m({ref:e},s))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var p=a.length,m=new Array(p);m[0]=u;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l[o]="string"==typeof t?t:r,m[1]=l;for(var d=2;d<p;d++)m[d]=a[d];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},62215:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>m,default:()=>o,frontMatter:()=>p,metadata:()=>l,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const p={sidebar_position:1},m="Development Roadmap",l={unversionedId:"roadmap",id:"version-v1.10.0/roadmap",title:"Development Roadmap",description:"The development roadmap of Apache EventMesh is an overview of the planned features and milestones involved in the next several releases. The recent features and bug fixes are documented in the Release Notes. The order of the features listed below doesn't correspond to their priorities.",source:"@site/versioned_docs/version-v1.10.0/roadmap.md",sourceDirName:".",slug:"/roadmap",permalink:"/docs/roadmap",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.10.0/roadmap.md",tags:[],version:"v1.10.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction to EventMesh",permalink:"/docs/introduction"},next:{title:"Event Store",permalink:"/docs/instruction/store"}},i={},d=[{value:"List of Features and Milestones",id:"list-of-features-and-milestones",level:2},{value:"Connector Implementation Status",id:"connector-implementation-status",level:2},{value:"Event Store Implementation Status",id:"event-store-implementation-status",level:2}],s={toc:d};function o(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"development-roadmap"},"Development Roadmap"),(0,r.kt)("p",null,"The development roadmap of Apache EventMesh is an overview of the planned features and milestones involved in the next several releases. The recent features and bug fixes are documented in the ",(0,r.kt)("a",{parentName:"p",href:"https://eventmesh.apache.org/events/release-notes/v1.10.0/"},"Release Notes"),". The order of the features listed below doesn't correspond to their priorities."),(0,r.kt)("h2",{id:"list-of-features-and-milestones"},"List of Features and Milestones"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Reference"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.0.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support HTTP"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.0.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support TCP"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.0.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Pub/Sub Event"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.1.1")),(0,r.kt)("td",{parentName:"tr",align:null},"Provide Java SDK"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.1.1")),(0,r.kt)("td",{parentName:"tr",align:null},"Support HTTPS"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.2.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support RocketMQ as EventStore"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.2.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Heartbeat"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.3.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Integrate with OpenSchema"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.3.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Integrate with OpenTelemetry"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.3.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support CloudEvents"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.4.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support gRPC"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.5.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Provide Golang SDK"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.5.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Nacos Registry"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.5.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Mesh Bridge"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.5.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support  Federal Government"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.5.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Mesh Bridge"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.6.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Integrate with Consul"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.6.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Webhook"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.6.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support etcd"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.7.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Knative Eventing Infrastructure"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/issues/790"},"GitHub Issue"),", ",(0,r.kt)("a",{parentName:"td",href:"https://issues.apache.org/jira/browse/COMDEV-463"},"GSoC '22"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.7.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Pravega as EventStore"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/issues/270"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.7.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Kafka as EventStore"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/issues/676"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.7.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Pulsar as EventStore"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/issues/676"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.7.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support CNCF Serverless Workflow"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.7.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Redis"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.7.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Provide Rust SDK"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/issues/815"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.7.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Zookeeper"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.7.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support RabbitMQ as EventStore"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/issues/1553"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.8.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Provide Dashboard"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/issues/700"},"GitHub Issue"),", ",(0,r.kt)("a",{parentName:"td",href:"https://issues.apache.org/jira/browse/COMDEV-465"},"GSoC '22"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"In Progress")),(0,r.kt)("td",{parentName:"tr",align:null},"Source/Sink Connector"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/3492"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"In Progress")),(0,r.kt)("td",{parentName:"tr",align:null},"K8s integration"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/3327"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"In Progress")),(0,r.kt)("td",{parentName:"tr",align:null},"OpenFunction integration"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/2040"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"In Progress")),(0,r.kt)("td",{parentName:"tr",align:null},"OpenSergo integration"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/2805"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"Transaction Event"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/issues/697"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide NodeJS SDK"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide PHP    SDK"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/3"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"Event Query Language (EQL)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"WebAssembly Runtime"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/"},"GitHub Issue"))))),(0,r.kt)("h2",{id:"connector-implementation-status"},"Connector Implementation Status"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Service / Middleware"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Source"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Sink"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-rocketmq"},"RocketMQ")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-kafka"},"Kafka")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-pulsar"},"Pulsar")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"./design-document/connect/rabbitmq-connector"},"RabbitMQ")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"./design-document/connect/http-connector"},"HTTP")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-jdbc"},"JDBC")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-spring"},"Spring")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-openfunction"},"OpenFunction")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-file"},"File")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Email"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"./design-document/connect/redis-connector"},"Redis")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-s3"},"S3 File")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ClickHouse"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"./design-document/connect/mongodb-connector"},"MongoDB")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-prometheus"},"Prometheus")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"./design-document/connect/knative-connector"},"Knative")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-pravega"},"Pravega")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"More connectors will be added..."),(0,r.kt)("td",{parentName:"tr",align:"center"},"N/A"),(0,r.kt)("td",{parentName:"tr",align:"center"},"N/A")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Platform / Product"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Source"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Sink"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"./design-document/connect/lark-connector"},"Feishu/Lark")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"./design-document/connect/dingtalk-connector"},"DingTalk")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"./design-document/connect/wecom-connector"},"WeCom")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-wechat"},"WeChat")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"GitHub"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ChatGPT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"./design-document/connect/slack-connector"},"Slack")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"More connectors will be added..."),(0,r.kt)("td",{parentName:"tr",align:"center"},"N/A"),(0,r.kt)("td",{parentName:"tr",align:"center"},"N/A")))),(0,r.kt)("h2",{id:"event-store-implementation-status"},"Event Store Implementation Status"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Service / Middleware"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Ingress"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Topic Management"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"RocketMQ"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Kafka"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Standalone"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Pulsar"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"RabbitMQ"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Redis"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Support for more Event Stores..."),(0,r.kt)("td",{parentName:"tr",align:"center"},"N/A"),(0,r.kt)("td",{parentName:"tr",align:"center"},"N/A")))))}o.isMDXComponent=!0}}]);