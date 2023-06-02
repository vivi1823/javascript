function botaoEntrar() {
    var listaUsuarios = []

    listaUsuarios = JSON.parse(localStorage.getItem('bdUsuarios'))
        if(listaUsuarios == null){
        listaUsuarios = []
    }

    console.log ( listaUsuarios)
    
    var usuario = document.getElementById("nome").value
    var senha = document.getElementById("senha").value

    var encontrou = false
    listaUsuarios.forEach( item => {
        console.log (item)
        if (usuario == item.login && senha == item.senha) {
            alert(`Bem-Vindo ao sistema, ${item.nome}`)
            encontrou = true
        }
    })

   
    if (encontrou == false){
    alert ('Usuário não encontrado')
    }
}

function botaoCadastrar() {
    location.href = 'cadastro.html'
}


//for (var andar in listaUsuarios) {
   // if (usuario == listaUsuarios[andar].usuario && senha == listaUsuarios[i].senha) {
        //alert(`${listaUsuarios[andar].nome}, Bem-Vindo ao sistema`)
        //return true
   /// }
//}