function majority(){
  var age= prompt("Quel est votre âge")


  if (isNaN(age)) {
  		alert('problème de saisie')}
      else{
  if (age>18){alert("Vous êtes majeur(e)")}
  else{alert("Vous êtes mineur(e)")}
}
}
