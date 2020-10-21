class General {

    /* Get users By limit 50 */
    async GetGenre() {
      const data = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${global.apiKey}&language=${
          global.lang}`)
  
      const json = await data.json();      
      return json
    }
  
  }
  
  export default new General();