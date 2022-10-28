import { TextField, Button } from "@mui/material";
import Caixa from "../../components/Caixa/Caixa";
import estilos from "./Contato.module.css";

const Contato = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Fale Conosco</h2>
      <Caixa>
        <form method="post">
          <div>
            <TextField
              id="teste"
              type="text"
              label="Nome"
              variant="outlined"
              fullWidth
              required
              helperText="Informe seu nome"
            />
            <TextField
              id="teste2"
              type="email"
              label="E-mail"
              variant="outlined"
              fullWidth
              required
              helperText="Informe seu email"
            />
            <TextField
              id="test3"
              type="text"
              label="Mensagem"
              multiline
              rows={4}
              fullWidth
              required
              helperText="Digite uma mensagem"
            />
            <div></div>
            <Button variant="outlined" disabled>
              ENVIAR MENSAGEM
            </Button>
          </div>
        </form>
      </Caixa>
    </section>
  );
};

export default Contato;
