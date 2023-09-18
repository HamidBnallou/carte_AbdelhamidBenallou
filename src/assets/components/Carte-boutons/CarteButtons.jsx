//import React, { useState } from 'react';
import React from 'react';
import "./CarteButtons.css";
import RoundButton from "../Carte-RoundButton/CarteRoundButton";

const CarteButtons = (props) => {







    //const [isClicked, setIsClicked] = useState(false);

    const className = props.ButtonClique === Number(props.children) ? "active" : "inactive";

    /*const onClick = () => {
      setIsClicked(!isClicked);
    }*/

    const onClick = () => {
      props.setValue(Number(props.children));
    }



    //const className = isClicked ? "active" : "inactive" ;

    return (
      <RoundButton className={className} onClick={onClick} >{props.children}</RoundButton>
    )






}

export default CarteButtons