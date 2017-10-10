# **_Cifrado César_**


### 1. Objetivo
Encriptar la frase que el usuario proporciona a través del *algoritmo de Cifrado César*.

### 2. Contenido
- **Input :** *var* phrase --> prompt (recibe frase del usuario), _**toUpperCase**_ convierte a mayúsculas la frase (de estar en minúsculas).

- *Condicional* **If:** No debería aceptar números ni campos vacíos en el prompt.

- *function* __cipher__*(phrase)* : (1). Contiene el método _**split()**_ que ingresa las letras de la frase en un array (*arrPhrase*) para posibilitar el recorrido, (2). El array es recorrido mediante un _**for**_.   (3). Para obtener las letras cifradas se usaron dos métodos:
>**String.fromCharCode()**

 >**charCodeAt()**

- y también la fórmula:

 > __f(x) = ((x + 65) + n) % 26 + 65__


- (4). Las letras cifradas se convierten a string usando _**Join()**_.

- **output :** Devuelve la frase encriptada.


### 3. Conclusión
Si bien el _algoritmo de Cifrado César_ es la forma más sencilla y también menos segura de encriptar mensajes, este código presenta un _bug_ en su estructura condicional, ya que no se ha podido validar que solo acepte strings como tipo de dato.

###### A continuación se presenta el _**diagrama de flujo**_ en el siguiente link:

http://subefotos.com/ver/?4b0f1744e55c32ec943a314753b969deo.jpg
