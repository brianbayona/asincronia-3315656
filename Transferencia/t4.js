// Simulador de tiempos aleatorios para procesos
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms)); // Función que retorna una promesa que se resuelve después de un tiempo determinado (ms)

// Funciones de proceso
const validarStock = async (id) => { // Función asíncrona que simula la validación de stock para un producto dado su ID
    console.log(`[1] Validando stock para ${id}...`); // Imprime un mensaje indicando que se está validando el stock para el producto con el ID proporcionado
    await delay(1500); // 1.5 segundos de espera para simular el proceso de validación de stock
    return true; // Retorna true para indicar que el stock está disponible (en un caso real, aquí se haría una consulta a una base de datos o API)
};
const calcularCostos = async (id) => { // Función asíncrona que simula el cálculo de costos para un producto dado su ID
    console.log(`[2] Calculando costos para ${id}...`); // Imprime un mensaje indicando que se está calculando el costo para el producto con el ID proporcionado
    await delay(1000); // 1 segundo de espera para simular el proceso de cálculo de costos
    return { total: 100 }; // Retorna un objeto con el costo total (en un caso real, aquí se haría una consulta a una base de datos o API)
};

const generarRecomendaciones = async (id) => { // Función asíncrona que simula la generación de recomendaciones para un producto dado su ID
    console.log(`[3 - Opcional] Generando recomendaciones para ${id}...`); // Imprime un mensaje indicando que se están generando recomendaciones para el producto con el ID proporcionado
    await delay(2500); // Tarda más, pero no bloquea el proceso principal, ya que es opcional
    console.log(`[3 - Finalizado] Recomendaciones listas para ${id}.`); // Imprime un mensaje indicando que las recomendaciones están listas para el producto con el ID proporcionado
    return ["Producto A", "Producto B"]; // Retorna un array con las recomendaciones (en un caso real, aquí se haría una consulta a una base de datos o API)
};
const enviarFactura = async (id) => { /// Función asíncrona que simula el envío de una factura electrónica para un producto dado su ID
    console.log(`[4] Enviando factura electrónica para ${id}...`); // Imprime un mensaje indicando que se está enviando la factura electrónica para el producto con el ID proporcionado
    await delay(800); // 0.8 segundos de espera para simular el proceso de envío de la factura electrónica
    return "Factura #12345 enviada"; // Retorna un mensaje indicando que la factura ha sido enviada (en un caso real, aquí se haría una consulta a una base de datos o API)
};
async function procesarPedido(id) {
    console.log(`=== Inicio de Pedido: ${id} ===`);
    
    // 1. Lanzamos la tarea opcional en paralelo (Sin await)
    // Usamos .catch para que un error en recomendaciones no rompa todo el flujo
    generarRecomendaciones(id).catch(err => console.error("Error en recomendaciones:", err));

    try {
        // 2. Procesos obligatorios secuenciales
        const stockOk = await validarStock(id); /// Validamos el stock para el producto con el ID proporcionado
        const costos = await calcularCostos(id); /// Calculamos los costos para el producto con el ID proporcionado

        // 3. Paso obligatorio dependiente de los anteriores
        const resultadoFactura = await enviarFactura(id); /// Enviamos la factura electrónica para el producto con el ID proporcionado, después de validar el stock y calcular los costos
        
        console.log(`=== Resultado Final para ${id}: ${resultadoFactura} ===`);// Imprime el resultado final del proceso para el producto con el ID proporcionado, que incluye el mensaje de que la factura ha sido enviada
    } catch (error) { // Si ocurre algún error en cualquiera de los pasos obligatorios, se captura aquí
        console.error(`=== Error en el pedido ${id}: ${error} ===`);// Imprime un mensaje de error si ocurre algún problema durante el proceso del pedido para el producto con el ID proporcionado
    }
}

// Ejecución
procesarPedido("PED-001"); // Llamamos a la función principal para procesar el pedido, pasando un ID de producto como argumento (en este caso, "PED-001")