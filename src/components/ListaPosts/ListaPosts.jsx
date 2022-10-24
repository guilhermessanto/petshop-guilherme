import { useState, useEffect } from "react"; //Hooks do React
import estilos from "./ListaPosts.module.css";
import servidorApi from "../../api/servidor-api.js";
const ListaPosts = () => {
  /* Iniciamos o state do componente com um array vazio, para posteriormente "prrenchê-lo" com os dados vindo da API.
  Esta atribuição serpa feita com auxílio do setPosts. */
  const [posts, setPosts] = useState([]);

  console.log(servidorApi);

  useEffect(() => {
    async function getPosts() {
      try {
        const resposta = await fetch(`${servidorApi}/posts`);
        const dados = await resposta.json();
        setPosts(dados);
      } catch (error) {
        console.error("Deu ruim!" + error.message);
      }
    }
    getPosts();
  }, []);
  /* Sobre o UseEffect 
  Este hook visa permitir um maior controle sobre "efeitos colaterais" na execução do componente.
  
  Recebe dois parâmetros:
  1°: função callback com o que será executado
  2º lista de dependências que indicarão ao useEffect quando ele deverá funcionar
  - Se não passar a lista (ou seja, se deixar sem os [], useEffect executará toda vez que i componente for renderizado. Portanto, o callback se torna um loop infinito.
  - Se passar a lista vazia (ou seja, deixar o [] vazio), useEffect executará somente no momento que o componente é renderizado a primeira vez evitando o loop inginito do callback. */
  return (
    <div className={estilos.lista_posts}>
      {posts.map(({ id, titulo, subtitulo }) => (
        <article key={id} className={estilos.post}>
          <h3>{titulo}</h3>
          <p>{subtitulo}</p>
        </article>
      ))}
    </div>
  );
};

export default ListaPosts;
