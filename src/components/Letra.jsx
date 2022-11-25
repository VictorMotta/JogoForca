import { useState } from "react";

const Letra = ({ letrasEscolhidas, clicadoLetra, classLetra, value }) => {
    console.log(letrasEscolhidas);
    return (
        <>
            <button
                data-test='letter'
                disabled={
                    letrasEscolhidas.includes(value) || classLetra === "letraDesabilitada"
                        ? "disabled"
                        : null
                }
                onClick={clicadoLetra}
                className={classLetra}
            >
                {value.toUpperCase()}
            </button>
        </>
    );
};
export default Letra;
