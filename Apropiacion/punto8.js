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

// ORDENES EN SERIE

const ordenes = [
  { id: 1, cliente: "Ana" },
  { id: 2, cliente: "Luis" }
];

function delay(ms) {
  return new Promise(res => setTimeout(res, ms));
}

async function verificar(o) {
  await delay(1500);
  console.log(`Orden ${o.id} verificada`);
}

async function procesar() {
  await delay(2000);
  console.log("Procesada");
}

async function registrar() {
  await delay(1000);
  console.log("Registrada");
}

async function notificar() {
  await delay(500);
  console.log("Notificada");
}

async function serie() {
  for (let o of ordenes) {
    await verificar(o);
    await procesar();
    await registrar();
    await notificar();
  }
}

serie();

// PARALELO

async function procesoOrden(o) {
  await verificar(o);
  await procesar();
  await registrar();
  await notificar();
}

async function paralelo() {
  await Promise.all(ordenes.map(procesoOrden));
}

paralelo();

// USUARIOS

const usuarios = [101, 102, 103];

function getUser(id) {
  return new Promise(res => {
    setTimeout(() => res({ id, nombre: `Usuario ${id}` }), 1200);
  });
}

function getSeguridad() {
  return new Promise(res => {
    setTimeout(() => res("OK"), 800);
  });
}

function getRoles() {
  return new Promise(res => {
    setTimeout(() => res(["admin"]), 2000);
  });
}

async function procesarUsuario(id) {
  const user = await getUser(id);
  const seg = await getSeguridad();
  const rol = await getRoles();

  return {
    ...user,
    seguridad: seg,
    roles: rol
  };
}

async function usuariosRun() {
  const res = await Promise.all(usuarios.map(procesarUsuario));
  console.log(res);
}

usuariosRun();