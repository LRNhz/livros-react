// controle/ControleEditora.ts
import Editora from "../modelo/Editora"; // Certifique-se de que o caminho está correto

const editoras: Array<Editora> = [
  new Editora(1, "Editora A"),
  new Editora(2, "Editora B"),
  new Editora(3, "Editora C"),
];

class ControleEditora {
  getNomeEditora(codEditora: number): string {
    const editora = editoras.find((e) => e.codEditora === codEditora);
    return editora ? editora.nome : "Editora não encontrada";
  }

  getEditoras(): Array<Editora> {
    return editoras;
  }
}

export default ControleEditora;
