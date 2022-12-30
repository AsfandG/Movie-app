const API_LINK =
  "https://api.themoviedb.org/3/discover/movie/?sort_by=popularity.desc&api_key=f9e9a532bf4c8a7830dd96f20d1651c1&page=1";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie/?api_key=f9e9a532bf4c8a7830dd96f20d1651c1&query=";
const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";
const movieContainer = document.querySelector(".movie-container");
const cards = document.querySelector(".cards");
const search = document.querySelector("#search");
const form = document.querySelector("form");

function fetchMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data.results.forEach((item) => {
        const card = document.createElement("div");
        const card_image = document.createElement("div");
        const card_footer = document.createElement("div");
        const image = document.createElement("img");
        const h3 = document.createElement("h3");

        card.setAttribute("class", "card");
        card_image.setAttribute("class", "card-image");
        card_footer.setAttribute("class", "card-footer");
        image.setAttribute("class", "movie-img");

        h3.innerHTML = `${item.title}`;
        image.src = IMAGE_PATH + item.poster_path;

        card_image.append(image);
        card_footer.append(h3);
        card.appendChild(card_image);
        card.appendChild(card_footer);
        cards.appendChild(card);
      });
    });
}

fetchMovies(API_LINK);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  cards.innerHTML = "";
  const value = search.value;
  if (value) {
    fetchMovies(SEARCH_API + value);
    search.value = "";
  }
});
