const miUrl = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vista&nivel=1');

console.log(miUrl.hostname);

console.log(miUrl.pathname);

console.log(miUrl.searchParams);
console.log(typeof miUrl.searchParams);

console.log(miUrl.searchParams.get('ordenar'));
console.log(miUrl.searchParams.get('nivel'));