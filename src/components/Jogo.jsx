import styled from "styled-components";

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
    setContadorDeErro,
    setErroImagem,
    setChuteDigitado,
    corGanhouPerdeu,
    setCorGanhouPerdeu,
    forcaInicial,
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
        setErroImagem(forcaInicial);
        setChuteDigitado("");
        setCorGanhouPerdeu("#000000");
    }

    function mostraPalavra() {
        let stringUnderline = palavraEscolhidaUnderline.toString();

        return (
            <span data-test='word' data-answer={palavraChave ? palavraChave : "word"}>
                {stringUnderline.replace(/,/g, " ")}
            </span>
        );
    }

    return (
        <StyledTopGame>
            <StyledImageErr>
                <img data-test='game-image' src={erroImagem} alt='' />
            </StyledImageErr>
            <StyledChooseWordShowWord>
                <button data-test='choose-word' onClick={escolhePalavra}>
                    Escolher Palavra
                </button>
                <StyledChute style={{ color: corGanhouPerdeu }}>
                    {palavraEscolhidaUnderline ? mostraPalavra() : null}
                </StyledChute>
            </StyledChooseWordShowWord>
        </StyledTopGame>
    );
};

export default Jogo;

const StyledTopGame = styled.div`
    width: 90%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    padding: 4% 10%;
    margin: 0 auto;
    position: relative;

    @media (max-width: 850px) {
        flex-direction: column;
        align-items: center;
    }
`;

const StyledImageErr = styled.div`
    img {
        width: 50%;
    }

    @media (max-width: 850px) {
        width: 100%;
        display: flex;
        justify-content: center;
        background-color: #fff;
        img {
            width: 50%;
            background-color: #fff;
        }
    }
`;

const StyledChooseWordShowWord = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    padding: 2% 0;
    position: relative;
    button {
        width: 200px;
        height: 60px;
        font-weight: 700;
        font-size: 20px;
        text-align: center;
        background: #27ae60;
        border: none;
        border-radius: 8px;
        color: white;
        margin-top: 20px;
        cursor: pointer;
    }

    @media (max-width: 850px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        span {
            width: 100%;
            font-size: 0.8em;
            overflow-wrap: break-word;
            word-wrap: normal;
        }
        button {
            margin-top: 50px;
        }
    }
`;

const StyledChute = styled.div`
    font-size: 50px;
    font-weight: 700;
    line-height: 68px;

    @media (max-width: 850px) {
        text-align: center;
        width: 100%;
        height: 15%;
        background-color: #fff;
        padding-top: 20px;
    }
`;
