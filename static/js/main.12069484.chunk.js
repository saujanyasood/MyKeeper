(this.webpackJsonpmykeeper=this.webpackJsonpmykeeper||[]).push([[0],{68:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(24),a=n.n(r),o=n(12),i=n(7),j=n(46),l=n.n(j),s=n(2);var u=function(){return Object(s.jsx)("header",{children:Object(s.jsxs)("h1",{children:[Object(s.jsx)(l.a,{fontSize:"large",style:{position:"relative",top:"5px",left:"0px"}}),"My Keeper"]})})};var b=function(){var e=(new Date).getFullYear();return Object(s.jsx)("footer",{children:Object(s.jsxs)("p",{children:["Copyright \u24d2 ",e]})})},O=n(49),d=n.n(O),x=n(51),f=n.n(x),h=n(84),p=n(50),v=n.n(p);var m=function(e){var t=Object(c.useState)(!1),n=Object(i.a)(t,2),r=n[0],a=n[1];return Object(s.jsxs)("div",{className:"note",children:[Object(s.jsx)("h1",{contentEditable:r,children:e.title}),Object(s.jsx)("p",{style:{maxHeight:"100px",overflow:"scroll"},contentEditable:r,children:e.content}),Object(s.jsx)(h.a,{onClick:function(){e.onDelete(e.id)},children:Object(s.jsx)(d.a,{})}),Object(s.jsx)(h.a,{onClick:function(){a(!r)},children:r?Object(s.jsx)(v.a,{}):Object(s.jsx)(f.a,{})})]})},g=n(6),k=n(44),y=n(52),C=n.n(y),w=n(85);var S=function(e){var t=Object(c.useState)(!1),n=Object(i.a)(t,2),r=n[0],a=n[1],o=Object(c.useState)({title:"",content:""}),j=Object(i.a)(o,2),l=j[0],u=j[1];function b(e){var t=e.target,n=t.name,c=t.value;u((function(e){return Object(k.a)(Object(k.a)({},e),{},Object(g.a)({},n,c))}))}return Object(s.jsx)("div",{children:Object(s.jsxs)("form",{className:"create-note",children:[r?Object(s.jsx)("input",{name:"title",onChange:b,value:l.title,placeholder:"Title"}):null,Object(s.jsx)("textarea",{name:"content",onChange:b,value:l.content,placeholder:"Take a note...",rows:r?"3":"1",onClick:function(){a(!0),console.log(r)}}),Object(s.jsx)(w.a,{in:!!r,children:Object(s.jsx)(h.a,{color:"default",onClick:function(t){e.onAdd(l),u({title:"",content:""}),t.preventDefault()},children:Object(s.jsx)(C.a,{})})})]})})};var D=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];function a(e){r((function(t){return t.filter((function(t,n){return n!==e}))}))}return Object(s.jsxs)("div",{children:[Object(s.jsx)(u,{}),Object(s.jsx)(S,{onAdd:function(e){r((function(t){return[].concat(Object(o.a)(t),[e])}))}}),n.map((function(e,t){return Object(s.jsx)(m,{id:t,title:e.title,content:e.content,onDelete:a},t)})),Object(s.jsx)(b,{})]})};n(68);a.a.render(Object(s.jsx)(D,{}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.12069484.chunk.js.map