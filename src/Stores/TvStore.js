/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {makeAutoObservable} from "mobx"

import Tv from "../api/Tv";
import General from "../api/General";

class TvStore {
  tvs = [];
  page = 1;
  search = '';
  constructor() {
      makeAutoObservable(this)
  }

  async loadData(page = 1){
    let res = await Tv.GetTvs(page)
    this.tvs = page > 1 ? [...this.tvs,...res.results] : res.results;
  }

  async searchTvs(text){
    let res = {};
    this.search = text;
    if(text.length > 0){
      res  = await Tv.GetSreachTv(1,text)
      
    }else{
      res = await Tv.GetTvs(1);

    }
    this.tvs = res.results;

  }

}





export default  new TvStore();
