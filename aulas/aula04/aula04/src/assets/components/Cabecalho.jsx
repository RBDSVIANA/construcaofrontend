import InputPesquisa from "./InputPesquisar";
import Logo from "./Logo"
import Titulo from "./Titulo"

function Cabecalho (){
    return(
        <header>
            <Logo imagem="" texto="Logo"></Logo>
            <Titulo texto="Aluno Online"></Titulo>
            <InputPesquisa />
        </header>
    )
}

export default Cabecalho;