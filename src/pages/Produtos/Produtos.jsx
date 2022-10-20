import estilos from "./Produtos.module.css";

const Produtos = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Conheça nossos produtos</h2>
      <div className={estilos.produtos}>
        <article>
          <h3>Produto 1</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Accusantium nisi aut facere quia? Maiores doloremque sint,
            architecto, qui laboriosam distinctio expedita fuga cupiditate,
            dolor perspiciatis ducimus error maxime? Sequi, quas.
          </p>
        </article>
        <article>
          <h3>Produto 2</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Accusantium nisi aut facere quia? Maiores doloremque sint,
            architecto, qui laboriosam distinctio expedita fuga cupiditate,
            dolor perspiciatis ducimus error maxime? Sequi, quas.
          </p>
        </article>
        <article>
          <h3>Produto 3</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Accusantium nisi aut facere quia? Maiores doloremque sint,
            architecto, qui laboriosam distinctio expedita fuga cupiditate,
            dolor perspiciatis ducimus error maxime? Sequi, quas.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Produtos;
