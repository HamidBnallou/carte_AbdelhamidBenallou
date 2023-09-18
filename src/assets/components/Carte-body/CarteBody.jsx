import React from 'react';
import './CarteBody.css';

const CarteBody = (props) => {

  const classnames = ["text"];
  if (props.className) classnames.push(props.className);

  /*
    p
    span
    article
    clockquote

    props:{
      as: "p" | "span" | "article" | "blockquote"
    }

  */

  switch (props.as){
    case "span":
      return <span className={classnames.join(" ")}>{props.children}</span>
    case "article":
      return <article className={classnames.join(" ")}>{props.children}</article>
    case "blockquote":
      return <blockquote className={classnames.join(" ")}>{props.children}</blockquote>
    default:
      return <p className={classnames.join(" ")}>{props.children}</p>
  }
  
};

export default CarteBody;