function botaoVerificar() {
    var nome = document.getElementById("nome").value
    var idade = document.getElementById("idade").value

    debugger

    if(idade >= 16 && idade < 18 || idade > 70 ) {
        document.getElementById("resultados").innerHTML = `<strong class="strong3">${nome} você nãoé obrigado a votar<br><strong>`
    } else if (idade >= 18 && idade <= 70 ) {
        document.getElementById("resultados").innerHTML = `<strong> ${nome}  você  é obrigado a votar<br><strong>`

    } else{
        document.getElementById("resultados").innerHTML = `<strong class="strong2"> ${nome}  você não pode votar<br><strong>`
    }
}