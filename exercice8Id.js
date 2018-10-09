function majority(){

  var age= document.getElementById('age').value;
  var regex= /^[0-9]+$/;


  if (!regex.test(age)||age==null){
      alert("Problème de saisie");}
      else{
  if (age>=18){alert("Vous êtes majeur(e)")}
  else{alert("Vous êtes mineur(e)")}
}
}
