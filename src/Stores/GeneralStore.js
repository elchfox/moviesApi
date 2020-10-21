/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {action, makeAutoObservable} from "mobx"

import Movies from "../api/Movies";
import General from "../api/General";

class GeneralStore {
    checkToggleBar = false;
    actionLink = '';

    async checkActionLink(){
      
    }
    constructor() {
        makeAutoObservable(this)
    }
}





export default  new GeneralStore();
