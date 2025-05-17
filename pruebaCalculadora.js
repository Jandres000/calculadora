// Importar el módulo 
const readline = require('readline');

// Crear la interfaz 
const rl = readline.createInterface({
    input: process.stdin, // La entrada del usuario en la terminal
    output: process.stdout // La salida (donde imprimimos mensajes) en la terminal
});

function realizarOperacion(num1, num2, operacion) {

    if (operacion === "suma") {
        return num1 + num2; // Realiza la suma
    }
    else if (operacion === "resta") {
        return num1 - num2; // Realiza la resta
    }
    else if (operacion === "multiplicacion") {
        return num1 * num2; // Realiza la multiplicación
    }
    else if (operacion === "division") {
        if (num2 === 0) {
            return "Error: No se puede dividir por cero"; // División por cero
        } else {
            return num1 / num2; // Realiza la división
        }
    } else {
        return "Error operacion '" + operacion + "' no valida"; // Mensaje para operación no válida
    }
} 

// Función auxiliar para interactuar con readline de forma que podamos usar 'await'
function preguntar(pregunta) {
    // Creamos una Promesa que se resolverá cuando el usuario responda
    return new Promise((resolve) => {
        // rl.question muestra la 'pregunta' en la terminal y espera la entrada.
        // Cuando el usuario presiona Enter, la función (respuesta) => {...} se ejecuta.
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta); // Resolvemos la Promesa con el texto que el usuario ingresó.
        });
    });
} 

// Función principal que contiene el bucle interactivo
// La marcamos como 'async' para poder usar 'await' dentro.
async function iniciarCalculadora() {
    console.log("Bienvenido a la calculadora"); // Mensaje de bienvenida
    console.log("Escribe salir en las operaciones para abandonar la calculadora"); // Instrucción para salir

    let continuarCalculando = true; // Variable para controlar el bucle

    // Bucle while que se ejecuta mientras continuarCalculando sea verdadero
    while (continuarCalculando) {
        // Usamos 'await preguntar' para pedir el primer número y esperar la respuesta.
        // 'await' PAUSA la ejecución aquí hasta que el usuario presiona Enter.
        let entradaNumero1 = await preguntar("Introduce el primer número: ");
        // Convertimos la entrada (texto) a un número usando parseFloat.
        let num1 = parseFloat(entradaNumero1);

        // Pedimos el segundo número de la misma manera.
        let entradaNumero2 = await preguntar("Introduce el segundo número: ");
        // Convertimos la entrada a número.
        let num2 = parseFloat(entradaNumero2);

        // Pedimos la operación o la señal de salida.
        let operacionUsuario = await preguntar("Introduce la operación (suma, resta, multiplicacion, division) o 'salir': ");

        // Condición para salir del bucle 
        if (operacionUsuario === "salir") {
            continuarCalculando = false; // Cambiamos la variable de control del bucle a falso
            console.log("Saliendo de la calculadora..."); // Mensaje de despedida
            rl.close(); // Cerramos la interfaz de readline cuando terminamos.
        } else {

            // Llamamos a tu función de cálculo con los números y la operación ingresados por el usuario.
            let resultado = realizarOperacion(num1, num2, operacionUsuario);

            // Mostramos el resultado. 
            console.log('El resultado de la ' + operacionUsuario + ' entre ' + entradaNumero1 + ' y ' + entradaNumero2 + ' es: ' + resultado);

        } //

    } 

    
} 

iniciarCalculadora(); // <-- Inicio del programa
