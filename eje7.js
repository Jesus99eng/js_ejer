//VALIDAR SI INGRESO, SI NO PONE NADA NO LO DEJARA INGRESAR, SI PONE UNA LETRA SALDRA SALDRA BIENVENIDO//

let nombreIngresado = prompt('Por favor ingrese su nombre');
if (nombreIngresado.length == 0) {
    alert(`No ha introducido ningun nombre!`);
    let nombreIngresado = prompt('Por favor ingrese su nombre: ');
    alert(`Bienvenid@ ${nombreIngresado}`);
} else {
    alert(`Bienvenid@ ${nombreIngresado}`);
}