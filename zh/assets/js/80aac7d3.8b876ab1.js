"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[6381],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),s=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(a.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),v=o,m=u["".concat(a,".").concat(v)]||u[v]||p[v]||c;return t?r.createElement(m,i(i({ref:n},d),{},{components:t})):r.createElement(m,i({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=v;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<c;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},55883:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const c={},i="\u8fde\u63a5\u5668\u7b80\u4ecb",l={unversionedId:"design-document/connect/connectors",id:"version-v1.10.0/design-document/connect/connectors",title:"\u8fde\u63a5\u5668\u7b80\u4ecb",description:"\u8fde\u63a5\u5668\u7c7b\u578b",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.10.0/design-document/03-connect/00-connectors.md",sourceDirName:"design-document/03-connect",slug:"/design-document/connect/connectors",permalink:"/zh/docs/design-document/connect/connectors",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.10.0/design-document/03-connect/00-connectors.md",tags:[],version:"v1.10.0",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u901a\u8fc7 Jaeger \u89c2\u5bdf Trace",permalink:"/zh/docs/design-document/observability/jaeger"},next:{title:"RabbitMQ",permalink:"/zh/docs/design-document/connect/rabbitmq-connector"}},a={},s=[{value:"\u8fde\u63a5\u5668\u7c7b\u578b",id:"\u8fde\u63a5\u5668\u7c7b\u578b",level:2},{value:"\u6570\u636e\u6e90\uff08Source \u7aef\uff09",id:"\u6570\u636e\u6e90source-\u7aef",level:2},{value:"\u6570\u636e\u6c47\uff08Sink \u7aef\uff09",id:"\u6570\u636e\u6c47sink-\u7aef",level:2},{value:"CloudEvents",id:"cloudevents",level:2},{value:"\u5b9e\u73b0\u8fde\u63a5\u5668",id:"\u5b9e\u73b0\u8fde\u63a5\u5668",level:2},{value:"\u6280\u672f\u65b9\u6848",id:"\u6280\u672f\u65b9\u6848",level:2},{value:"\u7ed3\u6784\u4e0e\u5904\u7406\u6d41\u7a0b",id:"\u7ed3\u6784\u4e0e\u5904\u7406\u6d41\u7a0b",level:3},{value:"\u8be6\u7ec6\u8bbe\u8ba1",id:"\u8be6\u7ec6\u8bbe\u8ba1",level:3},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"Worker",id:"worker",level:4},{value:"Connector",id:"connector",level:4},{value:"ConnectorRecord with CloudEvents",id:"connectorrecord-with-cloudevents",level:4},{value:"Registry",id:"registry",level:4}],d={toc:s},u="wrapper";function p(e){let{components:n,...c}=e;return(0,o.kt)(u,(0,r.Z)({},d,c,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8fde\u63a5\u5668\u7b80\u4ecb"},"\u8fde\u63a5\u5668\u7b80\u4ecb"),(0,o.kt)("h2",{id:"\u8fde\u63a5\u5668\u7c7b\u578b"},"\u8fde\u63a5\u5668\u7c7b\u578b"),(0,o.kt)("p",null,"\u8fde\u63a5\u5668\u662f\u4ee3\u8868\u7528\u6237\u5e94\u7528\u7a0b\u5e8f\u4e0e\u7279\u5b9a\u5916\u90e8\u670d\u52a1\u6216\u5e95\u5c42\u6570\u636e\u6e90\uff08\u4f8b\u5982\u6570\u636e\u5e93\uff09\u4ea4\u4e92\u7684\u955c\u50cf\u6216\u5b9e\u4f8b\u3002\u8fde\u63a5\u5668\u7684\u7c7b\u578b\u53ef\u4ee5\u662f\u6e90\uff08Source\uff09\u6216\u6c47\uff08Sink\uff09\u3002"),(0,o.kt)("p",null,"\u8fde\u63a5\u5668\u901a\u8fc7  ",(0,o.kt)("inlineCode",{parentName:"p"},"main()")," \u4f5c\u4e3a\u4e00\u4e2a\u72ec\u7acb\u670d\u52a1\u8fd0\u884c\u3002"),(0,o.kt)("h2",{id:"\u6570\u636e\u6e90source-\u7aef"},"\u6570\u636e\u6e90\uff08Source \u7aef\uff09"),(0,o.kt)("p",null,"\u6e90\u8fde\u63a5\u5668\u4ece\u5e95\u5c42\u6570\u636e\u751f\u4ea7\u8005\u83b7\u53d6\u6570\u636e\uff0c\u5e76\u5728\u539f\u59cb\u6570\u636e\u88ab\u8f6c\u6362\u4e3a CloudEvents \u540e\u5c06\u5176\u4f20\u9012\u7ed9\u76ee\u6807\u3002\u6e90\u8fde\u63a5\u5668\u4e0d\u9650\u5236\u6e90\u5982\u4f55\u68c0\u7d22\u6570\u636e\uff08\u4f8b\u5982\uff0c\u6e90\u53ef\u4ee5\u4ece\u6d88\u606f\u961f\u5217\u4e2d\u83b7\u53d6\u6570\u636e\uff0c\u4e5f\u53ef\u4ee5\u5145\u5f53\u7b49\u5f85\u63a5\u6536\u6570\u636e\u7684 HTTP \u670d\u52a1\u5668\uff09\u3002"),(0,o.kt)("h2",{id:"\u6570\u636e\u6c47sink-\u7aef"},"\u6570\u636e\u6c47\uff08Sink \u7aef\uff09"),(0,o.kt)("p",null,"\u6c47\u8fde\u63a5\u5668\u63a5\u6536 CloudEvents \u5e76\u6267\u884c\u7279\u5b9a\u7684\u4e1a\u52a1\u903b\u8f91\uff08\u4f8b\u5982\uff0cMySQL \u7684\u6c47\u8fde\u63a5\u5668\u4ece CloudEvents \u4e2d\u63d0\u53d6\u6709\u7528\u7684\u6570\u636e\uff0c\u5e76\u5c06\u5176\u5199\u5165 MySQL \u6570\u636e\u5e93\uff09\u3002"),(0,o.kt)("h2",{id:"cloudevents"},"CloudEvents"),(0,o.kt)("p",null,"CloudEvents \u662f\u4e00\u79cd\u4ee5\u901a\u7528\u683c\u5f0f\u63cf\u8ff0\u4e8b\u4ef6\u6570\u636e\u7684\u89c4\u8303\uff0c\u4ee5\u63d0\u4f9b\u670d\u52a1\u3001\u5e73\u53f0\u548c\u7cfb\u7edf\u4e4b\u95f4\u7684\u4e92\u64cd\u4f5c\u6027\u3002"),(0,o.kt)("h2",{id:"\u5b9e\u73b0\u8fde\u63a5\u5668"},"\u5b9e\u73b0\u8fde\u63a5\u5668"),(0,o.kt)("p",null,"\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/eventmesh/tree/master/eventmesh-openconnect/eventmesh-openconnect-java"},"eventmesh-openconnect-java")," \u5b9e\u73b0 Source/Sink \u63a5\u53e3\u5373\u53ef\u6dfb\u52a0\u65b0\u7684\u8fde\u63a5\u5668\u3002"),(0,o.kt)("h2",{id:"\u6280\u672f\u65b9\u6848"},"\u6280\u672f\u65b9\u6848"),(0,o.kt)("h3",{id:"\u7ed3\u6784\u4e0e\u5904\u7406\u6d41\u7a0b"},"\u7ed3\u6784\u4e0e\u5904\u7406\u6d41\u7a0b"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"source-sink connector architecture",src:t(15290).Z,width:"1626",height:"780"})),(0,o.kt)("h3",{id:"\u8be6\u7ec6\u8bbe\u8ba1"},"\u8be6\u7ec6\u8bbe\u8ba1"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"eventmesh-connect-detail",src:t(99717).Z,width:"1614",height:"1010"})),(0,o.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,o.kt)("h4",{id:"worker"},"Worker"),(0,o.kt)("p",null,"Worker \u5206\u4e3a Source Worker \u4e0e Sink Worker\uff0c\u7531",(0,o.kt)("inlineCode",{parentName:"p"},"Application"),"\u7c7b\u8fdb\u884c\u89e6\u53d1\u8fd0\u884c\uff0c\u5206\u522b\u5b9e\u73b0\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"ConnectorWorker"),"\u63a5\u53e3\u7684\u65b9\u6cd5\uff0c\u5176\u4e2d\u5305\u542b\u4e86 worker \u7684\u8fd0\u884c\u751f\u547d\u5468\u671f\uff0cworker \u627f\u8f7d\u4e86 connector \u7684\u8fd0\u884c\u3002Worker \u53ef\u4ee5\u901a\u8fc7\u955c\u50cf\u7684\u65b9\u5f0f\u8f7b\u91cf\u7684\u72ec\u7acb\u8fd0\u884c\uff0c\u5185\u90e8\u96c6\u6210\u4e86 eventmesh-sdk-java \u6a21\u5757\uff0c\u91c7\u7528 CloudEvents \u534f\u8bae\u4e0e EventMesh \u8fdb\u884c\u4ea4\u4e92\uff0c\u76ee\u524d\u9ed8\u8ba4\u91c7\u7528 TCP \u5ba2\u6237\u7aef\uff0c\u540e\u7eed\u53ef\u4ee5\u8003\u8651\u652f\u6301\u52a8\u6001\u53ef\u914d\u3002"),(0,o.kt)("h4",{id:"connector"},"Connector"),(0,o.kt)("p",null,"Connector \u5206\u4e3a Source Connector \u4e0e Sink Connector\uff0cconnector \u6709\u5404\u81ea\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u4ee5\u53ca\u72ec\u7acb\u8fd0\u884c\u7684\u65b9\u5f0f\uff0c\u901a\u8fc7 worker \u8fdb\u884c\u53cd\u5c04\u52a0\u8f7d\u4e0e\u914d\u7f6e\u89e3\u6790\uff0c\u5b8c\u6210 Connector \u7684\u521d\u59cb\u5316\u4ee5\u53ca\u540e\u7eed\u8fd0\u884c\u5de5\u4f5c\uff0c\u5176\u4e2d Source Connector \u5b9e\u73b0 poll \u65b9\u6cd5\uff0cSink Connector \u5b9e\u73b0 put \u65b9\u6cd5\uff0c\u7edf\u4e00\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"ConnectorRecord"),"\u627f\u8f7d\u6570\u636e\u3002Source Connector \u4e0e Sink Connector \u5747\u53ef\u72ec\u7acb\u8fd0\u884c\u3002"),(0,o.kt)("h4",{id:"connectorrecord-with-cloudevents"},"ConnectorRecord with CloudEvents"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ConnectorRecord"),"\u4e3a connector \u5c42\u6570\u636e\u534f\u8bae\uff0c\u5f53 worker \u4e0e EventMesh \u8fdb\u884c\u4ea4\u4e92\u65f6\u9700\u5f00\u53d1\u534f\u8bae\u9002\u914d\u5668\u8fdb\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"ConnectorRecord"),"\u5230 CloudEvents \u7684\u534f\u8bae\u8f6c\u6362\u3002"),(0,o.kt)("h4",{id:"registry"},"Registry"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Registry"),"\u6a21\u5757\u8d1f\u8d23\u5b58\u50a8\u540c\u6b65\u4e0d\u540c Connector \u5b9e\u4f8b\u7684\u6570\u636e\u7684\u540c\u6b65\u8fdb\u5ea6\uff0c\u786e\u4fdd\u591a\u4e2a Connector \u955c\u50cf\u6216\u5b9e\u4f8b\u4e4b\u95f4\u7684\u9ad8\u53ef\u7528\u3002"))}p.isMDXComponent=!0},15290:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/connector-architecture-8dbcfb90423a11d295a275d9ef8e6774.png"},99717:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/connector-design-detail-f20f6c65bc25ddb811491080c71b1cea.png"}}]);