// src/LivroLista.js
import React, { useState, useEffect } from "react";
import ControleLivros from "../controle/ControleLivros"; // Corrigir o caminho
import ControleEditora from "../controle/ControleEditora"; // Corrigir o caminho

export const LinhaLivro = ({ livro, excluir }) => {
  const nomeEditora = ControleEditora.getNomeEditora(livro.codEditora); // Corrigir a referência

  return (
    <tr>
      <td>{livro.titulo}</td>
      <td>{nomeEditora}</td>
      <td>{livro.resumo}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
      <td>
        <button onClick={() => excluir(livro.codigo)}>Excluir</button>
      </td>
    </tr>
  );
};

export default LivroLista;
