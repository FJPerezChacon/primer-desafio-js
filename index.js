precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

const cantidadSpan = document.querySelector(".cantidad");
function actualizarTotal() {
    const cantidad = Number(cantidadSpan.innerHTML);
    const total = precio * cantidad;
  
    const valorTotalSpan = document.querySelector(".valor-total");
    valorTotalSpan.innerHTML = total;
  }
  const botones = document.querySelectorAll("button");

for (const boton of botones) {
  boton.addEventListener("click", actualizarTotal);
}