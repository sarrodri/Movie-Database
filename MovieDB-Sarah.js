// API

const API_KEY = "api_key=30c8e528e46a869b675943f2be82e205";
const BASE_URL = "https://api.themoviedb.org/3/";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
// const IMG_URL = "https://image.tmdb.org/t/p/w500" construct with html code
const searchURL = BASE_URL+'/search/movie?'+API_KEY;

const main = MovieApp.getElementById('main');
const form = MovieApp.getElementById('form');
const search = MovieApp.getElementById('search')

getMovies(API_URL);

function getMovies(url){

    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results)
        showMovies(data.results);
    })

}

function showMovies(data) {

    data.forEach(movie =. {
        const {title, poster_path, vote_average} = movie;
        const movieE1 = document.createElement('div');
        movieE1.classList.add('movie');
        movieE1.innerHTML = "paste from index, see 30:00 on YT video"

        main.appendChild(movieE1);
    })
}

function getColor(vote) {
    if (vote >= 8) {
        return 'green'
    }
    else if (vote >= 5) {
        return 'orange'
    }
    else {
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if(searchTerm) {
        getMovies(searchURL +'&'+searchTerm)
    }
})