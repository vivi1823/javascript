function botaoVerificar(){
    var nome = document.getElementById("nome").value
    var idade = document.getElementById("idade").value

debugger    

   if (idade < 18){
    document.getElementById("resultados").innerHTML = ` ${nome} não você pode tirar CNH <br> <img src="../midia/Group 1.jpg" alt="">`
   } else {
    document.getElementById("resultados").innerHTML = `Parabéns ${nome} você pode tirar CNH <br> <img src="../midia/cnh.img" alt="">`
   }

}