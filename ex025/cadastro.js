var listaUsuarios = []

listaUsuarios = JSON.parse(localStorage.getItem('bdUsuarios'))
    if(listaUsuarios == null){
    listaUsuarios = []
}
  exibirUsuarios() 
 console.log(listaUsuarios)

 function validarCadastro(nome, login, senha, confimarSenha) {

    if(senha != confimarSenha) {
        alert("Verifique sua senha")
        return false
    }
        
    if(nome != '' || login != '' || senha != ''|| confimarSenha  != '') {
        return true
    } else {
        alert ('Verifique os dados antes de cadastrar')
        return false
    }

}

function botaoCadastro() {
    var nome = document.getElementById("nome").value
    var login = document.getElementById("email").value
    var senha = document.getElementById("senha").value
    var confimarSenha = document.getElementById("confirmarSenha").value

    var possoCadastrar = validarCadastro(nome, login, senha, confimarSenha)
    if(possoCadastrar == false) {
        
        return
    }
    var usuario = {
        nome: nome,
        usuario: login,
        senha: senha
    } 

    listaUsuarios.push(usuario)
    localStorage.setItem( 'bdUsuarios', JSON.stringify(listaUsuarios) )

    exibirUsuarios()

    document.getElementById("nome").value = ''
    document.getElementById("login").vale = ''
    document.getElementById("senha").vale = ''
    document.getElementById("confirmarSenha").vale = ''
    document.getElementById("nome").focus()
}

function exibirUsuarios(){
    document.getElementById("resultado").innerHTML = ""

   
    listaUsuarios.forEach( (item, indice) => { 
        document.getElementById("resultado").innerHTML += `<p><strong>Nome:</strong> ${item.nome} - <strong>Login:</strong>${item.usuario}
        <img src= 'excluir.svg' onclick='excluirUsuario(${indice})'></p>`
       
    })
}

function excluirUsuario(indice){
    listaUsuarios.splice (indice, 1)
    localStorage.setItem( 'bdUsuarios', JSON.stringify(listaUsuarios))
    exibirUsuarios()
}



//document.getElementById("resultado").innerHTML = ""

    //for  (var i in listaUsuarios) { 
       // document.getElementById("resultado").innerHTML += `<p><strong>Nome:</strong> ${listaUsuarios[i].nome} - <strong>Login:</strong>${listaUsuarios[i].usuario}</p>`


   // }
//



 
   
    
