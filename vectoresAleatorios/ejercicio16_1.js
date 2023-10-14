// Función para generar un número aleatorio entre min y max (incluidos)
function generarNumeroAleatorio(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para rellenar un vector con valores aleatorios
function rellenarVector(vector, longitud) {
	for (let i = 0; i < longitud; i++) {
		vector.push(generarNumeroAleatorio(1, 100)); // Genera valores aleatorios entre 1 y 100 (puedes ajustar los rangos según tus necesidades)
	}
}

// Función para mostrar un vector en una tabla
function mostrarVectorEnTabla(vector, nombre) {
	let container = document.createElement('div');
	container.className = 'vector-container';

	let table = document.createElement('table');
	let headerRow = document.createElement('tr');
	let headerCell = document.createElement('th');
	headerCell.textContent = nombre;
	headerRow.appendChild(headerCell);
	table.appendChild(headerRow);

	for (let i = 0; i < vector.length; i++) {
		let row = document.createElement('tr');
		let cell = document.createElement('td');
		cell.textContent = vector[i];
		row.appendChild(cell);
		table.appendChild(row);
	}

	container.appendChild(table);
	document.getElementById('informacion').appendChild(container);
}

// Asignar el evento de clic al botón "Aceptar"
document.getElementById('button').addEventListener('click', function () {
	// Eliminar tablas anteriores
	document.getElementById('informacion').innerHTML = '';

	// Crear dos vectores vacíos
	let vector1 = [];
	let vector2 = [];

	// Rellenar los vectores con valores aleatorios
	rellenarVector(vector1, 5);
	rellenarVector(vector2, 5);

	// Mostrar los vectores en tablas con estilos
	mostrarVectorEnTabla(vector1, 'Vector 1');
	mostrarVectorEnTabla(vector2, 'Vector 2');
});
