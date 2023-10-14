/* 19. Realizar un programa en Java donde se creen dos arreglos: el primero será un arreglo A 
de 50 números reales, y el segundo B, un arreglo de 20 números, también reales. El 
programa deberá inicializar el arreglo A con números aleatorios y mostrarlo por pantalla. 
Luego, el arreglo A se debe ordenar de menor a mayor y copiar los primeros 10 números 
ordenados al arreglo B de 20 elementos, y rellenar los 10 últimos elementos con el valor 
0.5. Mostrar los dos arreglos resultantes: el ordenado de 50 elementos y el combinado 
de 20. */

const generarArreglosBtn = document.getElementById('generar-arreglos-btn');
const resultadosDiv = document.getElementById('resultados');

generarArreglosBtn.addEventListener('click', generarYMostrarArreglos);

function generarYMostrarArreglos() {
	const arregloA = [];
	const arregloB = [];

	// Generar arreglo A
	for (let i = 0; i < 50; i++) {
		const numero = Math.random() * 100; // Números aleatorios entre 0 y 100
		arregloA.push(numero.toFixed(2)); // Redondear a 2 decimales
	}

	// Ordenar arreglo A de menor a mayor
	const arregloAOrdenado = arregloA.slice().sort((a, b) => a - b);

	// Copiar los primeros 10 números ordenados al arreglo B
	arregloB.push(...arregloAOrdenado.slice(0, 10));

	// Rellenar los 10 últimos elementos de arreglo B con 0.5
	for (let i = 0; i < 10; i++) {
		arregloB.push(0.5);
	}

	// Mostrar resultados en la pantalla
	resultadosDiv.innerHTML = `
        <h2>Arreglo A (Original):</h2>
        <p>${arregloA.join(', ')}</p>
        <h2>Arreglo A (Ordenado):</h2>
        <p>${arregloAOrdenado.join(', ')}</p>
        <h2>Arreglo B (Combinado):</h2>
        <p>${arregloB.join(', ')}</p>
    `;
}

// Shuffle para desordenar un array

let arr = [0, 2, 3, 4, 7, 6, 7, 22, 9, 10];

console.log(arr);

var arrR = shuffle(arr);
function shuffle(array) {
	let shuffledArray = [];
	let usedIndexes = [];

	let i = 0;
	while (i < array.length) {
		let randomNumber = Math.floor(Math.random() * array.length);
		if (!usedIndexes.includes(randomNumber)) {
			shuffledArray.push(array[randomNumber]);
			usedIndexes.push(randomNumber);
			i++;
		}
	}
	return shuffledArray;
}

console.log(arrR);
