import { Link } from "react-router-dom";

// COMENTÁRIO: Este componente duplicado de itens relacionados parece não ser usado, tenta apagar os arquivos não usados em geral.
function ItensRelacionados({ relacionados }) {
  return (
    <div className="mt-5">
      <h3 className="mb-4">Itens Relacionados</h3>

      <div className="row">
        {relacionados.length === 0 ? (
          <p>Nenhum estabelecimento relacionado encontrado.</p>
        ) : (
          relacionados.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card h-100 shadow">

                <img
                  src={item.imagem}
                  alt={item.nome}
                  className="card-img-top"
                />

                <div className="card-body">

                  <h5>{item.nome}</h5>

                  <p>
                    <strong>Cidade:</strong> {item.cidade}
                  </p>

                  <p>
                    <strong>Categoria:</strong> {item.categoria}
                  </p>

                  <p>⭐ {item.avaliacao}</p>

                  <Link
                    to={`/estabelecimento/${item.id}`}
                    className="btn btn-outline-success"
                  >
                    Ver Detalhes
                  </Link>

                </div>

              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ItensRelacionados;
