(this.webpackJsonpto_do=this.webpackJsonpto_do||[]).push([[0],{130:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),i=n(13),l=n.n(i),c=(n(68),n(26)),r=n(7);Object(r.b)((function(e){return{items:e.item}}))((function(e){return console.log(e.items.todos[0].id),o.a.createElement("div",null,o.a.createElement("input",{id:e.items.todos[0].id,type:"checkbox"}),o.a.createElement("label",{htmlFor:e.items.todos[0].id},e.items.todos[0].detail[0].point))})),n(37);var s=Object(r.b)((function(e){return console.log(e),{items:e.item,position:e.position}}),(function(e){return{deleteItem:function(t){e({type:"DELETE",id:t})},pointCheck:function(t){e({type:"CHANGE_CHECK",id:t})},titleCheckTask:function(t){e({type:"CHANGE_TITLE_TASK",each:t})},display:function(t,n){e({type:"DISPLAY",task:t,id:n})},editTask:function(t){e({type:"EDIT_TASK",id:t})},editTaskState:function(){e({type:"EDIT_TASK_STATE"})}}}))((function(e){console.log(e);var t=function(t){console.log(t),e.titleCheckTask(t)},n=e.items.todos.filter((function(t){return t.id===e.items.selectedItem.id}));e.items.todos.filter((function(e){return!0===e.edit})),Object(a.useEffect)((function(){e.editTaskState()}),[]);var i=Object(c.a)(n,1)[0];if(n.length<1)return o.a.createElement("div",{className:"title"},o.a.createElement("div",{className:"title-wrapper"},o.a.createElement("p",null,"You have no todos left")));console.log(i.detail);var l=i.detail.map((function(t){if(null!=t.point)return o.a.createElement("div",{key:t.point},o.a.createElement("input",{onClick:function(n){!function(t){e.pointCheck(t)}(t.point)},className:"point-check",id:t.point,type:"checkbox",checked:t.pointMarked}),o.a.createElement("label",{className:"point-label",htmlFor:t.point},t.point))}));return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"task-container"},o.a.createElement("div",{className:"title"},o.a.createElement("div",{className:"title-wrapper"},o.a.createElement("input",{onClick:function(e){t(n[0])},className:"title-check",id:n[0].title,type:"checkbox",checked:n[0].titleMarked}),o.a.createElement("label",{onClick:function(e){t(n[0])},className:"title-label",htmlFor:"todo","data-content":i.title},i.title)),o.a.createElement("i",{onClick:function(){var t;t=i.id,e.deleteItem(t)},className:"fas fa-trash-alt"})),l,o.a.createElement("div",null,null!=n[0].date?n[0].date.toLocaleDateString():null),o.a.createElement("button",{onClick:function(){var t,a;t=n[0].id,a="add",e.display(t,a),e.editTask(t)}},"EDIT")))}));var d=Object(r.b)((function(e,t){return console.log("liiii",t),{items:e.item,position:e.position}}),(function(e){return{deleteItem:function(t){e({type:"DELETE",id:t})},displayTask:function(t){e({type:"DISPLAY_TASK",task:t})},displayDetail:function(t){e({type:"DISPLAY_DETAIL",id:t})},changeTitleList:function(t){e({type:"CHANGE_TITLE_LIST",each:t})}}}))((function(e){console.log(e);var t=e.items.todos.sort((function(e,t){return e.id-t.id}));console.log(t);var n=function(t){e.changeTitleList(t)};if(e.items.todos.length<1)return o.a.createElement("div",{className:"title"},o.a.createElement("div",{className:"title-wrapper"},o.a.createElement("p",null,"You have no todos left")));var a=e.items.todos.map((function(t){return o.a.createElement("div",{key:t.id,className:"item"},o.a.createElement("div",{className:"title"},o.a.createElement("div",{className:"title-wrapper"},o.a.createElement("input",{onClick:function(e){n(t)},className:"title-check",id:t.title,type:"checkbox",checked:t.titleMarked}),o.a.createElement("label",{onClick:function(e){n(t)},className:"title-label",htmlFor:"todo","data-content":t.title},t.title)),o.a.createElement("i",{onClick:function(){var n;n=t.id,e.deleteItem(n)},className:"fas fa-trash-alt"})),o.a.createElement("div",{className:"detail"},o.a.createElement("div",{onClick:function(){var n,a;n="task",a=t.id,"task"===n&&e.displayTask(n),e.displayDetail(a)},className:"check-detail"},"DETAIL")))}));return o.a.createElement("div",{className:"list-container"},a)})),u=n(60),p=n.n(u);n(73);var m=Object(r.b)((function(e,t){return{add:e,position:t.position}}),(function(e){return{addNewTask:function(t){e({type:"ADD_NEW_TASK",newTask:t})},displayDetail:function(t){e({type:"DISPLAY_DETAIL",id:t})},display:function(t){e({type:"DISPLAY",id:t})}}}))((function(e){console.log(e),console.log(e.add.item.todos);var t=e.add.item.todos.filter((function(e){return!0===e.edit}));console.log(t);var n=Object(a.useState)(null),i=Object(c.a)(n,2),l=i[0],r=i[1],s=Object(a.useState)(t.length>0?(console.log("bbb"),t[0]):{title:null,titleMarked:!1,id:null,date:null,detail:[{point:null,pointMarked:!1},{point:null,pointMarked:!1},{point:null,pointMarked:!1}]}),d=Object(c.a)(s,2),u=d[0],m=d[1];console.log(u.title);var f=function(e){m({newTask:u,title:null})},b=function(e){"newTask"===e.target.id&&(u.title=e.target.value,console.log(u.title)),"pointOne"===e.target.id&&(u.detail[0]={point:e.target.value,pointMarked:!1}),"pointTwo"===e.target.id&&(u.detail[1]={point:e.target.value,pointMarked:!1}),"pointThree"===e.target.id&&(u.detail[2]={point:e.target.value,pointMarked:!1}),u.id=(new Date).getTime()};return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{onSubmit:function(n,a){n.preventDefault(),u.date=l,e.displayDetail(u.id),e.display("task"),console.log(u),t.length>0?console.log("bbb"):e.addNewTask(u)},type:"submit"},o.a.createElement("input",{onChange:b,onMouseDown:f,onMouseLeave:function(e){m({newTask:u,title:e.target.value})},value:t.length<1?null:(console.log(u.title),u.title),id:"newTask",type:"text"}),o.a.createElement("label",{htmlFor:"text"},"new task"),o.a.createElement("input",{onChange:b,onMouseDown:f,onFocus:"value=''",value:t.length<1?null:t[0].detail[0]?t[0].detail[0].point:null,placeholder:"optional",id:"pointOne",type:"text"}),o.a.createElement("label",{htmlFor:"text"},"point one"),o.a.createElement("input",{onChange:b,onMouseDown:f,onFocus:"value=''",value:t.length<1?null:t[0].detail[1]?t[0].detail[1].point:null,placeholder:"optional",id:"pointTwo",type:"text"}),o.a.createElement("label",{htmlFor:"text"},"point two"),o.a.createElement("input",{onChange:b,onMouseDown:f,onFocus:"value=''",value:t.length<1?null:t[0].detail[2]?t[0].detail[2].point:null,placeholder:"optional",id:"pointThree",type:"text"}),o.a.createElement("label",{htmlFor:"text"},"point three"),o.a.createElement(p.a,{selected:l,onChange:function(e){return function(e){r(e)}(e)},timeInputLabel:"Time:",dateFormat:"MM/dd/yyyy h:mm aa",showTimeInput:!0,placeholderText:"Click to select a date"}),o.a.createElement("button",null,"ADD")))}));var f=Object(r.b)((function(e){return console.log(e),{position:e.position}}),(function(e){return{display:function(t){e({type:"DISPLAY",id:t})}}}))((function(e){console.log("sss",e);var t=function(t){console.log("aaaa",t.target.id),"list"===t.target.id&&e.display(t.target.id),"task"===t.target.id&&e.display(t.target.id),"add"===t.target.id&&e.display(t.target.id)};return o.a.createElement("header",null,o.a.createElement("div",{className:"up"}),o.a.createElement("div",{className:"down"},o.a.createElement("div",{className:"button-wrapper"},o.a.createElement("div",{id:"list",onClick:function(e){return t(e)},className:"list"===e.position.position?"button button-additional":"button"},"LIST"),o.a.createElement("div",{id:"task",onClick:function(e){return t(e)},className:"task"===e.position.position?"button button-additional":"button"},"TASK"),o.a.createElement("div",{id:"add",onClick:function(e){return t(e)},className:"add"===e.position.position?"button button-additional":"button"},"ADD")),o.a.createElement("div",{className:"button-box"})))}));var b=Object(r.b)((function(e){return{position:e.position,items:e.item}}))((function(e){return console.log(e),o.a.createElement("div",{className:"mobile"},o.a.createElement(f,null),"list"===e.position.position?o.a.createElement(d,null):null,"task"===e.position.position?o.a.createElement(s,null):null,"add"===e.position.position?o.a.createElement(m,null):null)}));var E=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(b,null))},k=n(16),g=n(4),h={position:"list"},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DISPLAY":return console.log(t),console.log(e),Object(g.a)(Object(g.a)({},e),{},{position:t.id});case"DISPLAY_TASK":return Object(g.a)(Object(g.a)({},e),{},{position:t.task})}return e},T=n(20),O={todos:[{title:"Get out of bed",titleMarked:!1,id:1,date:new Date(2021,11,24,10,33),edit:!1,detail:[{point:"wake my wife upGG",pointMarked:!1},{point:"check the weatherGG",pointMarked:!1},{point:"check the weatherGGG",pointMarked:!1}]},{title:"Walk the dog",titleMarked:!1,id:2,date:new Date(2022,11,24,10,33),edit:!1,detail:[{point:"wake my wife upWW",pointMarked:!1},{point:"check the weatherWW",pointMarked:!1}]}],selectedItem:{id:1}},j=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"DELETE":var a=t.todos.filter((function(e){return e.id!=n.id}));return Object(g.a)(Object(g.a)({},t),{},{todos:a,selectedItem:a[0]});case"DISPLAY_DETAIL":return Object(g.a)(Object(g.a)({},t),{},{selectedItem:{id:n.id}});case"ADD_NEW_TASK":return Object(g.a)(Object(g.a)({},t),{},{todos:[].concat(Object(T.a)(t.todos),[n.newTask]),selectedItem:{id:n.newTask.id}});case"CHANGE_CHECK":var o=t.todos.map((function(e){return Object(g.a)(Object(g.a)({},e),{},{detail:e.detail.map((function(e){return n.id!==e.point?e:Object(g.a)(Object(g.a)({},e),{},{pointMarked:!e.pointMarked})}))})}));return Object(g.a)(Object(g.a)({},t),{},{todos:o});case"CHANGE_TITLE_TASK":console.log(t.todos),console.log(n.each);var i=t.todos.find((function(e){return e===n.each})),l=t.todos.filter((function(e){return e!=i}));return console.log(i),console.log(i.titleMarked),console.log(t),Object(g.a)(Object(g.a)({},t),{},{todos:[].concat(Object(T.a)(l),[Object(g.a)(Object(g.a)({},i),{},{titleMarked:!i.titleMarked})])});case"CHANGE_TITLE_LIST":console.log(n.each);var c=t.todos.find((function(e){return e===n.each})),r=t.todos.filter((function(e){return e!=c}));return console.log(c),(e=console).log.apply(e,Object(T.a)(t.todos)),console.log(t),Object(g.a)(Object(g.a)({},t),{},{todos:[].concat(Object(T.a)(r),[Object(g.a)(Object(g.a)({},c),{},{titleMarked:!c.titleMarked})])});case"EDIT_TASK":console.log(t.todos),console.log(n.id);var s=t.todos.filter((function(e){return e.id===n.id})),d=t.todos.filter((function(e){return e.id!=n.id}));return s[0].edit=!s[0].edit,console.log(s),Object(g.a)(Object(g.a)({},t),{},{todos:[].concat(Object(T.a)(d),[s[0]])});case"EDIT_TASK_STATE":console.log(t.todos),console.log(n.task);var u=t.todos.map((function(e){return Object(g.a)(Object(g.a)({},e),{},{edit:!1})}));return console.log(u),Object(g.a)(Object(g.a)({},t),{},{todos:u})}return t},y=Object(k.b)({position:v,item:j}),D=Object(k.c)(y);l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(r.a,{store:D},o.a.createElement(E,null))),document.getElementById("root"))},37:function(e,t,n){e.exports=n.p+"static/media/alarm.8ad1d90d.mp3"},63:function(e,t,n){e.exports=n(130)},68:function(e,t,n){}},[[63,1,2]]]);
//# sourceMappingURL=main.0f781c57.chunk.js.map