"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[5563],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,d=u["".concat(s,".").concat(h)]||u[h]||c[h]||l;return n?r.createElement(d,o(o({ref:t},m),{},{components:n})):r.createElement(d,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},81069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={},o="Eventmesh-runtime \u5feb\u901f\u5165\u95e8\u8bf4\u660e",i={unversionedId:"instruction/runtime",id:"version-v1.3.0/instruction/runtime",title:"Eventmesh-runtime \u5feb\u901f\u5165\u95e8\u8bf4\u660e",description:"EventMesh Runtime \u662f EventMesh \u96c6\u7fa4\u4e2d\u6709\u72b6\u6001\u7684 Mesh \u8282\u70b9\uff0c\u8d1f\u8d23 Source Connector \u4e0e Sink Connector \u4e4b\u95f4\u7684\u4e8b\u4ef6\u4f20\u8f93\uff0c\u5e76\u53ef\u4ee5\u4f7f\u7528 EventMesh Storage \u4f5c\u4e3a\u4e8b\u4ef6\u7684\u5b58\u50a8\u961f\u5217\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.3.0/instruction/03-runtime.md",sourceDirName:"instruction",slug:"/instruction/runtime",permalink:"/zh/docs/v1.3.0/instruction/runtime",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.3.0/instruction/03-runtime.md",tags:[],version:"v1.3.0",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u90e8\u7f72 EventMesh \u7684\u4e8b\u4ef6\u5b58\u50a8\uff08\u4f7f\u7528 Docker\uff09",permalink:"/zh/docs/v1.3.0/instruction/store-with-docker"},next:{title:"\u4f7f\u7528 Docker \u5feb\u901f\u5165\u95e8 EventMesh\uff08\u6682\u65f6\u53ea\u652f\u6301\u52301.4.0\u7248\u672c\uff09",permalink:"/zh/docs/v1.3.0/instruction/runtime-with-docker"}},s={},p=[{value:"1 \u672c\u5730\u6784\u5efa\u8fd0\u884c",id:"1-\u672c\u5730\u6784\u5efa\u8fd0\u884c",level:2},{value:"1.1 \u6e90\u7801\u542f\u52a8",id:"11-\u6e90\u7801\u542f\u52a8",level:3},{value:"1.1.1 \u4f9d\u8d56",id:"111-\u4f9d\u8d56",level:4},{value:"1.1.2 \u4e0b\u8f7d\u6e90\u7801",id:"112-\u4e0b\u8f7d\u6e90\u7801",level:4},{value:"1.1.3 \u672c\u5730\u542f\u52a8",id:"113-\u672c\u5730\u542f\u52a8",level:4},{value:"1.2 \u672c\u5730\u4e8c\u8fdb\u5236\u6784\u5efa",id:"12-\u672c\u5730\u4e8c\u8fdb\u5236\u6784\u5efa",level:3},{value:"1.2.1 \u4f9d\u8d56",id:"121-\u4f9d\u8d56",level:4},{value:"1.2.2 \u4e0b\u8f7d\u6e90\u7801",id:"122-\u4e0b\u8f7d\u6e90\u7801",level:4},{value:"1.2.3 \u6784\u5efa\u5e76\u52a0\u8f7d\u63d2\u4ef6",id:"123-\u6784\u5efa\u5e76\u52a0\u8f7d\u63d2\u4ef6",level:4},{value:"1.2.4 \u542f\u52a8Runtime",id:"124-\u542f\u52a8runtime",level:4},{value:"2 \u8fdc\u7a0b\u90e8\u7f72",id:"2-\u8fdc\u7a0b\u90e8\u7f72",level:2},{value:"2.1 \u4f9d\u8d56",id:"21-\u4f9d\u8d56",level:3},{value:"2.2 \u4e0b\u8f7d",id:"22-\u4e0b\u8f7d",level:3},{value:"2.3 \u90e8\u7f72",id:"23-\u90e8\u7f72",level:3}],m={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"eventmesh-runtime-\u5feb\u901f\u5165\u95e8\u8bf4\u660e"},"Eventmesh-runtime \u5feb\u901f\u5165\u95e8\u8bf4\u660e"),(0,a.kt)("p",null,"EventMesh Runtime \u662f EventMesh \u96c6\u7fa4\u4e2d\u6709\u72b6\u6001\u7684 Mesh \u8282\u70b9\uff0c\u8d1f\u8d23 Source Connector \u4e0e Sink Connector \u4e4b\u95f4\u7684\u4e8b\u4ef6\u4f20\u8f93\uff0c\u5e76\u53ef\u4ee5\u4f7f\u7528 EventMesh Storage \u4f5c\u4e3a\u4e8b\u4ef6\u7684\u5b58\u50a8\u961f\u5217\u3002"),(0,a.kt)("h2",{id:"1-\u672c\u5730\u6784\u5efa\u8fd0\u884c"},"1 \u672c\u5730\u6784\u5efa\u8fd0\u884c"),(0,a.kt)("h3",{id:"11-\u6e90\u7801\u542f\u52a8"},"1.1 \u6e90\u7801\u542f\u52a8"),(0,a.kt)("h4",{id:"111-\u4f9d\u8d56"},"1.1.1 \u4f9d\u8d56"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u5efa\u8bae\u4f7f\u752864\u4f4d\u64cd\u4f5c\u7cfb\u7edf\uff0c\u5efa\u8bae\u4f7f\u7528Linux / Unix\uff1b\n64\u4f4dJDK 1.8+;\nGradle\u81f3\u5c11\u4e3a7.0, \u63a8\u8350 7.0.*\n")),(0,a.kt)("h4",{id:"112-\u4e0b\u8f7d\u6e90\u7801"},"1.1.2 \u4e0b\u8f7d\u6e90\u7801"),(0,a.kt)("p",null,"\u4ece ",(0,a.kt)("a",{parentName:"p",href:"https://eventmesh.apache.org/download"},"EventMesh download")," \u4e0b\u8f7d\u5e76\u63d0\u53d6\u6700\u65b0\u7248\u672c\u7684\u6e90\u4ee3\u7801\u3002\u6bd4\u5982\u76ee\u524d\u6700\u65b0\u7248\uff0c\u60a8\u5c06\u83b7\u5f97",(0,a.kt)("inlineCode",{parentName:"p"},"apache-eventmesh-1.9.0-source.tar.gz"),"\u3002"),(0,a.kt)("h4",{id:"113-\u672c\u5730\u542f\u52a8"},"1.1.3 \u672c\u5730\u542f\u52a8"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.1.3.1 \u9879\u76ee\u7ed3\u6784\u8bf4\u660e\uff1a")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"eventmesh-common : eventmesh\u516c\u5171\u7c7b\u4e0e\u65b9\u6cd5\u6a21\u5757"),(0,a.kt)("li",{parentName:"ul"},"eventmesh-connector-api : eventmesh connector\u63d2\u4ef6\u63a5\u53e3\u5b9a\u4e49\u6a21\u5757"),(0,a.kt)("li",{parentName:"ul"},"eventmesh-connector-plugin : eventmesh connector\u63d2\u4ef6\u6a21\u5757"),(0,a.kt)("li",{parentName:"ul"},"eventmesh-runtime : eventmesh\u8fd0\u884c\u65f6\u6a21\u5757"),(0,a.kt)("li",{parentName:"ul"},"eventmesh-sdk-java : eventmesh java\u5ba2\u6237\u7aefsdk"),(0,a.kt)("li",{parentName:"ul"},"eventmesh-starter : eventmesh\u672c\u5730\u542f\u52a8\u8fd0\u884c\u9879\u76ee\u5165\u53e3"),(0,a.kt)("li",{parentName:"ul"},"eventmesh-spi : eventmesh SPI\u52a0\u8f7d\u6a21\u5757")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\uff1a\u63d2\u4ef6\u6a21\u5757\u9075\u5faa eventmesh \u5b9a\u4e49\u7684SPI\u89c4\u8303, \u81ea\u5b9a\u4e49\u7684SPI\u63a5\u53e3\u9700\u8981\u4f7f\u7528\u6ce8\u89e3 @EventMeshSPI \u6807\u8bc6.\n\u63d2\u4ef6\u5b9e\u4f8b\u9700\u8981\u5728\u5bf9\u5e94\u6a21\u5757\u4e2d\u7684 /main/resources/META-INF/eventmesh \u4e0b\u914d\u7f6e\u76f8\u5173\u63a5\u53e3\u4e0e\u5b9e\u73b0\u7c7b\u7684\u6620\u5c04\u6587\u4ef6,\u6587\u4ef6\u540d\u4e3aSPI\u63a5\u53e3\u5168\u7c7b\u540d.\n\u6587\u4ef6\u5185\u5bb9\u4e3a\u63d2\u4ef6\u5b9e\u4f8b\u540d\u5230\u63d2\u4ef6\u5b9e\u4f8b\u7684\u6620\u5c04, \u5177\u4f53\u53ef\u4ee5\u53c2\u8003 eventmesh-connector-rocketmq \u63d2\u4ef6\u6a21\u5757")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.1.3.2 \u63d2\u4ef6\u8bf4\u660e")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"1.1.3.2.1 \u5b89\u88c5\u63d2\u4ef6"))),(0,a.kt)("p",null,"\u6709\u4e24\u79cd\u65b9\u5f0f\u5b89\u88c5\u63d2\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"classpath\u52a0\u8f7d\uff1a\u672c\u5730\u5f00\u53d1\u53ef\u4ee5\u901a\u8fc7\u5728 eventmesh-starter \u6a21\u5757 build.gradle \u4e2d\u8fdb\u884c\u58f0\u660e\uff0c\u4f8b\u5982\u58f0\u660e\u4f7f\u7528 rocketmq \u63d2\u4ef6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gradle"},'   implementation project(":eventmesh-connectors:eventmesh-connector-rocketmq")\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u52a0\u8f7d\uff1a\u901a\u8fc7\u5c06\u63d2\u4ef6\u5b89\u88c5\u5230\u63d2\u4ef6\u76ee\u5f55\uff0cEventMesh \u5728\u8fd0\u884c\u65f6\u4f1a\u6839\u636e\u6761\u4ef6\u81ea\u52a8\u52a0\u8f7d\u63d2\u4ef6\u76ee\u5f55\u4e0b\u7684\u63d2\u4ef6\uff0c\u53ef\u4ee5\u901a\u8fc7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88c5\u63d2\u4ef6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"./gradlew clean jar dist && ./gradlew installPlugin\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"1.1.3.2.2 \u4f7f\u7528\u63d2\u4ef6"))),(0,a.kt)("p",null,"EventMesh \u4f1a\u9ed8\u8ba4\u52a0\u8f7d dist/plugin \u76ee\u5f55\u4e0b\u7684\u63d2\u4ef6\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"-DeventMeshPluginDir=your_plugin_directory"),"\u6765\u6539\u53d8\u63d2\u4ef6\u76ee\u5f55\u3002\u8fd0\u884c\u65f6\u9700\u8981\u4f7f\u7528\u7684\u63d2\u4ef6\u5b9e\u4f8b\u53ef\u4ee5\u5728\n",(0,a.kt)("inlineCode",{parentName:"p"},"confPath"),"\u76ee\u5f55\u4e0b\u9762\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"eventmesh.properties"),"\u4e2d\u8fdb\u884c\u914d\u7f6e\u3002\u4f8b\u5982\u901a\u8fc7\u4ee5\u4e0b\u8bbe\u7f6e\u58f0\u660e\u5728\u8fd0\u884c\u65f6\u4f7f\u7528rocketmq\u63d2\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"#connector plugin\neventMesh.connector.plugin.type=rocketmq\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.1.3.3 \u914d\u7f6eVM\u542f\u52a8\u53c2\u6570")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"-Dlog4j.configurationFile=eventmesh-runtime/conf/log4j2.xml\n-Deventmesh.log.home=eventmesh-runtime/logs\n-Deventmesh.home=eventmesh-runtime\n-DconfPath=eventmesh-runtime/conf\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\uff1a\u5982\u679c\u64cd\u4f5c\u7cfb\u7edf\u4e3aWindows, \u53ef\u80fd\u9700\u8981\u5c06\u6587\u4ef6\u5206\u9694\u7b26\u6362\u6210'\\'")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.1.3.4 \u542f\u52a8\u8fd0\u884c")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u8fd0\u884corg.apache.eventmesh.starter.StartUp\u7684\u4e3b\u8981\u65b9\u6cd5\n")),(0,a.kt)("h3",{id:"12-\u672c\u5730\u4e8c\u8fdb\u5236\u6784\u5efa"},"1.2 \u672c\u5730\u4e8c\u8fdb\u5236\u6784\u5efa"),(0,a.kt)("h4",{id:"121-\u4f9d\u8d56"},"1.2.1 \u4f9d\u8d56"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u5efa\u8bae\u4f7f\u752864\u4f4d\u64cd\u4f5c\u7cfb\u7edf\uff0c\u5efa\u8bae\u4f7f\u7528Linux / Unix\uff1b\n64\u4f4dJDK 1.8+;\nGradle\u81f3\u5c11\u4e3a7.0, \u63a8\u8350 7.0.*\n")),(0,a.kt)("p",null,"Gradle \u662f Apache EventMesh \u4f7f\u7528\u7684\u6784\u5efa\u81ea\u52a8\u5316\u5de5\u5177\u3002\u8bf7\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.gradle.org/current/userguide/installation.html"},"\u5b98\u65b9\u6307\u5357")," \u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684 Gradle\u3002"),(0,a.kt)("h4",{id:"122-\u4e0b\u8f7d\u6e90\u7801"},"1.2.2 \u4e0b\u8f7d\u6e90\u7801"),(0,a.kt)("p",null,"\u4ece ",(0,a.kt)("a",{parentName:"p",href:"https://eventmesh.apache.org/download"},"EventMesh download")," \u4e0b\u8f7d\u5e76\u63d0\u53d6\u6700\u65b0\u7248\u672c\u7684\u6e90\u4ee3\u7801\u3002\u6bd4\u5982\u76ee\u524d\u6700\u65b0\u7248\uff0c\u60a8\u5c06\u83b7\u5f97",(0,a.kt)("inlineCode",{parentName:"p"},"apache-eventmesh-1.9.0-source.tar.gz"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"tar -xvzf apache-eventmesh-1.9.0-source.tar.gz\ncd apache-eventmesh-1.9.0-src/\n")),(0,a.kt)("p",null,"\u4f7f\u7528 Gradle \u6784\u5efa\u6e90\u4ee3\u7801\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"gradle clean dist\n")),(0,a.kt)("p",null,"\u7f16\u8f91 ",(0,a.kt)("inlineCode",{parentName:"p"},"eventmesh.properties")," \u4ee5\u66f4\u6539 EventMesh Runtime \u7684\u914d\u7f6e\uff08\u5982 TCP \u7aef\u53e3\u3001\u5ba2\u6237\u7aef\u9ed1\u540d\u5355\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"cd dist\nvim conf/eventmesh.properties\n")),(0,a.kt)("h4",{id:"123-\u6784\u5efa\u5e76\u52a0\u8f7d\u63d2\u4ef6"},"1.2.3 \u6784\u5efa\u5e76\u52a0\u8f7d\u63d2\u4ef6"),(0,a.kt)("p",null,"Apache EventMesh\u5f15\u5165\u4e86 SPI \u673a\u5236\uff0c\u4f7f EventMesh \u80fd\u591f\u5728\u8fd0\u884c\u65f6\u53d1\u73b0\u5e76\u52a0\u8f7d\u63d2\u4ef6\u3002\u6709\u4e24\u79cd\u65b9\u5f0f\u5b89\u88c5\u63d2\u4ef6\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Gradle \u4f9d\u8d56\u9879\uff1a \u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"eventmesh-starter/build.gradle")," \u4e2d\u5c06\u63d2\u4ef6\u58f0\u660e\u4e3a\u6784\u5efa\u4f9d\u8d56\u9879\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gradle"},'dependencies {\n   implementation project(":eventmesh-runtime")\n\n    // \u793a\u4f8b\uff1a \u52a0\u8f7d RocketMQ \u63d2\u4ef6\n   implementation project(":eventmesh-connectors:eventmesh-connector-rocketmq")\n}\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u63d2\u4ef6\u76ee\u5f55\uff1a EventMesh \u4f1a\u6839\u636e ",(0,a.kt)("inlineCode",{parentName:"li"},"eventmesh.properties")," \u52a0\u8f7d ",(0,a.kt)("inlineCode",{parentName:"li"},"dist/plugin")," \u76ee\u5f55\u4e2d\u7684\u63d2\u4ef6\u3002Gradle \u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"installPlugin")," \u4efb\u52a1\u4f1a\u6784\u5efa\u63d2\u4ef6\u5e76\u5c06\u5176\u79fb\u52a8\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"dist/plugin")," \u76ee\u5f55\u4e2d\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"gradle installPlugin\n")),(0,a.kt)("h4",{id:"124-\u542f\u52a8runtime"},"1.2.4 \u542f\u52a8Runtime"),(0,a.kt)("p",null,"\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"start.sh")," \u811a\u672c\u542f\u52a8 EventMesh Runtime \u670d\u52a1\u5668\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"bash bin/start.sh\n")),(0,a.kt)("p",null,"\u67e5\u770b\u8f93\u51fa\u65e5\u5fd7\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"tail -f logs/eventmesh.out\n")),(0,a.kt)("h2",{id:"2-\u8fdc\u7a0b\u90e8\u7f72"},"2 \u8fdc\u7a0b\u90e8\u7f72"),(0,a.kt)("h3",{id:"21-\u4f9d\u8d56"},"2.1 \u4f9d\u8d56"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u5efa\u8bae\u4f7f\u752864\u4f4d\u64cd\u4f5c\u7cfb\u7edf\uff0c\u5efa\u8bae\u4f7f\u7528Linux / Unix\uff1b\n64\u4f4dJDK 1.8+;\nGradle\u81f3\u5c11\u4e3a7.0, \u63a8\u8350 7.0.*\n")),(0,a.kt)("h3",{id:"22-\u4e0b\u8f7d"},"2.2 \u4e0b\u8f7d"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://eventmesh.apache.org/download"},"EventMesh download")," \u9875\u9762\u9009\u62e91.5.0\u7248\u672c\u7684 Binary Distribution \u8fdb\u884c\u4e0b\u8f7d, \u60a8\u5c06\u83b7\u5f97",(0,a.kt)("inlineCode",{parentName:"p"},"apache-eventmesh-1.9.0-bin.tar.gz"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"# \u89e3\u538b\ntar -xvzf apache-eventmesh-1.9.0-bin.tar.gz\ncd apache-eventmesh-1.9.0\n")),(0,a.kt)("h3",{id:"23-\u90e8\u7f72"},"2.3 \u90e8\u7f72"),(0,a.kt)("p",null,"\u7f16\u8f91 ",(0,a.kt)("inlineCode",{parentName:"p"},"eventmesh.properties")," \u4ee5\u66f4\u6539 EventMesh Runtime \u7684\u914d\u7f6e\uff08\u5982 TCP \u7aef\u53e3\u3001\u5ba2\u6237\u7aef\u9ed1\u540d\u5355\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"vim conf/eventmesh.properties\n")),(0,a.kt)("p",null,"\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"start.sh")," \u811a\u672c\u542f\u52a8 EventMesh Runtime \u670d\u52a1\u5668\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"bash bin/start.sh\n")),(0,a.kt)("p",null,'\u5982\u679c\u770b\u5230"EventMeshTCPServer',"[port=10000]",' started...."\uff0c\u5219\u8bf4\u660e\u8bbe\u7f6e\u6210\u529f\u3002'),(0,a.kt)("p",null,"\u67e5\u770b\u8f93\u51fa\u65e5\u5fd7\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"cd /root/apache-eventmesh-1.9.0/logs\ntail -f eventmesh.out\n")),(0,a.kt)("p",null,"\u505c\u6b62\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"bash bin/stop.sh\n")))}c.isMDXComponent=!0}}]);