// lista de paquetes (cada uno con tiempo distinto)
const paquetes = [
    { id: 1, tiempo: 2000 }, // 2 segundos
    { id: 2, tiempo: 1000 }, // 1 segundo
    { id: 3, tiempo: 3000 }  // 3 segundos
];

// arrays para guardar resultados
let entregados = []; // aquí guardo los que llegan bien
let errores = []; // aquí guardo los que fallan

// función que simula entregar un paquete
function entregar(paquete) {

    console.log("Enviando paquete", paquete.id);
    // esto sale de una (todos salen al mismo tiempo)

    setTimeout(() => {
        // esto pasa después del tiempo del paquete

        const falla = Math.random() < 0.3;
        // esto hace que a veces falle (solo para simular)

        if (falla) {
            // si falla

            console.log("Error en paquete", paquete.id);
            // mostramos error

            errores.push(paquete.id);
            // guardamos el error

        } else {
            // si todo bien

            console.log("Entregado paquete", paquete.id);
            // mostramos que llegó

            entregados.push(paquete.id);
            // guardamos el orden en que llegaron
        }

    }, paquete.tiempo); // cada uno tarda su propio tiempo
}


// 🔥 aquí ejecutamos todos (al mismo tiempo)
paquetes.forEach(p => entregar(p));
// esto hace que todos arranquen juntos


// ⏳ esperamos un poco para mostrar resumen
setTimeout(() => {

    console.log("----- RESUMEN -----");

    console.log("Llegaron:", entregados);
    // orden real en que terminaron

    console.log("Fallaron:", errores);
    // cuáles fallaron

}, 4000); // esperamos lo suficiente para que todos terminen