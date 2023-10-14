/* 13. Crear un objeto persona, con las propiedades nombre, edad, sexo ('H' hombre, 'M' mujer, 
'O' otro), peso y altura. A continuación, muestre las propiedades del objeto JavaScript. */

const mostrarBtn = document.getElementById('mostrar-btn');

mostrarBtn.addEventListener('click', mostrarPropiedades);

function mostrarPropiedades() {
	const nombre = document.getElementById('nombre').value;
	const edad = document.getElementById('edad').value;
	const sexo = document.getElementById('sexo').value;
	const peso = document.getElementById('peso').value;
	const altura = document.getElementById('altura').value;

	const persona = {
		nombre: nombre,
		edad: edad,
		sexo: sexo,
		peso: peso,
		altura: altura,
	};

	const resultadoElement = document.getElementById('resultado');
	resultadoElement.innerHTML = '';

	for (const prop in persona) {
		const p = document.createElement('p');
		p.textContent = `${prop}: ${persona[prop]}`;
		resultadoElement.appendChild(p);
	}
}
