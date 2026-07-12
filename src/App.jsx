import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./paginas/Home";
import Direcao from "./paginas/Direcao";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/direcao" element={<Direcao />} />


       

      </Routes>

    </BrowserRouter>
  );
}

export default App;