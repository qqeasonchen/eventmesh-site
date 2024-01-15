"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[6076],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,h=s["".concat(i,".").concat(m)]||s[m]||d[m]||c;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<c;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57712:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const c={},a="HTTP",l={unversionedId:"design-document/connect/http-connector",id:"design-document/connect/http-connector",title:"HTTP",description:"HTTP Source Connector",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/design-document/03-connect/02-http-connector.md",sourceDirName:"design-document/03-connect",slug:"/design-document/connect/http-connector",permalink:"/zh/docs/next/design-document/connect/http-connector",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/docs/design-document/03-connect/02-http-connector.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RabbitMQ",permalink:"/zh/docs/next/design-document/connect/rabbitmq-connector"},next:{title:"Redis",permalink:"/zh/docs/next/design-document/connect/redis-connector"}},i={},p=[{value:"HTTP Source Connector",id:"http-source-connector",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:3},{value:"\u53d1\u9001\u6d88\u606f",id:"\u53d1\u9001\u6d88\u606f",level:3}],u={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"http"},"HTTP"),(0,o.kt)("h2",{id:"http-source-connector"},"HTTP Source Connector"),(0,o.kt)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("p",null,"\u4f7f\u7528 HTTP source connector \u524d\uff0c\u9700\u8981\u8fdb\u884c server \u7684\u914d\u7f6e\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8bf7\u5728 ",(0,o.kt)("inlineCode",{parentName:"li"},"/resource/server-config.yml")," \u4e2d\u914d\u7f6e ",(0,o.kt)("inlineCode",{parentName:"li"},"sourceEnable"),"\u4e3a",(0,o.kt)("inlineCode",{parentName:"li"},"true")," \u4ee5\u5f00\u542f source \u529f\u80fd\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u8bf7\u5728 ",(0,o.kt)("inlineCode",{parentName:"li"},"/resource/source-config.yml"),"\u4e2d\u914d\u7f6e source connector, \u5728\u6b64\u4ec5\u8bf4\u660e ",(0,o.kt)("inlineCode",{parentName:"li"},"connectorConfig")," \u4e0b\u7684\u914d\u7f6e\uff1a",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"connectorName"),", connector \u7684\u540d\u79f0"),(0,o.kt)("li",{parentName:"ul"},"\uff08\u5fc5\u9700\uff09 ",(0,o.kt)("inlineCode",{parentName:"li"},"path"),", \u63a5\u53e3\u7684\u8def\u5f84"),(0,o.kt)("li",{parentName:"ul"},"\uff08\u5fc5\u9700\uff09 ",(0,o.kt)("inlineCode",{parentName:"li"},"port"),", \u63a5\u53e3\u7684\u7aef\u53e3"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"idleTimeout"),", \u7a7a\u95f2 TCP \u8fde\u63a5\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2\u3002\u8d85\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"li"},"idleTimeout")," \u79d2\u6ca1\u6709\u8fdb\u884c\u6570\u636e\u63a5\u6536\u6216\u53d1\u9001\u7684\u8fde\u63a5\u5c06\u4f1a\u53d1\u751f\u8d85\u65f6\u5e76\u88ab\u5173\u95ed\u3002\u9ed8\u8ba4\u4e3a 0, \u4e0d\u4f1a\u53d1\u751f\u8d85\u65f6\u3002")))),(0,o.kt)("h3",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u542f\u52a8 EventMesh Runtime"),(0,o.kt)("li",{parentName:"ol"},"\u542f\u52a8 eventmesh-connector-http")),(0,o.kt)("p",null,"\u5b8c\u6210\u540e\uff0cHTTP source connector \u4f1a\u4f5c\u4e3a\u4e00\u4e2a HTTP \u670d\u52a1\u5668\u5bf9\u5916\u63d0\u4f9b\u670d\u52a1\u3002"),(0,o.kt)("h3",{id:"\u53d1\u9001\u6d88\u606f"},"\u53d1\u9001\u6d88\u606f"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 HTTP \u5411 source connector \u53d1\u9001\u6d88\u606f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"connectorConfig:\n    connectorName: httpSource\n    path: /test\n    port: 3755\n    idleTimeout: 5\n")),(0,o.kt)("p",null,"\u4e0a\u8ff0\u7684\u4f8b\u5b50\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"source-config.yml"),"\u4e2d\u914d\u7f6e\u4e86\u4e00\u4e2a URL ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3755/test"),"."),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u6309\u7167 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/bindings/http-protocol-binding.md"},"cloudevent-spec")," \u4e2d\u7684\u89c4\u5b9a\uff0c\u4ee5",(0,o.kt)("inlineCode",{parentName:"p"},"binary"),"\u6a21\u5f0f\u6216\u8005",(0,o.kt)("inlineCode",{parentName:"p"},"structured"),"\u6a21\u5f0f\u53d1\u9001\u6d88\u606f\u3002"),(0,o.kt)("p",null,"\u8fd9\u91cc\u662f\u4e24\u4e2a\u4f8b\u5b50\uff1a"),(0,o.kt)("p",null,"\u4ee5",(0,o.kt)("inlineCode",{parentName:"p"},"binary"),"\u6a21\u5f0f\u53d1\u9001\u6d88\u606f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request POST 'http://localhost:3755/test' \\\n--header 'ce-id: 1' \\\n--header 'ce-specversion: 1.0' \\\n--header 'ce-type: com.example.someevent' \\\n--header 'ce-source: /mycontext' \\\n--header 'ce-subject: test_topic' \\\n--header 'Content-Type: text/plain' \\\n--data-raw 'testdata'\n")),(0,o.kt)("p",null,"\u4ee5",(0,o.kt)("inlineCode",{parentName:"p"},"structured"),"\u6a21\u5f0f\u53d1\u9001\u6d88\u606f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:3755/test\' \\\n--header \'Content-Type: application/cloudevents+json\' \\\n--data-raw \'{\n    "id": "1",\n    "specversion": "1.0",\n    "type": "com.example.someevent",\n    "source": "/mycontext",\n    "subject":"test_topic",\n    "datacontenttype":"text/plain",\n    "data": "testdata"\n}\'\n')))}d.isMDXComponent=!0}}]);