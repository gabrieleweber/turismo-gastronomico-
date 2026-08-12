import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Card({ restaurante }) {
  const [favorito, setFavorito] = useState(false);

  // Mesmo comentario que no arquivo de Favoritos.jsx. Voce pode obter 'favoritos' e 'existe' diretamente
  useEffect(() => {
    // COMENTÁRIO: JSON.parse pode lançar um erro, então normalmente se usa try/catch e as vezes se precisa veificar se é array mesmo.
    const favoritos =
      JSON.parse(localStorage.getItem("favoritos")) || [];

    const existe = favoritos.some(
      (item) => item.id === restaurante.id
    );

    setFavorito(existe);
  }, [restaurante.id]);

  function alternarFavorito() {
    let favoritos =
      JSON.parse(localStorage.getItem("favoritos")) || [];

    if (favorito) {
      // Remove dos favoritos
      favoritos = favoritos.filter(
        (item) => item.id !== restaurante.id
      );

      alert("Restaurante removido dos favoritos!");
      setFavorito(false);

    } else {
      // Adiciona aos favoritos
      favoritos.push(restaurante);

      alert("Restaurante adicionado aos favoritos!");
      setFavorito(true);
    }

    localStorage.setItem(
      "favoritos",
      JSON.stringify(favoritos)
    );
  }

  return (
    <div className="col-md-4 mb-4">

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

          <p>⭐ {restaurante.avaliacao}</p>

          <div className="d-flex justify-content-between mt-3">

            <Link
              to={`/estabelecimento/${restaurante.id}`}
              className="btn btn-success"
            >
              Ver Detalhes
            </Link>

            <button
              className={
                favorito
                  ? "btn btn-danger"
                  : "btn btn-warning"
              }
              onClick={alternarFavorito}
            >
              {favorito
                ? "💔 Remover"
                : "❤️ Favoritar"}
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Card;
