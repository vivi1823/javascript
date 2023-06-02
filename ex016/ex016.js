function botaoTabuada() { 
    var nr = document.getElementById("numero").value
    var contador = 1
    document.getElementById('resultado').innerHTML = `tabuada do ${nr} <br>`
    
    for (var contador = 1; contador <= 10; contador ++){
    var multiplicacao = contador * nr
    document.getElementById("resultado").innerHTML += `${nr} x ${contador} = ${multiplicacao} <br>`
    
}
    
}
    



















