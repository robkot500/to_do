(this.webpackJsonpto_do=this.webpackJsonpto_do||[]).push([[0],{130:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(14),i=a.n(l),c=(a(69),a(8)),r=a(7);Object(r.b)((function(e){return{items:e.item}}))((function(e){return console.log(e.items.todos[0].id),o.a.createElement("div",null,o.a.createElement("input",{id:e.items.todos[0].id,type:"checkbox"}),o.a.createElement("label",{htmlFor:e.items.todos[0].id},e.items.todos[0].detail[0].point))}));var d=Object(r.b)((function(e){return console.log(e),{items:e.item}}),(function(e){return{alarmOn:function(t){e({type:"ALARM_ON",id:t})},alarmOff:function(t){e({type:"ALARM_OFF",id:t})}}}))((function(e){var t=e.items.todos.filter((function(t){return e.items.selectedItem.id===t.id}));console.log(t);var a=t[0].date,l=Object(n.useState)(a),i=Object(c.a)(l,2),r=i[0];return i[1],Object(n.useEffect)((function(){var a=setInterval((function(){var n=(new Date).getTime(),o=r-n,l=Math.floor(o/864e5),i=Math.floor(o%864e5/36e5),c=Math.floor(o%36e5/6e4),d=Math.floor(o%6e4/1e3);console.log(l+"d "+i+"h "+c+"m "+d+"s "),o<0&&t[0].date-new Date<=1500&&t[0].date-new Date>=-1500&&(e.alarmOn(t[0].id),setTimeout((function(){e.alarmOff(t[0].id)}),1e4),clearInterval(a));e.items.todos.filter((function(e){return e.id===t[0].id}));!1===t[0].alarm.iconOn&&clearInterval(a)}),1e3);return function(){clearInterval(a)}}),[t[0].alarm.iconOn]),o.a.createElement(o.a.Fragment,null)}));var s=Object(r.b)((function(e){return console.log(e),{items:e.item,position:e.position}}),(function(e){return{deleteItem:function(t){e({type:"DELETE",id:t})},pointCheck:function(t){e({type:"CHANGE_CHECK",id:t})},titleCheckTask:function(t){e({type:"CHANGE_TITLE_TASK",each:t})},display:function(t,a){e({type:"DISPLAY",task:t,id:a})},clickToEditTask:function(t){e({type:"CLICK_TO_EDIT_TASK",id:t})},editTaskState:function(){e({type:"EDIT_TASK_STATE"})}}}))((function(e){console.log(e);var t=function(t){console.log(t),e.titleCheckTask(t)};console.log(e.items);var a=e.items.todos.filter((function(t){return console.log(e.items.selectedItem),console.log(e.items.selectedItem.id),t.id===e.items.selectedItem.id}));console.log(a[0]),e.items.todos.filter((function(e){return!0===e.edit})),Object(n.useEffect)((function(){l()}),[]);var l=function(){e.editTaskState()},i=Object(c.a)(a,1)[0];if(a.length<1)return o.a.createElement("div",{className:"no-todos-container"},o.a.createElement("p",{className:"no-todos"},"You have no todos left"),o.a.createElement("div",{className:"leisure"}));console.log(i.detail);var r=i.detail.map((function(t){if(null!=t.point)return o.a.createElement("div",{key:t.point},o.a.createElement("input",{onClick:function(a){!function(t){e.pointCheck(t)}(t.point)},className:"point-check",id:t.point,type:"checkbox",checked:t.pointMarked}),o.a.createElement("label",{className:"point-label",htmlFor:t.point},t.point))}));return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"task-container"},o.a.createElement("div",{className:"title"},o.a.createElement("div",{className:"title-wrapper"},o.a.createElement("input",{onClick:function(e){t(a[0])},className:"title-check",id:a[0].title,type:"checkbox",checked:a[0].titleMarked}),o.a.createElement("label",{onClick:function(e){t(a[0])},className:"title-label",htmlFor:"todo","data-content":i.title},i.title)),o.a.createElement("i",{onClick:function(){var t;t=i.id,e.deleteItem(t)},className:"fas fa-trash-alt"})),r,o.a.createElement("div",null,null!=a[0].date?a[0].date.toLocaleDateString():null),o.a.createElement("div",{className:"notes"},a[0].notes),o.a.createElement("button",{onClick:function(){var t,n;t=a[0].id,n="edit",e.display(t,n),e.clickToEditTask(t),console.log(t),console.log(t)}},"EDIT"),o.a.createElement(d,null)))}));var u=Object(r.b)((function(e,t){return{items:e.item,position:e.position}}),(function(e){return{deleteItem:function(t){e({type:"DELETE",id:t})},displayTask:function(t){e({type:"DISPLAY_TASK",task:t})},displayDetail:function(t){e({type:"DISPLAY_DETAIL",id:t})},changeTitleList:function(t){e({type:"CHANGE_TITLE_LIST",each:t})},alarmOff:function(t){e({type:"ALARM_OFF",id:t})}}}))((function(e){console.log(e.items.todos),e.items.todos.sort((function(e,t){return e.id-t.id}));var t=function(t){e.changeTitleList(t)};if(e.items.todos.map((function(e){})),e.items.todos.length<1)return o.a.createElement("div",{className:"no-todos-container"},o.a.createElement("p",{className:"no-todos"},"You have no todos left"),o.a.createElement("div",{className:"leisure"}));e.items.todos.map((function(e){return!0===e.iconOn?o.a.createElement("i",{class:"fas fa-bell"}):o.a.createElement("i",{class:"fas fa-bell-slash"})}));var a=e.items.todos.map((function(a){return o.a.createElement("div",{key:a.id,className:"item"},o.a.createElement("div",{className:"title"},o.a.createElement("div",{className:"title-wrapper"},o.a.createElement("input",{onClick:function(e){t(a)},className:"title-check",id:a.title,type:"checkbox",checked:a.titleMarked}),o.a.createElement("label",{onClick:function(e){t(a)},className:"title-label",htmlFor:"todo","data-content":a.title},a.title))),o.a.createElement("div",{className:"detail"},o.a.createElement("div",{className:"flag"},o.a.createElement("i",{class:"fas fa-flag",style:{color:a.flag}})),!0===a.alarm.iconOn?o.a.createElement("i",{class:"fas fa-bell",onClick:function(){var t;t=a.id,e.alarmOff(t)}}):o.a.createElement("i",{class:"fas fa-bell-slash"}),o.a.createElement("div",{className:"deadline"},a.date?a.date.toLocaleTimeString([],{timeStyle:"short"}):"date not set",", ",a.date?a.date.toLocaleDateString():null),o.a.createElement("div",{onClick:function(){var t,n;t="task",n=a.id,"task"===t&&e.displayTask(t),e.displayDetail(n)},className:"check-detail"},"DETAILS"),o.a.createElement("i",{onClick:function(){var t;t=a.id,e.deleteItem(t)},className:"fas fa-trash-alt"})),o.a.createElement(d,null))}));return o.a.createElement("div",{className:"list-container"},a)})),m=a(3),p=a(27),f=a.n(p);a(50);var g=Object(r.b)((function(e){return console.log(e),{add:e,position:e.position}}),(function(e){return{addNewTask:function(t){e({type:"ADD_NEW_TASK",newTask:t})},displayDetail:function(t){e({type:"DISPLAY_DETAIL",id:t})},display:function(t){e({type:"DISPLAY",id:t})}}}))((function(e){console.log(e),console.log(e.add.item.todos);var t=Object(n.useState)(null),a=Object(c.a)(t,2),l=a[0],i=a[1],r=Object(n.useState)({title:null,titleMarked:!1,id:null,date:null,edit:!1,flag:"yellow",alarm:{setAlarm:null,isAlarm:!1,iconOn:!1},detail:[{point:null,pointMarked:!1},{point:null,pointMarked:!1},{point:null,pointMarked:!1}]}),d=Object(c.a)(r,2),s=d[0],u=d[1],p=function(e){"newTask"===e.target.id&&(s.title=e.target.value,console.log(s.title)),"pointOne"===e.target.id&&u(Object(m.a)(Object(m.a)({},s),{},{detail:s.detail.map((function(t){return t!=s.detail[0]?t:{point:e.target.value,pointMarked:!1}}))})),"pointTwo"===e.target.id&&u(Object(m.a)(Object(m.a)({},s),{},{detail:s.detail.map((function(t){return t!=s.detail[1]?t:{point:e.target.value,pointMarked:!1}}))})),"pointThree"===e.target.id&&u(Object(m.a)(Object(m.a)({},s),{},{detail:s.detail.map((function(t){return t!=s.detail[2]?t:{point:e.target.value,pointMarked:!1}}))})),"selectColor"===e.target.id&&u(Object(m.a)(Object(m.a)({},s),{},{flag:e.target.value})),"notes"===e.target.id&&u(Object(m.a)(Object(m.a)({},s),{},{notes:e.target.value})),"alarm"===e.target.id&&(console.log("alarm",e.target.value),s.alarm.setAlarm=e.target.value,console.log(s.alarm.setAlarm),s.alarm.iconOn=!0),s.id=(new Date).getTime()};return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{onSubmit:function(t,a){t.preventDefault(),console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",s.alarm.iconOn),s.date=l,e.displayDetail(s.id),e.addNewTask(s),e.display("task")},type:"submit"},o.a.createElement("input",{onChange:p,id:"newTask",type:"text"}),o.a.createElement("label",{htmlFor:"text"},"new task"),o.a.createElement("input",{onChange:p,placeholder:"optional",id:"pointOne",type:"text"}),o.a.createElement("label",{htmlFor:"text"},"point one"),o.a.createElement("input",{onChange:p,placeholder:"optional",id:"pointTwo",type:"text"}),o.a.createElement("label",{htmlFor:"text"},"point two"),o.a.createElement("input",{onChange:p,placeholder:"optional",id:"pointThree",type:"text"}),o.a.createElement("label",{htmlFor:"text"},"point three"),o.a.createElement("select",{id:"selectColor",onChange:p},o.a.createElement("option",{value:"orange"},"Miscelanneus-orange"),o.a.createElement("option",{value:"green"},"Personal-green"),o.a.createElement("option",{value:"red"},"Urgent!-red"),o.a.createElement("option",{value:"blue"},"Work-blue"),o.a.createElement("option",{value:"purple"},"Family-purple")),o.a.createElement(f.a,{selected:l,onChange:function(e){return function(e){i(e)}(e)},timeInputLabel:"Time:",dateFormat:"MM/dd/yyyy h:mm aa",showTimeInput:!0,placeholderText:"Click to select a date"}),o.a.createElement("select",{id:"alarm",onChange:p},o.a.createElement("option",{value:null},"---"),o.a.createElement("option",{value:l},"date"),o.a.createElement("option",{value:l-36e5},"one hour before"),o.a.createElement("option",{value:l-18e5},"half an hour before"),o.a.createElement("option",{value:"blue"},"Work-blue"),o.a.createElement("option",{value:"purple"},"Family-purple")),o.a.createElement("textarea",{onChange:p,name:"notes",id:"notes",cols:"35",rows:"10"}),o.a.createElement("button",null,"ADD")))})),b=a(63),E=a.n(b);var h=function(){Object(n.useEffect)((function(){var t=document.getElementById("audioID");console.log(t),e(t)}));var e=function(e){e.play()};return o.a.createElement("div",null,o.a.createElement("audio",{id:"audioID"},o.a.createElement("source",{src:E.a,type:"audio/mpeg"})))};var v=Object(r.b)((function(e){return console.log(e),{position:e.position,items:e.item}}),(function(e){return{display:function(t){e({type:"DISPLAY",id:t})}}}))((function(e){var t=Object(n.useState)(new Date),a=Object(c.a)(t,2),l=a[0],i=a[1];Object(n.useEffect)((function(){var e=setInterval((function(){i(new Date)}),1e3);return function(){clearInterval(e)}}),[]);var r=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][(new Date).getDay()],d=l.toLocaleDateString(),s=l.toLocaleTimeString(),u=function(t){"list"===t.target.id&&e.display(t.target.id),"task"===t.target.id&&e.display(t.target.id),"add"===t.target.id&&e.display(t.target.id),"edit"===t.target.id&&e.display(t.target.id)},m=e.items.todos.filter((function(e){return!0===e.alarm.isAlarm}));return o.a.createElement("header",null,o.a.createElement("div",{className:"up"},o.a.createElement("div",{className:"my-day"},r,o.a.createElement("div",{className:"date"},s,", ",d))),o.a.createElement("div",{className:"down"},o.a.createElement("div",{className:"button-wrapper"},o.a.createElement("div",{id:"list",onClick:function(e){return u(e)},className:"list"===e.position.position?"button button-additional":"button"},"LIST"),o.a.createElement("div",{id:"task",onClick:function(e){return u(e)},className:"task"===e.position.position?"button button-additional":"button"},"TASK"),o.a.createElement("div",{id:"add",onClick:function(e){return u(e)},className:"add"===e.position.position?"button button-additional":"button"},"ADD"),o.a.createElement("div",{id:"edit",onClick:function(e){return u(e)},className:"edit"===e.position.position?"button button-additional":"button"},"EDIT")),o.a.createElement("div",{className:"button-box"})),m.length>0&&!0===m[0].alarm.isAlarm?o.a.createElement(h,null):null)}));var O=Object(r.b)((function(e){return{add:e,position:e.position}}),(function(e){return{editTask:function(t){e({type:"EDIT_TASK",editTask:t})},addAfterEdit:function(t){e({type:"ADD_AFTER_EDIT",editedTask:t})},displayDetail:function(t){e({type:"DISPLAY_DETAIL",id:t})},display:function(t){e({type:"DISPLAY",id:t})}}}))((function(e){console.log(e.add.item.todos[0]);var t,a,l=e.add.item.todos.filter((function(e){return!0===e.edit}));console.log(l[0]),l.length>0?(t=l[0].date,a=l[0]):e.add.item.todos.length>0&&0===l.length?(t=e.add.item.todos[0].date,a=e.add.item.todos[0],console.log("wwwwww")):(t=null,a=null),console.log(e.add.item.todos.length),console.log(l.length),console.log(a);var i=Object(n.useState)(t),r=Object(c.a)(i,2),d=r[0],s=r[1],u=Object(n.useState)(a),p=Object(c.a)(u,2),g=p[0],b=p[1];if(console.log(g),null===a)return o.a.createElement("div",{className:"no-todos-container"},o.a.createElement("p",{className:"no-todos"},"You have no todos left"),o.a.createElement("div",{className:"leisure"}));console.log(g);var E=function(e){if("newTask"===e.target.id&&b(Object(m.a)(Object(m.a)({},g),{},{title:e.target.value})),"pointOne"===e.target.id&&(b(Object(m.a)(Object(m.a)({},g),{},{detail:g.detail.map((function(t){return t!==g.detail[0]?t:Object(m.a)(Object(m.a)({},t),{},{point:e.target.value})}))})),void 0==g.detail[0]&&e.target.value.length>0)){g.detail[0]={point:e.target.value,pointMarked:!1};e.target.value;b(Object(m.a)(Object(m.a)({},g),{},{detail:g.detail.map((function(e){return e}))}))}if("pointTwo"===e.target.id&&(b(Object(m.a)(Object(m.a)({},g),{},{detail:g.detail.map((function(t){return t!==g.detail[1]?t:Object(m.a)(Object(m.a)({},t),{},{point:e.target.value})}))})),void 0==g.detail[1]&&e.target.value.length>0)){g.detail[1]={point:e.target.value,pointMarked:!1};e.target.value;b(Object(m.a)(Object(m.a)({},g),{},{detail:g.detail.map((function(e){return e}))}))}if("pointThree"===e.target.id&&(b(Object(m.a)(Object(m.a)({},g),{},{detail:g.detail.map((function(t){return t!==g.detail[2]?t:Object(m.a)(Object(m.a)({},t),{},{point:e.target.value})}))})),void 0==g.detail[2]&&e.target.value.length>0)){g.detail[2]={point:e.target.value,pointMarked:!1};e.target.value;b(Object(m.a)(Object(m.a)({},g),{},{detail:g.detail.map((function(e){return e}))}))}"selectColor"===e.target.id&&(console.log(e.target.value),b(Object(m.a)(Object(m.a)({},g),{},{flag:e.target.value})))};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"edit-container"},o.a.createElement("form",{onSubmit:function(t,a){t.preventDefault(),console.log(g.flag),console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"),e.editTask(g),e.addAfterEdit(g),e.displayDetail(g.id),e.display("task")},type:"submit"},o.a.createElement("input",{onChange:E,value:g.title,placeholder:"optional",id:"newTask",type:"text"}),o.a.createElement("label",{htmlFor:"text"},"new task"),o.a.createElement("input",{onChange:E,value:g.detail[0]?g.detail[0].point:null,placeholder:"optional",id:"pointOne",type:"text"}),o.a.createElement("label",{htmlFor:"text"},"point one"),o.a.createElement("input",{onChange:E,value:g.detail[1]?g.detail[1].point:null,placeholder:"optional",id:"pointTwo",type:"text"}),o.a.createElement("label",{htmlFor:"text"},"point two"),o.a.createElement("input",{onChange:E,value:g.detail[2]?g.detail[2].point:null,placeholder:"optional",id:"pointThree",type:"text"}),o.a.createElement("label",{htmlFor:"text"},"point three"),o.a.createElement("select",{id:"selectColor",onChange:E},o.a.createElement("option",{value:"yellow"},"Miscelanneus-yellow"),o.a.createElement("option",{value:"green"},"Personal-green"),o.a.createElement("option",{value:"red"},"Urgent!-red"),o.a.createElement("option",{value:"blue"},"Work-blue"),o.a.createElement("option",{value:"purple"},"Family-purple")),o.a.createElement(f.a,{selected:d,onChange:function(e){return function(e){s(e),g.date=e,console.log(e),console.log(g.date),console.log(d),b(Object(m.a)(Object(m.a)({},g),{},{date:e}))}(e)},timeInputLabel:"Time:",dateFormat:"MM/dd/yyyy h:mm aa",showTimeInput:!0,placeholderText:"Click to select a date"}),o.a.createElement("button",null,"EDIT"))))}));var k=Object(r.b)((function(e){return{position:e.position,items:e.item}}))((function(e){return console.log(e.items.todos),o.a.createElement("div",{className:"mobile"},o.a.createElement(v,null),"list"===e.position.position?o.a.createElement(u,null):null,"task"===e.position.position?o.a.createElement(s,null):null,"add"===e.position.position?o.a.createElement(g,null):null,"edit"===e.position.position?o.a.createElement(O,null):null)}));var j=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(k,null))},T=a(17),y={position:"list"},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DISPLAY":return console.log(t.id),console.log(e),Object(m.a)(Object(m.a)({},e),{},{position:t.id});case"DISPLAY_TASK":return Object(m.a)(Object(m.a)({},e),{},{position:t.task})}return e},w=a(35),D={todos:[{title:"get out of bed",titleMarked:!1,id:1,date:new Date(2021,11,24,10,33),edit:!1,flag:"green",alarm:{setAlarm:null,isAlarm:!1,iconOn:!1},detail:[{point:"wake my wife up",pointMarked:!1},{point:"check the weather",pointMarked:!1},{point:"nice cup of coffee",pointMarked:!1}],notes:"Pour almond milk, coffee, sugar, and cream cheese into large plastic cup; blend with an immersion blender until the cream cheese is completely blended into the liquid, about 1 minute. Pour the blended beverage into a tall glass with ice cubes.Flavor variations: add 2 teaspoons of sugar-free chocolate syrup or other flavor, remembering to reduce the amount of sucralose used."},{title:"walk the dog",titleMarked:!1,id:2,date:new Date(2022,11,24,10,33),edit:!1,flag:"orange",alarm:{setAlarm:null,isAlarm:!1,iconOn:!1},detail:[{point:"at least 2 km",pointMarked:!1}],notes:"Put a leash and collar on the dog. There will come a time when your four-legged friend will recognize it is time to go for a walk by you simply reaching for the leash. Introduce this in your dog\u2019s mind early on by using a collar at a young age. Place the collar around the dog\u2019s neck and say \u201clet\u2019s walk\u201d with the leash in full view."},{title:"to have fun at the party",titleMarked:!1,id:3,date:null,edit:!1,flag:"purple",alarm:{setAlarm:null,isAlarm:!1,iconOn:!1},detail:[{point:"only few drinks",pointMarked:!1},{point:"meet new friends",pointMarked:!1}],notes:"Pimm\u2019s Cup. Starting with a large pitcher, combine the Pimm\u2019s, orange and lemon slices and the mint. Leave it to chill for around 10 minutes then stir in the ginger ale. Take the pint glasses and stand two cucumber wedges on end in each glass. Fill them up halfway with ice then add the Pimm\u2019s mixture. To finish, garnish by pushing the mint down into the drinks and divide the orange, lemon and apple slices between the drinks"}],selectedItem:{id:1}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DELETE":var a=e.todos.filter((function(e){return e.id!=t.id}));return Object(m.a)(Object(m.a)({},e),{},{todos:a,selectedItem:a[0]});case"DISPLAY_DETAIL":return Object(m.a)(Object(m.a)({},e),{},{selectedItem:{id:t.id}});case"ADD_NEW_TASK":return console.log(e.todos),console.log("cccccccccccccccccccccccccc",t.newTask),Object(m.a)(Object(m.a)({},e),{},{todos:[].concat(Object(w.a)(e.todos),[t.newTask]),selectedItem:{id:t.newTask.id}});case"ADD_AFTER_EDIT":console.log(t),console.log(t.editedTask.detail),console.log(e.todos);var n=t.editedTask.detail.length>0?t.editedTask.detail.filter((function(e){return null!=e.point})):null;return console.log(n),Object(m.a)(Object(m.a)({},e),{},{todos:e.todos.map((function(e){return e.id!=t.editedTask.id?e:Object(m.a)(Object(m.a)({},e),{},{title:t.editedTask.title,date:t.editedTask.date,detail:n,flag:t.editedTask.flag})})),selectedItem:{id:t.editedTask.id}});case"CHANGE_CHECK":var o=e.todos.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{detail:e.detail.map((function(e){return t.id!==e.point?e:Object(m.a)(Object(m.a)({},e),{},{pointMarked:!e.pointMarked})}))})}));return Object(m.a)(Object(m.a)({},e),{},{todos:o});case"CHANGE_TITLE_TASK":console.log(e.todos),console.log(t.each);var l=e.todos.find((function(e){return e===t.each})),i=e.todos.filter((function(e){return e!=l}));return console.log(l),console.log(l.titleMarked),console.log(e),Object(m.a)(Object(m.a)({},e),{},{todos:[].concat(Object(w.a)(i),[Object(m.a)(Object(m.a)({},l),{},{titleMarked:!l.titleMarked})])});case"CHANGE_TITLE_LIST":console.log(t.each);var c=e.todos.find((function(e){return e===t.each})),r=e.todos.filter((function(e){return e!=c}));return Object(m.a)(Object(m.a)({},e),{},{todos:[].concat(Object(w.a)(r),[Object(m.a)(Object(m.a)({},c),{},{titleMarked:!c.titleMarked})])});case"CLICK_TO_EDIT_TASK":return console.log(t.id),console.log(e.todos),Object(m.a)(Object(m.a)({},e),{},{todos:e.todos.map((function(e){return e.id!=t.id?e:Object(m.a)(Object(m.a)({},e),{},{edit:!0})}))});case"EDIT_TASK_STATE":console.log(e.todos),console.log(t.task);var d=e.todos.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{edit:!1})}));return console.log(d),Object(m.a)(Object(m.a)({},e),{},{todos:d});case"ALARM_ON":return console.log(e.todos),console.log(t.id),Object(m.a)(Object(m.a)({},e),{},{todos:e.todos.map((function(e){return e.id!=t.id?e:Object(m.a)(Object(m.a)({},e),{},{alarm:{setAlarm:null,isAlarm:!0,iconOn:!0}})}))});case"ALARM_OFF":return console.log(e.todos),console.log(t.id),Object(m.a)(Object(m.a)({},e),{},{todos:e.todos.map((function(e){return e.id!=t.id?e:Object(m.a)(Object(m.a)({},e),{},{alarm:{setAlarm:null,isAlarm:!1,iconOn:!1}})}))})}return e},C=Object(T.b)({position:A,item:I}),N=Object(T.c)(C);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(r.a,{store:N},o.a.createElement(j,null))),document.getElementById("root"))},63:function(e,t,a){e.exports=a.p+"static/media/alarm.8ad1d90d.mp3"},64:function(e,t,a){e.exports=a(130)},69:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.ca0b7324.chunk.js.map