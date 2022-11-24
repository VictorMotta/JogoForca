import "./Letras.css";
import { useState } from "react";

const Letras = (props) => {
    return (
        <>
            <button onClick={props.clickLetra} className={props.classLetras}>
                {props.value.toUpperCase()}
            </button>
        </>
    );
};

export default Letras;
