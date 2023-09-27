(()=>{"use strict";const t=JSON.parse(localStorage.getItem("projects"))||[];class e{constructor(t,e){this.title=t,this.task=[e]}setProjectList(e,n){t.unshift({title:e,tasks:n}),localStorage.setItem("projects",JSON.stringify(t))}removeProjectList(e){t.splice(e,1),JSON.parse(localStorage.getItem("projects")).splice(e,1),localStorage.setItem("projects",JSON.stringify(t))}}const n=JSON.parse(localStorage.getItem("tasks"))||[];class o{constructor(t,e,n,o){this.title=t,this.description=e,this.date=n,this.priority=o}setTaskList(t,e,o,s,i){n.unshift({title:t,description:e,date:o,priority:s,tab:i}),localStorage.setItem("tasks",JSON.stringify(n))}removeTaskList(t){n.splice(t,1);const e=JSON.parse(localStorage.getItem("tasks"));e.splice(t,1),localStorage.setItem("tasks",JSON.stringify(e))}updateTaskList(t,e,o,s,i){n[i].title=t,n[i].description=e,n[i].date=o,n[i].priority=s,localStorage.setItem("tasks",JSON.stringify(n))}}function s(){const t=JSON.parse(localStorage.getItem("tasks")),e=document.querySelector(".task-list-container");e.textContent="";for(let n=0;n<t.length;n++){const o=document.createElement("div");o.classList.add("task-list");const s=document.createElement("div");s.classList.add("visible-task-info");const i=document.createElement("div");i.classList.add("task-left");const a=document.createElement("span");a.classList.add("task-title"),a.textContent=t[n].title;const r=document.createElement("div");r.classList.add("task-list-controller");const c=document.createElement("button");c.classList.add("task-edit-button"),c.innerHTML='<i class= "fa-solid fa-pencil"></i>';const l=document.createElement("button");l.innerHTML='<i class="fa-solid fa-flag"></i>',l.classList.add("task-priority-button"),"Low"===t[n].priority?l.style.color="green":"Medium"===t[n].priority?l.style.color="orange":"High"===t[n].priority&&(l.style.color="red");const d=document.createElement("button");d.classList.add("task-delete-button"),d.innerHTML='<i class= "fa-solid fa-trash"></i>';const u=document.createElement("div");u.classList.add("hidden-task");const p=document.createElement("div");p.classList.add("hidden-task-info");const m=document.createElement("div");m.classList.add("task-left-column");const f=document.createElement("div");function v(){const e=document.createElement("div");e.classList.add("task-title-info");const o=document.createElement("span");o.style.fontWeight="bold",o.textContent="Title: ";const s=document.createElement("span");return s.classList.add("task-title"),s.textContent=t[n].title,e.appendChild(o),e.appendChild(s),e}function y(){const e=document.createElement("div");e.classList.add("task-date-info");const o=document.createElement("span");o.style.fontWeight="bold",o.textContent="Date: ";const s=document.createElement("span");return s.classList.add("task-date"),s.textContent=t[n].date,e.appendChild(o),e.appendChild(s),e}function k(){const e=document.createElement("div");e.classList.add("task-description-info");const o=document.createElement("span");o.style.fontWeight="bold",o.textContent="Description: ";const s=document.createElement("span");return s.classList.add("task-description"),s.textContent=t[n].description,e.appendChild(o),e.appendChild(s),e}function g(){const e=document.createElement("div");e.classList.add("task-priority-info");const o=document.createElement("span");o.style.fontWeight="bold",o.textContent="Priority: ";const s=document.createElement("span");return s.classList.add("task-priority"),s.textContent=t[n].priority,e.appendChild(o),e.appendChild(s),e}f.classList.add("task-right-column"),i.appendChild(a),r.append(c,l,d),s.append(i,r),u.appendChild(p),p.append(m,f),m.append(v(),y()),f.append(k(),g()),o.append(s,u),e.appendChild(o)}}function i(){const t=JSON.parse(localStorage.getItem("projects")),e=document.querySelector(".project-list-container");e.textContent="";for(let n=0;n<t.length;n++){const o=document.createElement("div");o.classList.add("project-list");const s=document.createElement("button");s.classList.add("project-name");const i=document.createElement("div");i.classList.add("project-left-side");const a=document.createElement("span");a.innerHTML="<i class = 'fa-solid fa-tasks'></i>";const r=document.createElement("p");r.textContent=t[n].title;const c=document.createElement("div");c.classList.add("project-right-side"),c.innerHTML="<button class = 'delete-project-button'><i class = 'fa-solid fa-times'></i></button>",i.appendChild(a),i.appendChild(r),s.appendChild(i),s.appendChild(c),o.appendChild(s),e.appendChild(o)}}function a(){return document.getElementById("project-title-input")}function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function c(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function l(t){c(1,arguments);var e=function(t){c(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===r(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}(t);return e.setHours(0,0,0,0),e}function d(t){return c(1,arguments),function(t,e){c(2,arguments);var n=l(t),o=l(e);return n.getTime()===o.getTime()}(t,Date.now())}localStorage.getItem("tasks")&&s(),localStorage.getItem("projects")&&i(),function(){const t=document.querySelector("main"),n=document.querySelector(".header"),r=document.querySelector(".header-title"),c=document.querySelector(".project-container"),l=document.querySelector(".task-list-container"),u=document.querySelector(".project-list-container"),p=document.querySelector(".add-project-button"),m=document.querySelector(".add-task-button");let f=!1,v=!1,y=!1,k=!1;function g(){const e=document.createElement("div");return e.classList.add("error-message"),{emptyMessage:function(){e.textContent="Project title cannot be empty",t.appendChild(e)},lengthyMessage:function(){e.textContent="Project title cannot be longer than 12 characters",t.appendChild(e)}}}function L(){const e=document.querySelector(".error-message");t.removeChild(e)}function h(){const t=document.getElementById("project-title-input");if(""===t.value)return void function(){const t=document.getElementById("project-title-input");t.classList.add("invalid"),g().emptyMessage(),setTimeout(L,3e3),t.addEventListener("input",(()=>{""===t.value?t.classList.add("invalid"):""!==t.value&&t.classList.remove("invalid")}))}();if(t.value.length>12)return g().lengthyMessage(),setTimeout(L,3e3),a().addEventListener("input",(()=>{a().value.length<=12?a().classList.remove("invalid"):a().value.length>12&&a().classList.add("invalid")})),void a().classList.add("invalid");const n=new e(t.value);n.setProjectList(n.title),i(),x()}function E(){return{titleField:document.getElementById("task-title"),descriptionField:document.getElementById("task-description"),dateField:document.getElementById("task-date"),priorityField:document.getElementById("task-priority")}}function b(t){return{taskTitle:B(t.target,4).querySelector(".task-title"),secondTaskName:B(t.target,4).querySelector(".hidden-task-info .task-title"),taskDescription:B(t.target,4).querySelector(".task-description"),taskDate:B(t.target,4).querySelector(".task-date"),taskPriority:B(t.target,4).querySelector(".task-priority")}}function S(t){document.querySelector("main").appendChild(function(){const t=document.createElement("div");return t.classList.add("popup-field"),t.innerHTML='<form class="edit-form">\n    <fieldset>\n        <div class="column-one">\n            <div class="form-element title">\n                <label for="task-title">Title</label>\n                <input id="task-title" autocomplete = "off">\n            </div>\n\n            <div class="form-element description">\n                <label for="task-description">Description</label>\n                <textarea id="task-description"></textarea>\n            </div>\n        </div>\n\n        <div class="column-two">\n            <div class="form-element date">\n                <label for="task-date">Due Date</label>\n                <input id="task-date" type="date">\n            </div>\n\n            <div class="form-element priority">\n                <label for="task-priority">Priority</label>\n                <select id="task-priority">\n                    <option>Low</option>\n                    <option>Medium</option>\n                    <option>High</option>\n                </select>\n            </div>\n        </div>\n\n    </fieldset>\n    <div class="form-button">\n        <button class="cancelButton">Cancel</button>\n        <button class="updateButton">Update Task</button>\n    </div>\n</form>',t}()),function(t){const e=document.querySelector(".updateButton"),n=E().titleField,s=E().descriptionField,i=E().dateField,a=E().priorityField,r=b(t).taskTitle,c=b(t).secondTaskName,l=b(t).taskDescription,d=b(t).taskDate,u=b(t).taskPriority,p=Array.from(document.querySelectorAll(".task-list-container .task-list")).indexOf(B(t.target,4)),m=B(t.target,2).querySelector(".task-priority-button");e.addEventListener("click",(t=>{t.preventDefault(),""!==n.value&&""!==s.value&&""!==i.value?(r.textContent=n.value,c.textContent=n.value,l.textContent=s.value,d.textContent=i.value,u.textContent=a.value,"Low"===a.value?m.style.color="green":"Medium"===a.value?m.style.color="orange":m.style.color="red",(new o).updateTaskList(r.textContent,l.textContent,d.textContent,u.textContent,p),x()):j()}))}(t),D(),function(t){E().titleField.value=B(t.target,4).querySelector(".task-title").textContent,E().descriptionField.value=B(t.target,4).querySelector(".task-description").textContent,E().dateField.value=B(t.target,4).querySelector(".task-date").textContent,E().priorityField.value=B(t.target,4).querySelector(".task-priority").textContent,y=!0,t.stopPropagation()}(t)}function C(t){t.stopPropagation()}function q(t){let n,s;function i(){const t=document.querySelectorAll(".task-list-container > .task-list"),e=[].indexOf.call(t,n);(new o).removeTaskList(e),l.removeChild(n)}function a(){const t=document.querySelectorAll(".project-list-container > .project-list"),n=[].indexOf.call(t,s);(new e).removeProjectList(n),u.removeChild(s)}t.target.classList.contains("fa-trash")?(n=B(t.target,5),i()):t.target.classList.contains("task-delete-button")&&(n=B(t.target,4),i()),t.target.classList.contains("fa-times")?(s=B(t.target,5),a()):t.target.classList.contains("delete-project-button")&&(s=B(t.target,4),a()),t.stopPropagation()}function x(){if(f){const t=document.querySelector(".project-form");f=!1,t.removeEventListener("keydown",I),p.classList.remove("hide"),c.removeChild(t)}if(v||y){const t=document.querySelector("main"),e=document.querySelector(".popup-field");v=!1,y=!1,t.removeChild(e)}}function j(){const t=document.querySelectorAll(".form-element"),e=document.getElementById("task-title"),n=document.getElementById("task-description"),o=document.getElementById("task-date"),s=document.createElement("span"),i=document.createElement("span"),a=document.createElement("span");""===e.value&&(t.forEach((t=>{if(t.classList.contains("title")){if(t.querySelector(".invalid-message"))return;s.textContent="Task title is required",s.classList.add("invalid-message"),e.after(s),e.classList.add("invalid")}})),e.addEventListener("input",(()=>{""===e.value?(e.classList.add("invalid"),t.forEach((t=>{if(t.classList.contains("title")){if(t.querySelector(".invalid-message"))return;e.after(s)}}))):e.classList.contains("invalid")&&(e.removeAttribute("class"),t.forEach((t=>{t.classList.contains("title")&&t.removeChild(s)})))}))),""===n.value&&(t.forEach((t=>{if(t.classList.contains("description")){if(t.querySelector(".invalid-message"))return;i.textContent="Task description is required",i.classList.add("invalid-message"),n.after(i),n.classList.add("invalid")}})),n.addEventListener("input",(()=>{""===n.value?(n.classList.add("invalid"),t.forEach((t=>{if(t.classList.contains("description")){if(t.querySelector(".invalid-message"))return;n.after(i)}}))):n.classList.contains("invalid")&&(n.removeAttribute("class"),t.forEach((t=>{t.classList.contains("description")&&t.removeChild(i)})))}))),""===o.value&&(t.forEach((t=>{if(t.classList.contains("date")){if(t.querySelector(".invalid-message"))return;a.textContent="Due date is required",a.classList.add("invalid-message"),o.after(a),o.classList.add("invalid")}})),o.addEventListener("input",(()=>{""===o.value?(o.classList.add("invalid"),t.forEach((t=>{if(t.classList.contains("date")){if(t.querySelector(".invalid-message"))return;o.after(a)}}))):o.classList.contains("invalid")&&(o.removeAttribute("class"),t.forEach((t=>{t.classList.contains("date")&&t.removeChild(a)})))})))}function T(){const t=document.getElementById("task-title"),e=document.getElementById("task-description"),n=document.getElementById("task-date");if(""!==t.value&&""!==e.value&&""!==n.value){const t=new o(E().titleField.value,E().descriptionField.value,E().dateField.value,E().priorityField.value);console.log(),t.setTaskList(t.title,t.description,t.date,t.priority),s(),x(),k=!0}else j()}function w(t){const e=t.querySelector(".hidden-task");e.clientHeight?(e.style.maxHeight=0,setTimeout((()=>{e.removeAttribute("style")}),300)):(e.style.maxHeight=e.scrollHeight+"px",setTimeout((()=>{e.removeAttribute("style")}),300)),e.classList.toggle("show")}function I(){const e=document.querySelectorAll(".addButton"),n=document.querySelector(".project-form");e.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault(),t.target.classList.contains("project")&&h(),t.target.classList.contains("task")&&T()})),f&&n.addEventListener("keydown",(t=>{"Enter"===t.key&&h()})),v&&t.addEventListener("keydown",(t=>{"Enter"===t.key&&(t.preventDefault(),T())}))}))}function D(){const e=document.querySelectorAll(".cancelButton"),n=document.querySelector(".project-form");e.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault(),x()})),f&&n.addEventListener("keydown",(t=>{"Escape"===t.key&&x()})),v&&t.addEventListener("keydown",(t=>{"Escape"===t.key&&x()}))}))}function B(t,e){if(t.classList.contains("fa-pencil")){for(let n=0;n<e;n++)t=t.parentNode;return t}for(let n=0;n<e-1;n++)t=t.parentNode;return t}k=0!==l.childNodes.length,p.addEventListener("click",(()=>{p.classList.add("hide"),document.querySelector(".project-list-container").before(function(){const t=document.createElement("div");t.classList.add("project-form");const e=document.createElement("input");e.setAttribute("id","project-title-input"),e.setAttribute("autocomplete","off"),e.setAttribute("maxlength","12"),e.placeholder="Enter Project Title",setTimeout((()=>{e.focus()}),0);const n=document.createElement("div");n.classList.add("project-form-button");const o=document.createElement("button");o.textContent="Add",o.classList.add("addButton","project");const s=document.createElement("button");return s.textContent="Cancel",s.classList.add("cancelButton"),n.appendChild(o),n.appendChild(s),t.appendChild(e),t.appendChild(n),t}()),f=!0,I(),D()})),m.addEventListener("click",(()=>{document.querySelector("main").appendChild(function(){const t=document.createElement("div");return t.classList.add("popup-field"),t.innerHTML='<form class="task-form">\n    <fieldset>\n        <div class="column-one">\n            <div class="form-element title">\n                <label for="task-title">Title</label>\n                <input id="task-title" autocomplete = "off">\n            </div>\n\n            <div class="form-element description">\n                <label for="task-description">Description</label>\n                <textarea id="task-description"></textarea>\n            </div>\n        </div>\n\n        <div class="column-two">\n            <div class="form-element date">\n                <label for="task-date">Due Date</label>\n                <input id="task-date" type="date">\n            </div>\n\n            <div class="form-element priority">\n                <label for="task-priority">Priority</label>\n                <select id="task-priority">\n                    <option>Low</option>\n                    <option>Medium</option>\n                    <option>High</option>\n                </select>\n            </div>\n        </div>\n\n    </fieldset>\n    <div class="form-button">\n        <button class="cancelButton">Cancel</button>\n        <button class="addButton task">Add Task</button>\n    </div>\n</form>',t}()),v=!0,I(),D()})),new MutationObserver((t=>{t.forEach((t=>{"childList"===t.type&&t.addedNodes.forEach((t=>{t.querySelector(".task-title")&&(t.querySelector(".visible-task-info").addEventListener("click",(e=>{w(t),e.stopPropagation()})),t.querySelector(".task-edit-button").addEventListener("click",(t=>{S(t)})),t.querySelector(".task-priority-button").addEventListener("click",(t=>{C(t)})),t.querySelector(".task-delete-button").addEventListener("click",(t=>{q(t)})))}))}))})).observe(l,{childList:!0}),l.querySelector(".task-list")&&document.querySelectorAll(".task-list").forEach((t=>{t.querySelector(".visible-task-info").addEventListener("click",(e=>{w(t),e.stopPropagation()})),t.querySelector(".task-edit-button").addEventListener("click",(t=>{S(t),t.stopPropagation()})),t.querySelector(".task-priority-button").addEventListener("click",(t=>{C(t)})),t.querySelector(".task-delete-button").addEventListener("click",(t=>{q(t),t.stopPropagation()}))})),new MutationObserver((t=>{t.forEach((t=>{"childList"===t.type&&t.addedNodes.forEach((t=>{t.querySelector(".project-name")&&t.querySelector(".delete-project-button").addEventListener("click",(t=>{q(t)}))}))}))})).observe(u,{childList:!0}),c.querySelector(".project-list")&&document.querySelectorAll(".project-list").forEach((t=>{t.querySelector(".delete-project-button").addEventListener("click",(t=>{q(t)}))})),document.querySelector(".inbox-button").addEventListener("click",(()=>{s(),r.textContent="Inbox",document.querySelector(".add-task-button")||n.appendChild(m)})),document.querySelector(".today-button").addEventListener("click",(()=>{l.textContent="",r.textContent="Today",document.querySelector(".add-task-button")&&n.removeChild(m);const t=JSON.parse(localStorage.getItem("tasks"));for(let e=0;e<t.length;e++){const n=t[e].date.split("-")[0],o=parseFloat(t[e].date.split("-")[1])-1,s=t[e].date.split("-")[2],i=d(new Date(n,o,s));console.log(n,o,s),console.log(i)}}))}()})();