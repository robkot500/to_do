(this.webpackJsonpto_do=this.webpackJsonpto_do||[]).push([[0],{130:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(14),i=a.n(l),c=(a(69),a(8)),r=a(7);Object(r.b)((function(e){return{items:e.item}}))((function(e){return console.log(e.items.todos[0].id),o.a.createElement("div",null,o.a.createElement("input",{id:e.items.todos[0].id,type:"checkbox"}),o.a.createElement("label",{htmlFor:e.items.todos[0].id},e.items.todos[0].detail[0].point))}));var d=a(38),s=a.n(d);var u=function(){Object(n.useEffect)((function(){var t=document.getElementById("audioID");console.log(t),e(t)}));var e=function(e){e.play()};return o.a.createElement("div",null,o.a.createElement("audio",{id:"audioID"},o.a.createElement("source",{src:s.a,type:"audio/mpeg"})))};var m=Object(r.b)((function(e){return console.log(e),{items:e.item}}),(function(e){return{setAlarm:function(t){e({type:"SET_ALARM",id:t})}}}))((function(e){console.log(e.items);var t=e.items.todos.filter((function(t){return e.items.selectedItem.id===t.id}));console.log(t[0].alarm.isAlarm);var a=t[0].date,l=Object(n.useState)(a),i=Object(c.a)(l,2),r=i[0];return i[1],console.log(r),Object(n.useEffect)((function(){var a=setInterval((function(){var n=(new Date).getTime(),o=r-n,l=Math.floor(o/864e5),i=Math.floor(o%864e5/36e5),c=Math.floor(o%36e5/6e4),d=Math.floor(o%6e4/1e3);console.log(l+"d "+i+"h "+c+"m "+d+"s "),o<0&&(console.log(t[0].id),e.setAlarm(t[0].id),clearInterval(a))}),1e3)}),[]),o.a.createElement("div",null)}));var p=Object(r.b)((function(e){return console.log(e),{items:e.item,position:e.position}}),(function(e){return{deleteItem:function(t){e({type:"DELETE",id:t})},pointCheck:function(t){e({type:"CHANGE_CHECK",id:t})},titleCheckTask:function(t){e({type:"CHANGE_TITLE_TASK",each:t})},display:function(t,a){e({type:"DISPLAY",task:t,id:a})},clickToEditTask:function(t){e({type:"CLICK_TO_EDIT_TASK",id:t})},editTaskState:function(){e({type:"EDIT_TASK_STATE"})}}}))((function(e){console.log(e);var t=function(t){console.log(t),e.titleCheckTask(t)};console.log(e.items);var a=e.items.todos.filter((function(t){return console.log(e.items.selectedItem),console.log(e.items.selectedItem.id),t.id===e.items.selectedItem.id}));console.log(a[0]),e.items.todos.filter((function(e){return!0===e.edit})),Object(n.useEffect)((function(){l()}),[]);var l=function(){e.editTaskState()},i=Object(c.a)(a,1)[0];if(a.length<1)return o.a.createElement("div",{className:"no-todos-container"},o.a.createElement("p",{className:"no-todos"},"You have no todos left"),o.a.createElement("div",{className:"leisure"}));console.log(i.detail);var r=i.detail.map((function(t){if(null!=t.point)return o.a.createElement("div",{key:t.point},o.a.createElement("input",{onClick:function(a){!function(t){e.pointCheck(t)}(t.point)},className:"point-check",id:t.point,type:"checkbox",checked:t.pointMarked}),o.a.createElement("label",{className:"point-label",htmlFor:t.point},t.point))}));return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"task-container"},o.a.createElement("div",{className:"title"},o.a.createElement("div",{className:"title-wrapper"},o.a.createElement("input",{onClick:function(e){t(a[0])},className:"title-check",id:a[0].title,type:"checkbox",checked:a[0].titleMarked}),o.a.createElement("label",{onClick:function(e){t(a[0])},className:"title-label",htmlFor:"todo","data-content":i.title},i.title)),o.a.createElement("i",{onClick:function(){var t;t=i.id,e.deleteItem(t)},className:"fas fa-trash-alt"})),r,o.a.createElement("div",null,null!=a[0].date?a[0].date.toLocaleDateString():null),o.a.createElement("div",{className:"notes"},a[0].notes),o.a.createElement("button",{onClick:function(){var t,n;t=a[0].id,n="edit",e.display(t,n),e.clickToEditTask(t),console.log(t),console.log(t)}},"EDIT"),o.a.createElement(m,null)))}));var b=Object(r.b)((function(e,t){return console.log("liiii",e),{items:e.item,position:e.position}}),(function(e){return{deleteItem:function(t){e({type:"DELETE",id:t})},displayTask:function(t){e({type:"DISPLAY_TASK",task:t})},displayDetail:function(t){e({type:"DISPLAY_DETAIL",id:t})},changeTitleList:function(t){e({type:"CHANGE_TITLE_LIST",each:t})}}}))((function(e){console.log(e.items.todos);var t=e.items.todos.sort((function(e,t){return e.id-t.id}));console.log(t);var a=function(t){e.changeTitleList(t)};if(e.items.todos.map((function(e){})),e.items.todos.length<1)return o.a.createElement("div",{className:"no-todos-container"},o.a.createElement("p",{className:"no-todos"},"You have no todos left"),o.a.createElement("div",{className:"leisure"}));var n=e.items.todos.map((function(t){return o.a.createElement("div",{key:t.id,className:"item"},o.a.createElement("div",{className:"title"},o.a.createElement("div",{className:"title-wrapper"},o.a.createElement("input",{onClick:function(e){a(t)},className:"title-check",id:t.title,type:"checkbox",checked:t.titleMarked}),o.a.createElement("label",{onClick:function(e){a(t)},className:"title-label",htmlFor:"todo","data-content":t.title},t.title))),o.a.createElement("div",{className:"detail"},o.a.createElement("div",{className:"flag"},o.a.createElement("i",{class:"fas fa-flag",style:{color:t.flag}})),o.a.createElement("i",{class:"fas fa-bell"}),o.a.createElement("div",{className:"deadline"},t.date?t.date.toLocaleTimeString([],{timeStyle:"short"}):"date not set",", ",t.date?t.date.toLocaleDateString():null),o.a.createElement("div",{onClick:function(){var a,n;a="task",n=t.id,"task"===a&&e.displayTask(a),e.displayDetail(n)},className:"check-detail"},"DETAILS"),o.a.createElement("i",{onClick:function(){var a;a=t.id,e.deleteItem(a)},className:"fas fa-trash-alt"})))}));return o.a.createElement("div",{className:"list-container"},n)})),g=a(3),f=a(27),E=a.n(f);a(51);var h=Object(r.b)((function(e){return console.log(e),{add:e,position:e.position}}),(function(e){return{addNewTask:function(t){e({type:"ADD_NEW_TASK",newTask:t})},displayDetail:function(t){e({type:"DISPLAY_DETAIL",id:t})},display:function(t){e({type:"DISPLAY",id:t})}}}))((function(e){console.log(e),console.log(e.add.item.todos);var t=Object(n.useState)(null),a=Object(c.a)(t,2),l=a[0],i=a[1],r=Object(n.useState)({title:null,titleMarked:!1,id:null,date:null,edit:!1,flag:"yellow",alarm:{setAlarm:null,isAlarm:!1},detail:[{point:null,pointMarked:!1},{point:null,pointMarked:!1},{point:null,pointMarked:!1}]}),d=Object(c.a)(r,2),s=d[0],u=d[1],m=function(e){"newTask"===e.target.id&&(s.title=e.target.value,console.log(s.title)),"pointOne"===e.target.id&&u(Object(g.a)(Object(g.a)({},s),{},{detail:s.detail.map((function(t){return t!=s.detail[0]?t:{point:e.target.value,pointMarked:!1}}))})),"pointTwo"===e.target.id&&u(Object(g.a)(Object(g.a)({},s),{},{detail:s.detail.map((function(t){return t!=s.detail[1]?t:{point:e.target.value,pointMarked:!1}}))})),"pointThree"===e.target.id&&u(Object(g.a)(Object(g.a)({},s),{},{detail:s.detail.map((function(t){return t!=s.detail[2]?t:{point:e.target.value,pointMarked:!1}}))})),"selectColor"===e.target.id&&u(Object(g.a)(Object(g.a)({},s),{},{flag:e.target.value})),"notes"===e.target.id&&u(Object(g.a)(Object(g.a)({},s),{},{notes:e.target.value})),"alarm"===e.target.id&&(console.log("alarm",e.target.value),s.alarm.setAlarm=e.target.value,console.log(s.alarm.setAlarm)),s.id=(new Date).getTime(),console.log("aaaaaaa",s.alarm.setAlarm)};return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{onSubmit:function(t,a){t.preventDefault(),console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",s.alarm.setAlarm),s.date=l,e.displayDetail(s.id),e.addNewTask(s),e.display("task"),console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",s)},type:"submit"},o.a.createElement("input",{onChange:m,id:"newTask",type:"text"}),o.a.createElement("label",{htmlFor:"text"},"new task"),o.a.createElement("input",{onChange:m,placeholder:"optional",id:"pointOne",type:"text"}),o.a.createElement("label",{htmlFor:"text"},"point one"),o.a.createElement("input",{onChange:m,placeholder:"optional",id:"pointTwo",type:"text"}),o.a.createElement("label",{htmlFor:"text"},"point two"),o.a.createElement("input",{onChange:m,placeholder:"optional",id:"pointThree",type:"text"}),o.a.createElement("label",{htmlFor:"text"},"point three"),o.a.createElement("select",{id:"selectColor",onChange:m},o.a.createElement("option",{value:"orange"},"Miscelanneus-orange"),o.a.createElement("option",{value:"green"},"Personal-green"),o.a.createElement("option",{value:"red"},"Urgent!-red"),o.a.createElement("option",{value:"blue"},"Work-blue"),o.a.createElement("option",{value:"purple"},"Family-purple")),o.a.createElement(E.a,{selected:l,onChange:function(e){return function(e){i(e)}(e)},timeInputLabel:"Time:",dateFormat:"MM/dd/yyyy h:mm aa",showTimeInput:!0,placeholderText:"Click to select a date"}),o.a.createElement("select",{id:"alarm",onChange:m},o.a.createElement("option",{value:null},"---"),o.a.createElement("option",{value:l},"date"),o.a.createElement("option",{value:l-36e5},"one hour before"),o.a.createElement("option",{value:l-18e5},"half an hour before"),o.a.createElement("option",{value:"blue"},"Work-blue"),o.a.createElement("option",{value:"purple"},"Family-purple")),o.a.createElement("textarea",{onChange:m,name:"notes",id:"notes",cols:"35",rows:"10"}),o.a.createElement("button",null,"ADD")))}));var v=Object(r.b)((function(e){return console.log(e),{position:e.position}}),(function(e){return{display:function(t){e({type:"DISPLAY",id:t})}}}))((function(e){var t=Object(n.useState)(new Date),a=Object(c.a)(t,2),l=a[0],i=a[1];Object(n.useEffect)((function(){var e=setInterval((function(){i(new Date)}),1e3);return function(){clearInterval(e)}}),[]);var r=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][(new Date).getDay()],d=l.toLocaleDateString(),s=l.toLocaleTimeString(),u=function(t){console.log("aaaa",t.target.id),"list"===t.target.id&&e.display(t.target.id),"task"===t.target.id&&e.display(t.target.id),"add"===t.target.id&&e.display(t.target.id),"edit"===t.target.id&&e.display(t.target.id)};return o.a.createElement("header",null,o.a.createElement("div",{className:"up"},o.a.createElement("div",{className:"my-day"},r,o.a.createElement("div",{className:"date"},s,", ",d))),o.a.createElement("div",{className:"down"},o.a.createElement("div",{className:"button-wrapper"},o.a.createElement("div",{id:"list",onClick:function(e){return u(e)},className:"list"===e.position.position?"button button-additional":"button"},"LIST"),o.a.createElement("div",{id:"task",onClick:function(e){return u(e)},className:"task"===e.position.position?"button button-additional":"button"},"TASK"),o.a.createElement("div",{id:"add",onClick:function(e){return u(e)},className:"add"===e.position.position?"button button-additional":"button"},"ADD"),o.a.createElement("div",{id:"edit",onClick:function(e){return u(e)},className:"edit"===e.position.position?"button button-additional":"button"},"EDIT")),o.a.createElement("div",{className:"button-box"})))}));var k=Object(r.b)((function(e){return{add:e,position:e.position}}),(function(e){return{editTask:function(t){e({type:"EDIT_TASK",editTask:t})},addAfterEdit:function(t){e({type:"ADD_AFTER_EDIT",editedTask:t})},displayDetail:function(t){e({type:"DISPLAY_DETAIL",id:t})},display:function(t){e({type:"DISPLAY",id:t})}}}))((function(e){console.log(e.add.item.todos[0]);var t,a,l=e.add.item.todos.filter((function(e){return!0===e.edit}));console.log(l[0]),l.length>0?(t=l[0].date,a=l[0]):e.add.item.todos.length>0&&0===l.length?(t=e.add.item.todos[0].date,a=e.add.item.todos[0],console.log("wwwwww")):(t=null,a=null),console.log(e.add.item.todos.length),console.log(l.length),console.log(a);var i=Object(n.useState)(t),r=Object(c.a)(i,2),d=r[0],s=r[1],u=Object(n.useState)(a),m=Object(c.a)(u,2),p=m[0],b=m[1];if(console.log(p),null===a)return o.a.createElement("div",{className:"no-todos-container"},o.a.createElement("p",{className:"no-todos"},"You have no todos left"),o.a.createElement("div",{className:"leisure"}));console.log(p);var f=function(e){if("newTask"===e.target.id&&b(Object(g.a)(Object(g.a)({},p),{},{title:e.target.value})),"pointOne"===e.target.id&&(b(Object(g.a)(Object(g.a)({},p),{},{detail:p.detail.map((function(t){return t!==p.detail[0]?t:Object(g.a)(Object(g.a)({},t),{},{point:e.target.value})}))})),void 0==p.detail[0]&&e.target.value.length>0)){p.detail[0]={point:e.target.value,pointMarked:!1};e.target.value;b(Object(g.a)(Object(g.a)({},p),{},{detail:p.detail.map((function(e){return e}))}))}if("pointTwo"===e.target.id&&(b(Object(g.a)(Object(g.a)({},p),{},{detail:p.detail.map((function(t){return t!==p.detail[1]?t:Object(g.a)(Object(g.a)({},t),{},{point:e.target.value})}))})),void 0==p.detail[1]&&e.target.value.length>0)){p.detail[1]={point:e.target.value,pointMarked:!1};e.target.value;b(Object(g.a)(Object(g.a)({},p),{},{detail:p.detail.map((function(e){return e}))}))}if("pointThree"===e.target.id&&(b(Object(g.a)(Object(g.a)({},p),{},{detail:p.detail.map((function(t){return t!==p.detail[2]?t:Object(g.a)(Object(g.a)({},t),{},{point:e.target.value})}))})),void 0==p.detail[2]&&e.target.value.length>0)){p.detail[2]={point:e.target.value,pointMarked:!1};e.target.value;b(Object(g.a)(Object(g.a)({},p),{},{detail:p.detail.map((function(e){return e}))}))}"selectColor"===e.target.id&&(console.log(e.target.value),b(Object(g.a)(Object(g.a)({},p),{},{flag:e.target.value})))};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"edit-container"},o.a.createElement("form",{onSubmit:function(t,a){t.preventDefault(),console.log(p.flag),console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"),e.editTask(p),e.addAfterEdit(p),e.displayDetail(p.id),e.display("task")},type:"submit"},o.a.createElement("input",{onChange:f,value:p.title,placeholder:"optional",id:"newTask",type:"text"}),o.a.createElement("label",{htmlFor:"text"},"new task"),o.a.createElement("input",{onChange:f,value:p.detail[0]?p.detail[0].point:null,placeholder:"optional",id:"pointOne",type:"text"}),o.a.createElement("label",{htmlFor:"text"},"point one"),o.a.createElement("input",{onChange:f,value:p.detail[1]?p.detail[1].point:null,placeholder:"optional",id:"pointTwo",type:"text"}),o.a.createElement("label",{htmlFor:"text"},"point two"),o.a.createElement("input",{onChange:f,value:p.detail[2]?p.detail[2].point:null,placeholder:"optional",id:"pointThree",type:"text"}),o.a.createElement("label",{htmlFor:"text"},"point three"),o.a.createElement("select",{id:"selectColor",onChange:f},o.a.createElement("option",{value:"yellow"},"Miscelanneus-yellow"),o.a.createElement("option",{value:"green"},"Personal-green"),o.a.createElement("option",{value:"red"},"Urgent!-red"),o.a.createElement("option",{value:"blue"},"Work-blue"),o.a.createElement("option",{value:"purple"},"Family-purple")),o.a.createElement(E.a,{selected:d,onChange:function(e){return function(e){s(e),p.date=e,console.log(e),console.log(p.date),console.log(d),b(Object(g.a)(Object(g.a)({},p),{},{date:e}))}(e)},timeInputLabel:"Time:",dateFormat:"MM/dd/yyyy h:mm aa",showTimeInput:!0,placeholderText:"Click to select a date"}),o.a.createElement("button",null,"EDIT"))))}));var O=Object(r.b)((function(e){return{position:e.position,items:e.item}}))((function(e){console.log(e.items.todos);var t=e.items.todos.filter((function(e){return!0===e.alarm.isAlarm}));return o.a.createElement("div",{className:"mobile"},o.a.createElement(v,null),"list"===e.position.position?o.a.createElement(b,null):null,"task"===e.position.position?o.a.createElement(p,null):null,"add"===e.position.position?o.a.createElement(h,null):null,"edit"===e.position.position?o.a.createElement(k,null):null,t[0]&&!0===t[0].alarm.isAlarm?o.a.createElement(u,null):null)}));var T=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(O,null))},j=a(17),y={position:"list"},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DISPLAY":return console.log(t.id),console.log(e),Object(g.a)(Object(g.a)({},e),{},{position:t.id});case"DISPLAY_TASK":return Object(g.a)(Object(g.a)({},e),{},{position:t.task})}return e},w=a(35),D={todos:[{title:"get out of bed",titleMarked:!1,id:1,date:new Date(2021,11,24,10,33),edit:!1,flag:"green",alarm:{setAlarm:null,isAlarm:!1},detail:[{point:"wake my wife up",pointMarked:!1},{point:"check the weather",pointMarked:!1},{point:"nice cup of coffee",pointMarked:!1}],notes:"Pour almond milk, coffee, sugar, and cream cheese into large plastic cup; blend with an immersion blender until the cream cheese is completely blended into the liquid, about 1 minute. Pour the blended beverage into a tall glass with ice cubes.Flavor variations: add 2 teaspoons of sugar-free chocolate syrup or other flavor, remembering to reduce the amount of sucralose used."},{title:"walk the dog",titleMarked:!1,id:2,date:new Date(2022,11,24,10,33),edit:!1,flag:"orange",alarm:{setAlarm:null,isAlarm:!1},detail:[{point:"at least 2 km",pointMarked:!1}],notes:"Put a leash and collar on the dog. There will come a time when your four-legged friend will recognize it is time to go for a walk by you simply reaching for the leash. Introduce this in your dog\u2019s mind early on by using a collar at a young age. Place the collar around the dog\u2019s neck and say \u201clet\u2019s walk\u201d with the leash in full view."},{title:"to have fun at the party",titleMarked:!1,id:3,date:null,edit:!1,flag:"purple",alarm:{setAlarm:null,isAlarm:!1},detail:[{point:"only few drinks",pointMarked:!1},{point:"meet new friends",pointMarked:!1}],notes:"Pimm\u2019s Cup. Starting with a large pitcher, combine the Pimm\u2019s, orange and lemon slices and the mint. Leave it to chill for around 10 minutes then stir in the ginger ale. Take the pint glasses and stand two cucumber wedges on end in each glass. Fill them up halfway with ice then add the Pimm\u2019s mixture. To finish, garnish by pushing the mint down into the drinks and divide the orange, lemon and apple slices between the drinks"}],selectedItem:{id:1}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DELETE":var a=e.todos.filter((function(e){return e.id!=t.id}));return Object(g.a)(Object(g.a)({},e),{},{todos:a,selectedItem:a[0]});case"DISPLAY_DETAIL":return Object(g.a)(Object(g.a)({},e),{},{selectedItem:{id:t.id}});case"ADD_NEW_TASK":return console.log(e.todos),console.log("cccccccccccccccccccccccccc",t.newTask),Object(g.a)(Object(g.a)({},e),{},{todos:[].concat(Object(w.a)(e.todos),[t.newTask]),selectedItem:{id:t.newTask.id}});case"ADD_AFTER_EDIT":console.log(t),console.log(t.editedTask.detail),console.log(e.todos);var n=t.editedTask.detail.length>0?t.editedTask.detail.filter((function(e){return null!=e.point})):null;return console.log(n),Object(g.a)(Object(g.a)({},e),{},{todos:e.todos.map((function(e){return e.id!=t.editedTask.id?e:Object(g.a)(Object(g.a)({},e),{},{title:t.editedTask.title,date:t.editedTask.date,detail:n,flag:t.editedTask.flag})})),selectedItem:{id:t.editedTask.id}});case"CHANGE_CHECK":var o=e.todos.map((function(e){return Object(g.a)(Object(g.a)({},e),{},{detail:e.detail.map((function(e){return t.id!==e.point?e:Object(g.a)(Object(g.a)({},e),{},{pointMarked:!e.pointMarked})}))})}));return Object(g.a)(Object(g.a)({},e),{},{todos:o});case"CHANGE_TITLE_TASK":console.log(e.todos),console.log(t.each);var l=e.todos.find((function(e){return e===t.each})),i=e.todos.filter((function(e){return e!=l}));return console.log(l),console.log(l.titleMarked),console.log(e),Object(g.a)(Object(g.a)({},e),{},{todos:[].concat(Object(w.a)(i),[Object(g.a)(Object(g.a)({},l),{},{titleMarked:!l.titleMarked})])});case"CHANGE_TITLE_LIST":console.log(t.each);var c=e.todos.find((function(e){return e===t.each})),r=e.todos.filter((function(e){return e!=c}));return Object(g.a)(Object(g.a)({},e),{},{todos:[].concat(Object(w.a)(r),[Object(g.a)(Object(g.a)({},c),{},{titleMarked:!c.titleMarked})])});case"CLICK_TO_EDIT_TASK":return console.log(t.id),console.log(e.todos),Object(g.a)(Object(g.a)({},e),{},{todos:e.todos.map((function(e){return e.id!=t.id?e:Object(g.a)(Object(g.a)({},e),{},{edit:!0})}))});case"EDIT_TASK_STATE":console.log(e.todos),console.log(t.task);var d=e.todos.map((function(e){return Object(g.a)(Object(g.a)({},e),{},{edit:!1})}));return console.log(d),Object(g.a)(Object(g.a)({},e),{},{todos:d});case"SET_ALARM":return console.log(e.todos),console.log(t.id),Object(g.a)(Object(g.a)({},e),{},{todos:e.todos.map((function(e){return e.id!=t.id?e:Object(g.a)(Object(g.a)({},e),{},{alarm:{setAlarm:null,isAlarm:!0}})}))})}return e},C=Object(j.b)({position:A,item:I}),N=Object(j.c)(C);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(r.a,{store:N},o.a.createElement(T,null))),document.getElementById("root"))},38:function(e,t,a){e.exports=a.p+"static/media/alarm.8ad1d90d.mp3"},64:function(e,t,a){e.exports=a(130)},69:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.09c5b641.chunk.js.map