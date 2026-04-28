// ====================
// EJERCICIO 1 - CALLBACKS
// ====================

function buscarUsuario(cb) {
  setTimeout(() => {
    console.log("Usuario encontrado");
    cb();
  }, 1000);
}

function permisos(cb) {
  setTimeout(() => {
    console.log("Permisos listos");
    cb();
  }, 2000);
}

function reporte() {
  setTimeout(() => {
    console.log("Reporte generado");
  }, 1000);
}

function flujo() {
  buscarUsuario(() => {
    permisos(() => {
      reporte();
    });
  });
}

flujo();