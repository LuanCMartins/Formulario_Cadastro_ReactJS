import { TextField, Button } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';

function DadosEntrega({ aoEnviar }) {
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    return (
        <form onSubmit={
            (event) => {
                event.preventDefault();
                aoEnviar({ cep, endereco, numero, estado, cidade });
            }
        }>
            <TextField
                value={cep}
                onChange={(event) => { setCep(event.target.value) }}
                id="cep"
                label="Insira seu CEP"
                type="number"
                variant="filled"
                required
                fullWidth margin="dense">
            </TextField>
            <TextField
                value={endereco}
                onChange={(event) => { setEndereco(event.target.value) }}
                id="endereco"
                label="Insira seu endereco"
                type="text"
                variant="filled"
                required
                fullWidth margin="dense">
            </TextField>
            <TextField
                value={numero}
                onChange={(event) => { setNumero(event.target.value) }}
                id="numero"
                label="Número residencial"
                type="number"
                variant="filled"
                required>
            </TextField>
            <TextField
                value={estado}
                onChange={(event) => { setEstado(event.target.value) }}
                id="estado"
                label="Estado"
                type="text"
                variant="filled"
                required>
            </TextField>
            <TextField
                value={cidade}
                onChange={(event) => { setCidade(event.target.value) }}
                id="cidade"
                label="Cidade"
                type="text"
                variant="filled"
                required>
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