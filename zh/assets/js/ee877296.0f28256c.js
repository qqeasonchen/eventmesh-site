"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[4169],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),p=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(t),u=a,k=c["".concat(o,".").concat(u)]||c[u]||d[u]||l;return t?r.createElement(k,i(i({ref:n},m),{},{components:t})):r.createElement(k,i({ref:n},m))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=u;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},78:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const l={},i="EventMesh \u5de5\u4f5c\u6d41",s={unversionedId:"design-document/event-handling-and-integration/workflow",id:"version-v1.10.0/design-document/event-handling-and-integration/workflow",title:"EventMesh \u5de5\u4f5c\u6d41",description:"\u4e1a\u52a1\u573a\u666f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.10.0/design-document/01-event-handling-and-integration/06-workflow.md",sourceDirName:"design-document/01-event-handling-and-integration",slug:"/design-document/event-handling-and-integration/workflow",permalink:"/zh/docs/design-document/event-handling-and-integration/workflow",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.10.0/design-document/01-event-handling-and-integration/06-workflow.md",tags:[],version:"v1.10.0",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528 Webhook \u8ba2\u9605\u4e8b\u4ef6",permalink:"/zh/docs/design-document/event-handling-and-integration/webhook"},next:{title:"EventMesh \u6307\u6807\uff08OpenTelemetry \u548c Prometheus\uff09",permalink:"/zh/docs/design-document/observability/metrics-export"}},o={},p=[{value:"\u4e1a\u52a1\u573a\u666f",id:"\u4e1a\u52a1\u573a\u666f",level:2},{value:"CNCF Serverless \u5de5\u4f5c\u6d41",id:"cncf-serverless-\u5de5\u4f5c\u6d41",level:2},{value:"EventMesh \u5de5\u4f5c\u6d41",id:"eventmesh-\u5de5\u4f5c\u6d41-1",level:2},{value:"AsyncAPI",id:"asyncapi",level:3},{value:"\u5de5\u4f5c\u6d41\u793a\u4f8b",id:"\u5de5\u4f5c\u6d41\u793a\u4f8b",level:3},{value:"EventMesh \u5de5\u4f5c\u6d41\u5f15\u64ce",id:"eventmesh-\u5de5\u4f5c\u6d41\u5f15\u64ce",level:2},{value:"EventMesh Catalog \u8bbe\u8ba1",id:"eventmesh-catalog-\u8bbe\u8ba1",level:3},{value:"EventMesh \u5de5\u4f5c\u6d41\u5f15\u64ce\u8bbe\u8ba1",id:"eventmesh-\u5de5\u4f5c\u6d41\u5f15\u64ce\u8bbe\u8ba1",level:3}],m={toc:p},c="wrapper";function d(e){let{components:n,...l}=e;return(0,a.kt)(c,(0,r.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"eventmesh-\u5de5\u4f5c\u6d41"},"EventMesh \u5de5\u4f5c\u6d41"),(0,a.kt)("h2",{id:"\u4e1a\u52a1\u573a\u666f"},"\u4e1a\u52a1\u573a\u666f"),(0,a.kt)("p",null,"\u56fe\u4e2d\u4f60\u6b63\u5728\u6784\u5efa\u4e00\u4e2a\u7b80\u5355\u7684\u7535\u5546\u8ba2\u5355\u7ba1\u7406\u7cfb\u7edf\uff0c\u7cfb\u7edf\u80fd\u591f\u63a5\u6536\u548c\u8c03\u914d\u65b0\u7684\u8ba2\u5355\uff0c\u8c03\u914d\u6d41\u7a0b\u9700\u8981\u5904\u7406\u6240\u6709\u7684\u8ba2\u5355\u521b\u5efa\uff0c\u4ed8\u6b3e\u5904\u7406\u4ee5\u53ca\u53d1\u8d27\u5904\u7406\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u5b9e\u73b0\u9ad8\u53ef\u7528\u548c\u9ad8\u6027\u80fd\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e8b\u4ef6\u9a71\u52a8\u67b6\u6784\uff08EDA\uff09\u6784\u5efa\u5fae\u670d\u52a1\u5e94\u7528\u53bb\u5904\u7406\u5546\u5e97\u524d\u7aef\uff0c\u8ba2\u5355\u7ba1\u7406\uff0c\u652f\u4ed8\u5904\u7406\u548c\u53d1\u8d27\u7ba1\u7406\u3002\u4f60\u53ef\u4ee5\u5728\u4e91\u4e0a\u90e8\u7f72\u6574\u4e2a\u7cfb\u7edf\u3002\u8981\u5904\u7406\u9ad8\u5e76\u53d1\uff0c\u4f60\u53ef\u4ee5\u5229\u7528\u6d88\u606f\u7cfb\u7edf\u7f13\u51b2\uff0c\u5e76\u6269\u5c55\u591a\u4e2a\u5fae\u670d\u52a1\u5b9e\u4f8b\u3002\u67b6\u6784\u7c7b\u4f3c\u4e8e\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Workflow Use Case",src:t(12317).Z,width:"1621",height:"908"})),(0,a.kt)("p",null,"\u5f53\u6bcf\u4e2a\u5fae\u670d\u52a1\u90fd\u5728\u81ea\u5df1\u7684\u4e8b\u4ef6\u901a\u9053\u4e0a\u8fd0\u884c\u65f6\uff0cEventMesh \u5728\u6267\u884c\u4e8b\u4ef6\u7f16\u6392\u65b9\u9762\u53d1\u6325\u7740\u81f3\u5173\u91cd\u8981\u7684\u4f5c\u7528\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://serverlessworkflow.io/"},"CNCF Serverless \u5de5\u4f5c\u6d41")," \u6765\u63cf\u8ff0\u6b64\u4e8b\u4ef6\u5de5\u4f5c\u6d41\u7f16\u6392\u3002"),(0,a.kt)("h2",{id:"cncf-serverless-\u5de5\u4f5c\u6d41"},"CNCF Serverless \u5de5\u4f5c\u6d41"),(0,a.kt)("p",null,"CNCF Serverless \u5de5\u4f5c\u6d41\u5b9a\u4e49\u4e86\u4e00\u4e2a\u5382\u5546\u4e2d\u7acb\u3001\u5f00\u6e90\u548c\u5b8c\u5168\u793e\u533a\u9a71\u52a8\u7684\u751f\u6001\u7cfb\u7edf\uff0c\u7528\u4e8e\u5b9a\u4e49\u548c\u8fd0\u884c\u9488\u5bf9 Serverless \u6280\u672f\u9886\u57df\u7684\u57fa\u4e8e DSL \u7684\u5de5\u4f5c\u6d41\u3002"),(0,a.kt)("p",null,"Serverless \u5de5\u4f5c\u6d41\u5b9a\u4e49\u4e86\u4e00\u79cd\u9886\u57df\u7279\u5b9a\u8bed\u8a00\uff08DSL\uff09\u6765\u63cf\u8ff0\u6709\u72b6\u6001\u548c\u65e0\u72b6\u6001\u7684\u57fa\u4e8e\u5de5\u4f5c\u6d41\u7684 serverless \u51fd\u6570\u548c\u5fae\u670d\u52a1\u7f16\u6392\u3002"),(0,a.kt)("p",null,"\u8be6\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/serverlessworkflow/specification"},"\u5b98\u65b9 github")),(0,a.kt)("h2",{id:"eventmesh-\u5de5\u4f5c\u6d41-1"},"EventMesh \u5de5\u4f5c\u6d41"),(0,a.kt)("p",null,"\u6211\u4eec\u5229\u7528 Serverless \u5de5\u4f5c\u6d41 DSL \u6765\u63cf\u8ff0 EventMesh \u5de5\u4f5c\u6d41\u3002\u6839\u636e\u5176\u89c4\u8303\uff0c\u5de5\u4f5c\u6d41\u7531\u4e00\u7cfb\u5217\u7528\u4e8e\u63cf\u8ff0\u63a7\u5236\u6d41\u903b\u8f91\u7684\u5de5\u4f5c\u6d41\u72b6\u6001\u7ec4\u6210\u3002\u76ee\u524d\uff0c\u6211\u4eec\u4ec5\u652f\u6301\u4e0e\u4e8b\u4ef6\u76f8\u5173\u7684\u5de5\u4f5c\u6d41\u72b6\u6001\u3002\u8bf7\u53c2\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"#workflow-dsl-design-wip"},"\u5de5\u4f5c\u6d41 DSL \u8bbe\u8ba1")," \u4e2d\u652f\u6301\u7684\u72b6\u6001\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u5de5\u4f5c\u6d41\u72b6\u6001"),"\u53ef\u4ee5\u5305\u542b\u901a\u7528\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"\u64cd\u4f5c"),"\uff0c\u6216\u5728\u5de5\u4f5c\u6d41\u6267\u884c\u671f\u95f4\u5e94\u8c03\u7528\u7684\u670d\u52a1/\u51fd\u6570\u3002\u8fd9\u4e9b",(0,a.kt)("inlineCode",{parentName:"p"},"\u64cd\u4f5c"),"\u53ef\u4ee5\u5f15\u7528\u53ef\u590d\u7528\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"\u51fd\u6570"),"\u5b9a\u4e49\uff08\u5e94\u5982\u4f55\u8c03\u7528\u8fd9\u4e9b\u51fd\u6570/\u670d\u52a1\uff09\uff0c\u8fd8\u53ef\u4ee5\u5f15\u7528\u89e6\u53d1\u57fa\u4e8e\u4e8b\u4ef6\u7684\u670d\u52a1\u8c03\u7528\u7684\u4e8b\u4ef6\uff0c\u4ee5\u53ca\u8981\u7b49\u5f85\u7684\u4e8b\u4ef6\uff0c\u8fd9\u4e9b\u4e8b\u4ef6\u8868\u793a\u8fd9\u79cd\u57fa\u4e8e\u4e8b\u4ef6\u7684\u670d\u52a1\u8c03\u7528\u5b8c\u6210\u3002"),(0,a.kt)("p",null,"\u5728 EDA \u89e3\u51b3\u65b9\u6848\u4e2d\uff0c\u6211\u4eec\u901a\u5e38\u4f7f\u7528 AsyncAPI \u5b9a\u4e49\u4e8b\u4ef6\u9a71\u52a8\u7684\u5fae\u670d\u52a1\u3002Serverless \u5de5\u4f5c\u6d41\u201c\u51fd\u6570\u201d\u5b9a\u4e49\u652f\u6301\u4f7f\u7528 AsyncAPI \u5b9a\u4e49\u8c03\u7528\u8bed\u4e49\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/serverlessworkflow/specification/blob/main/specification.md#using-functions-for-async-api-service-invocations"},"Using Funtions for AsyncAPI Service"),"\u3002"),(0,a.kt)("h3",{id:"asyncapi"},"AsyncAPI"),(0,a.kt)("p",null,"AsyncAPI \u662f\u4e00\u9879\u5f00\u6e90\u8ba1\u5212\uff0c\u65e8\u5728\u6539\u5584\u4e8b\u4ef6\u9a71\u52a8\u4f53\u7cfb\u7ed3\u6784\uff08EDA\uff09\u7684\u5f53\u524d\u72b6\u6001\u3002\u6211\u4eec\u7684\u957f\u671f\u76ee\u6807\u662f\u8ba9\u4f7f\u7528 EDA \u548c\u4f7f\u7528 REST API \u4e00\u6837\u5bb9\u6613\u3002\u5305\u62ec\u4ece\u6587\u6863\u5230\u4ee3\u7801\u751f\u6210\u3001\u53d1\u73b0\u5230\u4e8b\u4ef6\u7ba1\u7406\u3002\u73b0\u5728\u5e94\u7528\u4e8e REST API \u7684\u5927\u591a\u6570\u6d41\u7a0b\u4e5f\u9002\u7528\u4e8e\u4e8b\u4ef6\u9a71\u52a8/\u5f02\u6b65 API\u3002"),(0,a.kt)("p",null,"\u8be6\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"https://www.asyncapi.com/docs/guides"},"AsyncAPI \u5b98\u7f51")),(0,a.kt)("h3",{id:"\u5de5\u4f5c\u6d41\u793a\u4f8b"},"\u5de5\u4f5c\u6d41\u793a\u4f8b"),(0,a.kt)("p",null,"\u5728\u672c\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u6784\u5efa\u4e86\u4e0a\u9762\u8ba2\u5355\u7ba1\u7406\u7cfb\u7edf\u7684\u4e8b\u4ef6\u9a71\u52a8\u5de5\u4f5c\u6d41\u3002"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u9700\u8981\u4e3a\u6211\u4eec\u7684\u5fae\u670d\u52a1\u5e94\u7528\u5b9a\u4e49 AsyncAPI\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u7ebf\u5546\u5e97\u5e94\u7528\u7a0b\u5e8f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"asyncapi: 2.2.0\ninfo:\n  title: Online Store application\n  version: '0.1.0'\nchannels:\n  store/order:\n    subscribe:\n      operationId: newStoreOrder\n      message:\n        $ref : '#/components/NewOrder'\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8ba2\u5355\u670d\u52a1")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"asyncapi: 2.2.0\ninfo:\n  title: Order Service\n  version: '0.1.0'\nchannels:\n  order/inbound:\n    publish:\n      operationId: sendOrder\n      message:\n        $ref : '#/components/Order'\n  order/outbound:\n    subscribe:\n      operationId: processedOrder\n      message:\n        $ref : '#/components/Order'\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u652f\u4ed8\u670d\u52a1")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"asyncapi: 2.2.0\ninfo:\n  title: Payment Service\n  version: '0.1.0'\nchannels:\n  payment/inbound:\n    publish:\n      operationId: sendPayment\n      message:\n        $ref : '#/components/OrderPayment'\n  payment/outbound:\n    subscribe:\n      operationId: paymentReceipt\n      message:\n        $ref : '#/components/OrderPayment'\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7269\u6d41\u670d\u52a1")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"asyncapi: 2.2.0\ninfo:\n  title: Shipment Service\n  version: '0.1.0'\nchannels:\n  shipment/inbound:\n    publish:\n      operationId: sendShipment\n      message:\n        $ref : '#/components/OrderShipment'\n")),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u5b9a\u4e49\u63cf\u8ff0\u8ba2\u5355\u7ba1\u7406\u4e1a\u52a1\u903b\u8f91\u7684\u8ba2\u5355\u5de5\u4f5c\u6d41\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"id: storeorderworkflow\nversion: '1.0'\nspecVersion: '0.8'\nname: Store Order Management Workflow\nstates:\n  - name: Receive New Order Event\n    type: event\n    onEvents:\n      - eventRefs:\n          - NewOrderEvent\n        actions:\n          - eventRef:\n              triggerEventRef: OrderServiceSendEvent\n              resultEventRef: OrderServiceResultEvent\n          - eventRef:\n              triggerEventRef: PaymentServiceSendEvent\n              resultEventRef: PaymentServiceResultEvent\n    transition: Check Payment Status\n  - name: Check Payment Status\n    type: switch\n    dataConditions:\n      - name: Payment Successfull\n        condition: \"${ .payment.status == 'success' }\"\n        transition: Send Order Shipment\n      - name: Payment Denied\n        condition: \"${ .payment.status == 'denied' }\"\n        end: true\n    defaultCondition:\n      end: true\n  - name: Send Order Shipment\n    type: operation\n    actions:\n      - eventRef:\n          triggerEventRef: ShipmentServiceSendEvent\n    end: true\nevents:\n  - name: NewOrderEvent\n    source: file://onlineStoreApp.yaml#newStoreOrder\n    type: asyncapi\n    kind: consumed\n  - name: OrderServiceSendEvent\n    source: file://orderService.yaml#sendOrder\n    type: asyncapi\n    kind: produced\n  - name: OrderServiceResultEvent\n    source: file://orderService.yaml#processedOrder\n    type: asyncapi\n    kind: consumed\n  - name: PaymentServiceSendEvent\n    source: file://paymentService.yaml#sendPayment\n    type: asyncapi\n    kind: produced\n  - name: PaymentServiceResultEvent\n    source: file://paymentService.yaml#paymentReceipt\n    type: asyncapi\n    kind: consumed\n  - name: ShipmentServiceSendEvent\n    source: file://shipmentService.yaml#sendShipment\n    type: asyncapi\n    kind: produced\n")),(0,a.kt)("p",null,"\u5bf9\u5e94\u7684\u5de5\u4f5c\u6d41\u56fe\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Workflow Diagram",src:t(12768).Z,width:"986",height:"1236"})),(0,a.kt)("h2",{id:"eventmesh-\u5de5\u4f5c\u6d41\u5f15\u64ce"},"EventMesh \u5de5\u4f5c\u6d41\u5f15\u64ce"),(0,a.kt)("p",null,"\u5728\u4e0b\u9762\u7684\u4f53\u7cfb\u7ed3\u6784\u56fe\u4e2d\uff0cEventMesh \u76ee\u5f55\uff0cEventMesh \u5de5\u4f5c\u6d41\u5f15\u64ce \u548c EventMesh Runtime \u5728\u4e09\u4e2a\u4e0d\u540c\u7684\u5904\u7406\u5668\u4e2d\u8fd0\u884c\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Workflow Architecture",src:t(19809).Z,width:"1615",height:"907"})),(0,a.kt)("p",null,"\u8fd0\u884c\u5de5\u4f5c\u6d41\u7684\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728\u73af\u5883\u4e2d\u90e8\u7f72\u53d1\u5e03\u8005\u548c\u8ba2\u9605\u8005\u5e94\u7528\u7a0b\u5e8f\u3002\n\u4f7f\u7528 AsyncAPI \u63cf\u8ff0\u5e94\u7528\u7a0b\u5e8f API\uff0c\u751f\u6210 asyncAPI yaml\u3002\n\u4f7f\u7528 AsyncAPI \u5728 EventMesh \u76ee\u5f55\u4e2d\u6ce8\u518c\u53d1\u5e03\u8005\u548c\u8ba2\u9605\u8005\u5e94\u7528\u7a0b\u5e8f\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728 EventMesh \u5de5\u4f5c\u6d41\u5f15\u64ce\u4e2d\u6ce8\u518c Serverless \u5de5\u4f5c\u6d41 DSL\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5de5\u4f5c\u6d41\u5f15\u64ce\u4ece EventMesh \u76ee\u5f55\u67e5\u8be2\u53d1\u5e03\u670d\u52a1\u5668\u548c\u8ba2\u9605\u670d\u52a1\u5668\u7684\u9700\u8981\u7684\u5de5\u4f5c\u6d41 DSL",(0,a.kt)("inlineCode",{parentName:"p"},"\u51fd\u6570"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4e8b\u4ef6\u9a71\u52a8 App \u5c06\u4e8b\u4ef6\u53d1\u5e03\u5230 EventMesh Runtime \u89e6\u53d1\u5de5\u4f5c\u6d41\u3002EventMesh \u5de5\u4f5c\u6d41\u5f15\u64ce\u53d1\u5e03\u548c\u8ba2\u9605\u4e8b\u4ef6\u3001\u7f16\u6392\u4e8b\u4ef6\u3002"))),(0,a.kt)("h3",{id:"eventmesh-catalog-\u8bbe\u8ba1"},"EventMesh Catalog \u8bbe\u8ba1"),(0,a.kt)("p",null,"EventMesh \u76ee\u5f55\u5b58\u50a8\u53d1\u5e03\u8005\u3001\u8ba2\u9605\u8005\u548c\u901a\u9053\u5143\u6570\u636e\u3002\u7531\u4ee5\u4e0b\u6a21\u5757\u7ec4\u6210\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"AsyncAPI \u89e3\u6790\u5668"),(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528 AsyncAPI \u793e\u533a\u63d0\u4f9b\u7684 SDK (",(0,a.kt)("a",{parentName:"p",href:"https://www.asyncapi.com/docs/community/tooling"},"tool list"),"),\n\u89e3\u6790\u5e76\u9a8c\u8bc1 AsyncAPI yaml \u8f93\u5165\uff0c\u5e76\u751f\u6210 AsyncAPI \u5b9a\u4e49\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u53d1\u5e03\u8005\uff0c\u901a\u9053\uff0c\u8ba2\u9605\u8005\u6a21\u5757"),(0,a.kt)("p",{parentName:"li"},"\u4ece AsyncAPI \u5b9a\u4e49\u5b58\u50a8\u53d1\u5e03\u8005\u3001\u8ba2\u9605\u8005\u548c\u901a\u9053\u4fe1\u606f\u3002"))),(0,a.kt)("h3",{id:"eventmesh-\u5de5\u4f5c\u6d41\u5f15\u64ce\u8bbe\u8ba1"},"EventMesh \u5de5\u4f5c\u6d41\u5f15\u64ce\u8bbe\u8ba1"),(0,a.kt)("p",null,"\u5de5\u4f5c\u6d41\u5f15\u64ce\u7531\u4ee5\u4e0b\u6a21\u5757\u7ec4\u6210\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5de5\u4f5c\u6d41\u89e3\u6790\u5668"),(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528 Serverless Workflow \u793e\u533a\u63d0\u4f9b\u7684 SDK(",(0,a.kt)("a",{parentName:"p",href:"https://github.com/serverlessworkflow/specification#sdks"},"SDKs"),"),\n\u89e3\u6790\u548c\u9a8c\u8bc1\u5de5\u4f5c\u6d41 DSL \u8f93\u5165\uff0c\u5e76\u751f\u6210\u5de5\u4f5c\u6d41\u5b9a\u4e49\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5de5\u4f5c\u6d41\u6a21\u5757"),(0,a.kt)("p",{parentName:"li"},"\u7ba1\u7406\u5de5\u4f5c\u6d41\u5b9e\u4f8b\u7684\u751f\u547d\u5468\u671f\uff0c\u4ece\u521b\u5efa\u3001\u542f\u52a8\u3001\u505c\u6b62\u5230\u9500\u6bc1\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u72b6\u6001\u6a21\u5757"),(0,a.kt)("p",{parentName:"li"},"\u7ba1\u7406\u5de5\u4f5c\u6d41\u72b6\u6001\u751f\u547d\u5468\u671f\u3002\u652f\u6301\u4e0e\u4e8b\u4ef6\u76f8\u5173\u7684\u72b6\u6001\uff0cand the supported state list below is Work-in-Progress."),(0,a.kt)("table",{parentName:"li"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5de5\u4f5c\u6d41\u72b6\u6001"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Operation"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6267\u884c Actions \u4e2d\u5b9a\u4e49\u7684 AsyncAPI \u51fd\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Event"),(0,a.kt)("td",{parentName:"tr",align:null},"\u68c0\u67e5\u5b9a\u4e49\u7684\u4e8b\u4ef6\u662f\u5426\u5339\u914d\uff0c\u5982\u679c\u5339\u914d\uff0c\u6267\u884c\u5b9a\u4e49\u7684 AsyncAPI \u51fd\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Switch"),(0,a.kt)("td",{parentName:"tr",align:null},"\u68c0\u67e5\u4e8b\u4ef6\u662f\u5426\u4e0e\u4e8b\u4ef6\u6761\u4ef6\u5339\u914d\uff0c\u5e76\u6267\u884c\u5b9a\u4e49\u7684 AsyncAPI \u51fd\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Parallel"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5e76\u884c\u6267\u884c\u5b9a\u4e49\u7684 AsyncAPI \u51fd\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ForEach"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8fed\u4ee3\u8f93\u5165\u96c6\u5408\u5e76\u6267\u884c\u5b9a\u4e49\u7684 AsyncAPI \u51fd\u6570"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u884c\u4e3a\u6a21\u5757"),(0,a.kt)("p",{parentName:"li"},"\u7ba1\u7406\u51fd\u6570\u4e2d\u7684\u884c\u4e3a\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u51fd\u6570\u6a21\u5757"),(0,a.kt)("p",{parentName:"li"},"\u901a\u8fc7\u5728 EventMesh Runtime \u4e2d\u521b\u5efa\u53d1\u5e03\u8005\u548c/\u6216\u8ba2\u9605\u8005\u6765\u7ba1\u7406 AsyncAPI \u51fd\u6570\uff0c\u5e76\u7ba1\u7406\u53d1\u5e03\u8005/\u8ba2\u9605\u8005\u751f\u547d\u5468\u671f\u3002"),(0,a.kt)("table",{parentName:"li"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"AsyncAPI \u64cd\u4f5c"),(0,a.kt)("th",{parentName:"tr",align:null},"EventMesh Runtime"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Publish"),(0,a.kt)("td",{parentName:"tr",align:null},"Publisher")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Subscribe"),(0,a.kt)("td",{parentName:"tr",align:null},"Subscriber"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e8b\u4ef6\u6a21\u5757"),(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528\u5de5\u4f5c\u6d41 DSL \u4e2d\u5b9a\u4e49\u7684\u89c4\u5219\u7ba1\u7406 CloudEvent \u6570\u636e\u6a21\u578b\uff0c\u5305\u62ec\u4e8b\u4ef6\u8fc7\u6ee4\u5668\u3001\u5173\u8054\u548c\u8f6c\u6362\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u91cd\u8bd5\u6a21\u5757"),(0,a.kt)("p",{parentName:"li"},"\u7ba1\u7406\u4e8b\u4ef6\u53d1\u5e03\u5230 EventMesh Runtime \u7684\u91cd\u8bd5\u903b\u8f91\u3002"))))}d.isMDXComponent=!0},19809:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/workflow-architecture-cf4b8c8a7aaa33bb0ffaf1db4cf9cb52.jpg"},12768:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/workflow-diagram-705cf9a6d5c8a5c3b465cba0a216f2a4.png"},12317:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/workflow-use-case-33b55ea03d6330c426b62a8164e6e23c.jpg"}}]);