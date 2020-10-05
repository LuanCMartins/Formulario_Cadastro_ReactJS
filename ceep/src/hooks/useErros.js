import React, { useState } from 'react';

function useErros(validacoes) {
    const estadoInicial = criarEstadoInicial(validacoes);

    const [erros, setErros] = useState(estadoInicial);

    function validarCampos(event) {
        const { name, value } = event.target;
        const valido = validacoes[name](value);
        const novoEstado = { ...erros };
        novoEstado[name] = valido;
        setErros(novoEstado);
    }

    function possoEnviar(){
        for (let campo in erros) {
            if(!erros[campo].valido){
                return false;
            }
        }
        return true;
    }

    return [erros, validarCampos, possoEnviar];
}

function criarEstadoInicial(validacoes){
    const estadoInicial = {};
    for(let campo in validacoes){
        estadoInicial[campo] = { valido: true, textoAjuda: "" };
    }

    return estadoInicial;
}

export default useErros;