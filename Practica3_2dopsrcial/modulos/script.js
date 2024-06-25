function invertirCadena(cadena) {
    return cadena.split('').reverse().join('');
}

function esPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

function eliminarDuplicados(arr) {
    return [...new Set(arr)];
}

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

function contarVocales(cadena) {
    let contador = 0;
    let vocales = ['a', 'e', 'i', 'o', 'u'];
    for (let char of cadena.toLowerCase()) {
        if (vocales.includes(char)) contador++;
    }
    return contador;
}

function sumarNumeros(arr) {
    return arr.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}

function encontrarMaximo(arr) {
    return Math.max(...arr);
}

function mostrarInvertirCadena() {
    const cadena = document.getElementById("cadena-input").value;
    document.getElementById("invertir-cadena").innerText = "Cadena invertida: " + invertirCadena(cadena);
}

function mostrarEsPrimo() {
    const numero = parseInt(document.getElementById("numero-input").value);
    document.getElementById("numero-primo").innerText = "Es " + numero + " primo? " + (esPrimo(numero) ? "Sí" : "No");
}

function mostrarEliminarDuplicados() {
    const arreglo = document.getElementById("arreglo-duplicados-input").value.split(',').map(Number);
    document.getElementById("eliminar-duplicados").innerText = "Arreglo sin duplicados: " + eliminarDuplicados(arreglo);
}

function mostrarFactorial() {
    const numero = parseInt(document.getElementById("factorial-input").value);
    document.getElementById("factorial").innerText = "Factorial de " + numero + ": " + factorial(numero);
}

function mostrarContarVocales() {
    const cadena = document.getElementById("cadena-vocales-input").value;
    document.getElementById("contar-vocales").innerText = "Número de vocales en '" + cadena + "': " + contarVocales(cadena);
}

function mostrarSumarNumeros() {
    const arreglo = document.getElementById("arreglo-suma-input").value.split(',').map(Number);
    document.getElementById("sumar-numeros").innerText = "Suma de [" + arreglo + "]: " + sumarNumeros(arreglo);
}

function mostrarEncontrarMaximo() {
    const arreglo = document.getElementById("arreglo-maximo-input").value.split(',').map(Number);
    document.getElementById("encontrar-maximo").innerText = "Máximo en [" + arreglo + "]: " + encontrarMaximo(arreglo);
}
