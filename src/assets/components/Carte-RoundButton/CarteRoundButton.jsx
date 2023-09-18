import React from 'react';
import "./CarteRoundButton.css";
import Button from "../Button/Button";

const CarteRoundButton = (props) => {

    const classnames = ["Rounded_Button"];

    if(props.className) classnames.push(props.className);

  return (
    <Button 
    onClick={props.onClick} 
    className={classnames.join(" ")} >
        {props.children}
    </Button>
  )
}

export default CarteRoundButton