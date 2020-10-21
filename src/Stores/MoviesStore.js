/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {makeAutoObservable} from "mobx"

import Movies from "../api/Movies";
import General from "../api/General";

class MoviesStore {
  movies = [];
  movie = [];
  recommendationsList = []
  moviesSearch = [];
  genres = [];
  genresSelected = [];
  search = '';
  page = 1;
  url = "";
  constructor() {
      makeAutoObservable(this)
  }


  async loadData(page = 1){
    let res = await Movies.GetMovies(page)
    this.movies = page > 1 ? [...this.movies,...res.results] : res.results
  }

  async searchMovies(text){
    let res = {};
    this.search = text;
    if(text.length > 0){
      res  = await Movies.GetSreachMovie(1,text)
      
    }else{
      res = await Movies.GetMovies(1)

    }
    this.movies = res.results;

  }

  async getMovie(id){
    let res  = await Movies.GetMovie(id)
      
    this.movie = res;

  }


  async getRecommendations(id){
    let res = await Movies.GetRecommendations(this.page,id)
    console.log(res);
    this.recommendationsList = res.results;
  }
  // reset() {
  //     this.movies = 0
  // }

  async getGenre(){
    let res =  await General.GetGenre();
    this.genres =  res.genres
  }
  
  async findByGenre(){
    let res;
    if(this.genresSelected.length > 0){
      res = await Movies.GetByGenres(this.page, this.genresSelected);
      this.movies = res.results;

    }else{
        this.loadData(1)
    }
    
  }
}





export default  new MoviesStore();
