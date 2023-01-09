import React, {useState} from 'react';
import './App.css'
import {Header} from "./components/layout/Header";
import {Map} from './components/Map/Map'
import {SearchContext} from "./context/search.context";
import {Route, Routes} from "react-router-dom";
import {AddForm} from "./components/AddForm/AddForm";
import {EvHome} from  "./components/EvHome/EvHome";
import {Math} from "./components/Math/Math";

export const App = () => {
  const [search, setSearch] = useState("");
  return (
    <SearchContext.Provider value={{search, setSearch}}>
      {/*<Header/>*/}
      <Routes>
        <Route path='/' element={<Math/>}/>
        <Route path='/eve' element={<EvHome/>}/>
        <Route path='/add' element={<AddForm/>}/>
        <Route path='/map' element={<Map/>}/>
      </Routes>


    </SearchContext.Provider>
  );
}
