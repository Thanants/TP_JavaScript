//1Introduccion al JavaScript

//Ejercicio 2
//Declaramos las variables y la operacion
/*let a=5;
let b=10;
let c= a+b;
//Imprimimos el resultado por consola
console.log("La suma de a y b es:",c);


//Ejercicio 3

//Declaramos y pedimos al usuario que ingrese su nombre
let nombre = prompt ("¿Cual es su nombre?");
//Mostramos el resultado por consola
console.log("Hola "+nombre+"! Bienvenido!")
*/

//2. Operaciones Logicos Adicionales
//Ejercicio 1
/*
//Declaramos las variables
let a = 14;
let b = 13;
let c = 7;
//Determinamos el mayor entre los tres usando Math.max
let mayor = Math.max(a,b,c);

//Mostramos por consola
console.log("El mayor numero es: "+mayor+" ");

//Ejercicio 2

let numero = prompt("Por favor ingrese un numero y te dire si es par o impar");

numero = Number(numero);

if(numero % 2 ==0){
    console.log("El numero ingresado "+numero+" es par");
}else{
    console.log("El numero ingresado "+numero+" es impar");
}
*/

//3. Operadores de asignacion y bucles

//Ejercicio 1
/*

let contador = 10;

while (contador >= 0) {
    console.log("Valor actual del contador:", contador);
    contador--;
}


//Ejercicio 2

// Declarar una variable para almacenar el número ingresado
let numero;

// Uso el bucle do while <=100
do {
    numero = prompt("Por favor, ingresa un número mayor a 100:");
    numero = Number(numero); 
    } while (numero <= 100);

// Mostrar el número ingresado por consola
console.log("El número ingresado es:", numero);
*/

//4. Funciones en JavaScript

//Ejercicio 1
/*
function esPar(numero) {
    // Verifica si el número es divisible por 2
    return numero % 2 === 0;
}

// Pruebas
console.log(esPar(4));  // true
console.log(esPar(7));  // false
console.log(esPar(0));  // true
console.log(esPar(-2)); // true
console.log(esPar(-3)); // false

//Ejercicio 2
function convertirCelsiusAFahrenheit(celsius) {
    // Aplica la fórmula de conversión
    let fahrenheit = celsius * 1.8 + 32;
    // Muestra el resultado en la consola
    console.log(celsius + " grados Celsius son " + fahrenheit + " grados Fahrenheit.");
}

// Pruebas
convertirCelsiusAFahrenheit(0);   // 0 grados Celsius son 32 grados Fahrenheit.
convertirCelsiusAFahrenheit(100); // 100 grados Celsius son 212 grados Fahrenheit.
convertirCelsiusAFahrenheit(25);  // 25 grados Celsius son 77 grados Fahrenheit.
convertirCelsiusAFahrenheit(-40); // -40 grados Celsius son -40 grados Fahrenheit.

*/

//5. Objetos en JavasScript
/*
//Ejercicio 1
// Definir el objeto persona
let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Mendoza",

    // Método para cambiar la ciudad
    cambiarCiudad: function(nuevaCiudad) {
        this.ciudad = nuevaCiudad;
    }
};

// Mostrar las propiedades iniciales
console.log("Propiedades iniciales:");
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);
console.log("Ciudad:", persona.ciudad);

// Cambiar la ciudad usando el método
persona.cambiarCiudad("Barcelona");

// Mostrar las propiedades actualizadas
console.log("\nPropiedades actualizadas:");
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);
console.log("Ciudad:", persona.ciudad);

//Ejercicio 2

// Definir el objeto libro
let libro = {
    titulo: "1984",
    autor: "George Orwell",
    año: 1949,

    // Método para determinar si el libro tiene más de 10 años
    esAntiguo: function() {
        let añoActual = new Date().getFullYear();
        let diferencia = añoActual - this.año;
        return diferencia > 10;
    }
};

// Mostrar información del libro
console.log("\nTítulo:", libro.titulo);
console.log("Autor:", libro.autor);
console.log("Año de publicación:", libro.año);

// Determinar si el libro es antiguo o reciente
if (libro.esAntiguo()) {
    console.log("Este libro es antiguo.");
} else {
    console.log("Este libro es reciente.");
}
*/

//6. Arrays
/*
//Ejercicio 1
// Declarar el array numeros con los números del 1 al 10
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Declarar un nuevo array para almacenar los resultados
let numerosMultiplicados = [];

// Bucle para multiplicar cada número por 2 y almacenar el resultado en el nuevo array
for (let i = 0; i < numeros.length; i++) {
    numerosMultiplicados.push(numeros[i] * 2);
}

// Mostrar el array original y el nuevo array en la consola
console.log("Array original:", numeros);
console.log("Array multiplicado por 2:", numerosMultiplicados);

//Ejercicio 2

// Crear un array vacío llamado pares
let pares = [];

// Bucle for que itera hasta 20 y agrega los primeros 10 números pares al array
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        pares.push(i);
    }
    // Detener el bucle después de agregar los primeros 10 números pares
    if (pares.length === 10) {
        break;
    }
}

// Imprimir el array pares en la consola
console.log("Array de números pares:", pares);
*/


//7. Introduccion al DOM
/*
//Ejercicio 1
// Función que se ejecuta cuando se hace clic en el botón
function cambiarColorParrafos() {
    // Selecciona todos los elementos <p> en el documento
    var parrafos = document.querySelectorAll('p');

    // Itera sobre cada elemento <p> y cambia su color de texto a azul
    parrafos.forEach(function(parrafo) {
        parrafo.style.color = 'blue';
    });
}
// Asigna la función al evento de clic del botón
document.getElementById('cambiarColorBtn').addEventListener('click', cambiarColorParrafos);

//Ejercicio 2

function mostrarAlerta() {
    // Obtiene el valor del campo de texto y lo asigna a la variable 'texto'
    var texto = document.getElementById('textoInput').value;
    
    // Muestra una alerta con el valor ingresado
    alert(texto);
}

// Asigna la función al evento de clic del botón
document.getElementById('mostrarAlertaBtn').addEventListener('click', mostrarAlerta);
*/
//8. Eventos del DOM

//Ejercicio 1
// Seleccionar todos los elementos <li> dentro de la lista con id "lista"
const elementosLi = document.querySelectorAll('#lista li');

// Recorrer cada elemento <li> y agregar un evento click
elementosLi.forEach(function(elemento) {
    elemento.addEventListener('click', function() {
        // Mostrar el texto del elemento en la consola
        console.log(elemento.textContent);
    });
});