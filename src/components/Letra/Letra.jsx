import "./Letra.css";

const Letra = (props) => {
    const clicado = (event) => {
        console.log(event);
        props.aoClicado(event.target.textContent);
    };

    return (
        <>
            <button onClick={clicado} className={props.option}>
                {props.value}
            </button>
        </>
    );
};

export default Letra;
