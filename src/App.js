import Chute from "./components/Chute/Chute";
import Jogo from "./components/Jogo/Jogo";
import Letras from "./components/Letras/Letras";
import { useState } from "react";

function App({ palavras }) {
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
    const numeroAleatorio = Math.floor(Math.random() * palavras.length);
    const [chuteDigitado, setChuteDigitado] = useState("");
    const [palavraChave, setPalavraChave] = useState("");
    const [palavraChaveUnderline, setPalavraChaveUnderline] = useState([]);
    const [letrasEscolhidas, setLetrasEscolhidas] = useState([]);
    const [prontoParaJogar, setProntoParaJogar] = useState(false);

    function escolhePalavra(listaPalavras) {
        const palavraChaveAlterada = listaPalavras[numeroAleatorio];
        const listaChave = palavraChaveAlterada.split("");
        setPalavraChave(palavraChaveAlterada);
        alteraPalavraParaUnderline(listaChave);
    }

    function alteraPalavraParaUnderline(lista) {
        const palavraUnderline = lista.map(() => "_ ");
        setProntoParaJogar(true);
        setPalavraChaveUnderline([palavraUnderline]);
    }

    function letraClicada(letra) {
        if (!letrasEscolhidas.includes(letra)) {
            setLetrasEscolhidas([...letrasEscolhidas, letra]);
        }
    }

    function enviaInputChute() {
        console.log(chuteDigitado);
        setChuteDigitado("");
    }

    function selecionaLetra(i) {
        if (letrasEscolhidas.includes(i)) {
            return "letraDesabilitada";
        } else {
            return "letraHabilitada";
        }
    }
    console.log(letrasEscolhidas);
    return (
        <>
            <Jogo palavra={palavraChaveUnderline} alteraPalavra={() => escolhePalavra(palavras)} />
            <div className='container-letters'>
                {alfabeto.map((item) => (
                    <Letras
                        clickLetra={!prontoParaJogar ? null : () => letraClicada(item)}
                        letras={alfabeto}
                        classLetras={!prontoParaJogar ? "letraDesabilitada" : selecionaLetra(item)}
                        value={item}
                    />
                ))}
            </div>
            <Chute
                clickChuteDigitado={enviaInputChute}
                onchange={(e) => setChuteDigitado(e.target.value)}
                value={chuteDigitado}
            />
        </>
    );
}

export default App;
