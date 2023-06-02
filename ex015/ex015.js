function botaoTabuada() { 
var nr = document.getElementById("numero").value
var contador = 1
document.getElementById('resultado').innerHTML = `tabuada do ${nr} <br>`

while (contador <= 10) {
    var multiplicacao = contador * nr
    document.getElementById("resultado").innerHTML += `${nr} x ${contador} = ${multiplicacao} <br>`
    contador++

    
}

}
