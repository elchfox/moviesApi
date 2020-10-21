/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect }  from "react";
import { useObserver } from "mobx-react-lite";

import TvCard from "../../Components/Tv/Tv"
import TvStore  from "../../Stores/TvStore";
import Header from "../../Components/Layout/Header";
import Helper from "../../Method/Helper";

const tv =  TvStore;

const  isCloseToBottom = (e) => {

  if(Helper.isCloseToBottom(e)){
    tv.page++
      tv.loadData(tv.page)
  }

};

const  TvScreen  = () => {

    useEffect(()=>{
      tv.loadData(1);
    },[])
 
    return useObserver(() =>
    <>

              <Header/>
              <div className="scrollBar" onScroll={isCloseToBottom}>

              <div className="card-contianer">
            {tv.tvs.map((item)=>
              <TvCard key={item.id} {...item}/>
            )}
            
         </div>
         </div>
    </>
        
    )
}

export default TvScreen