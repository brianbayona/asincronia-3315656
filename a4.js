// paso 1: tomar datos
function tomarDatos(callback) {
    // esta función recibe otra función como parámetro (eso es un callback)
    // ese callback se ejecutará cuando termine este proceso

    console.log("Tomando datos...");
    // este mensaje se muestra inmediatamente al llamar la función

    setTimeout(() => {
        // setTimeout sirve para simular una tarea que tarda tiempo (asincrónica)
        // aquí estamos diciendo: ejecuta lo de adentro después de 2 segundos

        const datos = "hola";
        // simulamos que obtuvimos datos (como si vinieran de una API o base de datos)

        console.log("Datos listos");
        // este mensaje aparece después de los 2 segundos

        callback(datos);
        // aquí llamamos al callback (la siguiente función)
        // y le pasamos los datos obtenidos para continuar el proceso

    }, 2000);
    // 2000 milisegundos = 2 segundos de espera
}


// paso 2: procesar datos
function procesarDatos(datos, callback) {
    // esta función recibe los datos del paso anterior
    // y también otro callback para continuar la cadena

    console.log("Procesando...");
    // mensaje que indica que empieza el procesamiento

    setTimeout(() => {
        // otra tarea asincrónica simulada (también tarda 2 segundos)

        const resultado = datos.toUpperCase();
        // aquí transformamos los datos (los convertimos a mayúsculas)

        console.log("Procesado");
        // confirmamos que ya terminó el proceso

        callback(resultado);
        // enviamos el resultado al siguiente paso (mostrar)

    }, 2000);
    // otra espera de 2 segundos
}


// paso 3: mostrar resultado
function mostrar(resultado) {
    // esta función recibe el resultado final

    console.log("Mostrando...");
    // mensaje antes de mostrar el resultado

    setTimeout(() => {
        // simulamos que mostrar también tarda (como renderizar en pantalla)

        console.log("Resultado:", resultado);
        // mostramos el resultado final en consola

    }, 2000);
    // espera final de 2 segundos
}


// aquí empieza el encadenamiento 
tomarDatos((datos) => {
    // cuando tomarDatos termina, ejecuta este callback
    // y aquí ya tenemos acceso a "datos"

    procesarDatos(datos, (res) => {
        // cuando procesarDatos termina, ejecuta este callback
        // ahora tenemos "res" (resultado procesado)

        mostrar(res);
        // finalmente mostramos el resultado

    }); // cierre del segundo callback

}); // cierre del primer callback