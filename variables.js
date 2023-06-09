let variable = `hola mundo`;
console.log(variable);
var variable1 = 123;
console.log(variable1);
const variable2 = 121.23;
console.log(variable2);

/* Escriba un ciclo que haga siete llamadas a console.log para generar el siguiente triángulo:

#
##
###
####
#####
######
####### */

for ( let i = 0; i < 7; i++){
    for (let j = 1; j <= i; j++){
        console.log('#');
    }
    console.log('\n');
}