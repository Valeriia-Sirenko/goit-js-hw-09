import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const s="feedback-form-state";let t={email:"",message:""};const a=document.querySelector(".feedback-form"),m=a.elements.email,n=a.elements.message,c=a.querySelectorAll("label");c.forEach(e=>{e.classList.add("form-label")});const i=a.querySelector("input");i.classList.add("form-input");const l=a.querySelector("textarea");l.classList.add("form-textarea");const u=a.querySelector("button");u.classList.add("form-button");function d(){const e=localStorage.getItem(s);e&&(t=JSON.parse(e),m.value=t.email||"",n.value=t.message||"")}a.addEventListener("input",e=>{t[e.target.name]=e.target.value.trim(),localStorage.setItem(s,JSON.stringify(t))});a.addEventListener("submit",e=>{if(e.preventDefault(),!t.email||!t.message){let r=document.querySelector(".error-message");r||(r=document.createElement("p"),r.className="error-message",r.textContent="Fill please all fields",l.insertAdjacentElement("afterend",r));return}const o=document.querySelector(".error-message");o&&o.remove(),console.log("Form data: ",t),t={email:"",message:""},localStorage.removeItem(s),a.reset()});d();
//# sourceMappingURL=2-form.js.map
