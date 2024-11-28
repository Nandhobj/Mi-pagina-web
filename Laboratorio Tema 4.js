// Paso 1: Declaración de Variables
let num1 = 10; // Primer número
let num2 = 5;  // Segundo número

// Paso 2: Función para realizar operaciones
function realizarOperacion(num1, num2, operacion) {
    let resultado;
    
    // Validación de operación
    if (operacion === "suma") {
        resultado = num1 + num2;
    } else if (operacion === "resta") {
        resultado = num1 - num2;
    } else if (operacion === "multiplicacion") {
        resultado = num1 * num2;
    } else if (operacion === "division") {
        if (num2 === 0) {
            resultado = "Error: No se puede dividir entre cero.";
        } else {
            resultado = num1 / num2;
        }
    } else {
        // Si la operación no es válida
        resultado = "Error: Operación no válida. Seleccione una operación válida (suma, resta, multiplicacion o division).";
    }

    return resultado;
}

// Función para mostrar el resultado en el HTML
function mostrarResultado() {
    let operacionSeleccionada = document.getElementById("operacion").value;
    let resultado = realizarOperacion(num1, num2, operacionSeleccionada);
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

// Paso 4: Bucle para realizar múltiples operaciones
function realizarOperaciones() {
    let continuar = true; // Variable para controlar el bucle
    while (continuar) {
        // Solicitar números y operación
        num1 = parseFloat(prompt("Ingresa el primer número:"));
        num2 = parseFloat(prompt("Ingresa el segundo número:"));
        let operacion = prompt("¿Qué operación deseas realizar? (suma, resta, multiplicacion, division)");

        // Si el usuario ingresa "salir", termina el bucle
        if (operacion.toLowerCase() === "salir") {
            alert("Gracias por usar la calculadora. ¡Hasta luego!");
            continuar = false; // Termina el bucle
            break;
        }

        // Realizar la operación y mostrar el resultado
        let resultado = realizarOperacion(num1, num2, operacion);
        alert("Resultado: " + resultado);

        // Preguntar si desea realizar otra operación
        let respuesta = prompt("¿Deseas realizar otra operación? (si/no)").toLowerCase();
        if (respuesta !== "si") {
            continuar = false; // Salir del bucle si el usuario responde "no"
            alert("Gracias por usar la calculadora. ¡Hasta luego!");
        }
    }
}

// Llamar a la función realizarOperaciones cuando la página esté lista
realizarOperaciones();
