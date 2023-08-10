
//simulador venta de entradas para una fiesta para mayores de 18 años




/* INICIO DE BIENVENIDO */
alert("Bienvenido a Clarifest");
alert("Evento valido para mayores de 18 años")

let usuario = prompt("Ingrese su Nombre");
let contrasenia = prompt("Ingrese una contraseña");
let edad = parseInt(prompt("Ingrese su edad"));

while (usuario == "") {
  alert("El nombre no puede ser vacío");
  usuario = prompt("Ingrese su Nombre");
}

while (contrasenia == "") {
  alert("La contraseña no puede ser vacía");
  contrasenia = prompt("Ingrese una contraseña");
}

if (edad >= 0 && edad <= 17) {
    alert("No cumple con la edad minima para entrar a la fiesta");
    edad = prompt("Ingrese una edad valida")
  }


if (usuario == "Emmanuel" || usuario == "emmanuel") {
  alert("Binvenida Emmanuel, te estabamos esperando!. ");
}

// DEFINICIÓN DEL CATALOGO DE ENTRADAS:

const catalogoCompleto = [
    { id: 1, nombre: "Verde", precio: 5000 },
    { id: 2, nombre: "Azul", precio: 7000 },
    { id: 3, nombre: "Blanco", precio: 8000 },
    { id: 4, nombre: "Rabavip", precio: 9000 },
  ];
  
  alert("Catálogo Completo:");
  
  // Mostrar Catálogo
  const itemsCatalogo = catalogoCompleto.map(producto => producto.nombre).join('\n');
  alert(itemsCatalogo);
  
  // Filtrar Productos por Precio
  const montoFiltro = parseInt(prompt("Ingrese 1 para ver los precios o 0 para continuar sin ver los precios"));
  
  if (montoFiltro !== 0) {
    const productosFiltrados = catalogoCompleto.filter(producto => producto.precio > montoFiltro);
    
    if (productosFiltrados.length > 0) {
      alert("Productos Filtrados:");
      for (const producto of productosFiltrados) {
        alert(`Producto: ${producto.nombre}\nPrecio: ${producto.precio}`);
      }
    } else {
      alert("No se encontraron productos que cumplan con el filtro.");
    }
  } else {
    alert("No se filtrará por precio.");
  }
  
  // Seleccionar un Producto
  function seleccionarProducto() {
    const numeroProducto = parseInt(prompt(`Ingrese el número del producto que desea comprar o 0 para finalizar:
  1 - Verde;
  2 - Azul;
  3 - Blanco;
  4 - Rabavip;
  `));
    return numeroProducto;
  }
  
  // Crear el Carrito
  const carrito = [];
  
  let producto1;
  do {
    producto1 = seleccionarProducto();
    if (producto1 !== 0) {
      const productoSeleccionado = catalogoCompleto.find(p => p.id === producto1);
      if (productoSeleccionado) {
        carrito.push(productoSeleccionado);
      } else {
        alert("Producto no válido. Por favor, intente nuevamente.");
      }
    }
  } while (producto1 !== 0 && isNaN(producto1));
  
  // Mostrar el Carrito
  if (carrito.length > 0) {
    alert("Carrito Seleccionado:");
    for (const productoCarrito of carrito) {
      alert(productoCarrito.nombre);
    }
  } else {
    alert("El carrito está vacío.");
  }
  
  // Calcular el Subtotal
  const subTotal = carrito.reduce((acumulado, producto) => acumulado + producto.precio, 0);
  
  // Calcular el Monto Total
  function montoTotal(monto) {
    return (monto * 1.21).toFixed(2); // Formato con dos decimales
  }
  
  const montoTotalcarrito = montoTotal(subTotal);
  
  alert("Subtotal:");
  alert(subTotal);
  
  alert("Monto Total con IVA:");
  alert(montoTotalcarrito);