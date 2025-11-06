// Laboratorio:

// Ejercicio 01 - Escribe una función que extraiga (m) números enteros
// del 0 al n. Pasa los parámetros m y n, además de dos indicadores (flags)
// a la función:

/*
    - El primero determina si los números extraídos pueden repetirse.
    - El segundo indica si el arreglo de números devuelto debe estar
      ordenado.

    Utiliza la clase Set.
*/

function getRandomSet(m, n, repetirse, orden) {
    let resultado;

    if (repetirse) {
        // Permitir repeticiones: usamos un array
        resultado = [];
        for (let i = 0; i < m; i++) {
            const numeroAleatorio = Math.floor(Math.random() * (n + 1));
            resultado.push(numeroAleatorio);
        }
    } else {
        // Sin repeticiones: usamos un Set
        const numeros = new Set();
        while (numeros.size < m && numeros.size <= n + 1) {
            const numeroAleatorio = Math.floor(Math.random() * (n + 1));
            numeros.add(numeroAleatorio);
        }
        resultado = Array.from(numeros);
    }

    if (orden) {
        resultado.sort((a, b) => a - b);
    }

    return resultado;
}


// Prueba tu solución usando el siguiente código:

console.log(getRandomSet(10, 20, false, false));
console.log(getRandomSet(10, 20, false, true));
console.log(getRandomSet(10, 20, true, false));
console.log(getRandomSet(10, 20, true, true));