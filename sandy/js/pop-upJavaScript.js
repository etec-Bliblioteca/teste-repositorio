
/*var Menu = document.getElementsByClassName("pop-up-tela");

function abrirpop(){

    this.render = function(){

        let popuptela = document.getElementsByClassName('pop-up-tela');

        popuptela.style.display = "block";

        document.getElementsByClassName('reserva').innerHTML = '<button onclick="Menu.ok()">OK</button>';
    }
    this.ok = function(){
        document.getElementsByClassName('pop-up-tela').style.display = "none";
        document.getElementsByClassName('reserva').style.display = "none";
    
    }
    }
    */
    var modal = true;
 function pop() {
   if(modal === null) {
    document.getElementById("bgpop").style.display = "block"
     document.getElementById("popuptela").style.display = "block";
     modal = true
   } else {
    document.getElementById("bgpop").style.display = "none"
     document.getElementById("popuptela").style.display = "none";
     modal = null;

   }
 }

  







//povo do php, faz ele trocar de botão de acordo com a quantidade
//trabalhem >:)