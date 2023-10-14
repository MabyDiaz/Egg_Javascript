// 14. Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor,
// Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario
// y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el
// numero de páginas.

function Libro(isbn, titulo, autor, numeroPaginas) {
	this.isbn = isbn;
	this.titulo = titulo;
	this.autor = autor;
	this.numeroPaginas = numeroPaginas;
}

function cargarLibro() {
	let isbn = document.getElementById('isbn').value;
	let titulo = document.getElementById('titulo').value;
	let autor = document.getElementById('autor').value;
	let numeroPaginas = document.getElementById('numeroPaginas').value;
	let libro = new Libro(isbn, titulo, autor, numeroPaginas);

	mostrarLibro(libro);
}

function mostrarLibro(libro) {
	document.getElementById('informacion').innerHTML = `<p>ISBN: ${libro.isbn}</p>
    <p>Titulo: ${libro.titulo}</p>
    <p>Autor: ${libro.autor}</p>
    <p>Número de Páginas: ${libro.numeroPaginas}</p>`;
}

document.getElementById('button').onclick = cargarLibro;
