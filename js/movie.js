// -------------------- API URLs for the App -------------------

const ApiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
const imageApi = 'https://image.tmdb.org/t/p/w1280';
const searchApi = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

// ------------------- To integrate DATA into the Page using classes/ids -------------------

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

// ------------------ Initiating the MOVIE list -------------------------------

getMovieList(ApiUrl);

// ----------------- Functions ---------------------------

async function getMovieList(url){
    const movieData = await (await fetch(url)).json();

    displayMovies(movieData.results);
}

function displayMovies(movies){
    main.innerHtml = '';

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview} = movie;

        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        
    })
}

