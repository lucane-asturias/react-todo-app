(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(t,e,a){},function(t,e,a){},,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(2),o=a.n(n),s=a(10),i=a.n(s),c=(a(16),a(3)),d=a(4),l=a(6),r=a(5),h=a(7),u=a(11),b=a(1),j=a(8),p=a(24),O=(a(17),a(0)),m=function(t){Object(l.a)(a,t);var e=Object(r.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t)).state={task:""},n.handleChange=n.handleChange.bind(Object(b.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(b.a)(n)),n}return Object(d.a)(a,[{key:"handleChange",value:function(t){this.setState(Object(j.a)({},t.target.name,t.target.value))}},{key:"handleSubmit",value:function(t){t.preventDefault(),this.props.createTodo(Object(h.a)(Object(h.a)({},this.state),{},{id:Object(p.a)(),completed:!1})),this.setState({task:""})}},{key:"render",value:function(){return Object(O.jsxs)("form",{className:"NewTodoForm",onSubmit:this.handleSubmit,children:[Object(O.jsx)("label",{htmlFor:"task",children:"New Todo"}),Object(O.jsx)("input",{type:"text",placeholder:"New Todo",id:"task",name:"task",value:this.state.task,onChange:this.handleChange}),Object(O.jsx)("button",{children:"Add Todo"})]})}}]),a}(n.Component),g=(a(19),function(t){Object(l.a)(a,t);var e=Object(r.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t)).state={isEditing:!1,task:n.props.task},n.handleRemove=n.handleRemove.bind(Object(b.a)(n)),n.toggleForm=n.toggleForm.bind(Object(b.a)(n)),n.handleChange=n.handleChange.bind(Object(b.a)(n)),n.handleUpdate=n.handleUpdate.bind(Object(b.a)(n)),n.handleToggle=n.handleToggle.bind(Object(b.a)(n)),n}return Object(d.a)(a,[{key:"handleRemove",value:function(){this.props.removeTodo(this.props.id)}},{key:"toggleForm",value:function(){this.setState({isEditing:!this.state.isEditing})}},{key:"handleUpdate",value:function(t){t.preventDefault(),this.props.updateTodo(this.props.id,this.state.task),this.setState({isEditing:!1})}},{key:"handleChange",value:function(t){this.setState(Object(j.a)({},t.target.name,t.target.value))}},{key:"handleToggle",value:function(t){this.props.toggleTodo(this.props.id)}},{key:"render",value:function(){return this.state.isEditing?Object(O.jsx)("div",{className:"Todo",children:Object(O.jsx)("form",{className:"Todo-edit-form",onSubmit:this.handleUpdate,children:Object(O.jsx)("input",{type:"text",value:this.state.task,name:"task",onChange:this.handleChange})})}):Object(O.jsxs)("div",{className:"Todo",children:[Object(O.jsx)("li",{className:this.props.completed?"Todo-task completed":"Todo-task",onClick:this.handleToggle,children:this.props.task}),Object(O.jsxs)("div",{className:"Todo-buttons",children:[Object(O.jsx)("button",{onClick:this.toggleForm,children:Object(O.jsx)("i",{className:"fas fa-pen"})}),Object(O.jsx)("button",{onClick:this.handleRemove,children:Object(O.jsx)("i",{className:"fas fa-trash"})})]})]})}}]),a}(n.Component)),v=(a(20),function(t){Object(l.a)(a,t);var e=Object(r.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t)).state={todos:[]},n.create=n.create.bind(Object(b.a)(n)),n.remove=n.remove.bind(Object(b.a)(n)),n.update=n.update.bind(Object(b.a)(n)),n.toggleCompletion=n.toggleCompletion.bind(Object(b.a)(n)),n}return Object(d.a)(a,[{key:"create",value:function(t){this.setState({todos:[].concat(Object(u.a)(this.state.todos),[t])})}},{key:"remove",value:function(t){this.setState({todos:this.state.todos.filter((function(e){return e.id!==t}))})}},{key:"update",value:function(t,e){var a=this.state.todos.map((function(a){return a.id===t?Object(h.a)(Object(h.a)({},a),{},{task:e}):a}));this.setState({todos:a})}},{key:"toggleCompletion",value:function(t){var e=this.state.todos.map((function(e){return e.id===t?Object(h.a)(Object(h.a)({},e),{},{completed:!e.completed}):e}));this.setState({todos:e})}},{key:"render",value:function(){var t=this,e=this.state.todos.map((function(e){return Object(O.jsx)(g,{id:e.id,task:e.task,completed:e.completed,removeTodo:t.remove,updateTodo:t.update,toggleTodo:t.toggleCompletion},e.id)}));return Object(O.jsxs)("div",{className:"TodoList",children:[Object(O.jsxs)("h1",{children:["Todo List!",Object(O.jsx)("span",{children:"A Simple React Todo List App"})]}),Object(O.jsx)("ul",{children:e}),Object(O.jsx)(m,{createTodo:this.create})]})}}]),a}(n.Component)),f=(a(21),function(t){Object(l.a)(a,t);var e=Object(r.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)(v,{})})}}]),a}(n.Component)),k=f,T=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,25)).then((function(e){var a=e.getCLS,n=e.getFID,o=e.getFCP,s=e.getLCP,i=e.getTTFB;a(t),n(t),o(t),s(t),i(t)}))};i.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(k,{})}),document.getElementById("root")),T()}],[[22,1,2]]]);
//# sourceMappingURL=main.129c648f.chunk.js.map