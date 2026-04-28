// paso 1: tomar datos
function tomarDatos() {

    // creamos una Promesa
    return new Promise((resolve) => {
        // "resolve" es como decir: ya terminé y te doy el resultado

        console.log("Tomando datos...");
        // este mensaje sale inmediatamente

        setTimeout(() => {
            // simulamos que algo tarda (como pedir datos a internet)

            const datos = "hola";
            // estos son los datos que conseguimos

            console.log("Datos listos");
            // este mensaje sale después de 2 segundos

            resolve(datos);
            // aquí enviamos los datos al siguiente paso (.then)

        }, 2000); // espera 2 segundos
    });
}


// paso 2: procesar datos
function procesarDatos(datos) {

    return new Promise((resolve) => {
        // otra promesa porque también tarda tiempo

        console.log("Procesando...");
        // mensaje inmediato

        setTimeout(() => {
            // simulamos proceso

            const resultado = datos.toUpperCase();
            // convertimos el texto a mayúsculas

            console.log("Procesado");
            // confirmamos que ya terminó

            resolve(resultado);
            // enviamos el resultado al siguiente paso

        }, 2000);
    });
}


// paso 3: mostrar resultado
function mostrar(resultado) {

    return new Promise((resolve) => {
        // usamos promesa para seguir el mismo patrón

        console.log("Mostrando...");
        // mensaje antes de mostrar

        setTimeout(() => {
            // simulamos que mostrar también tarda

            console.log("Resultado:", resultado);
            // mostramos el resultado final

            resolve();
            // terminamos todo (ya no enviamos más datos)

        }, 2000);
    });
}


// 🔥 aquí está lo importante (la cadena de promesas)

tomarDatos()
    // ejecutamos el paso 1

    .then((datos) => {
        // este .then recibe lo que mandamos con resolve(datos)

        return procesarDatos(datos);
        // llamamos al paso 2
        // IMPORTANTE: usamos "return" para seguir la cadena
    })

    .then((resultado) => {
        // este recibe el resultado del paso 2

        return mostrar(resultado);
        // llamamos al paso 3
    })

    .then(() => {
        // este se ejecuta al final de todo

        console.log("Proceso terminado");
        // mensaje final
    });