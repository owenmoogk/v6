(this.webpackJsonpv6tmp=this.webpackJsonpv6tmp||[]).push([[0],[,,,,,,,,,function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),c=n(10),a=n.n(c),l=n(5),r=n(2),o=n.p+"static/media/resume.9e208a27.pdf",d=(n(9),n(0));function j(){return Object(d.jsxs)("div",{id:"navBox",children:[Object(d.jsx)("a",{href:"/",className:"navlinks",children:Object(d.jsx)("p",{children:"Home"})}),Object(d.jsx)(l.b,{to:"/projects",className:"navlinks",children:Object(d.jsx)("p",{children:"Projects"})}),Object(d.jsx)(l.b,{to:"/work",className:"navlinks",children:Object(d.jsx)("p",{children:"Work"})}),Object(d.jsx)(l.b,{to:"/contact",className:"navlinks",children:Object(d.jsx)("p",{children:"Contact"})}),Object(d.jsx)("a",{href:o,target:"_blank",rel:"noreferrer",className:"navlinks",children:Object(d.jsx)("p",{children:"Resume"})})]})}var m=n(4);function h(){var e=Object(i.useState)("Menu"),t=Object(m.a)(e,2),n=t[0],s=t[1];return Object(d.jsx)("div",{id:"navButton",onClick:function(){return function(){var e=document.getElementById("navBox");"block"===e.style.display?(e.style.display="",s("Menu"),document.body.style.overflow=""):(e.style.display="block",s("Exit"),document.body.style.overflow="hidden")}()},children:Object(d.jsx)("p",{children:n})})}n(16);function b(){return Object(i.useEffect)((function(){!function(){function e(){return Math.floor(window.innerWidth*window.innerHeight/12e3)}var t,n=document.getElementById("background-canvas"),i=n.width=window.innerWidth,s=n.height=window.innerHeight,c=n.getContext("2d"),a=[],l=0,r=0,o=[[0,1],[1,0],[0,-1],[-1,0],[.7,.7],[.7,-.7],[-.7,.7],[-.7,-.7]],d={x:i/2,y:s/2,vx:0,vy:0,width:10};function j(){a.length=0;for(var e=0;e<4;++e)a.push(new h(d));c.fillStyle="#222",c.fillRect(0,0,i,s)}function m(e){return"hsl( hue, 30%, 30% )".replace("hue",e/i*360+l)}function h(e){this.x=0|e.x,this.y=0|e.y,this.width=e.width/1.25;do{var t=o[Math.random()*o.length|0];this.vx=t[0],this.vy=t[1]}while(this.vx===-e.vx&&this.vy===-e.vy||this.vx===e.vx&&this.vy===e.vy);this.vx*=5,this.vy*=5,this.dist=20*Math.random()+10}t=e(),h.prototype.step=function(){var e=!1,n=this.x,l=this.y;if(this.x+=this.vx,this.y+=this.vy,--this.dist,(this.x<0||this.x>i||this.y<0||this.y>s)&&(e=!0),this.dist<=0&&this.width>1&&(this.dist=20*Math.random()+10,a.length<t&&a.push(new h(this)),a.length<t&&Math.random()<.5&&a.push(new h(this)),Math.random()<.2&&(e=!0)),c.strokeStyle=c.shadowColor=m(this.x),c.beginPath(),c.lineWidth=this.width,c.moveTo(this.x,this.y),c.lineTo(n,l),c.stroke(),e)return!0},j(),function e(){window.requestAnimationFrame(e),++l,c.shadowBlur=0,c.fillStyle="rgba(0,0,0,.02)",c.fillRect(0,0,i,s),c.shadowBlur=.5;for(var n=0;n<a.length;++n)a[n].step()&&(a.splice(n,1),--n);++r,a.length<t&&r>10&&Math.random()<.5&&(r=0,a.push(new h(d)),c.fillStyle=c.shadowColor=m(d.x),c.beginPath(),c.arc(d.x,d.y,10,0,2*Math.PI),c.fill())}(),window.addEventListener("resize",(function(){i=n.width=window.innerWidth,s=n.height=window.innerHeight,d.x=i/2,d.y=s/2,t=e(),j()})),document.getElementById("secret").addEventListener("click",(function(){t=2e3,document.getElementById("secret").innerHTML="More colors!"}))}()}),[]),Object(d.jsx)("canvas",{id:"background-canvas",style:{zIndex:-1}})}function u(){function e(){fetch("/v6/splashes.txt").then((function(e){return e.text()})).then((function(e){var t,n,i=e.split(/\r?\n|\r/),s=i[(t=0,n=i.length-1,t=Math.ceil(t),n=Math.floor(n),Math.floor(Math.random()*(n-t+1))+t)];c(s)}))}var t=Object(i.useState)(""),n=Object(m.a)(t,2),s=n[0],c=n[1];return Object(i.useEffect)((function(){return e(),document.body.style.overflowY="hidden",document.body.style.overflowX="hidden",function(){document.body.style.overflowY="scroll",document.body.style.overflowX="scroll"}}),[]),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"title",children:[Object(d.jsx)("p",{id:"title",children:"Owen Moogk"}),Object(d.jsx)("p",{id:"splash",onClick:function(){return e()},children:s}),Object(d.jsx)("p",{id:"secret",children:"You found the top secret button (don't click this text)"})]}),Object(d.jsx)("div",{id:"secretButton",onClick:function(){return document.getElementById("secret").style.display="inherit"}}),Object(d.jsx)(b,{})]})}n(17);function p(){return Object(d.jsx)("div",{className:"main",children:Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)("p",{className:"title",children:"Work"}),Object(d.jsx)("br",{}),Object(d.jsx)("p",{id:"workSubtitle",children:"Coming soon to a website near you :)"})]})})}function x(e){return Object(d.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:Object(d.jsxs)("div",{className:"contactLink",children:[Object(d.jsx)("span",{className:"header",children:e.text}),Object(d.jsxs)("span",{className:"contactText",children:[" -- ",e.link]})]})})}n(18);function v(){return Object(d.jsxs)("div",{className:"main contactPage",children:[Object(d.jsx)("p",{className:"title",children:"Contact"}),Object(d.jsx)("hr",{}),Object(d.jsxs)("form",{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"text",placeholder:"John Doe",id:"nameInput"}),Object(d.jsx)("input",{type:"text",placeholder:"johndoe@gmail.com",id:"emailInput"})]}),Object(d.jsx)("input",{type:"text",placeholder:"Subject",id:"subjectInput"}),Object(d.jsx)("textarea",{type:"text",placeholder:"Message",id:"messageInput"}),Object(d.jsx)("button",{value:"Send Email",onClick:function(){return function(){var e=document.getElementById("nameInput").value,t=document.getElementById("emailInput").value,n=document.getElementById("subjectInput").value,i=document.getElementById("messageInput").value;e&&t&&n&&i||alert("Fields cannot be blank"),i="Sent from "+e+" -- "+t+"\r\n"+i,window.Email.send({Host:"smtp.gmail.com",Username:"owenswebsite1@gmail.com",Password:"contactowen",To:"owenmoogk@gmail.com",From:"owenswebsite@gmail.com",Subject:n,Body:i}).then((function(){document.getElementById("nameInput").value="",document.getElementById("emailInput").value="",document.getElementById("subjectInput").value="",document.getElementById("messageInput").value="",alert("Sent!")}))}()},children:"Submit"})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{id:"contacts",children:[Object(d.jsx)(x,{link:"mailto:owenmoogk@gmail.com",text:"Personal Email"}),Object(d.jsx)(x,{link:"tel:+1-226-989-0602",text:"Phone"}),Object(d.jsx)(x,{link:"https://linktr.ee/owenmoogk",text:"Social Media"}),Object(d.jsx)(x,{link:"https://github.com/owenmoogk",text:"Github"}),Object(d.jsx)(x,{link:"https://www.thingiverse.com/owen_moogk",text:"Thingiverse"}),Object(d.jsx)(x,{link:"https://repl.it/@owenm21",text:"Repl.it"}),Object(d.jsx)(x,{link:"https://www.linkedin.com/in/owen-moogk-1ab9371b8/",text:"LinkedIn"})]}),Object(d.jsx)("br",{})]})}var y=n(6);n(19);function g(){var e=Object(r.g)().name,t="/v6/assets/projects/"+e+".json";return Object(d.jsx)("div",{className:"body",children:function(e,t){var n=new XMLHttpRequest;n.onreadystatechange=function(){4===this.readyState&&200===this.status&&function(e,t){var n=JSON.parse(e.response).page,i="";try{var s=n["page-head"]["page-title"]}catch(w){return void(document.getElementsByClassName("body")[0].innerHTML="<h2>Page not found</h2>")}var c=n["page-head"].date;i+='<div class="project-page-title"><p style="line-height: 70px;">'+s+'</p></div><div class="date"><p class="pdate">'+c+"</p></div>";for(var a=n.block,l=0;l<a.length;l++){var r=a[l];if(i+='<div class="block">',r.title&&(i+='<div class="text"><h1 class="left">'+r.title+"</h1>"),r.text){var o='<p class="left">';if("string"==typeof r.text)o+=r.text;else{var d,j=Object(y.a)(r.text);try{for(j.s();!(d=j.n()).done;){var m=d.value;m.constructor===Object?o+='<a href="'+m.href+'" class="blinks" target="_blank"> '+m.text+" </a>":o+=m}}catch(w){j.e(w)}finally{j.f()}}i+=o+="</p></div>"}if(r.image)if(Array.isArray(r.image)){var h,b=Object(y.a)(r.image);try{for(b.s();!(h=b.n()).done;){i+='<div class="img"><img src="/v6/img/projects/'+t+"/"+h.value+'" class="img"></div>'}}catch(w){b.e(w)}finally{b.f()}}else i+='<div class="img"><img src="/v6/img/projects/'+t+"/"+r.image+'" class="img"></div>';if(r.render)if(Array.isArray(r.render)){var u,p=Object(y.a)(r.render);try{for(p.s();!(u=p.n()).done;){i+='<div class="render"><img src="/v6/img/projects/'+t+"/"+u.value+'" class="img"></div>'}}catch(w){p.e(w)}finally{p.f()}}else i+='<div class="render"><img src="/v6/img/projects/'+t+"/"+r.render+'" class="img"></div>';if(r.ul){i+="<ul>";var x,v=Object(y.a)(r.ul);try{for(v.s();!(x=v.n()).done;){var g=x.value;i+="<li>",g.constructor===Object?i+='<a href="'+g.href+'" class="blinks" target="_blank"> '+g.text+" </a>":i+=g,i+="</li>"}}catch(w){v.e(w)}finally{v.f()}i+="</ul>"}if(r.video)if(Array.isArray(r.video)){i+="<br>";var O,f=Object(y.a)(r.video);try{for(f.s();!(O=f.n()).done;){i+='<video src="/v6/img/projects/'+t+"/"+O.value+'"width=300px controls></video>'}}catch(w){f.e(w)}finally{f.f()}}else i+='<br><video src="/v6/img/projects/'+t+"/"+r.video+'"width=250px controls></video>';r.iframe&&(i+=r.iframe,console.log(r.iframe)),i+="</div>"}document.getElementsByClassName("body")[0].innerHTML=i}(this,t)},n.open("GET",e,!0),n.send()}(t,e)?Object(d.jsx)("div",{children:"hi"}):Object(d.jsx)("div",{children:"else"})})}n(20);function O(e){var t="/projects/"+e.name,n=e.type.toLowerCase(),i=!1;e.link&&(i=!0,t=e.link);var s="/v6/img/projects/"+e.name+"/main.png";function c(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"content-overlay "+n}),Object(d.jsx)("img",{className:"content-image",src:s,alt:""}),Object(d.jsxs)("div",{className:"content-details "+n,children:[Object(d.jsx)("h3",{className:"content-title",children:e.title}),Object(d.jsx)("p",{className:"type",children:n.toUpperCase()})]})]})}return Object(d.jsx)("div",{className:"content",children:i?Object(d.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:c()}):Object(d.jsx)(l.b,{to:t,children:c()})})}function f(e){var t=document.getElementsByClassName("active");t[0].className=t[0].className.replace(" active","");var n="sort_"+e;document.getElementsByClassName(n)[0].className+=" active";for(var i=document.getElementsByClassName("content"),s=0;s<i.length;s++){if("all"===e)i[s].style.display="";else i[s].getElementsByClassName("type")[0].innerHTML.toString().toLowerCase()===e?i[s].style.display="":i[s].style.display="none"}}n(21),n(22);function w(){return Object(d.jsx)("div",{className:"main",children:Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)("p",{className:"title",children:"Projects"}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"sorting",children:[Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("span",{className:"sort_all btn active",onClick:function(){return f("all")},children:Object(d.jsx)("p",{children:"All"})}),Object(d.jsx)("span",{className:"sort_cad btn",onClick:function(){return f("cad")},children:Object(d.jsx)("p",{children:"CAD"})}),Object(d.jsx)("span",{className:"sort_coding btn",onClick:function(){return f("coding")},children:Object(d.jsx)("p",{children:"Coding"})}),Object(d.jsx)("span",{className:"sort_mechanical btn",onClick:function(){return f("mechanical")},children:Object(d.jsx)("p",{children:"Mechanical"})}),Object(d.jsx)("span",{className:"sort_web-dev btn",onClick:function(){return f("web-dev")},children:Object(d.jsx)("p",{children:"Web-Dev"})})]}),Object(d.jsx)("div",{className:"sort",children:Object(d.jsx)("input",{type:"text",id:"searchBar",onKeyUp:function(){return function(){for(var e=document.getElementById("searchBar").value.toUpperCase(),t=document.getElementById("projectsGoHere").getElementsByClassName("content"),n=0;n<t.length;n++){var i=t[n].getElementsByClassName("content-title")[0].innerText,s=t[n].getElementsByClassName("type")[0].innerText;i.toUpperCase().indexOf(e)>-1||s.toUpperCase().indexOf(e)>-1?t[n].style.display="":t[n].style.display="none"}}()},placeholder:"Search by Date, Title, or Text",title:"Type to search"})})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{id:"projectsGoHere",children:[Object(d.jsx)(O,{title:"Music Bot",name:"music-bot",type:"coding"}),Object(d.jsx)(O,{title:"NHL Fantasy App",name:"nhl-fantasy",type:"coding"}),Object(d.jsx)(O,{title:"Pathfinding Visualizer",name:"pathfinding-visualizer",type:"coding"}),Object(d.jsx)(O,{title:"Sorting Visualizer",name:"sorting-visualizer",type:"coding",link:"https://owenmoogk.github.io/sorting-visualizer/"}),Object(d.jsx)(O,{title:"Firefly Simulator",name:"firefly-simulator",type:"coding"}),Object(d.jsx)(O,{title:"Outbreak Simulator",name:"outbreak-simulator",type:"coding"}),Object(d.jsx)(O,{title:"Pendulum Physics Simulator",name:"pendulum-simulator",type:"coding"}),Object(d.jsx)(O,{title:"Sudoku Bot",name:"sudoku-bot",type:"coding",link:"https://owenmoogk.github.io/sudoku-visualizer"}),Object(d.jsx)(O,{title:"Notes App",name:"notes-app",type:"coding"}),Object(d.jsx)(O,{title:"LAN Messenger",name:"lan-messenger",type:"coding"}),Object(d.jsx)(O,{title:"Grocery List App",name:"grocery-list",type:"coding"}),Object(d.jsx)(O,{title:"Unix Time Converter",name:"unix-time",type:"coding",link:"https://owenmoogk.github.io/unix-time"}),Object(d.jsx)(O,{title:"Password Manager",name:"password-manager",type:"coding",link:"https://owenmoogk.github.io/password-manager/"}),Object(d.jsx)(O,{title:"Color Picker",name:"color-picker",type:"coding"}),Object(d.jsx)(O,{title:"COVID Scraper",name:"covid-scraper",type:"coding"}),Object(d.jsx)(O,{title:"COVID Website",name:"covid-website",type:"web-dev"}),Object(d.jsx)(O,{title:"Dino Game AI",name:"dino-game-ai",type:"coding"}),Object(d.jsx)(O,{title:"Geometry Calculator",name:"geometry-calculator",type:"coding"}),Object(d.jsx)(O,{title:"Simplelib",name:"simplelib",type:"coding",link:"http://simplelib.tk/"}),Object(d.jsx)(O,{title:"Flappy Bird AI",name:"flappy-bird-ai",type:"coding"}),Object(d.jsx)(O,{title:"Email Bot",name:"email-bot",type:"coding"}),Object(d.jsx)(O,{title:"Snake",name:"snake",type:"coding"}),Object(d.jsx)(O,{title:"Model Rocket",name:"model-rocket",type:"mechanical"}),Object(d.jsx)(O,{title:"Hydraulic Arm",name:"hydraulic-arm",type:"mechanical"}),Object(d.jsx)(O,{title:"Space Invaders",name:"space-invaders",type:"coding"}),Object(d.jsx)(O,{title:"The Compiler",name:"the-compiler",type:"web-dev",link:"http://thecompiler.cf/"}),Object(d.jsx)(O,{title:"Website Development",name:"web-development",type:"web-dev"}),Object(d.jsx)(O,{title:"Renders/Graphic Design",name:"renders",type:"CAD"}),Object(d.jsx)(O,{title:"Minecraft Modifications",name:"minecraft-mods",type:"coding"}),Object(d.jsx)(O,{title:"Vortex",name:"vortex",type:"CAD"}),Object(d.jsx)(O,{title:"2702 Rebels 2020 Robot",name:"2702-2020",type:"Mechanical"}),Object(d.jsx)(O,{title:"Engine Assembly",name:"engine",type:"Mechanical"}),Object(d.jsx)(O,{title:"2702 Rebels 2019 Robot",name:"2702-2019",type:"Mechanical"})]})]})})}var k=function(e){return Object(d.jsxs)(l.a,{children:[Object(d.jsx)(h,{}),Object(d.jsx)(j,{}),Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{exact:!0,path:"/projects",element:Object(d.jsx)(w,{})}),Object(d.jsx)(r.a,{path:"/projects/:name",element:Object(d.jsx)(g,{})}),Object(d.jsx)(r.a,{path:"/work",element:Object(d.jsx)(p,{})}),Object(d.jsx)(r.a,{path:"/contact",element:Object(d.jsx)(v,{})}),Object(d.jsx)(r.a,{exact:!0,path:"/",element:Object(d.jsx)(u,{})})]})]})};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.a11439a0.chunk.js.map