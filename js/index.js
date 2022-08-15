function datosProdutos(
  precioNetoProducto,
  porcentajeImpuestos,
  porcentajeGanarcia,
) {
  let precioCF = precioNetoProducto*((porcentajeImpuestos/100)+(1))*((porcentajeGanarcia/100)+1) ;
  alert(precioCF);
}
let precioCF = datosProdutos (+prompt("Ingrese el precio neto del producto"),+prompt("Ingrese el porcentaje de impuestos a pagar por el producto"),+prompt("Ingrese el porcentaje de ganancia que quiere obtener con el producto"));

// datosProdutos (+prompt("Ingrese el precio neto del producto"),+prompt("Ingrese el porcentaje de impuestos a pagar por el producto"),+prompt("Ingrese el porcentaje de ganancia que quiere obtener con el producto"));

function producto(nombreProducto, precioVenta, stockProducto, stockVendido) {
    this.nombreProducto = nombreProducto;
    this.precioVenta = precioVenta;
    this.stockProducto = stockProducto;
    this.stockVendido = stockVendido; 
}

const producto1 = new producto ("Latex 1L", precioCF, 10, 5)

console.log (producto1);

let listaProductosFaltantes = [];
let cantidadProductosFaltantes = +prompt("Ingresa la cantidad de productos faltantes.");

do {
  let entrada = prompt("Ingresa los nombres de los productos faltantes.") ;
  listaProductosFaltantes.push(entrada.toUpperCase());
  console.log(listaProductosFaltantes.length);
}while(listaProductosFaltantes.length != cantidadProductosFaltantes);

console.log(listaProductosFaltantes.join("\n"));

const produtosCargados = [
  {nombre: `Latex 1L`, precio: `precio`},
  {nombre: ``, precio: ``},
]

const buscarNombre = produtosCargados.find((el) => el.nombre === "Latex 1L")
const buscarPrecio = produtosCargados.find((el) => el.precio === "400")

console.log(buscarNombre) ;

console.log(buscarPrecio) ;

let price = document.querySelector("#price");
let output = document.querySelector(".price-output");

  output.textContent = price.value;

  price.addEventListener("input", function () {
    output.textContent = price.value;
    document.querySelector("#salidaPrecio").innerText = salidaPrecios.innerText;
  });

  let salidaPrecios = output;


