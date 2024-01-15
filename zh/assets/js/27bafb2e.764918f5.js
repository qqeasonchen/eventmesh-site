"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[9299],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,v=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(v,i(i({ref:t},c),{},{components:r})):n.createElement(v,i({ref:t},c))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},99393:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},i="\u5206\u5e03\u5f0f\u8ffd\u8e2a",l={unversionedId:"design-document/observability/tracing",id:"version-v1.3.0/design-document/observability/tracing",title:"\u5206\u5e03\u5f0f\u8ffd\u8e2a",description:"OpenTelemetry\u6982\u8ff0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.3.0/design-document/02-observability/02-tracing.md",sourceDirName:"design-document/02-observability",slug:"/design-document/observability/tracing",permalink:"/zh/docs/v1.3.0/design-document/observability/tracing",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.3.0/design-document/02-observability/02-tracing.md",tags:[],version:"v1.3.0",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EventMesh \u6307\u6807\uff08OpenTelemetry \u548c Prometheus\uff09",permalink:"/zh/docs/v1.3.0/design-document/observability/metrics-export"},next:{title:"EventMesh \u6a21\u5f0f\u6ce8\u518c\u4e2d\u5fc3 (OpenSchema)",permalink:"/zh/docs/v1.3.0/design-document/schema-registry"}},p={},s=[{value:"OpenTelemetry\u6982\u8ff0",id:"opentelemetry\u6982\u8ff0",level:2},{value:"\u9700\u6c42",id:"\u9700\u6c42",level:2},{value:"\u8bbe\u8ba1\u7ec6\u8282",id:"\u8bbe\u8ba1\u7ec6\u8282",level:2},{value:"\u95ee\u9898",id:"\u95ee\u9898",level:2},{value:"\u5982\u4f55\u5728\u7c7b\u201cOpenTelemetryTraceFactory\u201d\u4e2d\u8bbe\u7f6e\u4e0d\u540c\u7684\u5bfc\u51fa\u5668\uff1f\uff08\u5df2\u89e3\u51b3\uff09",id:"\u5982\u4f55\u5728\u7c7bopentelemetrytracefactory\u4e2d\u8bbe\u7f6e\u4e0d\u540c\u7684\u5bfc\u51fa\u5668\u5df2\u89e3\u51b3",level:3},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u4e0d\u540c\u5bfc\u51fa\u5668\u7684\u89e3\u51b3\u65b9\u6848",id:"\u4e0d\u540c\u5bfc\u51fa\u5668\u7684\u89e3\u51b3\u65b9\u6848",level:3},{value:"\u4e0d\u540c\u5bfc\u51fa\u5668\u7684\u6539\u8fdb",id:"\u4e0d\u540c\u5bfc\u51fa\u5668\u7684\u6539\u8fdb",level:4},{value:"\u9644\u5f55",id:"\u9644\u5f55",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:3}],c={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5206\u5e03\u5f0f\u8ffd\u8e2a"},"\u5206\u5e03\u5f0f\u8ffd\u8e2a"),(0,a.kt)("h2",{id:"opentelemetry\u6982\u8ff0"},"OpenTelemetry\u6982\u8ff0"),(0,a.kt)("p",null,"OpenTelemetry\u662f\u4e00\u7ec4API\u548cSDK\u7684\u5de5\u5177\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u4eea\u5668\u5316\u3001\u751f\u6210\u3001\u6536\u96c6\u548c\u5bfc\u51fa\u9065\u6d4b\u6570\u636e\uff08\u6307\u6807\u3001\u65e5\u5fd7\u548c\u8ffd\u8e2a\uff09\uff0c\u4ee5\u4fbf\u8fdb\u884c\u5206\u6790\uff0c\u4ee5\u4e86\u89e3\u60a8\u7684\u8f6f\u4ef6\u6027\u80fd\u548c\u884c\u4e3a\u3002"),(0,a.kt)("h2",{id:"\u9700\u6c42"},"\u9700\u6c42"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u8ffd\u8e2a\u5668"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u540c\u7684\u5bfc\u51fa\u5668"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u670d\u52a1\u5668\u4e2d\u5f00\u59cb\u548c\u7ed3\u675f\u8de8\u5ea6")),(0,a.kt)("h2",{id:"\u8bbe\u8ba1\u7ec6\u8282"},"\u8bbe\u8ba1\u7ec6\u8282"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8de8\u5ea6\u5904\u7406\u5668\uff1aBatchSpanProcessor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5bfc\u51fa\u5668\uff1a\u9ed8\u8ba4\u4e3a\u65e5\u5fd7\uff0c\u53ef\u4ee5\u4ece\u5c5e\u6027\u4e2d\u66f4\u6539"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Configure the batch spans processor. This span processor exports span in batches.\nBatchSpanProcessor batchSpansProcessor =\n    BatchSpanProcessor.builder(exporter)\n        .setMaxExportBatchSize(512) // set the maximum batch size to use\n        .setMaxQueueSize(2048) // set the queue size. This must be >= the export batch size\n        .setExporterTimeout(\n            30, TimeUnit.SECONDS) // set the max amount of time an export can run before getting\n        // interrupted\n        .setScheduleDelay(5, TimeUnit.SECONDS) // set time between two different exports\n        .build();\nOpenTelemetrySdk.builder()\n    .setTracerProvider(\n        SdkTracerProvider.builder().addSpanProcessor(batchSpansProcessor).build())\n    .build();\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5f53\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"EventMeshHTTPServer"),"\u7c7b\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"init()"),"\u65b9\u6cd5\u65f6\uff0c\u7c7b",(0,a.kt)("inlineCode",{parentName:"li"},"AbstractHTTPServer"),"\u5c06\u83b7\u53d6\u8ddf\u8e2a\u5668\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"super.openTelemetryTraceFactory = new OpenTelemetryTraceFactory(eventMeshHttpConfiguration);\nsuper.tracer = openTelemetryTraceFactory.getTracer(this.getClass().toString());\nsuper.textMapPropagator = openTelemetryTraceFactory.getTextMapPropagator();\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u7136\u540e\uff0c\u5728\u7c7b",(0,a.kt)("inlineCode",{parentName:"li"},"AbstractHTTPServer"),"\u4e2d\u7684\u8ddf\u8e2a\u5c06\u8d77\u4f5c\u7528\u3002")),(0,a.kt)("h2",{id:"\u95ee\u9898"},"\u95ee\u9898"),(0,a.kt)("h3",{id:"\u5982\u4f55\u5728\u7c7bopentelemetrytracefactory\u4e2d\u8bbe\u7f6e\u4e0d\u540c\u7684\u5bfc\u51fa\u5668\u5df2\u89e3\u51b3"},"\u5982\u4f55\u5728\u7c7b\u201cOpenTelemetryTraceFactory\u201d\u4e2d\u8bbe\u7f6e\u4e0d\u540c\u7684\u5bfc\u51fa\u5668\uff1f\uff08\u5df2\u89e3\u51b3\uff09"),(0,a.kt)("p",null,"\u5728\u4ece\u5c5e\u6027\u4e2d\u83b7\u53d6\u5bfc\u51fa\u5668\u7c7b\u578b\u4e4b\u540e\uff0c\u5982\u4f55\u5904\u7406\u5b83\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"logExporter"),"\u53ea\u9700\u8981\u521b\u5efa\u65b0\u5b9e\u4f8b\u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\uff0c\u201czipkinExporter\u201d\u9700\u8981\u65b0\u5efa\u5e76\u4f7f\u7528\u201cgetZipkinExporter()\u201d\u65b9\u6cd5\u3002"),(0,a.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,a.kt)("h3",{id:"\u4e0d\u540c\u5bfc\u51fa\u5668\u7684\u89e3\u51b3\u65b9\u6848"},"\u4e0d\u540c\u5bfc\u51fa\u5668\u7684\u89e3\u51b3\u65b9\u6848"),(0,a.kt)("p",null,"\u4f7f\u7528\u53cd\u5c04\u83b7\u53d6\u5bfc\u51fa\u5668\u3002"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u4e0d\u540c\u7684\u5bfc\u51fa\u5668\u5fc5\u987b\u5b9e\u73b0\u63a5\u53e3\u201cEventMeshExporter\u201d\u3002"),(0,a.kt)("p",null,"\u7136\u540e\uff0c\u6211\u4eec\u4ece\u914d\u7f6e\u4e2d\u83b7\u53d6\u5bfc\u51fa\u5668\u540d\u79f0\uff0c\u5e76\u53cd\u5c04\u5230\u8be5\u7c7b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'//different spanExporter\nString exporterName = configuration.eventMeshTraceExporterType;\n//use reflection to get spanExporter\nString className = String.format("org.apache.eventmesh.runtime.exporter.%sExporter",exporterName);\nEventMeshExporter eventMeshExporter = (EventMeshExporter) Class.forName(className).newInstance();\nspanExporter = eventMeshExporter.getSpanExporter(configuration);\n')),(0,a.kt)("p",null,"\u53e6\u5916\uff0c\u8fd9\u5c06\u5305\u542btry catch\u3002\u5982\u679c\u65e0\u6cd5\u6210\u529f\u83b7\u53d6\u6307\u5b9a\u7684\u5bfc\u51fa\u5668\uff0c\u5219\u5c06\u4f7f\u7528\u9ed8\u8ba4\u7684\u65e5\u5fd7\u5bfc\u51fa\u5668\u3002"),(0,a.kt)("h4",{id:"\u4e0d\u540c\u5bfc\u51fa\u5668\u7684\u6539\u8fdb"},"\u4e0d\u540c\u5bfc\u51fa\u5668\u7684\u6539\u8fdb"),(0,a.kt)("p",null,"SPI\uff08\u5f85\u5b8c\u6210\uff09"),(0,a.kt)("h2",{id:"\u9644\u5f55"},"\u9644\u5f55"),(0,a.kt)("h3",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/docs-cn/blob/main/QUICKSTART.md"},"https://github.com/open-telemetry/docs-cn/blob/main/QUICKSTART.md"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-java-instrumentation/tree/main/instrumentation/netty"},"https://github.com/open-telemetry/opentelemetry-java-instrumentation/tree/main/instrumentation/netty")))))}m.isMDXComponent=!0}}]);