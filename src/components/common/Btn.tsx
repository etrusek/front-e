import React from "react";
import {Link} from 'react-router-dom';
import './Btn.css';

interface Props {
  text: string;
  to?: string
}

export const Btn = (props: Props) => (
  props.to
    ? <Link to={props.to}>{props.text}</Link>
    : <button>{props.text}</button>
)
