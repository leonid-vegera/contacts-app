(this["webpackJsonpcontacts-app"]=this["webpackJsonpcontacts-app"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(6),a=c.n(s),i=c(7),l=c(2),o=(c(12),c(0));var d=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(0),i=Object(l.a)(a,2),d=i[0],u=i[1],m=c.find((function(e){return e.id===d}));return Object(o.jsxs)("div",{className:"main",children:[Object(o.jsxs)("div",{className:"main-left",children:[Object(o.jsx)(r,{contacts:c,setContacts:s}),0===c.length?Object(o.jsx)("h2",{className:"title",children:"No contacts added yet"}):Object(o.jsx)(j,{contacts:c,setContacts:s,setSelectedId:u,selectedId:d})]}),0!==d&&Object(o.jsx)("div",{className:"main-right",children:Object(o.jsx)(b,{contact:m})})]})},r=function(e){var t=e.setContacts,c=e.contacts,s=Object(n.useState)(""),a=Object(l.a)(s,2),d=a[0],r=a[1],j=Object(n.useState)(""),b=Object(l.a)(j,2),u=b[0],m=b[1],O=Object(n.useState)(""),h=Object(l.a)(O,2),x=h[0],f=h[1];return Object(o.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),function(e,n,s){var a={name:e,number:n,email:s,id:+new Date};t([].concat(Object(i.a)(c),[a]))}(d,u,x),r(""),m(""),f("")},children:[Object(o.jsx)("h2",{className:"title",children:"New contact form"}),Object(o.jsx)("div",{className:"add-field",children:Object(o.jsxs)("label",{children:["Person's name",Object(o.jsx)("div",{children:Object(o.jsx)("input",{type:"text",name:"name",placeholder:"Enter new name",value:d,onChange:function(e){r(e.target.value)},required:!0})})]})}),Object(o.jsx)("div",{children:Object(o.jsxs)("label",{children:["Person's phone number",Object(o.jsx)("div",{className:"add-field",children:Object(o.jsx)("input",{type:"tel",name:"number",placeholder:"Enter phone number",value:u,onChange:function(e){m(e.target.value)}})})]})}),Object(o.jsx)("div",{children:Object(o.jsxs)("label",{children:["Person's e-mail",Object(o.jsx)("div",{className:"add-field",children:Object(o.jsx)("input",{type:"email",name:"email",placeholder:"Enter e-mail",value:x,onChange:function(e){f(e.target.value)}})})]})}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{type:"submit",children:"Add contact"})})]})},j=function(e){var t=e.contacts,c=e.setContacts,n=e.setSelectedId,s=e.selectedId;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"contacts-list",children:[Object(o.jsx)("h2",{className:"title",children:"Contacts"}),t.map((function(e){return Object(o.jsxs)("div",{className:"contacts-item",children:[Object(o.jsx)("strong",{children:e.name.toUpperCase()}),Object(o.jsxs)("div",{className:"contacts-list-buttons",children:[Object(o.jsx)("button",{className:"contacts-list-button",onClick:function(){c(t.filter((function(t){return e.id!==t.id})))},disabled:e.id===s,children:"Delete"}),e.id!==s?Object(o.jsx)("button",{className:"contacts-list-button",onClick:function(){n(e.id)},children:"Open"}):Object(o.jsx)("button",{className:"contacts-list-button",onClick:function(){n(0)},children:"Close"})]})]},e.id)}))]})})},b=function(e){var t=e.contact,c=null;if(t)return c=Object.entries(t),console.log(c),Object(o.jsxs)("div",{className:"contact-info",children:[Object(o.jsx)("h2",{className:"title",children:"Contact information"}),c.map((function(e){return Object(o.jsxs)("section",{className:"contact-info-list",children:[Object(o.jsx)("div",{className:"contact-info-key",children:e[0]}),Object(o.jsx)("div",{children:e[1]})]},Math.random())}))]})};c(14);a.a.render(Object(o.jsx)(d,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.23f49b5e.chunk.js.map