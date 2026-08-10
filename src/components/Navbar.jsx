import { Link } from "react-router-dom";


function Navbar() {
  const usuario = localStorage.getItem("usuario");

  const logout = () => {
    localStorage.removeItem("usuario");
    window.location.href = "/";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
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
