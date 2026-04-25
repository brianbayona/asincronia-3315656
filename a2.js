console.log ("1.inicio del programa"); //instrucción para empezar el programa

setTimeout(() => { //setTimeout es una función que permite ejecutar un bloque de código después de un cierto tiempo (en milisegundos)
    console.log("3. Empieza el conteo (debería haber salido antes)"); //instrucción que se ejecutará después de 100 milisegundos
}, 100); //100 milisegundos es el tiempo que se espera antes de ejecutar la función dentro del setTimeout

console.log("2. Iniciando ciclo pesado (esto bloqueará el hilo)..."); //instrucción que se ejecuta inmediatamente después de la primera instrucción, pero antes de la función del setTimeout
let contador = 0;//inicialización de una variable contador que se usará para contar hasta 2 mil millones
for (let i = 0; i < 2_000_000_000; i++) { //un ciclo for que se ejecuta 2 mil millones de veces, lo que bloqueará el hilo principal y retrasará la ejecución de la función del setTimeout
    contador++; //incrementa el contador en cada iteración del ciclo
}
console.log("4. Ciclo pesado terminado. Contador:", contador);//instrucción que se ejecuta después de que el ciclo for ha terminado, mostrando el valor final del contador
console.log("5. Fin del programa");//instrucción final que indica el fin del programa