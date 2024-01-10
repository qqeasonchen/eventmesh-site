"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[9093],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=o,k=u["".concat(i,".").concat(d)]||u[d]||m[d]||c;return t?r.createElement(k,a(a({ref:n},p),{},{components:t})):r.createElement(k,a({ref:n},p))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<c;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},50782:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const c={},a="Slack",s={unversionedId:"design-document/connect/slack-connector",id:"design-document/connect/slack-connector",title:"Slack",description:"SlackSinkConnector: From EventMesh to Slack",source:"@site/docs/design-document/03-connect/09-slack-connector.md",sourceDirName:"design-document/03-connect",slug:"/design-document/connect/slack-connector",permalink:"/docs/next/design-document/connect/slack-connector",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/docs/design-document/03-connect/09-slack-connector.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WeCom",permalink:"/docs/next/design-document/connect/wecom-connector"},next:{title:"EventMesh Schema Registry (OpenSchema)",permalink:"/docs/next/design-document/schema-registry"}},i={},l=[{value:"SlackSinkConnector: From EventMesh to Slack",id:"slacksinkconnector-from-eventmesh-to-slack",level:2}],p={toc:l};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"slack"},"Slack"),(0,o.kt)("h2",{id:"slacksinkconnector-from-eventmesh-to-slack"},"SlackSinkConnector: From EventMesh to Slack"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"launch your EventMesh Runtime."),(0,o.kt)("li",{parentName:"ol"},"enable sinkConnector and check ",(0,o.kt)("inlineCode",{parentName:"li"},"sink-config.yml"),"."),(0,o.kt)("li",{parentName:"ol"},"send a message to EventMesh with the topic defined in ",(0,o.kt)("inlineCode",{parentName:"li"},"pubSubConfig.subject"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"pubSubConfig:\n  # default port 10000\n  meshAddress: your.eventmesh.server:10000\n  subject: TEST-TOPIC-SLACK\n  idc: FT\n  env: PRD\n  group: slackSink\n  appId: 5034\n  userName: slackSinkUser\n  passWord: slackPassWord\nsinkConnectorConfig:\n  connectorName: slackSink\n  # Please refer to: https://api.slack.com/messaging/sending\n  appToken: slackAppToken\n  channelId: slackChannelId\n")))}u.isMDXComponent=!0}}]);