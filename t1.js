const colaDeSoporte = [ /// Simulamos una cola de soporte técnico con tiempos de atención
    { nombre: "Ana", tiempo: 2000 }, 
    { nombre: "Luis", tiempo: 1500 },
    { nombre: "Carlos", tiempo: 3000 },
    { nombre: "Beatriz", tiempo: 1000 }
];
const atenderSolicitud = (usuario) => {
    return new Promise((resolve) => {
        console.log(`[Inicio] Atendiendo a ${usuario.nombre}...`);
        
        setTimeout(() => {
            console.log(`[Fin] ${usuario.nombre} atendido en ${usuario.tiempo}ms.`);
            resolve(usuario.tiempo); // Retorna el tiempo que tomó
        }, usuario.tiempo);
    });
};