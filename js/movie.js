// -------------------- API URLs for the App -------------------

const ApiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const imageApi = 'https://image.tmdb.org/t/p/w1280'
const searchApi = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

// ------------------- To integrate DATA into the Page using classes/ids -------------------

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

// ------------------ Initiating the MOVIE list -------------------------------

getMovieList(ApiUrl)

// ----------------- Functions ---------------------------

// async function getMovieList(url){
//     const response = await fetch(url)
//     const movieData = await response.json()

//     displayMovies(movieData.results)
// }

async function getMovieList(url) {
    const response = await fetch(url)
    const moviedata = await response.json()

    displayMovies(moviedata.results)
}
// ----------------- To Display MOVIES on the page -------------------------


function displayMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie

        const movieElement = document.createElement('div')
        movieElement.classList.add('movie')

        movieElement.innerHTML = `
            <img src="${imageApi + poster_path}" alt="${title}">
            <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
        `
        main.appendChild(movieElement)
    })
}

// -------------------- Movie Rating -----------------

function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}


// ------------------------  FORM/ SEARCH ENTRY to catch the MOVIE name ----------------

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const searchMovie = search.value

    if(searchMovie && searchMovie !== '') {
        getMovieList(searchApi + searchMovie)

        search.value = ''
    } else {
        window.location.reload()
    }
})


