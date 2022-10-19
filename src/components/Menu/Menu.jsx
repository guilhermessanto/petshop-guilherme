import estilos from "./Menu.module.css";
const Menu = () => {
  return (
    <nav className={estilos.menu}>
      <a href="/">Blog</a>
      <a href="/produtos">Produtos</a>
      <a href="/sobre">Sobre</a>
      <a href="/contato">Contato</a>
    </nav>
  );
};

export default Menu;
