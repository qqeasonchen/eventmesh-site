"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[9619],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},v="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),v=p(n),u=r,d=v["".concat(o,".").concat(u)]||v[u]||m[u]||i;return n?a.createElement(d,s(s({ref:t},c),{},{components:n})):a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[v]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},56812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={},s="Knative Connector\u63d2\u4ef6",l={unversionedId:"design-document/event-handling-and-integration/knative-connector",id:"version-v1.8.0/design-document/event-handling-and-integration/knative-connector",title:"Knative Connector\u63d2\u4ef6",description:"\u51c6\u5907",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.8.0/design-document/01-event-handling-and-integration/07-knative-connector.md",sourceDirName:"design-document/01-event-handling-and-integration",slug:"/design-document/event-handling-and-integration/knative-connector",permalink:"/zh/docs/v1.8.0/design-document/event-handling-and-integration/knative-connector",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.8.0/design-document/01-event-handling-and-integration/07-knative-connector.md",tags:[],version:"v1.8.0",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EventMesh \u5de5\u4f5c\u6d41",permalink:"/zh/docs/v1.8.0/design-document/event-handling-and-integration/workflow"},next:{title:"EventMesh \u6307\u6807\uff08OpenTelemetry \u548c Prometheus\uff09",permalink:"/zh/docs/v1.8.0/design-document/observability/metrics-export"}},o={},p=[{value:"\u51c6\u5907",id:"\u51c6\u5907",level:2},{value:"\u521b\u5efaKnative Source\u548cSink",id:"\u521b\u5efaknative-source\u548csink",level:3},{value:"EventMesh\u914d\u7f6e\u6587\u4ef6",id:"eventmesh\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u6f14\u793a",id:"\u6f14\u793a",level:2},{value:"Knative\u53d1\u5e03\u4e8b\u4ef6\u6d88\u606f/EventMesh\u8ba2\u9605",id:"knative\u53d1\u5e03\u4e8b\u4ef6\u6d88\u606feventmesh\u8ba2\u9605",level:3},{value:"\u6b65\u9aa41\uff1a\u542f\u52a8\u4e00\u53f0EventMesh\u670d\u52a1\u5668",id:"\u6b65\u9aa41\u542f\u52a8\u4e00\u53f0eventmesh\u670d\u52a1\u5668",level:4},{value:"\u6b65\u9aa42\uff1a\u4eceKnative Source\u53d1\u5e03\u4e00\u6761\u6d88\u606f",id:"\u6b65\u9aa42\u4eceknative-source\u53d1\u5e03\u4e00\u6761\u6d88\u606f",level:4},{value:"\u6b65\u9aa43\uff1a\u4eceEventMesh\u8ba2\u9605",id:"\u6b65\u9aa43\u4eceeventmesh\u8ba2\u9605",level:4},{value:"\u9884\u671f\u7ed3\u679c",id:"\u9884\u671f\u7ed3\u679c",level:4},{value:"EventMessh\u53d1\u5e03\u4e8b\u4ef6\u6d88\u606f/Knative\u8ba2\u9605",id:"eventmessh\u53d1\u5e03\u4e8b\u4ef6\u6d88\u606fknative\u8ba2\u9605",level:3},{value:"\u6b65\u9aa41\uff1a\u542f\u52a8\u4e00\u53f0EventMesh\u670d\u52a1\u5668",id:"\u6b65\u9aa41\u542f\u52a8\u4e00\u53f0eventmesh\u670d\u52a1\u5668-1",level:4},{value:"\u6b65\u9aa42\uff1a\u4eceEventMesh\u53d1\u5e03\u4e00\u6761\u6d88\u606f",id:"\u6b65\u9aa42\u4eceeventmesh\u53d1\u5e03\u4e00\u6761\u6d88\u606f",level:4},{value:"\u6b65\u9aa43\uff1a\u4eceKnative\u8ba2\u9605",id:"\u6b65\u9aa43\u4eceknative\u8ba2\u9605",level:4},{value:"\u9884\u671f\u7ed3\u679c",id:"\u9884\u671f\u7ed3\u679c-1",level:4}],c={toc:p},v="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(v,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"knative-connector\u63d2\u4ef6"},"Knative Connector\u63d2\u4ef6"),(0,r.kt)("h2",{id:"\u51c6\u5907"},"\u51c6\u5907"),(0,r.kt)("h3",{id:"\u521b\u5efaknative-source\u548csink"},"\u521b\u5efaKnative Source\u548cSink"),(0,r.kt)("p",null,"\u6211\u4eec\u4f7f\u7528 ",(0,r.kt)("em",{parentName:"p"},"cloudevents-player")," ",(0,r.kt)("a",{parentName:"p",href:"https://knative.dev/docs/serving/"},"Knative\u670d\u52a1"),"\u4f5c\u4e3a\u4f8b\u5b50\u3002\u5982\u679c\u60a8\u4e0d\u77e5\u9053\u5982\u4f55\u521b\u5efa ",(0,r.kt)("em",{parentName:"p"},"cloudevents-player")," Knative\u670d\u52a1\u4f5c\u4e3asource\u548csink\uff0c\u8bf7\u6309\u7167\u8fd9\u4e2a",(0,r.kt)("a",{parentName:"p",href:"https://knative.dev/docs/getting-started/first-source/#creating-your-first-source"},"\u94fe\u63a5"),"\u7684\u6b65\u9aa4\u8fdb\u884c\u521b\u5efa\u3002"),(0,r.kt)("h3",{id:"eventmesh\u914d\u7f6e\u6587\u4ef6"},"EventMesh\u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c06\u4ee5\u4e0b\u914d\u7f6e\u52a0\u5165 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/blob/master/eventmesh-starter/build.gradle"},"eventmesh-starter/build.gradle")," \u6587\u4ef6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"plugins {\n    id 'application'\n}\n\napplication {\n    mainClass = project.hasProperty(\"mainClass\") ? project.getProperty(\"mainClass\") : 'org.apache.eventmesh.starter.StartUp'\n    applicationDefaultJvmArgs = [\n            '-Dlog4j.configurationFile=../eventmesh-runtime/conf/log4j2.xml', '-Deventmesh.log.home=../eventmesh-runtime/logs', '-Deventmesh.home=../eventmesh-runtime', '-DconfPath=../eventmesh-runtime/conf'\n    ]\n}\n\ndependencies {\n    implementation project(\":eventmesh-connector-plugin:eventmesh-connector-knative\")\n    implementation project(\":eventmesh-runtime\")\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c06\u4ee5\u4e0b\u914d\u7f6e\u52a0\u5165 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/blob/master/eventmesh-examples/build.gradle"},"eventmesh-examples/build.gradle"),"\u6587\u4ef6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"plugins {\n    id 'application'\n}\n\napplication {\n    mainClass = project.hasProperty(\"mainClass\") ? project.getProperty(\"mainClass\") : 'NULL'\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/blob/master/eventmesh-runtime/conf/eventmesh.properties"},"eventmesh-runtime/conf/eventmesh.properties")," \u6587\u4ef6\u4e2d\u8bbe\u7f6e",(0,r.kt)("inlineCode",{parentName:"li"},"eventMesh.connector.plugin.type=knative"),"\u53d8\u91cf")),(0,r.kt)("h2",{id:"\u6f14\u793a"},"\u6f14\u793a"),(0,r.kt)("h3",{id:"knative\u53d1\u5e03\u4e8b\u4ef6\u6d88\u606feventmesh\u8ba2\u9605"},"Knative\u53d1\u5e03\u4e8b\u4ef6\u6d88\u606f/EventMesh\u8ba2\u9605"),(0,r.kt)("h4",{id:"\u6b65\u9aa41\u542f\u52a8\u4e00\u53f0eventmesh\u670d\u52a1\u5668"},"\u6b65\u9aa41\uff1a\u542f\u52a8\u4e00\u53f0EventMesh\u670d\u52a1\u5668"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd eventmesh-starter\n$ ../gradlew -PmainClass=org.apache.eventmesh.starter.StartUp run\n")),(0,r.kt)("h4",{id:"\u6b65\u9aa42\u4eceknative-source\u53d1\u5e03\u4e00\u6761\u6d88\u606f"},"\u6b65\u9aa42\uff1a\u4eceKnative Source\u53d1\u5e03\u4e00\u6761\u6d88\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -i http://cloudevents-player.default.127.0.0.1.sslip.io -H "Content-Type: application/json" -H "Ce-Id: 123456789" -H "Ce-Specversion: 1.0" -H "Ce-Type: some-type" -H "Ce-Source: command-line" -d \'{"msg":"Hello CloudEvents!"}\'\n')),(0,r.kt)("h4",{id:"\u6b65\u9aa43\u4eceeventmesh\u8ba2\u9605"},"\u6b65\u9aa43\uff1a\u4eceEventMesh\u8ba2\u9605"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/blob/master/eventmesh-examples/src/main/java/org/apache/eventmesh/common/ExampleConstants.java"},"ExampleConstants.java")," \u6587\u4ef6\u4e2d\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"li"},'public static final String EVENTMESH_HTTP_ASYNC_TEST_TOPIC = "messages";'),"\u53d8\u91cf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd eventmesh-examples\n$ ../gradlew -PmainClass=org.apache.eventmesh.http.demo.sub.SpringBootDemoApplication run\n")),(0,r.kt)("h4",{id:"\u9884\u671f\u7ed3\u679c"},"\u9884\u671f\u7ed3\u679c"),(0,r.kt)("p",null,"\u4ee5\u4e0b",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"Hello CloudEvents!"),"\u7684\u6d88\u606f\u5c06\u4f1a\u6253\u5370\u5728EventMesh\u670d\u52a1\u5668\u7684\u63a7\u5236\u53f0\u4e0a\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'2022-09-05 16:37:58,237 INFO  [eventMesh-clientManage-] DefaultConsumer(DefaultConsumer.java:60) - \\\n[{"event":{"attributes":{"datacontenttype":"application/json","id":"123456789","mediaType":"application/json",\\\n"source":"command-line","specversion":"1.0","type":"some-type"},"data":{"msg":"Hello CloudEvents!"},"extensions":{}},\\\n"id":"123456789","receivedAt":"2022-09-05T10:37:49.537658+02:00[Europe/Madrid]","type":"RECEIVED"}]\n')),(0,r.kt)("h3",{id:"eventmessh\u53d1\u5e03\u4e8b\u4ef6\u6d88\u606fknative\u8ba2\u9605"},"EventMessh\u53d1\u5e03\u4e8b\u4ef6\u6d88\u606f/Knative\u8ba2\u9605"),(0,r.kt)("h4",{id:"\u6b65\u9aa41\u542f\u52a8\u4e00\u53f0eventmesh\u670d\u52a1\u5668-1"},"\u6b65\u9aa41\uff1a\u542f\u52a8\u4e00\u53f0EventMesh\u670d\u52a1\u5668"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd eventmesh-starter\n$ ../gradlew -PmainClass=org.apache.eventmesh.starter.StartUp run\n")),(0,r.kt)("h4",{id:"\u6b65\u9aa42\u4eceeventmesh\u53d1\u5e03\u4e00\u6761\u6d88\u606f"},"\u6b65\u9aa42\uff1a\u4eceEventMesh\u53d1\u5e03\u4e00\u6761\u6d88\u606f"),(0,r.kt)("p",null,"\u6211\u4eec\u7528Knative Connector\u7684\u6d4b\u8bd5\u7a0b\u5e8f\u6765\u6f14\u793a\u8fd9\u4e2a\u529f\u80fd\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd eventmesh-connector-plugin/eventmesh-connector-knative\n$ ../../gradlew clean test --tests KnativeProducerImplTest.testPublish\n")),(0,r.kt)("h4",{id:"\u6b65\u9aa43\u4eceknative\u8ba2\u9605"},"\u6b65\u9aa43\uff1a\u4eceKnative\u8ba2\u9605"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl http://cloudevents-player.default.127.0.0.1.sslip.io/messages\n")),(0,r.kt)("h4",{id:"\u9884\u671f\u7ed3\u679c-1"},"\u9884\u671f\u7ed3\u679c"),(0,r.kt)("p",null,"\u4ee5\u4e0b",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"Hello Knative from EventMesh!"),"\u7684\u6d88\u606f\u5c06\u4f1a\u6253\u5370\u5728EventMesh\u670d\u52a1\u5668\u7684\u63a7\u5236\u53f0\u4e0a\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'2022-09-05 16:52:41,633 INFO  [eventMesh-clientManage-] DefaultConsumer(DefaultConsumer.java:60) - \\\n[{"event":{"attributes":{"datacontenttype":"application/json","id":"1234","mediaType":"application/json",\\\n"source":"java-client","specversion":"1.0","type":"some-type"},"data":{"msg":["Hello Knative from EventMesh!"]},"extensions":{}},"id":"1234","receivedAt":"2022-09-05T10:52:32.999273+02:00[Europe/Madrid]","type":"RECEIVED"}]\n')))}m.isMDXComponent=!0}}]);