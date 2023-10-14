// Función para invertir una palabra
const reverseWord = (word) => {
	return word.split('').reverse().join('');
};

// Función para obtener la palabra ingresada por el usuario, invertirla y mostrar el resultado
const invertirPalabra = () => {
	const palabraUsuario = document.getElementById('palabra').value;
	const palabraInvertida = reverseWord(palabraUsuario).toUpperCase();
	document.getElementById('resultado').innerText = `${palabraInvertida}`;
};

// Agregar event listener para el botón
const mostrarBtn = document.querySelector('.btn-btn');
mostrarBtn.addEventListener('click', invertirPalabra);

// Agregar event listener para la tecla "Enter" en el input de la palabra
const palabraInput = document.getElementById('palabra');
palabraInput.addEventListener('keypress', function (event) {
	if (event.key === 'Enter') {
		invertirPalabra();
	}
});
