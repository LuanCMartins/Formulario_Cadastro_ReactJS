function validarCpf(cpf){
    if(cpf.length !== 11){
      return {
        valido : false, 
        textoAjuda : "CPF deve ter 11 dígitos, sem pontos ou traços"
      }
    } else {
      return {
        valido : true,
        textoAjuda : ""
      }
    }
  }

  function validarSenha(senha){
      if (senha.length < 6 || senha.length > 72) {
          return { valido : false, textoAjuda : "A senha deve ter entre 6 e 72 caracteres"}
      } else {
          return { valido : true, texto : "" }
      }
  }

  function validarNome(senha){
    if (senha.length < 4 || senha.length > 50) {
        return { valido : false, textoAjuda : "O nome deve ter entre 4 e 50 caracteres"}
    } else {
        return { valido : true, texto : "" }
    }
}

  export {validarCpf, validarSenha, validarNome}