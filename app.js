const movieContainer = document.querySelector('.movie-info')
const moviePoster =  document.querySelector('.movie-poster')
const movieTitle =  document.querySelector('.movie-title')
const movieDescription =  document.querySelector('.movie-Description')
const getRandomMovieButton = document.querySelector('.find-movie')

getRandomMovieButton.addEventListener('click', async () => {
  const movie = await fetch('https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}')
})