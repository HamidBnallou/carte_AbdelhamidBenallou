import React from 'react';
import './CarteTitre.css';

const CarteTitre = (props) => {

    /*
    h1
    h2
    h3
    h4
    h5
    h6
    h7

    props : {
        as: "h1" < = defaut, "h2", "h3", "h4", "h5", "h6", "h7"
        className: String
        }
    */

        const classnames = ["titre"];
        if (props.className) classnames.push(props.className);

        switch (props.as){
            case "h2":
                return <h2 className={classnames.join(" ")}>{props.children}</h2>;
            case "h3":
                return <h3 className={classnames.join(" ")}>{props.children}</h3>;
            case "h4":
                return <h4 className={classnames.join(" ")}>{props.children}</h4>;
            case "h5":
                return <h5 className={classnames.join(" ")}>{props.children}</h5>;
            case "h6":
                return <h6 className={classnames.join(" ")}>{props.children}</h6>;
            case "h7":
                return <h7 className={classnames.join(" ")}>{props.children}</h7>;
            default:
                return <h1 className={classnames.join(" ")}>{props.children}</h1>
        }

}

export default CarteTitre;