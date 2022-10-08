// card film template   <li> in <div> container
// расчет на то, что на списке <ul class="films"></ul> - класс называется films

// это список ul в главной секции
import { refs } from './refs';
// import TrendingMovies from './MykolaPom';

function renderFilmsMarkup(films) {
  films
    .map(({ poster_path, title, id }) => {
      // let filmGenres = genres.map(({ name }) => name).join(', ');

      return `<li class="films__item" data-id=${id}>
                <div class="films__img">
                    <img src=https://image.tmdb.org/t/p/original${poster_path} alt="${title}" loading="lazy">
                </div>
                <div class="films__description">
                  <p class="films__title">${title}</p>
                  <div class="films__meta">
                    
                  </div>
                </div>
            </li>`;
    })
    .forEach(c => refs.gallery.insertAdjacentHTML('beforeend', c));
}
{
  /* <span class="films__genres">${genres || 'Action'}</span>
                    <span class="films__sep">|</span>
                    <span class="films__data">${(release_date || '2022').slice(
                      0,
                      4
                    )}</span> */
}
//  release_date, genres,
export default function renderFilmsMarkup(films) {
  refs.filmsListRef.innerHTML = makeFilmsMarkup(films);
}
