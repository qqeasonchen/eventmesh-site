"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[2408],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,v=u["".concat(p,".").concat(h)]||u[h]||m[h]||i;return n?r.createElement(v,a(a({ref:t},c),{},{components:n})):r.createElement(v,a({ref:t},c))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},68621:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={},a="HTTP \u534f\u8bae",s={unversionedId:"sdk-java/http",id:"version-v1.10.0/sdk-java/http",title:"HTTP \u534f\u8bae",description:"EventMesh Java SDK \u5b9e\u73b0\u4e86 HTTP \u5f02\u6b65\u6d88\u606f\u7684\u751f\u4ea7\u8005\u548c\u6d88\u8d39\u8005\u3002\u4e8c\u8005\u90fd\u9700\u8981\u4e00\u4e2a EventMeshHttpClientConfig \u7c7b\u5b9e\u4f8b\u6765\u6307\u5b9a EventMesh HTTP \u5ba2\u6237\u7aef\u7684\u914d\u7f6e\u4fe1\u606f\u3002\u5176\u4e2d\u7684 liteEventMeshAddr\u3001userName \u548c password \u5b57\u6bb5\u9700\u8981\u548c EventMesh Runtime eventmesh.properties \u6587\u4ef6\u4e2d\u7684\u76f8\u5339\u914d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.10.0/sdk-java/02-http.md",sourceDirName:"sdk-java",slug:"/sdk-java/http",permalink:"/zh/docs/sdk-java/http",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.10.0/sdk-java/02-http.md",tags:[],version:"v1.10.0",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5 SDK",permalink:"/zh/docs/sdk-java/intro"},next:{title:"TCP \u534f\u8bae",permalink:"/zh/docs/sdk-java/tcp"}},p={},l=[{value:"HTTP \u6d88\u8d39\u8005",id:"http-\u6d88\u8d39\u8005",level:2},{value:"HTTP \u751f\u4ea7\u8005",id:"http-\u751f\u4ea7\u8005",level:2},{value:"\u4f7f\u7528 Curl \u547d\u4ee4",id:"\u4f7f\u7528-curl-\u547d\u4ee4",level:2},{value:"\u4e8b\u4ef6\u53d1\u9001",id:"\u4e8b\u4ef6\u53d1\u9001",level:3},{value:"\u4e8b\u4ef6\u8ba2\u9605",id:"\u4e8b\u4ef6\u8ba2\u9605",level:3}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"http-\u534f\u8bae"},"HTTP \u534f\u8bae"),(0,o.kt)("p",null,"EventMesh Java SDK \u5b9e\u73b0\u4e86 HTTP \u5f02\u6b65\u6d88\u606f\u7684\u751f\u4ea7\u8005\u548c\u6d88\u8d39\u8005\u3002\u4e8c\u8005\u90fd\u9700\u8981\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"EventMeshHttpClientConfig")," \u7c7b\u5b9e\u4f8b\u6765\u6307\u5b9a EventMesh HTTP \u5ba2\u6237\u7aef\u7684\u914d\u7f6e\u4fe1\u606f\u3002\u5176\u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"liteEventMeshAddr"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"userName")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"password")," \u5b57\u6bb5\u9700\u8981\u548c EventMesh Runtime ",(0,o.kt)("inlineCode",{parentName:"p"},"eventmesh.properties")," \u6587\u4ef6\u4e2d\u7684\u76f8\u5339\u914d\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.eventmesh.client.http.conf.EventMeshHttpClientConfig;\nimport org.apache.eventmesh.common.utils.IPUtils;\nimport org.apache.eventmesh.common.utils.ThreadUtils;\n\npublic class HTTP {\n  public static void main(String[] args) throws Exception {\n    EventMeshHttpClientConfig eventMeshClientConfig = EventMeshHttpClientConfig.builder()\n      .liteEventMeshAddr("localhost:10105")\n      .producerGroup("TEST_PRODUCER_GROUP")\n      .env("env")\n      .idc("idc")\n      .ip(IPUtils.getLocalAddress())\n      .sys("1234")\n      .pid(String.valueOf(ThreadUtils.getPID()))\n      .userName("eventmesh")\n      .password("password")\n      .build();\n      /* ... */\n  }\n}\n')),(0,o.kt)("h2",{id:"http-\u6d88\u8d39\u8005"},"HTTP \u6d88\u8d39\u8005"),(0,o.kt)("p",null,"\u7c7b ",(0,o.kt)("inlineCode",{parentName:"p"},"EventMeshHttpConsumer")," \u5b9e\u73b0\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"heartbeat"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"subscribe")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"unsubscribe")," \u65b9\u6cd5\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"subscribe")," \u65b9\u6cd5\u63a5\u6536\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"SubscriptionItem")," \u5bf9\u8c61\u7684\u5217\u8868\uff0c\u5176\u4e2d\u5b9a\u4e49\u4e86\u8981\u8ba2\u9605\u7684\u8bdd\u9898\u548c\u56de\u8c03\u7684 URL \u5730\u5740\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.eventmesh.client.http.consumer.EventMeshHttpConsumer;\nimport org.apache.eventmesh.common.protocol.SubscriptionItem;\nimport org.apache.eventmesh.common.protocol.SubscriptionMode;\nimport org.apache.eventmesh.common.protocol.SubscriptionType;\nimport com.google.common.collect.Lists;\n\npublic class HTTP {\n  final String url = "http://localhost:8080/callback";\n  final List<SubscriptionItem> topicList = Lists.newArrayList(\n    new SubscriptionItem("eventmesh-async-topic", SubscriptionMode.CLUSTERING, SubscriptionType.ASYNC)\n  );\n\n  public static void main(String[] args) throws Exception {\n    /* ... */\n    eventMeshHttpConsumer = new EventMeshHttpConsumer(eventMeshClientConfig);\n    eventMeshHttpConsumer.heartBeat(topicList, url);\n    eventMeshHttpConsumer.subscribe(topicList, url);\n    /* ... */\n    eventMeshHttpConsumer.unsubscribe(topicList, url);\n  }\n}\n')),(0,o.kt)("p",null,"EventMesh Runtime \u5c06\u53d1\u9001\u4e00\u4e2a\u5305\u542b ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cloudevents/spec"},"CloudEvents \u683c\u5f0f")," \u4fe1\u606f\u7684 POST \u8bf7\u6c42\u5230\u8fd9\u4e2a\u56de\u8c03\u7684 URL \u5730\u5740\u3002\u7c7b ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/eventmesh/blob/master/eventmesh-examples/src/main/java/org/apache/eventmesh/http/demo/sub/controller/SubController.java"},"SubController.java")," \u5b9e\u73b0\u4e86 Spring Boot controller\uff0c\u5b83\u5c06\u63a5\u6536\u5e76\u89e3\u6790\u56de\u8c03\u4fe1\u606f\u3002"),(0,o.kt)("h2",{id:"http-\u751f\u4ea7\u8005"},"HTTP \u751f\u4ea7\u8005"),(0,o.kt)("p",null,"\u7c7b ",(0,o.kt)("inlineCode",{parentName:"p"},"EventMeshHttpProducer")," \u5b9e\u73b0\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"publish")," \u65b9\u6cd5\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"publish")," \u65b9\u6cd5\u63a5\u6536\u5c06\u88ab\u53d1\u5e03\u7684\u6d88\u606f\u548c\u4e00\u4e2a\u53ef\u9009\u7684 timeout \u503c\u3002\u6d88\u606f\u5e94\u662f\u4e0b\u5217\u7c7b\u7684\u4e00\u4e2a\u5b9e\u4f8b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.eventmesh.common.EventMeshMessage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"io.cloudevents.CloudEvent")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"io.openmessaging.api.Message"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import org.apache.eventmesh.client.http.producer.EventMeshHttpProducer;\nimport org.apache.eventmesh.client.tcp.common.EventMeshCommon;\nimport org.apache.eventmesh.common.Constants;\nimport org.apache.eventmesh.common.utils.JsonUtils;\n\nimport io.cloudevents.CloudEvent;\nimport io.cloudevents.core.builder.CloudEventBuilder;\n\npublic class HTTP {\n  public static void main(String[] args) throws Exception {\n    /* ... */\n    EventMeshHttpProducer eventMeshHttpProducer = new EventMeshHttpProducer(eventMeshClientConfig);\n    Map<String, String> content = new HashMap<>();\n    content.put("content", "testAsyncMessage");\n\n    CloudEvent event = CloudEventBuilder.v1()\n      .withId(UUID.randomUUID().toString())\n      .withSubject("eventmesh-async-topic")\n      .withSource(URI.create("/"))\n      .withDataContentType("application/cloudevents+json")\n      .withType(EventMeshCommon.CLOUD_EVENTS_PROTOCOL_NAME)\n      .withData(JsonUtils.serialize(content).getBytes(StandardCharsets.UTF_8))\n      .withExtension(Constants.EVENTMESH_MESSAGE_CONST_TTL, String.valueOf(4 * 1000))\n      .build();\n    eventMeshHttpProducer.publish(event);\n  }\n}\n')),(0,o.kt)("h2",{id:"\u4f7f\u7528-curl-\u547d\u4ee4"},"\u4f7f\u7528 Curl \u547d\u4ee4"),(0,o.kt)("p",null,"\u672c\u6bb5\u843d\u4ecb\u7ecd\u901a\u8fc7 Curl \u547d\u4ee4\u4f53\u9a8c\u4e8b\u4ef6\u7684\u6536\u53d1\u529f\u80fd\u3002"),(0,o.kt)("h3",{id:"\u4e8b\u4ef6\u53d1\u9001"},"\u4e8b\u4ef6\u53d1\u9001"),(0,o.kt)("p",null,"\u542f\u52a8 EventMesh Runtime \u670d\u52a1\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528 Curl \u547d\u4ee4\u5c06\u4e8b\u4ef6\u7528 HTTP POST \u65b9\u6cd5\u53d1\u5e03\u5230\u6307\u5b9a\u7684\u4e3b\u9898\uff0cBody \u5185\u5bb9\u5fc5\u987b\u662f JSON \u683c\u5f0f\uff0c\u6267\u884c\u547d\u4ee4\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -H "Content-Type:application/json" -X POST -d \'{"name": "admin", "pass":"12345678"}\' http://127.0.0.1:10105/eventmesh/publish/TEST-TOPIC-HTTP-ASYNC\n')),(0,o.kt)("h3",{id:"\u4e8b\u4ef6\u8ba2\u9605"},"\u4e8b\u4ef6\u8ba2\u9605"),(0,o.kt)("p",null,"\u542f\u52a8 EventMesh Runtime \u670d\u52a1\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528 Curl \u547d\u4ee4\u7528 HTTP POST \u65b9\u6cd5\u8ba2\u9605\u6307\u5b9a\u7684\u4e3b\u9898\u5217\u8868\uff0cBody \u5185\u5bb9\u5fc5\u987b\u662f JSON \u683c\u5f0f\uff0c\u6267\u884c\u547d\u4ee4\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -H "Content-Type:application/json" -X POST -d \'{"url": "http://127.0.0.1:8088/sub/test", "consumerGroup":"TEST-GROUP", "topic":[{"mode":"CLUSTERING","topic":"TEST-TOPIC-HTTP-ASYNC","type":"ASYNC"}]}\' http://127.0.0.1:10105/eventmesh/subscribe/local\n')),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u9879\u76ee",(0,o.kt)("inlineCode",{parentName:"p"},"eventmesh-examples"),"\u6a21\u5757\u4e2d\u770b\u5230\u8fd9\u4e2a\u4f8b\u5b50\u3002"))}u.isMDXComponent=!0}}]);