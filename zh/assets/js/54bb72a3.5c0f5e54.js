"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[8628],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(n),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,c[1]=l;for(var i=2;i<a;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19899:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var r=n(87462),o=(n(67294),n(3905));const a={},c="EventMesh \u4e0e K8S \u96c6\u6210",l={unversionedId:"instruction/operator",id:"instruction/operator",title:"EventMesh \u4e0e K8S \u96c6\u6210",description:"1. \u4f9d\u8d56",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/instruction/06-operator.md",sourceDirName:"instruction",slug:"/instruction/operator",permalink:"/zh/docs/next/instruction/operator",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/docs/instruction/06-operator.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8fd0\u884c Java SDK Demo",permalink:"/zh/docs/next/instruction/demo"},next:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/zh/docs/next/instruction/faq"}},s={},i=[{value:"1. \u4f9d\u8d56",id:"1-\u4f9d\u8d56",level:3},{value:"2. \u542f\u52a8",id:"2-\u542f\u52a8",level:3}],u={toc:i};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"eventmesh-\u4e0e-k8s-\u96c6\u6210"},"EventMesh \u4e0e K8S \u96c6\u6210"),(0,o.kt)("h3",{id:"1-\u4f9d\u8d56"},"1. \u4f9d\u8d56"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker\ngolang (version 1.19)\nkubernetes (kubectl)\nkubernetes \u548c docker \u4e4b\u95f4\u6709\u4e00\u5b9a\u7684\u517c\u5bb9\u6027\uff0c\u8bf7\u68c0\u67e5\u5b83\u4eec\u4e4b\u95f4\u7684\u7248\u672c\u517c\u5bb9\u6027\uff0c\u5e76\u4e0b\u8f7d\u76f8\u5e94\u7684\u7248\u672c\uff0c\u4ee5\u786e\u4fdd\u5b83\u4eec\u80fd\u4e00\u8d77\u6b63\u5e38\u5de5\u4f5c\u3002\n")),(0,o.kt)("h3",{id:"2-\u542f\u52a8"},"2. \u542f\u52a8"),(0,o.kt)("p",null,"\u8fdb\u5165 eventmesh-operator \u76ee\u5f55\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd eventmesh-operator\n")),(0,o.kt)("p",null,"\u5c06 CRD \u5b89\u88c5\u5230 k8s \u96c6\u7fa4\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"make install\n\n# Uninstall CRDs from the K8s cluster\nmake uninstall\n")),(0,o.kt)("p",null,"\u5982\u679c\u51fa\u73b0\u9519\u8bef",(0,o.kt)("inlineCode",{parentName:"p"},"eventmesh-operator/bin/controller-gen: No such file or directory"),"\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5982\u6709\u5fc5\u8981\uff0c\u5728\u672c\u5730\u4e0b\u8f7d controller-gen.\nmake controller-gen\n# \u5982\u6709\u5fc5\u8981\uff0c\u5728\u672c\u5730\u4e0b\u8f7d kustomize.\nmake kustomize\n")),(0,o.kt)("p",null,"\u67e5\u770b crds \u4fe1\u606f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# \u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b crds \u4fe1\u606f\uff1a\nkubectl get crds\nNAME                                      CREATED AT\nconnectors.eventmesh-operator.eventmesh   2023-11-28T01:35:21Z\nruntimes.eventmesh-operator.eventmesh     2023-11-28T01:35:21Z\n")),(0,o.kt)("p",null,"\u521b\u5efa\u548c\u5220\u9664 CRs: "),(0,o.kt)("p",null,"\u81ea\u5b9a\u4e49\u8d44\u6e90\u5bf9\u8c61\u4f4d\u4e8e\uff1a/config/samples"),(0,o.kt)("p",null,"\u5220\u9664 CR\uff0c\u53ea\u9700\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"create"),"\u66ff\u6362\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"delete"),"\u5373\u53ef\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# \u4e3a eventmesh-runtime\u3001eventmesh-connector-rocketmq \u521b\u5efa CR, \u521b\u5efa clusterIP \u53ef\u8ba9 eventmesh-runtime \u4e0e\u5176\u4ed6\u7ec4\u4ef6\u901a\u4fe1\u3002\nmake create\n\n#success:\nconfigmap/runtime-config created\nruntime.eventmesh-operator.eventmesh/eventmesh-runtime created\nservice/runtime-cluster-service created\nconfigmap/connector-rocketmq-config created\nconnectors.eventmesh-operator.eventmesh/connector-rocketmq created\n\n# \u67e5\u770b\u521b\u5efa\u7684 service.\nkubectl get service\nNAME                      TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)     AGE\nruntime-cluster-service   ClusterIP   10.109.209.72   <none>        10000/TCP   17s\n\n# Delete CR\nmake delete\n")),(0,o.kt)("p",null,"\u8fd0\u884c eventmesh-operator \u521b\u5efa pods\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# run controller\nmake run\n# log\ngo fmt ./...\ngo vet ./...\ngo run ./main.go\nINFO    controller-runtime.metrics      Metrics server is starting to listen    {"addr": ":9020"}\nINFO    setup   starting manager\nINFO    Starting server {"kind": "health probe", "addr": "[::]:8081"}\nINFO    Starting server {"path": "/metrics", "kind": "metrics", "addr": "[::]:9020"}\nINFO    runtime         Creating a new eventMeshRuntime StatefulSet.    {"StatefulSet.Namespace": "default", "StatefulSet.Name": "eventmesh-runtime-0-a"}\nINFO    connector       Creating a new Connector StatefulSet.   {"StatefulSet.Namespace": "default", "StatefulSet.Name": "connector-rocketmq"}\nINFO    runtime         Successful reconciliation!\nINFO    connector       Successful reconciliation!\n\n# \u6210\u529f\u542f\u52a8 pod \u540e\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u67e5\u770b pod\u3002\nkubectl get pods\nNAME                      READY   STATUS    RESTARTS   AGE\nconnector-rocketmq-0      1/1     Running   0          12m\neventmesh-runtime-0-a-0   1/1     Running   0          12m\n')))}p.isMDXComponent=!0}}]);