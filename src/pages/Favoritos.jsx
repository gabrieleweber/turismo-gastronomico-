import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const lista =
      JSON.parse(localStorage.getItem("favoritos")) || [];

    setFavoritos(lista);
  }, []);

  function removerFavorito(id) {
    const novaLista = favoritos.filter(
      (item) => item.id !== id
    );

    setFavoritos(novaLista);

    localStorage.setItem(
      "favoritos",
      JSON.stringify(novaLista)
    );
  }

  return (
    <div className="container mt-5">

      <h2 className="mb-4">❤️ Meus Favoritos</h2>

      <p className="text-muted">
        Aqui ficarão os restaurantes favoritos do usuário.
      </p>

      {favoritos.length === 0 ? (
        <div className="alert alert-warning">
          Você ainda não adicionou nenhum restaurante aos favoritos.
        </div>
      ) : (
        <div className="row">

          {favoritos.map((restaurante) => (

            <div className="col-md-4 mb-4" key={restaurante.id}>

              <div className="card h-100 shadow">

                <img
                  src={restaurante.imagem}
                  className="card-img-top"
                  alt={restaurante.nome}
                />

                <div className="card-body">

                  <h5>{restaurante.nome}</h5>

                  <p>
                    <strong>Cidade:</strong> {restaurante.cidade}
                  </p>

                  <p>
                    <strong>Categoria:</strong> {restaurante.categoria}
                  </p>

                  <p>
                    ⭐ {restaurante.avaliacao}
                  </p>

                  <Link
                    to={`/estabelecimento/${restaurante.id}`}
                    className="btn btn-success me-2"
                  >
                    Ver Detalhes
                  </Link>

                  <button
                    className="btn btn-danger"
                    onClick={() => removerFavorito(restaurante.id)}
                  >
                    Remover
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}

export default Favoritos;