/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function Botao(props) {
    return (
      <button onClick={(e) => props.navegaPara("/home")}>{props.texto}</button>
    );
  }
  
  export default Botao;