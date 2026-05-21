function validarFormulario(){

    // utilizando document.nomeform.elements[]
    let nome = document.nomeform.elements["nome"].value;
    let email = document.nomeform.elements["email"].value;
    let comentario = document.nomeform.elements["comentario"].value;
    let pesquisa = document.nomeform.elements["pesquisa"];

    // validar nome
    if(nome.length < 10){
        alert("O nome deve ter no mínimo 10 caracteres.");
        return false;
    }

    // validar comentário
    if(comentario.length < 20){
        alert("O comentário deve ter no mínimo 20 caracteres.");
        return false;
    }

    // validar pesquisa
    let resposta = "";

    for(let i = 0; i < pesquisa.length; i++){

        if(pesquisa[i].checked){
            resposta = pesquisa[i].value;
        }
    }

    if(resposta == ""){
        alert("Selecione uma opção da pesquisa.");
        return false;
    }

    // mensagens da pesquisa
    if(resposta == "nao"){
        alert("Que bom que você voltou a visitar esta página!");
    }else{
        alert("Volte sempre à esta página!");
    }

    alert("Formulário enviado com sucesso!");

    return true;
}