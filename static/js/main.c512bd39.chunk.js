(this["webpackJsonpcontacts-app"]=this["webpackJsonpcontacts-app"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),s=n(9),i=n.n(s),o=n(11),l=n(2),r=(n(16),a.a.createContext([])),u=(n(17),n(0)),j=function(){var t=Object(c.useState)(""),e=Object(l.a)(t,2),n=e[0],a=e[1],s=Object(c.useState)("+380"),i=Object(l.a)(s,2),o=i[0],j=i[1],d=Object(c.useState)(""),b=Object(l.a)(d,2),m=b[0],O=b[1],f=Object(c.useState)(""),h=Object(l.a)(f,2),x=h[0],p=h[1],v=Object(c.useState)(""),N=Object(l.a)(v,2),C=N[0],g=N[1],y=Object(c.useContext)(r).addContact,S={name:n,number:o,email:m,birthday:x,info:C,id:+new Date};return Object(u.jsxs)("form",{className:"add-form main__form",onSubmit:function(t){t.preventDefault(),y(S),a(""),j("+380"),O(""),p(""),g("")},children:[Object(u.jsx)("h2",{className:"title",children:"New contact form"}),Object(u.jsxs)("label",{children:["Person's name",Object(u.jsx)("div",{className:"add-field",children:Object(u.jsx)("input",{type:"text",name:"name",placeholder:"Enter full name",className:"input",autoFocus:!0,value:n,onChange:function(t){a(t.target.value)},required:!0})})]}),Object(u.jsxs)("label",{children:["Person's phone number",Object(u.jsx)("div",{className:"add-field",children:Object(u.jsx)("input",{type:"tel",name:"number",placeholder:"Enter phone number",className:"input",value:o,onChange:function(t){j(t.target.value)}})})]}),Object(u.jsxs)("label",{children:["Person's e-mail",Object(u.jsx)("div",{className:"add-field",children:Object(u.jsx)("input",{type:"email",name:"email",placeholder:"Enter e-mail",className:"input",value:m,onChange:function(t){O(t.target.value)}})})]}),Object(u.jsxs)("label",{children:["Person's birthday",Object(u.jsx)("div",{className:"add-field",children:Object(u.jsx)("input",{type:"date",max:"2015-01-01",name:"birthday",className:"input input-birthday",value:x,onChange:function(t){p(t.target.value)}})})]}),Object(u.jsxs)("label",{children:["Person's information",Object(u.jsx)("div",{className:"add-field",children:Object(u.jsx)("textarea",{name:"info",placeholder:"Enter additional information",className:"input add-field-textarea",value:C,onChange:function(t){g(t.target.value)}})})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",className:"button",children:"Add contact"})})]})},d=n(6),b=(n(19),function(){var t,e=Object(d.useContext)(r),n=e.contacts,a=e.selectedId,s=e.selectId,i=e.removeContact,o=Object(c.useState)(""),j=Object(l.a)(o,2),b=j[0],m=j[1],O=b.toLocaleLowerCase();return t=b?n.filter((function(t){return t.name.toLowerCase().startsWith(O)})):n,Object(u.jsx)("div",{className:"contacts-list main__form",children:n.length<1?Object(u.jsx)("h2",{className:"title",children:"No contacts"}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{className:"title",children:"Contacts"}),Object(u.jsx)("input",{className:"input contacts-input",type:"text",name:"query",placeholder:"Enter first letters to find contact",value:b,onChange:function(t){m(t.target.value)}}),t.map((function(t){return Object(u.jsxs)("div",{className:"contacts-item",children:[Object(u.jsx)("strong",{children:t.name.toUpperCase()}),Object(u.jsxs)("div",{className:"contacts-list-buttons",children:[Object(u.jsx)("button",{type:"button",className:"button contacts-list-button",onClick:function(){i(t.id)},disabled:t.id===a,children:"Delete"}),t.id!==a?Object(u.jsx)("button",{type:"button",className:"button contacts-list-button",onClick:function(){s(t.id)},children:"View"}):Object(u.jsx)("button",{type:"button",className:"button contacts-list-button",onClick:function(){s(0)},children:"Close"})]})]},t.id)}))]})})}),m=n(3),O=n(8),f=(n(20),n(10)),h=n.n(f),x=function(t){var e=t.item,n=Object(c.useContext)(r),a=n.changeContact,s=n.selectedId,i=n.contacts,o=Object(c.useState)([e[1]]),j=Object(l.a)(o,2),d=j[0],b=j[1],f=Object(c.useState)(!1),x=Object(l.a)(f,2),p=x[0],v=x[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"contact-info-key",children:"id"!==e[0]?e[0]:""}),Object(u.jsxs)("div",{className:"contact-info-string",children:[Object(u.jsx)("div",{title:"Click to change",className:h()("contact-info-value",{"field-not-active":p}),onClick:function(){v(!p)},children:"id"!==e[0]?e[1]:""}),Object(u.jsx)("div",{children:p?Object(u.jsx)("div",{className:"field-changer",children:Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),function(t){confirm("Do you really want to save changes?")?a(i.map((function(n){return n.id!==t?n:Object(O.a)(Object(O.a)({},n),{},Object(m.a)({},e[0],d))}))):b([e[1]])}(s),v(!1)},children:[Object(u.jsx)("input",{type:"text",value:d,onChange:function(t){b(t.target.value)}}),Object(u.jsx)("button",{type:"submit",className:"field-edit-button",children:"Save changes"}),Object(u.jsx)("button",{type:"button",className:"field-edit-button",onClick:function(){v(!1),b([e[1]])},children:"Cancel"})]})}):"id"===e[0]?"":Object(u.jsx)("button",{type:"button",className:"field-edit-button",onClick:function(){v(!p)},children:"Edit"})})]})]})},p=(n(21),function(){var t=Object(c.useState)(""),e=Object(l.a)(t,2),n=e[0],a=e[1],s=Object(c.useState)(""),i=Object(l.a)(s,2),o=i[0],j=i[1],b=Object(d.useContext)(r).selectedContact,O=null;if(b){O=Object.entries(b);return Object(u.jsxs)("div",{className:"contact-info main__form",children:[Object(u.jsx)("h2",{className:"title",children:"Contact information"}),O.map((function(t){return Object(u.jsx)("section",{className:"contact-info-list",children:Object(u.jsx)(x,{item:t})},Math.random())})),Object(u.jsx)("hr",{}),Object(u.jsx)("h3",{className:"title",children:"Add new notes to this contact"}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),function(t,e){var n=Object(m.a)({},t,e);Object.assign(b,n)}(n,o),a(""),j("")},children:[Object(u.jsxs)("section",{className:"contact-info-inputs",children:[Object(u.jsx)("input",{type:"text",name:"newField",placeholder:"Enter note name",className:"input",value:n,onChange:function(t){a(t.target.value)},required:!0}),Object(u.jsx)("input",{type:"text",name:"newValue",placeholder:"Enter note text",className:"input",value:o,onChange:function(t){j(t.target.value)},required:!0})]}),Object(u.jsx)("button",{type:"submit",className:"button contact-info-button",children:"Add note"})]})]})}});var v=function(){var t=function(t,e){var n=Object(c.useState)((function(){try{return JSON.parse(localStorage.getItem(t))||e}catch(n){return e}})),a=Object(l.a)(n,2),s=a[0],i=a[1];return[s,function(e){i(e),localStorage.setItem(t,JSON.stringify(e))}]}("contacts",[]),e=Object(l.a)(t,2),n=e[0],a=e[1],s=Object(c.useState)(0),i=Object(l.a)(s,2),d=i[0],m=i[1],O=n.find((function(t){return t.id===d}));return Object(u.jsx)("div",{className:"main",children:Object(u.jsxs)(r.Provider,{value:{addContact:function(t){a([].concat(Object(o.a)(n),[t]))},contacts:n,selectedContact:O,selectedId:d,selectId:function(t){m(t)},removeContact:function(t){confirm("Do you really want to delete this contact?")&&a(n.filter((function(e){return t!==e.id})))},changeContact:function(t){a(t)}},children:[Object(u.jsx)(j,{}),Object(u.jsx)(b,{}),0!==d&&Object(u.jsx)(p,{})]})})};n(22);i.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.c512bd39.chunk.js.map