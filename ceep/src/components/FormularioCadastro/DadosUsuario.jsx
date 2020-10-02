import { TextField, Button } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';

function DadosUsuario({ aoEnviar }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({ email, senha });
        }
        }>
            <TextField
                value={email}
                onChange={(event) => { setEmail(event.target.value) }}
                id="email"
                label="Insira seu email"
                type="email"
                required
                variant="filled"
                fullWidth margin="dense">
            </TextField>
            <TextField
                value={senha}
                onChange={(event) => { setSenha(event.target.value) }}
                id="senha"
                label="senha"
                type="password"
                required
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