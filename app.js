const movieContainer = document.querySelector('.movie-info')
const moviePoster =  document.querySelector('.movie-poster')
const movieTitle =  document.querySelector('.movie-title')
const movieDescription =  document.querySelector('.movie-Description')
const getRandomMovieButton = document.querySelector('.find-movie')

const API_KEY = 'e8c7db52a2a42d93a081a9ca14524b68'

getRandomMovieButton.addEventListener('click', async () => {

  const randomId = Math.floor(Math.random() * 500)

  const movie = await fetch('https://api.themoviedb.org/3/movie/${randomId}?api_key=${API_KEY}')
  const movieData = await movie.json()

  moviePoster.src = 'https://image.tmdb.org/t/p/w500$(movieData.poster_path}'
  movieTitle.textContent = movieData.title
  movieDescription.textContent = movieData.overview

})