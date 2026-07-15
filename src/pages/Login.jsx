import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const fazerLogin = (e) => {
    e.preventDefault();
    if (email === "admin@email.com" && senha === "123456") {
      localStorage.setItem("usuario", "logado");
      alert("Login realizado com sucesso!");
      navigate("/");
    } else {
      alert("E-mail ou senha inválidos!");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={fazerLogin}>
        <div className="mb-3">
          <label>E-mail</label>
          <input
            type="email"
            className="form-control"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Senha</label>
          <input
            type="password"
            className="form-control"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <button className="btn btn-success">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
