// 1. Una función que retorna una promesa tras 2 segundos
const esperarDosSegundos = () => { // Esta función simula un proceso asíncrono que tarda 2 segundos en completarse
    return new Promise((resolve) => { // Creamos una nueva promesa que acepta una función con el parámetro resolve, que se llamará cuando la operación se complete exitosamente
        setTimeout(() => { // Usamos setTimeout para simular el retraso de 2 segundos antes de resolver la promesa
            resolve("¡Operación completada tras 2 segundos!"); // Después de 2 segundos, se llama a resolve con un mensaje de éxito, lo que indica que la promesa se ha cumplido
        }, 2000); // El tiempo de espera antes de ejecutar la función dentro del setTimeout es de 2000 milisegundos (2 segundos)
    });
};
async function procesarTarea() {  // Esta función es declarada como async, lo que permite el uso de await dentro de ella para manejar promesas de manera más sencilla y legible
    console.log("-> Función async iniciada. Esperando..."); // Imprime un mensaje indicando que la función async ha comenzado y que está esperando a que se resuelva la promesa
    
    // Aquí el hilo principal se libera para otras tareas
    const resultado = await esperarDosSegundos(); // La palabra clave await se utiliza para esperar a que la promesa devuelta por esperarDosSegundos se resuelva. Mientras se espera, el hilo principal no se bloquea y puede realizar otras tareas.
    
    // Esta línea no se ejecuta hasta que la promesa se resuelva
    console.log("->", resultado); // Una vez que la promesa se resuelve, se imprime el resultado. En este caso, se mostrará el mensaje "¡Operación completada tras 2 segundos!" después de 2 segundos.
}