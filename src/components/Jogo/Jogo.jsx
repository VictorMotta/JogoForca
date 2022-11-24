import "./Jogo.css";

const Jogo = (props) => {
    const palavraEscolhidaUnderline = props.palavra;

    function mostraPalavra() {
        return palavraEscolhidaUnderline.map((item) => <span> {item} </span>);
    }

    return (
        <div className='top-game'>
            <div className='image-err'>
                <img src='./assets/forca0.png' alt='' />
            </div>
            <div className='choose-word-show-word'>
                <button onClick={props.alteraPalavra}>Escolher Palavra</button>
                <div className='chute'>{palavraEscolhidaUnderline ? mostraPalavra() : null}</div>
            </div>
        </div>
    );
};

export default Jogo;
