"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[9377],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(r),m=o,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[f]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7296:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},i="CNCF Serverlessworkflow offical recommends EventMesh as runtime impl",l={permalink:"/blog/cncf-serverlessworkflow-official-recommends-eventmesh-as-runtime-impl",editUrl:"https://github.com/apache/incubator-eventmesh-site/edit/master/blog/blog/cncf-serverlessworkflow-official-recommends-eventmesh-as-runtime-impl.md",source:"@site/blog/cncf-serverlessworkflow-official-recommends-eventmesh-as-runtime-impl.md",title:"CNCF Serverlessworkflow offical recommends EventMesh as runtime impl",description:"CNCF Serverless Workflow defines a vendor-neutral, open-source, and fully community-driven ecosystem for defining and running DSL-based workflows that target the Serverless technology domain.",date:"2023-01-30T08:13:49.000Z",formattedDate:"January 30, 2023",tags:[],readingTime:.61,hasTruncateMarker:!1,authors:[],frontMatter:{},nextItem:{title:"Solving the standardization problem of SaaS combined application integration - The practical application of EventMesh in Huawei",permalink:"/blog/the-practical-application-of-eventmesh-in-huawei"}},s={authorsImageUrls:[]},c=[{value:"CNCF Landscape",id:"cncf-landscape",level:2},{value:"Open-source workflow runtimes",id:"open-source-workflow-runtimes",level:2}],p={toc:c};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"about"},"About"),(0,o.kt)("p",null,"CNCF ",(0,o.kt)("a",{parentName:"p",href:"https://serverlessworkflow.io/"},"Serverless Workflow")," defines a vendor-neutral, open-source, and fully community-driven ecosystem for defining and running DSL-based workflows that target the Serverless technology domain."),(0,o.kt)("p",null,"This project is composed of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"specification.md"},"Specification")," for defining DSL-based workflows"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#sdks"},"Developer SDKs")," for different programming languages"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#runtimes"},"Workflow runtimes")," supporting the specification"),(0,o.kt)("li",{parentName:"ul"},"Developer ",(0,o.kt)("a",{parentName:"li",href:"#tooling"},"tooling support")," for writing DSL-based workflows")),(0,o.kt)("p",null,"CNCF Serverless Workflow is hosted by the ",(0,o.kt)("a",{parentName:"p",href:"https://www.cncf.io/"},"Cloud Native Computing Foundation (CNCF)")," and was approved as a\nCloud Native Sandbox level project on July 14, 2020."),(0,o.kt)("h2",{id:"cncf-landscape"},"CNCF Landscape"),(0,o.kt)("p",null,"Serverless Workflow project falls under the ",(0,o.kt)("a",{parentName:"p",href:"https://landscape.cncf.io/card-mode?category=app-definition-and-development&grouping=category"},'CNCF "App Definition and Development"')," category."),(0,o.kt)("p",null,"It is a member project of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cncf/wg-serverless"},"CNCF Serverless Working Group"),"."),(0,o.kt)("h2",{id:"open-source-workflow-runtimes"},"Open-source workflow runtimes"),(0,o.kt)("p",{align:"center"},(0,o.kt)("a",{href:"https://serverlessworkflow.io",target:"_blank"},(0,o.kt)("img",{src:"../images/serverlessworkflow-official.png",width:"700px",alt:"Serverlessworkflow"}))))}f.isMDXComponent=!0}}]);