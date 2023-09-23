(()=>{"use strict";const t=[];class e{constructor(t){this.title=t}setProjectList(e){t.unshift(e),console.log(t)}removeProjectList(e){t.splice(e,1),console.log(t)}}const n=[];class i{constructor(t,e,n,i){this.title=t,this.description=e,this.date=n,this.priority=i}setTaskList(t,e,i,s){n.unshift({title:t,description:e,"due-date":i,priority:s}),console.log(n)}removeTaskList(t){n.splice(t,1),console.log(n)}updateTaskList(t,e,i,s,o){n[o].title=t,n[o].description=e,n[o].date=i,n[o].priority=s,console.log(n)}}function s(){return document.getElementById("project-title-input")}!function(){const t=document.querySelector("main"),n=document.querySelector(".container"),o=document.querySelector(".project-container"),a=document.querySelector(".task-list-container"),c=document.querySelector(".add-project-button"),l=document.querySelector(".add-task-button");let d=!1,r=!1,u=!1,m=!1;function p(){const e=document.createElement("div");return e.classList.add("error-message"),{emptyMessage:function(){e.textContent="Project title cannot be empty",t.appendChild(e)},lengthyMessage:function(){e.textContent="Project title cannot be longer than 12 characters",t.appendChild(e)}}}function v(){const e=document.querySelector(".error-message");t.removeChild(e)}function f(){return{titleField:document.getElementById("task-title"),descriptionField:document.getElementById("task-description"),dateField:document.getElementById("task-date"),priorityField:document.getElementById("task-priority")}}function y(t){return{taskTitle:S(t.target,4).querySelector(".task-title"),secondTaskName:S(t.target,4).querySelector(".hidden-task-info .task-title"),taskDescription:S(t.target,4).querySelector(".task-description"),taskDate:S(t.target,4).querySelector(".task-date"),taskPriority:S(t.target,4).querySelector(".task-priority")}}function k(t){document.querySelector("main").appendChild(function(){const t=document.createElement("div");return t.classList.add("popup-field"),t.innerHTML='<form class="edit-form">\n    <fieldset>\n        <div class="column-one">\n            <div class="form-element title">\n                <label for="task-title">Title</label>\n                <input id="task-title" autocomplete = "off">\n            </div>\n\n            <div class="form-element description">\n                <label for="task-description">Description</label>\n                <textarea id="task-description"></textarea>\n            </div>\n        </div>\n\n        <div class="column-two">\n            <div class="form-element date">\n                <label for="task-date">Due Date</label>\n                <input id="task-date" type="date">\n            </div>\n\n            <div class="form-element priority">\n                <label for="task-priority">Priority</label>\n                <select id="task-priority">\n                    <option>Low</option>\n                    <option>Medium</option>\n                    <option>High</option>\n                </select>\n            </div>\n        </div>\n\n    </fieldset>\n    <div class="form-button">\n        <button class="cancelButton">Cancel</button>\n        <button class="updateButton">Update Task</button>\n    </div>\n</form>',t}()),function(t){const e=document.querySelector(".updateButton"),n=f().titleField,s=f().descriptionField,o=f().dateField,a=f().priorityField,c=y(t).taskTitle,l=y(t).secondTaskName,d=y(t).taskDescription,r=y(t).taskDate,u=y(t).taskPriority,m=Array.from(document.querySelectorAll(".task-list-container .task-list")).indexOf(S(t.target,4)),p=S(t.target,2).querySelector(".task-priority-button");e.addEventListener("click",(t=>{t.preventDefault(),""!==n.value&&""!==s.value&&""!==o.value?(c.textContent=n.value,l.textContent=n.value,d.textContent=s.value,r.textContent=o.value,u.textContent=a.value,console.log(o.value),"Low"===a.value?p.style.color="green":"Medium"===a.value?p.style.color="orange":p.style.color="red",(new i).updateTaskList(c.textContent,d.textContent,r.textContent,u.textContent,m),h()):g()}))}(t),q(),function(t){f().titleField.value=S(t.target,4).querySelector(".task-title").textContent,f().descriptionField.value=S(t.target,4).querySelector(".task-description").textContent,f().dateField.value=S(t.target,4).querySelector(".task-date").textContent,f().priorityField.value=S(t.target,4).querySelector(".task-priority").textContent,u=!0,t.stopPropagation()}(t)}function L(t){let n,s;function o(){const t=document.querySelectorAll(".task-list-container > .task-list"),e=[].indexOf.call(t,n);(new i).removeTaskList(e),a.removeChild(n)}function c(){const t=document.querySelectorAll(".project-list > .project-name"),n=document.querySelector(".project-list"),i=[].indexOf.call(t,s);(new e).removeProjectList(i),n.removeChild(s)}t.target.classList.contains("fa-trash")?(n=S(t.target,5),o()):t.target.classList.contains("task-delete-button")&&(n=S(t.target,4),o()),t.target.classList.contains("fa-times")?(s=S(t.target,4),c()):t.target.classList.contains("delete-project-button")&&(s=S(t.target,3),c()),t.stopPropagation()}function h(){if(d){const t=document.querySelector(".project-form");d=!1,t.removeEventListener("keydown",b),c.classList.remove("hide"),o.removeChild(t)}if(r||u){const t=document.querySelector("main"),e=document.querySelector(".popup-field");r=!1,u=!1,t.removeChild(e)}}function E(){const t=document.getElementById("project-title-input");return""===t.value?(s().classList.add("invalid"),p().emptyMessage(),setTimeout(v,3e3),void s().addEventListener("input",(()=>{""===s().value?s().classList.add("invalid"):""!==s().value&&s().classList.remove("invalid")}))):t.value.length>12?(p().lengthyMessage(),setTimeout(v,3e3),s().addEventListener("input",(()=>{s().value.length<=12?s().classList.remove("invalid"):s().value.length>12&&s().classList.add("invalid")})),void s().classList.add("invalid")):(function(){const t=document.getElementById("project-title-input"),n=document.querySelector(".project-list"),i=document.querySelector(".project-container"),s=document.createElement("button");s.classList.add("project-name");const o=document.createElement("div");o.classList.add("project-left-side");const a=document.createElement("span");a.innerHTML="<i class = 'fa-solid fa-tasks'></i>";const c=document.createElement("p");c.textContent=function(){const n=new e(t.value);return n.setProjectList(n.title),n.title}();const l=document.createElement("div");l.classList.add("project-right-side"),l.innerHTML="<button class = 'delete-project-button'><i class = 'fa-solid fa-times'></i></button>",o.appendChild(a),o.appendChild(c),s.appendChild(o),s.appendChild(l),n.querySelector(".project-name")?n.insertBefore(s,n.firstChild):n.appendChild(s),i.appendChild(n)}(),void h())}function g(){const t=document.querySelectorAll(".form-element"),e=document.getElementById("task-title"),n=document.getElementById("task-description"),i=document.getElementById("task-date"),s=document.createElement("span"),o=document.createElement("span"),a=document.createElement("span");""===e.value&&(t.forEach((t=>{if(t.classList.contains("title")){if(t.querySelector(".invalid-message"))return;s.textContent="Task title is required",s.classList.add("invalid-message"),e.after(s),e.classList.add("invalid")}})),e.addEventListener("input",(()=>{""===e.value?(e.classList.add("invalid"),t.forEach((t=>{if(t.classList.contains("title")){if(t.querySelector(".invalid-message"))return;e.after(s)}}))):e.classList.contains("invalid")&&(e.removeAttribute("class"),t.forEach((t=>{t.classList.contains("title")&&t.removeChild(s)})))}))),""===n.value&&(t.forEach((t=>{if(t.classList.contains("description")){if(t.querySelector(".invalid-message"))return;o.textContent="Task description is required",o.classList.add("invalid-message"),n.after(o),n.classList.add("invalid")}})),n.addEventListener("input",(()=>{""===n.value?(n.classList.add("invalid"),t.forEach((t=>{if(t.classList.contains("description")){if(t.querySelector(".invalid-message"))return;n.after(o)}}))):n.classList.contains("invalid")&&(n.removeAttribute("class"),t.forEach((t=>{t.classList.contains("description")&&t.removeChild(o)})))}))),""===i.value&&(t.forEach((t=>{if(t.classList.contains("date")){if(t.querySelector(".invalid-message"))return;a.textContent="Due date is required",a.classList.add("invalid-message"),i.after(a),i.classList.add("invalid")}})),i.addEventListener("input",(()=>{""===i.value?(i.classList.add("invalid"),t.forEach((t=>{if(t.classList.contains("date")){if(t.querySelector(".invalid-message"))return;i.after(a)}}))):i.classList.contains("invalid")&&(i.removeAttribute("class"),t.forEach((t=>{t.classList.contains("date")&&t.removeChild(a)})))})))}function C(){const t=document.getElementById("task-title"),e=document.getElementById("task-description"),n=document.getElementById("task-date");if(""!==t.value&&""!==e.value&&""!==n.value){if(function(){const t=document.querySelector(".task-list-container"),e=document.createElement("div");e.classList.add("task-list");const n=document.getElementById("task-title"),s=document.getElementById("task-description"),o=document.getElementById("task-date"),a=document.getElementById("task-priority"),c=new i(n.value,s.value,o.value,a.value);function l(){const t=document.createElement("span");t.classList.add("task-title"),t.textContent=c.title;const e=document.createElement("span");e.classList.add("task-description"),e.textContent=c.description;const n=document.createElement("span");n.classList.add("task-date"),n.textContent=c.date;const i=document.createElement("span");return i.classList.add("task-priority"),i.textContent=c.priority,{taskName:t,taskDescription:e,taskDate:n,taskPriority:i}}c.setTaskList(c.title,c.description,c.date,c.priority);const d=document.createElement("div");d.classList.add("visible-task-info");const r=document.createElement("div");r.classList.add("hidden-task");const u=document.createElement("div");u.classList.add("hidden-task-info");const m=document.createElement("div");m.classList.add("task-left-column");const p=document.createElement("div");p.classList.add("task-right-column");const v=document.createElement("button");v.classList.add("task-edit-button"),v.innerHTML='<i class= "fa-solid fa-pencil"></i>';const f=document.createElement("button");f.innerHTML='<i class="fa-solid fa-flag"></i>',f.classList.add("task-priority-button"),"Low"===c.priority?f.style.color="green":"Medium"===c.priority?f.style.color="orange":"High"===c.priority&&(f.style.color="red");const y=document.createElement("button");y.classList.add("task-delete-button"),y.innerHTML='<i class= "fa-solid fa-trash"></i>';const k=document.createElement("div");k.classList.add("task-left"),k.appendChild(l().taskName);const L=document.createElement("div");L.classList.add("task-list-controller"),L.appendChild(v),L.appendChild(f),L.appendChild(y),m.appendChild(function(){const t=document.createElement("div");t.classList.add("task-title-info");const e=document.createElement("span");e.style.fontWeight="bold",e.textContent="Title: ";const n=l().taskName;return t.appendChild(e),t.appendChild(n),t}()),m.appendChild(function(){const t=document.createElement("div");t.classList.add("task-date-info");const e=document.createElement("span");e.style.fontWeight="bold",e.textContent="Date: ";const n=l().taskDate;return t.appendChild(e),t.appendChild(n),t}()),p.appendChild(function(){const t=document.createElement("div");t.classList.add("task-description-info");const e=document.createElement("span");e.style.fontWeight="bold",e.textContent="Description: ";const n=l().taskDescription;return t.appendChild(e),t.appendChild(n),t}()),p.appendChild(function(){const t=document.createElement("div");t.classList.add("task-priority-info");const e=document.createElement("span");e.style.fontWeight="bold",e.textContent="Priority: ";const n=l().taskPriority;return t.appendChild(e),t.appendChild(n),t}()),d.appendChild(k),d.appendChild(L),u.appendChild(m),u.appendChild(p),e.appendChild(d),r.appendChild(u),e.appendChild(r),t.querySelector(".task-list")?t.insertBefore(e,t.firstChild):t.appendChild(e)}(),h(),m=!0,m){const t=document.querySelector(".task-list");document.querySelector(".visible-task-info").addEventListener("click",(()=>{!function(t){const e=t.querySelector(".hidden-task");e.clientHeight?(e.style.maxHeight=0,setTimeout((()=>{e.removeAttribute("style")}),300)):(e.style.maxHeight=e.scrollHeight+"px",setTimeout((()=>{e.removeAttribute("style")}),300)),e.classList.toggle("show")}(t)}))}}else g()}function b(){const e=document.querySelectorAll(".addButton"),n=document.querySelector(".project-form");e.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault(),t.target.classList.contains("project")&&E(),t.target.classList.contains("task")&&C()})),d&&n.addEventListener("keydown",(t=>{"Enter"===t.key&&E()})),r&&t.addEventListener("keydown",(t=>{"Enter"===t.key&&(t.preventDefault(),C())}))}))}function q(){const e=document.querySelectorAll(".cancelButton"),n=document.querySelector(".project-form");e.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault(),h()})),d&&n.addEventListener("keydown",(t=>{"Escape"===t.key&&h()})),r&&t.addEventListener("keydown",(t=>{"Escape"===t.key&&h()}))}))}function S(t,e){if(t.classList.contains("fa-pencil")){for(let n=0;n<e;n++)t=t.parentNode;return t}for(let n=0;n<e-1;n++)t=t.parentNode;return t}m=0!==a.childNodes.length,c.addEventListener("click",(()=>{c.classList.add("hide"),document.querySelector(".project-list").before(function(){const t=document.createElement("div");t.classList.add("project-form");const e=document.createElement("input");e.setAttribute("id","project-title-input"),e.setAttribute("autocomplete","off"),e.setAttribute("maxlength","12"),e.placeholder="Enter Project Title",setTimeout((()=>{e.focus()}),0);const n=document.createElement("div");n.classList.add("project-form-button");const i=document.createElement("button");i.textContent="Add",i.classList.add("addButton","project");const s=document.createElement("button");return s.textContent="Cancel",s.classList.add("cancelButton"),n.appendChild(i),n.appendChild(s),t.appendChild(e),t.appendChild(n),t}()),d=!0,b(),q()})),l.addEventListener("click",(()=>{document.querySelector("main").appendChild(function(){const t=document.createElement("div");return t.classList.add("popup-field"),t.innerHTML='<form class="task-form">\n    <fieldset>\n        <div class="column-one">\n            <div class="form-element title">\n                <label for="task-title">Title</label>\n                <input id="task-title" autocomplete = "off">\n            </div>\n\n            <div class="form-element description">\n                <label for="task-description">Description</label>\n                <textarea id="task-description"></textarea>\n            </div>\n        </div>\n\n        <div class="column-two">\n            <div class="form-element date">\n                <label for="task-date">Due Date</label>\n                <input id="task-date" type="date">\n            </div>\n\n            <div class="form-element priority">\n                <label for="task-priority">Priority</label>\n                <select id="task-priority">\n                    <option>Low</option>\n                    <option>Medium</option>\n                    <option>High</option>\n                </select>\n            </div>\n        </div>\n\n    </fieldset>\n    <div class="form-button">\n        <button class="cancelButton">Cancel</button>\n        <button class="addButton task">Add Task</button>\n    </div>\n</form>',t}()),r=!0,b(),q()})),new MutationObserver((t=>{t.forEach((t=>{"childList"===t.type&&t.addedNodes.forEach((t=>{t.querySelector(".task-title")&&(t.querySelector(".task-edit-button").addEventListener("click",(t=>{k(t)})),t.querySelector(".task-priority-button").addEventListener("click",(t=>{!function(t){t.stopPropagation()}(t)})),t.querySelector(".task-delete-button").addEventListener("click",(t=>{L(t)})))}))}))})).observe(a,{childList:!0}),new MutationObserver((t=>{t.forEach((t=>{"childList"===t.type&&t.addedNodes.forEach((t=>{t.querySelector(".project-name")&&t.querySelector(".delete-project-button").addEventListener("click",(t=>{L(t)}))}))}))})).observe(o,{childList:!0}),document.querySelector(".inbox-button").addEventListener("click",(()=>{})),document.querySelector(".today-button").addEventListener("click",(()=>{n.textContent="";const t=document.createElement("div");t.classList.add("header");const e=document.createElement("h1");e.textContent="Today",t.appendChild(e),n.appendChild(t)}))}()})();