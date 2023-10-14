function verificarPalabra() {
	const frase = document.querySelector('#frase').value;

	// Dividir la frase en palabras separadas por espacios
	const palabras = frase.split(' ');

	// Inicializar una variable para almacenar la palabra más larga
	let palabraLarga = '';

	// Recorrer todas las palabras para encontrar la más larga
	palabras.forEach((palabra) => {
		if (palabra.length > palabraLarga.length) {
			palabraLarga = palabra;
		}
	});

	// Mostrar resultado
	const resultado = document.querySelector('#resultado');
	resultado.textContent = `La palabra más larga es: ${palabraLarga}`;
}

// Agregar event listener para detectar presión de tecla Enter
const inputFrase = document.querySelector('#frase');
inputFrase.addEventListener('keyup', (event) => {
	if (event.key === 'Enter') {
		verificarPalabra();
	}
});
