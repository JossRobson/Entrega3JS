let carrito = []; // Array para almacenar los productos del carrito
let total = 0; // Variable para almacenar el total de la compra

// Función para agregar un producto al carrito
function agregarProducto(nombre, precio) {
  // Crear un objeto con los datos del producto
  const producto = {
    nombre: nombre,
    precio: precio
  };

  // Agregar producto al array carrito
  carrito.push(producto);

  // Actualizar la lista de productos del carrito
  const listaCarrito = document.getElementById("lista-carrito");
  const elemento = document.createElement("li");
  elemento.innerText = `${nombre} - $${precio}`;
  listaCarrito.appendChild(elemento);

  // Actualizar el total del carrito
  total += precio;
  const totalCarrito = document.getElementById("total-carrito");
  totalCarrito.innerText = total.toFixed(2);
}

function finalizarCompra() {
    var total = document.getElementById("total-carrito").innerText;
    var fecha = new Date().toLocaleDateString();
    localStorage.setItem("compra", "Total: " + total + " - Fecha: " + fecha);
    alert("Gracias por su compra. Su pedido ha sido procesado.\n\n" + "Total: " + total + "\nFecha: " + fecha);
    location.reload();
}
