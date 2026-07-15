import { Link } from "react-router-dom";

function Card({ restaurante }) {
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

          <p>{restaurante.cidade}</p>

          <p>{restaurante.categoria}</p>

          <p>⭐ {restaurante.avaliacao}</p>

          <Link
            to={`/estabelecimento/${restaurante.id}`}
            className="btn btn-success"
          >
            Ver Detalhes
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Card;