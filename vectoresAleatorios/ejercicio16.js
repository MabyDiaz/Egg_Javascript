// 16. Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios
// y los muestre por pantalla.

// let arreglo1 = [];
// let arreglo2 = [];

// function ejecutar() {
// 	llenarArreglo(arreglo1);
// 	llenarArreglo(arreglo2);

// 	mostrarVectores();
// }

// function llenarArreglo(arr) {
// 	arr.length = 0; // Reinicia el arreglo para evitar duplicados
// 	for (let i = 0; i < 5; i++) {
// 		arr.push(Math.floor(Math.random() * 100)); // Genera valores aleatorios entre 0 y 99
// 	}
// }

// function mostrarVectores() {
// 	let vectorContainer = document.getElementById('informacion');
// 	vectorContainer.innerHTML = ''; // Vaciar el contenido del contenedor

// 	let vectorDiv = document.createElement('div');
// 	vectorDiv.innerHTML = `<br>Vector 1: [${arreglo1.join(', ')}]<br><br>Vector 2: [${arreglo2.join(
// 		', '
// 	)}]`;
// 	vectorContainer.appendChild(vectorDiv);
// }

// document.getElementById('button').onclick = ejecutar;

//  con query selector

let arreglo1 = [];
let arreglo2 = [];

function ejecutar() {
	llenarArreglo(arreglo1);
	llenarArreglo(arreglo2);

	mostrarVectores();
}

function llenarArreglo(arr) {
	arr.length = 0; // Reinicia el arreglo para evitar duplicados
	for (let i = 0; i < 5; i++) {
		arr.push(Math.floor(Math.random() * 100)); // Genera valores aleatorios entre 0 y 99
	}
}

function mostrarVectores() {
	let vectorContainer = document.querySelector('#informacion');
	vectorContainer.innerHTML = ''; // Vaciar el contenido del contenedor

	let vectorDiv = document.createElement('div');
	vectorDiv.innerHTML = `<br>Vector 1: [${arreglo1.join(', ')}]<br><br>Vector 2: [${arreglo2.join(
		', '
	)}]`;
	vectorContainer.appendChild(vectorDiv);
}

document.querySelector('#button').onclick = ejecutar;
