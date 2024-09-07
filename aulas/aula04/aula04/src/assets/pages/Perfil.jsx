import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/Conteudo";
import InputSenha from "../components/InputSenha";
import InputUsuario from "../components/InputUsuario";
import Menu from "../components/Menu";
import Secao from "../components/Secao";
import BotaoSubmit from "../components/BotaoSubmit";

function Perfil(){
    return(
        <>
            <Cabecalho />
            <Conteudo>
                <Menu />
                <Secao texto="Perfil de Usuario">
                    <InputUsuario />
                    <InputSenha />
                    <BotaoSubmit texto="Salvar" />
                </Secao>
            </Conteudo>
        </>
    )
}

export default Perfil;