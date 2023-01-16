"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[1239],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4e3:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={},o="Collect Trace with Jaeger",c={unversionedId:"design-document/jaeger",id:"design-document/jaeger",title:"Collect Trace with Jaeger",description:"Jaeger",source:"@site/docs/design-document/13-jaeger.md",sourceDirName:"design-document",slug:"/design-document/jaeger",permalink:"/zh/docs/design-document/jaeger",draft:!1,editUrl:"https://github.com/apache/incubator-eventmesh-site/edit/master/docs/design-document/13-jaeger.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Collect Trace with Zipkin",permalink:"/zh/docs/design-document/zipkin"}},p={},l=[{value:"Jaeger",id:"jaeger",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Migrating from Zipkin",id:"migrating-from-zipkin",level:2}],s={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"collect-trace-with-jaeger"},"Collect Trace with Jaeger"),(0,a.kt)("h2",{id:"jaeger"},"Jaeger"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.jaegertracing.io/"},"Jaeger"),", inspired by ",(0,a.kt)("a",{parentName:"p",href:"https://research.google.com/pubs/pub36356.html"},"Dapper")," and ",(0,a.kt)("a",{parentName:"p",href:"https://zipkin.io/"},"OpenZipkin"),", is a distributed tracing platform created by ",(0,a.kt)("a",{parentName:"p",href:"https://uber.github.io/"},"Uber Technologies")," and donated to ",(0,a.kt)("a",{parentName:"p",href:"https://cncf.io/"},"Cloud Native Computing Foundation"),". It can be used for monitoring microservices-based distributed systems. "),(0,a.kt)("p",null,"For the installation of Jaeger, you can refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://www.jaegertracing.io/docs/latest/getting-started/"},"official documentation")," of Jaeger. It is recommended to use docker image ",(0,a.kt)("inlineCode",{parentName:"p"},"jaegertracing/all-in-one")," to quickly build the environment for testing."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"To enable the trace exporter of EventMesh Runtime, set the ",(0,a.kt)("inlineCode",{parentName:"p"},"eventMesh.server.trace.enabled")," field in the ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/eventmesh.properties")," file to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"# Trace plugin\neventMesh.server.trace.enabled=true\neventMesh.trace.plugin=jaeger\n")),(0,a.kt)("p",null,"To customize the behavior of the trace exporter such as timeout or export interval, edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"exporter.properties")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"# Set the maximum batch size to use\neventmesh.trace.max.export.size=512\n# Set the queue size. This must be >= the export batch size\neventmesh.trace.max.queue.size=2048\n# Set the max amount of time an export can run before getting(TimeUnit=SECONDS)\neventmesh.trace.export.timeout=30\n# Set time between two different exports (TimeUnit=SECONDS)\neventmesh.trace.export.interval=5\n")),(0,a.kt)("p",null,"To send the exported trace data to Jaeger, edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"eventmesh.trace.jaeger.ip")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"eventmesh.trace.jaeger.port")," fields in the ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/jaeger.properties")," file to match the configuration of the Jaeger server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"# Jaeger's IP and Port\neventmesh.trace.jaeger.ip=localhost\neventmesh.trace.jaeger.port=14250\n")),(0,a.kt)("h2",{id:"migrating-from-zipkin"},"Migrating from Zipkin"),(0,a.kt)("p",null,"Collector service exposes Zipkin compatible REST API ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/v1/spans")," which accepts both Thrift and JSON. Also there is ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/v2/spans")," for JSON and Proto. "),(0,a.kt)("p",null,"So you can also use the ",(0,a.kt)("inlineCode",{parentName:"p"},"eventmesh-trace-zipkin")," plugin to collect trace with Jaeger. Please refer to the ",(0,a.kt)("inlineCode",{parentName:"p"},"eventmesh-trace-zipkin")," documentation for the specific configuration. By default this feature in Jaeger is disabled. It can be enabled with ",(0,a.kt)("inlineCode",{parentName:"p"},"--collector.zipkin.host-port=:9411"),"."))}u.isMDXComponent=!0}}]);