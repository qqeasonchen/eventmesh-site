"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[2755],{3905:(e,t,n)=>{n.d(t,{Zo:()=>b,kt:()=>p});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},b=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,p=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(p,a(a({ref:t},b),{},{components:n})):r.createElement(p,a({ref:t},b))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82207:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={},a="RabbitMQ",c={unversionedId:"design-document/connect/rabbitmq-connector",id:"version-v1.10.0/design-document/connect/rabbitmq-connector",title:"RabbitMQ",description:"RabbitMQSinkConnector: From EventMesh to RabbitMQ",source:"@site/versioned_docs/version-v1.10.0/design-document/03-connect/01-rabbitmq-connector.md",sourceDirName:"design-document/03-connect",slug:"/design-document/connect/rabbitmq-connector",permalink:"/docs/design-document/connect/rabbitmq-connector",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.10.0/design-document/03-connect/01-rabbitmq-connector.md",tags:[],version:"v1.10.0",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Connectors",permalink:"/docs/design-document/connect/connectors"},next:{title:"HTTP",permalink:"/docs/design-document/connect/http-connector"}},s={},l=[{value:"RabbitMQSinkConnector: From EventMesh to RabbitMQ",id:"rabbitmqsinkconnector-from-eventmesh-to-rabbitmq",level:2},{value:"RabbitMQSourceConnector: From RabbitMQ to EventMesh",id:"rabbitmqsourceconnector-from-rabbitmq-to-eventmesh",level:2}],b={toc:l};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rabbitmq"},"RabbitMQ"),(0,o.kt)("h2",{id:"rabbitmqsinkconnector-from-eventmesh-to-rabbitmq"},"RabbitMQSinkConnector: From EventMesh to RabbitMQ"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"launch your RabbitMQ server and EventMesh Runtime."),(0,o.kt)("li",{parentName:"ol"},"enable sinkConnector and check ",(0,o.kt)("inlineCode",{parentName:"li"},"sink-config.yml"),"."),(0,o.kt)("li",{parentName:"ol"},"start your ",(0,o.kt)("inlineCode",{parentName:"li"},"RabbitMQConnectorServer"),", it will subscribe to the topic defined in ",(0,o.kt)("inlineCode",{parentName:"li"},"pubSubConfig.subject")," of EventMesh Runtime and send data to ",(0,o.kt)("inlineCode",{parentName:"li"},"connectorConfig.queueName")," in your RabbitMQ."),(0,o.kt)("li",{parentName:"ol"},"send a message to EventMesh with the topic defined in ",(0,o.kt)("inlineCode",{parentName:"li"},"pubSubConfig.subject")," and then you will receive the message in RabbitMQ.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"pubSubConfig:  \n  # default port 10000\n  meshAddress: your.eventmesh.server:10000  \n  subject: TopicTest  \n  idc: FT  \n  env: PRD  \n  group: rabbitmqSink  \n  appId: 5031  \n  userName: rabbitmqSinkUser  \n  passWord: rabbitmqPassWord  \nconnectorConfig:  \n  connectorName: rabbitmqSink  \n  host: your.rabbitmq.server\n  port: 5672  \n  username: coyrqpyz  \n  passwd: passwd \n  virtualHost: coyrqpyz  \n  exchangeType: TOPIC  \n  # build-in exchangeName or name a new one after you create it in rabbitmq server.\n  exchangeName: amq.topic  \n  # rabbitmq server will create the routingKey and queueName automatically after you connect to it if they aren't exist before.\n  routingKey: eventmesh  \n  queueName: eventmesh  \n  autoAck: true\n")),(0,o.kt)("h2",{id:"rabbitmqsourceconnector-from-rabbitmq-to-eventmesh"},"RabbitMQSourceConnector: From RabbitMQ to EventMesh"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"launch your RabbitMQ server and EventMesh Runtime."),(0,o.kt)("li",{parentName:"ol"},"enable sourceConnector and check ",(0,o.kt)("inlineCode",{parentName:"li"},"source-config.yml")," (Basically the same as ",(0,o.kt)("inlineCode",{parentName:"li"},"sink-config.yml"),")"),(0,o.kt)("li",{parentName:"ol"},"start your ",(0,o.kt)("inlineCode",{parentName:"li"},"RabbitMQConnectorServer"),", it will subscribe to the queue defined in ",(0,o.kt)("inlineCode",{parentName:"li"},"connectorConfig.queueName")," in your RabbitMQ and send data to ",(0,o.kt)("inlineCode",{parentName:"li"},"pubSubConfig.subject")," of EventMesh Runtime."),(0,o.kt)("li",{parentName:"ol"},"send a CloudEvent message to the queue and then you will receive the message in EventMesh.")))}m.isMDXComponent=!0}}]);