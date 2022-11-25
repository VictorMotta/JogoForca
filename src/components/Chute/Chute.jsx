import "./Chute.css";

const Chute = ({
    chuteDigitado,
    setChuteDigitado,
    palavraChave,
    setErroImagem,
    prontoParaJogar,
    ganhouMostrar,
    perdeuMostrar,
}) => {
    function enviaInputChute() {
        if (prontoParaJogar) {
            if (chuteDigitado === palavraChave) {
                ganhouMostrar();
            } else {
                perdeuMostrar();
                setErroImagem("./assets/forca6.png");
            }
        }
    }

    return (
        <div className='container-chute'>
            <h1>Já sei a palavra!</h1>
            <input
                data-test='guess-input'
                disabled={prontoParaJogar ? null : "disabled"}
                onChange={(e) => setChuteDigitado(e.target.value.toLowerCase())}
                type='text'
                value={chuteDigitado}
            />
            <button
                disabled={prontoParaJogar ? null : "disabled"}
                data-test='guess-button'
                onClick={enviaInputChute}
            >
                Chutar
            </button>
        </div>
    );
};

export default Chute;
