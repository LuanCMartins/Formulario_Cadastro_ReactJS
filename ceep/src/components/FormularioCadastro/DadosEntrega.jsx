import { TextField, Button } from '@material-ui/core';
import React from 'react';

function DadosEntrega() {
    return (
        <form>
            <TextField
                id="cep"
                label="Insira seu CEP"
                type="number"
                variant="filled"
                fullWidth margin="dense">
            </TextField>
            <TextField
                id="endereco"
                label="Insira seu endereco"
                type="text"
                variant="filled"
                fullWidth margin="dense">
            </TextField>
            <TextField
                id="numero"
                label="Número residencial"
                type="number"
                variant="filled">
            </TextField>
            <TextField
                id="estado"
                label="Estado"
                type="text"
                variant="filled">
            </TextField>
            <TextField
                id="cidade"
                label="Cidade"
                type="text"
                variant="filled">
            </TextField>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth margin="dense">
                Finalizar cadastro
            </Button>
        </form>
    );
}

export default DadosEntrega;