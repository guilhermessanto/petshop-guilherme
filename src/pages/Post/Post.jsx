import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import servidorApi from "../../api/servidor-api";
import estilos from "./Post.module.css";
import Caixa from "../../components/Caixa/Caixa";
import LoadingDesenho from "../../components/LoadingDesenho/LoadingDesenho";
const Post = () => {
  const { id } = useParams();
  const [umPost, setUmPost] = useState([]);
  const [loading, setLoading] = useState(true);
  let history = useHistory();

  useEffect(() => {
    async function getPost() {
      try {
        const resposta = await fetch(`${servidorApi}/posts/${id}`);
        const dados = await resposta.json();
        setUmPost(dados);
        setLoading(false);
        /* verificando se o resultado do objeto de dados possui tamanho zero(ou seja , se ele está vazio sem dados nenhum) */
        if (Object.keys(dados).length === 0) {
          /* Estando, forçamos o redirecionamento numa rota de primeiro nivel que não existe. Com isso, na prática, o router traz a pagina404. */
          history.push("/404");
        }
      } catch (error) {
        console.log("Deu ruim na busca do post: " + error.message);
      }
    }
    getPost();
  }, [id]);

  if (loading) {
    return <LoadingDesenho />;
  }
  return (
    <section>
      <h2 className={estilos.titulo_secao}>{umPost.titulo}</h2>
      <Caixa>
        <h3>{umPost.categoria}</h3>
        <p>{umPost.descricao}</p>
      </Caixa>
    </section>
  );
};

export default Post;
