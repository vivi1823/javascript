var filmes = []
function botaoCadastro() {
  var nome = document.getElementById("nomeFilme").value
  filmes.push (nome)  
  document.getElementById("resultados").innerHTML = ""
  for(var i = 0; i < filmes.length; i++) {
    document.getElementById("resultados").innerHTML += `${filmes[i]} <br>`
  }
}
