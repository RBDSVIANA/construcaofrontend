import Login from "./pages/Login";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import { useState } from "react";


function App(){
  const [rota, setRota] = useState("/login")
  return (
    <>
      {rota == "/login" && <Login navegaPara={setRota}/>}
      {rota == "/home" && <Home navegaPara={setRota}/>}
      {rota == "/perfil" && <Perfil navegaPara={setRota}/>}
    </>
  )
}

export default App