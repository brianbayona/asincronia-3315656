const colaDeSoporte = [ /// Simulamos una cola de soporte técnico con tiempos de atención
    { nombre: "Ana", tiempo: 2000 }, 
    { nombre: "Luis", tiempo: 1500 },
    { nombre: "Carlos", tiempo: 3000 },
    { nombre: "Beatriz", tiempo: 1000 }
];
const atenderSolicitud = (usuario) => {// Función que simula la atención de una solicitud de soporte técnico
    return new Promise((resolve) => { // Retorna una promesa que se resuelve después de un tiempo determinado
        console.log(`[Inicio] Atendiendo a ${usuario.nombre}...`);  // Imprime el inicio de la atención    
        
        setTimeout(() => {  // Simula el tiempo de atención con setTimeout
            console.log(`[Fin] ${usuario.nombre} atendido en ${usuario.tiempo}ms.`); // Imprime el fin de la atención con el tiempo que tomó
            resolve(usuario.tiempo); // Retorna el tiempo que tomó
        }, usuario.tiempo); // El tiempo de atención se determina por el campo "tiempo" del usuario
    });
};
// 2. Función principal para procesar la cola
async function gestionarCola(lista) { // Función asíncrona para gestionar la cola de soporte técnico
    let tiempoTotal = 0; // Variable para acumular el tiempo total de atención
    const inicioProceso = Date.now(); // Marca el inicio del proceso para calcular el tiempo total al final

    console.log("--- Iniciando proceso de soporte ---"); // Imprime un mensaje indicando el inicio del proceso

    // Usamos for...of porque respeta el await (forEach NO lo hace)
    for (const usuario of lista) { // Iteramos sobre cada usuario en la lista de soporte técnico
        const tiempoAtencion = await atenderSolicitud(usuario); // Esperamos a que se atienda cada solicitud antes de continuar con la siguiente
        tiempoTotal += tiempoAtencion; // Acumulamos el tiempo de atención de cada usuario
    }
    const finProceso = Date.now(); // Marca el fin del proceso para calcular el tiempo total al final
    
    console.log("------------------------------------"); // Imprime una línea para separar el resumen final del proceso 
    console.log(`Proceso finalizado.`); // Imprime un mensaje indicando que el proceso ha finalizado
    console.log(`Tiempo total acumulado de atención: ${tiempoTotal}ms.`); // Imprime el tiempo total acumulado de atención
    console.log(`Tiempo real transcurrido (incluyendo overhead): ${finProceso - inicioProceso}ms.`); // Imprime el tiempo real transcurrido desde el inicio hasta el fin del proceso, incluyendo cualquier overhead de ejecución
}

// Ejecución
gestionarCola(colaDeSoporte); // Llamamos a la función principal para gestionar la cola de soporte técnico, pasando la lista de usuarios como argumento