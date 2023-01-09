import React from "react";
import './EvHome.css';

export const EvHeader = () => {
  return (
    <>
      <div className="evheadermenu">
        <div className="evheader">
          <div className="evlogo">Ω</div>
          <div>
            <h1>USELESS IDEA</h1>
            <div>Polska korporacja żyjąca w przestrzeni wormhole</div>
          </div>
        </div>
        <div className="evhmenu">
          <ul>
            <li>Strona domowa</li>
            <li>O nas</li>
            <li>Video</li>
            <li>Dołącz do nas</li>


          </ul>
        </div>
      </div>
    </>
  )

}