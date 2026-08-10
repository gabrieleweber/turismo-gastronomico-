import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Cadastro() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const cadastrar = (e) => {
    e.preventDefault();

    // Cria o objeto do usuário
    const usuario = {
      nome,
      email,
      senha,
      tipo: "usuario",
    };

    // Salva no LocalStorage
    localStorage.setItem(
      "usuarioCadastro",
      JSON.stringify(usuario)
    );

    alert("Usuário cadastrado com sucesso!");

    // Limpa os campos
    setNome("");
    setEmail("");
    setSenha("");

    // Vai para a tela de login
    navigate("/login");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">

        <div className="col-md-5">

          <div className="card shadow-lg border-0 rounded-4">

            <div className="card-body p-4">

              <div className="text-center mb-4">
                <h1>👤</h1>
                <h2>Cadastro de Usuário</h2>
              </div>

              <form onSubmit={cadastrar}>

                <div className="mb-3">
                  <label className="form-label">Nome</label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Digite seu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                </div>

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

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-success w-100"
                >
                  Cadastrar
                </button>

              </form>

              <hr />

              <div className="d-grid gap-2">

                <Link
                  to="/login"
                  className="btn btn-outline-primary"
                >
                  Voltar para Login
                </Link>

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

export default Cadastro;