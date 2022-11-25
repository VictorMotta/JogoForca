const Letra = (props) => {
    return (
        <>
            <button data-test='letter' onClick={props.clicadoLetra} className={props.classLetra}>
                {props.value.toUpperCase()}
            </button>
        </>
    );
};
export default Letra;
