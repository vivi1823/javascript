function botaoSortear() {
    document.getElementById("Sorteado").innerHTML = ""
    debugger
    for (var i = 1; i <= 6; i++) {
        var Sorteado = parseInt(Math.random() * 60) + 1
        document.getElementById("Sorteado").innerHTML += ` ${Sorteado}`

    }

}
