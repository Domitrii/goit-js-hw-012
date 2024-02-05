import{S as w,i as M}from"./assets/vendor-46aac873.js";import"https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const S="https://pixabay.com/api/",k="42057283-adafa6fc2ce046555d94b0faa";function p(t,a=1){return axios.get(`${S}`,{params:{key:k,q:t,per_page:15,lang:"en",page:a}}).then(({data:n})=>n)}const l="/goit-js-hw-012/assets/icons-abf892e8.svg";function f(t,a){const n=t.map(({webformatURL:i,largeImageURL:e,tags:o,likes:c,views:L,comments:v,downloads:b})=>`
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
            <use href="${l}#icon-heart"></use>
            </svg>
            <span class="descr-span">${c}</span> 
            </span>
            <span class="cont-in-p">
            <svg
            width="20"
            height="20"
            class="icon-in-block">
            <use href="${l}#icon-eye"></use>
            </svg>
            <span class="descr-span">${L}</span> 
            </span>
            <span class="cont-in-p">
            <svg
            width="20"
            height="20"
            class="icon-in-block">
            <use href="${l}#icon-bubble2"></use>
            </svg>
            <span class="descr-span">${v}</span> 
            </span>
            <span class="cont-in-p">
            <svg
            width="20"
            height="20"
            class="icon-in-block">
            <use href="${l}#icon-arrow-down"></use>
            </svg>
            <span class="descr-span">${b}</span>
            </span>
            </p>
          </a>
        </li>`).join("");a.insertAdjacentHTML("beforeend",n)}let g=document.querySelector(".loading");const s={form:document.querySelector(".form"),input:document.querySelector(".form-input"),gallery:document.querySelector(".gallery"),searchBtn:document.querySelector(".search-button"),loadMoreBtn:document.querySelector(".dead-end-btn"),waiter:document.querySelector(".please-wait"),noMore:document.querySelector(".no-more")},r="is-hidden";let d=1,u="",m=0,$=15;function q(t){M.show({position:"topLeft",message:t,backgroundColor:"#EF4040",messageColor:"#FAFAFB",messageSize:"16px",close:!1,closeOnClick:!0,closeOnEscape:!0})}const h=new w(".gallery-item a",{captionsData:"alt",captionDelay:250});s.form.addEventListener("submit",A);function B(){setTimeout(()=>{g.classList.add(r)},500)}function E(){g.classList.remove(r)}async function A(t){t.preventDefault(),s.gallery.innerHTML="",E();const a=t.currentTarget;u=a.elements.input.value.trim(),s.noMore.classList.add(r);try{const{hits:n,totalHits:i}=await p(u);m=Math.ceil(i/$),B(),f(n,s.gallery),h.refresh(),n.length>0&&n.length!==i?(await s.loadMoreBtn.classList.remove(r),s.loadMoreBtn.addEventListener("click",y)):(s.loadMoreBtn.classList.add(r),q("Sorry, incorrect input value"))}catch(n){console.error(n)}finally{a.reset()}}async function y(){s.loadMoreBtn.classList.add(r),s.waiter.classList.remove(r),d+=1;try{const{hits:t}=await p(u,d);f(t,s.gallery),h.refresh(),s.waiter.classList.add(r)}catch(t){console.log(t)}finally{s.loadMoreBtn.classList.remove(r),d===m&&(s.loadMoreBtn.classList.add(r),s.loadMoreBtn.removeEventListener("click",y),s.noMore.classList.remove(r))}}
//# sourceMappingURL=commonHelpers.js.map
