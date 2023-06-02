
        /*
        Comentário em 
        multiplas linhas
        */
        //Comentário em uma única linha 

        //O alert é utilizado para exibir uma mensagem em popup
        //  alert("Olá mundo!!!")

        //No console conseguimos visualizar informaçõessem exibir na página
        console.log("Olá mundo, estou utilizando o console")

        console.error("Esta é uma mensagem de erro")
        console.warn("Esta é uma mensagem de alerta")
        console.info("Esta é uma mensagem de informação")

        //Criando uma função chamada quando clicamos no botão
        //o nome da função tem que ser igual ao do evento onclick
    function Botão1() {
            alert("Você clicou no botão")
        }

    function BotaoCorFundo() {
            //Alterando no documento html no elemento body o estilo fundo
            document.body.style.backgroundColor = "pink"
        }

    function BotaoNome() {
            //No prompt abre opçãom para digitar algo
            var nome2 = prompt("Qual é o seu nome?")
            //No comfirm abre texto com opção ok e cancel
            confirm("Olá " + nome2 + ", entendeu variável?")
            }


        //Declarando variáveis
        //String - conjunto de caracteres -  Declarar com "" ou ''
        var nome = "Vitoria"
        var sobrenome = "Barros Rodrigues"
        //Number - todo número em JS é´do tipo Number - Declarar sem ""
        var idade = 35
        //Boolean - somente recebe true ou false 
        var aprovado = true

        //Utilizamos o typeof para saber o tipo do dado
        console.log(typeof nome)
        //Concatenando strings com o +
        console.log(nome + ' ' + sobrenome)

        var n1 = 10
        var n2 = 15
        //Irá somar as 2 variáveis number
        console.log(n1 + n2)
        var n3 = "10"
        var n4 = "15"
        //Irá concatenar "juntar" as 2 variáveis ("1015")
        console.log(n3 + n4)
        //Se utilizarmos o + com string ele concatena se 
        //Utilizar com number soma 

        //Uma variável pode receber o valor de outra variável
        n1 = n2
        console.log("n1 = " + n1 + ' e o n2 = ' + n2)

        //Para atribuir um valor decimal utilizar . não ,
        var salario = 1290.85
        //Posso também somar a variável com ela mesmo 
        salario = salario + 200
        console.log(salario)

        //Antigamente para juntar texto e variáveis faziamos assim
        console.log('Olá, ' + nome + ' Você tem ' + idade + ' anos')
        //Hoje utilizamos o TemplateSpring forma mais simples
        console.log(`Olá, ${nome} você tem ${idade} anos`)

    function BotaoSomar() {
        //Receber valor1 de um prompt
        var nr1 = prompt("Digite um número:")
        //Receber valor2 de um prompt
        var nr2 = prompt("Digite outro número:")

        //Convertendo a variável valor1 e o 2 de string para number
        nr1 = parseFloat(nr1) //Podemos utilizar o parseInt()
        //Convertendo a variável nr1 de string para number
        nr2 = Number(nr2) //Podemos utilizar Number

        console.log(typeof nr1) //Verificando o tipo do dado
        //Variável soma receber valor1 + valor2
        var soma = nr1 + nr2
        //Exibir em um alert o valor de soma 
        //alert(soma)

        /*Alterando um elemento buscando ele pelo ID e alterando 
        o conteúdo do HTML, Podemos ler da seguinte forma 
        No documento pegar o elemento pelo ID resultadoSoma e 
        Alterar o conteúdo do HTML pela string*/
        document.getElementById("res-soma").innerHTML +=
        `A soma de ${nr1} + ${nr2} = ${soma}`
    }

    function BotaoCidade(){
            var cidade = document.getElementById("cidade").value 
            document.getElementById("resultadoCidade").innerHTML +=
            `<br> O nome da cidade ${cidade}`
        }
        
        //Operadores Aritméticos e Ordem de precedencia
        var opSoma = 5 + 2 //Operador de soma +
        console.log(opsoma) // 7
        var opSubtracao = 5 - 2 //Operador de subtração -
        console.log(opSubtracao) // 3 
        var opMultiplicacao = 5 * 2 //Operador de multiplicação *
        console.log(opMultiplicacao) // 10
        var opDivisao = 5 / 2 //Operador de divisão /
        console.log(opDivisao) // 2.5
        var opExponenciacao = 5 ** 2 //Operador de exponenciação **
        console.log(opExponenciacao) // 25
        var opResto = 5 % 2 //Operador de resto da divisão % 
        console.log(opResto) // 1

        //Ordem de precedencia
        var ordemPrecedencia1 = 5 + 3 / 2
        console.log(ordemPrecedencia1) // 6.5
        var ordemPrecedencia2 = (5 + 3) / 2
        console.log(ordemPrecedencia2) // 4

        /* 1º ()
           2º **
           3º * /
           4º %
           5º + -
        */
       //Constantes - o valor não pode ser alterado depois de atribuido
       const pi = 3.14
       // pi = 3 - Se o valor for alterado dará erro no javaScript

       //Auto atribuição
       var n = 3
       n = n + 3 // a variável recebe ela mesma + 3
       n += 3   // quer dizer o mesmo que a expressão acima

       n++  // quando precisamos somar + 1 ao valor da  variável
       n-- //  quando precisamos subtrair - 1 ao valor da variável

       //Operadores Relacionais
       var n1 = 5
       var n2 = 6
       console.log (n1 > n2) // > Maior que
       console.log (n1 < n2) // < Menor que
       console.log (n1 >= n2) // >= Maior ou igual que
       console.log (n1 <= n2) // <= Menor ou igual que 
       console.log (n1 == n2) // == Igual
       console.log (n1 != n2) // != Não igual - Diferente


        //ESTRUTURAS CONDICIONAIS
        // if - SE
        // else - SENÃO
        if (n1 > n2){    //verificando a condição entre parenteses
            //se a condição for verdadeira "entra" nesse bloco 
            console.log ("O n1 é maior que o n2")
        } else {
            //se a condição NÂO for verdadeira "entra" nesse bloco ELSE
            console.log ("O n1 não é maior que o n2")
        }
        
        //Exemplo de condição
        var minhaIdade = 18
        if (minhaIdade >= 16){
            console.log ("Você pode votar")
        } else {
            console.log ("Você NÃO pode votar")
            }
        
        //Operadores Lógicos
        // && representa o E
        var login = "adm"
        var senha = "123"
         //Para entrar na condição TRUE as 2 condições precisa ser verdadeiras
         if (login == "adm" && senha == "123") {
        //Executa esse bloco quando as condições são TRUE
        } else {
        // xecuta esse bloco se pelo menos 1 condição for FALSE
        }

        var media = 6 
        //Operador OU -> || (pipe)
        //Para entrar na condição TRUE pelo menos 1 condição precisa ser verdadeira
        if (media == 6 || media == 5){
        //Excuta esse bloco quando 1 condição é TRUE pelo menos
        } else {
        //Aqui entra se todas as condições forem falsas 
        }

        //Estruturas condicionais encadeadas 
        if (media >= 7){
            console.log("APROVADO")
        } else if (media >= 5) { //Podemos fazer um novo if junto com o else
            console.log("RECUPERAÇÃO")
        } else {
            console.log("REPROVADO")
        }    

        if (media == 10)
            console.log("Ótimo aluno") {
        } else if (media == 9 || media == 8) {
            console.log("Bom aluno")
        } else if (media == 7 || media == 6) {
            console.log("Aluno mediano")
        } else if (media == 5 || media == 4 || media == 3) {
            console.log("Aluno abaixo da média")
        } else {
            console.log ("Aluno ruim")
        }
        
        //debugger
        //Podemos utilizar o debugger para analisar o código linha a linha 
        //roturn
        //Quando queremos parar de executar uma função do JS utilizamos o roturn


        //Para sorteamos um valor aleatório utilizamos o Math.random()
        //O Math.random retorna um número decimal e precisamos multiplicar pelo nr
        //Máximo que desejamos
        //O parseInt utilizamos para obter apenas a parte inteira do número
        var nrSorteado = parseInt(Math.random() * 100)
        console.log (nrSorteado)

        //Switch Case 
        //É como se fosse vários if else de forma mais simples
        var diaSemena = 3
        switch (diaSemana) { 

        case 1 :
             console.log("Hoje é: Domingo")
        break    //para o switch case e não verifica as outras opções

        case 2 :
            console.log("Hoje é: Segundo")
       break

        case 3 :
            console.log("Hoje é: Terça")
       break
 
       case 4 :
        console.log("Hoje é: Quarta")
       break

       case 5 :
        console.log("Hoje é: Quinta")
       break

      case 6 :
        console.log("Hoje é: Sexta ")
      break

      case 7 :
        console.log("Hoje é: Sabádo")
      break

      default:
      console.log("Dia invalido")
    }

    //For - Laço de repetição
    // 1º expressão var i = 1
    // (Aqui eu inicio o controle de vezes)
    // 2º expressão i <= 10
    // (Aqui nós verificamos a condição para se manter no loop)
    // 3º expressão i++
    // (Aqui acrescentamos na variável +1 vez)
    debugger
    for (var i = 1; i <= 10; i++) {
        alert(i)
    }

    //Verificando se número é par com while
    var contador = 1 //iniciando o contador de vezes que irá executar
    while (contador <= 10) { //Enquanto a condição for verdadeira
        if (contador % 2 == 0) { //Condição para o contador for par
            console.log (`${contador} é par`)
        } else {
            console.log (`${contador} é ímpar`)
        }  
        contador++ //Adicionamos +1 ao contador para não ficar em loop infinito     
    }