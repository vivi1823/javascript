function botaoCalcular() {

    var nr1 = document.getElementById("nrDigitado1").value
    var nr2 = document.getElementById("nrDigitado2").value 

    
    var soma = Number(nr1) + Number(nr2)
    var subtração = nr1 - nr2
    var multiplicação = nr1 * nr2
    var divisão = nr1 / nr2
    var resto = nr1 % nr2
    var exponenciação = nr1 ** nr2




    document.getElementById("resultados").innerHTML += ` <br> ${nr1} + ${nr2} = ${soma}`
    document.getElementById("resultados").innerHTML += ` <br>${nr1} - ${nr2} = ${subtração}`
    document.getElementById("resultados").innerHTML += ` <br>${nr1} * ${nr2} = ${multiplicação}`
    document.getElementById("resultados").innerHTML += ` <br>${nr1} / ${nr2} = ${divisão}`
    document.getElementById("resultados").innerHTML += ` <br>${nr1} % ${nr2} = ${resto}`
    document.getElementById("resultados").innerHTML += ` <br>${nr1} ** ${nr2} = ${exponenciação}`
    


 

    
}





