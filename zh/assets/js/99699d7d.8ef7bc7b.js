"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[7375],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(n),v=o,m=d["".concat(l,".").concat(v)]||d[v]||u[v]||i;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=v;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[d]="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},81449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={},s="HTTPS",a={unversionedId:"design-document/event-handling-and-integration/https",id:"version-v1.10.0/design-document/event-handling-and-integration/https",title:"HTTPS",description:"1. \u5728 eventmesh-runtime \u4e2d\u914d\u7f6e",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.10.0/design-document/01-event-handling-and-integration/02-https.md",sourceDirName:"design-document/01-event-handling-and-integration",slug:"/design-document/event-handling-and-integration/https",permalink:"/zh/docs/design-document/event-handling-and-integration/https",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.10.0/design-document/01-event-handling-and-integration/02-https.md",tags:[],version:"v1.10.0",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TCP \u534f\u8bae\u6587\u6863",permalink:"/zh/docs/design-document/event-handling-and-integration/runtime-protocol"},next:{title:"CloudEvents \u96c6\u6210",permalink:"/zh/docs/design-document/event-handling-and-integration/cloudevents"}},l={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"https"},"HTTPS"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728 eventmesh-runtime \u4e2d\u914d\u7f6e")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"eventMesh.properties \uff08\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\uff09\neventMesh.server.useTls.enabled=true   // \u9ed8\u8ba4\u503c false\n\nconfig env varible\n-Dssl.server.protocol=TLSv1.1   // \u9ed8\u8ba4\u503c TLSv1.1\n-Dssl.server.cer=sChat2.jks     // \u628a\u6587\u4ef6\u653e\u5230\u542f\u52a8\u811a\u672c start.sh \u6307\u5b9a\u7684 conPath \u76ee\u5f55\u4e0b\n-Dssl.server.pass=sNetty\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u5728 eventmesh-sdk-java \u4e2d\u914d\u7f6e")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// \u521b\u5efa producer\nLiteClientConfig eventMeshHttpClientConfig = new eventMeshHttpClientConfig();\n...\n\n// \u8bbe\u7f6e\u5f00\u542f TLS\neventMeshHttpClientConfig.setUseTls(true);\nLiteProducer producer = new LiteProducer(eventMeshHttpClientConfig);\n\n// \u914d\u7f6e\u73af\u5883\u53d8\u91cf\n-Dssl.client.protocol=TLSv1.1   // \u9ed8\u8ba4\u503c TLSv1.1\n-Dssl.client.cer=sChat2.jks     // \u628a\u6587\u4ef6\u653e\u5230\u5e94\u7528\u6307\u5b9a\u7684 conPath \u76ee\u5f55\u4e0b\n-Dssl.client.pass=sNetty\n")))}d.isMDXComponent=!0}}]);