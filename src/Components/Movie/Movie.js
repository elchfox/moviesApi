import React, { useState, useEffect }  from "react";
import { useLocalStore, useObserver } from "mobx-react";

import { Link } from "react-router-dom";

const StoreContext = React.createContext();




const setVoteClass = (value) =>{
  if(value >= 9){
    return "green"
  } else if (value >= 8){
    return "breenLight"
  }else if (value >= 7){
    return "yellow"
  }else if (value >= 6){
    return "orange"
  }else {
    return "red"
  }

}

function  MovieCard ({id,poster_path,title,vote_average,overview}) {
    return useObserver(() =>
    

     <Link className="card"  to={`/movie/${id}`} >
         <img src={poster_path !== null ? `${global.posterUrl}${poster_path}` : "./placeholderMovie.jpg"} alt={title}/>
         <div className={"card-info"}>
          <h3 className="card-name">{title}</h3>
          <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
         </div>
     </Link>
    )
}

export default MovieCard