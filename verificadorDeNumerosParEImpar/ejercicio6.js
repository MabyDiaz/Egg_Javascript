/* 6. Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar. 
En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”. */

const btnVerificar = document.getElementById('btnVerificar');
const numeroInput = document.getElementById('numero');
const resultado = document.getElementById('resultado');

btnVerificar.addEventListener('click', verificarParImpar);
numeroInput.addEventListener('keypress', function (event) {
	if (event.key === 'Enter') {
		verificarParImpar();
	}
});

function verificarParImpar() {
	const numero = parseInt(numeroInput.value, 10);

	if (isNaN(numero)) {
		resultado.textContent = 'Ingresa un número válido';
	} else if (numero === 0) {
		resultado.textContent = 'El número no es par ni impar';
	} else if (numero % 2 === 0) {
		resultado.textContent = 'El número es par';
	} else {
		resultado.textContent = 'El número es impar';
	}
}
