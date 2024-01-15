"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[3510],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},59968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},i="EventMesh Runtime with Docker",l={unversionedId:"instruction/runtime-with-docker",id:"version-v1.8.0/instruction/runtime-with-docker",title:"EventMesh Runtime with Docker",description:"The documentation introduces the steps to install the latest release of EventMesh Runtime with Docker and connect to Apache RocketMQ. It's recommended to use a Linux-based system with Docker Engine. Please follow the Docker tutorial to get familiar with the basic concepts (registry, volume, etc.) and commands of Docker.",source:"@site/versioned_docs/version-v1.8.0/instruction/04-runtime-with-docker.md",sourceDirName:"instruction",slug:"/instruction/runtime-with-docker",permalink:"/docs/v1.8.0/instruction/runtime-with-docker",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.8.0/instruction/04-runtime-with-docker.md",tags:[],version:"v1.8.0",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EventMesh Runtime",permalink:"/docs/v1.8.0/instruction/runtime"},next:{title:"Run eventmesh-sdk-java demo",permalink:"/docs/v1.8.0/instruction/demo"}},s={},p=[{value:"1. Dependencies",id:"1-dependencies",level:2},{value:"2. Pull EventMesh Image",id:"2-pull-eventmesh-image",level:2},{value:"3. Edit Configuration",id:"3-edit-configuration",level:2},{value:"4. Configure <code>eventmesh.properties</code>",id:"4-configure-eventmeshproperties",level:3},{value:"5. Configure <code>rocketmq-client.properties</code>",id:"5-configure-rocketmq-clientproperties",level:3},{value:"6. Run and Manage EventMesh Container",id:"6-run-and-manage-eventmesh-container",level:2},{value:"7. Managing EventMesh Containers",id:"7-managing-eventmesh-containers",level:2},{value:"8. Explore more",id:"8-explore-more",level:2}],c={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"eventmesh-runtime-with-docker"},"EventMesh Runtime with Docker"),(0,a.kt)("p",null,"The documentation introduces the steps to install the latest release of EventMesh Runtime with Docker and connect to Apache RocketMQ. It's recommended to use a Linux-based system with ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"Docker Engine"),". Please follow the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-started/"},"Docker tutorial")," to get familiar with the basic concepts (registry, volume, etc.) and commands of Docker."),(0,a.kt)("h2",{id:"1-dependencies"},"1. Dependencies"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"64-bit OS\uff0cwe recommend Linux/Unix\uff1b\n64-bit JDK 1.8+;\nGradle 7.0+, we recommend 7.0.*\n4g+ available disk to deploy eventmesh-store\nIf you choose standalone mode, you could skip this file and go to the next step: Start Eventmesh-Runtime; if not, you could choose RocketMQ as the store layer.\n")),(0,a.kt)("h2",{id:"2-pull-eventmesh-image"},"2. Pull EventMesh Image"),(0,a.kt)("p",null,"Download the pre-built image of ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/eventmesh/eventmesh"},(0,a.kt)("inlineCode",{parentName:"a"},"eventmesh"))," from Docker Hub with ",(0,a.kt)("inlineCode",{parentName:"p"},"docker pull"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"sudo docker pull eventmesh/eventmesh:v1.4.0\n")),(0,a.kt)("p",null,"To verify that the ",(0,a.kt)("inlineCode",{parentName:"p"},"eventmesh/eventmesh")," image is successfully installed, list the downloaded images with ",(0,a.kt)("inlineCode",{parentName:"p"},"docker images"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ sudo docker images\nREPOSITORY            TAG       IMAGE ID       CREATED         SIZE\neventmesh/eventmesh   v1.4.0    6e2964599c78   16 months ago   937MB\n")),(0,a.kt)("h2",{id:"3-edit-configuration"},"3. Edit Configuration"),(0,a.kt)("p",null,"Edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"eventmesh.properties")," to change the configuration (e.g. TCP port, client blacklist) of EventMesh Runtime. To integrate RocketMQ as a connector, these two configuration files should be created: ",(0,a.kt)("inlineCode",{parentName:"p"},"eventmesh.properties")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"rocketmq-client.properties"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo mkdir -p /data/eventmesh/rocketmq/conf\ncd /data/eventmesh/rocketmq/conf\nsudo touch eventmesh.properties\nsudo touch rocketmq-client.properties\n")),(0,a.kt)("h3",{id:"4-configure-eventmeshproperties"},"4. Configure ",(0,a.kt)("inlineCode",{parentName:"h3"},"eventmesh.properties")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"eventmesh.properties")," file contains the properties of EventMesh runtime environment and integrated plugins. Please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/eventmesh/blob/master/eventmesh-runtime/conf/eventmesh.properties"},"default configuration file")," for the available configuration keys."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo vim eventmesh.properties\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Configuration Key"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"eventMesh.server.http.port")),(0,a.kt)("td",{parentName:"tr",align:null},"10105"),(0,a.kt)("td",{parentName:"tr",align:null},"EventMesh HTTP server port")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"eventMesh.server.tcp.port")),(0,a.kt)("td",{parentName:"tr",align:null},"10000"),(0,a.kt)("td",{parentName:"tr",align:null},"EventMesh TCP server port")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"eventMesh.server.grpc.port")),(0,a.kt)("td",{parentName:"tr",align:null},"10205"),(0,a.kt)("td",{parentName:"tr",align:null},"EventMesh gRPC server port")))),(0,a.kt)("h3",{id:"5-configure-rocketmq-clientproperties"},"5. Configure ",(0,a.kt)("inlineCode",{parentName:"h3"},"rocketmq-client.properties")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"rocketmq-client.properties")," file contains the properties of the Apache RocketMQ nameserver."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo vim rocketmq-client.properties\n")),(0,a.kt)("p",null,"Please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/eventmesh/blob/1.3.0/eventmesh-runtime/conf/rocketmq-client.properties"},"default configuration file")," and change the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"eventMesh.server.rocketmq.namesrvAddr")," to the nameserver address of RocketMQ."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Configuration Key"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"eventMesh.server.rocketmq.namesrvAddr")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"127.0.0.1:9876;127.0.0.1:9876")),(0,a.kt)("td",{parentName:"tr",align:null},"The address of RocketMQ nameserver")))),(0,a.kt)("h2",{id:"6-run-and-manage-eventmesh-container"},"6. Run and Manage EventMesh Container"),(0,a.kt)("p",null,"Run an EventMesh container from the ",(0,a.kt)("inlineCode",{parentName:"p"},"eventmesh/eventmesh")," image with the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker run")," command. The ",(0,a.kt)("inlineCode",{parentName:"p"},"-p")," option of the command binds the container port with the host machine port. The ",(0,a.kt)("inlineCode",{parentName:"p"},"-v")," option of the command mounts the configuration files from files in the host machine."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker run -d -p 10000:10000 -p 10105:10105 \\\n-v `pwd`/data/eventmesh/rocketmq/conf/eventmesh.properties:/data/app/eventmesh/conf/eventmesh.properties \\\n-v `pwd`/data/eventmesh/rocketmq/conf/rocketmq-client.properties:/data/app/eventmesh/conf/rocketmq-client.properties \\\neventmesh/eventmesh:v1.4.0\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"docker ps")," command lists the details (id, name, status, etc.) of the running containers. The container id is the unique identifier of the container."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ sudo docker ps\nCONTAINER ID   IMAGE                        COMMAND                  CREATED         STATUS         PORTS                                                                                          NAMES\n5bb6b6092672   eventmesh/eventmesh:v1.4.0   "/bin/sh -c \'sh star\u2026"   5 seconds ago   Up 3 seconds   0.0.0.0:10000->10000/tcp, :::10000->10000/tcp, 0.0.0.0:10105->10105/tcp, :::10105->10105/tcp   eager_driscoll\n')),(0,a.kt)("p",null,"As you can see from this message, the ",(0,a.kt)("inlineCode",{parentName:"p"},"container id")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"5bb6b6092672"),", and the `",(0,a.kt)("inlineCode",{parentName:"p"},"name")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"eager_driscoll"),", and they can both be used to uniquely identify this container. ",(0,a.kt)("strong",{parentName:"p"},"Note"),": On your computer, their values may be different from the ones here."),(0,a.kt)("h2",{id:"7-managing-eventmesh-containers"},"7. Managing EventMesh Containers"),(0,a.kt)("p",null,"After successfully running an EventMesh container, you can manage the container by entering it, viewing logs, deleting it, and so on."),(0,a.kt)("p",null,"To connect to the EventMesh container:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker exec -it [container id or name] /bin/bash\n")),(0,a.kt)("p",null,"To read the log of the EventMesh container:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"tail -f ../logs/eventmesh.out\n")),(0,a.kt)("p",null,"To stop or remove the container:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker stop [container id or name]\n\nsudo docker rm -f [container id or name]\n")),(0,a.kt)("h2",{id:"8-explore-more"},"8. Explore more"),(0,a.kt)("p",null,"Now that EventMesh is running through a container, you can refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/eventmesh/tree/master/eventmesh-examples"},(0,a.kt)("inlineCode",{parentName:"a"},"eventmesh-examples")," module")," to write and test your own code."),(0,a.kt)("p",null,"I hope you enjoy the process and get more out of it!"))}d.isMDXComponent=!0}}]);