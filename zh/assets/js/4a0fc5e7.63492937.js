"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[9377],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>N});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},p=Object.keys(t);for(n=0;n<p.length;n++)a=p[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(n=0;n<p.length;n++)a=p[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),i=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):m(m({},e),t)),a},d=function(t){var e=i(t.components);return n.createElement(s.Provider,{value:e},t.children)},o="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,p=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),o=i(a),c=r,N=o["".concat(s,".").concat(c)]||o[c]||k[c]||p;return a?n.createElement(N,m(m({ref:e},d),{},{components:a})):n.createElement(N,m({ref:e},d))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var p=a.length,m=new Array(p);m[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[o]="string"==typeof t?t:r,m[1]=l;for(var i=2;i<p;i++)m[i]=a[i];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9708:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>m,default:()=>o,frontMatter:()=>p,metadata:()=>l,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const p={sidebar_position:1},m="EventMesh \u4ea7\u54c1\u8def\u7ebf\u56fe",l={unversionedId:"roadmap",id:"roadmap",title:"EventMesh \u4ea7\u54c1\u8def\u7ebf\u56fe",description:"\u4e0b\u8868\u5217\u51fa\u4e86 EventMesh \u7684\u65b0\u7279\u6027\u548c Bug \u4fee\u590d\u60c5\u51b5\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003 Release Notes\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/roadmap.md",sourceDirName:".",slug:"/roadmap",permalink:"/zh/docs/next/roadmap",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/docs/roadmap.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Apache EventMesh",permalink:"/zh/docs/next/introduction"},next:{title:"Event Store \u4e8b\u4ef6\u5b58\u50a8",permalink:"/zh/docs/next/instruction/store"}},s={},i=[{value:"List of Features and Milestones",id:"list-of-features-and-milestones",level:2},{value:"\u8fde\u63a5\u5668\u5b9e\u73b0\u72b6\u6001",id:"\u8fde\u63a5\u5668\u5b9e\u73b0\u72b6\u6001",level:2},{value:"\u4e8b\u4ef6\u5b58\u50a8\u5b9e\u73b0\u72b6\u6001",id:"\u4e8b\u4ef6\u5b58\u50a8\u5b9e\u73b0\u72b6\u6001",level:2}],d={toc:i};function o(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"eventmesh-\u4ea7\u54c1\u8def\u7ebf\u56fe"},"EventMesh \u4ea7\u54c1\u8def\u7ebf\u56fe"),(0,r.kt)("p",null,"\u4e0b\u8868\u5217\u51fa\u4e86 EventMesh \u7684\u65b0\u7279\u6027\u548c Bug \u4fee\u590d\u60c5\u51b5\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://eventmesh.apache.org/events/release-notes/v1.10.0/"},"Release Notes"),"\u3002"),(0,r.kt)("h2",{id:"list-of-features-and-milestones"},"List of Features and Milestones"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Reference"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.0.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support HTTP"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.0.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support TCP"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.0.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Pub/Sub Event"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.1.1")),(0,r.kt)("td",{parentName:"tr",align:null},"Provide Java SDK"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.1.1")),(0,r.kt)("td",{parentName:"tr",align:null},"Support HTTPS"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.2.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support RocketMQ as EventStore"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.2.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Heartbeat"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.3.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Integrate with OpenSchema"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.3.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Integrate with OpenTelemetry"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.3.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support CloudEvents"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.4.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support gRPC"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.5.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Provide Golang SDK"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.5.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Nacos Registry"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.5.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Mesh Bridge"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.5.0")),(0,r.kt)("td",{parentName:"tr",align:null},"Support  Federal Government"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.6.0 (to be released)")),(0,r.kt)("td",{parentName:"tr",align:null},"Integrate with Consul"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.6.0 (to be released)")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Webhook"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Implemented in 1.6.0 (to be released)")),(0,r.kt)("td",{parentName:"tr",align:null},"Support etcd"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"In Progress")),(0,r.kt)("td",{parentName:"tr",align:null},"Knative Eventing Infrastructure"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/790"},"GitHub Issue"),", ",(0,r.kt)("a",{parentName:"td",href:"https://issues.apache.org/jira/browse/COMDEV-463"},"GSoC '22"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"In Progress")),(0,r.kt)("td",{parentName:"tr",align:null},"Dashboard"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/700"},"GitHub Issue"),", ",(0,r.kt)("a",{parentName:"td",href:"https://issues.apache.org/jira/browse/COMDEV-465"},"GSoC '22"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"In Progress")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Kafka as EventStore"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/676"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"In Progress")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Pulsar as EventStore"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/676"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"In Progress")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Dledger"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"In Progress")),(0,r.kt)("td",{parentName:"tr",align:null},"Workflow"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"In Progress")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Redis"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"In Progress")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Mesh Bridge"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"In Progress")),(0,r.kt)("td",{parentName:"tr",align:null},"Support Zookeeper"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide NodeJS SDK"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/417"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"Transaction Event"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/697"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"Event Query Language (EQL)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/778"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"Metadata consistency persistent"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/817"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"Rust SDK"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/815"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"WebAssembly Runtime"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/576"},"GitHub Issue"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:null},"Filter Chain"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/issues/664"},"GitHub Issue"))))),(0,r.kt)("h2",{id:"\u8fde\u63a5\u5668\u5b9e\u73b0\u72b6\u6001"},"\u8fde\u63a5\u5668\u5b9e\u73b0\u72b6\u6001"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u670d\u52a1\u548c\u4e2d\u95f4\u4ef6"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u6e90"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u6c47"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-rocketmq"},"RocketMQ")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-kafka"},"Kafka")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-pulsar"},"Pulsar")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"./design-document/connect/rabbitmq-connector"},"RabbitMQ")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"./design-document/connect/http-connector"},"HTTP")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-jdbc"},"JDBC")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-spring"},"Spring")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-openfunction"},"OpenFunction")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-file"},"\u6587\u4ef6")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u90ae\u4ef6"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"./design-document/connect/redis-connector"},"Redis")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-s3"},"S3 \u5b58\u50a8")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ClickHouse"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"./design-document/connect/mongodb-connector"},"MongoDB")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-prometheus"},"Prometheus")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"./design-document/connect/knative-connector"},"Knative")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-pravega"},"Pravega")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u66f4\u591a\u8fde\u63a5\u5668\u6b63\u5728\u8ba1\u5212\u4e2d ..."),(0,r.kt)("td",{parentName:"tr",align:"center"},"N/A"),(0,r.kt)("td",{parentName:"tr",align:"center"},"N/A")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u5e73\u53f0\u548c\u4ea7\u54c1"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u6e90"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u6c47"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"./design-document/connect/lark-connector"},"\u98de\u4e66/Lark")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"./design-document/connect/dingtalk-connector"},"\u9489\u9489")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"./design-document/connect/wecom-connector"},"\u4f01\u4e1a\u5fae\u4fe1")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/eventmesh/tree/master/eventmesh-connectors/eventmesh-connector-wechat"},"\u5fae\u4fe1")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"GitHub"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"ChatGPT"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"./design-document/connect/slack-connector"},"Slack")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u66f4\u591a\u8fde\u63a5\u5668\u6b63\u5728\u8ba1\u5212\u4e2d ..."),(0,r.kt)("td",{parentName:"tr",align:"center"},"N/A"),(0,r.kt)("td",{parentName:"tr",align:"center"},"N/A")))),(0,r.kt)("h2",{id:"\u4e8b\u4ef6\u5b58\u50a8\u5b9e\u73b0\u72b6\u6001"},"\u4e8b\u4ef6\u5b58\u50a8\u5b9e\u73b0\u72b6\u6001"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u670d\u52a1\u548c\u4e2d\u95f4\u4ef6"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u63a5\u5165"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Topic \u7ba1\u7406"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"RocketMQ"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Kafka"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Standalone"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Pulsar"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"RabbitMQ"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Redis"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2b1c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u652f\u6301\u5b9e\u73b0\u66f4\u591a\u4e8b\u4ef6\u5b58\u50a8 ..."),(0,r.kt)("td",{parentName:"tr",align:"center"},"N/A"),(0,r.kt)("td",{parentName:"tr",align:"center"},"N/A")))))}o.isMDXComponent=!0}}]);