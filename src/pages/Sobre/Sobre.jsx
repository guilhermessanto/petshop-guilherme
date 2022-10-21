import Caixa from "../../components/Caixa/Caixa";
import estilos from "./Sobre.module.css";

const Sobre = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Sobre nosso PetShop</h2>
      <Caixa id="sobre">
        <h3>Missão</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque illo
          vel veritatis earum, ad tempore, pariatur maxime delectus laudantium
          voluptate iusto magnam! Recusandae, obcaecati provident pariatur animi
          iste fugiat dolorem!
        </p>

        <h3>Visão</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
          numquam voluptate deserunt sint ducimus laboriosam quibusdam labore
          optio quasi, voluptatem repellendus! Eos odit possimus fuga ea
          consectetur placeat adipisci quod.
        </p>

        <h3>Valores</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias saepe,
          adipisci praesentium obcaecati distinctio quia dolores consectetur
          eveniet necessitatibus quidem itaque ipsam repudiandae reprehenderit
          voluptates rem odio. Delectus, autem explicabo?
        </p>
      </Caixa>
    </section>
  );
};

export default Sobre;
