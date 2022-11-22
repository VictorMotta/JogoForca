import "./Jogo.css";

const Jogo = () => {
    return (
        <div className='top-game'>
            <div className='image-err'>
                <img src='./assets/forca0.png' alt='' />
            </div>
            <div className='choose-word-show-word'>
                <button>Escolher Palavra</button>
                <div className='chute'>
                    <span>_ </span>
                    <span>_ </span>
                    <span>_ </span>
                    <span>_ </span>
                    <span>_ </span>
                    <span>_ </span>
                    <span>_ </span>
                    <span>_</span>
                </div>
            </div>
        </div>
    );
};

export default Jogo;
