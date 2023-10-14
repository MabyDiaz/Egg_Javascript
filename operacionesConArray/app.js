/* 18. A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:
a) Determinar cual de los dos elementos de texto es mayor
b) Utilizando exclusivamente los dos valores booleanos del array, determinar los 
operadores necesarios para obtener un resultado true y otro resultado false
c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los 
dos elementos numéricos */

const valores = [true, 5, false, 'hola', 'adios', 2];
const calcularBtn = document.getElementById('calcular-btn');
const resultadosDiv = document.getElementById('resultados');
const textoMayorElement = document.getElementById('texto-mayor');
const resultadosBoolElement = document.getElementById('resultados-bool');
const resultadosMatematicosElement = document.getElementById('resultados-matematicos');

calcularBtn.addEventListener('click', calcularResultados);
document.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		calcularResultados();
	}
});

function calcularResultados() {
	resultadosDiv.style.display = 'block';

	// a) Determinar cual de los dos elementos de texto es mayor
	const textos = valores.filter((item) => typeof item === 'string');
	if (textos.length === 2) {
		const textoMayor = textos[0].length > textos[1].length ? textos[0] : textos[1];
		textoMayorElement.innerHTML = `El elemento de texto mayor es: <strong>"${textoMayor}"</strong>`;
	}

	// b) Resultados con operadores booleanos
	const resultadosTrue = valores[0] || valores[2];
	const resultadosFalse = valores[0] && valores[2];

	let expresionesTrue = [];
	let expresionesFalse = [];

	if (resultadosTrue) {
		expresionesTrue.push(`${valores[0]} || ${valores[2]}`);
	}

	if (!resultadosFalse) {
		expresionesFalse.push(`${valores[0]} && ${valores[2]}`);
	}

	const expresionesTrueStr = expresionesTrue.join(', ');
	const expresionesFalseStr = expresionesFalse.join(', ');

	const resultadoTrueFormatted = `Resultado true: <strong>${expresionesTrueStr}</strong>`;
	const resultadoFalseFormatted = `Resultado false: <strong>${expresionesFalseStr}</strong>`;

	resultadosBoolElement.innerHTML = `${resultadoTrueFormatted}<br>${resultadoFalseFormatted}`;

	// c) Resultados de operaciones matemáticas
	const numeros = valores.filter((item) => typeof item === 'number');
	if (numeros.length === 2) {
		const suma = numeros[0] + numeros[1];
		const resta = numeros[0] - numeros[1];
		const multiplicacion = numeros[0] * numeros[1];
		const division = numeros[0] / numeros[1];
		const modulo = numeros[0] % numeros[1];

		resultadosMatematicosElement.innerHTML = `Suma: <strong>${suma}</strong><br>Resta: <strong>${resta}</strong><br>Multiplicación: <strong>${multiplicacion}</strong><br>División: <strong>${division}</strong><br>Módulo: <strong>${modulo}</strong>`;
	}
}

// ======= CONSOLA ========
/*
var valores = [true, 5, false, 'hola', 'adios', 2];

// a) Determinar cual de los dos elementos de texto es mayor
var texto1 = valores[3];
var texto2 = valores[4];

if (texto1.length > texto2.length) {
	console.log('El texto más grande es:', texto1);
} else if (texto2.length > texto1.length) {
	console.log('El texto más grande es:', texto2);
} else {
	console.log('Los textos tienen la misma longitud.');
}

// b) Utilizando exclusivamente los dos valores booleanos del array, determinar los
// operadores necesarios para obtener un resultado true y otro resultado false

var resultadoTrue = valores[0] || valores[2];
var resultadoFalse = valores[0] && valores[2];

console.log('Resultado True:', resultadoTrue);
console.log('Resultado False:', resultadoFalse);

// c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los
// dos elementos numéricos

var numero1 = valores[1];
var numero2 = valores[5];

var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;
var modulo = numero1 % numero2;

console.log('Suma:', suma);
console.log('Resta:', resta);
console.log('Multiplicación:', multiplicacion);
console.log('División:', division);
console.log('Módulo:', modulo); */
