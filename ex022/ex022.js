var filmes = []
var imagens = []
function botaoCadastro() {
    var nome = document.getElementById("nomeFilme").value
    var imagem = document.getElementById("imagem").value

    if (nome == "") {
        alert('Informe um filme para gravar')
        return
    }

    filmes.push(nome)
    imagens.push(imagem)
    document.getElementById("resultados").innerHTML = ""
    for (var i = 0; i < filmes.length; i++) { //for (var i in filmes)
        document.getElementById("resultados").innerHTML += `<div> 
                                                                <p>${filmes[i]}</p>
                                                                <img src="${imagens[i]}" alt=""> 
                                                            </div>`
    }

    document.getElementById("nomeFilme").value = ''
    document.getElementById("imagem").vale = ''
    document.getElementById("nomeFillme").focus()
}

function botaoIndicar() {
        var Sorteado = parseInt(Math.random() * filmes.length)
        document.getElementById("resultados").innerHTML = `<div> 
                                                                <p>${filmes[Sorteado]}</p>
                                                                <img src="${imagens[Sorteado]}" alt=""> 
                                                            </div>`
}
