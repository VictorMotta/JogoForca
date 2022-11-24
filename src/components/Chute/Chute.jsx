import "./Chute.css";

const Chute = (props) => {
    return (
        <div className='container-chute'>
            <h1>Já sei a palavra!</h1>
            <input onChange={props.onchange} type='text' value={props.value} />
            <button onClick={props.clickChuteDigitado}>Chutar</button>
        </div>
    );
};

export default Chute;
