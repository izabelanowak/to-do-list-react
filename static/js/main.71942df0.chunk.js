(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),o=n(7),a=n.n(o),i=(n(13),n(8)),r=n(4),u=n(3),l=(n(14),n(0)),d=function(t){var e=t.addNewTask,n=Object(c.useState)(""),s=Object(u.a)(n,2),o=s[0],a=s[1],i=Object(c.useRef)(null);return Object(l.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault();var n=o.trim();n&&(e(n),a(""))},children:[Object(l.jsx)("input",{ref:i,value:o,className:"form__input",placeholder:"Co jest do zrobienia?",onChange:function(t){var e=t.target;return a(e.value)}}),Object(l.jsx)("button",{className:"form__button",onClick:function(){i.current.focus()},children:"Dodaj zadanie"})]})},j=(n(16),function(t){var e=t.tasks,n=t.hideDone,c=t.removeTask,s=t.toggleTaskDone;return Object(l.jsx)("ul",{className:"tasks",children:e.map((function(t){return Object(l.jsxs)("li",{className:"tasks__item".concat(t.done&&n?" tasks__item--hidden":""),children:[Object(l.jsx)("button",{className:"tasks__button tasks__button--toggleDone",onClick:function(){return s(t.id)},children:t.done?"\u2714":""}),Object(l.jsx)("span",{className:"tasks__content".concat(t.done?" tasks__content--done":""),children:t.content}),Object(l.jsx)("button",{className:"tasks__button tasks__button--remove",onClick:function(){return c(t.id)},children:"\ud83d\uddd1"})]},t.id)}))})}),b=(n(17),function(t){var e=t.tasks,n=t.hideDone,c=t.toggleHideDone,s=t.setAllDone;return Object(l.jsx)("div",{className:"buttons",children:e.length>0&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("button",{className:"buttons__button",onClick:c,children:[n?"Poka\u017c":"Ukryj"," uko\u0144czone"]}),Object(l.jsx)("button",{className:"buttons__button",disabled:e.every((function(t){return t.done})),onClick:s,children:"Uko\u0144cz wszystkie"})]})})}),f=(n(18),function(t){var e=t.title,n=t.body,c=t.extraHeaderContent;return Object(l.jsxs)("section",{className:"section",children:[Object(l.jsxs)("header",{className:"section__header",children:[Object(l.jsx)("h2",{className:"section__title",children:e}),c]}),Object(l.jsx)("div",{className:"section__body",children:n})]})}),O=function(t){var e=t.title;return Object(l.jsx)("header",{children:Object(l.jsx)("h1",{children:e})})},h=(n(19),function(t){var e=t.children;return Object(l.jsx)("main",{className:"container",children:e})});var m=function(){var t=Object(c.useState)(!1),e=Object(u.a)(t,2),n=e[0],s=e[1],o=Object(c.useState)(JSON.parse(localStorage.getItem("tasks")||[])),a=Object(u.a)(o,2),m=a[0],k=a[1];return Object(c.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(m))}),[m]),Object(l.jsxs)(h,{children:[Object(l.jsx)(O,{title:"Lista zada\u0144"}),Object(l.jsx)(f,{title:"Dodaj nowe zadanie",body:Object(l.jsx)(d,{addNewTask:function(t){k((function(e){return[].concat(Object(i.a)(e),[{content:t,done:!1,id:e.length?e[e.length-1].id+1:1}])}))}})}),Object(l.jsx)(f,{title:"Lista zada\u0144",body:Object(l.jsx)(j,{tasks:m,hideDone:n,removeTask:function(t){k((function(e){return e.filter((function(e){return e.id!==t}))}))},toggleTaskDone:function(t){k((function(e){return e.map((function(e){return e.id===t?Object(r.a)(Object(r.a)({},e),{},{done:!e.done}):e}))}))}}),extraHeaderContent:Object(l.jsx)(b,{tasks:m,hideDone:n,toggleHideDone:function(){s((function(t){return!t}))},setAllDone:function(){k((function(t){return t.map((function(t){return Object(r.a)(Object(r.a)({},t),{},{done:!0})}))}))}})})]})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),c(t),s(t),o(t),a(t)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),k()}],[[20,1,2]]]);
//# sourceMappingURL=main.71942df0.chunk.js.map