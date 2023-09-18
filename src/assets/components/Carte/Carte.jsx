import "../Carte/Carte.css";
import Titre from '../Carte-Titre/CarteTitre';
import CarteBody from "../Carte-body/CarteBody";
import CarteButtons from "../Carte-boutons/CarteButtons";
import CarteSubmit from "../Carte-Submit/CarteSubmit";
import GridDiv from "../grid/grid";
import { useState } from "react";

const Carte = () => {
  const [ButtonClique , setButtonClique] = useState(0);

  const onClick = ( value , index ) => {

    //setButtonClique(ici on va faire une fonction qui nous récupère la dernière valeur a jour);
    setButtonClique((previous) => {
      if (previous === value) return 0 ;
      return value;
      
    });

  }
  return (
    <article className='carte'>
      <Titre className='titre_decoration'>How did we do ?</Titre>
      <CarteBody>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</CarteBody>
          <GridDiv>
              <CarteButtons ButtonClique={ButtonClique} setValue={onClick}>1</CarteButtons>
              <CarteButtons ButtonClique={ButtonClique} setValue={onClick}>2</CarteButtons>
              <CarteButtons ButtonClique={ButtonClique} setValue={onClick}>3</CarteButtons>
              <CarteButtons ButtonClique={ButtonClique} setValue={onClick}>4</CarteButtons>
              <CarteButtons ButtonClique={ButtonClique} setValue={onClick}>5</CarteButtons>
          </GridDiv>

      <CarteSubmit>S'inscrir</CarteSubmit>
    </article>
  )
}

export default Carte;