const { performance } = require("perf_hooks");

// Simulador de servicios
function simularServicio(nombre, tiempo, debeFallar = false, data = {}) {
  return new Promise((resolve, reject) => {
    const inicio = performance.now();

    setTimeout(() => {
      const fin = performance.now();
      const duracion = (fin - inicio).toFixed(2);

      if (debeFallar) {
        reject({
          servicio: nombre,
          error: `${nombre} falló`,
          tiempo: duracion
        });
      } else {
        resolve({
          servicio: nombre,
          data,
          tiempo: duracion
        });
      }
    }, tiempo);
  });
}

// Función principal
async function integrarServicios(idUsuario, tiempos, fallos) {
  const inicioTotal = performance.now();
  const ordenFinalizacion = [];
  const resultados = {};

  try {
    // A, B y C en paralelo
    const promesas = [
      simularServicio("A", tiempos.A, fallos.A, { disponible: true }),
      simularServicio("B", tiempos.B, fallos.B, { usuario: idUsuario }),
      simularServicio("C", tiempos.C, fallos.C, { historial: ["login", "compra"] })
    ];

    const resultadosABC = await Promise.allSettled(promesas);

    resultadosABC.forEach(res => {
      if (res.status === "fulfilled") {
        resultados[res.value.servicio] = res.value;
        ordenFinalizacion.push(res.value.servicio);
      } else {
        resultados[res.reason.servicio] = res.reason;
        ordenFinalizacion.push(res.reason.servicio);
      }
    });

    // Validar si B y C funcionaron para ejecutar D
    if (
      resultados.B?.data &&
      resultados.C?.data
    ) {
      try {
        const D = await simularServicio(
          "D",
          tiempos.D,
          fallos.D,
          { recomendaciones: ["producto1", "producto2"] }
        );
        resultados.D = D;
        ordenFinalizacion.push("D");
      } catch (err) {
        resultados.D = err;
        ordenFinalizacion.push("D");
      }
    } else {
      resultados.D = {
        servicio: "D",
        error: "No se ejecutó por fallo en B o C"
      };
    }

    const finTotal = performance.now();

    return {
      resultados,
      ordenFinalizacion,
      tiempoTotal: (finTotal - inicioTotal).toFixed(2) + "ms",
      estado: "Integración completada"
    };

  } catch (error) {
    return {
      errorGeneral: error,
      estado: "Error global en la integración"
    };
  }
}

// 🔹 Ejecución
(async () => {
  const respuesta = await integrarServicios(
    123,
    { A: 1000, B: 1500, C: 1200, D: 800 },
    { A: false, B: false, C: false, D: false }
  );

  console.log("Resultado final:", respuesta);
})();