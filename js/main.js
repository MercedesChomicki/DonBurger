// CARRITO
const carrito = document.getElementById('carrito');
const productos = document.getElementById('productos');
const listaProductos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners() {
    productos.addEventListener('click', comprarProducto);
    carrito.addEventListener('click', eliminarProducto);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    document.addEventListener('DOMContentLoaded', leerLocalStorage);
}

function comprarProducto(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const producto = e.target.parentElement.parentElement;
        leerDatosProducto(producto);
    }
}

function leerDatosProducto(producto){
    const infoProducto = {
        imagen: producto.querySelector('img').src,
        titulo: producto.querySelector('h3').textContent,
        precio: producto.querySelector('.precio').textContent,
        id: producto.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoProducto);
}

function insertarCarrito(producto) {
    const row = document.createElement('tr');
    row.innerHTML = ` 
        <td>
            <img src="${producto.imagen}" width=100>
        </td>
        <td>${producto.titulo}</td>
        <td>${producto.precio}</td>
        <td>
            <a href="#" class="borrar-producto" data-id="${producto.id}">X</a>
        </td>
    `;
    listaProductos.appendChild(row);
    guardarProductoLocalStorage(producto);
}

function eliminarProducto(e){
    e.preventDefault();

    let producto,
    productoId;
    if(e.target.classList.contains('borrar-producto')){
        e.target.parentElement.parentElement.remove();
        producto = e.target.parentElement.parentElement;
        productoId = producto.querySelector('a').getAttribute('data-id');
    }
    eliminarProductoLocalStorage(productoId);
}

function vaciarCarrito(){
    while(listaProductos.firstChild){
        listaProductos.removeChild(listaProductos.firstChild);
    }
    vaciarLocalStorage();
    return false;
}

function guardarProductoLocalStorage(producto) {
    let productos;
    productos = obtenerProductosLocalStorage();
    productos.push(producto);
    localStorage.setItem('productos', JSON.stringify(productos));
}

function obtenerProductosLocalStorage(){
    let productosLS;
    if(localStorage.getItem('productos' === null)){
        productosLS = [];
    } else {
        productosLS = JSON.parse(localStorage.getItem('productos'));
    }
    return productosLS;
}

function leerLocalStorage(){
    let productosLS;
    productosLS = obtenerProductosLocalStorage();
    productosLS.forEach(function(producto){
        const row = document.createElement('tr');
            row.innerHTML = ` 
        <td>
            <img src="${producto.imagen}" width=100>
        </td>
        <td>${producto.titulo}</td>
        <td>${producto.precio}</td>
        <td>
            <a href="#" class="borrar-producto" data-id="${producto.id}">X</a>
        </td>
        `;
        listaProductos.appendChild(row);
    })
}

function eliminarProductoLocalStorage(producto){
    let productosLS;
    productosLS = obtenerProductosLocalStorage();
    productosLS.forEach(function(productosLS, index){
        if(productosLS.id === producto) {
            productosLS.splice(index, 1)
        }
    });
    localStorage.setItem('productos', JSON.stringify(productosLS));
}

function vaciarLocalStorage(){
    localStorage.clear();
}


//DESPLIEGUE DE MENU - MENU BARS
document.querySelector(".btn_menu").addEventListener("click", toggleMenu);

function toggleMenu() {
    document.querySelector(".navigation").classList.toggle("show");
}

// CAPTCHA

const texto = document.querySelector('.actualizar-texto');
const code = document.querySelector('#code');
const input = document.querySelector('.userInput input');
const btnValidar = document.querySelector('#btn-validar');

texto.addEventListener('click', ()=>{
    code.textContent = createCaptcha();
});
window.addEventListener('load', ()=>{
    code.textContent = createCaptcha();
});
function createCaptcha() {
    let letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', 
    '3', '4', '5', '6', '7', '8', '9'];
    let a = letras[Math.floor(Math.random() * letras.length)];
    let b = letras[Math.floor(Math.random() * letras.length)];
    let c = letras[Math.floor(Math.random() * letras.length)];
    let d = letras[Math.floor(Math.random() * letras.length)];
    let e = letras[Math.floor(Math.random() * letras.length)];
    let f = letras[Math.floor(Math.random() * letras.length)];
    let g = letras[Math.floor(Math.random() * letras.length)];
    let code = a + b + c + d + e + f + g ;
    return code;
}

btnValidar.addEventListener('click', () => {
    let validar = input.value;
    if(validar == ''){
        document.getElementById("vacio").style.display = 'block';
        document.getElementById("validado").style.display = 'none';
        document.getElementById("invalido").style.display = 'none';
    }
    else if(validar === code.textContent){
        document.getElementById("vacio").style.display = 'none';
        document.getElementById("validado").style.display = 'block';
        document.getElementById("invalido").style.display = 'none';
    }
    else{
        document.getElementById("vacio").style.display = 'none';
        document.getElementById("validado").style.display = 'none';
        document.getElementById("invalido").style.display = 'block';
    }
})