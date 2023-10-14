/* 9. Realizar un programa que pida una frase y el programa deberá mostrar la frase con un 
espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el 
funcionamiento de la función Substring(). */

const mostrarBtn = document.getElementById('mostrarBtn');
const fraseInput = document.getElementById('frase');
const resultado = document.getElementById('resultado');

mostrarBtn.addEventListener('click', mostrarFraseEspaciada);
fraseInput.addEventListener('keypress', function (event) {
	if (event.key === 'Enter') {
		mostrarFraseEspaciada();
	}
});

function mostrarFraseEspaciada() {
	const frase = fraseInput.value.trim();
	const fraseEspaciada = espaciarFrase(frase);
	resultado.textContent = fraseEspaciada;
}

function espaciarFrase(frase) {
	if (!frase) {
		return '';
	}

	let fraseConEspacios = '';

	for (let i = 0; i < frase.length; i++) {
		fraseConEspacios += frase.charAt(i);
		if (i !== frase.length - 1) {
			fraseConEspacios += ' ';
		}
	}

	return fraseConEspacios;
}
