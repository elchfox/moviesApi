/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect }  from "react";
import "./style.scss";
import { useObserver } from "mobx-react-lite";
import { Link } from "react-router-dom";

import MovieCard from "../../Components/Movie/Movie"
import { toJS } from "mobx";
import MoviesStore  from "../../Stores/MoviesStore";
import moment from "moment";

import Rater from 'react-rater'


const movie =  MoviesStore;
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
const calctime = (time)=>{
    let hours = time/60
    let min = (time % 60);
     
    return  parseInt(hours) + " Hours " + min +  " Minutes"
};

let id = null;

const  MovieScreen  = (props) => {

    useEffect(()=>{
     let id = window.location.pathname.split('/').pop();
     movie.getMovie(id)
     movie.getRecommendations(id)
    },[])

    useEffect(() => {
      let idPage = window.location.pathname.split('/').pop();
      if(id !== idPage ){
        id = idPage;
        movie.getMovie(idPage)
        movie.getRecommendations(idPage)

      }
      console.log(toJS( movie.movie))

    });

    return useObserver((e) =>

    <div style={{backgroundImage:movie.movie.backdrop_path !== null ? `url(${global.posterOriginUrl}${movie.movie.backdrop_path})` :`url(../../plachholderBG.jpg)`}} >
      <div className="blur-background">
        <div className="detilesCard">
           <img src={movie.movie.poster_path !== null ? `${global.posterUrl}${movie.movie.poster_path}` : "./placeholderMovie.jpg"} 
                alt={movie.movietitle} className="cover"/>
         <div className="rightBox">
              <h3 className="card-name">{movie.movie.title}</h3>
              <div className={"card-info"}>
                  <span>{moment(movie.movie.release_date).format("yyyy")}</span>
                  <span>{calctime(movie.movie.runtime)}</span>
              </div>
              <div className={"card-info"}>
              <Rater total={5} rating={movie.movie.vote_average / 2} />

              <span>({movie.movie.vote_count})</span>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/575px-IMDB_Logo_2016.svg.png" 
              alt="IMDB Logo" className="img-imdb" />
              <span>{movie.movie.vote_average}/10</span>

              
              </div>

              <div className="card-over">
                <h2>Overview:</h2>
                <p>{movie.movie.overview}</p>
              </div>
           </div>
          </div>
          <div className="all-box-related">
                  <h5>Recommendations</h5>
                  <div className="card-related scrollBarX">
                  {movie.recommendationsList.map((recommend,i)=>(
                      <Link className="related" to={`/movie/${recommend.id}` } key={recommend.id}>
                        <img src={recommend.poster_path !== null ? `${global.posterUrl}${recommend.poster_path}` :  "../../placeholderMovie.jpg"} 
                        alt={recommend.title} title={`${recommend.title}\n${recommend.overview}`}
                            className="img-related"/>
                      </Link>
                  ))}
                  </div>
                </div>
        </div>
             
      </div>
    )
}

export default MovieScreen