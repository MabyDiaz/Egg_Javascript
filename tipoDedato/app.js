/* 12. Escribir una función flecha de JavaScript que reciba un argumento y retorne el tipo de 
dato. */

const resultadoElement = document.getElementById('resultado');
const verificarBtn = document.getElementById('verificar');
const datoInput = document.getElementById('dato');

verificarBtn.addEventListener('click', verificarTipoDato);
datoInput.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		verificarTipoDato();
	}
});

function verificarTipoDato() {
	const dato = datoInput.value;
	let tipoDato;

	if (dato === '') {
		tipoDato = 'NULL';
	} else if (!isNaN(dato)) {
		tipoDato = 'NUMBER';
	} else if (dato === 'true' || dato === 'false') {
		tipoDato = 'BOOLEAN';
	} else if (typeof dato === 'string') {
		tipoDato = 'STRING';
	} else {
		tipoDato = 'INDEFINIDO';
	}

	resultadoElement.textContent = `El tipo de dato es: ${tipoDato}`;
}

// EN LA CONSOLA:
/* const obtenerTipoDato = (argumento) => typeof argumento;
console.log(obtenerTipoDato(35)); */
