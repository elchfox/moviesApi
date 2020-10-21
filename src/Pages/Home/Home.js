/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./style.scss";
import { useObserver } from "mobx-react-lite";
import {  Route } from "react-router-dom";

import MovieScreen from "../Movie/Movie";
import MoviesScreen from "../Movies/Movies";
import PeoplesScreen from "../Peoples/People";
import PeopleScreen from "../People/People";

import TvScreen from "../Tv/Tv";
import LeftBar from "../../Components/Layout/LeftBar"

import GeneralStore  from "../../Stores/GeneralStore";



const general =  GeneralStore;


const  HomeScreen  = () => {
 
    return useObserver(() =>
    <div className="home">
      <div className="wapper">
        <LeftBar/>
        <div className={`wapper-sub ${general.checkToggleBar ? "active" : ""}`}>
            <Route exact path="/" component={MoviesScreen} />
            <Route exact path="/movie/:id" component={MovieScreen} />
            <Route exact path="/tv" component={TvScreen} />
            <Route exact path="/people" component={PeoplesScreen} />
            <Route exact path="/people/:id" component={PeopleScreen} />
        </div>

      </div>
    </div>
        
    )
}

export default HomeScreen