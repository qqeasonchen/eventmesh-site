"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[4903],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),i=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(n),m=r,v=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(v,l(l({ref:t},c),{},{components:n})):a.createElement(v,l({ref:t},c))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(87462),r=n(67294),o=n(86010),l=n(12466),s=n(16550),u=n(91980),i=n(67392),c=n(50012);function p(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function v(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,i]=v({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),h=(()=>{const e=u??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),f(e)}),[i,f,o]),tabValues:o}}var h=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:s,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=i[n].value;a!==s&&(p(t),u(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",b.tabItem,null==l?void 0:l.className,{"tabs__item--active":s===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(g,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function E(e){const t=(0,h.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},27491:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>v,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),l=n(85162);const s={},u="\u5b89\u88c5 SDK",i={unversionedId:"sdk-java/intro",id:"version-v1.2.0/sdk-java/intro",title:"\u5b89\u88c5 SDK",description:"Maven Central",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.2.0/sdk-java/01-intro.md",sourceDirName:"sdk-java",slug:"/sdk-java/intro",permalink:"/zh/docs/v1.2.0/sdk-java/intro",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.2.0/sdk-java/01-intro.md",tags:[],version:"v1.2.0",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EventMesh SPI",permalink:"/zh/docs/v1.2.0/design-document/spi"},next:{title:"HTTP \u534f\u8bae",permalink:"/zh/docs/v1.2.0/sdk-java/http"}},c={},p=[],d={toc:p},m="wrapper";function v(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5b89\u88c5-sdk"},"\u5b89\u88c5 SDK"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://maven-badges.herokuapp.com/maven-central/org.apache.eventmesh/eventmesh-sdk-java"},(0,r.kt)("img",{parentName:"a",src:"https://maven-badges.herokuapp.com/maven-central/org.apache.eventmesh/eventmesh-sdk-java/badge.svg?style=for-the-badge",alt:"Maven Central"}))),(0,r.kt)("p",null,"EventMesh Java SDK \u662f\u5728\u4e00\u4e2a Java \u5e94\u7528\u4e2d\u96c6\u6210 Eventmesh \u6240\u9700\u7684 Java \u7ec4\u4ef6\u96c6\u5408\u3002SDK \u652f\u6301\u4f7f\u7528 TCP\u3001HTTP \u548c gRPC \u534f\u8bae\u6765\u53d1\u9001\u548c\u63a5\u6536\u540c\u6b65\u6d88\u606f\u3001\u5f02\u6b65\u6d88\u606f\u548c\u5e7f\u64ad\u6d88\u606f\u3002SDK \u5b9e\u73b0\u4e86 EventMesh \u6d88\u606f\u3001CloudEvents \u548c OpenMessaging \u5f62\u5f0f\u3002\u60a8\u53ef\u4ee5\u5728 ","[",(0,r.kt)("inlineCode",{parentName:"p"},"eventmesh-example"),"]","(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/eventmesh/tree/master/eventmesh-examples%E7%9B%AE%E3%80%82"},"https://github.com/apache/eventmesh/tree/master/eventmesh-examples\u76ee\u3002")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Gradle",label:"Gradle",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"\u200b    \u4f7f\u7528 Gradle \u5b89\u88c5 EventMesh Java SDK\uff0c\u60a8\u9700\u8981\u5728\u6a21\u5757\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle")," \u6587\u4ef6\u7684\u4f9d\u8d56\u5757\u4e2d\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.eventmesh:eventmesh-sdk-java")," \u58f0\u660e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"implementation"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  implementation 'org.apache.eventmesh:eventmesh-sdk-java:1.4.0'\n}\n"))),(0,r.kt)(l.Z,{value:"Maven",label:"Maven",mdxType:"TabItem"},(0,r.kt)("p",null,"\u4f7f\u7528 Maven \u5b89\u88c5 EventMesh Java SDK\uff0c\u60a8\u9700\u8981\u5728\u9879\u76ee ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u7684\u4f9d\u8d56\u5757\u4e2d\u58f0\u660e ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.eventmesh:eventmesh-sdk-java"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n  <dependency>\n    <groupId>org.apache.eventmesh</groupId>\n    <artifactId>eventmesh-sdk-java</artifactId>\n    <version>1.4.0</version>\n  </dependency>\n</dependencies>\n")))))}v.isMDXComponent=!0}}]);