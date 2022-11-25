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
    const [corGanhouPerdeu, setCorGanhouPerdeu] = useState("#000000");

    function ganhouMostrar() {
        setChuteDigitado("");
        setPalavraChaveUnderline(palavraChave.split(""));
        setCorGanhouPerdeu("#27AE60");
        setProntoParaJogar(false);
    }

    function perdeuMostrar() {
        setChuteDigitado("");
        setPalavraChaveUnderline(palavraChave.split(""));
        setCorGanhouPerdeu("#FF0000");
        setProntoParaJogar(false);
    }

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
                setContadorDeErro={setContadorDeErro}
                setErroImagem={setErroImagem}
                setChuteDigitado={setChuteDigitado}
                ganhouMostrar={corGanhouPerdeu}
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
                ganhouMostrar={ganhouMostrar}
                perdeuMostrar={perdeuMostrar}
            />

            <Chute
                chuteDigitado={chuteDigitado}
                setChuteDigitado={setChuteDigitado}
                palavraChave={palavraChave}
                setErroImagem={setErroImagem}
                prontoParaJogar={prontoParaJogar}
                ganhouMostrar={ganhouMostrar}
                perdeuMostrar={perdeuMostrar}
            />
        </>
    );
}

export default App;
