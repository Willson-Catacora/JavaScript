document.getElementById('searchButton').addEventListener('click', searchMovies);

let api_key = 'f09072604fb500dfa39588cd8890f6c3';
let urlBase = 'https://api.themoviedb.org/3/search/movie';

let urlImg = 'https://image.tmdb.org/t/p/w200';
let resultContainer = document.getElementById('results');
function searchMovies(){
    let searchInput = document.getElementById('searchInput').value;
    resultContainer.innerHTML = 'Cargando...';
    
    fetch(`${urlBase}?api_key=${api_key}&query=${searchInput}`)
        .then(response => response.json())
        .then(response => displayMovies(response.results));
}

function displayMovies(movies){
    resultContainer.innerHTML = '';

    if(movies.lenght === 0){
        resultContainer.innerHTML = '<p>No se encontraron resultados para tu busqueda.</p>';
        return;
    }
    movies.forEach(movie => {
        let movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');

        let title = document.createElement('h2');
        title.textContent = movie.title;

        let releaseDate = document.createElement('p');
        releaseDate.textContent = 'La fecha de lanzamiento fue: '+ movie.release_date;

        let overciew = document.createElement('p');
        overciew.textContent = movie.overview;

        let posterPath = urlImg + movie.poster_path;
        let poster = document.createElement('img');
        poster.src = posterPath

        movieDiv.appendChild(poster);
        movieDiv.appendChild(title);
        movieDiv.appendChild(releaseDate);
        movieDiv.appendChild(overciew);

        resultContainer.appendChild(movieDiv);
    })
}