"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[7416],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=i,k=p["".concat(s,".").concat(u)]||p[u]||m[u]||a;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97574:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={},o="Feishu/Lark",l={unversionedId:"design-document/connect/lark-connector",id:"design-document/connect/lark-connector",title:"Feishu/Lark",description:"Lark Sink Server Config And Start",source:"@site/docs/design-document/03-connect/06-lark-connector.md",sourceDirName:"design-document/03-connect",slug:"/design-document/connect/lark-connector",permalink:"/docs/next/design-document/connect/lark-connector",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/docs/design-document/03-connect/06-lark-connector.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Knative",permalink:"/docs/next/design-document/connect/knative-connector"},next:{title:"DingTalk",permalink:"/docs/next/design-document/connect/dingtalk-connector"}},s={},c=[{value:"Lark Sink Server Config And Start",id:"lark-sink-server-config-and-start",level:2},{value:"Sink CloudEvent To Lark",id:"sink-cloudevent-to-lark",level:2},{value:"Lark Open Platform API",id:"lark-open-platform-api",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"feishulark"},"Feishu/Lark"),(0,i.kt)("h2",{id:"lark-sink-server-config-and-start"},"Lark Sink Server Config And Start"),(0,i.kt)("p",null,"Before using eventmesh-connector-lark to sink events, you need to configure the server."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Please customize ",(0,i.kt)("inlineCode",{parentName:"li"},"sinkEnable``="),"true",(0,i.kt)("inlineCode",{parentName:"li"},"/"),"false",(0,i.kt)("inlineCode",{parentName:"li"},"in"),"/resource/server-config.yml` to turn on/off the sink function."),(0,i.kt)("li",{parentName:"ul"},"Regarding ",(0,i.kt)("inlineCode",{parentName:"li"},"/resource/sink-config.yml"),", only the configuration under ",(0,i.kt)("inlineCode",{parentName:"li"},"sinkConnectorConfig")," is explained here:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"connectorName"),", specify the connector name"),(0,i.kt)("li",{parentName:"ul"},"(required) ",(0,i.kt)("inlineCode",{parentName:"li"},"appId"),", the appId obtained from lark"),(0,i.kt)("li",{parentName:"ul"},"(required) ",(0,i.kt)("inlineCode",{parentName:"li"},"appSecret"),", the appSecret obtained from lark"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"receiveIdType"),", the type of receiving Id, the default and recommended use is ",(0,i.kt)("inlineCode",{parentName:"li"},"open_id"),". Optional open_id/user_id/union_id/email/chat_id."),(0,i.kt)("li",{parentName:"ul"},"(Required) ",(0,i.kt)("inlineCode",{parentName:"li"},"receiveId"),", receive Id, needs to correspond to ",(0,i.kt)("inlineCode",{parentName:"li"},"receiveIdType"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sinkAsync"),", whether to asynchronously sink events"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"maxRetryTimes"),", the maximum number of retransmissions when the sink event fails. The default is 3 times."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"retryDelayInMills"),", when the sink event fails, the time interval for retransmitting the event. Default is 1s, unit is milliseconds.")))),(0,i.kt)("h2",{id:"sink-cloudevent-to-lark"},"Sink CloudEvent To Lark"),(0,i.kt)("p",null,"When using the eventmesh-connector-lark sinking event, you need to add the corresponding extension filed in CloudEvent:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When key=",(0,i.kt)("inlineCode",{parentName:"li"},"templatetype4lark"),", value=",(0,i.kt)("inlineCode",{parentName:"li"},"text"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"markdown"),", indicating the text type of the event."),(0,i.kt)("li",{parentName:"ul"},"When text type is markdown, you can add extension: key=",(0,i.kt)("inlineCode",{parentName:"li"},"markdownmessagetitle4lark"),", value indicates the title of the event."),(0,i.kt)("li",{parentName:"ul"},"When key=",(0,i.kt)("inlineCode",{parentName:"li"},"atusers4lark"),", value=",(0,i.kt)("inlineCode",{parentName:"li"},"id-0,name-0;id-1,name-1"),", indicating that the event requires ",(0,i.kt)("inlineCode",{parentName:"li"},"@"),"certain users.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It is recommended to use ",(0,i.kt)("strong",{parentName:"li"},"open_id")," for id."),(0,i.kt)("li",{parentName:"ul"},"When the text is of text type, the id can be ",(0,i.kt)("strong",{parentName:"li"},"open_id/union_id/user_id"),"; when the text is of markdown type, the id can be ",(0,i.kt)("strong",{parentName:"li"},"open_id/user_id"),". In particular, when the application type is ",(0,i.kt)("a",{parentName:"li",href:"https://open.larksuite.com/document/ukTMukTMukTM/ucTM5YjL3ETO24yNxkjN"},"custom robot")," and the text is of markdown type, only the use of ",(0,i.kt)("strong",{parentName:"li"},"open_id")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"@")," the user is supported."),(0,i.kt)("li",{parentName:"ul"},"When the text is of text type and the id is invalid, name will be used instead for display; when the text is of markdown type and the id is invalid, an exception will be thrown directly (you should try to ensure the correctness of the id, and name can be considered omitted)."))),(0,i.kt)("li",{parentName:"ul"},"When key=",(0,i.kt)("inlineCode",{parentName:"li"},"atall4lark"),", value=",(0,i.kt)("inlineCode",{parentName:"li"},"true"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"false"),", indicating that the event requires ",(0,i.kt)("inlineCode",{parentName:"li"},"@")," everyone.")),(0,i.kt)("h2",{id:"lark-open-platform-api"},"Lark Open Platform API"),(0,i.kt)("p",null,"For the Lark open platform API involved in this module, please click the following link:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Send Message"),", please ",(0,i.kt)("a",{parentName:"li",href:"https://open.larksuite.com/document/server-docs/im-v1/message/create?appId=cli_a5e1bc31507ed00c"},"view here")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"text"),", please ",(0,i.kt)("a",{parentName:"li",href:"https://open.larksuite.com/document/server-docs/im-v1/message-content-description/create_json#c9e08671"},"view here")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"markdown"),", please ",(0,i.kt)("a",{parentName:"li",href:"https://open.larksuite.com/document/common-capabilities/message-card/message-cards-content/using-markdown-tags"},"view here"))))}p.isMDXComponent=!0}}]);