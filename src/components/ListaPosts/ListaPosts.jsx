import estilos from "./ListaPosts.module.css";
import servidorApi from "../../api/servidor-api.js";
const ListaPosts = () => {
  console.log(servidorApi);
  const postsTemp = [];
  const getPosts = async () => {
    try {
      const resposta = await fetch(`${servidorApi}/posts`);
      const dados = await resposta.json();
      console.log(dados);
    } catch (error) {
      console.error("Deu ruim!" + error.message);
    }
  };
  getPosts();
  return (
    <div className={estilos.lista_posts}>
      {postsTemp.map(({ id, titulo, subtitulo }) => (
        <article key={id} className={estilos.post}>
          <h3>{titulo}</h3>
          <p>{subtitulo}</p>
        </article>
      ))}
    </div>
  );
};

export default ListaPosts;
