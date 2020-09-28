import { TextField, Button } from '@material-ui/core';
import React from 'react';

function DadosUsuario() {
    return (
        <form>
            <TextField
                id="email"
                label="Insira seu email"
                type="email"
                variant="filled"
                fullWidth margin="dense">
            </TextField>
            <TextField
                id="senha"
                label="senha"
                type="password"
                variant="filled"
                fullWidth margin="dense">
            </TextField>
            <Button
                type="submit"
                variant="contained"
                color="primary">
                Cadastrar
            </Button>
        </form>
    );
}

export default DadosUsuario;