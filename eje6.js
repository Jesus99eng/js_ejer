/*Utiliza la consola para escribir una expresión que compare dos strings y produzca un valor TRUE.
Escribí una expresión comparando dos strings que devuelva FALSE.
Escribí una expresión que involucre un string y un número y devuelva FALSE.
Escribí una expresión que involucre un string y un número y devuelva TRUE */




let nombre1 = "jorge"
let nombre2 = "maria"


if (nombre1 != nombre2) {
    alert(`Es Verdadero porque ${nombre1} no es igual que el nombre ${nombre2} `);
} else {
    alert("es falso porque ${nombre1} es igual al nombre ${nombre2}")
}



let nom1 = "jorge"
let nom2 = "maria"

if (nom1 == nom2) {
    alert(`Es verdadero porque el nombre ${nom1} es igual que el nombre ${nom2} `);
} else {
    alert(`Es falso porque el nombre ${nom1}  no es igual que el de ${nom2} `);
}


let nombre = "roger"
let numero = 2

if (nombre === numero) {
    alert(`Es verdadero porque el nombre ${nombre} es igual a ${numero} y tienen el mismo tipo de dato `)
} else {
    alert(`Es falso porque el nombre ${nombre} no es igual a ${numero} y no tienen el mismo tipo de dato `)
}


let nombreS =  2
let numeroS = "2"

if (nombreS == numeroS) {
    alert(`Es verdadero porque el nombre ${nombreS} es igual a ${numeroS} `)
} else {
    alert(`Es verdadero porque el nombre ${nombreS} es igual a ${numeroS} `)
}

var bandera = true

if (!bandera) {
    console.log("Correcto")
} else {
    console.log("Incorrecto")
}

