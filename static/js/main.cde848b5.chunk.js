(this.webpackJsonpto_do=this.webpackJsonpto_do||[]).push([[0],{130:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(14),l=a.n(o),c=(a(69),a(12)),d=a(7);Object(d.b)((function(e){return{items:e.item}}))((function(e){return console.log(e.items.todos[0].id),i.a.createElement("div",null,i.a.createElement("input",{id:e.items.todos[0].id,type:"checkbox"}),i.a.createElement("label",{htmlFor:e.items.todos[0].id},e.items.todos[0].detail[0].point))})),a(38);var r=Object(d.b)((function(e){return console.log(e),{items:e.item,position:e.position}}),(function(e){return{deleteItem:function(t){e({type:"DELETE",id:t})},pointCheck:function(t){e({type:"CHANGE_CHECK",id:t})},titleCheckTask:function(t){e({type:"CHANGE_TITLE_TASK",each:t})},display:function(t,a){e({type:"DISPLAY",task:t,id:a})},editTask:function(t){e({type:"EDIT_TASK",id:t})},editTaskState:function(){e({type:"EDIT_TASK_STATE"})}}}))((function(e){console.log(e);var t=function(t){console.log(t),e.titleCheckTask(t)};console.log(e.items);var a=e.items.todos.filter((function(t){return console.log(e.items.selectedItem),console.log(e.items.selectedItem.id),t.id===e.items.selectedItem.id}));e.items.todos.filter((function(e){return!0===e.edit})),Object(n.useEffect)((function(){o()}),[]);var o=function(){e.editTaskState()},l=Object(c.a)(a,1)[0];if(a.length<1)return i.a.createElement("div",{className:"title"},i.a.createElement("div",{className:"title-wrapper"},i.a.createElement("p",null,"You have no todos left")));console.log(l.detail);var d=l.detail.map((function(t){if(null!=t.point)return i.a.createElement("div",{key:t.point},i.a.createElement("input",{onClick:function(a){!function(t){e.pointCheck(t)}(t.point)},className:"point-check",id:t.point,type:"checkbox",checked:t.pointMarked}),i.a.createElement("label",{className:"point-label",htmlFor:t.point},t.point))}));return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"task-container"},i.a.createElement("div",{className:"title"},i.a.createElement("div",{className:"title-wrapper"},i.a.createElement("input",{onClick:function(e){t(a[0])},className:"title-check",id:a[0].title,type:"checkbox",checked:a[0].titleMarked}),i.a.createElement("label",{onClick:function(e){t(a[0])},className:"title-label",htmlFor:"todo","data-content":l.title},l.title)),i.a.createElement("i",{onClick:function(){var t;t=l.id,e.deleteItem(t)},className:"fas fa-trash-alt"})),d,i.a.createElement("div",null,null!=a[0].date?a[0].date.toLocaleDateString():null),i.a.createElement("button",{onClick:function(){var t,n;t=a[0].id,n="edit",e.display(t,n),e.editTask(t)}},"EDIT")))}));var s=Object(d.b)((function(e,t){return console.log("liiii",e),{items:e.item,position:e.position}}),(function(e){return{deleteItem:function(t){e({type:"DELETE",id:t})},displayTask:function(t){e({type:"DISPLAY_TASK",task:t})},displayDetail:function(t){e({type:"DISPLAY_DETAIL",id:t})},changeTitleList:function(t){e({type:"CHANGE_TITLE_LIST",each:t})}}}))((function(e){console.log(e);var t=e.items.todos.sort((function(e,t){return e.id-t.id}));console.log(t);var a=function(t){e.changeTitleList(t)};if(e.items.todos.length<1)return i.a.createElement("div",{className:"title"},i.a.createElement("div",{className:"title-wrapper"},i.a.createElement("p",null,"You have no todos left")));var n=e.items.todos.map((function(t){return i.a.createElement("div",{key:t.id,className:"item"},i.a.createElement("div",{className:"title"},i.a.createElement("div",{className:"title-wrapper"},i.a.createElement("input",{onClick:function(e){a(t)},className:"title-check",id:t.title,type:"checkbox",checked:t.titleMarked}),i.a.createElement("label",{onClick:function(e){a(t)},className:"title-label",htmlFor:"todo","data-content":t.title},t.title)),i.a.createElement("i",{onClick:function(){var a;a=t.id,e.deleteItem(a)},className:"fas fa-trash-alt"})),i.a.createElement("div",{className:"detail"},i.a.createElement("div",{onClick:function(){var a,n;a="task",n=t.id,"task"===a&&e.displayTask(a),e.displayDetail(n)},className:"check-detail"},"DETAIL")))}));return i.a.createElement("div",{className:"list-container"},n)})),u=a(28),p=a.n(u);a(51);var m=Object(d.b)((function(e){return console.log(e),{add:e,position:e.position}}),(function(e){return{addNewTask:function(t){e({type:"ADD_NEW_TASK",newTask:t})},displayDetail:function(t){e({type:"DISPLAY_DETAIL",id:t})},display:function(t){e({type:"DISPLAY",id:t})}}}))((function(e){console.log(e),console.log(e.add.item.todos);var t=Object(n.useState)(null),a=Object(c.a)(t,2),o=a[0],l=a[1],d=Object(n.useState)({title:null,titleMarked:!1,id:null,date:null,detail:[{point:null,pointMarked:!1},{point:null,pointMarked:!1},{point:null,pointMarked:!1}]}),r=Object(c.a)(d,2),s=r[0];r[1],console.log(s.title);var u=function(e){"newTask"===e.target.id&&(s.title=e.target.value,console.log(s.title)),"pointOne"===e.target.id&&(s.detail[0]={point:e.target.value,pointMarked:!1}),"pointTwo"===e.target.id&&(s.detail[1]={point:e.target.value,pointMarked:!1}),"pointThree"===e.target.id&&(s.detail[2]={point:e.target.value,pointMarked:!1}),s.id=(new Date).getTime()};return i.a.createElement(i.a.Fragment,null,i.a.createElement("form",{onSubmit:function(t,a){t.preventDefault(),s.date=o,e.displayDetail(s.id),e.addNewTask(s),e.display("task"),console.log(s)},type:"submit"},i.a.createElement("input",{onChange:u,id:"newTask",type:"text"}),i.a.createElement("label",{htmlFor:"text"},"new task"),i.a.createElement("input",{onChange:u,placeholder:"optional",id:"pointOne",type:"text"}),i.a.createElement("label",{htmlFor:"text"},"point one"),i.a.createElement("input",{onChange:u,placeholder:"optional",id:"pointTwo",type:"text"}),i.a.createElement("label",{htmlFor:"text"},"point two"),i.a.createElement("input",{onChange:u,placeholder:"optional",id:"pointThree",type:"text"}),i.a.createElement("label",{htmlFor:"text"},"point three"),i.a.createElement(p.a,{selected:o,onChange:function(e){return function(e){l(e)}(e)},timeInputLabel:"Time:",dateFormat:"MM/dd/yyyy h:mm aa",showTimeInput:!0,placeholderText:"Click to select a date"}),i.a.createElement("button",null,"ADD")))}));var b=Object(d.b)((function(e){return console.log(e),{position:e.position}}),(function(e){return{display:function(t){e({type:"DISPLAY",id:t})}}}))((function(e){var t=Object(n.useState)(new Date),a=Object(c.a)(t,2),o=a[0],l=a[1];console.log(o),Object(n.useEffect)((function(){var e=setInterval((function(){l(new Date)}),1e3);return function(){clearInterval(e)}}),[]);var d=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][(new Date).getDay()],r=o.toLocaleDateString(),s=o.toLocaleTimeString();console.log("sss",e);var u=function(t){console.log("aaaa",t.target.id),"list"===t.target.id&&e.display(t.target.id),"task"===t.target.id&&e.display(t.target.id),"add"===t.target.id&&e.display(t.target.id),"edit"===t.target.id&&e.display(t.target.id)};return console.log(r),i.a.createElement("header",null,i.a.createElement("div",{className:"up"},i.a.createElement("div",{className:"my-day"},d,i.a.createElement("div",{className:"date"},s,", ",r))),i.a.createElement("div",{className:"down"},i.a.createElement("div",{className:"button-wrapper"},i.a.createElement("div",{id:"list",onClick:function(e){return u(e)},className:"list"===e.position.position?"button button-additional":"button"},"LIST"),i.a.createElement("div",{id:"task",onClick:function(e){return u(e)},className:"task"===e.position.position?"button button-additional":"button"},"TASK"),i.a.createElement("div",{id:"add",onClick:function(e){return u(e)},className:"add"===e.position.position?"button button-additional":"button"},"ADD"),i.a.createElement("div",{id:"edit",onClick:function(e){return u(e)},className:"edit"===e.position.position?"button button-additional":"button"},"EDIT")),i.a.createElement("div",{className:"button-box"})))})),f=a(4);var E=Object(d.b)((function(e){return{add:e,position:e.position}}),(function(e){return{editTask:function(t){e({type:"EDIT_TASK",editTask:t})},addAfterEdit:function(t){e({type:"ADD_AFTER_EDIT",editedTask:t})},displayDetail:function(t){e({type:"DISPLAY_DETAIL",id:t})},display:function(t){e({type:"DISPLAY",id:t})}}}))((function(e){console.log(e.add.item.todos[0]);var t,a,o=e.add.item.todos.filter((function(e){return!0===e.edit}));o.length>0&&(t=o[0].date,a=o[0]),e.add.item.todos.length>0?(t=e.add.item.todos[0].date,a=e.add.item.todos[0]):(t=null,a=null);var l=Object(n.useState)(t),d=Object(c.a)(l,2),r=d[0],s=d[1],u=Object(n.useState)(a),m=Object(c.a)(u,2),b=m[0],E=m[1];if(null===a)return i.a.createElement("div",{className:"title"},i.a.createElement("div",{className:"title-wrapper"},i.a.createElement("p",null,"You have no todos left")));console.log(b);var g=function(e){if("newTask"===e.target.id&&E(Object(f.a)(Object(f.a)({},b),{},{title:e.target.value})),"pointOne"===e.target.id&&(E(Object(f.a)(Object(f.a)({},b),{},{detail:b.detail.map((function(t){return t!==b.detail[0]?t:Object(f.a)(Object(f.a)({},t),{},{point:e.target.value})}))})),void 0==b.detail[0]&&e.target.value.length>0)){b.detail[0]={point:e.target.value,pointMarked:!1};e.target.value;E(Object(f.a)(Object(f.a)({},b),{},{detail:b.detail.map((function(e){return e}))}))}if("pointTwo"===e.target.id&&(E(Object(f.a)(Object(f.a)({},b),{},{detail:b.detail.map((function(t){return t!==b.detail[1]?t:Object(f.a)(Object(f.a)({},t),{},{point:e.target.value})}))})),void 0==b.detail[1]&&e.target.value.length>0)){b.detail[1]={point:e.target.value,pointMarked:!1};e.target.value;E(Object(f.a)(Object(f.a)({},b),{},{detail:b.detail.map((function(e){return e}))}))}if("pointThree"===e.target.id&&(E(Object(f.a)(Object(f.a)({},b),{},{detail:b.detail.map((function(t){return t!==b.detail[2]?t:Object(f.a)(Object(f.a)({},t),{},{point:e.target.value})}))})),void 0==b.detail[2]&&e.target.value.length>0)){b.detail[2]={point:e.target.value,pointMarked:!1};e.target.value;E(Object(f.a)(Object(f.a)({},b),{},{detail:b.detail.map((function(e){return e}))}))}};return i.a.createElement(i.a.Fragment,null,i.a.createElement("form",{onSubmit:function(t,a){t.preventDefault(),console.log(b.detail),e.editTask(b),e.addAfterEdit(b),e.displayDetail(b.id),e.display("task")},type:"submit"},i.a.createElement("input",{onChange:g,value:b.title,placeholder:"optional",id:"newTask",type:"text"}),i.a.createElement("label",{htmlFor:"text"},"new task"),i.a.createElement("input",{onChange:g,value:b.detail[0]?b.detail[0].point:null,placeholder:"optional",id:"pointOne",type:"text"}),i.a.createElement("label",{htmlFor:"text"},"point one"),i.a.createElement("input",{onChange:g,value:b.detail[1]?b.detail[1].point:null,placeholder:"optional",id:"pointTwo",type:"text"}),i.a.createElement("label",{htmlFor:"text"},"point two"),i.a.createElement("input",{onChange:g,value:b.detail[2]?b.detail[2].point:null,placeholder:"optional",id:"pointThree",type:"text"}),i.a.createElement("label",{htmlFor:"text"},"point three"),i.a.createElement(p.a,{selected:r,onChange:function(e){return function(e){s(e),b.date=e,console.log(e),console.log(b.date),console.log(r),E(Object(f.a)(Object(f.a)({},b),{},{date:e}))}(e)},timeInputLabel:"Time:",dateFormat:"MM/dd/yyyy h:mm aa",showTimeInput:!0,placeholderText:"Click to select a date"}),i.a.createElement("button",null,"EDIT")))}));var g=Object(d.b)((function(e){return{position:e.position,items:e.item}}))((function(e){return console.log(e),i.a.createElement("div",{className:"mobile"},i.a.createElement(b,null),"list"===e.position.position?i.a.createElement(s,null):null,"task"===e.position.position?i.a.createElement(r,null):null,"add"===e.position.position?i.a.createElement(m,null):null,"edit"===e.position.position?i.a.createElement(E,null):null)}));var k=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(g,null))},v=a(17),h={position:"list"},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DISPLAY":return console.log(t.id),console.log(e),Object(f.a)(Object(f.a)({},e),{},{position:t.id});case"DISPLAY_TASK":return Object(f.a)(Object(f.a)({},e),{},{position:t.task})}return e},O=a(26),j={todos:[{title:"Get out of bed",titleMarked:!1,id:1,date:new Date(2021,11,24,10,33),edit:!1,detail:[{point:"wake my wife upGG",pointMarked:!1},{point:"check the weatherGG",pointMarked:!1},{point:"check the weatherGGG",pointMarked:!1}]},{title:"Walk the dog",titleMarked:!1,id:2,date:new Date(2022,11,24,10,33),edit:!1,detail:[{point:"wake my wife upWW",pointMarked:!1},{point:"check the weatherWW",pointMarked:!1}]}],selectedItem:{id:1}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DELETE":var a=e.todos.filter((function(e){return e.id!=t.id}));return Object(f.a)(Object(f.a)({},e),{},{todos:a,selectedItem:a[0]});case"DISPLAY_DETAIL":return Object(f.a)(Object(f.a)({},e),{},{selectedItem:{id:t.id}});case"ADD_NEW_TASK":return console.log(e),Object(f.a)(Object(f.a)({},e),{},{todos:[].concat(Object(O.a)(e.todos),[t.newTask]),selectedItem:{id:t.newTask.id}});case"ADD_AFTER_EDIT":console.log(t),console.log(t.editedTask.detail),console.log(e.todos);var n=t.editedTask.detail.length>0?t.editedTask.detail.filter((function(e){return null!=e.point})):null;return console.log(n),Object(f.a)(Object(f.a)({},e),{},{todos:e.todos.map((function(e){return e.id!=t.editedTask.id?e:Object(f.a)(Object(f.a)({},e),{},{title:t.editedTask.title,date:t.editedTask.date,detail:n})})),selectedItem:{id:t.editedTask.id}});case"CHANGE_CHECK":var i=e.todos.map((function(e){return Object(f.a)(Object(f.a)({},e),{},{detail:e.detail.map((function(e){return t.id!==e.point?e:Object(f.a)(Object(f.a)({},e),{},{pointMarked:!e.pointMarked})}))})}));return Object(f.a)(Object(f.a)({},e),{},{todos:i});case"CHANGE_TITLE_TASK":console.log(e.todos),console.log(t.each);var o=e.todos.find((function(e){return e===t.each})),l=e.todos.filter((function(e){return e!=o}));return console.log(o),console.log(o.titleMarked),console.log(e),Object(f.a)(Object(f.a)({},e),{},{todos:[].concat(Object(O.a)(l),[Object(f.a)(Object(f.a)({},o),{},{titleMarked:!o.titleMarked})])});case"CHANGE_TITLE_LIST":console.log(t.each);var c=e.todos.find((function(e){return e===t.each})),d=e.todos.filter((function(e){return e!=c}));return Object(f.a)(Object(f.a)({},e),{},{todos:[].concat(Object(O.a)(d),[Object(f.a)(Object(f.a)({},c),{},{titleMarked:!c.titleMarked})])});case"EDIT_TASK":var r=e.todos.map((function(e){return e.id!=t.id?e:Object(f.a)(Object(f.a)({},e),{},{edit:!0})}));return Object(f.a)(Object(f.a)({},e),{},{todos:Object(O.a)(r)});case"EDIT_TASK_STATE":console.log(e.todos),console.log(t.task);var s=e.todos.map((function(e){return Object(f.a)(Object(f.a)({},e),{},{edit:!1})}));return console.log(s),Object(f.a)(Object(f.a)({},e),{},{todos:s})}return e},D=Object(v.b)({position:T,item:y}),I=Object(v.c)(D);l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(d.a,{store:I},i.a.createElement(k,null))),document.getElementById("root"))},38:function(e,t,a){e.exports=a.p+"static/media/alarm.8ad1d90d.mp3"},64:function(e,t,a){e.exports=a(130)},69:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.cde848b5.chunk.js.map