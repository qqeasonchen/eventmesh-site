"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[5720],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),d=i,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(g,o(o({ref:t},l),{},{components:r})):n.createElement(g,o({ref:t},l))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:i,o[1]=p;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},64401:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const a={},o="Collect Trace with Jaeger",p={unversionedId:"design-document/observability/jaeger",id:"version-v1.10.0/design-document/observability/jaeger",title:"Collect Trace with Jaeger",description:"Jaeger",source:"@site/versioned_docs/version-v1.10.0/design-document/02-observability/05-jaeger.md",sourceDirName:"design-document/02-observability",slug:"/design-document/observability/jaeger",permalink:"/docs/design-document/observability/jaeger",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.10.0/design-document/02-observability/05-jaeger.md",tags:[],version:"v1.10.0",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Collect Trace with Zipkin",permalink:"/docs/design-document/observability/zipkin"},next:{title:"Connectors",permalink:"/docs/design-document/connect/connectors"}},s={},c=[{value:"Jaeger",id:"jaeger",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Migrating from Zipkin",id:"migrating-from-zipkin",level:2}],l={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"collect-trace-with-jaeger"},"Collect Trace with Jaeger"),(0,i.kt)("h2",{id:"jaeger"},"Jaeger"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.jaegertracing.io/"},"Jaeger"),", inspired by ",(0,i.kt)("a",{parentName:"p",href:"https://research.google.com/pubs/pub36356.html"},"Dapper")," and ",(0,i.kt)("a",{parentName:"p",href:"https://zipkin.io/"},"OpenZipkin"),", is a distributed tracing platform created by ",(0,i.kt)("a",{parentName:"p",href:"https://uber.github.io/"},"Uber Technologies")," and donated to ",(0,i.kt)("a",{parentName:"p",href:"https://cncf.io/"},"Cloud Native Computing Foundation"),". It can be used for monitoring microservices-based distributed systems. "),(0,i.kt)("p",null,"For the installation of Jaeger, you can refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://www.jaegertracing.io/docs/latest/getting-started/"},"official documentation")," of Jaeger. It is recommended to use docker image ",(0,i.kt)("inlineCode",{parentName:"p"},"jaegertracing/all-in-one")," to quickly build the environment for testing."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"To enable the trace exporter of EventMesh Runtime, set the ",(0,i.kt)("inlineCode",{parentName:"p"},"eventMesh.server.trace.enabled")," field in the ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/eventmesh.properties")," file to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"# Trace plugin\neventMesh.server.trace.enabled=true\neventMesh.trace.plugin=jaeger\n")),(0,i.kt)("p",null,"To customize the behavior of the trace exporter such as timeout or export interval, edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"exporter.properties")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"# Set the maximum batch size to use\neventmesh.trace.max.export.size=512\n# Set the queue size. This must be >= the export batch size\neventmesh.trace.max.queue.size=2048\n# Set the max amount of time an export can run before getting(TimeUnit=SECONDS)\neventmesh.trace.export.timeout=30\n# Set time between two different exports (TimeUnit=SECONDS)\neventmesh.trace.export.interval=5\n")),(0,i.kt)("p",null,"To send the exported trace data to Jaeger, edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"eventmesh.trace.jaeger.ip")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"eventmesh.trace.jaeger.port")," fields in the ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/jaeger.properties")," file to match the configuration of the Jaeger server."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"# Jaeger's IP and Port\neventmesh.trace.jaeger.ip=localhost\neventmesh.trace.jaeger.port=14250\n")),(0,i.kt)("h2",{id:"migrating-from-zipkin"},"Migrating from Zipkin"),(0,i.kt)("p",null,"Collector service exposes Zipkin compatible REST API ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/v1/spans")," which accepts both Thrift and JSON. Also there is ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/v2/spans")," for JSON and Proto. "),(0,i.kt)("p",null,"So you can also use the ",(0,i.kt)("inlineCode",{parentName:"p"},"eventmesh-trace-zipkin")," plugin to collect trace with Jaeger. Please refer to the ",(0,i.kt)("inlineCode",{parentName:"p"},"eventmesh-trace-zipkin")," documentation for the specific configuration. By default this feature in Jaeger is disabled. It can be enabled with ",(0,i.kt)("inlineCode",{parentName:"p"},"--collector.zipkin.host-port=:9411"),"."))}m.isMDXComponent=!0}}]);