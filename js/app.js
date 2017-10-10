var phrase = (prompt('¡Hola usuario!. Ingresa una frase')).toUpperCase();//convierte frase a   mayúsculas

  if(phrase === undefined || typeof phrase !== Number){
    alert('No es un frase válida'); // No acepta números ni campos vacíos
  }

function cipher(phrase){
  var arrPhrase = phrase.split(''); // Crea un Array para recorrer

  var newArrPhrase = [];

  for( var i = 0; i<arrPhrase.length; i++){//recorre el array para obtener la letra cifrada
      newArrPhrase.push(String.fromCharCode((((arrPhrase[i].charCodeAt()-65)+33)%26)+65));

  var outputPhrase = newArrPhrase.join(''); //Devuelve (en string) la frase cifrada

    }

  return outputPhrase;
 }

  cipher(phrase);//Aquí el prompt es el argumento.
