function botaoCalcular(){
    var nome = document.getElementById("nome").value
    var nota1 = document.getElementById("nota1").value
    var nota2 = document.getElementById("nota2").value 
    nota1 = Number(nota1)
    nota2 = Number(nota2)

    var valida = validarNota(nota1, nota2)
    if (valida == false)
    {
        return
    }
    var media = calcularMedia(nota1, nota2)

    exibirAprovacao(media, nome, nota1, nota2)
}

function validarNota(){
    if(nota1 > 10){  
           alert("Nota 1 não pode ser maior que 10")
           return false 
    }
    if(nota2 > 10){
           alert("Nota 2 não pode ser maior que 10")
           return false 
    }
}

function calcularMedia(nota1, nota2)
{
    var media = (Number(nota1) + Number(nota2)) / 2
    return media
}

function exibirAprovacao(media, nome, nota1, nota2){
    if (nota1 > 10){
        alert ("Nota 1 não pode ser maior do que 10")
        return
       }
    
       if (nota2 > 10){
        alert ("Nota 2' não pode ser maior do que 10")
        return
       }
    
        var resultado = (Number(nota1) + Number (nota2)) / 2
        document.getElementById("resultados").innerHTML = `O aluno  ${nome} tirou nota ${nota1} e ${nota2} e sua média foi ${resultado}<br>`
    
        if (resultado >= 7){
            document.getElementById("Passou").innerHTML = `APROVADO`
        } else {
            document.getElementById("Passou").innerHTML = `REPROVADO`
        }
    }