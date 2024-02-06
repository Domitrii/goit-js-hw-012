import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';
import "https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js";
import {giveApiKey} from "./js/api.js";
import appendArticlesMarkup from './js/creater.js'

let loading = document.querySelector('.loading');

const refs = {
    form: document.querySelector('.form'),  
    input: document.querySelector('.form-input'), 
    gallery: document.querySelector('.gallery'),
    searchBtn: document.querySelector('.search-button'), 
    loadMoreBtn: document.querySelector('.dead-end-btn'),
    waiter: document.querySelector('.please-wait'),
    noMore: document.querySelector('.no-more'),
};

const hiddenClass = 'is-hidden';
let page = 1;
let query = '';
let maxPage = 0;
let per_page = 15;



function showErrorMessage(message) {
    iziToast.show({
      position: 'topLeft',
      message,
      backgroundColor: '#EF4040',
      messageColor: '#FAFAFB',
      messageSize: '16px',
      close: false,
      closeOnClick: true,
      closeOnEscape: true,
    });
  }

  const lightbox = new SimpleLightbox('.gallery-item a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

refs.form.addEventListener('submit', submitFunction);
refs.loadMoreBtn.addEventListener('click', handleLoadMore)
function hideLoader() {
    setTimeout(() => {
        loading.classList.add(hiddenClass);
        }, 500);
  };

  function showLoader() {
    loading.classList.remove(hiddenClass)
  }; 

async function submitFunction(event){
    event.preventDefault();
    refs.gallery.innerHTML = ''
    showLoader()
    page = 1;
    const form = event.currentTarget
    query = form.elements.input.value.trim();
    if(query == ''){
        loading.classList.add(hiddenClass)
        refs.loadMoreBtn.classList.add(hiddenClass)
        refs.noMore.classList.add(hiddenClass)
        return;
    }
    refs.noMore.classList.add(hiddenClass)
try{
    const {hits, totalHits} = await giveApiKey(query);
    maxPage = Math.ceil(totalHits / per_page)

    hideLoader()
    appendArticlesMarkup(hits, refs.gallery)
    lightbox.refresh();
    if(hits.length > 0 && hits.length !== totalHits){
        refs.loadMoreBtn.classList.remove(hiddenClass)
    } else {
        refs.loadMoreBtn.classList.add(hiddenClass)
        showErrorMessage(
            `Sorry, incorrect input value`
        )
    }
} catch (error) {
    console.error(error)
} finally{
    form.reset()
}
}

async function handleLoadMore(){
    refs.loadMoreBtn.classList.add(hiddenClass)
    refs.waiter.classList.remove(hiddenClass)
    page += 1;

    try{
        const {hits} = await giveApiKey(query, page);
        appendArticlesMarkup(hits, refs.gallery)
        lightbox.refresh();
        refs.waiter.classList.add(hiddenClass)
    } catch (err) {
        console.log(err)
    } finally {
        refs.loadMoreBtn.classList.remove(hiddenClass)
        if(page === maxPage){
            refs.loadMoreBtn.classList.add(hiddenClass)
            refs.loadMoreBtn.removeEventListener('click', handleLoadMore)
            refs.noMore.classList.remove(hiddenClass)
        }
    }
}
