"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[980],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return d}});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=n.createContext({}),i=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=i(e.components);return n.createElement(o.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=i(t),d=l,g=m["".concat(o,".").concat(d)]||m[d]||u[d]||r;return t?n.createElement(g,s(s({ref:a},p),{},{components:t})):n.createElement(g,s({ref:a},p))}));function d(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,s=new Array(r);s[0]=m;var c={};for(var o in a)hasOwnProperty.call(a,o)&&(c[o]=a[o]);c.originalType=e,c.mdxType="string"==typeof e?e:l,s[1]=c;for(var i=2;i<r;i++)s[i]=t[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2612:function(e,a,t){t.r(a),t.d(a,{assets:function(){return p},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return u}});var n=t(3117),l=t(102),r=(t(7294),t(3905)),s=["components"],c={title:"Run",sidebar_position:6},o=void 0,i={unversionedId:"commands/run",id:"commands/run",title:"Run",description:"The run command runs your Scala code:",source:"@site/docs/commands/run.md",sourceDirName:"commands",slug:"/commands/run",permalink:"/docs/commands/run",draft:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/commands/run.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Run",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Compile",permalink:"/docs/commands/compile"},next:{title:"Test",permalink:"/docs/commands/test"}},p={},u=[{value:"Passing arguments",id:"passing-arguments",level:2},{value:"Main class",id:"main-class",level:2},{value:"Custom JVM",id:"custom-jvm",level:2},{value:"Watch mode",id:"watch-mode",level:2},{value:"Watch mode - restart",id:"watch-mode---restart",level:3},{value:"Scala.js",id:"scalajs",level:2},{value:"Scala Native",id:"scala-native",level:2},{value:"Scala Scripts",id:"scala-scripts",level:2},{value:"Scala CLI from docker",id:"scala-cli-from-docker",level:2}],m={toc:u};function d(e){var a=e.components,t=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," command runs your Scala code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=Hello.scala",title:"Hello.scala"},'object Hello {\n  def main(args: Array[String]): Unit =\n    println("Hello")\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli run Hello.scala\n# Hello\n")),(0,r.kt)("p",null,"This is the default command, so you don\u2019t have to specify it explicitly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Hello.scala\n# Hello\n")),(0,r.kt)("h2",{id:"passing-arguments"},"Passing arguments"),(0,r.kt)("p",null,"You can pass arguments to the application or script you're launching after ",(0,r.kt)("inlineCode",{parentName:"p"},"--"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=app.sc",title:"app.sc"},'println(args.mkString("App called with arguments: ", ", ", ""))\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli app.sc -- first-arg second-arg\n# App called with arguments: first-arg, second-arg\n")),(0,r.kt)("h2",{id:"main-class"},"Main class"),(0,r.kt)("p",null,"If your application has multiple main classes, the ",(0,r.kt)("inlineCode",{parentName:"p"},"--main-class")," option lets you explicitly specify the main class you want to run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=hi.sc",title:"hi.sc"},'println("Hi")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Hello.scala hi.sc --main-class hi_sc\n")),(0,r.kt)("h2",{id:"custom-jvm"},"Custom JVM"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--jvm")," lets you run your application with a custom JVM:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Hello.scala --jvm adopt:14\n")),(0,r.kt)("p",null,"JVMs are ",(0,r.kt)("a",{parentName:"p",href:"https://get-coursier.io/docs/cli-java#managed-jvms"},"managed by coursier"),", and are based on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/shyiko/jabba/blob/master/index.json"},"index")," of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/shyiko/jabba"},"jabba")," command-line tool."),(0,r.kt)("h2",{id:"watch-mode"},"Watch mode"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--watch")," makes ",(0,r.kt)("inlineCode",{parentName:"p"},"scala-cli")," watch your code for changes, and re-runs it upon any change:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"scala-cli run Hello.scala  --watch\n# Hello\n# Watching sources, press Ctrl+C to exit.\n# Compiling project (Scala 3.1.1, JVM)\n# Compiled project (Scala 3.1.1, JVM)\n# Hello World\n# Watching sources, press Ctrl+C to exit.\n")),(0,r.kt)("h3",{id:"watch-mode---restart"},"Watch mode - restart"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--restart")," mode runs your application in the background and automatically restart it upon any change:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"scala-cli run Hello.scala --restart\n# Hello\n# Watching sources, press Ctrl+C to exit.\n# Compiling project (Scala 3.1.1, JVM)\n# Compiled project (Scala 3.1.1, JVM)\n# Hello World\n# Watching sources, press Ctrl+C to exit.\n")),(0,r.kt)("h2",{id:"scalajs"},"Scala.js"),(0,r.kt)("p",null,"Scala.js applications can also be compiled and run with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--js")," option.\nNote that this requires ",(0,r.kt)("inlineCode",{parentName:"p"},"node")," to be ",(0,r.kt)("a",{parentName:"p",href:"/install#scala-js"},"installed")," on your system:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Hello.scala --js\n")),(0,r.kt)("p",null,"See our dedicated ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/scala-js"},"Scala.js guide")," for more information."),(0,r.kt)("h2",{id:"scala-native"},"Scala Native"),(0,r.kt)("p",null,"Scala Native applications can be compiled and run with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--native")," option.\nNote that the ",(0,r.kt)("a",{parentName:"p",href:"https://scala-native.readthedocs.io/en/latest/user/setup.html#installing-clang-and-runtime-dependencies"},"Scala Native requirements")," need to be ",(0,r.kt)("a",{parentName:"p",href:"/install#scala-native"},"installed")," for this to work, and that Scala Native only supports Linux and macOS at this time and can only use Scala 2.13 and 2.12 for now:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Hello.scala --native -S 2.13.6\n")),(0,r.kt)("p",null,"We have a dedicated ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/scala-native"},"Scala Native guide")," as well."),(0,r.kt)("h2",{id:"scala-scripts"},"Scala Scripts"),(0,r.kt)("p",null,"Scala CLI can also compile and run Scala scripts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=HelloScript.sc",title:"HelloScript.sc"},'#!/usr/bin/env -S scala-cli shebang\n\nprintln("Hello world from scala script")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli run HelloScript.sc\n# Hello world from scala script\n")),(0,r.kt)("p",null,"Our ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/scripts"},"scripts guide")," provides many more details."),(0,r.kt)("h2",{id:"scala-cli-from-docker"},"Scala CLI from docker"),(0,r.kt)("p",null,"Scala applications can also be compiled and run using a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-started/"},"docker")," image with ",(0,r.kt)("inlineCode",{parentName:"p"},"scala-cli"),", without needing to install Scala CLI manually:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run virtuslab/scala-cli:latest about\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=HelloWorld.scala",title:"HelloWorld.scala"},'object HelloWorld extends App {\n  println("Hello world")\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"docker run  -v $(pwd)/HelloWorld.scala:/HelloWorld.scala virtuslab/scala-cli /HelloWorld.scala\n# Hello world\n")))}d.isMDXComponent=!0}}]);