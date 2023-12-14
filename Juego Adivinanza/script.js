// Aca el juego selecciona un numero al azar para que adivines
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
let intento = 0;
// Esta accion se va a ejecutar cuando se toque el boton chequear
function chequearResultado(){
    intento ++;
    document.getElementById('intentos').textContent = intento
    let numeroIngresado = parseInt(numeroEntrada.value);
    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'Por favor, introduzca un numero valido entre 1 y 100';
        mensaje.style.color = 'black';
        return;
    }
    if(numeroIngresado === numeroAleatorio){
        mensaje.textContent = "Felicitaciones! Has adivinado el numero!";
        mensaje.style.color = 'green';
    }else if(numeroIngresado < numeroAleatorio){
        mensaje.textContent = "Mas alto! El numero es mayor al que dijiste";
        mensaje.style.color = 'red';
    }else{
        mensaje.textContent = "Mas bajo! El numero es menor al que dijiste";
        mensaje.style.color = 'red';
    }
    
}