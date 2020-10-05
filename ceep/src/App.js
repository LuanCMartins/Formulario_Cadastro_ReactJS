import React, { Component } from 'react';
import './App.css';
import { Container, Typography } from '@material-ui/core';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { validarCpf, validarSenha, validarNome } from "./models/Cadastro";
import validacoesCadastro from './contexts/ValidacoesCadastro';

class App extends Component {
  render() {
    return (
      <Container
        maxWidth="sm"
        component="section">
        <Typography
          variant="h4"
          component="h1"
          align="center">Formulário de Cadastro</Typography>
        <validacoesCadastro.Provider value={{cpf:validarCpf, senha:validarSenha, nome:validarNome}}>
          <FormularioCadastro aoEnviar={aoEnviarFormulario}/>
        </validacoesCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviarFormulario(dados){
  let cpf = dados.cpf
  if(cpf.length < 11){
    console.log("CPF menor que 11 digitos");
  }
  console.log(dados);
}

export default App;
