import { Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useEffect } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

function FormularioCadastro({ aoEnviar, validarCpf }) {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDadosColetados] = useState({});
    useEffect(() => {
        console.log(dadosColetados);
    });

    const formulario = [
        <DadosUsuario aoEnviar={coletarDados} />,
        <DadosPessoais aoEnviar={coletarDados} validarCpf={validarCpf} />,
        <DadosEntrega aoEnviar={coletarDados} />,
    ]

    function coletarDados(dados){
        setDadosColetados({...dadosColetados, ...dados});
        proximo();
    }

    function proximo() {
        setEtapaAtual(etapaAtual + 1);
    }

    return (
        <>
            { formulario[etapaAtual]}
        </>
    );
}

export default FormularioCadastro;