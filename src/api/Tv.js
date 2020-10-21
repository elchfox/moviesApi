
class Tv {

  /* Get users By limit 50 */
   async GetTvs( page = 1) {
    const data = await fetch(
      `${global.baseUrl}/tv/popular?api_key=${global.apiKey}&language=${
        global.lang
      }&page=${page}`)

    const json = await data.json()
    return json
  }

  async GetTv( id = 1) {
    const data = await fetch(`${global.apiUrl}/${id}?api_key=${global.apiKey}&language=${global.lang}`)

    const json = await data.json();
    return json
  }


  async GetSreachTv(page , query){

    const data = await fetch(`${global.apiSearchBase}/tv?api_key=${global.apiKey}&language=${global.lang}&page=${page}&query=${query}`);

    const json = await data.json();
    return json;
  }

  

}

export default new Tv();