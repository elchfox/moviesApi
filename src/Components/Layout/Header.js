import React, { useState, useEffect }  from "react";
import {  useObserver } from "mobx-react";
import MoviesStore  from "../../Stores/MoviesStore";
import TvStore  from "../../Stores/TvStore";
import PeopleStore  from "../../Stores/PeopleStore";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { toJS } from "mobx";
import GeneralStore  from "../../Stores/GeneralStore";



const general =  GeneralStore;
const movie =  MoviesStore;
const tv = TvStore;
const people = PeopleStore;

const onSelectGenre =  (id)=>{
  let list = toJS(movie.genresSelected)
  let res = list.indexOf(id)
   res < 0 ? list.push(id) : list.splice(res,1);

   movie.genresSelected =  list;
   movie.findByGenre()
}
const url = window.location.pathname.split('/').pop();

const checkGenre = (id) =>{
 return movie.genresSelected.includes(id) ? 'selected' : ''
}
const  Header = ()=> {
  useEffect(()=>{
      // if(url === ''){

      // }else if(url === 'tv'){
        
      // }
      movie.getGenre()

   },[])

    return useObserver(() =>
    

    <header>
        
    <input type="text" className="search"
    value={url === 'tv' ? tv.search : url === "people" ? people.sreach : movie.search}
    onChange={(e)=> url === 'tv' ? tv.searchTvs(e.target.value) :  
    url === "people" ? people.searchPeoples(e.target.value) :
    movie.searchMovies(e.target.value)}
    placeholder="Search..."/>
    <div className="box-genres">
      {movie.genres.map((genre,i)=>(
        <span onClick={()=> onSelectGenre(genre.id)} 
        className={`genre ${checkGenre(genre.id)}`} 
        key={genre.id} name={genre.name}>{genre.name}</span>
      ))}
    </div>
  </header>
    )
}

export default Header