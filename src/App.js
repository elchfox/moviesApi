import React from 'react';
import "./App.scss";
import "./config/Global";
import { BrowserRouter } from "react-router-dom";
import { useLocalStore, useObserver } from "mobx-react";
import { toJS} from "mobx"
import { observer } from "mobx-react-lite";

import HomeScreen from './Pages/Home/Home'; 

import MoviesStore from "./Stores/MoviesStore";
import PeopleStore from "./Stores/PeopleStore";

import TvStore from "./Stores/TvStore";

import GeneralStore from "./Stores/GeneralStore";

const StoreContext = React.createContext();


const StoreProvider = ({ children }) => {
  
  const Movies = useLocalStore(() => MoviesStore);
  const People = useLocalStore(() => PeopleStore);

  const Tv = useLocalStore(() => TvStore);
  const General = useLocalStore(() => GeneralStore);
  const store = {Movies,People,Tv,General}

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};


function App() {
  return useObserver(() =>
    <StoreProvider>
      <BrowserRouter>
        <div className="App">
          <div className="mainLayout">
              <HomeScreen/>
          </div>
        </div>
      </BrowserRouter>
    </StoreProvider>
    
    );
}

export default App;




