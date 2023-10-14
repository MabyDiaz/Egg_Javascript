const submitButton = document.getElementById('submitButton');
const resultElement = document.getElementById('result');

submitButton.addEventListener('click', () => {
	const nombre = document.getElementById('nombre').value;
	const edad = parseInt(document.getElementById('edad').value);
	const sexo = document.getElementById('sexo').value;
	const peso = parseFloat(document.getElementById('peso').value);
	const altura = parseFloat(document.getElementById('altura').value);

	const persona = {
		nombre: nombre,
		edad: edad,
		sexo: sexo,
		peso: peso,
		altura: altura,
	};

	const propiedadesArray = Object.values(persona);
	resultElement.textContent = JSON.stringify(propiedadesArray);
});
