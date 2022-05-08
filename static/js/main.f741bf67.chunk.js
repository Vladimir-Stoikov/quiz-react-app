(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,n,t){e.exports=t(49)},40:function(e,n,t){},49:function(e,n,t){"use strict";t.r(n);var a,r,o=t(0),i=t.n(o),c=t(23),l=t.n(c),u=(t(40),t(1)),s=t(9),d=t(4),m=t(5),h=m.a.main(a||(a=Object(d.a)(["\n  position: relative;\n  width: 500px;\n  height: ",";\n  padding: 0 0 70px 0;\n  background-color: var(--second-background-color);\n  border: var(--first-main-color) solid 0.2rem;\n  border-radius: 30px;\n  @media (max-width: 600px) {\n    width: 80vw;\n  }\n  @media (max-width: 400px) {\n    width: 100vw;\n    border-radius: 0;\n    border-left: 0;\n    border-right: 0;\n  }\n  @media (max-width: 300px) { \n    height: ",";\n  }\n"])),function(e){var n=e.height;return n||"auto"},function(e){return e.height?"400px":"auto"});function b(e){var n=e.children,t=e.height;return i.a.createElement(h,{height:t},n)}var p,g=m.a.h1(r||(r=Object(d.a)(["\n  display: inline-block;\n  text-align: center;\n  font-size: 2rem;\n  margin: ",";\n  width: ",";\n  user-select: none;\n  @media (max-width: 450px) {\n    font-size: 1.7rem;\n  }\n   @media (max-width: 360px) {\n    margin: ",";\n    font-size: 1.2rem;\n  }\n"])),function(e){var n=e.margin;return n||"20px 0"},function(e){var n=e.width;return n||"auto"},function(e){return e.margin?"20px 10px":"20px 0"});function f(e){var n=e.text,t=e.width,a=e.margin;return i.a.createElement(g,{width:t,margin:a},n)}var x,v=m.a.button(p||(p=Object(d.a)(["\n  position: absolute;\n  width: 100%;\n  bottom: -1px;\n  left: 0;\n  right: 0;\n  height: 3rem;\n  background-color: var(--second-main-color);\n  border: none;\n  border-top: var(--first-main-color) solid 0.2rem;\n  border-bottom-left-radius: 25px;\n  border-bottom-right-radius: 25px;\n  font-family: inherit;\n  color: var(--second-background-color);\n  text-shadow: 0 0 5px var(--second-main-color);\n  box-shadow: inset 0 0 10px rgba(0,0,0, 0.15);\n  font-size: 1.7rem;\n  transition: all .2s ease;\n  &:hover {\n    background-color: var(--first-background-hover-color);\n  }\n  &:active {\n    background-color: var(--first-background-active-color);\n  }\n  @media (max-width: 400px) { \n    border-radius: 0;\n  }\n   @media (max-width: 300px) { \n    font-size: 1.2rem;\n  }\n"])));function E(e){var n=e.text,t=e.func;return i.a.createElement(v,{onClick:t},n)}var w=m.a.article(x||(x=Object(d.a)(["\npadding: 0 20px;\ntext-indent: 1rem;\n@media (max-width: 350px) {\n  text-align: center;\n  padding: 0 10px;\n}\n"])));function j(e){var n=e.text;return i.a.createElement(w,null,n)}function k(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(b,null,i.a.createElement(f,{text:"Quiz",width:"100%"}),i.a.createElement(j,{text:"Try to answer JavaScript Quiz Questions"}),i.a.createElement(s.b,{to:"/Quiz"},i.a.createElement(E,{text:"Start",func:function(){return console.log("next page")}}))))}var O,y,q,S,C=t(6),z=[{question:"Which language runs in a web browser?",a:"Java",b:"C",c:"Python",d:"JavaScript",correct:"4"},{question:"What does CSS stand for?",a:"Central Style Sheets",b:"Cascading Style Sheets",c:"Cascading Simple Sheets",d:"Cars SUVs Sailboats",correct:"2"},{question:"What does HTML stand for?",a:"Hypertext Markup Language",b:"Hypertext Markdown Language",c:"Hyperloop Machine Language",d:"Helicopters Terminals Motorboats Lamborginis",correct:"1"},{question:"What year was JavaScript launched?",a:"1996",b:"1995",c:"1994",d:"none of the above",correct:"2"},{question:"JavaScript is a ___ -side programming language.",a:"Client",b:"Server",c:"Both",d:"None",correct:"3"},{question:"Which JavaScript label catches all the values, except for the ones specified",a:"Catch",b:"Label",c:"Try",d:"Default",correct:"4"}],J=m.a.ul(O||(O=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: start;\n  margin: 5% 0 0 15%;\n  @media (max-width: 450px) {\n    margin-left: 8%;\n  }\n"]))),M=m.a.input(y||(y=Object(d.a)(["\ndisplay: none;\n&:checked + label {\n  background-color: var(--second-main-color);\n}\n"]))),F=m.a.label(q||(q=Object(d.a)(["\n  display: inline-block;\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  background-color: white;\n  border: var(--second-main-color) solid 0.15rem;\n  border-radius: 15px;\n  margin-right: 15px;\n  transition: all .2s ease;\n"]))),L=m.a.li(S||(S=Object(d.a)(["\n  list-style: none;\n  font-size: 1.2rem;\n  user-select: none;\n  margin: 8px 0;\n  @media (max-width: 450px) {\n    font-size: 1rem;\n  }\n"])));function Q(e){var n=e.count,t=e.set,a=e.answers,r=Object(o.useState)(z),c=Object(C.a)(r,1)[0],l=Object(o.useState)(a[n]?a[n]:""),u=Object(C.a)(l,2),s=u[0],d=u[1];function m(e){d(e.target.id),t(function(t){return t.map(function(t,a){return a===n?e.target.id:t})})}return Object(o.useEffect)(function(){d(a[n])},[n]),i.a.createElement(J,null,i.a.createElement(L,null,i.a.createElement(M,{type:"radio",id:"question-id-1",name:"questions",onChange:m,checked:"question-id-1"===s}),i.a.createElement(F,{htmlFor:"question-id-1"}),c[n].a),i.a.createElement(L,null,i.a.createElement(M,{type:"radio",id:"question-id-2",name:"questions",onChange:m,checked:"question-id-2"===s}),i.a.createElement(F,{htmlFor:"question-id-2"}),c[n].b),i.a.createElement(L,null,i.a.createElement(M,{type:"radio",id:"question-id-3",name:"questions",onChange:m,checked:"question-id-3"===s}),i.a.createElement(F,{htmlFor:"question-id-3"}),c[n].c),i.a.createElement(L,null,i.a.createElement(M,{type:"radio",id:"question-id-4",name:"questions",onChange:m,checked:"question-id-4"===s}),i.a.createElement(F,{htmlFor:"question-id-4"}),c[n].d))}var W,H,T=t(26),_=t.n(T),B=Object(m.a)(_.a)(W||(W=Object(d.a)(["\n  color: var(--second-main-color);\n  transition: all .3s ease;\n  &:hover {\n    color: var(--first-background-hover-color);\n  }\n  &:active {\n    color: var(--first-background-active-color);\n  }\n"]))),R=m.a.button(H||(H=Object(d.a)(["\n  opacity: ",";\n  background: transparent;\n  border: none;\n"])),function(e){return e.disable?"0.5":"1"});function Y(e){var n=e.func,t=e.disable;return i.a.createElement(R,{disable:t,onClick:n},i.a.createElement(B,null))}var D,I,N,P=t(27),U=t.n(P),V=Object(m.a)(U.a)(D||(D=Object(d.a)(["\n  margin: 0;\n  color: var(--second-main-color);\n  transition: all .3s ease;\n  &:hover {\n    color: var(--first-background-hover-color);\n  }\n  &:active {\n    color: var(--first-background-active-color);\n  }\n"]))),A=m.a.button(I||(I=Object(d.a)(["\n  opacity: ",";\n  border: none;\n  background: transparent;\n"])),function(e){return e.disable?"0.5":"1"});function G(e){var n=e.func,t=e.disable;return i.a.createElement(A,{onClick:n,disable:t},i.a.createElement(V,null)," ")}var K,X=m.a.section(N||(N=Object(d.a)(["\ndisplay: ",";\ntext-align: center;\nmargin-top: 7%;\npadding: 5% 3%;\nbackground: var(--second-background-color);\nborder-radius: 30px;\nborder: 3px solid var(--second-main-color);\nfont-size: 1.15rem;\n@media (max-width: 600px) {\n  width: 80vw;\n}\n@media (max-width: 400px) {\n  width: 100vw;\n  border-radius: 0;\n  border-left: 0;\n  border-right: 0;\n}\n@media (max-width: 300px) { \n  height: ",";\n}\n"])),function(e){return e.show?"block":"none"},function(e){return e.height?"400px":"auto"});function Z(e){var n=e.text;return i.a.createElement(X,{show:n},n)}var $=m.a.header(K||(K=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));function ee(){var e=Object(o.useState)(z),n=Object(C.a)(e,1)[0],t=Object(o.useState)(0),a=Object(C.a)(t,2),r=a[0],c=a[1],l=Object(o.useState)(n.map(function(){return"empty"})),s=Object(C.a)(l,2),d=s[0],m=s[1],h=Object(o.useState)(null),p=Object(C.a)(h,2),g=p[0],x=p[1],v=Object(u.f)();return i.a.createElement(i.a.Fragment,null,i.a.createElement(b,{height:"370px"},i.a.createElement($,null,i.a.createElement(Y,{disable:0===r,func:function(){return c(function(e){return 0!==e?e-=1:e})}}),i.a.createElement(f,{text:"Question "+(r+1)+" / "+n.length,margin:"20px 20px"}),i.a.createElement(G,{disable:r===n.length-1,func:function(){return c(function(e){return e<n.length-1?e+=1:e})}})),i.a.createElement(j,{text:n[r].question}),i.a.createElement(Q,{count:r,set:m,answers:d}),i.a.createElement(E,{text:"Check",func:function(){var e=!0,t=0;d.forEach(function(n){"empty"===n&&(e=!1)}),e?(d.forEach(function(e,a){e.slice(-1)===n[a].correct&&++t}),v("/End",{state:t})):x("You have some not answered questions!")}})),i.a.createElement(Z,{text:g}))}function ne(){var e=Object(u.e)(),n=Object(u.f)();return i.a.createElement(b,null,i.a.createElement(f,{text:null===e.state?"Error":"Congratulations",width:"100%"}),i.a.createElement(j,{text:null===e.state?"Wrong access":"You have - ".concat(e.state," correct ").concat(1===e.state?"answer":"answers","!")}),i.a.createElement(E,{text:null===e.state?"Menu":"Restart",func:function(){n("/")}}))}var te=function(){return i.a.createElement(u.c,null,i.a.createElement(u.a,{path:"/",element:i.a.createElement(k,null)}),i.a.createElement(u.a,{path:"/Quiz",element:i.a.createElement(ee,null)}),i.a.createElement(u.a,{path:"/End",element:i.a.createElement(ne,null)}))};l.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(s.a,null,i.a.createElement(te,null))))}},[[32,2,1]]]);
//# sourceMappingURL=main.f741bf67.chunk.js.map