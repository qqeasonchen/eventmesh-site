"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[9070],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,h=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1089:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={},o="EventMesh \u6307\u6807\uff08OpenTelemetry \u548c Prometheus",i={unversionedId:"design-document/metrics-export",id:"design-document/metrics-export",title:"EventMesh \u6307\u6807\uff08OpenTelemetry \u548c Prometheus",description:"\u4ecb\u7ecd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/design-document/05-metrics-export.md",sourceDirName:"design-document",slug:"/design-document/metrics-export",permalink:"/zh/docs/design-document/metrics-export",draft:!1,editUrl:"https://github.com/apache/incubator-eventmesh-site/edit/master/docs/design-document/05-metrics-export.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EventMesh Schema Registry (OpenSchema)",permalink:"/zh/docs/design-document/schema-registry"},next:{title:"CloudEvents \u96c6\u6210",permalink:"/zh/docs/design-document/cloudevents"}},p={},u=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"OpenTelemetry \u6982\u8ff0",id:"opentelemetry-\u6982\u8ff0",level:2},{value:"\u6982\u8ff0 Prometheus",id:"\u6982\u8ff0-prometheus",level:2},{value:"\u8981\u6c42",id:"\u8981\u6c42",level:2},{value:"\u529f\u80fd\u8981\u6c42",id:"\u529f\u80fd\u8981\u6c42",level:3},{value:"\u8bbe\u8ba1 \u7ec6\u8282",id:"\u8bbe\u8ba1-\u7ec6\u8282",level:2},{value:"\u9644\u5f55",id:"\u9644\u5f55",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:3}],c={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"eventmesh-\u6307\u6807opentelemetry-\u548c-prometheus"},"EventMesh \u6307\u6807\uff08OpenTelemetry \u548c Prometheus"),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-eventmesh"},"EventMesh(incubating)")," \u662f\u4e00\u4e2a\u52a8\u6001\u7684\u4e91\u539f\u751f\u4e8b\u4ef6\u57fa\u7840\u8bbe\u65bd."),(0,a.kt)("h2",{id:"opentelemetry-\u6982\u8ff0"},"OpenTelemetry \u6982\u8ff0"),(0,a.kt)("p",null,"OpenTelemetry \u662f\u5de5\u5177\u3001API \u548c SDK \u7684\u96c6\u5408\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u68c0\u6d4b\u3001\u751f\u6210\u3001\u6536\u96c6\u548c\u5bfc\u51fa\u9065\u6d4b\u6570\u636e\uff08\u6307\u6807\u3001\u65e5\u5fd7\u548c\u8ddf\u8e2a\uff09\u4ee5\u8fdb\u884c\u5206\u6790\uff0c\u4ee5\u4fbf\u4e86\u89e3\u60a8\u7684\u8f6f\u4ef6\u7684\u6027\u80fd\u548c\u884c\u4e3a\u3002"),(0,a.kt)("h2",{id:"\u6982\u8ff0-prometheus"},"\u6982\u8ff0 Prometheus"),(0,a.kt)("p",null,"\u4f7f\u7528\u9886\u5148\u7684\u5f00\u6e90\u76d1\u63a7\u89e3\u51b3\u65b9\u6848\u4e3a\u60a8\u7684\u6307\u6807\u548c\u8b66\u62a5\u63d0\u4f9b\u652f\u6301\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c3a\u5bf8\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"\u5f3a\u5927\u7684\u67e5\u8be2"),(0,a.kt)("li",{parentName:"ul"},"\u4f1f\u5927\u7684\u53ef\u89c6\u5316"),(0,a.kt)("li",{parentName:"ul"},"\u9ad8\u6548\u5b58\u50a8"),(0,a.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u7b80\u5355"),(0,a.kt)("li",{parentName:"ul"},"\u7cbe\u51c6\u9884\u8b66"),(0,a.kt)("li",{parentName:"ul"},"\u8bb8\u591a\u5ba2\u6237\u7aef\u5e93"),(0,a.kt)("li",{parentName:"ul"},"\u8bb8\u591a\u96c6\u6210")),(0,a.kt)("h2",{id:"\u8981\u6c42"},"\u8981\u6c42"),(0,a.kt)("h3",{id:"\u529f\u80fd\u8981\u6c42"},"\u529f\u80fd\u8981\u6c42"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"\u9700\u6c42\u7f16\u53f7"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u9700\u6c42\u63cf\u8ff0"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"F-1"),(0,a.kt)("td",{parentName:"tr",align:"center"},"EventMesh\u7684\u7528\u6237\u5e94\u8be5\u80fd\u591f\u4ecePrometheus\u89c2\u5bdf\u5230HTTP\u76d1\u63a7\u6307\u6807"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u529f\u80fd\u6027")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"F-2"),(0,a.kt)("td",{parentName:"tr",align:"center"},"EventMesh\u7684\u7528\u6237\u5e94\u8be5\u80fd\u591f\u4ecePrometheus\u89c2\u5bdf\u5230TCP\u76d1\u63a7\u6307\u6807"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u529f\u80fd\u6027")))),(0,a.kt)("h2",{id:"\u8bbe\u8ba1-\u7ec6\u8282"},"\u8bbe\u8ba1 \u7ec6\u8282"),(0,a.kt)("p",null,"\u4f7f\u7528\u7531\u63d0\u4f9b\u7684\u4eea\u8868\u4eea\u5668 OpenTelemetry \u89c2\u5bdf\u6307\u6807\u5b58\u5728\u65bc EventMesh \u7136\u540e\u5bfc\u51fa\u5230 Prometheus."),(0,a.kt)("p",null,"1\u3001\u521d\u59cb\u5316\u4eea\u8868\u4eea\u5668"),(0,a.kt)("p",null,"2\u3001\u8bbe\u7f6e Prometheus \u670d\u52a1\u5668"),(0,a.kt)("p",null,"3\u3001\u521b\u5efa\u4e86\u4e0d\u540c\u7684\u6307\u6807\u89c2\u5bdf\u8005"),(0,a.kt)("h2",{id:"\u9644\u5f55"},"\u9644\u5f55"),(0,a.kt)("h3",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/docs-cn/blob/main/QUICKSTART.md#%E5%88%9B%E5%BB%BA%E5%9F%BA%E7%A1%80Span"},"https://github.com/open-telemetry/docs-cn/blob/main/QUICKSTART.md#%E5%88%9B%E5%BB%BA%E5%9F%BA%E7%A1%80Span")))}m.isMDXComponent=!0}}]);