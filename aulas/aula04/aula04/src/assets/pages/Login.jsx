import BotaoSubmit from "../components/BotaoSubmit";
import InputSenha from "../components/InputSenha";
import InputUsuario from "../components/InputUsuario";
import Link from "../components/Link";
import Logo from "../components/Logo";
import Titulo from "../components/Titulo";
import Rodape from "../components/Rodape";
import "../pages/Login.css"

function Login() {
  const urlLogo = "../../public/logo.png";
  const textoLogo = "Logo da Aplicação";
  return (
    <>
      <main className="login-form">
        <Logo imagem={urlLogo} texto={textoLogo} />
        <Titulo texto="Login"/>
        <InputUsuario />
        <InputSenha />
        <BotaoSubmit texto="Entrar" />
        <Link texto="Esqueci a Senha" />
        <Link texto="texto" />
      </main>
      <Rodape />
    </>
  );
}

export default Login;