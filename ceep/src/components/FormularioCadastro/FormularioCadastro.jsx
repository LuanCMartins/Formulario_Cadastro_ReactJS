import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel } from '@material-ui/core';

function FormularioCadastro() {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            console.log(nome + " " + sobrenome);
        }}>
            <TextField
                value={nome}
                onChange={event => {
                    let tempNome = event.target.value
                    if(tempNome.length >= 4) {
                        tempNome = tempNome.substr(0,4);
                    }
                    setNome(tempNome);
                }}
                id="name"
                label="Insira seu Primeiro Nome"
                variant="filled"
                fullWidth margin="dense"
            />
            <TextField
                value={sobrenome}
                onChange={ event => {
                    setSobrenome(event.target.value);
                }}
                id="sobrenome"
                label="Insira seu sobrenome"
                variant="filled"
                fullWidth margin="dense"
            />
            <TextField
                id="cpf"
                label="Insira seu CPF"
                variant="filled"
                fullWidth margin="dense"
            />
            <FormControlLabel
                control={<Checkbox
                    defaultChecked={true}
                    name="promocoes"
                    color="primary"></Checkbox>}
                label="Promoções"
            />
            <FormControlLabel
                control={<Checkbox
                    defaultChecked={true}
                    name="promocoes"
                    color="primary"></Checkbox>}
                label="Novidades"
            />
            <Button variant="contained" color="primary" type="submit">Cadastrar</Button>
        </form>
    );
}

export default FormularioCadastro;