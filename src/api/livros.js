import axios from "axios";
export default class LivrosApi {
  async buscarTodosOsLivros() {
    const { data } = await axios.get("/livros/");
    return data;
  }
  async adicionarLivro(livros) {
    const { data } = await axios.post("/livros/", livros);
    return data.results;
  }
  async atualizarLivro(livros) {
    const { data } = await axios.put(`/livros/${livros.id}/`, livros);
    return data.results;
  }
  async excluirLivro(id) {
    const { data } = await axios.delete(`/livros/${id}/`);
    return data.results;
  }
}
