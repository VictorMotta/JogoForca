const Letra = ({ letrasEscolhidas, clicadoLetra, classLetra, value }) => {
    return (
        <>
            <button
                data-test='letter'
                disabled={
                    letrasEscolhidas.includes(value) || classLetra === "StyledLetraDesabilitada"
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
