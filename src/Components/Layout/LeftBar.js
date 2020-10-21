import React, {useState}  from "react";
import {  useObserver } from "mobx-react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm,faTv, faUsers ,faBars} from '@fortawesome/free-solid-svg-icons'

import GeneralStore  from "../../Stores/GeneralStore";



const general =  GeneralStore;
const checkLink = (nameLink)=>{
  return general.actionLink === nameLink ? 'active' : '';
}
const url = window.location.pathname.split('/').pop();

const  LeftBar = ()=> {
    return useObserver(() =>
    

    <nav className={`leftSide ${general.checkToggleBar ? 'active' : ''}`}>
      <div className="toggleBar">
          <i className="burger" onClick={()=> {
             
            general.checkToggleBar = !general.checkToggleBar}}>
            <FontAwesomeIcon icon={faBars} />
          </i>
        </div>
      {console.log(general.checkToggleBar ,'gg')}
        <Link to={'/'} className={checkLink('')} title="Movies">
          <FontAwesomeIcon icon={faFilm} />
          <span className="text">Movies</span>
        </Link>
        <Link to={'/tv'} className={checkLink('tv')}  title="Tv & Show">
          <FontAwesomeIcon icon={faTv} />
          <span className="text">TV & Show</span>
        </Link>
        <Link to={'/people'} className={checkLink('people')}  title="People">
          <FontAwesomeIcon icon={faUsers} />
          <span className="text">Poeple</span>
        </Link>
    </nav>
    )
}

export default LeftBar