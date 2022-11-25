import Letra from "../Letra";
import "./Letras.css";

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
    ganhouTrocaCor,
    perdeuTrocaCor,
}) => {
    console.log(palavraChave);

    function selecionaLetra(i) {
        if (letrasEscolhidas.includes(i)) {
            return "letraDesabilitada";
        } else {
            return "letraHabilitada";
        }
    }

    function letraClicada(letra) {
        if (!letrasEscolhidas.includes(letra)) {
            setLetrasEscolhidas([...letrasEscolhidas, letra]);
            verificaLetraVerdadeiro(letra);
        }
    }

    function verificaLetraVerdadeiro(letra) {
        let listaPalavra = palavraChave.split("");

        if (listaPalavra.indexOf(letra) >= 0) {
            listaPalavra.map((item, i) => {
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
        listaPalavra[i] = letra;
        setPalavraChaveUnderline(listaPalavra);
    }

    function verificaGanhouPerdeu(contador) {
        if (!palavraChaveUnderline.includes("_")) {
            ganhouTrocaCor();
        }

        switch (contador) {
            case 1:
                setErroImagem("./assets/forca1.png");
                break;
            case 2:
                setErroImagem("./assets/forca2.png");
                break;
            case 3:
                setErroImagem("./assets/forca3.png");
                break;
            case 4:
                setErroImagem("./assets/forca4.png");
                break;
            case 5:
                setErroImagem("./assets/forca5.png");
                break;
            case 6:
                setErroImagem("./assets/forca6.png");
                perdeuTrocaCor();
                break;
        }
    }

    return (
        <div className='container-letters'>
            {letras.map((item) => (
                <Letra
                    key={item}
                    clicadoLetra={!prontoParaJogar ? null : () => letraClicada(item)}
                    classLetra={!prontoParaJogar ? "letraDesabilitada" : selecionaLetra(item)}
                    value={item}
                />
            ))}
        </div>
    );
};

export default Letras;
