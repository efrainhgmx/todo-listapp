(this["webpackJsonptodolist-app"]=this["webpackJsonptodolist-app"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c(6),r=c.n(o),a=(c(12),c(5)),l=c(7),i=c(0),s=function(e){var t=e.todo,c=e.toggleTodo,n=t.id,o=t.task,r=t.completed;return Object(i.jsxs)("li",{children:[Object(i.jsx)("input",{type:"checkbox",id:n,checked:r,onChange:function(){c(n)}}),Object(i.jsx)("label",{htmlFor:n,children:o})]})},u=function(e){var t=e.todos,c=e.toggleTodo;return Object(i.jsx)("ul",{children:t.map((function(e){return Object(i.jsx)(s,{todo:e,toggleTodo:c},e.id)}))})},d=c(16),j="todoApp.todos",b=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],o=t[1],r=Object(n.useRef)();Object(n.useEffect)((function(){localStorage.setItem(j,JSON.stringify(c))}),[c]),Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem(j));e&&o(e)}),[]);return Object(i.jsxs)("main",{children:[Object(i.jsx)("h1",{children:"Lista de Tareas"}),Object(i.jsx)(u,{todos:c,toggleTodo:function(e){var t=Object(a.a)(c),n=t.find((function(t){return t.id===e}));n.completed=!n.completed,o(t)}}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("Se hizo submit")},children:[Object(i.jsx)("input",{className:"input-text",ref:r,type:"text",placeholder:"Nueva tarea"}),Object(i.jsx)("button",{onClick:function(){var e=r.current.value;""!==e&&(o((function(t){return[].concat(Object(a.a)(t),[{id:Object(d.a)(),task:e,completed:!1}])})),r.current.value=null)},children:"\ud83d\udcdd"}),Object(i.jsx)("button",{onClick:function(){var e=c.filter((function(e){return!e.completed}));o(e)},children:"\ud83d\uddd1"})]}),Object(i.jsxs)("p",{children:["Te quedan ",c.filter((function(e){return!e.completed})).length," tareas por hacer."]}),Object(i.jsx)("p",{children:"(Para a\xf1adir una tarea escribela y da cl\xedck en el bot\xf3n verde, para borrar la tarea debes haberla completado marcando el cuadro blanco y despu\xe9s dar cl\xedck en el bot\xf3n rojo). "})]})};r.a.render(Object(i.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.c0b3591e.chunk.js.map