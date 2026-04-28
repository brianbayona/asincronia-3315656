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

// PROMESAS

function buscarUsuarioP() {
  return new Promise(res => {
    setTimeout(() => {
      console.log("Usuario encontrado (promesa)");
      res();
    }, 1000);
  });
}

function permisosP() {
  return new Promise(res => {
    setTimeout(() => {
      console.log("Permisos listos (promesa)");
      res();
    }, 2000);
  });
}

function reporteP() {
  return new Promise(res => {
    setTimeout(() => {
      console.log("Reporte generado (promesa)");
      res();
    }, 1000);
  });
}

buscarUsuarioP()
  .then(permisosP)
  .then(reporteP);

// ASYNC / AWAIT

async function flujoAsync() {
  await buscarUsuarioP();
  await permisosP();
  await reporteP();
}

flujoAsync();