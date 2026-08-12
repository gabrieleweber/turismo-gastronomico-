import { Link } from "react-router-dom";


function Navbar() {
  // COMENTÁRIO: Ler o localStorage durante a renderização não é reativo, então o login/logout em uma SPA pode deixar esta barra desatualizada; normalmente a autenticação é um estado de React compartilhado.
  const usuario = localStorage.getItem("usuario");

  const logout = () => {
    localStorage.removeItem("usuario");
    window.location.href = "/";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      {/* COMENTÁRIO: Esta barra não possui colapso nem botão de alternância e mantém os links em uma única linha, podendo transbordar em telas estreitas, isso se a página precisa funciona em celulares. */}
      <Link className="navbar-brand" to="/">
        Meu App
      </Link>
      <ul className="navbar-nav flex-row gap-3">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>

        {!usuario && (
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
        )}

        <li className="nav-item">
          <Link className="nav-link" to="/favoritos">
            Favoritos
          </Link>
        </li>

        {usuario && (
          <>
            <li className="nav-item">
              <button onClick={logout} className="btn btn-danger btn-sm">
                Sair
              </button>
            </li>
            <li className="nav-item">
              <Link to="/admin">Admin</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
