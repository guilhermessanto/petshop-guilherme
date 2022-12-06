import { Link } from "react-router-dom";
//import estilos from "./ArtigoPost.module.css";
const ArtigoPost = ({ id, titulo, subtitulo, classe }) => {
  return (
    <article className={classe}>
      <Link to={`/posts/${id}`}>
        <h3>{titulo}</h3>
        <p>{subtitulo}</p>
      </Link>
    </article>
  );
};

export default ArtigoPost;
