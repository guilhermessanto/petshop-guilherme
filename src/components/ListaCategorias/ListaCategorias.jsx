import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import estilos from "./ListaCategorias.module.css";
import servidorApi from "../../api/servidor-api.js";
import LoadingDesenho from "../LoadingDesenho/LoadingDesenho";

const ListaCategorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCategorias() {
      try {
        const resposta = await fetch(`${servidorApi}/categorias`);
        const dados = await resposta.json();
        setCategorias(dados);
        setLoading(false);
      } catch (error) {
        console.error("Deu ruim!" + error.message);
      }
    }
    getCategorias();
  }, []);

  if (loading) {
    return <LoadingDesenho ldName={`Categorias...`} />;
  }
  return (
    <div className={estilos.lista_categorias}>
      <ul>
        {categorias.map(({ id, nome }) => (
          <li key={id} id={nome}>
            <NavLink activeClassName={estilos.ativo} to={`/categoria/${nome}`}>
              {nome}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaCategorias;
