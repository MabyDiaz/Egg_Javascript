/* 17. Realizar un programa que elimine los dos últimos elementos de un array. Mostrar el 
resultado*/

// Función para generar un array aleatorio con longitud y elementos aleatorios
function generarArrayAleatorio() {
	const length = Math.floor(Math.random() * 6) + 5; // Longitud aleatoria entre 5 y 10 (ambos inclusive)
	const array = [];

	for (let i = 0; i < length; i++) {
		array.push(Math.floor(Math.random() * 100) + 1); // Números aleatorios entre 1 y 100
	}

	return array;
}

// Función para mostrar el array sin los dos últimos elementos
function mostrarArraySinUltimosDos(array) {
	const miArraySinUltimosDos = array.slice(0, -2);
	const arraySinUltimosDosElement = document.getElementById('array-sin-ultimos-dos');
	arraySinUltimosDosElement.textContent = '[' + miArraySinUltimosDos.join(', ') + ']';
}

// Event listener para el botón "Mostrar Array sin últimos dos elementos"
document.getElementById('mostrar-btn').addEventListener('click', () => {
	const miArrayInicial = generarArrayAleatorio();
	const arrayInicialElement = document.getElementById('array-inicial');
	arrayInicialElement.textContent = JSON.stringify(miArrayInicial);

	mostrarArraySinUltimosDos(miArrayInicial);
});

// EN LA CONSOLA
// /*Primer método */
// var arrayEntero1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// arrayEntero1.splice(-2);
// console.log(arrayEntero1);

// /*Segundo Método*/
// var arrayEntero2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < 2; i++) {
//     arrayEntero2.pop();
// }

// console.log(arrayEntero2);
