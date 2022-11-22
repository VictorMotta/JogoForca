import Letra from "../Letra/Letra";
import "./Letras.css";
import { useState } from "react";

const Letras = () => {
    const alfabeto = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];

    const [letraEscolhida, setLetraEscolhida] = useState("");

    return (
        <div className='container-letters'>
            {alfabeto.map((item, i) => (
                <Letra
                    key={i}
                    option='letraHabilitada'
                    value={item.toUpperCase()}
                    aoClicado={(event) => setLetraEscolhida(event)}
                />
            ))}
        </div>
    );
};

export default Letras;
