import React, { useState, useContext } from 'react';
import { TextField, Button, Checkbox, FormControlLabel } from '@material-ui/core';
import validacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosPessoais({ aoEnviar }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);
    const validacoes = useContext(validacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    {//Não colocar o useState() dentro de chamadas condicionais
        //Só chamar o hook dentro de funções do React (chamar o useState(), apenas onde tiver no return a arvoer de renderização)
    }
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (possoEnviar()) {
                aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
            }
        }}
        >
            <TextField
                value={nome}
                onChange={event => {
                    setNome(event.target.value);
                }}
                onBlur={validarCampos}
                error={!erros.nome.valido}
                helperText={erros.nome.textoAjuda}
                id="name"
                name = "nome"
                label="Insira seu Primeiro Nome"
                variant="filled"
                required
                fullWidth margin="dense"
            />
            <TextField
                value={sobrenome}
                onChange={event => {
                    setSobrenome(event.target.value);
                }}
                id="sobrenome"
                name = "sobrenome"
                label="Insira seu sobrenome"
                variant="filled"
                required
                fullWidth margin="dense"
            />
            <TextField
                value={cpf}
                onChange={event => {
                    setCpf(event.target.value);
                }}
                onBlur={validarCampos}
                error={!erros.cpf.valido}
                helperText={erros.cpf.textoAjuda}
                id="cpf"
                name="cpf"
                label="Insira seu CPF"
                variant="filled"
                required
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
            <Button variant="contained" color="primary" type="submit">Próximo</Button>
        </form>
    );
}

export default DadosPessoais;