//1Introduccion al JavaScript

//Ejercicio 2
//Declaramos las variables y la operacion
/*let a=5;
let b=10;
let c= a+b;
//Imprimimos el resultado por consola
console.log("La suma de a y b es:",c);
*/

//Ejercicio 3
/*
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
*/
//Ejercicio 2
/*
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
*/

//Ejercicio 2
/*
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