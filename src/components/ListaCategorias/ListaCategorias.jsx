import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    return <LoadingDesenho />;
  }
  return (
    <div className={estilos.lista_categorias}>
      <ul>
        {categorias.map(({ id, nome }) => (
          <li key={id} id={nome}>
            <Link to={`/categoria/${nome}`}>{nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaCategorias;
