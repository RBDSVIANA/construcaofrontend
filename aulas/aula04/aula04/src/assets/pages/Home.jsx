import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/Conteudo";
import Menu from "../components/Menu";
import Secao from "../components/Secao";
import Painel from "../components/Painel";

function Home (){
    const avisos = ["A","B","C"];
    return(
        <>
        <Cabecalho />
        <Conteudo>
            <Menu />
            <Secao texto="Pagina Inicial">
                <Painel texto="Mural de Avisos" itens={avisos} />
                <Painel texto="Historico de Faltas" itens={[]}/>
                <Painel texto="Historico de Faltas" itens={[]} />
                <Painel texto="Historicos de Notas" itens={[]}/>
            </Secao>
        </Conteudo> 
        </>
    )
}

export default Home;