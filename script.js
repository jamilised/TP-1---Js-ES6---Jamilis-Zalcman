// Ejercicio 1
function formatearNombre(nombre) {
    nombre = nombre.toLowerCase();
    return nombre.charAt(0).toUpperCase() + nombre.slice(1);
}

//Ejercicio 2
function contarLetras(texto) {
    texto = texto.replaceAll(" ", "");
    return texto.length;
}

// Ejercicio 3
function maximo(a, b, c) {
    let mayor = a;

    if (b > mayor) {
        mayor = b;
    }

    if (c > mayor) {
        mayor = c;
    }

    return mayor;
}

// Ejercicio 4
function validarPassword(password) {
    if (password.length < 8) {
        return false;
    }

    for (let i = 0; i < password.length; i++) {
        if (!isNaN(parseInt(password[i]))) {
            return true;
        }
    }

    return false;
}

// Ejercicio 5
function sumarArray(numeros) {
    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }

    return suma;
}

// Ejercicio 6
function mayorNumero(numeros) {
    let numeroMayor = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeroMayor < numeros[i]) {
            numeroMayor = numeros[i]
        }
    }
    return numeroMayor;
}

// Ejercicio 7
function obtenerPares(numeros) {
    let pares = [];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        }
    }

    return pares;
}

// Ejercicio 8
const usuario = {
    nombre: "Ana",
    edad: 20,
    activo: false
}

function descripcionUsuario(usuario) {
    let descripcion = usuario.nombre + " tiene " + usuario.edad + " años";
    return descripcion;
}

// Ejercicio 9
function activarUsuario(usuario) {
    usuario.activo = true;
}

// Ejercicio 10
const productos = [
    { nombre: "Mouse", precio: 10 },
    { nombre: "Teclado", precio: 25 },
    { nombre: "Monitor", precio: 200 }
]

function precioTotal(productos) {
    let total = 0;

    for (let i = 0; i < productos.length; i++) {
        total += productos[i].precio;
    }

    return total;
}

// Ejercicio 11
const usuarios = [
    { nombre: "Ana", edad: 17 },
    { nombre: "Juan", edad: 25 },
    { nombre: "Pedro", edad: 30 }
]

function obtenerNombres(usuarios) {
    let nombres = usuarios.map(function (usuario) {
        return usuario.nombre;
    });
    return nombres;
}

// Ejercicio 12
function usuariosMayores(usuarios) {
    let mayores = usuarios.filter(function (usuario) {
        return usuario.edad >= 18;
    });
    return mayores;
}

// Ejercicio 13
function sumaEdades(usuarios) {
  let total = usuarios.reduce((acum, usuario) => acum + usuario.edad, 0);
  return total;
}
// Ejercicio 14
const producto = {
nombre:"Notebook",
precio:1000
}
function Destructuring(){
return { nombre, precio } = producto;
}

// Ejercicio 15
function Spreadoperator(nuevoStock) {
  const productoConStock = {
    ...producto,
    stock: nuevoStock
  };

  return productoConStock;
}


// Ejercicio 16
function buscarProducto(productos, nombre)
{
    let producto="";
    for(let i = 0; i < productos.length; i++)
    {
        if (productos[i].nombre == nombre)
        {
            producto = productos[i]
        }
    }
    return producto
}

// Ejercicio 17
function productosCaros(productos) {
  let caros = productos.filter(producto => producto.precio > 50);
  return caros;
}

// Ejercicio 18
function promedio(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma / numeros.length;
}
