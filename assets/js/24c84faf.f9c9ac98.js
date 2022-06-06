"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1318],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return m}});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=n.createContext({}),p=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(i.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=l,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||s;return t?n.createElement(k,r(r({ref:a},c),{},{components:t})):n.createElement(k,r({ref:a},c))}));function m(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var s=t.length,r=new Array(s);r[0]=u;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var p=2;p<s;p++)r[p]=t[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5950:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var n=t(3117),l=t(102),s=(t(7294),t(3905)),r=["components"],o={title:"Scala.js",sidebar_position:21},i=void 0,p={unversionedId:"guides/scala-js",id:"guides/scala-js",title:"Scala.js",description:"Scala CLI can compile, run, test, and package Scala.js sources.",source:"@site/docs/guides/scala-js.md",sourceDirName:"guides",slug:"/guides/scala-js",permalink:"/docs/guides/scala-js",draft:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/guides/scala-js.md",tags:[],version:"current",sidebarPosition:21,frontMatter:{title:"Scala.js",sidebar_position:21},sidebar:"tutorialSidebar",previous:{title:"Scripts",permalink:"/docs/guides/scripts"},next:{title:"Scala Native",permalink:"/docs/guides/scala-native"}},c={},d=[{value:"Configuration",id:"configuration",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Package",id:"package",level:2},{value:"Module Split Style",id:"module-split-style",level:3},{value:"Smallest Modules",id:"smallest-modules",level:3},{value:"Small Modules For",id:"small-modules-for",level:3},{value:"Emit source maps",id:"emit-source-maps",level:2},{value:"Scala.js DOM support",id:"scalajs-dom-support",level:2},{value:"Using Directives",id:"using-directives",level:2},{value:"<code>--js-version</code>",id:"--js-version",level:4},{value:"<code>--js-header</code>",id:"--js-header",level:4},{value:"Supported Scala.js Versions",id:"supported-scalajs-versions",level:2}],u={toc:d};function m(e){var a=e.components,t=(0,l.Z)(e,r);return(0,s.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Scala CLI can compile, run, test, and package Scala.js sources."),(0,s.kt)("p",null,"One caveat is that Scala CLI doesn't have support for JS bundlers (such as ",(0,s.kt)("a",{parentName:"p",href:"https://webpack.js.org"},"webpack"),")\nlike ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/scalacenter/scalajs-bundler"},"scalajs-bundler")," has.\nFor this, you'll have to handle bundling yourself, with the ",(0,s.kt)("inlineCode",{parentName:"p"},".js")," file generated by ",(0,s.kt)("inlineCode",{parentName:"p"},"scala-cli"),"."),(0,s.kt)("p",null,"In order to run Scala.js sources, ",(0,s.kt)("inlineCode",{parentName:"p"},"node")," is required."),(0,s.kt)("h2",{id:"configuration"},"Configuration"),(0,s.kt)("p",null,"Enable Scala.js support by passing ",(0,s.kt)("inlineCode",{parentName:"p"},"--js")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"scala-cli"),", such as:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},"scala-cli Test.scala --js\n")),(0,s.kt)("h2",{id:"dependencies"},"Dependencies"),(0,s.kt)("p",null,"This section is currently a work in progress, but here are some initial notes:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Beware platform dependencies"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"run")," / ",(0,s.kt)("inlineCode",{parentName:"li"},"test")," / ",(0,s.kt)("inlineCode",{parentName:"li"},"package")," should all work")),(0,s.kt)("h2",{id:"package"},"Package"),(0,s.kt)("p",null,"Packaging Scala.js applications results in a ",(0,s.kt)("inlineCode",{parentName:"p"},".js")," file, that can be run with ",(0,s.kt)("inlineCode",{parentName:"p"},"node"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=HelloJs.scala",title:"HelloJs.scala"},'import scala.scalajs.js\n\nobject Hello {\n  def main(args: Array[String]): Unit = {\n    val console = js.Dynamic.global.console\n    val msg = "Hello World from Scala.js"\n    console.log(msg)\n  }\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli package --js HelloJs.scala -o hello.js\nnode hello.js\n# Hello World from Scala.js\n")),(0,s.kt)("h3",{id:"module-split-style"},"Module Split Style"),(0,s.kt)("h3",{id:"smallest-modules"},"Smallest Modules"),(0,s.kt)("p",null,"Passing ",(0,s.kt)("inlineCode",{parentName:"p"},"--js-module-split-style smallestmodules")," to the ",(0,s.kt)("inlineCode",{parentName:"p"},"package")," sub-command creates js modules that are as small as possible.\nScala.js linker generates a lot of js modules, which are copied to the ",(0,s.kt)("inlineCode",{parentName:"p"},"output")," directory."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=SmallestModules.scala",title:"SmallestModules.scala"},'import scala.scalajs.js\n\ncase class Foo(txt: String)\n\nobject Hello extends App {\n  println(Foo("Hello World from Scala.js").txt)\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'scala-cli package --js SmallestModules.scala --js-module-split-style smallestmodules --js-module-kind es --output hello\necho "{\\"type\\": \\"module\\"}" >> package.json # enable ES module\nnode hello/main.js\n# Hello World from Scala.js\n')),(0,s.kt)("h3",{id:"small-modules-for"},"Small Modules For"),(0,s.kt)("p",null,"Passing ",(0,s.kt)("inlineCode",{parentName:"p"},"--js-module-split-style smallestmodules")," to the ",(0,s.kt)("inlineCode",{parentName:"p"},"package")," sub-command creates many small modules as possibles for the classes in the listed packages (and their subpackages). To define packages use ",(0,s.kt)("inlineCode",{parentName:"p"},"jsSmallModuleForPackage")," parameter."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=SmallestModules.scala",title:"SmallestModules.scala"},'//> using jsModuleKind "es"\n//> using jsModuleSplitStyleStr "smallmodulesfor"\n//> using jsSmallModuleForPackage "com.example.test", "com.example.example""\n\npackage com.example.test\n\nimport scala.scalajs.js\n\ncase class Foo(txt: String)\n\nobject Hello extends App {\n  println(Foo("Hello World from Scala.js").txt)\n}\n')),(0,s.kt)("h2",{id:"emit-source-maps"},"Emit source maps"),(0,s.kt)("p",null,"Passing ",(0,s.kt)("inlineCode",{parentName:"p"},"--js-emit-source-maps")," to the ",(0,s.kt)("inlineCode",{parentName:"p"},"package")," sub-command emits source maps alongside js files. To set the destination path of source maps, pass ",(0,s.kt)("inlineCode",{parentName:"p"},"--js-source-maps-path")," flag with the argument."),(0,s.kt)("p",null,"The following command emits a ",(0,s.kt)("inlineCode",{parentName:"p"},"main.js.map")," alongside js files:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"scala-cli package Hello.scala --js --js-emit-source-maps\n# Emitted js source maps to: ./Hello.js.map\n# Wrote Hello.js, run it with\n#  node ./Hello.js\n")),(0,s.kt)("h2",{id:"scalajs-dom-support"},"Scala.js DOM support"),(0,s.kt)("p",null,"Pass ",(0,s.kt)("inlineCode",{parentName:"p"},"--js-dom")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"compile"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"run"),", or ",(0,s.kt)("inlineCode",{parentName:"p"},"test")," to simulate a DOM in Node.js"),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"If you see the following error, it means that you don't have the ",(0,s.kt)("inlineCode",{parentName:"p"},"jsdom")," library installed to simulate the DOM."),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre"},"Error: Cannot find module 'jsdom'\n")),(0,s.kt)("p",{parentName:"div"},"To fix it, install ",(0,s.kt)("inlineCode",{parentName:"p"},"jsdom")," locally for your project. You can install install ",(0,s.kt)("inlineCode",{parentName:"p"},"jsdom")," as follows:"),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre"},"npm init private\nnpm install jsdom\n")))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=Hello.scala",title:"Hello.scala"},'//> using lib "org.scala-js::scalajs-dom::2.1.0"\n//> using platform scala-js\n\nobject Hello {\n  def main(args: Array[String]): Unit = {\n      val parNode = document.createElement("p")\n      parNode.textContent = "Hello World"\n      document.body.appendChild(parNode)\n  }\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"scala-cli Hello.scala --js-dom\n")),(0,s.kt)("h2",{id:"using-directives"},"Using Directives"),(0,s.kt)("p",null,"Scala.js options are supported by using directives in Scala CLI:"),(0,s.kt)("h4",{id:"--js-version"},(0,s.kt)("inlineCode",{parentName:"h4"},"--js-version")),(0,s.kt)("p",null," The Scala.js version"),(0,s.kt)("h4",{id:"--js-header"},(0,s.kt)("inlineCode",{parentName:"h4"},"--js-header")),(0,s.kt)("p",null," A header that will be added at the top of generated .js files"),(0,s.kt)("p",null,"For more options, see our ",(0,s.kt)("a",{parentName:"p",href:"/docs/reference/directives#scala-js-options"},(0,s.kt)("inlineCode",{parentName:"a"},"using")," directive section"),"."),(0,s.kt)("h2",{id:"supported-scalajs-versions"},"Supported Scala.js Versions"),(0,s.kt)("p",null,"In the future, the Scala CLI will be able to support any version of Scala.js independently of the version of scala-cli. But for now, there are some limitations and it isn't possible to use each version of Scala.js."),(0,s.kt)("p",null,"The table below lists the last supported version of Scala.js in Scala CLI. If you want to use newer Scala.js, update scala-cli."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Scala CLI versions"),(0,s.kt)("th",{parentName:"tr",align:"center"},"Scala.js"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"0.0.9"),(0,s.kt)("td",{parentName:"tr",align:"center"},"1.7.1")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"0.1.0 - 0.1.2"),(0,s.kt)("td",{parentName:"tr",align:"center"},"1.8.0")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"0.1.3"),(0,s.kt)("td",{parentName:"tr",align:"center"},"1.9.0")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"0.1.4 - current"),(0,s.kt)("td",{parentName:"tr",align:"center"},"1.10.0")))))}m.isMDXComponent=!0}}]);