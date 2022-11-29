// API

const API_KEY = " ";
const BAS_URL = " ";
const API_URL = BAS_URL + " " + API_KEY;

getMovies(API_URL);

function getMovies(url){

    fetch(url).then(res => res.json()).then(data => {
        
        showMovies(data.results);
    })

}

function showMovies(data) {

    data.forEach(movie =. {
        const movieE1 = document.createElement('div');
        movieE1.classList.add('movie');
        movieE1.innerHTML = "paste from index, see 30:00 on YT video"
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