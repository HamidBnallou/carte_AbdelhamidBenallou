import React from 'react';
import './grid.css';

const grid = (props) => {
  return (
    <div className='grid'>{props.children}</div>
  )
}

export default grid