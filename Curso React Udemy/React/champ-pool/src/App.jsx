import { useEffect, useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  const [usuario, setUsuario] = useState(false);
  const [isValidateUser, setIsValidateUser] = useState(false);
  const [nombre, setNombre] = useState(false);


  useEffect(() => {
    if (usuario.id) {
      setIsValidateUser(true);
    } else {
      setIsValidateUser(false);
    }
  }, [usuario]);

  return (
    <>
      {isValidateUser ? (
        <Home nombre={nombre}/>
      ) : (
        <div className="container mx-auto flex items-center justify-center h-screen">
          <Login setUsuario={setUsuario} setNombre={setNombre}/>
        </div>
      )}
    </>
  );
}

export default App;
