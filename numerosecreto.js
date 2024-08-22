//validar numero secreto//


const numeroSecreto = 10;
const numeroUsuario = parseInt(prompt('Por favor, adivine el numero que estoy pensando. Ingreselo y veremos: '));
if (numeroSecreto === numeroUsuario) {
    alert('Felicitaciones! Adivinaste el número!');
} else if (numeroSecreto > numeroUsuario) {
    alert('Perdiste, pero te doy una pista! El numero ingresado es menor al número secreto');
} else {
    alert('Perdiste, pero te doy una pista! El numero ingresado es mayor al número secreto');
} 