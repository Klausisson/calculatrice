var operation = "";
var result = 0;

function  add(element) {
  console.log(element.value);
  //stocker
  operation += element.value;
  document.getElementById("afficheur").value = operation;
  //afficher
}
function stop(){
 // operation // mettre la string (operation) VIDE
 location.reload(); // on rafraichi la page afin de vidé la variable operation.
}

function egal(oper) {
  //stocker resultat
  result = eval(operation);
  document.getElementById("afficheur").value = result;

  //affiche resultat
}

//calculette

//1  click sur un nombre
//1.1 stock la valeur du nombre
//1.2 affiche le nombre dans afficheur


//2 click sur operateur
//2.1 stock la valeur du ope dans var nombre
//2.2 affiche le nombre dans afficheur

//3 apui sur egal
//3.1 evalue operation
//3.2 afficher sur afficheur
