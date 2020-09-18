import React, { Component } from 'react';
//import { render } from 'react-dom';
import './App.css';
import { Container, Typography } from '@material-ui/core';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';


class App extends Component {
  render() {
    return (
      <Container
        maxWidth="xs"
        component="section">
        <Typography
          variant="h4"
          component="h1"
          align="center">Formulário de Cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarFormulario} validarCpf={validarCpf}/>
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

function validarCpf(cpf){
  if(cpf.length !== 11){
    return {
      valido : false, 
      textoAjuda : "CPF deve ter 11 dígitos, sem pontos ou traços"
    }
  } else {
    return {
      valido : true,
      textoAjuda : ""
    }
  }
}

export default App;
