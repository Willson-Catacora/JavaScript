import { barcelona, roma, paris, londres } from "./ciudades.js";

// Obtener los elemento de DOM
let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subTituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');
console.log(enlaces);
// Agregar un evento CLCK a cada enlace
enlaces.forEach( function(enlace){
    enlace.addEventListener('click', function(){
        // Remover la clase "active" de todas los enlaces
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active');
        });
        // Agregar la clase "active" al enlace actual
        this.classList.add('active');
        // Obtener el contenido segun el enlace
        let contenido = obtenerContenido(this.textContent);
        console.log(contenido);
        // MOSTRAR EL CONTENIDO EN EL DOM
        tituloElemento.innerHTML = contenido.titulo;
        subTituloElemento.innerHTML = contenido.subtitulo;
        parrafoElemento.innerHTML = contenido.parrafo;
    });
});
// Funcion para traer la informacion correcta desde ciudades.js
function obtenerContenido(enlace){
    let contenido = {
        'Barcelona' : barcelona,
        'Roma' : roma,
        'París' : paris,
        'Londres' : londres
    }
    return contenido[enlace];
}