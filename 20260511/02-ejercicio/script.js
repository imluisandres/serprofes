//1. Creamos nuestra "caja grande" (Array)
let carrito = ["🍏 Manzana","🍌 Banana"];
//2.Imprimir el carrito nada más al cargar la página
document.getElementById('pantalla-cesta').textContent = carrito.join(" - ");