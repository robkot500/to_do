(this.webpackJsonpto_do=this.webpackJsonpto_do||[]).push([[0],{15:function(e,t,n){e.exports=n(27)},20:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(5),l=n.n(i),c=(n(20),n(14)),r=n(1);Object(r.b)((function(e){return{items:e.item}}))((function(e){return console.log(e.items.todos[0].id),o.a.createElement("div",null,o.a.createElement("input",{id:e.items.todos[0].id,type:"checkbox"}),o.a.createElement("label",{htmlFor:e.items.todos[0].id},e.items.todos[0].detail[0].point))})),n(8);var s=Object(r.b)((function(e){return{items:e.item}}),(function(e){return{deleteItem:function(t){e({type:"DELETE",id:t})},pointCheck:function(t){e({type:"CHANGE_CHECK",id:t})}}}))((function(e){console.log(e);var t=function(t){console.log("asdddd",t),e.pointCheck(t)},n=e.items.todos.filter((function(t){return t.id===e.items.selectedItem.id})),a=Object(c.a)(n,1)[0];if(n.length<1)return o.a.createElement("div",{className:"title"},o.a.createElement("div",{className:"title-wrapper"},o.a.createElement("p",null,"You have no todos left")));var i=a.detail.map((function(e){console.log(e.pointMarked);var n=!0===e.pointMarked?o.a.createElement("input",{onClick:function(n){t(e.point)},className:"point-check",id:e.point,type:"checkbox",checked:!0}):o.a.createElement("input",{onClick:function(n){t(e.point)},className:"point-check",id:e.point,type:"checkbox"});return o.a.createElement("div",null,n,o.a.createElement("label",{className:"point-label",htmlFor:e.point},e.point))}));return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"task-container"},o.a.createElement("div",{className:"title"},o.a.createElement("div",{className:"title-wrapper"},o.a.createElement("input",{className:"title-check",type:"checkbox",id:"todo",name:"todo",value:"todo"}),o.a.createElement("label",{className:"title-label",htmlFor:"todo","data-content":a.title},a.title)),o.a.createElement("i",{onClick:function(){var t;t=a.id,e.deleteItem(t)},className:"fas fa-trash-alt"})),i))}));var d=Object(r.b)((function(e,t){return console.log("liiii",t),{items:e.item}}),(function(e){return{deleteItem:function(t){e({type:"DELETE",id:t})},displayTask:function(t){e({type:"DISPLAY_TASK",task:t})},displayDetail:function(t){e({type:"DISPLAY_DETAIL",id:t})}}}))((function(e){console.log(e);var t=e.items.todos.map((function(t){return console.log(t.selected),o.a.createElement("div",{key:t.id,className:"item"},o.a.createElement("div",{className:"title"},o.a.createElement("div",{className:"title-wrapper"},o.a.createElement("input",{className:"title-check",id:t.id,type:"checkbox"}),o.a.createElement("label",{className:"title-label",htmlFor:t.id},t.title)),o.a.createElement("i",{onClick:function(){var n;n=t.id,e.deleteItem(n)},className:"fas fa-trash-alt"})),o.a.createElement("div",{className:"detail"},o.a.createElement("div",{onClick:function(){var n,a;n="task",a=t.id,console.log("aaaa",a),"task"===n&&e.displayTask(n),e.displayDetail(a)},className:"check-detail"},"DETAIL")))}));return o.a.createElement("div",{className:"list-container"},t)}));var p=Object(r.b)((function(e){return{add:e}}),(function(e){return{addNewTask:function(t){e({type:"ADD_NEW_TASK",newTask:t})},displayDetail:function(t){e({type:"DISPLAY_DETAIL",id:t})},display:function(t){e({type:"DISPLAY",id:t})}}}))((function(e){console.log(e);var t={title:null,titleMarked:!1,id:null,detail:[{point:null,pointMarked:!1},{point:null,pointMarked:!1},{point:null,pointMarked:!1}]};console.log(t);var n=function(e){"newTask"===e.target.id&&(t.title=e.target.value,console.log(e.target.value),console.log(t.title)),"pointOne"===e.target.id&&(t.detail[0]={point:e.target.value,pointMarked:!1},console.log(e.target.value),console.log(t.detail)),"pointTwo"===e.target.id&&(t.detail[1]={point:e.target.value,pointMarked:!1}),"pointThree"===e.target.id&&(t.detail[2]={point:e.target.value,pointMarked:!0}),t.id=(new Date).getTime()};return console.log(t),o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{onSubmit:function(n,a){n.preventDefault(),e.addNewTask(t),console.log(t.id),e.displayDetail(t.id),e.display("task")},type:"submit"},o.a.createElement("input",{onChange:n,id:"newTask",type:"text"}),o.a.createElement("label",{htmlFor:"text"},"new task"),o.a.createElement("input",{onChange:n,placeholder:"optional",id:"pointOne",type:"text"}),o.a.createElement("label",{htmlFor:"text"},"point one"),o.a.createElement("input",{onChange:n,placeholder:"optional",id:"pointTwo",type:"text"}),o.a.createElement("label",{htmlFor:"text"},"point two"),o.a.createElement("input",{onChange:n,placeholder:"optional",id:"pointThree",type:"text"}),o.a.createElement("label",{htmlFor:"text"},"point three"),o.a.createElement("button",null,"ADD")))}));var u=Object(r.b)((function(e){return console.log(e),{position:e.position}}),(function(e){return{display:function(t){e({type:"DISPLAY",id:t})}}}))((function(e){console.log("sss",e);var t=function(t){console.log("aaaa",t.target.id),"list"===t.target.id&&e.display(t.target.id),"task"===t.target.id&&e.display(t.target.id),"add"===t.target.id&&e.display(t.target.id)};return o.a.createElement("header",null,o.a.createElement("div",{className:"up"}),o.a.createElement("div",{className:"down"},o.a.createElement("div",{className:"button-wrapper"},o.a.createElement("div",{id:"list",onClick:function(e){return t(e)},className:"list"===e.position.position?"button button-additional":"button"},"LIST"),o.a.createElement("div",{id:"task",onClick:function(e){return t(e)},className:"task"===e.position.position?"button button-additional":"button"},"TASK"),o.a.createElement("div",{id:"add",onClick:function(e){return t(e)},className:"add"===e.position.position?"button button-additional":"button"},"ADD")),o.a.createElement("div",{className:"button-box"})))}));var m=Object(r.b)((function(e){return{position:e.position,items:e.item}}))((function(e){return console.log(e),o.a.createElement("div",{className:"mobile"},o.a.createElement(u,null),"list"===e.position.position?o.a.createElement(d,null):null,"task"===e.position.position?o.a.createElement(s,null):null,"add"===e.position.position?o.a.createElement(p,null):null)}));var E=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m,null))},k=n(3),b=n(2),f={position:"list"},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t.id),t.type){case"DISPLAY":return Object(b.a)(Object(b.a)({},e),{},{position:t.id});case"DISPLAY_TASK":return Object(b.a)(Object(b.a)({},e),{},{position:t.task})}return e},h=n(13),v={todos:[{title:"Get out of bed",titleMarked:!1,id:1,detail:[{point:"wake my wife upGG",pointMarked:!1},{point:"check the weatherGG",pointMarked:!0},{point:"check the weatherGGG",pointMarked:!1}]},{title:"Walk the dog",titleMarked:!1,id:2,detail:[{point:"wake my wife upWW",pointMarked:!0},{point:"check the weatherWW",pointMarked:!1}]}],selectedItem:{id:1}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DELETE":console.log(t.id),console.log(e.selectedItem.id);var n=e.todos.filter((function(e){return e.id!=t.id}));return console.log(e.selectedItem.id),Object(b.a)(Object(b.a)({},e),{},{todos:n,selectedItem:n[0]});case"DISPLAY_DETAIL":return console.log(t.id),Object(b.a)(Object(b.a)({},e),{},{selectedItem:{id:t.id}});case"ADD_NEW_TASK":return console.log(t.newTask.id),console.log(t.newTask),Object(b.a)(Object(b.a)({},e),{},{todos:[].concat(Object(h.a)(e.todos),[t.newTask]),selectedItem:{id:t.newTask.id}});case"CHANGE_CHECK":console.log(e.todos),console.log(t.id);e.todos.map((function(e){console.log(e.detail[0].pointMarked);e.detail.map((function(e){console.log(e.pointMarked),t.id===e.point&&(!1===e.pointMarked?e.pointMarked=!0:e.pointMarked=!1)}))}));return Object(b.a)({},e)}return e},N=Object(k.b)({position:g,item:y}),w=Object(k.c)(N);l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(r.a,{store:w},o.a.createElement(E,null))),document.getElementById("root"))},8:function(e,t,n){e.exports=n.p+"static/media/alarm.8ad1d90d.mp3"}},[[15,1,2]]]);
//# sourceMappingURL=main.4fc0552f.chunk.js.map