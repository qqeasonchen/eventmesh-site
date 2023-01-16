"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[509],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<l;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6871:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={},s="How to Write Unit Test",i={unversionedId:"write-unit-test",id:"write-unit-test",title:"How to Write Unit Test",description:"- Each unit test case should use assertions instead of System.out output or if statement",source:"@site/community/03-write-unit-test.md",sourceDirName:".",slug:"/write-unit-test",permalink:"/zh/community/write-unit-test",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to Release",permalink:"/zh/community/release"},next:{title:"Contact Us",permalink:"/zh/community/contact"}},o={},u=[{value:"Location and Naming Rules",id:"location-and-naming-rules",level:2},{value:"Assertion Usage",id:"assertion-usage",level:2},{value:"Common Assertion",id:"common-assertion",level:3},{value:"Example",id:"example",level:3},{value:"<code>assertEquals()</code>",id:"assertequals",level:4},{value:"<code>assertTrue()</code>",id:"asserttrue",level:4},{value:"<code>assertFalse()</code>",id:"assertfalse",level:4},{value:"<code>assertNull()</code>",id:"assertnull",level:4},{value:"<code>assertNotNull()</code>",id:"assertnotnull",level:4}],p={toc:u};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-write-unit-test"},"How to Write Unit Test"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each unit test case should use assertions instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"System.out")," output or ",(0,r.kt)("inlineCode",{parentName:"li"},"if")," statement"),(0,r.kt)("li",{parentName:"ul"},"Each unit test case shouldn't call other cases or depend on the order of execution."),(0,r.kt)("li",{parentName:"ul"},"Each unit test case should be repeatable and not depend on the external environment because the test might be executed in the continuous integration."),(0,r.kt)("li",{parentName:"ul"},"The scope of each unit test should be small enough to help locate the problem at the method level.")),(0,r.kt)("h2",{id:"location-and-naming-rules"},"Location and Naming Rules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The unit test should be placed in ",(0,r.kt)("inlineCode",{parentName:"li"},"src/test/java"),"."),(0,r.kt)("li",{parentName:"ul"},"The unit test configuration file should be placed in ",(0,r.kt)("inlineCode",{parentName:"li"},"src/test/resources"),". For example:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Class to be tested: ",(0,r.kt)("inlineCode",{parentName:"li"},"src/main/java/org/apache/eventmesh/common/protocol/http/body/BaseResponseBody.java")),(0,r.kt)("li",{parentName:"ul"},"Unit test: ",(0,r.kt)("inlineCode",{parentName:"li"},"src/test/java/org/apache/eventmesh/common/protocol/http/body/BaseResponseBodyTest.java")),(0,r.kt)("li",{parentName:"ul"},"Unit test configuration: ",(0,r.kt)("inlineCode",{parentName:"li"},"src/test/resources/configuration.properties")))),(0,r.kt)("li",{parentName:"ul"},"The package name of the unit test class should be identical to the class to be tested."),(0,r.kt)("li",{parentName:"ul"},"The name of the unit test class should be ",(0,r.kt)("inlineCode",{parentName:"li"},"{class or interface to be tested}Test"),". For example:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Class to be tested: ",(0,r.kt)("inlineCode",{parentName:"li"},"EventMeshUtil")),(0,r.kt)("li",{parentName:"ul"},"Unit test class: ",(0,r.kt)("inlineCode",{parentName:"li"},"EventMeshUtilTest")))),(0,r.kt)("li",{parentName:"ul"},"The name of each test case should be ",(0,r.kt)("inlineCode",{parentName:"li"},"test{method name}"),". For example:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Method to be tested: ",(0,r.kt)("inlineCode",{parentName:"li"},"addProp(String key, String val)")),(0,r.kt)("li",{parentName:"ul"},"Unit test case: ",(0,r.kt)("inlineCode",{parentName:"li"},"testAddProp"))))),(0,r.kt)("h2",{id:"assertion-usage"},"Assertion Usage"),(0,r.kt)("h3",{id:"common-assertion"},"Common Assertion"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Methods"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Instructions"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"assertEquals")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Determines whether two objects or primitive types are equal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"assertNotEquals")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Determines whether two objects or primitive types are not equal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"assertTrue")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Determines whether the given Boolean value is ",(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"assertFalse")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Determines whether the given Boolean value is ",(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"assertNull")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Determines whether the given object reference is ",(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"assertNotNull")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Determines whether the given object reference is not ",(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"assertAll")),(0,r.kt)("td",{parentName:"tr",align:"left"},"When multiple decision logic are processed together if only one error is reported, the whole test will fail")))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("h4",{id:"assertequals"},(0,r.kt)("inlineCode",{parentName:"h4"},"assertEquals()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'configuration.init();\nAssert.assertEquals("value1", configuration.eventMeshEnv);\n')),(0,r.kt)("h4",{id:"asserttrue"},(0,r.kt)("inlineCode",{parentName:"h4"},"assertTrue()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'BaseResponseHeader header = BaseResponseHeader.buildHeader("200");\nAssert.assertTrue(header.toMap().containsKey(ProtocolKey.REQUEST_CODE));\n')),(0,r.kt)("h4",{id:"assertfalse"},(0,r.kt)("inlineCode",{parentName:"h4"},"assertFalse()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Class<NacosRegistryService> nacosRegistryServiceClass = NacosRegistryService.class;\nField initStatus = nacosRegistryServiceClass.getDeclaredField("INIT_STATUS");\ninitStatus.setAccessible(true);\nObject initStatusField = initStatus.get(nacosRegistryService);\nAssert.assertFalse((Boolean.parseBoolean(initStatusField.toString())));\n')),(0,r.kt)("h4",{id:"assertnull"},(0,r.kt)("inlineCode",{parentName:"h4"},"assertNull()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"DefaultFullHttpResponse response = httpCommand.httpResponse();\nAssert.assertNull(response);\n")),(0,r.kt)("h4",{id:"assertnotnull"},(0,r.kt)("inlineCode",{parentName:"h4"},"assertNotNull()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Codec.Decoder cd = new Codec.Decoder();\nArrayList<Object> result = new ArrayList<>();\ncd.decode(null, buf, result);\nAssert.assertNotNull(result.get(0));\n")))}d.isMDXComponent=!0}}]);