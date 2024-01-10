"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[8e3],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=l,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21255:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(87462),l=(n(67294),n(3905));const a={},o="EventMesh Runtime",i={unversionedId:"instruction/runtime",id:"version-v1.8.0/instruction/runtime",title:"EventMesh Runtime",description:"The EventMesh Runtime is a stateful mesh node in an EventMesh cluster that is responsible for event transfer between the Source Connector and the Sink Connector, and can use EventMesh Storage as a storage queue for events.",source:"@site/versioned_docs/version-v1.8.0/instruction/03-runtime.md",sourceDirName:"instruction",slug:"/instruction/runtime",permalink:"/docs/v1.8.0/instruction/runtime",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.8.0/instruction/03-runtime.md",tags:[],version:"v1.8.0",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EventMesh Store with Docker",permalink:"/docs/v1.8.0/instruction/store-with-docker"},next:{title:"EventMesh Runtime with Docker",permalink:"/docs/v1.8.0/instruction/runtime-with-docker"}},s={},u=[{value:"1 Run on your local machine",id:"1-run-on-your-local-machine",level:2},{value:"1.1 Run from source code",id:"11-run-from-source-code",level:3},{value:"1.1.1 Dependencies",id:"111-dependencies",level:4},{value:"1.1.2 Download source code",id:"112-download-source-code",level:4},{value:"1.1.3 Run form local",id:"113-run-form-local",level:4},{value:"1.2 Run form local binary",id:"12-run-form-local-binary",level:3},{value:"1.1.1 Dependencies",id:"111-dependencies-1",level:4},{value:"1.1.2 Download Source Code",id:"112-download-source-code-1",level:3},{value:"1.1.3 Build and Load Plugins",id:"113-build-and-load-plugins",level:3},{value:"1.1.4 \u542f\u52a8Runtime",id:"114-\u542f\u52a8runtime",level:3},{value:"2 Remote deployment",id:"2-remote-deployment",level:2},{value:"2.1 Dependencies",id:"21-dependencies",level:3},{value:"2.2 Download",id:"22-download",level:3},{value:"2.3 Deploy",id:"23-deploy",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"eventmesh-runtime"},"EventMesh Runtime"),(0,l.kt)("p",null,"The EventMesh Runtime is a stateful mesh node in an EventMesh cluster that is responsible for event transfer between the Source Connector and the Sink Connector, and can use EventMesh Storage as a storage queue for events."),(0,l.kt)("h2",{id:"1-run-on-your-local-machine"},"1 Run on your local machine"),(0,l.kt)("h3",{id:"11-run-from-source-code"},"1.1 Run from source code"),(0,l.kt)("h4",{id:"111-dependencies"},"1.1.1 Dependencies"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"64-bit OS\uff0cwe recommend Linux/Unix\uff1b\n64-bit JDK 1.8+;\nGradle 7.0+, we recommend 7.0.*;\n")),(0,l.kt)("h4",{id:"112-download-source-code"},"1.1.2 Download source code"),(0,l.kt)("p",null,"Download and extract the source code of the latest release from ",(0,l.kt)("a",{parentName:"p",href:"https://eventmesh.apache.org/download"},"EventMesh download"),". For example, with the current latest version, you will get ",(0,l.kt)("inlineCode",{parentName:"p"},"apache-eventmesh-1.9.0-source.tar.gz"),"."),(0,l.kt)("h4",{id:"113-run-form-local"},"1.1.3 Run form local"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"1.1.3.1 Description of the project structure:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"eventmesh-common : eventmesh public classes and methods module"),(0,l.kt)("li",{parentName:"ul"},"eventmesh-connector-api : eventmesh connector plugin interface definition module"),(0,l.kt)("li",{parentName:"ul"},"eventmesh-connector-plugin : eventmesh connector plugin module"),(0,l.kt)("li",{parentName:"ul"},"eventmesh-runtime : eventmesh runtime module"),(0,l.kt)("li",{parentName:"ul"},"eventmesh-sdk-java : eventmesh java client sdk"),(0,l.kt)("li",{parentName:"ul"},"eventmesh-starter : eventmesh local startup and runtime project portal"),(0,l.kt)("li",{parentName:"ul"},"eventmesh-spi : eventmesh SPI loader module")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: Plugin modules follow the SPI specification defined by eventmesh, custom SPI interfaces need to be marked with the annotation @EventMeshSPI.\nPlugin instances need to be configured in the corresponding module under /main/resources/META-INF/eventmesh with a mapping file of the relevant interfaces to their implementation classes, with the name of the file being the full class name of the SPI interface.\nThe content of the file is the mapping from the plugin instance name to the plugin instance, see eventmesh-connector-rocketmq plugin module for details.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"1.1.3.2 Plugin Description")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"1.1.3.2.1 Installing the plugin"))),(0,l.kt)("p",null,"There are two ways to install the plugin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"classpath loading: Local developers can install the plugin by declaring it in the eventmesh-starter module build.gradle, e.g., declare that it uses the rocketmq plugin")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-gradle"},'   implementation project(":eventmesh-connectors:eventmesh-connector-rocketmq")\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"File loading: By installing the plugin to the plugin directory, EventMesh will automatically load the plugins in the plugin directory according to the conditions at runtime, you can install the plugin by executing the following command")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},". /gradlew clean jar dist && . /gradlew installPlugin\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"1.1.3.2.2 Using Plugins "))),(0,l.kt)("p",null,"EventMesh will load plugins in the dist/plugin directory by default, you can change the plugin directory with ",(0,l.kt)("inlineCode",{parentName:"p"},"-DeventMeshPluginDir=your_plugin_directory"),". Examples of plugins to be used at runtime can be found in the\n",(0,l.kt)("inlineCode",{parentName:"p"},"confPath")," directory under ",(0,l.kt)("inlineCode",{parentName:"p"},"eventmesh.properties"),". For example declare the use of the rocketmq plugin at runtime with the following settings."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-properties"},"#connector plugin\neventMesh.connector.plugin.type=rocketmq\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"1.1.3.3 Configuring the VM startup parameters")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-properties"},"-Dlog4j.configurationFile=eventmesh-runtime/conf/log4j2.xml\n-Deventmesh.log.home=eventmesh-runtime/logs\n-Deventmesh.home=eventmesh-runtime\n-DconfPath=eventmesh-runtime/conf\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: If your operating system is Windows, you may need to replace the file separator with '\\'.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"1.1.3.4 Getting up and running")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Run org.apache.eventmesh.starter.\n")),(0,l.kt)("h3",{id:"12-run-form-local-binary"},"1.2 Run form local binary"),(0,l.kt)("h4",{id:"111-dependencies-1"},"1.1.1 Dependencies"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"64-bit OS\uff0cwe recommend Linux/Unix\uff1b\n64-bit JDK 1.8+;\nGradle 7.0+, we recommend 7.0.*;\n")),(0,l.kt)("p",null,"Gradle is the build automation tool used by Apache EventMesh. Please refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.gradle.org/current/userguide/installation.html"},"offical guide")," to install the latest release of Gradle."),(0,l.kt)("h3",{id:"112-download-source-code-1"},"1.1.2 Download Source Code"),(0,l.kt)("p",null,"Download and extract the source code of the latest release from ",(0,l.kt)("a",{parentName:"p",href:"https://eventmesh.apache.org/download"},"EventMesh download"),". For example, with the current latest version, you will get ",(0,l.kt)("inlineCode",{parentName:"p"},"apache-eventmesh-1.9.0-source.tar.gz"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"tar -xvzf apache-eventmesh-1.9.0-source.tar.gz\ncd apache-eventmesh-1.9.0-src/\n")),(0,l.kt)("p",null,"Build the source code with Gradle."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"gradle clean dist\n")),(0,l.kt)("p",null,"Edit the ",(0,l.kt)("inlineCode",{parentName:"p"},"eventmesh.properties")," to change the configuration (e.g. TCP port, client blacklist) of EventMesh Runtime."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"cd dist\nvim conf/eventmesh.properties\n")),(0,l.kt)("h3",{id:"113-build-and-load-plugins"},"1.1.3 Build and Load Plugins"),(0,l.kt)("p",null,"Apache EventMesh  introduces the SPI (Service Provider Interface) mechanism, which enables EventMesh to discover and load the plugins at runtime. The plugins could be installed with these methods:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Gradle Dependencies: Declare the plugins as the build dependencies in ",(0,l.kt)("inlineCode",{parentName:"li"},"eventmesh-starter/build.gradle"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-gradle"},'dependencies {\n   implementation project(":eventmesh-runtime")\n\n   // Example: Load the RocketMQ plugin\n   implementation project(":eventmesh-connectors:eventmesh-connector-rocketmq")\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Plugin directory: EventMesh loads the plugins in the ",(0,l.kt)("inlineCode",{parentName:"li"},"dist/plugin")," directory based on ",(0,l.kt)("inlineCode",{parentName:"li"},"eventmesh.properties"),". The ",(0,l.kt)("inlineCode",{parentName:"li"},"installPlugin")," task of Gradle builds and moves the plugins into the ",(0,l.kt)("inlineCode",{parentName:"li"},"dist/plugin")," directory.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"gradle installPlugin\n")),(0,l.kt)("h3",{id:"114-\u542f\u52a8runtime"},"1.1.4 \u542f\u52a8Runtime"),(0,l.kt)("p",null,"Execute the ",(0,l.kt)("inlineCode",{parentName:"p"},"start.sh")," script to start the EventMesh Runtime server."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"bash bin/start.sh\n")),(0,l.kt)("p",null,"View the output log:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"tail -f logs/eventmesh.out\n")),(0,l.kt)("h2",{id:"2-remote-deployment"},"2 Remote deployment"),(0,l.kt)("h3",{id:"21-dependencies"},"2.1 Dependencies"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"64-bit OS\uff0cwe recommend Linux/Unix\uff1b\n64-bit JDK 1.8+;\nGradle 7.0+, we recommend 7.0.*;\n4g+ available disk to deploy eventmesh-store;\n")),(0,l.kt)("h3",{id:"22-download"},"2.2 Download"),(0,l.kt)("p",null,"Download and extract the executable binaries of the latest release from ",(0,l.kt)("a",{parentName:"p",href:"https://eventmesh.apache.org/download"},"EventMesh download"),".For example, with the current latest version, you will get ",(0,l.kt)("inlineCode",{parentName:"p"},"apache-eventmesh-1.9.0.tar.gz"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"tar -xvzf apache-eventmesh-1.9.0-bin.tar.gz\ncd apache-eventmesh-1.9.0\n")),(0,l.kt)("h3",{id:"23-deploy"},"2.3 Deploy"),(0,l.kt)("p",null,"Edit the ",(0,l.kt)("inlineCode",{parentName:"p"},"eventmesh.properties")," to change the configuration (e.g. TCP port, client blacklist) of EventMesh Runtime. The executable binaries contain all plugins in the bundle, thus there's no need to build them from source code."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"vim conf/eventmesh.properties\n")),(0,l.kt)("p",null,"Execute the ",(0,l.kt)("inlineCode",{parentName:"p"},"start.sh")," script to start the EventMesh Runtime server."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"bash bin/start.sh\n")),(0,l.kt)("p",null,'If you see "EventMeshTCPServer',"[port=10000]",' started...." , then the setup was successful.'),(0,l.kt)("p",null,"View the output log:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"cd /root/apache-eventmesh-1.9.0/logs\ntail -f eventmesh.out\n")),(0,l.kt)("p",null,"You can stop the run with the following command\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"bash bin/stop.sh\n")))}p.isMDXComponent=!0}}]);