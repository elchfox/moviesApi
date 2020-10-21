
class Movies {

  /* Get users By limit 50 */
   async GetMovies( page = 1) {
    const data = await fetch(
      `${global.apiUrl}/popular?api_key=${global.apiKey}&language=${
        global.lang
      }&page=${page}`)

    const json = await data.json()
    return json
  }

  async GetMovie( id = 1) {
    const data = await fetch(`${global.apiUrl}/${id}?api_key=${global.apiKey}&language=${global.lang}`)

    const json = await data.json();
    return json
  }
  
  async GetByGenres(page = 1,genres ) {
    
    const data = await fetch(`${global.baseUrl}/discover/movie?api_key=${global.apiKey}&with_genres=${genres}&page=${page}&language=${global.lang}`);


    const json = await data.json();
    console.log(json)
    return json
  }
  async GetRecommendations( page = 1,id) {

    const data = await fetch(
      `${global.apiUrl}/${id}/recommendations?api_key=${global.apiKey}&language=${global.lang}&page=${page}`)

    const json = await data.json();
    
    return json
  }

  async GetSimilar( page = 1,id) {

    const data = await fetch(
      `${global.apiUrl}/${id}/similar?api_key=${global.apiKey}&language=${global.lang}&page=${page}`)

    const json = await data.json();
    
    return json
  }
  
  async GetVideos(id) {
    
    const data = await fetch(`${global.apiUrl}/movie/${id}/videos?api_key=${global.apiKey}`);


    const json = await data.json();
    
    return json
  }

  async GetMoviesNowPlaying(page = 1) {
    const data = await fetch(`${global.apiUrl}/movie/now_playing?api_key=${global.apiKey}&language=${global.lang}&page=${page}`)

    const json = await data.json();
    return json
  }

  async GetMoviesTopRated(page = 1) {
    const data = await fetch(`${global.apiUrl}/movie/top_rated?api_key=${global.apiKey}&language=${global.lang}&page=${page}`)

    const json = await data.json();
    return json;
  }

  async GetSreachMovie(page , query){

    const data = await fetch(`${global.apiSearch}?api_key=${global.apiKey}&language=${global.lang}&page=${page}&include_adult=false&query=${query}`);

    const json = await data.json();
    return json;
  }
  async GetMoviesUpcoming(page = 1) {
    const data = await fetch(
      `${global.apiUrl}/movie/upcoming?api_key=${global.apiKey}&language=${
        global.lang
      }&page=${page}`);

    const json = await data.json();
    return json
  }


}

export default new Movies();