function botaoImpar() {
    var contador = 1
    document.getElementById('resultado').innerHTML = `Relação de nº até 20 <br>`

    while (contador <= 20) {
        if (contador % 2 == 1) {
            document.getElementById('resultado').innerHTML += `${contador} <br>`
        }
        contador++
    }

}

function botaoImpares() {
    var nr = document.getElementById("inicial").value 
    var final = document.getElementById("final").value
   
    nr = Number(nr)
    final = Number(final)
    document.getElementById('resultados').innerHTML = `Relação de nº ímpares ${nr} até ${final} <br>`
    
    for (nr; nr <= final; nr++){
        
        if (nr % 2 == 1) {
            document.getElementById('resultados').innerHTML += `${nr} <br>`
        }

}  
}


