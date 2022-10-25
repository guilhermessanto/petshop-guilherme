import { useState, useEffect } from "react";
import estilos from "./ListaPosts.module.css";
import servidorApi from "../../api/servidor-api.js";
import LoadingDesenho from "../LoadingDesenho/LoadingDesenho";
const ListaPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPosts() {
      try {
        const resposta = await fetch(`${servidorApi}/posts`);
        const dados = await resposta.json();
        setPosts(dados);
        setLoading(false);
      } catch (error) {
        console.error("Deu ruim!" + error.message);
      }
    }
    getPosts();
  }, []);

  if (loading) {
    return <LoadingDesenho />;
  }

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
