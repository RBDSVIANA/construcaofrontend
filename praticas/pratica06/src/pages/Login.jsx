/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Titulo from "../components/Titulo";
import FormLogin from "./FormLogin";
import Conteudo from "../components/Conteudo";

function Login(props) {
  return (
    <Conteudo>
      <Titulo texto="Aluno Online" />
      <FormLogin navegaPara={props.navegaPara} />
    </Conteudo>
  );
}

export default Login;
