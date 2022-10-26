import { useState, useEffect } from "react";
import estilos from "./ListaPosts.module.css";
import servidorApi from "../../api/servidor-api.js";
import LoadingDesenho from "../LoadingDesenho/LoadingDesenho";
import ArtigoPost from "../ArtigoPost/ArtigoPost";
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
        <ArtigoPost
          key={id}
          titulo={titulo}
          subtitulo={subtitulo}
          classe={estilos.post}
        />
      ))}
    </div>
  );
};

export default ListaPosts;
