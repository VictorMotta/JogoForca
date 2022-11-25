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

    let numeroAleatorio = Math.floor(Math.random() * palavras.length);
    const [chuteDigitado, setChuteDigitado] = useState("");
    const [palavraChave, setPalavraChave] = useState("");
    const [palavraChaveUnderline, setPalavraChaveUnderline] = useState();
    const [letrasEscolhidas, setLetrasEscolhidas] = useState([]);
    const [prontoParaJogar, setProntoParaJogar] = useState(false);
    const [contadorDeErro, setContadorDeErro] = useState(0);
    const [erroImagem, setErroImagem] = useState("./assets/forca0.png");
    const [ganhouPerdeu, setGanhouPerdeu] = useState("");
    const [corGanhouPerdeu, setCorGanhouPerdeu] = useState("#000000");

    function ganhouTrocaCor() {
        setCorGanhouPerdeu("#27AE60");
    }

    function perdeuTrocaCor() {
        setCorGanhouPerdeu("#FF0000");
    }

    console.log("-----------------------começa aqui -----------------");
    console.log(corGanhouPerdeu);
    return (
        <>
            <Jogo
                palavras={palavras}
                palavraChaveUnderline={palavraChaveUnderline}
                palavraChave={palavraChave}
                setPalavraChave={setPalavraChave}
                setLetrasEscolhidas={setLetrasEscolhidas}
                numeroAleatorio={numeroAleatorio}
                setPalavraChaveUnderline={setPalavraChaveUnderline}
                setProntoParaJogar={setProntoParaJogar}
                erroImagem={erroImagem}
                setGanhouPerdeu={setGanhouPerdeu}
                ganhouPerdeu={ganhouPerdeu}
                setContadorDeErro={setContadorDeErro}
                setErroImagem={setErroImagem}
                setChuteDigitado={setChuteDigitado}
                ganhouTrocaCor={corGanhouPerdeu}
                setCorGanhouPerdeu={setCorGanhouPerdeu}
                corGanhouPerdeu={corGanhouPerdeu}
            />

            <Letras
                letras={alfabeto}
                letrasEscolhidas={letrasEscolhidas}
                setLetrasEscolhidas={setLetrasEscolhidas}
                palavraChave={palavraChave}
                setContadorDeErro={setContadorDeErro}
                contadorDeErro={contadorDeErro}
                palavraChaveUnderline={palavraChaveUnderline}
                setPalavraChaveUnderline={setPalavraChaveUnderline}
                prontoParaJogar={prontoParaJogar}
                setErroImagem={setErroImagem}
                ganhouTrocaCor={ganhouTrocaCor}
                perdeuTrocaCor={perdeuTrocaCor}
            />

            <Chute
                chuteDigitado={chuteDigitado}
                setChuteDigitado={setChuteDigitado}
                palavraChave={palavraChave}
                setGanhouPerdeu={setGanhouPerdeu}
                setErroImagem={setErroImagem}
                prontoParaJogar={prontoParaJogar}
                ganhouTrocaCor={ganhouTrocaCor}
                perdeuTrocaCor={perdeuTrocaCor}
            />
        </>
    );
}

export default App;
