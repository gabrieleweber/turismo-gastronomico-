import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const navigate = useNavigate();

  const fazerLogin = (e) => {
    e.preventDefault();

    // Login do administrador
    if (email === "admin@email.com" && senha === "123456") {
      localStorage.setItem(
        "usuario",
        JSON.stringify({
          nome: "Administrador",
          email: "admin@email.com",
          tipo: "admin",
        })
      );

      alert("Login realizado com sucesso!");
      navigate("/");
      return;
    }

    // Login do usuário cadastrado
    const usuarioCadastro = JSON.parse(
      localStorage.getItem("usuarioCadastro")
    );

    if (
      usuarioCadastro &&
      usuarioCadastro.email === email &&
      usuarioCadastro.senha === senha
    ) {
      localStorage.setItem(
        "usuario",
        JSON.stringify(usuarioCadastro)
      );

      alert("Login realizado com sucesso!");
      navigate("/");
    } else {
      alert("E-mail ou senha inválidos!");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">

          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-4">

              <div className="text-center mb-4">
                <h1>🍽️</h1>
                <h2>Login</h2>
                <p className="text-muted">
                  Turismo Gastronômico da Rota Romântica
                </p>
              </div>

              <form onSubmit={fazerLogin}>

                <div className="mb-3">
                  <label className="form-label">E-mail</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Senha</label>

                  <div className="input-group">
                    <input
                      type={mostrarSenha ? "text" : "password"}
                      className="form-control"
                      placeholder="Digite sua senha"
                      value={senha}
                      onChange={(e) => setSenha(e.target.value)}
                      required
                    />

                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() => setMostrarSenha(!mostrarSenha)}
                    >
                      {mostrarSenha ? "Ocultar" : "Mostrar"}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-success w-100"
                >
                  Entrar
                </button>

                <div className="text-center mt-3">
                  <p>Não possui uma conta?</p>

                  <Link to="/cadastro">
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                    >
                      Primeiro Acesso
                    </button>
                  </Link>
                </div>

              </form>

              <hr />

              <div className="text-center">
                <Link
                  to="/"
                  className="btn btn-outline-success"
                >
                  Voltar para Home
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;
