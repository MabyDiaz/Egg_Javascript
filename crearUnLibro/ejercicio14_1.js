const libro = {
	ISBN: '',
	Titulo: '',
	Autor: '',
	NumeroPaginas: 0,

	cargarLibro: function (event) {
		event.preventDefault();
		this.ISBN = document.getElementById('isbn').value;
		this.Titulo = document.getElementById('titulo').value;
		this.Autor = document.getElementById('autor').value;
		this.NumeroPaginas = parseInt(document.getElementById('numeroPaginas').value);

		this.mostrarInformacion();
		this.limpiarFormulario();
	},

	mostrarInformacion: function () {
		const informacionElement = document.getElementById('informacion');
		informacionElement.innerHTML = `
        <h2>Información del Libro:</h2>
        <p><strong>ISBN:</strong> ${this.ISBN}</p>
        <p><strong>Título:</strong> ${this.Titulo}</p>
        <p><strong>Autor:</strong> ${this.Autor}</p>
        <p><strong>Número de páginas:</strong> ${this.NumeroPaginas}</p>
      `;
	},

	limpiarFormulario: function () {
		document.getElementById('isbn').value = '';
		document.getElementById('titulo').value = '';
		document.getElementById('autor').value = '';
		document.getElementById('numeroPaginas').value = '';
	},
};

// Agregar un evento de clic al botón para ejecutar la función cargarLibro
const botonElement = document.getElementById('button');
botonElement.addEventListener('click', libro.cargarLibro.bind(libro));

// Ocultar el libro al hacer clic en cualquier parte de la pantalla
document.body.addEventListener('click', function () {
	const informacionElement = document.getElementById('informacion');
	informacionElement.innerHTML = '';
});

// Ocultar el libro al presionar la tecla "Enter"
document.addEventListener('keydown', function (event) {
	if (event.key === 'Enter') {
		const informacionElement = document.getElementById('informacion');
		informacionElement.innerHTML = '';
	}
});
