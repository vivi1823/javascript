function botaoImagem() {

    var nr = document.getElementById("quantidade").value
    nr = Number(nr)
    document.getElementById('resultados').innerHTML = ""
    for (var i = 1; i <= nr; i++) {

        document.getElementById('resultados').innerHTML += `<img src="/ex018/coracao2.png" alt="">`
    }
}

var coracao = 0
function botaoMario() {
    coracao++
    document.getElementById('vidas').innerHTML = ""
    for (var i = 1; i <= coracao; i++) {

    document.getElementById('vidas').innerHTML += `<img src="/ex018/coracao2.png" alt="">`
}
    
}

function botaoBomba() {
    coracao--
    document.getElementById("vidas").innerHTML = ""
    for (var i = 1; i <= coracao; i++) {
    document.getElementById("vidas").innerHTML += ""
}

}