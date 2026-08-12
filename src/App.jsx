import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Favoritos from "./pages/Favoritos";
import Detalhes from "./pages/Detalhes";
import Admin from "./pages/Admin";
import Cadastro from "./pages/cadastro";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
         <Route path="/cadastro" element={<Cadastro />} />
       <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/estabelecimento/:id" element={<Detalhes />}/>
        <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>}/>

        {/* COMENTÁRIO: Sem uma rota curinga, URLs desconhecidas exibem a barra de navegação sem conteúdo, essa seria a pagina 404 not found. */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
