import Login from "../src/assets/pages/Login";
import Home from "../src/assets/pages/Home";
import Perfil from "../src/assets/pages/Perfil"

function App() {
  const index = 2;
  return (
    <>
      {index == 1 && <Login />}
      {index == 2 && <Home />}
      {index == 3 && <Perfil />}
    </>
  );
}

export default App;
