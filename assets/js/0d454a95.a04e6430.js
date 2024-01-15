"use strict";(self.webpackChunkeventmesh_site=self.webpackChunkeventmesh_site||[]).push([[5981],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(o,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60401:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={title:"Unit Test Requirement",sidebar_position:1},l="Unit Test Requirement",s={unversionedId:"contribute/write-unit-test",id:"contribute/write-unit-test",title:"Unit Test Requirement",description:"- Each unit test case should use assertions instead of System.out output or if statement",source:"@site/community/contribute/02-write-unit-test.md",sourceDirName:"contribute",slug:"/contribute/write-unit-test",permalink:"/community/contribute/write-unit-test",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Unit Test Requirement",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"How to Contribute",permalink:"/community/contribute/contribute"},next:{title:"How to Release",permalink:"/community/release"}},o={},u=[{value:"Location and Naming Rules",id:"location-and-naming-rules",level:2},{value:"Assertion Usage",id:"assertion-usage",level:2},{value:"Common Assertion",id:"common-assertion",level:3},{value:"Example",id:"example",level:3},{value:"<code>assertEquals()</code>",id:"assertequals",level:4},{value:"<code>assertTrue()</code>",id:"asserttrue",level:4},{value:"<code>assertFalse()</code>",id:"assertfalse",level:4},{value:"<code>assertNull()</code>",id:"assertnull",level:4},{value:"<code>assertNotNull()</code>",id:"assertnotnull",level:4}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"unit-test-requirement"},"Unit Test Requirement"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each unit test case should use assertions instead of ",(0,r.kt)("inlineCode",{parentName:"li"},"System.out")," output or ",(0,r.kt)("inlineCode",{parentName:"li"},"if")," statement"),(0,r.kt)("li",{parentName:"ul"},"Each unit test case shouldn't call other cases or depend on the order of execution."),(0,r.kt)("li",{parentName:"ul"},"Each unit test case should be repeatable and not depend on the external environment because the test might be executed in the continuous integration."),(0,r.kt)("li",{parentName:"ul"},"The scope of each unit test should be small enough to help locate the problem at the method level.")),(0,r.kt)("h2",{id:"location-and-naming-rules"},"Location and Naming Rules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The unit test should be placed in ",(0,r.kt)("inlineCode",{parentName:"li"},"src/test/java"),"."),(0,r.kt)("li",{parentName:"ul"},"The unit test configuration file should be placed in ",(0,r.kt)("inlineCode",{parentName:"li"},"src/test/resources"),". For example:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Class to be tested: ",(0,r.kt)("inlineCode",{parentName:"li"},"src/main/java/org/apache/eventmesh/common/protocol/http/body/BaseResponseBody.java")),(0,r.kt)("li",{parentName:"ul"},"Unit test: ",(0,r.kt)("inlineCode",{parentName:"li"},"src/test/java/org/apache/eventmesh/common/protocol/http/body/BaseResponseBodyTest.java")),(0,r.kt)("li",{parentName:"ul"},"Unit test configuration: ",(0,r.kt)("inlineCode",{parentName:"li"},"src/test/resources/configuration.properties")))),(0,r.kt)("li",{parentName:"ul"},"The package name of the unit test class should be identical to the class to be tested."),(0,r.kt)("li",{parentName:"ul"},"The name of the unit test class should be ",(0,r.kt)("inlineCode",{parentName:"li"},"{class or interface to be tested}Test"),". For example:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Class to be tested: ",(0,r.kt)("inlineCode",{parentName:"li"},"EventMeshUtil")),(0,r.kt)("li",{parentName:"ul"},"Unit test class: ",(0,r.kt)("inlineCode",{parentName:"li"},"EventMeshUtilTest")))),(0,r.kt)("li",{parentName:"ul"},"The name of each test case should be ",(0,r.kt)("inlineCode",{parentName:"li"},"test{method name}"),". For example:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Method to be tested: ",(0,r.kt)("inlineCode",{parentName:"li"},"addProp(String key, String val)")),(0,r.kt)("li",{parentName:"ul"},"Unit test case: ",(0,r.kt)("inlineCode",{parentName:"li"},"testAddProp"))))),(0,r.kt)("h2",{id:"assertion-usage"},"Assertion Usage"),(0,r.kt)("h3",{id:"common-assertion"},"Common Assertion"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Methods"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Instructions"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"assertEquals")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Determines whether two objects or primitive types are equal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"assertNotEquals")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Determines whether two objects or primitive types are not equal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"assertTrue")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Determines whether the given Boolean value is ",(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"assertFalse")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Determines whether the given Boolean value is ",(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"assertNull")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Determines whether the given object reference is ",(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"assertNotNull")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Determines whether the given object reference is not ",(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"assertAll")),(0,r.kt)("td",{parentName:"tr",align:"left"},"When multiple decision logic are processed together if only one error is reported, the whole test will fail")))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("h4",{id:"assertequals"},(0,r.kt)("inlineCode",{parentName:"h4"},"assertEquals()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'configuration.init();\nAssert.assertEquals("value1", configuration.eventMeshEnv);\n')),(0,r.kt)("h4",{id:"asserttrue"},(0,r.kt)("inlineCode",{parentName:"h4"},"assertTrue()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'BaseResponseHeader header = BaseResponseHeader.buildHeader("200");\nAssert.assertTrue(header.toMap().containsKey(ProtocolKey.REQUEST_CODE));\n')),(0,r.kt)("h4",{id:"assertfalse"},(0,r.kt)("inlineCode",{parentName:"h4"},"assertFalse()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Class<NacosRegistryService> nacosRegistryServiceClass = NacosRegistryService.class;\nField initStatus = nacosRegistryServiceClass.getDeclaredField("INIT_STATUS");\ninitStatus.setAccessible(true);\nObject initStatusField = initStatus.get(nacosRegistryService);\nAssert.assertFalse((Boolean.parseBoolean(initStatusField.toString())));\n')),(0,r.kt)("h4",{id:"assertnull"},(0,r.kt)("inlineCode",{parentName:"h4"},"assertNull()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"DefaultFullHttpResponse response = httpCommand.httpResponse();\nAssert.assertNull(response);\n")),(0,r.kt)("h4",{id:"assertnotnull"},(0,r.kt)("inlineCode",{parentName:"h4"},"assertNotNull()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Codec.Decoder cd = new Codec.Decoder();\nArrayList<Object> result = new ArrayList<>();\ncd.decode(null, buf, result);\nAssert.assertNotNull(result.get(0));\n")))}c.isMDXComponent=!0}}]);