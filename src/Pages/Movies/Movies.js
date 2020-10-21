/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect }  from "react";
import { useObserver } from "mobx-react-lite";

import MovieCard from "../../Components/Movie/Movie"
import MoviesStore  from "../../Stores/MoviesStore";
import Header from "../../Components/Layout/Header";
import Helper from "../../Method/Helper";

const movie =  MoviesStore;

const  isCloseToBottom = (e) => {

    if(Helper.isCloseToBottom(e)){
      movie.page++
        movie.loadData(movie.page)
    }
  
};

const  MoviesScreen  = () => {

    useEffect(()=>{
      movie.loadData(1);
    },[])
 
    return useObserver(() =>
    <>
              <Header/>
          <div className="scrollBar" onScroll={isCloseToBottom}>
          <div className="card-contianer">
            {movie.movies.map((item)=>
              <MovieCard key={item.id} {...item}/>
            )}
            
         </div>
         </div>
    </>
        
    )
}

export default MoviesScreen