export default function appendArticlesMarkup(hits , gallery) {
    const markup = articles
      .map(
        ({webformatURL,largeImageURL,tags,likes,views,comments,downloads,}) => `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
          <img
            class="gallery-image"
            src="${webformatURL}"
            alt="${tags}"
          />
            <p class="gallery-descr">
            <span class="cont-in-p">
            <svg
            width="20"
            height="20"
            class="icon-in-block">
            <use href="../icons.svg#icon-heart"></use>
            </svg>
            <span class="descr-span">${likes}</span> 
            </span>
            <span class="cont-in-p">
            <svg
            width="20"
            height="20"
            class="icon-in-block">
            <use href="../icons.svg#icon-eye"></use>
            </svg>
            <span class="descr-span">${views}</span> 
            </span>
            <span class="cont-in-p">
            <svg
            width="20"
            height="20"
            class="icon-in-block">
            <use href="../icons.svg#icon-bubble2"></use>
            </svg>
            <span class="descr-span">${comments}</span> 
            </span>
            <span class="cont-in-p">
            <svg
            width="20"
            height="20"
            class="icon-in-block">
            <use href="../icons.svg#icon-arrow-down"></use>
            </svg>
            <span class="descr-span">${downloads}</span>
            </span>
            </p>
          </a>
        </li>`
      )
      .join("");
  
    gallery.insertAdjacentHTML("beforeend", markup);
  }