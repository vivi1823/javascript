function botaoCasar() {
        var nome = document.getElementById("nome").value


        var mesSorteado = parseInt(Math.random() * 12) + 1
        console.log (mesSorteado)

        switch (mesSorteado) { 

        case 1 :
            document.getElementById("resultados").innerHTML = `<strong><br> ${nome}, você vai se casar no mês de Janeiro<strong>`
        break 

        case 2 :
            document.getElementById("resultados").innerHTML = `<strong><br> ${nome}, você vai se casar no mês de Fevereiro<strong>`
        break

        case 3 :
            document.getElementById("resultados").innerHTML = `<strong><br> ${nome}, você vai se casar no mês de Março<strong>`
        break

        case 4 :
            document.getElementById("resultados").innerHTML = `<strong><br> ${nome}, você vai se casar no mês de Abril<strong>`
        
        break

        case 5 :
            document.getElementById("resultados").innerHTML = `<strong><br> ${nome}, você vai se casar no mês de Maio<strong>`
        break

        case 6 :
            document.getElementById("resultados").innerHTML = `<strong><br> ${nome}, você vai se casar no mês de Junho<strong>`
        break

        case 7 :
            document.getElementById("resultados").innerHTML = `<strong><br> ${nome}, você vai se casar no mês de Julho<strong>`
        break

        case 8 :
            document.getElementById("resultados").innerHTML = `<strong><br> ${nome}, você vai se casar no mês de Agosto<strong>`
        break

        case 9 :
            document.getElementById("resultados").innerHTML = `<strong><br> ${nome}, você vai se casar no mês de Setembro<strong>`
        break

        case 10 :
            document.getElementById("resultados").innerHTML = `<strong><br> ${nome}, você vai se casar no mês de Outubro<strong>`
        break

        case 11 :
            document.getElementById("resultados").innerHTML = `<strong><br> ${nome}, você vai se casar no mês de Novembro<strong>`
        break

        case 12 :
            document.getElementById("resultados").innerHTML = `<strong><br> ${nome}, você vai se casar no mês de Dezembro<strong>`
        break

        default:
            document.getElementById("resultados").innerHTML = `<strong><br> ${nome}, você não vai se casar<strong>`
        }


}

