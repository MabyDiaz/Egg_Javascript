/* 8. Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el 
programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de 
todos ellos. */

let numbers = [];
let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;
let suma = 0;

document.querySelector('#numero').addEventListener('keypress', function (event) {
	if (event.key === 'Enter') {
		let numero = parseInt(document.querySelector('#numero').value, 10);

		if (!isNaN(numero)) {
			if (numero === 0 && numbers.length > 0) {
				// Calcular resultados al ingresar 0 después de otros números
				let resultado = document.querySelector('#resultado');
				resultado.innerHTML = `<p>El máximo número ingresado es ${max}</p>
                    <p>El mínimo número ingresado es ${min}</p>
                    <p>El promedio de los números ingresados es ${(suma / numbers.length).toFixed(
											2
										)}</p>`;
				// Reiniciar valores para la próxima vez
				numbers = [];
				max = Number.MIN_SAFE_INTEGER;
				min = Number.MAX_SAFE_INTEGER;
				suma = 0;
			} else {
				// Actualizar los cálculos mientras se ingresan números diferentes de 0
				numbers.push(numero);
				max = Math.max(max, numero);
				min = Math.min(min, numero);
				suma += numero;
				document.querySelector('#numero').value = ''; // Limpiar el campo para el próximo número
			}
		}
	}
});
