const carrito = document.querySelector('#boton')
const ListaProductos = document.querySelector("#listaProductos");
const producto = document.querySelector('#product')
const vaciarCarrito = document.querySelector('#vaciar-carrito')
const contenedorCarrito = document.querySelector("tbody")
let productosCarrito = []

cargarEventosListeners();

function cargarEventosListeners() {
    carrito.addEventListener('click', () => {
        $('#myModal').modal('show')
    })

    ListaProductos.addEventListener('click', agregarProducto)

    vaciarCarrito.addEventListener('click', () => {
        productosCarrito = []
        limpiarHTML()
    })

    document.addEventListener("DOMContentLoaded", () => {
        productosCarrito = JSON.parse(localStorage.getItem('boton')) || [];
        carritoHTML();
    })
}


function leerDatos(productoSeleccionado) {
    const infoProducto = {
        imagen: productoSeleccionado.querySelector('img').src,
        titulo: productoSeleccionado.querySelector('h4').textContent,
        precio: productoSeleccionado.querySelector('.precio').textContent.replace('$', ''),
        id: productoSeleccionado.querySelector('.agregarCarrito').getAttribute('data-id'),
        cantidad: 1
    }
    const existe = productosCarrito.some(productoSeleccionado => productoSeleccionado.id === infoProducto.id);
    console.log(infoProducto.id)
    if (existe) {
        const productos = productosCarrito.map(productoSeleccionado => {
            if (productoSeleccionado.id === infoProducto.id) {
                productoSeleccionado.cantidad++;
                productoSeleccionado.total = productoSeleccionado.precio * productoSeleccionado.cantidad;
                return productoSeleccionado;
            } else {
                return productoSeleccionado;
            }
        })
        productosCarrito = [...productos];
    } else {
        infoProducto.total = infoProducto.precio;
        productosCarrito = [...productosCarrito, infoProducto];
    }
    carritoHTML();
}

function agregarProducto(e) {
    e.preventDefault()
    if (e.target.classList.contains("agregarCarrito")) {
        const productoSeleccionado = e.target.parentElement;
        console.log(e.target.dataset.id)
        console.log(productoSeleccionado)
        leerDatos(productoSeleccionado);
    }
}

vaciarCarrito.addEventListener('click', () => {
    productosCarrito = []
    limpiarHTML()
})

function carritoHTML() {
    limpiarHTML();
    productosCarrito.forEach(productoSeleccionado => {
        const row = document.createElement("tr");
        row.innerHTML = `
                    <td>
                    <img src="${productoSeleccionado.imagen}" width="70">
                    </td>
                    <td>
                    ${productoSeleccionado.titulo}
                    </td>
                    <td>
                    $${productoSeleccionado.precio}
                    </td>
                    <td>
                    ${productoSeleccionado.cantidad}
                    </td>
                    <td>
                    $${productoSeleccionado.total}
                    </td>
                    <td>
                    <button type="button" class="btn btn-danger" onclick="eliminar('${productoSeleccionado.id}')">Borrar</button>
                    </td>
                    `;
        contenedorCarrito.appendChild(row);
    });
    sincronizarStorage()
}

function eliminar(id) {
    console.log(id)
    console.log(productosCarrito.length)
    productosCarrito = productosCarrito.filter(productoSeleccionado => productoSeleccionado.id !== id)
    console.log(productosCarrito)
    console.log(productosCarrito.length)
    carritoHTML()
}

function sincronizarStorage() {
    localStorage.setItem("boton", JSON.stringify(productosCarrito))
}

function limpiarHTML() {
    contenedorCarrito.innerHTML = ""
}