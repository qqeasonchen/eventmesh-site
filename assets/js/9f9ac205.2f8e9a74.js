"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[3769],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return t?a.createElement(h,i(i({ref:n},d),{},{components:t})):a.createElement(h,i({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},79703:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const o={},i="Service Provider Interface",s={unversionedId:"design-document/spi",id:"version-v1.4.0/design-document/spi",title:"Service Provider Interface",description:"Introduction",source:"@site/versioned_docs/version-v1.4.0/design-document/01-spi.md",sourceDirName:"design-document",slug:"/design-document/spi",permalink:"/docs/v1.4.0/design-document/spi",draft:!1,editUrl:"https://github.com/apache/eventmesh-site/edit/master/versioned_docs/version-v1.4.0/design-document/01-spi.md",tags:[],version:"v1.4.0",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EventMesh Schema Registry (OpenSchema)",permalink:"/docs/v1.4.0/design-document/schema-registry"},next:{title:"EventMesh Stream",permalink:"/docs/v1.4.0/design-document/stream"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"eventmesh-spi module",id:"eventmesh-spi-module",level:2},{value:"EventMeshSPI",id:"eventmeshspi",level:3},{value:"EventMeshExtensionFactory",id:"eventmeshextensionfactory",level:3},{value:"ExtensionClassLoader",id:"extensionclassloader",level:3},{value:"SPI use case",id:"spi-use-case",level:2}],d={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"service-provider-interface"},"Service Provider Interface"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In order to improve scalability\uff0cEventMesh introduce the SPI\uff08Service Provider Interface\uff09mechanism, which can help to automatically find the concrete implementation\nclass of the extended interface at runtime and load it dynamically. In EventMesh, all extension modules are implemented by using plugin.\nUser can develop custom plugins by simply implementing extended interfaces, and select the plugin to be run at runtime by simply declare at configuration."),(0,r.kt)("h2",{id:"eventmesh-spi-module"},"eventmesh-spi module"),(0,r.kt)("p",null,"The implementation of SPI is at eventmesh-spi module, there are three main classes ",(0,r.kt)("inlineCode",{parentName:"p"},"EventMeshSPI"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"EventMeshExtensionFactory")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ExtensionClassLoader"),"."),(0,r.kt)("h3",{id:"eventmeshspi"},"EventMeshSPI"),(0,r.kt)("p",null,"EventMeshSPI is an SPI declaration annotation, all extended interface that want to be implemented should be declared by @EventMeshSPI."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Documented\n@Retention(RetentionPolicy.RUNTIME)\n@Target({ElementType.TYPE})\npublic @interface EventMeshSPI {\n    /**\n     * If true, the spi instance is singleton\n     */\n    boolean isSingleton() default false;\n}\n")),(0,r.kt)("p",null,"Use annotation to declare the interface is an SPI extended interface can improve the readability of the code.\nOn the other hand, @EventMeshSPI contains a isSingleton attribute which used to declare whether the extension instance is a singleton.\nIf this attribute is true, that means the instance of this interface will be singleton."),(0,r.kt)("h3",{id:"eventmeshextensionfactory"},"EventMeshExtensionFactory"),(0,r.kt)("p",null,"EventMeshExtensionFactory is a factory used to get the SPI extension instance which contains a static method ",(0,r.kt)("inlineCode",{parentName:"p"},"getExtension(Class<T> extensionType, String extensionName)"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public enum EventMeshExtensionFactory {\n    /**\n     * @param extensionType extension plugin class type\n     * @param extensionName extension instance name\n     * @param <T>           the type of the plugin\n     * @return plugin instance\n     */\n    public static <T> T getExtension(Class<T> extensionType, String extensionName) {\n        /* ... */\n    }\n}\n")),(0,r.kt)("p",null,"If you want to get the extension instance, you should use EventMeshExtensionFactory."),(0,r.kt)("h3",{id:"extensionclassloader"},"ExtensionClassLoader"),(0,r.kt)("p",null,"ExtensionClassLoader is used to load extension instance classed, it has two subclass MetaInfExtensionClassLoader and JarExtensionClassLoader."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Load extension class\n * <ul>\n *     <li>{@link MetaInfExtensionClassLoader}</li>\n *     <li>{@link JarExtensionClassLoader}</li>\n * </ul>\n */\npublic interface ExtensionClassLoader {\n    /**\n     * load\n     *\n     * @param extensionType extension type class\n     * @param <T>           extension type\n     * @return extension instance name to extension instance class\n     */\n    <T> Map<String, Class<?>> loadExtensionClass(Class<T> extensionType);\n}\n")),(0,r.kt)("p",null,"MetaInfExtensionClassLoader used to load class from classPath, and JarExtensionClassLoader used to load class from extension jar on the plugin directory.\nIn the future, we might support the implementation to load from the maven repository."),(0,r.kt)("h2",{id:"spi-use-case"},"SPI use case"),(0,r.kt)("p",null,"The following is an example of how to use the SPI to declare a plugin."),(0,r.kt)("p",null,"First, we create an eventmesh-connector-api module, and define the extension interface MeshMQProducer, and we use @EventMeshSPI on the MeshMQProducer,\nwhich indicates the MeshMQProducer is an SPI interface."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@EventMeshSPI(isSingleton = false)\npublic interface MeshMQProducer extends Producer {\n    /* ... */\n}\n")),(0,r.kt)("p",null,"Then we create an eventmesh-connector-rocketmq module, which contains the concrete implementation named RocketMQProducerImpl."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class RocketMQProducerImpl implements MeshMQProducer {\n    /* ... */\n}\n")),(0,r.kt)("p",null,"At the same time, we need to create a file with the full qualified name of the SPI interface under the resource/META-INF/eventmesh directory\nin the eventmesh-connector-rocketmq module."),(0,r.kt)("p",null,"org.apache.eventmesh.api.producer.Producer"),(0,r.kt)("p",null,"The content of the file is the extension instance name and the corresponding instance full class name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"rocketmq=org.apache.eventmesh.connector.rocketmq.producer.RocketMQProducerImpl\n")),(0,r.kt)("p",null,"At this point, an SPI expansion module is complete. We can use ",(0,r.kt)("inlineCode",{parentName:"p"},'EventMeshExtensionFactory.getExtension(MeshMQProducer.class, "rocketmq")')," to get the ",(0,r.kt)("inlineCode",{parentName:"p"},"RocketMQProducerImpl")," instance."))}u.isMDXComponent=!0}}]);