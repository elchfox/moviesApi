/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect }  from "react";
import { useObserver } from "mobx-react-lite";
import { Link } from "react-router-dom";

import { toJS } from "mobx";
import PeopleStore  from "../../Stores/PeopleStore";
import moment from "moment";


const people =  PeopleStore;


const calctime = (time)=>{
    let hours = time/60
    let min = (time % 60);
     
    return  parseInt(hours) + " Hours " + min +  " Minutes"
};

let id = null;

const  PeopleScreen  = (props) => {

    useEffect(()=>{
     let id = window.location.pathname.split('/').pop();
      people.getPeople(id)
    },[])

 

    return useObserver((e) =>
    <>
      <div className="cardPage" style={{backgroundImage:`url(../../plachholderPeoples.jpeg)`}} >
      <div className="blur-background">
        <div className="detilesCard">
           <img src={people.people.poster_path !== null ? `${global.posterUrl}${people.people.profile_path}` : "./placeholderpeople.jpg"} 
                alt={people.peopletitle} className="cover"/>
         <div className="rightBox">
              <h3 className="card-name">{people.people.name}</h3>
              <div className={" card-info"}>
                  <span>{moment().diff(people.people.birthday, 'years')}</span>
              </div>
              <div className="scrollBar card-over">
                <h2>Biography:</h2>
                <p>{people.people.biography}</p>
              </div>
           </div>
          </div>
          <div className="all-box-related">
                  <h5>Movie Credits</h5>
                  <div className="card-related scrollBarX">
                  {people.movieCredits.map((credits,i)=>(
                      <Link className="related" to={`/movie/${credits.id}` } key={credits.id}>
                        <img src={credits.poster_path !== null ? `${global.posterUrl}${credits.poster_path}` :  "../../placeholderMovie.jpg"} 
                        alt={credits.title} title={`${credits.title}\n${credits.overview}`}
                            className="img-related"/>
                      </Link>
                  ))}
                  </div>
                </div>
        </div>
        </div>
      </>
    )
}

export default PeopleScreen