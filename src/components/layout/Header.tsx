import React from 'react';
import './Header.css';

export const Header = () => {

  return (
    <>
      <header>
        <h1>
          <strong>Mega </strong> Ogłoszenia
        </h1>
        <button>Dodaj ogłoszenie</button>
        <div className="search">
          <input type="text"/><button>Szukaj</button>
        </div>
      </header>
      <div className='map'>
        ...
      </div>
    </>
  );
}
