import React, {SyntheticEvent, useState} from "react";
import './EvHome.css';
import {EvHeader} from "./Header/EvHeader";
import {EvMain} from "./Main/EvMain";


export const EvHome = () => {
  return (
    <>
      <EvHeader/>
      <EvMain/>
    </>
  )
}
