
//Declarando uma função sem parametro e sem retorno
function exibirInformacao() {
       console.log ('Executei a função exibir info')
}
//Chamando a minha função
exibirInformacao()
exibirInformacao()
exibirInformacao()

function ricardoCalculeTabuada(nr) { 
        for (var i=0; i<=30; i++) { 
        console.log (`${nr} x ${i} = ${nr * i}`) 

    }
}
//Chamando a função e passando o nº com PARAMETRO que desejo ver a tabuada
  ricardoCalculeTabuada(428)
  ricardoCalculeTabuada(30)
  ricardoCalculeTabuada(45643)

  function ricardoCalculeDobro(nr){
    let dobro = nr * 2
    return dobro // com o comando return "devolve" o valor calculado para
  }

//Chamando função para calcular o dobro e receber o resultado na variável
  var resultado = ricardoCalculeDobro(7)
  console.log(resultado)
  var resultado = ricardoCalculeDobro(738374)
  console.log(resultado)

// realizar soma 
function soma (n1, n2) 
{
    var soma = n1 + n2 
    return soma 
}

    var n1 = 2
    var n2 = 3

    var calculoSoma = soma(n1, n2)
    console.log(soma)

//Calcular média enviando 2 parametros e retornando a média

function calcularMedia (nota1, nota2)
{
    var soma = nota1 + nota2
    var media = soma / 2
    return media 
}

    var aluno1 = calcularMedia(7, 8)
    console.log(aluno1)
    var aluno2 = calcularMedia(5, 6)
    console.log(aluno2)


    var user = "adm"
    var senha = 123

    var possoAcessar = validarLogin(login, senha )
    if(possoAcessar == true)
    {
        console.log("Voce pode acessar o sistema")
    } else 
    {
        console.log("Voce não tem permissão ")
    }

    validarLogin(login, senha )
{ 
    //valida se os valores sâo vazios
    if(login == '' || senha == '')
    {
    return false
    }
    //valida se login e senha sâo iguais
    if (login == "adm" && senha == 123)
    {
    return true
    }
    else
    {
    return false
    }
}
  