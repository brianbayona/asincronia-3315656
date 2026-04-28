const procesoArriesgado = () => { // Simulamos un proceso que puede fallar
    return new Promise((resolve, reject) => { // Creamos una nueva promesa que acepta dos funciones: resolve para éxito y reject para error
        console.log("Iniciando proceso..."); // Imprime un mensaje indicando que el proceso ha comenzado
        setTimeout(() => { // Simulamos un retraso de 1 segundo para representar el tiempo que tarda el proceso
            const exito = Math.random() > 0.5; // 50% de probabilidad de éxito o fracaso

            if (exito) { // Si el proceso es exitoso, se llama a resolve con un mensaje de éxito
                resolve("¡Operación completada con éxito!"); // Mensaje de éxito    
            } else {
                reject("Error: El servidor no respondió a tiempo.");// Si el proceso falla, se llama a reject con un mensaje de error
            }
        }, 1000);// El tiempo de espera antes de ejecutar la función dentro del setTimeout es de 1000 milisegundos (1 segundo)
    });
};
procesoArriesgado()  // Llamamos a la función procesoArriesgado, que devuelve una promesa
    .then((mensaje) => { // Aquí es donde "atrapamos" el éxito
        console.log(" Éxito:", mensaje); // Si la promesa se resuelve correctamente, se ejecuta esta función y se imprime el mensaje de éxito
    })
    .catch((error) => {  //catch es un método que se utiliza para manejar errores en promesas. Si la promesa es rechazada, se ejecuta esta función y se imprime el mensaje de error
        // Aquí es donde "atrapamos" el error
        console.error(" Fallo capturado:", error);
    })
    .finally(() => { //finally es un método que se ejecuta después de que la promesa se ha resuelto o rechazado, sin importar el resultado. Es útil para realizar tareas de limpieza o finalizar procesos.
        console.log("Fin del ciclo (siempre se ejecuta)."); // Este mensaje se imprimirá al final, independientemente de si la promesa se resolvió con éxito o fue rechazada
    });