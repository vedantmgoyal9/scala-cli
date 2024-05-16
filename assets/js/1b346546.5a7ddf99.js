"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8870],{124:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var t=i(5893),s=i(1151);const o={title:"Debugging",sidebar_position:4},d=void 0,l={id:"cookbooks/introduction/debugging",title:"Debugging",description:"Debugging with Scala CLI is very simple. All one needs to do is to pass the --debug option, which is available for the run and test sub-commands.",source:"@site/docs/cookbooks/introduction/debugging.md",sourceDirName:"cookbooks/introduction",slug:"/cookbooks/introduction/debugging",permalink:"/docs/cookbooks/introduction/debugging",draft:!1,unlisted:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/cookbooks/introduction/debugging.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Debugging",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Changing Java versions",permalink:"/docs/cookbooks/introduction/scala-jvm"},next:{title:"Formatting",permalink:"/docs/cookbooks/introduction/formatting"}},c={},a=[{value:"Preparing files to debug",id:"preparing-files-to-debug",level:2},{value:"VS Code with Metals",id:"vs-code-with-metals",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Debugging",id:"debugging",level:3},{value:"IntelliJ IDEA",id:"intellij-idea",level:2},{value:"Debugging in the attach mode",id:"debugging-in-the-attach-mode",level:3},{value:"Debugging in the listen mode",id:"debugging-in-the-listen-mode",level:3}];function r(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Debugging with Scala CLI is very simple. All one needs to do is to pass the ",(0,t.jsx)(n.code,{children:"--debug"})," option, which is available for the ",(0,t.jsx)(n.code,{children:"run"})," and ",(0,t.jsx)(n.code,{children:"test"})," sub-commands."]}),"\n",(0,t.jsx)(n.h2,{id:"preparing-files-to-debug",children:"Preparing files to debug"}),"\n",(0,t.jsx)(n.p,{children:"Let's start with creating a few example files, which we will run and debug later on:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",metastring:"title=MyClass.scala",children:'object MyClass extends App  {\n  println("Line 1")\n  println("Line 2")\n  println("Line 3")\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",metastring:"title=MyTests.test.scala",children:'//> using dep org.scalameta::munit::0.7.27\n\nclass MyTests extends munit.FunSuite {\n  test("foo") {\n    assert(2 + 2 == 4)\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"vs-code-with-metals",children:"VS Code with Metals"}),"\n",(0,t.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["If you are using ",(0,t.jsx)(n.strong,{children:"VS Code with Metals"}),", you will have to define ",(0,t.jsx)(n.strong,{children:"launch configurations"})," in the ",(0,t.jsx)(n.code,{children:"launch.json"})," file inside the ",(0,t.jsx)(n.code,{children:".vscode"})," directory."]}),"\n",(0,t.jsxs)(n.p,{children:["Within each configuration you will have to define the following ",(0,t.jsx)(n.a,{href:"https://code.visualstudio.com/docs/editor/debugging#_launchjson-attributes",children:"configuration attributes"}),": ",(0,t.jsx)(n.code,{children:"type"}),", ",(0,t.jsx)(n.code,{children:"request"}),", ",(0,t.jsx)(n.code,{children:"name"}),", ",(0,t.jsx)(n.code,{children:"buildTarget"}),", ",(0,t.jsx)(n.code,{children:"hostName"})," and ",(0,t.jsx)(n.code,{children:"port"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["If you don't know what are the exact ",(0,t.jsx)(n.strong,{children:"build target"})," names of your project, you can check them in ",(0,t.jsx)(n.a,{href:"https://scalameta.org/metals/docs/editors/vscode/#run-doctor",children:"Metals Doctor"})," in the ",(0,t.jsx)(n.code,{children:"Build target"})," column:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Metals Doctor view",src:i(4523).Z+"",width:"1956",height:"838"})}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.strong,{children:"no build targets"})," have been found, perform the following steps:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["run ",(0,t.jsx)(n.code,{children:"scala-cli compile ."})," in the command line."]}),"\n",(0,t.jsxs)(n.li,{children:["when the compilation is complete, run ",(0,t.jsx)(n.code,{children:"Connect to build server"})," in the Metals ",(0,t.jsx)(n.strong,{children:"build commands"})," section."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"After these steps, build targets should be visible in the Metals Doctor view."}),"\n",(0,t.jsxs)(n.p,{children:["Example ",(0,t.jsx)(n.code,{children:"launch.json"})," configuration file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",metastring:"title=.vscode/launch.json",children:'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "type": "scala",\n      "request": "attach",\n      "name": "project",\n      "buildTarget": "project_183d125c5c",\n      "hostName": "localhost",\n      "port": 5005\n    },\n    {\n      "type": "scala",\n      "request": "attach",\n      "name": "project-test",\n      "buildTarget": "project_183d125c5c-test",\n      "hostName": "localhost",\n      "port": 5005\n    }\t\n  ]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["After defining configurations in the ",(0,t.jsx)(n.code,{children:"launch.json"})," file, you should be able to see them in ",(0,t.jsx)(n.strong,{children:"Configuration dropdown"})," in the ",(0,t.jsx)(n.strong,{children:"Run and Debug"})," view:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Configuration dropdown",src:i(6723).Z+"",width:"1494",height:"568"})}),"\n",(0,t.jsx)(n.p,{children:"After setting up the configuration you can proceed to debugging."}),"\n",(0,t.jsx)(n.h3,{id:"debugging",children:"Debugging"}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.a,{href:"https://code.visualstudio.com/docs/editor/debugging#_breakpoints",children:"breakpoints"})," for the file you would like to debug:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Setting breakpoints",src:i(6200).Z+"",width:"1687",height:"620"})}),"\n",(0,t.jsx)(n.p,{children:"Run one of the following commands depending on which file you would like to debug:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["run ",(0,t.jsx)(n.code,{children:"scala-cli MyClass.scala --debug"})," if you would like to debug ",(0,t.jsx)(n.code,{children:"MyClass.scala"})," file"]}),"\n",(0,t.jsxs)(n.li,{children:["run ",(0,t.jsx)(n.code,{children:"scala-cli test MyTests.test.scala --debug"})," if you would like to debug ",(0,t.jsx)(n.code,{children:"MyTests.test.scala"})," file"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["After compilation is completed, Scala CLI should stop and ",(0,t.jsx)(n.strong,{children:"listen for transport dt_socket at port 5005"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Please note that 5005 is the default port for debugging with scala-cli. You can always change it by passing ",(0,t.jsx)(n.code,{children:"--debug-port"})," option."]})}),"\n",(0,t.jsxs)(n.p,{children:["At this moment go to the ",(0,t.jsx)(n.strong,{children:"Run and Debug"})," view, select proper configuration from the ",(0,t.jsx)(n.strong,{children:"Configuration dropdown"})," and run debugger by clicking ",(0,t.jsx)(n.strong,{children:"green arrow"})," on the side:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Running debugger",src:i(6872).Z+"",width:"1863",height:"832"})}),"\n",(0,t.jsxs)(n.p,{children:["After all these steps, the debugger should stop at the first breakpoint and you can proceed to ",(0,t.jsx)(n.strong,{children:"debugging"})," your code using all features delivered by VS Code. For more information check ",(0,t.jsx)(n.a,{href:"https://code.visualstudio.com/docs/editor/debugging",children:"this guide"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"intellij-idea",children:"IntelliJ IDEA"}),"\n",(0,t.jsx)(n.h3,{id:"debugging-in-the-attach-mode",children:"Debugging in the attach mode"}),"\n",(0,t.jsxs)(n.p,{children:["The first thing that you need to do to start debugging is ",(0,t.jsx)(n.a,{href:"https://www.jetbrains.com/help/idea/debugging-your-first-java-application.html#setting-breakpoints",children:"setting breakpoints"})," for the files you want to debug:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Setting breakpoints",src:i(9762).Z+"",width:"1610",height:"738"})}),"\n",(0,t.jsx)(n.p,{children:"Run one of the following commands depending on which file you would like to debug:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["run ",(0,t.jsx)(n.code,{children:"scala-cli MyClass.scala --debug"})," if you would like to debug ",(0,t.jsx)(n.code,{children:"MyClass.scala"})," file"]}),"\n",(0,t.jsxs)(n.li,{children:["run ",(0,t.jsx)(n.code,{children:"scala-cli test MyTests.test.scala --debug"})," if you would like to debug ",(0,t.jsx)(n.code,{children:"MyTests.test.scala"})," file"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["After compilation is completed, Scala CLI should stop and ",(0,t.jsx)(n.strong,{children:"listen for transport dt_socket at port 5005"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Please note that 5005 is the default port for debugging with scala-cli. You can always change it by passing ",(0,t.jsx)(n.code,{children:"--debug-port"})," option."]})}),"\n",(0,t.jsxs)(n.p,{children:["At this moment, you can attach to process by clicking ",(0,t.jsx)(n.strong,{children:"Run -> Attach to Process"})," and choosing process, which is running at port ",(0,t.jsx)(n.strong,{children:"5005"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Attach to Process",src:i(8372).Z+"",width:"1937",height:"973"})}),"\n",(0,t.jsxs)(n.p,{children:["After all these steps, the debugger should stop at the first breakpoint and you can proceed to ",(0,t.jsx)(n.strong,{children:"debug"})," your code using all features delivered by IntelliJ IDEA. For more information check ",(0,t.jsx)(n.a,{href:"https://www.jetbrains.com/help/idea/debugging-your-first-java-application.html#analyzing-state",children:"this guide"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"debugging-in-the-listen-mode",children:"Debugging in the listen mode"}),"\n",(0,t.jsxs)(n.p,{children:["If you would like to debug in listen mode, add a new ",(0,t.jsx)(n.strong,{children:"Remote JVM Debug"})," ",(0,t.jsx)(n.a,{href:"https://www.jetbrains.com/help/idea/run-debug-configuration.html",children:"configuration"})," with the following setup:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Listen mode configuration",src:i(4492).Z+"",width:"1866",height:"1042"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.jetbrains.com/help/idea/debugging-your-first-java-application.html#setting-breakpoints",children:"Set breakpoints"})," for the files you want to debug:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Setting breakpoints",src:i(9762).Z+"",width:"1610",height:"738"})}),"\n",(0,t.jsxs)(n.p,{children:["Run the previously set configuration by clicking on the ",(0,t.jsx)(n.strong,{children:"green debug button"})," on the side:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Running debug configuration",src:i(4798).Z+"",width:"1478",height:"695"})}),"\n",(0,t.jsx)(n.p,{children:"Run one of the following commands depending on which file you would like to debug:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["run ",(0,t.jsx)(n.code,{children:"scala-cli MyClass.scala --debug-mode listen"})," if you would like to debug ",(0,t.jsx)(n.code,{children:"MyClass.scala"})," file"]}),"\n",(0,t.jsxs)(n.li,{children:["run ",(0,t.jsx)(n.code,{children:"scala-cli test MyTests.test.scala --debug-mode listen"})," if you would like to debug ",(0,t.jsx)(n.code,{children:"MyTests.test.scala"})," file"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"attach"})," is the default mode for debugging with Scala CLI. You can always change it by passing ",(0,t.jsx)(n.code,{children:"--debug-mode"})," option. Available modes are: ",(0,t.jsx)(n.code,{children:"attach"})," and ",(0,t.jsx)(n.code,{children:"listen"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:["After all these steps the debugger should stop at the first breakpoint and you can proceed to ",(0,t.jsx)(n.strong,{children:"debug"})," your code using all features delivered by IntelliJ IDEA. For more information check ",(0,t.jsx)(n.a,{href:"https://www.jetbrains.com/help/idea/debugging-your-first-java-application.html#analyzing-state",children:"this guide"}),"."]})]})}function g(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},8372:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/debugging_attach_to_process-57f552b51d57326abcd8e113a7854e61.png"},6723:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/debugging_configuration_dropdown-c6883b309e946deb394bcd053b81dd9b.png"},4492:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/debugging_listen_mode_config-9698c91f2c4ab1bdc54575f98d0b3c75.png"},4523:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/debugging_run_doctor_view-02994f0e54647fe24b82fdc24efe748a.png"},4798:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/debugging_running_debug_configuration-58989e3c403ce04828726008bdf24f98.png"},6872:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/debugging_running_debugger-de6a50fdde50acddda019757ee231938.png"},9762:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/debugging_setting_breakpoints_intellij-e971f76161e8400fdd5fb4567442a5a6.png"},6200:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/debugging_setting_breakpoints_vs_code-6d6ac25ec68ad8134224c0ac59db9ffa.png"},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>d});var t=i(7294);const s={},o=t.createContext(s);function d(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);