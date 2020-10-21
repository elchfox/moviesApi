/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect }  from "react";
import "./style.scss";
import { useObserver } from "mobx-react-lite";

import MovieCard from "../../Components/Movie/Movie"
import PeopleStore  from "../../Stores/PeopleStore";
import Header from "../../Components/Layout/Header";
import { Link } from "react-router-dom";
import Helper from "../../Method/Helper";

const people =  PeopleStore;
const  isCloseToBottom = (e) => {

  if(Helper.isCloseToBottom(e)){
    people.page++
      people.loadData(people.page)
  }

};
const  PoeplesScreen  = () => {

    useEffect(()=>{
      people.loadData(1);
    },[])
 
    return useObserver(() =>
    <>
        <Header/>
        <div className="scrollBar"  onScroll={isCloseToBottom}>
          <div className="card-contianer">
            {people.peoples.map((item)=>
              <Link className="cardBox"  to={`/people/${item.id}`}>
                <img src={`${global.posterUrl}${item.profile_path}`} alt={item.name}/>
                <div className="lableName">
                  <span>{item.name}</span>
                </div>
              </Link>
            )}   
        </div>
        </div>
    </>
        
    )
}

export default PoeplesScreen