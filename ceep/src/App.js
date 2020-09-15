import React, { Component } from 'react';
//import { render } from 'react-dom';
import './App.css';
import { Container, Typography } from '@material-ui/core';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import 'fontsource-roboto';

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
        <FormularioCadastro />
      </Container>
    );
  }
}

export default App;
