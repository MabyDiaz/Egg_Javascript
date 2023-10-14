const limiteInput = document.getElementById('limite');
const numeroInput = document.getElementById('numero');
const resultadoDiv = document.getElementById('resultado');

let limite;
let numeros = [];
let suma = 0;

limiteInput.addEventListener('change', () => {
	limite = parseInt(limiteInput.value);
});

numeroInput.addEventListener('keypress', (event) => {
	if (event.key === 'Enter') {
		agregarNumero();
	}
});

function agregarNumero() {
	const numero = parseInt(numeroInput.value);
	if (!isNaN(numero)) {
		numeros.push(numero);
		suma += numero;
		numeroInput.value = '';

		if (suma > limite) {
			suma -= numeros.pop(); // Resta el último número ingresado
			mostrarResultado();
		} else if (suma === limite) {
			mostrarResultado();
		}
	}
}

function mostrarResultado() {
	let mensaje = '';
	if (numeros.length > 0) {
		mensaje = `<p style="font-size:12px">Números ingresados: ${numeros.join(', ')}</p>`;
	}
	mensaje += `<p style="color:#ff00e1; font-size:20px; font-weight: bold; text-transform: uppercase">Suma total: ${suma}</p>`;
	resultadoDiv.innerHTML = mensaje;
}
