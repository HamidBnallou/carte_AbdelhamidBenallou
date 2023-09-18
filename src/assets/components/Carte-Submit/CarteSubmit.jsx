import React, { useState } from 'react';
import './CarteSubmit.css';
import Button from "../Button/Button";

const CarteSubmit = (props) => {

  return (
    <Button
    type="submit" 
    className="ButtonSubmit">
        {props.children}
    </Button>
    
  )
}

export default CarteSubmit