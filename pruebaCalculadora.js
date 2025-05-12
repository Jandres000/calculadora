let numero1 = 10;
let numero2= 20;

function realizarOperacion (num1, num2, operacion) {
    if (operacion === "suma") {
        return num1 + num2;
     }   
    else if (operacion === "resta") {
        return num1 - num2;
    }
    else if (operacion === "multiplicacion") {
        return num1 * num2;
    }
    else if (operacion === "division") {
        if (num2 === 0) {
            return "Error: No se puede dividir por cero";
        } else {
            return num1 / num2;
        }
        }
    else {
        return "Error operacion '" + operacion + "' no valida";
    }
}