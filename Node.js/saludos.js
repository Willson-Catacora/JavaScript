function saludar(nombre){
    return `Hola ${nombre}`;
}
function saludarHolaMundo(){
    return 'Hello wordl!';
}
//Primera forma de exportar
/* module.exports.saludar = saludar;
module.exports.saludarHolaMundo = saludarHolaMundo; */
//Segunda forma de exportar
module.exports ={
    saludar: saludar,
    saludarHolaMundo: saludarHolaMundo
}
