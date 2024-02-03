import{S as p}from"./assets/vendor-b41a7778.js";import"https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const f="https://pixabay.com/api/",d="42057283-adafa6fc2ce046555d94b0faa";function g(r){return axios.get(`${f}`,{params:{key:d,q:r,per_page:6,lang:"en",page:1}}).then(({data:n})=>n)}function m(r,n){const o=r.map(({webformatURL:t,largeImageURL:e,tags:s,likes:a,views:i,comments:l,downloads:u})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e}">
          <img
            class="gallery-image"
            src="${t}"
            alt="${s}"
          />
            <p class="gallery-descr">
            <span class="cont-in-p">
            <svg
            width="20"
            height="20"
            class="icon-in-block">
            <use href="../icons.svg#icon-heart"></use>
            </svg>
            <span class="descr-span">${a}</span> 
            </span>
            <span class="cont-in-p">
            <svg
            width="20"
            height="20"
            class="icon-in-block">
            <use href="../icons.svg#icon-eye"></use>
            </svg>
            <span class="descr-span">${i}</span> 
            </span>
            <span class="cont-in-p">
            <svg
            width="20"
            height="20"
            class="icon-in-block">
            <use href="../icons.svg#icon-bubble2"></use>
            </svg>
            <span class="descr-span">${l}</span> 
            </span>
            <span class="cont-in-p">
            <svg
            width="20"
            height="20"
            class="icon-in-block">
            <use href="../icons.svg#icon-arrow-down"></use>
            </svg>
            <span class="descr-span">${u}</span>
            </span>
            </p>
          </a>
        </li>`).join("");n.insertAdjacentHTML("beforeend",o)}document.querySelector(".loading");const c={form:document.querySelector(".form"),input:document.querySelector(".form-input"),gallery:document.querySelector(".gallery"),searchBtn:document.querySelector(".search-button")};new p(".gallery-item a",{captionsData:"alt",captionDelay:250});c.form.addEventListener("submit",y);async function y(r){r.preventDefault();const n=r.currentTarget,o=n.elements.input.value.trim();try{const{hits:t}=await g(o);m(t,c.gallery)}catch(t){console.error(t)}finally{n.reset()}}
//# sourceMappingURL=commonHelpers.js.map
