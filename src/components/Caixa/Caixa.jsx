import estilos from "./Caixa.module.css";
const Caixa = ({ listaDeClasses, children }) => {
  return (
    <div className={`${estilos.caixa}  ${listaDeClasses || ""}`}>
      {children}
    </div>
  );
};

export default Caixa;
