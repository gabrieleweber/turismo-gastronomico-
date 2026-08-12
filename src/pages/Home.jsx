import { useState } from "react";
import Card from "../pages/Card";
import restaurantes from "../data/restaurantes";

function Home() {
  const [pesquisa, setPesquisa] = useState("");
  const [categoria, setCategoria] = useState("Todos");
  const [paginaAtual, setPaginaAtual] = useState(1);

  // Normalmente as constantes e alguns valores que não mudam devem estar fora dos componentes.
  // Isso permite que não sejam criados de novo em cada render e liveram memoria. Então é normal ter um arquivo de
  // constats.js ou constantes.js pra ter os valores ou colocar eles fora do componente no mesmo arquivo.
  const itensPorPagina = 6;

  const categorias = [
    "Todos",
    ...new Set(restaurantes.map((item) => item.categoria)),
  ];

  // Muitas vezes pra os calculos complexos ou varias funciones se usa um custom hook, que é um arquivo que salva todas
  //  as mudanzas necessarias para um componente ou um objetivo comum. https://pt-br.react.dev/learn/reusing-logic-with-custom-hooks
  // Além disso, as vezes se usa useMemo ou alguns hooks de React que salvam os calculos e só repitem os calculos quando é necessario.
  // Mas isso já não é necessario em algumas versões novas de React pelo seu novo compilador. https://pt-br.react.dev/reference/react/useMemo
  const resultados = restaurantes.filter((item) => {
    const nome = item.nome.toLowerCase().includes(pesquisa.toLowerCase());

    const filtroCategoria =
      categoria === "Todos" || item.categoria === categoria;

    return nome && filtroCategoria;
  });

  const ultimaPosicao = paginaAtual * itensPorPagina;
  const primeiraPosicao = ultimaPosicao - itensPorPagina;

  const restaurantesPagina = resultados.slice(
    primeiraPosicao,
    ultimaPosicao
  );

  const totalPaginas = Math.ceil(
    resultados.length / itensPorPagina
  );

  return (
    <div className="container mt-4">

      <h2 className="text-center mb-4">
        Turismo Gastronômico da Rota Romântica
      </h2>

      <div className="row mb-4">

        <div className="col-md-8">
          <input
            type="text"
            className="form-control"
            placeholder="Pesquisar estabelecimento..."
            value={pesquisa}
            onChange={(e) => {
              setPesquisa(e.target.value);
              setPaginaAtual(1);
            }}
          />
        </div>

        <div className="col-md-4">
          <select
            className="form-select"
            value={categoria}
            onChange={(e) => {
              setCategoria(e.target.value);
              setPaginaAtual(1);
            }}
          >
            {categorias.map((cat) => (
              <option key={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

      </div>

      <div className="row">
        {restaurantesPagina.length > 0 ? (
          restaurantesPagina.map((restaurante) => (
            <Card
              key={restaurante.id}
              restaurante={restaurante}
            />
          ))
        ) : (
          <h4 className="text-center">
            Nenhum estabelecimento encontrado.
          </h4>
        )}
      </div>

      <div className="d-flex justify-content-center mt-4">

        <button
          className="btn btn-outline-success me-2"
          disabled={paginaAtual === 1}
          onClick={() =>
            setPaginaAtual(paginaAtual - 1)
          }
        >
          Anterior
        </button>

        <span className="align-self-center">
          Página {paginaAtual} de {totalPaginas || 1}
        </span>

        <button
          className="btn btn-outline-success ms-2"
          disabled={paginaAtual === totalPaginas || totalPaginas === 0}
          onClick={() =>
            setPaginaAtual(paginaAtual + 1)
          }
        >
          Próxima
        </button>

      </div>

    </div>
  );
}

export default Home;





