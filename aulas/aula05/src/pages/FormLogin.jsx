import InputEmail from "../components/InputEmail";
import Botao from "../components/Botao";
import InputSenha from "../components/InputSenha";
import { useState } from "react";

function FormLogin(props){
    const [email,setEmail] = useState();
    const [senha, setSenha] = useState();

    const efetuarLogin = (e) => {
        e.preventDefault();
        props.navegaPara("/home");
        //chamada ao Backend
    }

    return(
        <form onSubmit={efetuarLogin}>
            <InputEmail texto="Email" valor={email} mudaValor={setEmail} />
            <InputSenha texto="Senha" valor={senha} mudaValor={setSenha} />
            <Botao texto="Entrar" />
        </form>
    );
}

export default FormLogin;