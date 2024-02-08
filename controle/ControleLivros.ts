// controle/ControleLivros.ts
import Livro from "../modelo/Livro"; // Certifique-se de que o caminho está correto

const livros: Array<Livro> = [
  new Livro(1, 1, "Livro 1", "Resumo 1", ["Autor 1", "Autor 2"]),
  new Livro(2, 2, "Livro 2", "Resumo 2", ["Autor 3", "Autor 4"]),
  new Livro(3, 3, "Livro 3", "Resumo 3", ["Autor 5", "Autor 6"]),
];

class ControleLivros {
  obterLivros(): Array<Livro> {
    return livros;
  }

  incluir(livro: Livro): void {
    const codigo = Math.max(...livros.map((l) => l.codigo)) + 1;
    livro.codigo = codigo;
    livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = livros.findIndex((l) => l.codigo === codigo);
    if (index !== -1) {
      livros.splice(index, 1);
    }
  }
}

export default ControleLivros;
