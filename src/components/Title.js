import React from 'react';
import './Title.scss';

export default function Title(props) {
  return (
    <h1 className="title">{props.text}</h1>
  )
}
