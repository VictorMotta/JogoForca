import "./Chute.css";

const Chute = ({
    chuteDigitado,
    setChuteDigitado,
    palavraChave,
    setErroImagem,
    prontoParaJogar,
    ganhouTrocaCor,
    perdeuTrocaCor,
}) => {
    function enviaInputChute() {
        if (prontoParaJogar) {
            if (chuteDigitado === palavraChave) {
                ganhouTrocaCor();
            } else {
                perdeuTrocaCor();
                setErroImagem("./assets/forca6.png");
            }
        }
    }

    return (
        <div className='container-chute'>
            <h1>Já sei a palavra!</h1>
            <input
                data-test='guess-input'
                onChange={(e) => setChuteDigitado(e.target.value)}
                type='text'
                value={chuteDigitado}
            />
            <button data-test='guess-button' onClick={enviaInputChute}>
                Chutar
            </button>
        </div>
    );
};

export default Chute;
