// Simulador de tiempos aleatorios para procesos
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms)); // Función que retorna una promesa que se resuelve después de un tiempo determinado (ms)

// Funciones de proceso
const validarStock = async (id) => { // Función asíncrona que simula la validación de stock para un producto dado su ID
    console.log(`[1] Validando stock para ${id}...`); // Imprime un mensaje indicando que se está validando el stock para el producto con el ID proporcionado
    await delay(1500); // 1.5 segundos de espera para simular el proceso de validación de stock
    return true; // Retorna true para indicar que el stock está disponible (en un caso real, aquí se haría una consulta a una base de datos o API)
};