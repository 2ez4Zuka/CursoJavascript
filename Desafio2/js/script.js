let nombre = prompt('Dime tu Nombre')
let edad = parseInt(prompt('Dime tu edad'))
let edadFaltante = 18 - edad

if (edad >= 18){
    console.log(nombre + ' ya eres mayor de edad');
}
else{
    console.log(nombre + ' aun eres menor edad. Te falta : ' + edadFaltante + ', para que puedas entrar a una disco.');
}
