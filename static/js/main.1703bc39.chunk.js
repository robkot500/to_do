(this.webpackJsonpto_do=this.webpackJsonpto_do||[]).push([[0],{131:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(14),o=a.n(i),c=(a(70),a(8)),r=a(7);Object(r.b)((function(e){return{items:e.item}}))((function(e){return console.log(e.items.todos[0].id),l.a.createElement("div",null,l.a.createElement("input",{id:e.items.todos[0].id,type:"checkbox"}),l.a.createElement("label",{htmlFor:e.items.todos[0].id},e.items.todos[0].detail[0].point))}));var s=Object(r.b)((function(e){return{items:e.item}}),(function(e){return{alarmOn:function(t){e({type:"ALARM_ON",id:t})},alarmOff:function(t){e({type:"ALARM_OFF",id:t})},countDown:function(t,a){e({type:"COUNT_DOWN",id:t,count:a})}}}))((function(e){var t=e.items.todos.filter((function(t){return t.id===e.alarmId}));t[0]?console.log():t=e.items.todos;var a=Object(n.useState)(t[0].date),i=Object(c.a)(a,2),o=i[0],r=(i[1],e.items.todos.filter((function(e){return null!=e.alarm.setAlarm})));return Object(n.useEffect)((function(){var a=setInterval((function(){var n=(new Date).getTime(),l=o-n,i=Math.floor(l/864e5)+"d "+Math.floor(l%864e5/36e5)+"h "+Math.floor(l%36e5/6e4)+"m "+Math.floor(l%6e4/1e3)+"s ";e.countDown(e.alarmId,i),r[0]&&r[0].alarm.setAlarm-n<0&&(e.alarmOn(t[0].id),setTimeout((function(){e.alarmOff(t[0].id)}),1e4)),l<0&&t[0].date-new Date<=1500&&t[0].date-new Date>=-1500&&(e.alarmOn(t[0].id),setTimeout((function(){e.alarmOff(t[0].id)}),1e4),clearInterval(a));e.items.todos.filter((function(e){return e.id===t[0].id}))}),1e3);return function(){clearInterval(a)}}),[t[0].alarm.iconOn]),l.a.createElement(l.a.Fragment,null)}));var d=Object(r.b)((function(e){return{items:e.item,position:e.position}}),(function(e){return{deleteItem:function(t){e({type:"DELETE",id:t})},pointCheck:function(t){e({type:"CHANGE_CHECK",id:t})},titleCheckTask:function(t){e({type:"CHANGE_TITLE_TASK",each:t})},display:function(t,a){e({type:"DISPLAY",task:t,id:a})},clickToEditTask:function(t){e({type:"CLICK_TO_EDIT_TASK",id:t})},editTaskState:function(){e({type:"EDIT_TASK_STATE"})}}}))((function(e){var t=function(t){e.titleCheckTask(t)},a=e.items.todos.filter((function(t){return t.id===e.items.selectedItem.id}));e.items.todos.filter((function(e){return!0===e.edit})),Object(n.useEffect)((function(){r()}),[]);var i,o,r=function(){e.editTaskState()},d=Object(c.a)(a,1)[0];if(a.length<1)return l.a.createElement("div",{className:"no-todos-container"},l.a.createElement("p",{className:"no-todos"},"You have no todos left"),l.a.createElement("div",{className:"leisure"}));console.log(a[0].flag),"high"===a[0].flag&&(i="#5B63B6",o="high priority"),"medium"===a[0].flag&&(i="#7B89F2",o="medium priority"),"low"===a[0].flag&&(i="#BCC5FF",o="low priority");var u=d.detail.map((function(t){if(null!=t.point)return l.a.createElement("div",{className:"task-point",key:t.point},l.a.createElement("input",{onClick:function(a){!function(t){e.pointCheck(t)}(t.point)},className:"point-check",id:t.point,type:"checkbox",checked:t.pointMarked}),l.a.createElement("label",{className:"point-label",htmlFor:t.point},t.point))}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"task-container"},l.a.createElement("div",{className:"title-points-box"},l.a.createElement("div",{className:"title-trash-box"},l.a.createElement("div",{className:"title-wrapper"},l.a.createElement("input",{onClick:function(e){t(a[0])},className:"title-check",id:a[0].title,type:"checkbox",checked:a[0].titleMarked}),l.a.createElement("label",{onClick:function(e){t(a[0])},className:"title-label",htmlFor:"todo","data-content":d.title},d.title))),u,l.a.createElement("div",{class:"title-points-buttons"},l.a.createElement("div",{classname:"button-edit"},l.a.createElement("i",{class:"fas fa-edit"}),"EDIT"),l.a.createElement("div",{className:"button-trash"},l.a.createElement("i",{class:"fas fa-trash-alt"}),"DELETE"))),l.a.createElement("div",{className:"task-flag"},l.a.createElement("i",{class:"fas fa-flag",style:{color:i}}),o),l.a.createElement("div",{className:"task-date"},l.a.createElement("i",{class:"fas fa-calendar-check"}),null!=a[0].date?a[0].date.toLocaleDateString():"date not set"),l.a.createElement("div",null,l.a.createElement("i",{class:"fas fa-stopwatch"}),a[0].countDown),l.a.createElement("div",{className:"task-notes-wrapper"},l.a.createElement("div",{className:"task-notes"},a[0].notes)),l.a.createElement("button",{onClick:function(){var t,n;t=a[0].id,n="edit",e.display(t,n),e.clickToEditTask(t)}},"EDIT"),l.a.createElement(s,null)))}));var u=Object(r.b)((function(e,t){return{items:e.item,position:e.position}}),(function(e){return{deleteItem:function(t){e({type:"DELETE",id:t})},displayTask:function(t){e({type:"DISPLAY_TASK",task:t})},displayDetail:function(t){e({type:"DISPLAY_DETAIL",id:t})},changeTitleList:function(t){e({type:"CHANGE_TITLE_LIST",each:t})},alarmOff:function(t){e({type:"ALARM_OFF",id:t})}}}))((function(e){e.items.todos.sort((function(e,t){return e.id-t.id}));var t=function(t){e.changeTitleList(t)};if(e.items.todos.map((function(e){})),e.items.todos.length<1)return l.a.createElement("div",{className:"no-todos-container"},l.a.createElement("p",{className:"no-todos"},"You have no todos left"),l.a.createElement("div",{className:"leisure"}));e.items.todos.map((function(e){return!0===e.iconOn?l.a.createElement("i",{class:"fas fa-bell"}):l.a.createElement("i",{class:"fas fa-bell-slash"})}));var a=e.items.todos.map((function(a){return l.a.createElement("div",{key:a.id,className:"item"},l.a.createElement("div",{className:"title"},l.a.createElement("div",{className:"title-wrapper"},l.a.createElement("input",{onClick:function(e){t(a)},className:"title-check",id:a.title,type:"checkbox",checked:a.titleMarked}),l.a.createElement("label",{onClick:function(e){t(a)},className:"title-label",htmlFor:"todo","data-content":a.title},a.title))),l.a.createElement("div",{className:"detail"},l.a.createElement("div",{className:"flag"},l.a.createElement("i",{class:"fas fa-flag",style:{color:a.flag}})),l.a.createElement("div",{className:"bell"},!0===a.alarm.iconOn?l.a.createElement("i",{class:"fas fa-bell",onClick:function(){var t;t=a.id,e.alarmOff(t)}}):l.a.createElement("i",{class:"far fa-bell"})),l.a.createElement("div",{className:"deadline"},a.date?a.date.toLocaleTimeString([],{timeStyle:"short"}):"date not set",", ",a.date?a.date.toLocaleDateString():null),l.a.createElement("div",{onClick:function(){var t,n;t="task",n=a.id,"task"===t&&e.displayTask(t),e.displayDetail(n)},className:"check-detail"},"DETAILS"),l.a.createElement("i",{onClick:function(){var t;t=a.id,e.deleteItem(t)},className:"fas fa-trash-alt"})))}));return l.a.createElement("div",{className:"list-container"},a,l.a.createElement("div",{class:"leisure-container"},l.a.createElement("div",{class:"list-leisure"})))})),m=a(3),p=a(27),f=a.n(p),b=(a(51),a(38)),E=Object(r.b)((function(e){return{items:e.item}}))((function(e){return l.a.createElement(b.a,{trigger:l.a.createElement("span",{className:"pointer"},"Here"),modal:!0,closeOnDocumentClick:!0},l.a.createElement("div",{className:" course-spec"}))}));var g=Object(r.b)((function(e){return{add:e,position:e.position}}),(function(e){return{addNewTask:function(t){e({type:"ADD_NEW_TASK",newTask:t})},displayDetail:function(t){e({type:"DISPLAY_DETAIL",id:t})},display:function(t){e({type:"DISPLAY",id:t})}}}))((function(e){var t=Object(n.useState)(null),a=Object(c.a)(t,2),i=a[0],o=a[1],r=Object(n.useState)({title:null,titleMarked:!1,id:null,edit:!1,flag:"yellow",date:null,countDown:null,alarm:{setAlarm:null,isAlarm:!1,iconOn:!1},detail:[{point:null,pointMarked:!1},{point:null,pointMarked:!1},{point:null,pointMarked:!1}],notes:null}),s=Object(c.a)(r,2),d=s[0],u=s[1];console.log(d);var p=function(e){"newTask"===e.target.id&&(u(Object(m.a)(Object(m.a)({},d),{},{id:(new Date).getTime()})),u(Object(m.a)(Object(m.a)({},d),{},{title:e.target.value}))),"pointOne"===e.target.id&&(console.log("fffffffffffffffffffffffffffffffffffffffff"),u(Object(m.a)(Object(m.a)({},d),{},{detail:d.detail.map((function(t){return t!=d.detail[0]?t:{point:e.target.value,pointMarked:!1}}))})),console.log(d)),"pointTwo"===e.target.id&&u(Object(m.a)(Object(m.a)({},d),{},{detail:d.detail.map((function(t){return t!=d.detail[1]?t:{point:e.target.value,pointMarked:!1}}))})),"pointThree"===e.target.id&&u(Object(m.a)(Object(m.a)({},d),{},{detail:d.detail.map((function(t){return t!=d.detail[2]?t:{point:e.target.value,pointMarked:!1}}))})),"selectColor"===e.target.id&&u(Object(m.a)(Object(m.a)({},d),{},{flag:e.target.value})),"notes"===e.target.id&&u(Object(m.a)(Object(m.a)({},d),{},{notes:e.target.value})),"alarm"===e.target.id&&u(Object(m.a)(Object(m.a)({},d),{},{alarm:{setAlarm:e.target.value,isAlarm:!1,iconOn:!0}})),console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")};return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{className:"add",onSubmit:function(t,a){t.preventDefault(),console.log(d),d.date=i,e.displayDetail(d.id),e.addNewTask(d),e.display("task")},type:"submit"},l.a.createElement("input",{onChange:p,id:"newTask",type:"text"}),l.a.createElement("label",{htmlFor:"text"},"new task"),l.a.createElement("input",{onChange:p,placeholder:"optional",id:"pointOne",type:"text"}),l.a.createElement("label",{htmlFor:"text"},"point one"),l.a.createElement("input",{onChange:p,placeholder:"optional",id:"pointTwo",type:"text"}),l.a.createElement("label",{htmlFor:"text"},"point two"),l.a.createElement("input",{onChange:p,placeholder:"optional",id:"pointThree",type:"text"}),l.a.createElement("label",{htmlFor:"text"},"point three"),l.a.createElement("select",{id:"selectColor",onChange:p},l.a.createElement("option",{value:"orange"},"Miscelanneus-orange"),l.a.createElement("option",{value:"green"},"Personal-green"),l.a.createElement("option",{value:"red"},"Urgent!-red"),l.a.createElement("option",{value:"blue"},"Work-blue"),l.a.createElement("option",{value:"purple"},"Family-purple")),l.a.createElement(f.a,{selected:i,onChange:function(e){return function(e){o(e)}(e)},timeInputLabel:"Time:",dateFormat:"MM/dd/yyyy h:mm aa",showTimeInput:!0,placeholderText:"Click to select a date"}),l.a.createElement("select",{id:"alarm",onChange:p},l.a.createElement("option",{value:null},"---"),l.a.createElement("option",{value:i},"todo time"),l.a.createElement("option",{value:i-6e4},"half an hour before"),l.a.createElement("option",{value:i-12e4},"an hour before")),l.a.createElement(E,{handleModal:void 0}),l.a.createElement("textarea",{className:"add-textarea",onChange:p,id:"notes",name:"notes",cols:"35",rows:"10"}),l.a.createElement("button",null,"ADD")))})),h=a(64),O=a.n(h);var v=function(){Object(n.useEffect)((function(){var t=document.getElementById("audioID");console.log(t),e(t)}));var e=function(e){e.play()};return l.a.createElement("div",null,l.a.createElement("audio",{id:"audioID"},l.a.createElement("source",{src:O.a,type:"audio/mpeg"})))};var k=Object(r.b)((function(e){return{position:e.position,items:e.item}}),(function(e){return{display:function(t){e({type:"DISPLAY",id:t})}}}))((function(e){var t=Object(n.useState)(new Date),a=Object(c.a)(t,2),i=a[0],o=a[1];Object(n.useEffect)((function(){var e=setInterval((function(){o(new Date)}),1e3);return function(){clearInterval(e)}}),[]);var r=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][(new Date).getDay()],d=i.toLocaleDateString(),u=i.toLocaleTimeString(),m=function(t){"list"===t.target.id&&e.display(t.target.id),"task"===t.target.id&&e.display(t.target.id),"add"===t.target.id&&e.display(t.target.id),"edit"===t.target.id&&e.display(t.target.id)},p=e.items.todos.filter((function(e){return!0===e.alarm.isAlarm})),f=e.items.todos.map((function(e){return l.a.createElement(s,{alarmId:e.id})}));return l.a.createElement("header",null,l.a.createElement("div",{className:"up"},l.a.createElement("div",{className:"my-day"},r,l.a.createElement("div",{className:"date"},u,", ",d))),l.a.createElement("div",{className:"down"},l.a.createElement("div",{className:"button-wrapper"},l.a.createElement("div",{id:"list",onClick:function(e){return m(e)},className:"list"===e.position.position?"button button-additional":"button"},"LIST"),l.a.createElement("div",{id:"task",onClick:function(e){return m(e)},className:"task"===e.position.position?"button button-additional":"button"},"TASK"),l.a.createElement("div",{id:"add",onClick:function(e){return m(e)},className:"add"===e.position.position?"button button-additional":"button"},"ADD"),l.a.createElement("div",{id:"edit",onClick:function(e){return m(e)},className:"edit"===e.position.position?"button button-additional":"button"},"EDIT")),l.a.createElement("div",{className:"button-box"})),p.length>0&&!0===p[0].alarm.isAlarm?l.a.createElement(v,null):null,f)}));var j=Object(r.b)((function(e){return{add:e,position:e.position}}),(function(e){return{editTask:function(t){e({type:"EDIT_TASK",editTask:t})},addAfterEdit:function(t){e({type:"ADD_AFTER_EDIT",editedTask:t})},displayDetail:function(t){e({type:"DISPLAY_DETAIL",id:t})},display:function(t){e({type:"DISPLAY",id:t})}}}))((function(e){var t,a,i=e.add.item.todos.filter((function(e){return!0===e.edit}));i.length>0?(t=i[0].date,a=i[0]):e.add.item.todos.length>0&&0===i.length?(t=e.add.item.todos[0].date,a=e.add.item.todos[0],console.log("wwwwww")):(t=null,a=null);var o=Object(n.useState)(t),r=Object(c.a)(o,2),s=r[0],d=r[1],u=Object(n.useState)(a),p=Object(c.a)(u,2),b=p[0],E=p[1];if(console.log(b),null===a)return l.a.createElement("div",{className:"no-todos-container"},l.a.createElement("p",{className:"no-todos"},"You have no todos left"),l.a.createElement("div",{className:"leisure"}));console.log(b);var g=function(e){if("newTask"===e.target.id&&E(Object(m.a)(Object(m.a)({},b),{},{title:e.target.value})),"pointOne"===e.target.id&&(E(Object(m.a)(Object(m.a)({},b),{},{detail:b.detail.map((function(t){return t!==b.detail[0]?t:Object(m.a)(Object(m.a)({},t),{},{point:e.target.value})}))})),void 0==b.detail[0]&&e.target.value.length>0)){b.detail[0]={point:e.target.value,pointMarked:!1};e.target.value;E(Object(m.a)(Object(m.a)({},b),{},{detail:b.detail.map((function(e){return e}))}))}if("pointTwo"===e.target.id&&(E(Object(m.a)(Object(m.a)({},b),{},{detail:b.detail.map((function(t){return t!==b.detail[1]?t:Object(m.a)(Object(m.a)({},t),{},{point:e.target.value})}))})),void 0==b.detail[1]&&e.target.value.length>0)){b.detail[1]={point:e.target.value,pointMarked:!1};e.target.value;E(Object(m.a)(Object(m.a)({},b),{},{detail:b.detail.map((function(e){return e}))}))}if("pointThree"===e.target.id&&(E(Object(m.a)(Object(m.a)({},b),{},{detail:b.detail.map((function(t){return t!==b.detail[2]?t:Object(m.a)(Object(m.a)({},t),{},{point:e.target.value})}))})),void 0==b.detail[2]&&e.target.value.length>0)){b.detail[2]={point:e.target.value,pointMarked:!1};e.target.value;E(Object(m.a)(Object(m.a)({},b),{},{detail:b.detail.map((function(e){return e}))}))}"selectColor"===e.target.id&&(console.log(e.target.value),E(Object(m.a)(Object(m.a)({},b),{},{flag:e.target.value})))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"edit-container"},l.a.createElement("form",{onSubmit:function(t,a){t.preventDefault(),e.editTask(b),e.addAfterEdit(b),e.displayDetail(b.id),e.display("task")},type:"submit"},l.a.createElement("input",{onChange:g,value:b.title,placeholder:"optional",id:"newTask",type:"text"}),l.a.createElement("label",{htmlFor:"text"},"new task"),l.a.createElement("input",{onChange:g,value:b.detail[0]?b.detail[0].point:null,placeholder:"optional",id:"pointOne",type:"text"}),l.a.createElement("label",{htmlFor:"text"},"point one"),l.a.createElement("input",{onChange:g,value:b.detail[1]?b.detail[1].point:null,placeholder:"optional",id:"pointTwo",type:"text"}),l.a.createElement("label",{htmlFor:"text"},"point two"),l.a.createElement("input",{onChange:g,value:b.detail[2]?b.detail[2].point:null,placeholder:"optional",id:"pointThree",type:"text"}),l.a.createElement("label",{htmlFor:"text"},"point three"),l.a.createElement("select",{id:"selectColor",onChange:g},l.a.createElement("option",{value:"yellow"},"Miscelanneus-yellow"),l.a.createElement("option",{value:"green"},"Personal-green"),l.a.createElement("option",{value:"red"},"Urgent!-red"),l.a.createElement("option",{value:"blue"},"Work-blue"),l.a.createElement("option",{value:"purple"},"Family-purple")),l.a.createElement(f.a,{selected:s,onChange:function(e){return function(e){d(e),b.date=e,E(Object(m.a)(Object(m.a)({},b),{},{date:e}))}(e)},timeInputLabel:"Time:",dateFormat:"MM/dd/yyyy h:mm aa",showTimeInput:!0,placeholderText:"Click to select a date"}),l.a.createElement("button",null,"EDIT"))))}));var T=Object(r.b)((function(e){return{position:e.position,items:e.item}}))((function(e){return l.a.createElement("div",{className:"mobile"},l.a.createElement(k,null),"list"===e.position.position?l.a.createElement(u,null):null,"task"===e.position.position?l.a.createElement(d,null):null,"add"===e.position.position?l.a.createElement(g,null):null,"edit"===e.position.position?l.a.createElement(j,null):null)}));var y=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(T,null))},w=a(17),D={position:"list"},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DISPLAY":return console.log(t.id),console.log(e),Object(m.a)(Object(m.a)({},e),{},{position:t.id});case"DISPLAY_TASK":return Object(m.a)(Object(m.a)({},e),{},{position:t.task})}return e},N=a(35),I={todos:[{title:"get out of bed",titleMarked:!1,id:1,edit:!1,flag:"high",date:new Date(2021,11,24,10,33,0),countDown:null,alarm:{setAlarm:null,isAlarm:!1,iconOn:!1},detail:[{point:"wake my wife up",pointMarked:!1},{point:"check the weather",pointMarked:!1},{point:"nice cup of coffee",pointMarked:!1}],notes:"Pour almond milk, coffee, sugar, and cream cheese into large plastic cup; blend with an immersion blender until the cream cheese is completely blended into the liquid, about 1 minute. Pour the blended beverage into a tall glass with ice cubes.Flavor variations: add 2 teaspoons of sugar-free chocolate syrup or other flavor, remembering to reduce the amount of sucralose used."},{title:"walk the dog",titleMarked:!1,id:2,edit:!1,flag:"medium",date:new Date(2022,11,24,10,33,0),countDown:null,alarm:{setAlarm:null,isAlarm:!1,iconOn:!0},detail:[{point:"at least 2 km",pointMarked:!1}],notes:"Put a leash and collar on the dog. There will come a time when your four-legged friend will recognize it is time to go for a walk by you simply reaching for the leash. Introduce this in your dog\u2019s mind early on by using a collar at a young age. Place the collar around the dog\u2019s neck and say \u201clet\u2019s walk\u201d with the leash in full view."},{title:"to have fun at the party",titleMarked:!1,id:3,date:null,edit:!1,flag:"low",alarm:{setAlarm:null,isAlarm:!1,iconOn:!1},detail:[{point:"only few drinks",pointMarked:!1},{point:"meet new friends",pointMarked:!1}],notes:"Pimm\u2019s Cup. Starting with a large pitcher, combine the Pimm\u2019s, orange and lemon slices and the mint. Leave it to chill for around 10 minutes then stir in the ginger ale. Take the pint glasses and stand two cucumber wedges on end in each glass. Fill them up halfway with ice then add the Pimm\u2019s mixture. To finish, garnish by pushing the mint down into the drinks and divide the orange, lemon and apple slices between the drinks"}],selectedItem:{id:1}},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DELETE":var a=e.todos.filter((function(e){return e.id!=t.id}));return Object(m.a)(Object(m.a)({},e),{},{todos:a,selectedItem:a[0]});case"DISPLAY_DETAIL":return Object(m.a)(Object(m.a)({},e),{},{selectedItem:{id:t.id}});case"ADD_NEW_TASK":return console.log(e.todos),console.log("cccccccccccccccccccccccccc",t.newTask),Object(m.a)(Object(m.a)({},e),{},{todos:[].concat(Object(N.a)(e.todos),[t.newTask]),selectedItem:{id:t.newTask.id}});case"ADD_AFTER_EDIT":console.log(t),console.log(t.editedTask.detail),console.log(e.todos);var n=t.editedTask.detail.length>0?t.editedTask.detail.filter((function(e){return null!=e.point})):null;return console.log(n),Object(m.a)(Object(m.a)({},e),{},{todos:e.todos.map((function(e){return e.id!=t.editedTask.id?e:Object(m.a)(Object(m.a)({},e),{},{title:t.editedTask.title,date:t.editedTask.date,detail:n,flag:t.editedTask.flag})})),selectedItem:{id:t.editedTask.id}});case"CHANGE_CHECK":var l=e.todos.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{detail:e.detail.map((function(e){return t.id!==e.point?e:Object(m.a)(Object(m.a)({},e),{},{pointMarked:!e.pointMarked})}))})}));return Object(m.a)(Object(m.a)({},e),{},{todos:l});case"CHANGE_TITLE_TASK":console.log(e.todos),console.log(t.each);var i=e.todos.find((function(e){return e===t.each})),o=e.todos.filter((function(e){return e!=i}));return console.log(i),console.log(i.titleMarked),console.log(e),Object(m.a)(Object(m.a)({},e),{},{todos:[].concat(Object(N.a)(o),[Object(m.a)(Object(m.a)({},i),{},{titleMarked:!i.titleMarked})])});case"CHANGE_TITLE_LIST":console.log(t.each);var c=e.todos.find((function(e){return e===t.each})),r=e.todos.filter((function(e){return e!=c}));return Object(m.a)(Object(m.a)({},e),{},{todos:[].concat(Object(N.a)(r),[Object(m.a)(Object(m.a)({},c),{},{titleMarked:!c.titleMarked})])});case"CLICK_TO_EDIT_TASK":return console.log(t.id),console.log(e.todos),Object(m.a)(Object(m.a)({},e),{},{todos:e.todos.map((function(e){return e.id!=t.id?e:Object(m.a)(Object(m.a)({},e),{},{edit:!0})}))});case"EDIT_TASK_STATE":console.log(e.todos),console.log(t.task);var s=e.todos.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{edit:!1})}));return console.log(s),Object(m.a)(Object(m.a)({},e),{},{todos:s});case"ALARM_ON":return console.log(e.todos),console.log(t.id),Object(m.a)(Object(m.a)({},e),{},{todos:e.todos.map((function(e){return e.id!=t.id?e:Object(m.a)(Object(m.a)({},e),{},{alarm:{setAlarm:null,isAlarm:!0,iconOn:!0}})}))});case"ALARM_OFF":return console.log(e.todos),console.log(t.id),Object(m.a)(Object(m.a)({},e),{},{todos:e.todos.map((function(e){return e.id!=t.id?e:Object(m.a)(Object(m.a)({},e),{},{alarm:{setAlarm:null,isAlarm:!1,iconOn:!1}})}))});case"COUNT_DOWN":return Object(m.a)(Object(m.a)({},e),{},{todos:e.todos.map((function(e){return e.id!=t.id?e:Object(m.a)(Object(m.a)({},e),{},{countDown:t.count})}))})}return e},S=Object(w.b)({position:A,item:C}),M=Object(w.c)(S);o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(r.a,{store:M},l.a.createElement(y,null))),document.getElementById("root"))},64:function(e,t,a){e.exports=a.p+"static/media/alarm.c89d8277.mp3"},65:function(e,t,a){e.exports=a(131)},70:function(e,t,a){}},[[65,1,2]]]);
//# sourceMappingURL=main.1703bc39.chunk.js.map