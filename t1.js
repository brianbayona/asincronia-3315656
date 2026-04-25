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