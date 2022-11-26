import Chute from "./components/Chute";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import { useState } from "react";
import forcaInicial from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";
import GlobalStyled from "./styles/GobalStyle";

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
    const [erroImagem, setErroImagem] = useState(forcaInicial);
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
            <GlobalStyled />
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
                forcaInicial={forcaInicial}
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
                forca1={forca1}
                forca2={forca2}
                forca3={forca3}
                forca4={forca4}
                forca5={forca5}
                forca6={forca6}
            />

            <Chute
                chuteDigitado={chuteDigitado}
                setChuteDigitado={setChuteDigitado}
                palavraChave={palavraChave}
                setErroImagem={setErroImagem}
                forca6={forca6}
                prontoParaJogar={prontoParaJogar}
                ganhouMostrar={ganhouMostrar}
                perdeuMostrar={perdeuMostrar}
            />
        </>
    );
}

export default App;
