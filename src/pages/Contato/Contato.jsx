import { TextField, Button } from "@mui/material";
import { useState } from "react";
import Caixa from "../../components/Caixa/Caixa";
import estilos from "./Contato.module.css";
import servidorApi from "../../api/servidor-api";

const Contato = () => {
  /* Eventos/Funções para captura da digitação */
  const inputNome = (event) => setNome(event.target.value);
  const inputEmail = (event) => setEmail(event.target.value);
  const inputMensagem = (event) => setMensagem(event.target.value);
  const enviarContato = async (event) => {
    event.preventDefault();
    const opcoes = {
      method: "POST",
      body: JSON.stringify({ nome, email, mensagem }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    /* Script para o envio dos dados para API */
    try {
      await fetch(`${servidorApi}/contatos`, opcoes);
      alert("Dados enviados!");
    } catch (error) {
      console.log("Deu ruim" + error.message);
    }
  };

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  let desabilitado = !nome || !email || !mensagem;
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Fale Conosco</h2>
      <Caixa>
        <form
          onSubmit={enviarContato}
          method="post"
          className={estilos.formulario}
        >
          <div>
            <TextField
              onChange={inputNome}
              id="teste"
              type="text"
              label="Nome"
              variant="outlined"
              fullWidth
              required
              helperText="Informe seu nome"
            />
            <TextField
              onChange={inputEmail}
              id="teste2"
              type="email"
              label="E-mail"
              variant="outlined"
              fullWidth
              required
              helperText="Informe seu email"
            />
            <TextField
              onChange={inputMensagem}
              id="test3"
              type="text"
              label="Mensagem"
              multiline
              rows={4}
              fullWidth
              required
              helperText="Digite uma mensagem"
            />
            <div>
              <Button disabled={desabilitado} type="submit" variant="outlined">
                ENVIAR MENSAGEM
              </Button>
            </div>
          </div>
        </form>
      </Caixa>
    </section>
  );
};

export default Contato;
