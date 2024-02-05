import{S as w,i as M}from"./assets/vendor-46aac873.js";import"https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const S="https://pixabay.com/api/",k="42057283-adafa6fc2ce046555d94b0faa";function f(t,r=1){return axios.get(`${S}`,{params:{key:k,q:t,per_page:12,lang:"en",page:r}}).then(({data:n})=>n)}const c="/goit-js-hw-012/assets/icons-abf892e8.svg";function g(t,r){const n=t.map(({webformatURL:i,largeImageURL:e,tags:o,likes:l,views:L,comments:v,downloads:b})=>`
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
            <use href="${c}#icon-heart"></use>
            </svg>
            <span class="descr-span">${l}</span> 
            </span>
            <span class="cont-in-p">
            <svg
            width="20"
            height="20"
            class="icon-in-block">
            <use href="${c}#icon-eye"></use>
            </svg>
            <span class="descr-span">${L}</span> 
            </span>
            <span class="cont-in-p">
            <svg
            width="20"
            height="20"
            class="icon-in-block">
            <use href="${c}#icon-bubble2"></use>
            </svg>
            <span class="descr-span">${v}</span> 
            </span>
            <span class="cont-in-p">
            <svg
            width="20"
            height="20"
            class="icon-in-block">
            <use href="${c}#icon-arrow-down"></use>
            </svg>
            <span class="descr-span">${b}</span>
            </span>
            </p>
          </a>
        </li>`).join("");r.insertAdjacentHTML("beforeend",n)}let m=document.querySelector(".loading");const s={form:document.querySelector(".form"),input:document.querySelector(".form-input"),gallery:document.querySelector(".gallery"),searchBtn:document.querySelector(".search-button"),loadMoreBtn:document.querySelector(".dead-end-btn"),waiter:document.querySelector(".please-wait"),noMore:document.querySelector(".no-more")},a="is-hidden";let d=1,u="",p=0,$=12;function q(t){M.show({position:"topLeft",message:t,backgroundColor:"#EF4040",messageColor:"#FAFAFB",messageSize:"16px",close:!1,closeOnClick:!0,closeOnEscape:!0})}const h=new w(".gallery-item a",{captionsData:"alt",captionDelay:250});s.form.addEventListener("submit",A);function B(){setTimeout(()=>{m.classList.add("is-hidden")},500)}function E(){m.classList.remove("is-hidden")}async function A(t){t.preventDefault(),s.gallery.innerHTML="",E();const r=t.currentTarget;u=r.elements.input.value.trim();try{const{hits:n,totalHits:i}=await f(u);p=Math.ceil(i/$),console.log(p),B(),g(n,s.gallery),h.refresh(),n.length>0&n.length!==i?(s.loadMoreBtn.classList.remove(a),s.loadMoreBtn.addEventListener("click",y)):(s.loadMoreBtn.classList.add(a),q("Sorry, incorrect input value"))}catch(n){console.error(n)}finally{r.reset()}}async function y(){s.loadMoreBtn.classList.add(a),s.waiter.classList.remove(a),d+=1;try{const{hits:t}=await f(u,d);g(t,s.gallery),h.refresh(),s.waiter.classList.add(a)}catch(t){console.log(t)}finally{s.loadMoreBtn.classList.remove(a),d===p&&(s.loadMoreBtn.classList.add(a),s.loadMoreBtn.removeEventListener("click",y),s.noMore.classList.remove(a))}}
//# sourceMappingURL=commonHelpers.js.map
