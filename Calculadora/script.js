// Esto agrega a la pantalla el valor del boton de la calculadora qye toquemos con el mause
function agregar(valor){
    document.getElementById('pantalla').value += valor;
}
// Esta accion borra la pantalla
function borrar(){
    document.getElementById('pantalla').value = '';
}
// Esta accion toma el valor de la pantalla y la evalua
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado;
}