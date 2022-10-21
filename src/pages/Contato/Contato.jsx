import Caixa from "../../components/Caixa/Caixa";
import estilos from "./Contato.module.css";

const Contato = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Fale Conosco</h2>
      <Caixa id="contato">
        <p>em breve teremos um formulario</p>
      </Caixa>
    </section>
  );
};

export default Contato;
