import Letra from "./Letra";
import styled from "styled-components";

const Letras = ({
    letras,
    letrasEscolhidas,
    setLetrasEscolhidas,
    palavraChave,
    setContadorDeErro,
    contadorDeErro,
    palavraChaveUnderline,
    setPalavraChaveUnderline,
    prontoParaJogar,
    setErroImagem,
    ganhouMostrar,
    perdeuMostrar,
    forca1,
    forca2,
    forca3,
    forca4,
    forca5,
    forca6,
}) => {
    function selecionaLetra(i) {
        if (letrasEscolhidas.includes(i)) {
            return "StyledLetraDesabilitada";
        } else {
            return "StyledLetraHabilitada";
        }
    }

    function letraClicada(letra) {
        if (!letrasEscolhidas.includes(letra)) {
            setLetrasEscolhidas([...letrasEscolhidas, letra]);
            verificaLetraVerdadeiro(letra);
        }
    }

    function verificaLetraVerdadeiro(letra) {
        let listaPalavraAlterada = palavraChave
            .normalize("NFD")
            .replace(/[^a-zA-Z\s]/g, "")
            .split("");
        console.log(letra);
        console.log(listaPalavraAlterada.includes(letra));
        if (listaPalavraAlterada.includes(letra)) {
            listaPalavraAlterada.map((item, i) => {
                if (item === letra) {
                    console.log("acertou");
                    alteraAcertou(item, i);
                    verificaGanhouPerdeu();
                }
            });
        } else {
            console.log("errou");
            const contador = contadorDeErro + 1;
            setContadorDeErro(contador);
            verificaGanhouPerdeu(contador);
        }
    }

    function alteraAcertou(letra, i) {
        let listaPalavra = palavraChaveUnderline;
        let listaPalavraSemAlterar = palavraChave.split("");
        let letraComCaractereEspecial = listaPalavraSemAlterar[i];
        listaPalavra[i] = letraComCaractereEspecial;
        setPalavraChaveUnderline(listaPalavra);
    }

    function verificaGanhouPerdeu(contador) {
        if (!palavraChaveUnderline.includes("_")) {
            ganhouMostrar();
        }

        switch (contador) {
            case 1:
                setErroImagem(forca1);
                break;
            case 2:
                setErroImagem(forca2);
                break;
            case 3:
                setErroImagem(forca3);
                break;
            case 4:
                setErroImagem(forca4);
                break;
            case 5:
                setErroImagem(forca5);
                break;
            case 6:
                setErroImagem(forca6);
                perdeuMostrar();
                break;
        }
    }

    return (
        <StyledContainerLetters>
            {letras.map((item) => (
                <Letra
                    prontoParaJogar={prontoParaJogar}
                    letrasEscolhidas={letrasEscolhidas}
                    key={item}
                    clicadoLetra={!prontoParaJogar ? null : () => letraClicada(item)}
                    classLetra={!prontoParaJogar ? "StyledLetraDesabilitada" : selecionaLetra(item)}
                    value={item}
                />
            ))}
        </StyledContainerLetters>
    );
};

export default Letras;

const StyledContainerLetters = styled.div`
    width: 48%;
    margin: 30px auto;

    .StyledLetraHabilitada {
        width: 40px;
        height: 40px;
        background: #e1ecf4;
        border: 1px solid #7aa7c7;
        border-radius: 3px;
        font-weight: 700;
        font-size: 16px;
        text-align: center;
        color: #39739d;
        margin: 5px;
        cursor: pointer;
    }

    .StyledLetraDesabilitada {
        width: 40px;
        height: 40px;
        background: #9faab5;
        border: 1px solid #7aa7c7;
        border-radius: 3px;
        font-weight: 700;
        font-size: 16px;
        text-align: center;
        color: #798a9f;
        margin: 5px;
    }
    @media (max-width: 1024px) {
        width: 100%;
        margin: 30px auto;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
`;
