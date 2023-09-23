(()=>{"use strict";const t=[];class e{constructor(t){this.title=t}setProjectList(e){t.unshift(e),console.log(t)}removeProjectList(e){t.splice(e,1),console.log(t)}}const n=[];class i{constructor(t,e,n,i){this.title=t,this.description=e,this.date=n,this.priority=i}setTaskList(t,e,i,o){n.unshift({title:t,description:e,"due-date":i,priority:o}),console.log(n)}removeTaskList(t){n.splice(t,1),console.log(n)}updateTaskList(t,e,i,o,s){n[s].title=t,n[s].description=e,n[s].date=i,n[s].priority=o,console.log(n)}}function o(){const t=document.getElementById("project-title-input"),n=document.querySelector(".project-list"),i=document.querySelector(".project-container"),o=document.createElement("button");o.classList.add("project-name");const s=document.createElement("div");s.classList.add("project-left-side");const a=document.createElement("span");a.innerHTML="<i class = 'fa-solid fa-tasks'></i>";const l=document.createElement("p");l.textContent=function(){const n=new e(t.value);return n.setProjectList(n.title),n.title}();const c=document.createElement("div");c.classList.add("project-right-side"),c.innerHTML="<button class = 'delete-project-button'><i class = 'fa-solid fa-times'></i></button>",s.appendChild(a),s.appendChild(l),o.appendChild(s),o.appendChild(c),n.querySelector(".project-name")?n.insertBefore(o,n.firstChild):n.appendChild(o),i.appendChild(n)}function s(){return document.getElementById("project-title-input")}!function(){const t=document.querySelector("main"),n=(document.querySelector(".container"),document.querySelector(".project-container")),a=document.querySelector(".task-list-container"),l=document.querySelector(".add-project-button"),c=document.querySelector(".add-task-button");let d=!1,r=!1,u=!1,m=!1;function p(){const e=document.createElement("div");return e.classList.add("error-message"),{emptyMessage:function(){e.textContent="Project title cannot be empty",t.appendChild(e)},lengthyMessage:function(){e.textContent="Project title cannot be longer than 12 characters",t.appendChild(e)}}}function f(){const e=document.querySelector(".error-message");t.removeChild(e)}function v(t,e){if(t.classList.contains("fa-pencil")){for(let n=0;n<e;n++)t=t.parentNode;return t}for(let n=0;n<e-1;n++)t=t.parentNode;return t}function y(){return{titleField:document.getElementById("task-title"),descriptionField:document.getElementById("task-description"),dateField:document.getElementById("task-date"),priorityField:document.getElementById("task-priority")}}function k(t){return{taskTitle:v(t.target,4).querySelector(".task-title"),secondTaskName:v(t.target,4).querySelector(".hidden-task-info .task-title"),taskDescription:v(t.target,4).querySelector(".task-description"),taskDate:v(t.target,4).querySelector(".task-date"),taskPriority:v(t.target,4).querySelector(".task-priority")}}function h(t){document.querySelector("main").appendChild(function(){const t=document.createElement("div");return t.classList.add("popup-field"),t.innerHTML='<form class="edit-form">\n    <fieldset>\n        <div class="column-one">\n            <div class="form-element title">\n                <label for="task-title">Title</label>\n                <input id="task-title" autocomplete = "off">\n            </div>\n\n            <div class="form-element description">\n                <label for="task-description">Description</label>\n                <textarea id="task-description"></textarea>\n            </div>\n        </div>\n\n        <div class="column-two">\n            <div class="form-element date">\n                <label for="task-date">Due Date</label>\n                <input id="task-date" type="date">\n            </div>\n\n            <div class="form-element priority">\n                <label for="task-priority">Priority</label>\n                <select id="task-priority">\n                    <option>Low</option>\n                    <option>Medium</option>\n                    <option>High</option>\n                </select>\n            </div>\n        </div>\n\n    </fieldset>\n    <div class="form-button">\n        <button class="cancelButton">Cancel</button>\n        <button class="updateButton">Update Task</button>\n    </div>\n</form>',t}()),C(),b(),function(t){y().titleField.value=v(t.target,4).querySelector(".task-title").textContent,y().descriptionField.value=v(t.target,4).querySelector(".task-description").textContent,y().dateField.value=v(t.target,4).querySelector(".task-date").textContent,y().priorityField.value=v(t.target,4).querySelector(".task-priority").textContent,u=!0,t.stopPropagation()}(t);const e=document.querySelector(".updateButton"),n=y().titleField,o=y().descriptionField,s=y().dateField,a=y().priorityField,l=k(t).taskTitle,c=k(t).secondTaskName,d=k(t).taskDescription,r=k(t).taskDate,m=k(t).taskPriority,p=Array.from(document.querySelectorAll(".task-list-container .task-list")).indexOf(v(t.target,4)),f=v(t.target,2).querySelector(".task-priority-button");e.addEventListener("click",(t=>{t.preventDefault(),""!==n.value&&""!==o.value&&""!==s.value?(l.textContent=n.value,c.textContent=n.value,d.textContent=o.value,r.textContent=s.value,m.textContent=a.value,console.log(s.value),"Low"===a.value?f.style.color="green":"Medium"===a.value?f.style.color="orange":f.style.color="red",(new i).updateTaskList(l.textContent,d.textContent,r.textContent,m.textContent,p),E()):g()}))}function L(t){let n,o;function s(){const t=document.querySelectorAll(".task-list-container > .task-list"),e=[].indexOf.call(t,n);(new i).removeTaskList(e),a.removeChild(n)}function l(){const t=document.querySelectorAll(".project-list > .project-name"),n=document.querySelector(".project-list"),i=[].indexOf.call(t,o);(new e).removeProjectList(i),n.removeChild(o)}t.target.classList.contains("fa-trash")?(n=v(t.target,5),s()):t.target.classList.contains("task-delete-button")&&(n=v(t.target,4),s()),t.target.classList.contains("fa-times")?(o=v(t.target,4),l()):t.target.classList.contains("delete-project-button")&&(o=v(t.target,3),l()),t.stopPropagation()}function E(){if(d){const t=document.querySelector(".project-form");d=!1,t.removeEventListener("keydown",C),l.style.display="flex",n.removeChild(t)}if(r||u){const t=document.querySelector("main"),e=document.querySelector(".popup-field");r=!1,u=!1,t.removeChild(e)}}function g(){const t=document.querySelectorAll(".form-element"),e=document.getElementById("task-title"),n=document.getElementById("task-description"),i=document.getElementById("task-date"),o=document.createElement("span"),s=document.createElement("span"),a=document.createElement("span");""===e.value&&(t.forEach((t=>{if(t.classList.contains("title")){if(t.querySelector(".invalid-message"))return;o.textContent="Task title is required",o.classList.add("invalid-message"),e.after(o),e.classList.add("invalid")}})),e.addEventListener("input",(()=>{""===e.value?(e.classList.add("invalid"),t.forEach((t=>{if(t.classList.contains("title")){if(t.querySelector(".invalid-message"))return;e.after(o)}}))):e.classList.contains("invalid")&&(e.removeAttribute("class"),t.forEach((t=>{t.classList.contains("title")&&t.removeChild(o)})))}))),""===n.value&&(t.forEach((t=>{if(t.classList.contains("description")){if(t.querySelector(".invalid-message"))return;s.textContent="Task description is required",s.classList.add("invalid-message"),n.after(s),n.classList.add("invalid")}})),n.addEventListener("input",(()=>{""===n.value?(n.classList.add("invalid"),t.forEach((t=>{if(t.classList.contains("description")){if(t.querySelector(".invalid-message"))return;n.after(s)}}))):n.classList.contains("invalid")&&(n.removeAttribute("class"),t.forEach((t=>{t.classList.contains("description")&&t.removeChild(s)})))}))),""===i.value&&(t.forEach((t=>{if(t.classList.contains("date")){if(t.querySelector(".invalid-message"))return;a.textContent="Due date is required",a.classList.add("invalid-message"),i.after(a),i.classList.add("invalid")}})),i.addEventListener("input",(()=>{""===i.value?(i.classList.add("invalid"),t.forEach((t=>{if(t.classList.contains("date")){if(t.querySelector(".invalid-message"))return;i.after(a)}}))):i.classList.contains("invalid")&&(i.removeAttribute("class"),t.forEach((t=>{t.classList.contains("date")&&t.removeChild(a)})))})))}function C(){const t=document.querySelectorAll(".addButton"),e=document.querySelector(".project-form");t.forEach((t=>{t.addEventListener("click",(t=>{t.preventDefault(),d&&function(){const t=document.getElementById("project-title-input");""===t.value?(s().classList.add("invalid"),p().emptyMessage(),setTimeout(f,3e3),s().addEventListener("input",(()=>{""===s().value?s().classList.add("invalid"):""!==s().value&&s().classList.remove("invalid")}))):t.value.length>12?(p().lengthyMessage(),setTimeout(f,3e3),s().addEventListener("input",(()=>{s().value.length<=12?s().classList.remove("invalid"):s().value.length>12&&s().classList.add("invalid")})),s().classList.add("invalid")):(o(),E())}(),r&&function(){const t=document.getElementById("task-title"),e=document.getElementById("task-description"),n=document.getElementById("task-date");if(""!==t.value&&""!==e.value&&""!==n.value){if(function(){const t=document.querySelector(".task-list-container"),e=document.createElement("div");e.classList.add("task-list");const n=document.getElementById("task-title"),o=document.getElementById("task-description"),s=document.getElementById("task-date"),a=document.getElementById("task-priority"),l=new i(n.value,o.value,s.value,a.value);function c(){const t=document.createElement("span");t.classList.add("task-title"),t.textContent=l.title;const e=document.createElement("span");e.classList.add("task-description"),e.textContent=l.description;const n=document.createElement("span");n.classList.add("task-date"),n.textContent=l.date;const i=document.createElement("span");return i.classList.add("task-priority"),i.textContent=l.priority,{taskName:t,taskDescription:e,taskDate:n,taskPriority:i}}l.setTaskList(l.title,l.description,l.date,l.priority);const d=document.createElement("div");d.classList.add("visible-task-info");const r=document.createElement("div");r.classList.add("hidden-task");const u=document.createElement("div");u.classList.add("hidden-task-info");const m=document.createElement("div");m.classList.add("task-left-column");const p=document.createElement("div");p.classList.add("task-right-column");const f=document.createElement("button");f.classList.add("task-edit-button"),f.innerHTML='<i class= "fa-solid fa-pencil"></i>';const v=document.createElement("button");v.innerHTML='<i class="fa-solid fa-flag"></i>',v.classList.add("task-priority-button"),"Low"===l.priority?v.style.color="green":"Medium"===l.priority?v.style.color="orange":"High"===l.priority&&(v.style.color="red");const y=document.createElement("button");y.classList.add("task-delete-button"),y.innerHTML='<i class= "fa-solid fa-trash"></i>';const k=document.createElement("div");k.classList.add("task-left"),k.appendChild(c().taskName);const h=document.createElement("div");h.classList.add("task-list-controller"),h.appendChild(f),h.appendChild(v),h.appendChild(y),m.appendChild(function(){const t=document.createElement("div");t.classList.add("task-title-info");const e=document.createElement("span");e.style.fontWeight="bold",e.textContent="Title: ";const n=c().taskName;return t.appendChild(e),t.appendChild(n),t}()),m.appendChild(function(){const t=document.createElement("div");t.classList.add("task-date-info");const e=document.createElement("span");e.style.fontWeight="bold",e.textContent="Date: ";const n=c().taskDate;return t.appendChild(e),t.appendChild(n),t}()),p.appendChild(function(){const t=document.createElement("div");t.classList.add("task-description-info");const e=document.createElement("span");e.style.fontWeight="bold",e.textContent="Description: ";const n=c().taskDescription;return t.appendChild(e),t.appendChild(n),t}()),p.appendChild(function(){const t=document.createElement("div");t.classList.add("task-priority-info");const e=document.createElement("span");e.style.fontWeight="bold",e.textContent="Priority: ";const n=c().taskPriority;return t.appendChild(e),t.appendChild(n),t}()),d.appendChild(k),d.appendChild(h),u.appendChild(m),u.appendChild(p),e.appendChild(d),r.appendChild(u),e.appendChild(r),t.querySelector(".task-list")?t.insertBefore(e,t.firstChild):t.appendChild(e)}(),E(),m=!0,m){const t=document.querySelector(".task-list");document.querySelector(".visible-task-info").addEventListener("click",(()=>{!function(t){const e=t.querySelector(".hidden-task");e.clientHeight?(e.style.maxHeight=0,setTimeout((()=>{e.removeAttribute("style")}),300)):(e.style.maxHeight=e.scrollHeight+"px",setTimeout((()=>{e.removeAttribute("style")}),300)),e.classList.toggle("show")}(t)}))}}else g()}()})),d&&e.addEventListener("keydown",(t=>{"Enter"===t.key&&d&&o()}))}))}function b(){const t=document.querySelectorAll(".cancelButton"),e=document.querySelector(".project-form");t.forEach((t=>{t.addEventListener("click",(t=>{t.preventDefault(),E()})),d&&e.addEventListener("keydown",(t=>{"Escape"===t.key&&d&&E()}))}))}m=0!==a.childNodes.length,l.addEventListener("click",(()=>{l.style.display="none",document.querySelector(".project-list").before(function(){const t=document.createElement("div");t.classList.add("project-form");const e=document.createElement("input");e.setAttribute("id","project-title-input"),e.setAttribute("autocomplete","off"),e.setAttribute("maxlength","12"),e.placeholder="Enter Project Title",setTimeout((()=>{e.focus()}),0);const n=document.createElement("div");n.classList.add("project-form-button");const i=document.createElement("button");i.textContent="Add",i.classList.add("addButton");const o=document.createElement("button");return o.textContent="Cancel",o.classList.add("cancelButton"),n.appendChild(i),n.appendChild(o),t.appendChild(e),t.appendChild(n),t}()),d=!0,C(),b()})),c.addEventListener("click",(()=>{document.querySelector("main").appendChild(function(){const t=document.createElement("div");return t.classList.add("popup-field"),t.innerHTML='<form class="task-form">\n    <fieldset>\n        <div class="column-one">\n            <div class="form-element title">\n                <label for="task-title">Title</label>\n                <input id="task-title" autocomplete = "off">\n            </div>\n\n            <div class="form-element description">\n                <label for="task-description">Description</label>\n                <textarea id="task-description"></textarea>\n            </div>\n        </div>\n\n        <div class="column-two">\n            <div class="form-element date">\n                <label for="task-date">Due Date</label>\n                <input id="task-date" type="date">\n            </div>\n\n            <div class="form-element priority">\n                <label for="task-priority">Priority</label>\n                <select id="task-priority">\n                    <option>Low</option>\n                    <option>Medium</option>\n                    <option>High</option>\n                </select>\n            </div>\n        </div>\n\n    </fieldset>\n    <div class="form-button">\n        <button class="cancelButton">Cancel</button>\n        <button class="addButton">Add Task</button>\n    </div>\n</form>',t}()),r=!0,C(),b()})),new MutationObserver((t=>{t.forEach((t=>{"childList"===t.type&&t.addedNodes.forEach((t=>{t.querySelector(".task-title")&&(t.querySelector(".task-edit-button").addEventListener("click",(t=>{h(t)})),t.querySelector(".task-priority-button").addEventListener("click",(t=>{!function(t){t.stopPropagation()}(t)})),t.querySelector(".task-delete-button").addEventListener("click",(t=>{L(t)})))}))}))})).observe(a,{childList:!0}),new MutationObserver((t=>{t.forEach((t=>{"childList"===t.type&&t.addedNodes.forEach((t=>{t.querySelector(".project-name")&&t.querySelector(".delete-project-button").addEventListener("click",(t=>{L(t)}))}))}))})).observe(n,{childList:!0}),document.querySelector(".inbox-button").addEventListener("click",(()=>{})),document.querySelector(".today-button").addEventListener("click",(()=>{const t=document.querySelector(".container");t.textContent="";const e=document.createElement("div");e.classList.add("header");const n=document.createElement("h1");n.textContent="Today",e.appendChild(n),t.appendChild(e)}))}()})();