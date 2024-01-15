"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[7268],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),v=r,d=m["".concat(l,".").concat(v)]||m[v]||u[v]||s;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=v;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},62448:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const s={},i="Knative",o={unversionedId:"design-document/connect/knative-connector",id:"version-v1.10.0/design-document/connect/knative-connector",title:"Knative",description:"With the changes in the design of the Knative connector, this document is currently temporarily outdated.",source:"@site/versioned_docs/version-v1.10.0/design-document/03-connect/05-knative-connector.md",sourceDirName:"design-document/03-connect",slug:"/design-document/connect/knative-connector",permalink:"/docs/design-document/connect/knative-connector",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.10.0/design-document/03-connect/05-knative-connector.md",tags:[],version:"v1.10.0",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MongoDB",permalink:"/docs/design-document/connect/mongodb-connector"},next:{title:"Feishu/Lark",permalink:"/docs/design-document/connect/lark-connector"}},l={},p=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Create Knative Source and Sink",id:"create-knative-source-and-sink",level:3},{value:"Set up EventMesh Configuration",id:"set-up-eventmesh-configuration",level:3},{value:"Demo",id:"demo",level:2},{value:"Publish an Event Message from Knative and Subscribe from EventMesh",id:"publish-an-event-message-from-knative-and-subscribe-from-eventmesh",level:3},{value:"Step 1: Start an EventMesh Runtime Server",id:"step-1-start-an-eventmesh-runtime-server",level:4},{value:"Step 2: Publish an Event Message from Knative",id:"step-2-publish-an-event-message-from-knative",level:4},{value:"Step 3: Subscribe from an EventMesh",id:"step-3-subscribe-from-an-eventmesh",level:4},{value:"Expected Result",id:"expected-result",level:4},{value:"Publish an Event Message from EventMesh and Subscribe from Knative",id:"publish-an-event-message-from-eventmesh-and-subscribe-from-knative",level:3},{value:"Step 1: Start an EventMesh Runtime Server",id:"step-1-start-an-eventmesh-runtime-server-1",level:4},{value:"Step 2: Publish an Event Message from EventMesh",id:"step-2-publish-an-event-message-from-eventmesh",level:4},{value:"Step 3: Subscribe from Knative",id:"step-3-subscribe-from-knative",level:4},{value:"Expected Result",id:"expected-result-1",level:4}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"knative"},"Knative"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"With the changes in the design of the Knative connector, this document is currently temporarily outdated.")),(0,r.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("h3",{id:"create-knative-source-and-sink"},"Create Knative Source and Sink"),(0,r.kt)("p",null,"We use the ",(0,r.kt)("em",{parentName:"p"},"cloudevents-player")," ",(0,r.kt)("a",{parentName:"p",href:"https://knative.dev/docs/serving/"},"Knative service")," as an example. If you do not know how to create ",(0,r.kt)("em",{parentName:"p"},"cloudevents-player")," Knative service as source and sink, please follow the steps in this ",(0,r.kt)("a",{parentName:"p",href:"https://knative.dev/docs/getting-started/first-source/#creating-your-first-source"},"link"),"."),(0,r.kt)("h3",{id:"set-up-eventmesh-configuration"},"Set up EventMesh Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add the following lines to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/blob/master/eventmesh-starter/build.gradle"},"eventmesh-starter/build.gradle")," file.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"plugins {\n    id 'application'\n}\n\napplication {\n    mainClass = project.hasProperty(\"mainClass\") ? project.getProperty(\"mainClass\") : 'org.apache.eventmesh.starter.StartUp'\n    applicationDefaultJvmArgs = [\n            '-Dlog4j.configurationFile=../eventmesh-runtime/conf/log4j2.xml', '-Deventmesh.log.home=../eventmesh-runtime/logs', '-Deventmesh.home=../eventmesh-runtime', '-DconfPath=../eventmesh-runtime/conf'\n    ]\n}\n\ndependencies {\n    implementation project(\":eventmesh-connector-plugin:eventmesh-connector-knative\")\n    implementation project(\":eventmesh-runtime\")\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add the following lines to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/blob/master/eventmesh-examples/build.gradle"},"eventmesh-examples/build.gradle")," file.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"plugins {\n    id 'application'\n}\n\napplication {\n    mainClass = project.hasProperty(\"mainClass\") ? project.getProperty(\"mainClass\") : 'NULL'\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set ",(0,r.kt)("inlineCode",{parentName:"li"},"eventMesh.connector.plugin.type=knative")," in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/blob/master/eventmesh-runtime/conf/eventmesh.properties"},"eventmesh-runtime/conf/eventmesh.properties")," file.")),(0,r.kt)("h2",{id:"demo"},"Demo"),(0,r.kt)("h3",{id:"publish-an-event-message-from-knative-and-subscribe-from-eventmesh"},"Publish an Event Message from Knative and Subscribe from EventMesh"),(0,r.kt)("h4",{id:"step-1-start-an-eventmesh-runtime-server"},"Step 1: Start an EventMesh Runtime Server"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd eventmesh-starter\n$ ../gradlew -PmainClass=org.apache.eventmesh.starter.StartUp run\n")),(0,r.kt)("h4",{id:"step-2-publish-an-event-message-from-knative"},"Step 2: Publish an Event Message from Knative"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -i http://cloudevents-player.default.127.0.0.1.sslip.io -H "Content-Type: application/json" -H "Ce-Id: 123456789" -H "Ce-Specversion: 1.0" -H "Ce-Type: some-type" -H "Ce-Source: command-line" -d \'{"msg":"Hello CloudEvents!"}\'\n')),(0,r.kt)("h4",{id:"step-3-subscribe-from-an-eventmesh"},"Step 3: Subscribe from an EventMesh"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set ",(0,r.kt)("inlineCode",{parentName:"li"},'public static final String EVENTMESH_HTTP_ASYNC_TEST_TOPIC = "messages";')," in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/blob/master/eventmesh-examples/src/main/java/org/apache/eventmesh/common/ExampleConstants.java"},"ExampleConstants.java")," file.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd eventmesh-examples\n$ ../gradlew -PmainClass=org.apache.eventmesh.http.demo.sub.SpringBootDemoApplication run\n")),(0,r.kt)("h4",{id:"expected-result"},"Expected Result"),(0,r.kt)("p",null,"The following message with ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," field as ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello CloudEvents!")," will be printed on the console of EventMesh server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'2022-09-05 16:37:58,237 INFO  [eventMesh-clientManage-] DefaultConsumer(DefaultConsumer.java:60) - \\\n[{"event":{"attributes":{"datacontenttype":"application/json","id":"123456789","mediaType":"application/json",\\\n"source":"command-line","specversion":"1.0","type":"some-type"},"data":{"msg":"Hello CloudEvents!"},"extensions":{}},\\\n"id":"123456789","receivedAt":"2022-09-05T10:37:49.537658+02:00[Europe/Madrid]","type":"RECEIVED"}]\n')),(0,r.kt)("h3",{id:"publish-an-event-message-from-eventmesh-and-subscribe-from-knative"},"Publish an Event Message from EventMesh and Subscribe from Knative"),(0,r.kt)("h4",{id:"step-1-start-an-eventmesh-runtime-server-1"},"Step 1: Start an EventMesh Runtime Server"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd eventmesh-starter\n$ ../gradlew -PmainClass=org.apache.eventmesh.starter.StartUp run\n")),(0,r.kt)("h4",{id:"step-2-publish-an-event-message-from-eventmesh"},"Step 2: Publish an Event Message from EventMesh"),(0,r.kt)("p",null,"We use a test program to demo this function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd eventmesh-connector-plugin/eventmesh-connector-knative\n$ ../../gradlew clean test --tests KnativeProducerImplTest.testPublish\n")),(0,r.kt)("h4",{id:"step-3-subscribe-from-knative"},"Step 3: Subscribe from Knative"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl http://cloudevents-player.default.127.0.0.1.sslip.io/messages\n")),(0,r.kt)("h4",{id:"expected-result-1"},"Expected Result"),(0,r.kt)("p",null,"The following message with ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," field as ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello Knative from EventMesh!")," will be printed on the console of EventMesh server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'2022-09-05 16:52:41,633 INFO  [eventMesh-clientManage-] DefaultConsumer(DefaultConsumer.java:60) - \\\n[{"event":{"attributes":{"datacontenttype":"application/json","id":"1234","mediaType":"application/json",\\\n"source":"java-client","specversion":"1.0","type":"some-type"},"data":{"msg":["Hello Knative from EventMesh!"]},"extensions":{}},"id":"1234","receivedAt":"2022-09-05T10:52:32.999273+02:00[Europe/Madrid]","type":"RECEIVED"}]\n')))}u.isMDXComponent=!0}}]);