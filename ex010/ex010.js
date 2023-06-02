function botaoLogin(){
    var usuario = document.getElementById("nome").value
    var senha = document.getElementById("senha").value

    if (usuario == "adm" && senha == 123){
        document.getElementById("resultado").innerHTML = `<strong class="strong2">Bem vindo, Você validou e logou no Sistema<strong>`
       } else {
        document.getElementById("resultado").innerHTML = `<strong>Usuário ou Senha invalidos<strong>`
       }
    

}