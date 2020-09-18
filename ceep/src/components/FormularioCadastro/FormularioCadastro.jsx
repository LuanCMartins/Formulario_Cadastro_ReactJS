import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel } from '@material-ui/core';

function FormularioCadastro({ aoEnviar, validarCpf }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);
    const [erros, setErros] = useState({
        cpf:{
            valido : true, 
            textoAjuda: ""}
    });

    {//Não colocar o useState() dentro de chamadas condicionais
        //Só chamar o hook dentro de funções do React (chamar o useState(), apenas onde tiver no return a arvoer de renderização)
    }
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
        }}
        >
            <TextField
                value={nome}
                onChange={event => {
                    setNome(event.target.value);
                }}
                id="name"
                label="Insira seu Primeiro Nome"
                variant="filled"
                fullWidth margin="dense"
            />
            <TextField
                value={sobrenome}
                onChange={event => {
                    setSobrenome(event.target.value);
                }}
                id="sobrenome"
                label="Insira seu sobrenome"
                variant="filled"
                fullWidth margin="dense"
            />
            <TextField
                value={cpf}
                onChange={event => {
                    setCpf(event.target.value);
                }}
                onBlur={(event) => {
                    const valido = validarCpf(event.target.value);
                    setErros({cpf : valido});
                }}
                error={!erros.cpf.valido}
                helperText={erros.cpf.textoAjuda}
                id="cpf"
                label="Insira seu CPF"
                variant="filled"
                fullWidth margin="dense"
            />
            <FormControlLabel
                control={<Checkbox
                    onChange={(event) => {
                        setPromocoes(event.target.checked);
                    }}
                    checked={promocoes}
                    name="promocoes"
                    color="primary"></Checkbox>}
                label="Promoções"
            />
            <FormControlLabel
                control={<Checkbox
                    onChange={(event) => {
                        setNovidades(event.target.checked);
                    }}
                    checked={novidades}
                    name="novidades"
                    color="primary"></Checkbox>}
                label="Novidades"
            />
            <Button variant="contained" color="primary" type="submit">Cadastrar</Button>
        </form>
    );
}

export default FormularioCadastro;