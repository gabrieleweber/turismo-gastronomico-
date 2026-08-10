import { useState } from "react";

function Admin() {

  const [restaurantes, setRestaurantes] = useState([
    {
      id: 1,
      nome: "Café Colonial Recanto",
      cidade: "Nova Petrópolis",
      categoria: "Café Colonial",
      avaliacao: "4.9",
      imagem: "https://picsum.photos/100?1",
      descricao: "Tradicional café colonial da Serra Gaúcha."
    },
    {
      id: 2,
      nome: "Vinícola Vale dos Vinhos",
      cidade: "Gramado",
      categoria: "Vinícola",
      avaliacao: "4.8",
      imagem: "https://picsum.photos/100?2",
      descricao: "Vinícola com degustação de vinhos."
    }
  ]);

  const [nome, setNome] = useState("");
  const [cidade, setCidade] = useState("");
  const [categoria, setCategoria] = useState("");
  const [avaliacao, setAvaliacao] = useState("");
  const [imagem, setImagem] = useState("");
  const [descricao, setDescricao] = useState("");

  const [editar, setEditar] = useState(null);

  function salvar(e) {
    e.preventDefault();

    if (editar) {

      setRestaurantes(
        restaurantes.map((r) =>
          r.id === editar
            ? {
                ...r,
                nome,
                cidade,
                categoria,
                avaliacao,
                imagem,
                descricao,
              }
            : r
        )
      );

      alert("Estabelecimento atualizado!");

      setEditar(null);

    } else {

      const novo = {
        id: Date.now(),
        nome,
        cidade,
        categoria,
        avaliacao,
        imagem,
        descricao,
      };

      setRestaurantes([...restaurantes, novo]);

      alert("Estabelecimento cadastrado!");
    }

    limparFormulario();
  }

  function excluir(id) {

    if (!window.confirm("Deseja excluir este estabelecimento?")) {
      return;
    }

    setRestaurantes(
      restaurantes.filter((r) => r.id !== id)
    );
  }

  function editarRegistro(item) {

    setEditar(item.id);

    setNome(item.nome);
    setCidade(item.cidade);
    setCategoria(item.categoria);
    setAvaliacao(item.avaliacao);
    setImagem(item.imagem);
    setDescricao(item.descricao);
  }

  function limparFormulario() {

    setNome("");
    setCidade("");
    setCategoria("");
    setAvaliacao("");
    setImagem("");
    setDescricao("");

    setEditar(null);
  }

  return (

    <div className="container mt-5">

      <h2 className="mb-4">
        Painel Administrativo
      </h2>

      <form onSubmit={salvar}>

        <div className="mb-3">
          <input
            className="form-control"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            placeholder="Cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            placeholder="Categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            placeholder="Avaliação"
            value={avaliacao}
            onChange={(e) => setAvaliacao(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control"
            placeholder="URL da Imagem"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <textarea
            className="form-control"
            rows="3"
            placeholder="Descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>

        <button className="btn btn-success me-2">
          {editar ? "Atualizar" : "Cadastrar"}
        </button>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={limparFormulario}
        >
          Cancelar
        </button>

      </form>

      <hr />

      <table className="table table-bordered table-hover">

        <thead className="table-success">

          <tr>
            <th>Imagem</th>
            <th>Nome</th>
            <th>Cidade</th>
            <th>Categoria</th>
            <th>Avaliação</th>
            <th>Ações</th>
          </tr>

        </thead>

        <tbody>

          {restaurantes.map((item) => (

            <tr key={item.id}>

              <td>
                <img
                  src={item.imagem}
                  alt={item.nome}
                  width="80"
                  className="rounded"
                />
              </td>

              <td>{item.nome}</td>
              <td>{item.cidade}</td>
              <td>{item.categoria}</td>
              <td>⭐ {item.avaliacao}</td>

              <td>

                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => editarRegistro(item)}
                >
                  Editar
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => excluir(item.id)}
                >
                  Excluir
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}

export default Admin;