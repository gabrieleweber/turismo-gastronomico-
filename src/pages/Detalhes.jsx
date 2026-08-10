import { useParams, Link } from "react-router-dom";
import restaurantes from "../data/restaurantes";

function Detalhes() {
  const { id } = useParams();

  const restaurante = restaurantes.find(
    (item) => item.id === Number (id)
  );

  if (!restaurante) {
    return (
      <div className="container mt-5">
        <h2>Estabelecimento não encontrado!</h2>

        <Link to="/" className="btn btn-primary mt-3">
          Voltar
        </Link>
      </div>
    );
  }

  const relacionados = restaurantes.filter(
    (item) =>
      item.categoria === restaurante.categoria &&
      item.id !== restaurante.id
  );

  return (
    <div className="container mt-5">

      <div className="row">

        <div className="col-md-6">

          <img
            src={restaurante.imagem}
            alt={restaurante.nome}
            className="img-fluid rounded shadow"
          />

        </div>

        <div className="col-md-6">

          <h2>{restaurante.nome}</h2>

          <p>
            <strong>Cidade:</strong> {restaurante.cidade}
          </p>

          <p>
            <strong>Categoria:</strong> {restaurante.categoria}
          </p>

          <p>
            <strong>Avaliação:</strong> ⭐ {restaurante.avaliacao}
          </p>

          
          <p>{restaurante.descricao}</p>

          <Link to="/" className="btn btn-success">
            Voltar
          </Link>

        </div>

      </div>

      <hr />

      <h3>Itens Relacionados</h3>

      <div className="row">

        {relacionados.map((item) => (

          <div className="col-md-4 mt-3" key={item.id}>

            <div className="card h-100 shadow">

              <img
                src={item.imagem}
                className="card-img-top"
                alt={item.nome}
              />

              <div className="card-body">

                <h5>{item.nome}</h5>

                <p>{item.cidade}</p>

                <Link
                  to={`/estabelecimento/${item.id}`}
                  className="btn btn-outline-success"
                >
                  Ver Detalhes
                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Detalhes;
