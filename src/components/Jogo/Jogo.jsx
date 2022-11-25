import "./Jogo.css";

const Jogo = ({
    palavras,
    palavraChaveUnderline,
    palavraChave,
    setPalavraChave,
    alteraPalavraParaUnderline,
    setLetrasEscolhidas,
    numeroAleatorio,
    setPalavraChaveUnderline,
    setProntoParaJogar,
    erroImagem,
    setGanhouPerdeu,
    setContadorDeErro,
    setErroImagem,
    setChuteDigitado,
    corGanhouPerdeu,
    setCorGanhouPerdeu,
}) => {
    const palavraEscolhidaUnderline = palavraChaveUnderline;

    function alteraPalavraParaUnderline(lista) {
        const palavraUnderline = lista.map(() => "_");
        setProntoParaJogar(true);
        setPalavraChaveUnderline(palavraUnderline);
    }

    function escolhePalavra() {
        const palavraChaveAlterada = palavras[numeroAleatorio];
        const listaChave = palavraChaveAlterada.split("");
        setPalavraChave(palavraChaveAlterada);
        alteraPalavraParaUnderline(listaChave);
        setLetrasEscolhidas([]);
        setContadorDeErro(0);
        setErroImagem("./assets/forca0.png");
        setChuteDigitado("");
        setCorGanhouPerdeu("#000000");
    }

    function mostraPalavra() {
        let stringUnderline = palavraEscolhidaUnderline.toString();

        console.log(stringUnderline.replace(",", ""));
        console.log(typeof stringUnderline);
        return (
            <span data-test='word' data-answer={palavraChave ? palavraChave : "word"}>
                {stringUnderline.replace(/,/g, " ")}
            </span>
        );
    }

    return (
        <div className='top-game'>
            <div className='image-err'>
                <img data-test='game-image' src={erroImagem} alt='' />
            </div>
            <div className='choose-word-show-word'>
                <button data-test='choose-word' onClick={escolhePalavra}>
                    Escolher Palavra
                </button>
                <div className='chute' style={{ color: corGanhouPerdeu }}>
                    {palavraEscolhidaUnderline ? mostraPalavra() : null}
                </div>
            </div>
        </div>
    );
};

export default Jogo;
