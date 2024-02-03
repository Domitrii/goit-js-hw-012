import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';
import "https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js";
import {giveApiKey} from "./js/api.js";
import {appendArticlesMarkup} from './js/creater.js'

let loading = document.querySelector('.loading');

const refs = {
    form: document.querySelector('.form'),  
    input: document.querySelector('.form-input'), 
    gallery: document.querySelector('.gallery'),
    searchBtn: document.querySelector('.search-button'), 
};

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

function hideLoader() {
    setTimeout(() => {
        loading.classList.add('is-hidden');
        }, 500);
  };

  function showLoader() {
    loading.classList.remove('is-hidden')
  }; 

async function submitFunction(event){
    event.preventDefault();
    const form = event.currentTarget
    const query = form.elements.input.value.trim();
try{
    const {hits} = await giveApiKey(query);
    console.log(hits)
    appendArticlesMarkup(hits, refs.gallery)
} catch (error) {
    console.error(error)
} finally{
    form.reset()
}
}