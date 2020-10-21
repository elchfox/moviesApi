/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {makeAutoObservable} from "mobx"

import People from "../api/People";
import General from "../api/General";

class PeopleStore {
  peoples = [];
  people = [];
  page = 1;
  search = '';
  moviesShowed = [];
  movieCredits = [];
  constructor() {
      makeAutoObservable(this)
  }

 

  async loadData(page = 1){
    let res = await People.GetPeople(page)
    this.peoples =  page > 1 ?  [...this.peoples,...res.results] : res.results; 
  }

  async getPeople(id){
    let res  = await People.GetPeopleInfo(id)
    this.people = res;
    console.log(res,'hhh')
    this.GetMovieCredits(id)

  }

  async GetMovieCredits(id){
    let res  = await People.GetMovieCredits(id);
    this.movieCredits = res.cast;

  }

  async searchPeoples(text){
    let res = {};
    this.search = text;
    if(text.length > 0){
      res  = await People.GetSreachPeople(1,text)
      
    }else{
      res = await People.GetPeople(1);

    }
    this.peoples = res.results;

  }
  
}





export default  new PeopleStore();
