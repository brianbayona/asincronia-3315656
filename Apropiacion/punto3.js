console.log("INICIO");

function procesarPedido(callback) {
  console.log("Pedido recibido..., preparando comida ");

  setTimeout(() => {
    console.log("Pedido listo para entregar");
    callback("Pedido entregado ");
  }, 3000);
}

procesarPedido((mensajeFinal) => {
  console.log("CALLBACK:", mensajeFinal);
});

console.log("FIN");