import { useState, useEffect } from "react";
import estilos from "./ListaPosts.module.css";
import servidorApi from "../../api/servidor-api.js";
import LoadingDesenho from "../LoadingDesenho/LoadingDesenho";
import ArtigoPost from "../ArtigoPost/ArtigoPost";
const ListaPosts = ({ categoria }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPosts() {
      try {
        const resposta = await fetch(`${servidorApi}/posts.json`);
        const dados = await resposta.json();
        let listaDePosts = [];
        for (const post in dados) {
          const objetoPost = {
            id: post, //a chave/string gerada pelo firebase será como um id
            titulo: dados[post].titulo,
            subtitulo: dados[post].subtitulo,
            descricao: dados[post].descricao,
            categoria: dados[post].categoria,
          };
          listaDePosts.push(objetoPost);

          if (categoria) {
            listaDePosts = listaDePosts.filter(
              (cadaPost) => cadaPost.categoria === categoria
            );
          }
        }
        setPosts(listaDePosts);
        setLoading(false);
      } catch (error) {
        console.error("Deu ruim!" + error.message);
      }
    }
    getPosts();
  }, [categoria]);

  if (loading) {
    return <LoadingDesenho ldName={"Posts..."} />;
  }

  if (posts.length !== 0) {
    return (
      <div className={estilos.lista_posts}>
        {posts.map(({ id, titulo, subtitulo }) => (
          <ArtigoPost
            key={id}
            id={id}
            titulo={titulo}
            subtitulo={subtitulo}
            classe={estilos.post}
          />
        ))}
      </div>
    );
  } else {
    return <h2 className={estilos.centralizar}>Não há posts...</h2>;
  }
};

export default ListaPosts;
