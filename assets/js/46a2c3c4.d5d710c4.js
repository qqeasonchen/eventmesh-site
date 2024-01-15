"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[4143],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},69991:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={},i="EventMesh Runtime Quick Start",o={unversionedId:"instruction/runtime",id:"instruction/runtime",title:"EventMesh Runtime Quick Start",description:"EventMesh Runtime is a stateful Mesh node in the EventMesh cluster, responsible for event transmission between Source Connectors and Sink Connectors. It uses Event Store as a storage queue for events.",source:"@site/docs/instruction/03-runtime.md",sourceDirName:"instruction",slug:"/instruction/runtime",permalink:"/docs/next/instruction/runtime",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/docs/instruction/03-runtime.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Event Store with Docker",permalink:"/docs/next/instruction/store-with-docker"},next:{title:"EventMesh Runtime with Docker",permalink:"/docs/next/instruction/runtime-with-docker"}},s={},u=[{value:"1. Binary Distribution Deployment",id:"1-binary-distribution-deployment",level:2},{value:"1.1 Environment",id:"11-environment",level:3},{value:"1.2 Download",id:"12-download",level:3},{value:"1.3 Configuration",id:"13-configuration",level:3},{value:"1.3.1 EventMesh Runtime Configuration",id:"131-eventmesh-runtime-configuration",level:4},{value:"1.3.2 Event Store Configuration",id:"132-event-store-configuration",level:4},{value:"1.4 Start",id:"14-start",level:3},{value:"2. Build Binary Distribution",id:"2-build-binary-distribution",level:2},{value:"2.1 Environment",id:"21-environment",level:3},{value:"2.2 Download",id:"22-download",level:3},{value:"2.3 Build",id:"23-build",level:3},{value:"Run in a JDK8 Environment",id:"run-in-a-jdk8-environment",level:4},{value:"Run in a JDK11 Environment",id:"run-in-a-jdk11-environment",level:4},{value:"2.4 Package Plugins",id:"24-package-plugins",level:3},{value:"3. Start from Source Code",id:"3-start-from-source-code",level:2},{value:"3.1 Dependencies",id:"31-dependencies",level:3},{value:"3.2 Download",id:"32-download",level:3},{value:"3.3 Project Structure Explanation",id:"33-project-structure-explanation",level:3},{value:"3.4 Plugin Explanation",id:"34-plugin-explanation",level:3},{value:"3.4.1 Install Plugins",id:"341-install-plugins",level:4},{value:"3.4.2 Use Plugins",id:"342-use-plugins",level:4},{value:"3.5 Configure VM Options",id:"35-configure-vm-options",level:3},{value:"3.6 Start",id:"36-start",level:3},{value:"3.7 Stop",id:"37-stop",level:3}],p={toc:u},d="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(d,(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"eventmesh-runtime-quick-start"},"EventMesh Runtime Quick Start"),(0,r.kt)("p",null,"EventMesh Runtime is a stateful Mesh node in the EventMesh cluster, responsible for event transmission between Source Connectors and Sink Connectors. It uses Event Store as a storage queue for events."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"EventMesh Runtime",src:n(30438).Z,width:"1688",height:"838"})),(0,r.kt)("h2",{id:"1-binary-distribution-deployment"},"1. Binary Distribution Deployment"),(0,r.kt)("h3",{id:"11-environment"},"1.1 Environment"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Recommended to use 64-bit Linux/Unix systems"),(0,r.kt)("li",{parentName:"ul"},"64-bit JDK 8 or JDK 11")),(0,r.kt)("h3",{id:"12-download"},"1.2 Download"),(0,r.kt)("p",null,"Download the latest version of the Binary Distribution from the ",(0,r.kt)("a",{parentName:"p",href:"https://eventmesh.apache.org/download"},"EventMesh Download")," page and extract it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://dlcdn.apache.org/eventmesh/1.10.0/apache-eventmesh-1.10.0-bin.tar.gz\ntar -xvzf apache-eventmesh-1.10.0-bin.tar.gz\ncd apache-eventmesh-1.10.0\n")),(0,r.kt)("h3",{id:"13-configuration"},"1.3 Configuration"),(0,r.kt)("p",null,"This document provides an example of deploying it with RocketMQ as Event Store, but you can also choose another ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/roadmap#event-store-implementation-status"},"Event Store supported by EventMesh"),". If you choose a non-standalone mode, ensure that ",(0,r.kt)("a",{parentName:"p",href:"https://rocketmq.apache.org/docs/quick-start/"},"RocketMQ is successfully started")," and accessible via IP address. If you stick to the default standalone mode, RocketMQ doesn't need to be started."),(0,r.kt)("h4",{id:"131-eventmesh-runtime-configuration"},"1.3.1 EventMesh Runtime Configuration"),(0,r.kt)("p",null,"This configuration file includes settings for the EventMesh Runtime environment and integrated plugins."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vim conf/eventmesh.properties\n")),(0,r.kt)("p",null,"Specify RocketMQ as Event Store:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"# storage plugin\neventMesh.storage.plugin.type=rocketmq\n")),(0,r.kt)("p",null,"Check if the default ports in the configuration file are occupied. If occupied, modify them to unused ports:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eventMesh.server.tcp.port"),(0,r.kt)("td",{parentName:"tr",align:null},"10000"),(0,r.kt)("td",{parentName:"tr",align:null},"TCP listening port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eventMesh.server.http.port"),(0,r.kt)("td",{parentName:"tr",align:null},"10105"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP listening port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eventMesh.server.grpc.port"),(0,r.kt)("td",{parentName:"tr",align:null},"10205"),(0,r.kt)("td",{parentName:"tr",align:null},"gRPC listening port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eventMesh.server.admin.http.port"),(0,r.kt)("td",{parentName:"tr",align:null},"10106"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP management port")))),(0,r.kt)("h4",{id:"132-event-store-configuration"},"1.3.2 Event Store Configuration"),(0,r.kt)("p",null,"In the case of RocketMQ, the configuration file includes parameters required to connect to the RocketMQ namesrv."),(0,r.kt)("p",null,"Edit ",(0,r.kt)("inlineCode",{parentName:"p"},"rocketmq-client.properties"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vim conf/rocketmq-client.properties\n")),(0,r.kt)("p",null,"If the namesrv address you are running is different from the default value in the configuration file, modify it to the actual running namesrv address."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eventMesh.server.rocketmq.namesrvAddr"),(0,r.kt)("td",{parentName:"tr",align:null},"127.0.0.1:9876;127.0.0.1:9876"),(0,r.kt)("td",{parentName:"tr",align:null},"RocketMQ namesrv address")))),(0,r.kt)("h3",{id:"14-start"},"1.4 Start"),(0,r.kt)("p",null,"Execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"start.sh")," script to start EventMesh Runtime:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"bash bin/start.sh\n")),(0,r.kt)("p",null,"If the script only prints the following three lines without any other error messages, it means the script has executed successfully:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"EventMesh using Java version: 8, path: /usr/local/openjdk-8/bin/java\nEVENTMESH_HOME : /data/app/eventmesh\nEVENTMESH_LOG_HOME : /data/app/eventmesh/logs\n")),(0,r.kt)("p",null,"Next, view the logs output by EventMesh to check its runtime status:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"tail -n 50 -f logs/eventmesh.out\n")),(0,r.kt)("p",null,"When the log output shows ",(0,r.kt)("inlineCode",{parentName:"p"},"server state:RUNNING"),", it means EventMesh Runtime has started successfully."),(0,r.kt)("p",null,"Stop EventMesh Runtime:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"bash bin/stop.sh\n")),(0,r.kt)("p",null,"When the script prints ",(0,r.kt)("inlineCode",{parentName:"p"},"shutdown server ok!"),", it means EventMesh Runtime has stopped."),(0,r.kt)("h2",{id:"2-build-binary-distribution"},"2. Build Binary Distribution"),(0,r.kt)("h3",{id:"21-environment"},"2.1 Environment"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Recommended to use 64-bit Linux/Unix systems"),(0,r.kt)("li",{parentName:"ul"},"64-bit JDK 8 or JDK 11"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.gradle.org/current/userguide/installation.html"},"Gradle")," 7.0+ (optional), the build commands provided in this document use the Gradle Wrapper, and you don't need to configure the Gradle environment yourself. You can also check the recommended Gradle version for your EventMesh version in the ",(0,r.kt)("inlineCode",{parentName:"li"},"gradle/wrapper/gradle-wrapper.properties")," file and use your local Gradle version for compilation.")),(0,r.kt)("h3",{id:"22-download"},"2.2 Download"),(0,r.kt)("p",null,"Download the Source Code from ",(0,r.kt)("a",{parentName:"p",href:"https://eventmesh.apache.org/download"},"EventMesh Download")," and extract it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://dlcdn.apache.org/eventmesh/1.10.0/apache-eventmesh-1.10.0-source.tar.gz\ntar -xvzf apache-eventmesh-1.10.0-source.tar.gz\ncd apache-eventmesh-1.10.0-src/\n")),(0,r.kt)("p",null,"You can also choose to clone the code from GitHub:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/apache/eventmesh.git\ncd eventmesh/\n")),(0,r.kt)("h3",{id:"23-build"},"2.3 Build"),(0,r.kt)("p",null,"EventMesh is developed based on JDK8, and the binary distribution is also built based on JDK8. It is recommended to run EventMesh Runtime in a JDK8 environment."),(0,r.kt)("h4",{id:"run-in-a-jdk8-environment"},"Run in a JDK8 Environment"),(0,r.kt)("p",null,"Some source code needs to be generated under JDK11:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./gradlew clean generateGrammarSource --parallel --daemon\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"generateGrammarSource")," task will generate the source code required for ",(0,r.kt)("inlineCode",{parentName:"p"},"ANTLR")," under the ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.eventmesh.connector.jdbc.antlr4.autogeneration")," package."),(0,r.kt)("p",null,"Next, build EventMesh Runtime under JDK8:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./gradlew clean dist -x spotlessJava -x generateGrammarSource --parallel --daemon\n")),(0,r.kt)("p",null,"After the build is complete, proceed to ",(0,r.kt)("a",{parentName:"p",href:"#24-package-plugins"},"2.4 Package Plugins"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can switch between JDK versions using ",(0,r.kt)("inlineCode",{parentName:"p"},"update-alternatives")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"JAVA_HOME")," and check the current JDK version with ",(0,r.kt)("inlineCode",{parentName:"p"},"java -version"),".")),(0,r.kt)("h4",{id:"run-in-a-jdk11-environment"},"Run in a JDK11 Environment"),(0,r.kt)("p",null,"If you want to use JDK11 as the runtime environment for EventMesh, execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./gradlew clean dist --parallel --daemon\n")),(0,r.kt)("p",null,"After the build is complete, proceed to ",(0,r.kt)("a",{parentName:"p",href:"#24-package-plugins"},"2.4 Package Plugins"),"."),(0,r.kt)("h3",{id:"24-package-plugins"},"2.4 Package Plugins"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"installPlugin")," task will copy the built plugins to the ",(0,r.kt)("inlineCode",{parentName:"p"},"dist")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./gradlew installPlugin\n")),(0,r.kt)("p",null,"EventMesh will load the plugins from the ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin")," directory based on the configuration in ",(0,r.kt)("inlineCode",{parentName:"p"},"eventmesh.properties"),"."),(0,r.kt)("p",null,"After a successful build, the ",(0,r.kt)("inlineCode",{parentName:"p"},"dist")," directory in the project root contains the binary files for EventMesh. For configuration and startup, refer to ",(0,r.kt)("a",{parentName:"p",href:"#1-binary-distribution-deployment"},"Binary Distribution Deployment"),"."),(0,r.kt)("h2",{id:"3-start-from-source-code"},"3. Start from Source Code"),(0,r.kt)("h3",{id:"31-dependencies"},"3.1 Dependencies"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Recommended to use 64-bit Linux/Unix systems"),(0,r.kt)("li",{parentName:"ul"},"64-bit JDK 8 or JDK 11"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.gradle.org/current/userguide/installation.html"},"Gradle")," 7.0+ (optional), the build commands provided in this document use the Gradle Wrapper, and you don't need to configure the Gradle environment yourself. You can also check the recommended Gradle version for your EventMesh version in the ",(0,r.kt)("inlineCode",{parentName:"li"},"gradle/wrapper/gradle-wrapper.properties")," file and use your local Gradle version for compilation."),(0,r.kt)("li",{parentName:"ul"},"It is recommended to use an IDE (Integrated Development Environment) to import EventMesh. ",(0,r.kt)("inlineCode",{parentName:"li"},"Intellij IDEA")," is recommended as the IDE.")),(0,r.kt)("h3",{id:"32-download"},"3.2 Download"),(0,r.kt)("p",null,"Clone the code from GitHub:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/apache/eventmesh.git\ncd eventmesh/\n")),(0,r.kt)("p",null,"You can also download the Source Code release from ",(0,r.kt)("a",{parentName:"p",href:"https://eventmesh.apache.org/download"},"EventMesh Download")," and extract it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://dlcdn.apache.org/eventmesh/1.10.0/apache-eventmesh-1.10.0-source.tar.gz\ntar -xvzf apache-eventmesh-1.10.0-source.tar.gz\ncd apache-eventmesh-1.10.0-src/\n")),(0,r.kt)("h3",{id:"33-project-structure-explanation"},"3.3 Project Structure Explanation"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Main Module"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eventmesh-starter"),(0,r.kt)("td",{parentName:"tr",align:null},"Entry point for running EventMesh locally")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eventmesh-runtime"),(0,r.kt)("td",{parentName:"tr",align:null},"EventMesh Runtime, the runtime module")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eventmesh-connectors"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/next/design-document/connect/connectors"},"Connectors")," for connecting event sources and sinks, supporting ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/roadmap#connector-implementation-status"},"various services and platforms"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eventmesh-storage-plugin"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/next/roadmap#event-store-implementation-status"},"Event Store")," plugin for EventMesh Runtime")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eventmesh-sdks"),(0,r.kt)("td",{parentName:"tr",align:null},"Multi-language client SDKs for EventMesh, including Java, Go, C and Rust")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eventmesh-examples"),(0,r.kt)("td",{parentName:"tr",align:null},"Examples of SDK usage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eventmesh-spi"),(0,r.kt)("td",{parentName:"tr",align:null},"Module for loading EventMesh SPI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eventmesh-common"),(0,r.kt)("td",{parentName:"tr",align:null},"Module for common classes and methods")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Plugin modules follow the SPI specification defined by EventMesh, and custom SPI interfaces need to be annotated with ",(0,r.kt)("inlineCode",{parentName:"p"},"@EventMeshSPI"),"."),(0,r.kt)("p",{parentName:"blockquote"},"Plugin instances need to be configured in the corresponding module under the ",(0,r.kt)("inlineCode",{parentName:"p"},"/main/resources/META-INF/eventmesh")," directory with a mapping file for interface and implementation classes. The file name is the fully qualified class name of the SPI interface."),(0,r.kt)("p",{parentName:"blockquote"},"The content of the file is the mapping from the plugin instance name to the plugin instance. For details, refer to the ",(0,r.kt)("inlineCode",{parentName:"p"},"eventmesh-storage-rocketmq")," plugin module.")),(0,r.kt)("h3",{id:"34-plugin-explanation"},"3.4 Plugin Explanation"),(0,r.kt)("h4",{id:"341-install-plugins"},"3.4.1 Install Plugins"),(0,r.kt)("p",null,"EventMesh has an SPI mechanism that allows EventMesh to discover and load plugins. There are two ways to install plugins:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Classpath loading: During local development, you can add dependencies in the ",(0,r.kt)("inlineCode",{parentName:"li"},"build.gradle")," of the ",(0,r.kt)("inlineCode",{parentName:"li"},"eventmesh-starter")," module. For example, to add the Kafka Storage Plugin:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gradle"},'dependencies {\n   implementation project(":eventmesh-runtime")\n   // Example: Add the Kafka Storage Plugin\n   implementation project(":eventmesh-storage-plugin:eventmesh-storage-kafka")\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"File loading: By installing the plugin to the plugin directory, EventMesh will automatically load the plugins in the plugin directory based on certain conditions during runtime. Please refer to ",(0,r.kt)("a",{parentName:"li",href:"#23-build"},"2.3 Build")," and ",(0,r.kt)("a",{parentName:"li",href:"#24-package-plugins"},"2.4 Package Plugins"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When you make changes to the source code, it is recommended to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," task to the command provided in ",(0,r.kt)("a",{parentName:"p",href:"#23-build"},"2.3 Build")," to recompile and run unit tests. For example:"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./gradlew clean build dist -x spotlessJava -x generateGrammarSource --parallel --daemon\n"))),(0,r.kt)("h4",{id:"342-use-plugins"},"3.4.2 Use Plugins"),(0,r.kt)("p",null,"EventMesh will load the plugins by default from the ",(0,r.kt)("inlineCode",{parentName:"p"},"dist/plugin")," directory. You can change the plugin directory using ",(0,r.kt)("inlineCode",{parentName:"p"},"-DeventMeshPluginDir=your_plugin_directory"),". The plugin instances needed at runtime can be configured in the ",(0,r.kt)("inlineCode",{parentName:"p"},"confPath")," directory in the ",(0,r.kt)("inlineCode",{parentName:"p"},"eventmesh.properties")," file. For example, by setting the following, you declare the use of the RocketMQ as Event Store:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"# storage plugin\neventMesh.storage.plugin.type=rocketmq\n")),(0,r.kt)("h3",{id:"35-configure-vm-options"},"3.5 Configure VM Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"-Dlog4j.configurationFile=eventmesh-runtime/conf/log4j2.xml\n-Deventmesh.log.home=eventmesh-runtime/logs\n-Deventmesh.home=eventmesh-runtime\n-DconfPath=eventmesh-runtime/conf\n")),(0,r.kt)("p",null,"If the operating system is Windows, replace the forward slash with a backslash ",(0,r.kt)("inlineCode",{parentName:"p"},"\\"),"."),(0,r.kt)("h3",{id:"36-start"},"3.6 Start"),(0,r.kt)("p",null,"Run the ",(0,r.kt)("inlineCode",{parentName:"p"},"main()")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.eventmesh.starter.StartUp")," class in the ",(0,r.kt)("inlineCode",{parentName:"p"},"eventmesh-starter")," module to start EventMesh Runtime."),(0,r.kt)("h3",{id:"37-stop"},"3.7 Stop"),(0,r.kt)("p",null,"When the following logs are printed to the console, EventMesh Runtime has stopped."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},"DEBUG StatusConsoleListener Shutdown hook enabled. Registering a new one.\nWARN StatusConsoleListener Unable to register Log4j shutdown hook because JVM is shutting down. Using SimpleLogger\n")))}m.isMDXComponent=!0},30438:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/runtime-a7096bf933834ceba5f954ae4786776d.png"}}]);