(this.webpackJsonpto_do=this.webpackJsonpto_do||[]).push([[0],{130:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),i=n(14),l=n.n(i),c=(n(69),n(13)),r=n(7);Object(r.b)((function(t){return{items:t.item}}))((function(t){return console.log(t.items.todos[0].id),o.a.createElement("div",null,o.a.createElement("input",{id:t.items.todos[0].id,type:"checkbox"}),o.a.createElement("label",{htmlFor:t.items.todos[0].id},t.items.todos[0].detail[0].point))})),n(37);var d=Object(r.b)((function(t){return console.log(t),{items:t.item,position:t.position}}),(function(t){return{deleteItem:function(e){t({type:"DELETE",id:e})},pointCheck:function(e){t({type:"CHANGE_CHECK",id:e})},titleCheckTask:function(e){t({type:"CHANGE_TITLE_TASK",each:e})},display:function(e,n){t({type:"DISPLAY",task:e,id:n})},editTask:function(e){t({type:"EDIT_TASK",id:e})},editTaskState:function(){t({type:"EDIT_TASK_STATE"})}}}))((function(t){console.log(t);var e=function(e){console.log(e),t.titleCheckTask(e)};console.log(t.items);var n=t.items.todos.filter((function(e){return console.log(t.items.selectedItem),console.log(t.items.selectedItem.id),e.id===t.items.selectedItem.id}));t.items.todos.filter((function(t){return!0===t.edit})),Object(a.useEffect)((function(){t.editTaskState()}),[]);var i=Object(c.a)(n,1)[0];if(n.length<1)return o.a.createElement("div",{className:"title"},o.a.createElement("div",{className:"title-wrapper"},o.a.createElement("p",null,"You have no todos left")));console.log(i.detail);var l=i.detail.map((function(e){if(null!=e.point)return o.a.createElement("div",{key:e.point},o.a.createElement("input",{onClick:function(n){!function(e){t.pointCheck(e)}(e.point)},className:"point-check",id:e.point,type:"checkbox",checked:e.pointMarked}),o.a.createElement("label",{className:"point-label",htmlFor:e.point},e.point))}));return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"task-container"},o.a.createElement("div",{className:"title"},o.a.createElement("div",{className:"title-wrapper"},o.a.createElement("input",{onClick:function(t){e(n[0])},className:"title-check",id:n[0].title,type:"checkbox",checked:n[0].titleMarked}),o.a.createElement("label",{onClick:function(t){e(n[0])},className:"title-label",htmlFor:"todo","data-content":i.title},i.title)),o.a.createElement("i",{onClick:function(){var e;e=i.id,t.deleteItem(e)},className:"fas fa-trash-alt"})),l,o.a.createElement("div",null,null!=n[0].date?n[0].date.toLocaleDateString():null),o.a.createElement("button",{onClick:function(){var e,a;e=n[0].id,a="edit",t.display(e,a),t.editTask(e)}},"EDIT")))}));var s=Object(r.b)((function(t,e){return console.log("liiii",e),{items:t.item,position:t.position}}),(function(t){return{deleteItem:function(e){t({type:"DELETE",id:e})},displayTask:function(e){t({type:"DISPLAY_TASK",task:e})},displayDetail:function(e){t({type:"DISPLAY_DETAIL",id:e})},changeTitleList:function(e){t({type:"CHANGE_TITLE_LIST",each:e})}}}))((function(t){console.log(t);var e=t.items.todos.sort((function(t,e){return t.id-e.id}));console.log(e);var n=function(e){t.changeTitleList(e)};if(t.items.todos.length<1)return o.a.createElement("div",{className:"title"},o.a.createElement("div",{className:"title-wrapper"},o.a.createElement("p",null,"You have no todos left")));var a=t.items.todos.map((function(e){return o.a.createElement("div",{key:e.id,className:"item"},o.a.createElement("div",{className:"title"},o.a.createElement("div",{className:"title-wrapper"},o.a.createElement("input",{onClick:function(t){n(e)},className:"title-check",id:e.title,type:"checkbox",checked:e.titleMarked}),o.a.createElement("label",{onClick:function(t){n(e)},className:"title-label",htmlFor:"todo","data-content":e.title},e.title)),o.a.createElement("i",{onClick:function(){var n;n=e.id,t.deleteItem(n)},className:"fas fa-trash-alt"})),o.a.createElement("div",{className:"detail"},o.a.createElement("div",{onClick:function(){var n,a;n="task",a=e.id,"task"===n&&t.displayTask(n),t.displayDetail(a)},className:"check-detail"},"DETAIL")))}));return o.a.createElement("div",{className:"list-container"},a)})),u=n(38),p=n.n(u);n(51);var m=Object(r.b)((function(t,e){return{add:t,position:e.position}}),(function(t){return{addNewTask:function(e){t({type:"ADD_NEW_TASK",newTask:e})},displayDetail:function(e){t({type:"DISPLAY_DETAIL",id:e})},display:function(e){t({type:"DISPLAY",id:e})}}}))((function(t){console.log(t),console.log(t.add.item.todos);var e=Object(a.useState)(null),n=Object(c.a)(e,2),i=n[0],l=n[1],r=Object(a.useState)({title:null,titleMarked:!1,id:null,date:null,detail:[{point:null,pointMarked:!1},{point:null,pointMarked:!1},{point:null,pointMarked:!1}]}),d=Object(c.a)(r,2),s=d[0];d[1],console.log(s.title);var u=function(t){"newTask"===t.target.id&&(s.title=t.target.value,console.log(s.title)),"pointOne"===t.target.id&&(s.detail[0]={point:t.target.value,pointMarked:!1}),"pointTwo"===t.target.id&&(s.detail[1]={point:t.target.value,pointMarked:!1}),"pointThree"===t.target.id&&(s.detail[2]={point:t.target.value,pointMarked:!1}),s.id=(new Date).getTime()};return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{onSubmit:function(e,n){e.preventDefault(),s.date=i,t.displayDetail(s.id),t.addNewTask(s),t.display("task"),console.log(s)},type:"submit"},o.a.createElement("input",{onChange:u,id:"newTask",type:"text"}),o.a.createElement("label",{htmlFor:"text"},"new task"),o.a.createElement("input",{onChange:u,placeholder:"optional",id:"pointOne",type:"text"}),o.a.createElement("label",{htmlFor:"text"},"point one"),o.a.createElement("input",{onChange:u,placeholder:"optional",id:"pointTwo",type:"text"}),o.a.createElement("label",{htmlFor:"text"},"point two"),o.a.createElement("input",{onChange:u,placeholder:"optional",id:"pointThree",type:"text"}),o.a.createElement("label",{htmlFor:"text"},"point three"),o.a.createElement(p.a,{selected:i,onChange:function(t){return function(t){l(t)}(t)},timeInputLabel:"Time:",dateFormat:"MM/dd/yyyy h:mm aa",showTimeInput:!0,placeholderText:"Click to select a date"}),o.a.createElement("button",null,"ADD")))}));var b=Object(r.b)((function(t){return console.log(t),{position:t.position}}),(function(t){return{display:function(e){t({type:"DISPLAY",id:e})}}}))((function(t){console.log("sss",t);var e=function(e){console.log("aaaa",e.target.id),"list"===e.target.id&&t.display(e.target.id),"task"===e.target.id&&t.display(e.target.id),"add"===e.target.id&&t.display(e.target.id),"edit"===e.target.id&&t.display(e.target.id)};return o.a.createElement("header",null,o.a.createElement("div",{className:"up"}),o.a.createElement("div",{className:"down"},o.a.createElement("div",{className:"button-wrapper"},o.a.createElement("div",{id:"list",onClick:function(t){return e(t)},className:"list"===t.position.position?"button button-additional":"button"},"LIST"),o.a.createElement("div",{id:"task",onClick:function(t){return e(t)},className:"task"===t.position.position?"button button-additional":"button"},"TASK"),o.a.createElement("div",{id:"add",onClick:function(t){return e(t)},className:"add"===t.position.position?"button button-additional":"button"},"ADD"),o.a.createElement("div",{id:"edit",onClick:function(t){return e(t)},className:"edit"===t.position.position?"button button-additional":"button"},"EDIT")),o.a.createElement("div",{className:"button-box"})))})),f=n(4);var E=Object(r.b)((function(t,e){return{add:t,position:e.position}}),(function(t){return{editTask:function(e){t({type:"EDIT_TASK",editTask:e})},addAfterEdit:function(e){t({type:"ADD_AFTER_EDIT",editedTask:e})},displayDetail:function(e){t({type:"DISPLAY_DETAIL",id:e})},display:function(e){t({type:"DISPLAY",id:e})}}}))((function(t){console.log(t),console.log(t.add.item.todos[0]);var e,n=t.add.item.todos.filter((function(t){return!0===t.edit}));console.log("toEdit",n),e=n.length>0?n[0]:t.add.item.todos[0],console.log(n),console.log(n.lenghth);var i=Object(a.useState)(null),l=Object(c.a)(i,2),r=l[0],d=(l[1],Object(a.useState)(e)),s=Object(c.a)(d,2),u=s[0],p=s[1];console.log(u);var m=function(t){"newTask"===t.target.id&&(p(Object(f.a)(Object(f.a)({},u),{},{title:null})),console.log("oooooooooooooooooo",u)),"pointOne"===t.target.id&&p(Object(f.a)(Object(f.a)({},u),{},{detail:u.detail.map((function(t){return t!==u.detail[0]?t:Object(f.a)(Object(f.a)({},t),{},{point:null})}))})),"pointTwo"===t.target.id&&p(Object(f.a)(Object(f.a)({},u),{},{detail:u.detail.map((function(t){return t!==u.detail[1]?t:Object(f.a)(Object(f.a)({},t),{},{point:null})}))})),"pointThree"===t.target.id&&p(Object(f.a)(Object(f.a)({},u),{},{detail:u.detail.map((function(t){return t!==u.detail[2]?t:Object(f.a)(Object(f.a)({},t),{},{point:null})}))}))},b=function(t){"newTask"===t.target.id&&p(Object(f.a)(Object(f.a)({},u),{},{title:t.target.value})),"pointOne"===t.target.id&&p(Object(f.a)(Object(f.a)({},u),{},{detail:u.detail.map((function(e){return e!==u.detail[0]?e:Object(f.a)(Object(f.a)({},e),{},{point:t.target.value})}))})),"pointTwo"===t.target.id&&p(Object(f.a)(Object(f.a)({},u),{},{detail:u.detail.map((function(e){return e!==u.detail[1]?e:Object(f.a)(Object(f.a)({},e),{},{point:t.target.value})}))})),"pointThree"===t.target.id&&p(Object(f.a)(Object(f.a)({},u),{},{detail:u.detail.map((function(e){return e!==u.detail[2]?e:Object(f.a)(Object(f.a)({},e),{},{point:t.target.value})}))}))};return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{onSubmit:function(e,n){e.preventDefault(),console.log(u.id),u.date=r,t.editTask(u),t.addAfterEdit(u),t.displayDetail(u.id),t.display("task")},type:"submit"},o.a.createElement("input",{onChange:b,onMouseDown:m,value:u.title,placeholder:"optional",id:"newTask",type:"text"}),o.a.createElement("label",{htmlFor:"text"},"new task"),o.a.createElement("input",{onChange:b,onMouseDown:m,value:u.detail[0]?u.detail[0].point:null,placeholder:"optional",id:"pointOne",type:"text"}),o.a.createElement("label",{htmlFor:"text"},"point one"),o.a.createElement("input",{onChange:b,onMouseDown:m,value:u.detail[1]?u.detail[1].point:null,placeholder:"optional",id:"pointTwo",type:"text"}),o.a.createElement("label",{htmlFor:"text"},"point two"),o.a.createElement("input",{onChange:b,onMouseDown:m,value:u.detail[2]?u.detail[2].point:null,placeholder:"optional",id:"pointThree",type:"text"}),o.a.createElement("label",{htmlFor:"text"},"point three"),o.a.createElement("button",null,"EDIT")))}));var g=Object(r.b)((function(t){return{position:t.position,items:t.item}}))((function(t){return console.log(t),o.a.createElement("div",{className:"mobile"},o.a.createElement(b,null),"list"===t.position.position?o.a.createElement(s,null):null,"task"===t.position.position?o.a.createElement(d,null):null,"add"===t.position.position?o.a.createElement(m,null):null,"edit"===t.position.position?o.a.createElement(E,null):null)}));var k=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(g,null))},h=n(17),O={position:"list"},T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"DISPLAY":return console.log(e.id),console.log(t),Object(f.a)(Object(f.a)({},t),{},{position:e.id});case"DISPLAY_TASK":return Object(f.a)(Object(f.a)({},t),{},{position:e.task})}return t},j=n(21),v={todos:[{title:"Get out of bed",titleMarked:!1,id:1,date:new Date(2021,11,24,10,33),edit:!1,detail:[{point:"wake my wife upGG",pointMarked:!1},{point:"check the weatherGG",pointMarked:!1},{point:"check the weatherGGG",pointMarked:!1}]},{title:"Walk the dog",titleMarked:!1,id:2,date:new Date(2022,11,24,10,33),edit:!1,detail:[{point:"wake my wife upWW",pointMarked:!1},{point:"check the weatherWW",pointMarked:!1}]}],selectedItem:{id:1}},y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"DELETE":var n=t.todos.filter((function(t){return t.id!=e.id}));return Object(f.a)(Object(f.a)({},t),{},{todos:n,selectedItem:n[0]});case"DISPLAY_DETAIL":return Object(f.a)(Object(f.a)({},t),{},{selectedItem:{id:e.id}});case"ADD_NEW_TASK":return Object(f.a)(Object(f.a)({},t),{},{todos:[].concat(Object(j.a)(t.todos),[e.newTask]),selectedItem:{id:e.newTask.id}});case"ADD_AFTER_EDIT":return console.log(e),Object(f.a)(Object(f.a)({},t),{},{todos:[].concat(Object(j.a)(t.todos),[e.editedTask]),selectedItem:{id:e.editedTask.id}});case"CHANGE_CHECK":var a=t.todos.map((function(t){return Object(f.a)(Object(f.a)({},t),{},{detail:t.detail.map((function(t){return e.id!==t.point?t:Object(f.a)(Object(f.a)({},t),{},{pointMarked:!t.pointMarked})}))})}));return Object(f.a)(Object(f.a)({},t),{},{todos:a});case"CHANGE_TITLE_TASK":console.log(t.todos),console.log(e.each);var o=t.todos.find((function(t){return t===e.each})),i=t.todos.filter((function(t){return t!=o}));return console.log(o),console.log(o.titleMarked),console.log(t),Object(f.a)(Object(f.a)({},t),{},{todos:[].concat(Object(j.a)(i),[Object(f.a)(Object(f.a)({},o),{},{titleMarked:!o.titleMarked})])});case"CHANGE_TITLE_LIST":console.log(e.each);var l=t.todos.find((function(t){return t===e.each})),c=t.todos.filter((function(t){return t!=l}));return Object(f.a)(Object(f.a)({},t),{},{todos:[].concat(Object(j.a)(c),[Object(f.a)(Object(f.a)({},l),{},{titleMarked:!l.titleMarked})])});case"EDIT_TASK":console.log(t.todos),console.log(e.id);var r=t.todos.filter((function(t){return t.id===e.id})),d=t.todos.filter((function(t){return t.id!=e.id}));return r.length>0&&(r[0].edit=!0),console.log(r),console.log(r.length),console.log(r[0].edit),console.log(r),Object(f.a)(Object(f.a)({},t),{},{todos:[].concat(Object(j.a)(d),[r[0]])});case"EDIT_TASK_STATE":console.log(t.todos),console.log(e.task);var s=t.todos.map((function(t){return Object(f.a)(Object(f.a)({},t),{},{edit:!1})}));return console.log(s),Object(f.a)(Object(f.a)({},t),{},{todos:s})}return t},D=Object(h.b)({position:T,item:y}),I=Object(h.c)(D);l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(r.a,{store:I},o.a.createElement(k,null))),document.getElementById("root"))},37:function(t,e,n){t.exports=n.p+"static/media/alarm.8ad1d90d.mp3"},64:function(t,e,n){t.exports=n(130)},69:function(t,e,n){}},[[64,1,2]]]);
//# sourceMappingURL=main.5b1840fc.chunk.js.map