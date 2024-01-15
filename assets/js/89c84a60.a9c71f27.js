"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[4475],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return t?o.createElement(h,c(c({ref:n},d),{},{components:t})):o.createElement(h,c({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=m;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[u]="string"==typeof e?e:r,c[1]=a;for(var l=2;l<i;l++)c[l]=t[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},26363:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=t(87462),r=(t(67294),t(3905));const i={},c="Connectors",a={unversionedId:"design-document/connect/connectors",id:"design-document/connect/connectors",title:"Connectors",description:"Connector",source:"@site/docs/design-document/03-connect/00-connectors.md",sourceDirName:"design-document/03-connect",slug:"/design-document/connect/connectors",permalink:"/docs/next/design-document/connect/connectors",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/docs/design-document/03-connect/00-connectors.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Collect Trace with Jaeger",permalink:"/docs/next/design-document/observability/jaeger"},next:{title:"RabbitMQ",permalink:"/docs/next/design-document/connect/rabbitmq-connector"}},s={},l=[{value:"Connector",id:"connector",level:2},{value:"Source",id:"source",level:2},{value:"Sink",id:"sink",level:2},{value:"CloudEvents",id:"cloudevents",level:2},{value:"Implements",id:"implements",level:2},{value:"Technical Solution",id:"technical-solution",level:2},{value:"Structure and process",id:"structure-and-process",level:3},{value:"Design Detail",id:"design-detail",level:3},{value:"Description",id:"description",level:3},{value:"Worker",id:"worker",level:4},{value:"Connector",id:"connector-1",level:4},{value:"ConnectorRecord with CloudEvents",id:"connectorrecord-with-cloudevents",level:4},{value:"Registry",id:"registry",level:4}],d={toc:l},u="wrapper";function p(e){let{components:n,...i}=e;return(0,r.kt)(u,(0,o.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"connectors"},"Connectors"),(0,r.kt)("h2",{id:"connector"},"Connector"),(0,r.kt)("p",null,"A connector is an image or instance that interacts with a specific external service or underlying data source (e.g., Databases) on behalf of user applications. A connector is either a Source or a Sink."),(0,r.kt)("p",null,"Connector runs as a standalone service by ",(0,r.kt)("inlineCode",{parentName:"p"},"main()"),"."),(0,r.kt)("h2",{id:"source"},"Source"),(0,r.kt)("p",null,"A source connector obtains data from an underlying data producer, and delivers it to targets after original data has been transformed into CloudEvents. It doesn't limit the way how a source retrieves data. (e.g., A source may pull data from a message queue or act as an HTTP server waiting for data sent to it)."),(0,r.kt)("h2",{id:"sink"},"Sink"),(0,r.kt)("p",null,"A sink connector receives CloudEvents and does some specific business logics. (e.g., A MySQL Sink extracts useful data from CloudEvents and writes them to a MySQL database)."),(0,r.kt)("h2",{id:"cloudevents"},"CloudEvents"),(0,r.kt)("p",null,"A specification for describing event data in common formats to provide interoperability across services, platforms and systems."),(0,r.kt)("h2",{id:"implements"},"Implements"),(0,r.kt)("p",null,"Add a new connector by implementing the source/sink interface using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/eventmesh/tree/master/eventmesh-openconnect/eventmesh-openconnect-java"},"eventmesh-openconnect-java"),"."),(0,r.kt)("h2",{id:"technical-solution"},"Technical Solution"),(0,r.kt)("h3",{id:"structure-and-process"},"Structure and process"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"source-sink connector architecture",src:t(15290).Z,width:"1626",height:"780"})),(0,r.kt)("h3",{id:"design-detail"},"Design Detail"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"eventmesh-connect-detail",src:t(99717).Z,width:"1614",height:"1010"})),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("h4",{id:"worker"},"Worker"),(0,r.kt)("p",null,"Worker is divided into Source Worker and Sink Worker, which are triggered by the ",(0,r.kt)("inlineCode",{parentName:"p"},"Application")," class and implement the methods of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ConnectorWorker")," interface respectively, which include the worker's running life cycle, and the worker carries the running of the connector. Workers can be lightweight and independent through mirroring Running, the eventmesh-sdk-java module is integrated internally, and the CloudEvents protocol is used to interact with EventMesh. Currently, the TCP client is used by default. In the future, support for dynamic configuration can be considered."),(0,r.kt)("h4",{id:"connector-1"},"Connector"),(0,r.kt)("p",null,"Connectors are divided into Source Connector and Sink Connector. Connectors have their own configuration files and run independently. Workers perform reflective loading and configuration analysis to complete Connector initialization and subsequent operation. Source Connector implements the poll method, and Sink Connector implements The put method uniformly uses ",(0,r.kt)("inlineCode",{parentName:"p"},"ConnectorRecord")," to carry data. Both Source Connector and Sink Connector can operate independently."),(0,r.kt)("h4",{id:"connectorrecord-with-cloudevents"},"ConnectorRecord with CloudEvents"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ConnectorRecord")," is a connector layer data protocol. When workers interact with EventMesh, a protocol adapter needs to be developed to convert ",(0,r.kt)("inlineCode",{parentName:"p"},"ConnectorRecord")," to CloudEvents protocol."),(0,r.kt)("h4",{id:"registry"},"Registry"),(0,r.kt)("p",null,"The Registry module is responsible for storing the synchronization progress of synchronizing data of different Connector instances, ensuring high availability between multiple Connector images or instances."))}p.isMDXComponent=!0},15290:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/connector-architecture-8dbcfb90423a11d295a275d9ef8e6774.png"},99717:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/connector-design-detail-f20f6c65bc25ddb811491080c71b1cea.png"}}]);