import { useState } from "react";
import AppSeguro from "./components/AppSeguro";
import { CotizadorProvider } from "./context/CotizadorProvider";

function App() {
  return (
    <>
      <CotizadorProvider>
        <AppSeguro />
      </CotizadorProvider>
    </>
  );
}

export default App;
