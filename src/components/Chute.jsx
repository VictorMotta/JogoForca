import styled from "styled-components";

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
            if (
                chuteDigitado
                    .normalize("NFD")
                    .replace(/[^a-zA-Z\s]/g, "")
                    .toLowerCase() ===
                palavraChave
                    .normalize("NFD")
                    .replace(/[^a-zA-Z\s]/g, "")
                    .toLowerCase()
            ) {
                ganhouMostrar();
            } else {
                perdeuMostrar();
                setErroImagem("./assets/forca6.png");
            }
        }
    }

    return (
        <StyledContainerChute>
            <h1>Já sei a palavra!</h1>
            <input
                data-test='guess-input'
                disabled={prontoParaJogar ? null : "disabled"}
                onChange={(e) => setChuteDigitado(e.target.value)}
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
        </StyledContainerChute>
    );
};

export default Chute;

const StyledContainerChute = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    h1 {
        font-family: "Roboto";
        font-weight: 400;
        font-size: 20px;
        color: #000000;
    }
    input {
        width: 353px;
        height: 40px;
        background: #ffffff;
        border: 1px solid #cccccc;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
        border-radius: 3px;
        margin: 0 15px;
    }
    button {
        width: 100px;
        height: 40px;
        background: #e1ecf4;
        border: 1px solid #7aa7c7;
        border-radius: 3px;
        font-weight: 700;
        font-size: 16px;
        text-align: center;
        color: #3c76a1;
        cursor: pointer;
    }

    @media (max-width: 850px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 60px;
        input {
            margin: 20px 0;
        }
    }
`;
