function botaoFilmes() {
  var filme = ['Filme Interestelar', 'Filme Star Wars', 'Filme Harry Potter', 'Filme Super Mario World',
               'Filme Vingadores', 'Filme Barbie']
  for (var i = 0; i <= filme.length; i++)
  document.getElementById('resultados').innerHTML += `Posição do vetor ${i} - ${filme[i]} <br>`

}