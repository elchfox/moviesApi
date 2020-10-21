
class People {

  /* Get users By limit 50 */
   async GetPeople( page = 1) {
    const data = await fetch(
      `${global.baseUrl}/person/popular?api_key=${global.apiKey}&language=${global.lang}&page=${page}`)

    const json = await data.json()
    return json
  }

  async GetPeopleInfo( id = 1) {
    const data = await fetch(`${global.baseUrl}/person/${id}?api_key=${global.apiKey}&language=${global.lang}`)

    const json = await data.json();
    return json
  }

  async GetMovieCredits( id = 1) {
    const data = await fetch(`${global.baseUrl}/person/${id}/movie_credits?api_key=${global.apiKey}&language=${global.lang}`)

    const json = await data.json();
    return json
  }
  async GetSreachPeople(page , query){

    const data = await fetch(`${global.apiSearchBase}/person?api_key=${global.apiKey}&language=${global.lang}&page=${page}&query=${query}`);

    const json = await data.json();
    return json;
  }

}

export default new People();