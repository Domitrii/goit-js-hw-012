import{S as w,i as M}from"./assets/vendor-46aac873.js";import"https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();const S="https://pixabay.com/api/",k="42057283-adafa6fc2ce046555d94b0faa";async function f(o,n=1){try{return await(await axios.get(`${S}`,{params:{key:k,q:o,per_page:15,lang:"en",page:n,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(r){console.log(r)}}const l="/goit-js-hw-012/assets/icons-abf892e8.svg";function g(o,n){const r=o.map(({webformatURL:i,largeImageURL:e,tags:a,likes:c,views:L,comments:v,downloads:b})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e}">
          <img
            class="gallery-image"
            src="${i}"
            alt="${a}"
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
        </li>`).join("");n.insertAdjacentHTML("beforeend",r)}let p=document.querySelector(".loading");const s={form:document.querySelector(".form"),input:document.querySelector(".form-input"),gallery:document.querySelector(".gallery"),searchBtn:document.querySelector(".search-button"),loadMoreBtn:document.querySelector(".dead-end-btn"),waiter:document.querySelector(".please-wait"),noMore:document.querySelector(".no-more")},t="is-hidden";let d=1,u="",m=0,B=15;function $(o){M.show({position:"topLeft",message:o,backgroundColor:"#EF4040",messageColor:"#FAFAFB",messageSize:"16px",close:!1,closeOnClick:!0,closeOnEscape:!0})}const h=new w(".gallery-item a",{captionsData:"alt",captionDelay:250});s.form.addEventListener("submit",A);s.loadMoreBtn.addEventListener("click",y);function q(){setTimeout(()=>{p.classList.add(t)},500)}function E(){p.classList.remove(t)}async function A(o){o.preventDefault(),s.gallery.innerHTML="",E(),d=1;const n=o.currentTarget;if(u=n.elements.input.value.trim(),u==""){p.classList.add(t),s.loadMoreBtn.classList.add(t),s.noMore.classList.add(t);return}s.noMore.classList.add(t);try{const{hits:r,totalHits:i}=await f(u);m=Math.ceil(i/B),q(),g(r,s.gallery),h.refresh(),r.length>0&&r.length!==i?s.loadMoreBtn.classList.remove(t):(s.loadMoreBtn.classList.add(t),$("Sorry, incorrect input value"))}catch(r){console.error(r)}finally{n.reset()}}async function y(){s.loadMoreBtn.classList.add(t),s.waiter.classList.remove(t),d+=1;try{const{hits:o}=await f(u,d);g(o,s.gallery),h.refresh(),s.waiter.classList.add(t)}catch(o){console.log(o)}finally{s.loadMoreBtn.classList.remove(t),d===m&&(s.loadMoreBtn.classList.add(t),s.loadMoreBtn.removeEventListener("click",y),s.noMore.classList.remove(t))}}
//# sourceMappingURL=commonHelpers.js.map
