// mostramos el primer mensaje en consola
console.log("Inicio"); // esto se ejecuta inmediatamente

// usamos setTimeout para ejecutar algo después de un tiempo
setTimeout(() => { // aquí definimos una función que se ejecutará luego

    // este mensaje NO sale de inmediato
    // se ejecuta después de que pasen 2 segundos
    console.log("Esto sale después de 2 segundos");

}, 2000); // 2000 milisegundos = 2 segundos de espera

// este mensaje se ejecuta sin esperar al setTimeout
// por eso aparece antes que el mensaje de los 2 segundos
console.log("Fin");