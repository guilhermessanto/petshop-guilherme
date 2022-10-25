import estilos from "./Post.module.css";
import Caixa from "../../components/Caixa/Caixa";
const Post = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Titulo do post</h2>
      <Caixa>
        <h3>Categoria</h3>
        <p>Descrição</p>
      </Caixa>
    </section>
  );
};

export default Post;
