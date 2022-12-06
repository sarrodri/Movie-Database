// API

const API_KEY = "api_key=30c8e528e46a869b675943f2be82e205";
const BASE_URL = "https://api.themoviedb.org/3/";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500" ;
const searchURL = BASE_URL+'/search/movie?'+API_KEY;

const genres ,{[
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]}

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search')

getMovies(API_URL);

function getMovies(url){

    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showMovies(data.results);
    })

}

function showMovies(data) {

    data.forEach(movie => {
        const {title, poster_path, vote_average} = movie;
        const movieE1 = document.createElement('div');
        movieE1.classList.add('movie');
        movieE1.innerHTML = `<img src = "https://images.unsplash.com/photo-1669833593439-6db11b5bc570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt ="image">

                <div class = "movie-info">
                    <h3>Movie Title</h3>
                    <span class="Green"> 9.8</span>
                </div>
                <div class = "overview">
                    Lorem ipsum dolor sit amet, consectetur a
                    dipisicing elit. Quo eligendi dicta aperiam 
                    velit nobis inventore quidem facere reprehenderit 
                    deleniti ab ullam id ea et molestiae, temporibus, 
                    est repellat numquam incidunt.
                </div>"

            main.appendChild(movieE1);`
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
        getMovies(searchURL +'&query='+searchTerm)
    }
    else {
        getMovies(API_URL);
    }
})