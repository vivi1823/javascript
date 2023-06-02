var
    if (nrSorteado ==  nrSorteado = parseInt(Math.random() * 100 ) + 1
console.log (nrSorteado)
var tentativas = 0 

function botaoChutar() {
    var chute = prompt("Escreva um número:")
    tentativas++chute) {
       document.getElementById("Sorteado").innerHTML += `<br><strong>Parabéns você acertou no Nº ${chute} em ${tentativas} tentativas <strong>` 
    } else if (nrSorteado > chute) {
       document.getElementById("Sorteado").innerHTML += `<br><strong class="strong2">Você chutou ${chute} pense em um número MAIOR<strong>`
    } else if (nrSorteado < chute) { 
       document.getElementById("Sorteado").innerHTML += `<br><strong class="strong3">Você chutou ${chute} pense em um número MENOR<strong>`
    }
}

function novoJogo() {
      document.getElementById("Sorteado").innerHTML = ""
      nrSorteado = parseInt(Math.random() * 100 ) + 1
      tentativas = 0

}