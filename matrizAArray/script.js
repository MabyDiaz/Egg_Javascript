// Matriz original
const matriz = [[3], [6], [9], [12], [15]];

// Mostrar la matriz original en el DOM
const originalMatrixElement = document.getElementById('originalMatrix');
const formattedOriginalMatrix = matriz.map((subarray) => `[${subarray}]`).join(', ');
originalMatrixElement.textContent = `[${formattedOriginalMatrix}]`;

// Agregar evento al botón para transformar la matriz
const transformButton = document.getElementById('transformButton');
transformButton.addEventListener('click', () => {
	// Transformación de la matriz a un array
	const transformedArray = matriz.map((subarray) => subarray[0] + 3);

	// Mostrar el array transformado en el DOM
	const transformedArrayElement = document.getElementById('transformedArray');
	transformedArrayElement.textContent = `[${transformedArray.join(', ')}]`;
});
