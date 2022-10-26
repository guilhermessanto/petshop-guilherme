import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import estilos from "./ListaCategorias.module.css";
import servidorApi from "../../api/servidor-api.js";

const ListaCategorias = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function getCategorias() {
      try {
        const resposta = await fetch(`${servidorApi}/categorias`);
        const dados = await resposta.json();
        setCategorias(dados);
        console.log(dados);
      } catch (error) {
        console.error("Deu ruim!" + error.message);
      }
    }
    getCategorias();
  }, []);

  return (
    <div className={estilos.lista_categorias}>
      <ul>
        {categorias.map(({ id, nome }) => (
          <li key={id} id={nome}>
            <Link to={`/categorias/${nome}`}>{nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaCategorias;
