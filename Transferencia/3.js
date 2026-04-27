function validarCorreo(correo, t) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      correo.includes("@") ? res("ok") : rej("correo malo");
    }, t);
  });
}

function validarDocumento(doc, t) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      doc.length >= 5 ? res("ok") : rej("doc malo");
    }, t);
  });
}

function validarUsuario(nombre, t) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      nombre !== "admin" ? res("ok") : rej("usuario ocupado");
    }, t);
  });
}

async function validarForm(datos, tiempos) {
  console.time("tiempo");

  const p1 = validarCorreo(datos.correo, tiempos.correo)
    .then(r => ({ ok: true, msg: r }))
    .catch(e => ({ ok: false, msg: e }));

  const p2 = validarDocumento(datos.documento, tiempos.documento)
    .then(r => ({ ok: true, msg: r }))
    .catch(e => ({ ok: false, msg: e }));

  const p3 = validarUsuario(datos.nombre, tiempos.usuario)
    .then(r => ({ ok: true, msg: r }))
    .catch(e => ({ ok: false, msg: e }));

  const resultados = await Promise.all([p1, p2, p3]);

  const estado = {
    correo: resultados[0].msg,
    documento: resultados[1].msg,
    usuario: resultados[2].msg
  };

  const todoBien = resultados.every(r => r.ok);

  console.timeEnd("tiempo");

  console.log("Estado:", estado);
  console.log("Resultado:", todoBien ? "Formulario validado" : "Validación fallida");
}

// prueba
validarForm(
  { correo: "test@gmail.com", documento: "12345", nombre: "admin" },
  { correo: 2000, documento: 1500, usuario: 1000 }
);