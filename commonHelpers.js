import{S as b,i as w}from"./assets/vendor-46aac873.js";import"https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const M="https://pixabay.com/api/",S="42057283-adafa6fc2ce046555d94b0faa";function p(t,r=1){return axios.get(`${M}`,{params:{key:S,q:t,per_page:12,lang:"en",page:r}}).then(({data:n})=>n)}function f(t,r){const n=t.map(({webformatURL:i,largeImageURL:e,tags:o,likes:l,views:y,comments:v,downloads:L})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e}">
          <img
            class="gallery-image"
            src="${i}"
            alt="${o}"
          />
            <p class="gallery-descr">
            <span class="cont-in-p">
            <svg
            width="20"
            height="20"
            class="icon-in-block">
            <use href="../icons.svg#icon-heart"></use>
            </svg>
            <span class="descr-span">${l}</span> 
            </span>
            <span class="cont-in-p">
            <svg
            width="20"
            height="20"
            class="icon-in-block">
            <use href="../icons.svg#icon-eye"></use>
            </svg>
            <span class="descr-span">${y}</span> 
            </span>
            <span class="cont-in-p">
            <svg
            width="20"
            height="20"
            class="icon-in-block">
            <use href="../icons.svg#icon-bubble2"></use>
            </svg>
            <span class="descr-span">${v}</span> 
            </span>
            <span class="cont-in-p">
            <svg
            width="20"
            height="20"
            class="icon-in-block">
            <use href="../icons.svg#icon-arrow-down"></use>
            </svg>
            <span class="descr-span">${L}</span>
            </span>
            </p>
          </a>
        </li>`).join("");r.insertAdjacentHTML("beforeend",n)}let g=document.querySelector(".loading");const s={form:document.querySelector(".form"),input:document.querySelector(".form-input"),gallery:document.querySelector(".gallery"),searchBtn:document.querySelector(".search-button"),loadMoreBtn:document.querySelector(".dead-end-btn"),waiter:document.querySelector(".please-wait"),noMore:document.querySelector(".no-more")},a="is-hidden";let c=1,d="",u=0,k=12;function B(t){w.show({position:"topLeft",message:t,backgroundColor:"#EF4040",messageColor:"#FAFAFB",messageSize:"16px",close:!1,closeOnClick:!0,closeOnEscape:!0})}const m=new b(".gallery-item a",{captionsData:"alt",captionDelay:250});s.form.addEventListener("submit",A);function q(){setTimeout(()=>{g.classList.add("is-hidden")},500)}function E(){g.classList.remove("is-hidden")}async function A(t){t.preventDefault(),s.gallery.innerHTML="",E();const r=t.currentTarget;d=r.elements.input.value.trim();try{const{hits:n,totalHits:i}=await p(d);u=Math.ceil(i/k),console.log(u),q(),f(n,s.gallery),m.refresh(),n.length>0&n.length!==i?(s.loadMoreBtn.classList.remove(a),s.loadMoreBtn.addEventListener("click",h)):(s.loadMoreBtn.classList.add(a),B("Sorry, incorrect input value"))}catch(n){console.error(n)}finally{r.reset()}}async function h(){s.loadMoreBtn.classList.add(a),s.waiter.classList.remove(a),c+=1;try{const{hits:t}=await p(d,c);f(t,s.gallery),m.refresh(),s.waiter.classList.add(a)}catch(t){console.log(t)}finally{s.loadMoreBtn.classList.remove(a),c===u&&(s.loadMoreBtn.classList.add(a),s.loadMoreBtn.removeEventListener("click",h),s.noMore.classList.remove(a))}}window.scrollBy(2);
//# sourceMappingURL=commonHelpers.js.map
