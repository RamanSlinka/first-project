(this.webpackJsonp01=this.webpackJsonp01||[]).push([[0],{15:function(e,t,n){e.exports={clock:"AnalogClock_clock__bXEbV","digital-clock":"AnalogClock_digital-clock__1Iy4Y","analog-clock":"AnalogClock_analog-clock__3D2ue",dial:"AnalogClock_dial__2vTID",seconds:"AnalogClock_seconds__20cQD",minutes:"AnalogClock_minutes__1WpR8",hours:"AnalogClock_hours__2TXSq"}},59:function(e,t,n){},60:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),i=n.n(r),o=n(10),l=n.n(o),s=(n(59),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,101)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),i(e),o(e)}))}),a=n(7);n(60);function j(e){return Object(c.jsx)("div",{children:Object(c.jsx)("h3",{onClick:e.onChange,children:e.title})})}function u(e){return console.log("AccordionBody rendering"),Object(c.jsx)("div",{children:Object(c.jsx)("ul",{children:e.items.map((function(t,n){return Object(c.jsx)("li",{onClick:function(){e.onClick(t.value)},children:t.title},n)}))})})}var d=function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)(j,{title:e.title,onChange:e.onChange}),!e.collapsed&&Object(c.jsx)(u,{items:e.items,onClick:e.onClick})]})};function b(e){return console.log("UncontrolledRating rendering"),Object(c.jsxs)("div",{children:[Object(c.jsx)(O,{selected:e.value>0,onClick:e.onClick,value:1}),Object(c.jsx)(O,{selected:e.value>1,onClick:e.onClick,value:2}),Object(c.jsx)(O,{selected:e.value>2,onClick:e.onClick,value:3}),Object(c.jsx)(O,{selected:e.value>3,onClick:e.onClick,value:4}),Object(c.jsx)(O,{selected:e.value>4,onClick:e.onClick,value:5})]})}function O(e){return Object(c.jsxs)("span",{onClick:function(){e.onClick(e.value)},children:[" ",e.selected?Object(c.jsx)("b",{children:" Star"}):" Star"," "]})}function x(e){var t=Object(r.useState)(!1),n=Object(a.a)(t,2),i=n[0],o=n[1],l={padding:"5px",width:"30px",weight:"20px",border:"1px solid black",borderRadius:"5px",display:"inline-block",background:i?"green":"white"},s={marginLeft:"5px",padding:"5px",width:"30px",weight:"20px",border:"1px solid black",borderRadius:"5px",display:"inline-block",background:i?"white":"red"},j={marginLeft:"5px",width:"15px",height:"15px",borderRadius:"10px",border:"1px solid black",display:"inline-block",background:i?"green":"red"};return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{style:l,onClick:function(){o(!0)},children:"On"}),Object(c.jsx)("div",{style:s,onClick:function(){o(!1)},children:"Off"}),Object(c.jsx)("div",{style:j})]})}var h=n(46),v=function(e,t){switch(t.type){case"TOGGLE-COLLAPSED":var n=Object(h.a)({},e);return n.collapsed=!n.collapsed,n;default:throw new Error("Hay, Man ! Bad action type")}return e};function f(e){return Object(c.jsx)("div",{children:Object(c.jsx)("h3",{onClick:function(){e.onClick()},children:e.title})})}function g(){return console.log("AccordionBody rendering"),Object(c.jsx)("div",{children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"1"}),Object(c.jsx)("li",{children:"2"}),Object(c.jsx)("li",{children:"3"})]})})}var p=function(e){var t=Object(r.useReducer)(v,{collapsed:!1}),n=Object(a.a)(t,2),i=n[0],o=n[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)(f,{title:e.title,onClick:function(){o({type:"TOGGLE-COLLAPSED"})}}),!i.collapsed&&Object(c.jsx)(g,{})]})};function k(e){var t=Object(r.useState)(0),n=Object(a.a)(t,2),i=n[0],o=n[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)(C,{selected:i>0,setValue:function(){return o(1)}}),Object(c.jsx)(C,{selected:i>1,setValue:function(){return o(2)}}),Object(c.jsx)(C,{selected:i>2,setValue:function(){return o(3)}}),Object(c.jsx)(C,{selected:i>3,setValue:function(){return o(4)}}),Object(c.jsx)(C,{selected:i>4,setValue:function(){return o(5)}})]})}function C(e){return Object(c.jsx)("span",{onClick:function(){return e.setValue()},children:e.selected?Object(c.jsx)("b",{children:" Star"}):" Star"})}function m(e){var t={padding:"5px",width:"30px",weight:"20px",border:"1px solid black",display:"inline-block",background:e.on?"green":"white"},n={marginLeft:"5px",padding:"5px",width:"30px",weight:"20px",border:"1px solid black",display:"inline-block",background:e.on?"white":"red"},r={marginLeft:"5px",width:"15px",height:"15px",borderRadius:"10px",border:"1px solid black",display:"inline-block",background:e.on?"green":"red"};return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{style:t,onClick:function(){e.onChange(!0)},children:"On"}),Object(c.jsx)("div",{style:n,onClick:function(){e.onChange(!1)},children:"Off"}),Object(c.jsx)("div",{style:r})]})}var S=n(98),y=n(97);function w(){var e=Object(r.useState)(""),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{children:"Uncontrolled Input:"}),Object(c.jsx)(S.a,{id:"outlined-basic",label:"Value",variant:"outlined",size:"small",onChange:function(e){var t=e.currentTarget.value;i(t)}}),"- ",n]})}function _(){var e=Object(r.useState)(""),t=Object(a.a)(e,2),n=t[0],i=t[1],o=Object(r.useRef)(null);return Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{children:"Uncontrolled input + button:"}),Object(c.jsx)(S.a,{id:"outlined-basic",label:"Value",variant:"outlined",size:"small",ref:o}),Object(c.jsx)(y.a,{variant:"contained",color:"primary",size:"medium",onClick:function(){var e=o.current;i(e.value)},children:"Save"}),"- actual value ",n]})}var R=n(99);function A(){var e=Object(r.useState)(""),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(c.jsx)("div",{children:Object(c.jsx)(S.a,{id:"outlined-basic",label:"Value",variant:"outlined",size:"small",value:n,onChange:function(e){i(e.currentTarget.value)}})})}function T(){var e=Object(r.useState)(!0),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(c.jsx)("div",{children:Object(c.jsx)(R.a,{color:"primary",checked:n,onChange:function(e){i(e.currentTarget.checked)}})})}function E(){var e=Object(r.useState)(void 0),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(c.jsx)("div",{children:Object(c.jsxs)("select",{value:n,onChange:function(e){i(e.currentTarget.value)},children:[Object(c.jsx)("option",{children:"none"}),Object(c.jsx)("option",{value:"1",children:"Hrodna"}),Object(c.jsx)("option",{value:"2",children:"Kossovo"}),Object(c.jsx)("option",{value:"3",children:"Minsk"})]})})}var L=function(){var e,t=Object(r.useState)(5),n=Object(a.a)(t,2),i=n[0],o=n[1],l=Object(r.useState)(5),s=Object(a.a)(l,2),j=s[0],u=s[1],d=1;e=Object(r.useMemo)((function(){for(var e=1,t=1;t<=i;t++){for(var n=0;n<10;){n++;Math.random()}e*=1}return e}),[i]);for(var b=1;b<=j;b++)d*=1;return Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{value:i,onChange:function(e){return o(Number(e.currentTarget.value))}}),Object(c.jsx)("input",{value:j,onChange:function(e){return u(+e.currentTarget.value)}}),Object(c.jsxs)("div",{children:["Result for a: ",e]}),Object(c.jsxs)("div",{children:["Result for b: ",d]})]})},D=n(35),I=function(e){return Object(c.jsx)("div",{children:e.count})},V=function(e){return console.log("users"),Object(c.jsx)("div",{children:e.users.map((function(e,t){return Object(c.jsxs)("div",{children:[" ",e]},t)}))})},F=i.a.memo(V),U=i.a.memo(I),M=function(){console.log("ReactMemo component");var e=Object(r.useState)(0),t=Object(a.a)(e,2),n=t[0],i=t[1],o=Object(r.useState)(["Raman","Anna","Sofik","Robert"]),l=Object(a.a)(o,2),s=l[0],j=l[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{children:"React.memo"}),Object(c.jsx)("button",{onClick:function(){return i(n+1)},children:" +"}),Object(c.jsx)("span",{children:" Counter"}),Object(c.jsx)(U,{count:n}),Object(c.jsx)("button",{onClick:function(){var e=[].concat(Object(D.a)(s),["Our family "+(new Date).getTime()]);j(e)},children:" add user"}),Object(c.jsx)(F,{users:s})]})},B=function(e){return Object(c.jsx)("div",{children:e.count})},N=i.a.memo(B),P=function(e){return console.log("books"),Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{onClick:e.addBook,children:" add book"}),e.books.map((function(e,t){return Object(c.jsxs)("div",{children:[" ",e]},t)}))]})},z=i.a.memo(P),G=function(){console.log("UseCallback component");var e=Object(r.useState)(0),t=Object(a.a)(e,2),n=t[0],i=t[1],o=Object(r.useState)(["React","JS"]),l=Object(a.a)(o,2),s=l[0],j=l[1],u=Object(r.useCallback)((function(){console.log("add book");var e=[].concat(Object(D.a)(s),["Angular"+(new Date).getTime()]);j(e)}),[s]);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{children:"UseCallback"}),Object(c.jsx)("button",{onClick:function(){return i(n+1)},children:" +"}),Object(c.jsx)("span",{children:" Counter"}),Object(c.jsx)(N,{count:n}),Object(c.jsx)(z,{books:s,addBook:u})]})};function H(){console.log("generationData");return 80000000001}var J=function(){console.log("UseState Component");var e=Object(r.useState)(H),t=Object(a.a)(e,2),n=t[0],i=t[1],o=function(e){return e+1};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h4",{children:"UseState Component (updated )"}),Object(c.jsx)("button",{onClick:function(){return i(o)},children:" + "}),n]})},X=function(){var e=Object(r.useState)(1),t=Object(a.a)(e,2),n=t[0],i=t[1];return console.log("useEffect component"),Object(r.useEffect)((function(){console.log("useEffect render");var e=setInterval((function(){console.log("setInterval"),i((function(e){return e+1}))}),1e5);return function(){clearInterval(e)}}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h4",{children:"UseEffect component"}),n,Object(c.jsx)("button",{onClick:function(){return i(n+1)},children:"click"})]})},q=n(15),K=n.n(q),Q=function(e){var t=e.date,n={transform:"rotate(".concat(6*t.getSeconds(),"deg)")},r={transform:"rotate(".concat(6*t.getMinutes(),"deg)")},i={transform:"rotate(".concat(30*t.getHours(),"deg)")};return Object(c.jsx)("div",{className:K.a.clock,children:Object(c.jsxs)("div",{className:K.a["analog-clock"],children:[Object(c.jsx)("div",{className:"".concat(K.a.dial," ").concat(K.a.seconds),style:n}),Object(c.jsx)("div",{className:"".concat(K.a.dial," ").concat(K.a.minutes),style:r}),Object(c.jsx)("div",{className:"".concat(K.a.dial," ").concat(K.a.hours),style:i})]})})},W=function(e){return e<10?"0"+e:e},Y=function(e){var t=e.date;return Object(c.jsxs)(c.Fragment,{children:["  ",Object(c.jsx)("span",{children:W(t.getHours())}),":",Object(c.jsx)("span",{children:W(t.getMinutes())}),":",Object(c.jsx)("span",{children:W(t.getSeconds())})]})},Z=function(e){var t=Object(r.useState)(new Date),n=Object(a.a)(t,2),i=n[0],o=n[1];return Object(r.useEffect)((function(){var e=setInterval((function(){o(new Date)}),1e3);return function(){clearInterval(e)}}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)(Q,{date:i}),Object(c.jsx)(Y,{date:i})]})};function $(e){return Object(c.jsx)("h1",{children:e.title})}var ee=function(){var e=Object(r.useState)(0),t=Object(a.a)(e,2),n=t[0],i=t[1],o=Object(r.useState)(!0),l=Object(a.a)(o,2),s=l[0],j=l[1],u=Object(r.useState)(!1),O=Object(a.a)(u,2);return O[0],O[1],Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)($,{title:"This is APP components for study"}),Object(c.jsx)(x,{}),Object(c.jsx)(k,{}),Object(c.jsx)(p,{title:"Menu :  (click)"}),Object(c.jsx)(d,{items:[{title:"Raman",value:1},{title:"Anna",value:2},{title:"Sofia",value:3},{title:"Robert",value:4}],onClick:function(e){console.log(e)},title:"Users :  (click)",collapsed:s,onChange:function(){j(!s)}}),Object(c.jsx)(m,{on:!s,onChange:function(e){j(e)}}),Object(c.jsx)(b,{value:n,onClick:i}),Object(c.jsx)("hr",{}),Object(c.jsx)(w,{}),Object(c.jsx)(_,{}),Object(c.jsx)("hr",{}),Object(c.jsx)("p",{children:"Inputs controlled (for state)"}),Object(c.jsx)(E,{}),Object(c.jsx)(T,{}),Object(c.jsx)(A,{}),Object(c.jsx)("hr",{}),Object(c.jsx)(M,{}),Object(c.jsx)("hr",{}),Object(c.jsx)(L,{}),Object(c.jsx)("hr",{}),Object(c.jsx)(G,{}),Object(c.jsx)("hr",{}),Object(c.jsx)(J,{}),Object(c.jsx)("hr",{}),Object(c.jsx)(X,{}),Object(c.jsx)("hr",{}),Object(c.jsx)(Z,{})]})};l.a.render(Object(c.jsx)(ee,{}),document.getElementById("root")),s()}},[[66,1,2]]]);
//# sourceMappingURL=main.0a8a4426.chunk.js.map