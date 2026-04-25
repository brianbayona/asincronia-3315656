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

const generarRecomendaciones = async (id) => {
    console.log(`[3 - Opcional] Generando recomendaciones para ${id}...`);
    await delay(2500); // Tarda más, pero no bloquea
    console.log(`[3 - Finalizado] Recomendaciones listas para ${id}.`);
    return ["Producto A", "Producto B"];
};