import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Favoritos from "./pages/Favoritos";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/favoritos"
          element={
            <ProtectedRoute>
              <Favoritos />
            </ProtectedRoute>
          }
        />
        <Route path="/estabelecimento/:id" element={<Detalhes />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
