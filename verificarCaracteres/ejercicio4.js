const verificarEntrada = () => {
	const entradaUsuario = document.getElementById('letra').value;
	const resultadoParrafo = document.getElementById('resultado');

	// Limpiar el contenido del párrafo antes de realizar una nueva verificación
	resultadoParrafo.innerText = '';

	if (
		entradaUsuario === 'S' ||
		entradaUsuario === 's' ||
		entradaUsuario === 'N' ||
		entradaUsuario === 'n'
	) {
		resultadoParrafo.innerText = 'CORRECTO';
	} else {
		resultadoParrafo.innerText = 'INCORRECTO';
	}
};

// Agregar event listener para la tecla "Enter" en el input de la palabra
const palabraInput = document.getElementById('letra');
palabraInput.addEventListener('keypress', function (event) {
	if (event.key === 'Enter') {
		verificarEntrada();
	}
});
