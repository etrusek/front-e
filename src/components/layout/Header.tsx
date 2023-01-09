import React, {EventHandler, FormEvent, FormEventHandler, SyntheticEvent, useContext, useState} from 'react';
import './Header.css'
import {Btn} from "../common/Btn";
import {SearchContext} from "../../context/search.context";

export const Header = () => {
  const {search, setSearch} = useContext(SearchContext)
  const [inputVal, setInputVal] = useState(search);

  const setSearchFromLocaleState = (e: SyntheticEvent) => {
    e.preventDefault();
    setSearch(inputVal);
  }

  return (
    <header>
      <h1>
        <strong>Mega </strong> Ogłoszenia
      </h1>
      <Btn to="/add" text='Dodaj ogłoszenie'/>
      <form className="search" onSubmit={setSearchFromLocaleState}>
        <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)}/>
        <Btn text='Szukaj' to='/'/>

      </form>
    </header>
  )
}
