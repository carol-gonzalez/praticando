//aguarda o DOM estar pronto p executar os scripts JQuery
$(document).ready(function(){
    //recebe o evento submit do formulario area do aluno 
    $("#loginAluno").submit(function(event){
    //testa se o usuario e senha estao corretos
    if($("#inputUsuario").val()== "root" && $("#inputSenha").val() == "1234"){
    //add classes CSS a DIV mensagem
    $("#mensagem").addClass("alert alert-success alert-dismissible fade show")
    //remove a classe "alert-warning" caso ela exista
    $("#mensagem").removeClass("alert-warning")
    //apresenta a mensagem p usuario por 3s
    $("#mensagem").text("Usuário logado").show().fadeOut(3000)
    }else{
    //adiciona classes CSS a DIV mensagem 
    $("#mensagem").addClass("alert alert-warning alert-dismissible fade show")
    // Remove a classe "alert-success" caso ela exista
    $("#mensagem").removeClass("alert-success")
    // apresenta a pensagem para o usuário por 3s
    $("#mensagem").text("Usuário ou Senha Inválida!").show().fadeOut(3000)
    event.preventDefault() //bloquiea o evento de submit
    }
    })
    })