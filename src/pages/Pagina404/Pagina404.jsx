import estilos from "./Pagina404.module.css";
import imagem404 from "../../assets/images/404.svg";
import Caixa from "../../components/Caixa/Caixa";
const Pagina404 = () => {
  return (
    <section className={estilos.pagina404}>
      <h2 className={estilos.titulo_secao}>Au, au, au, foi mal!</h2>
      <Caixa id="pagina404">
        <h3>Página não encontrada!</h3>
        <img
          className={estilos.imagem404}
          src={imagem404}
          alt="Ilustração cachorrinho"
        />
      </Caixa>
    </section>
  );
};

export default Pagina404;
