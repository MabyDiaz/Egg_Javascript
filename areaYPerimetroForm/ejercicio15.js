function ejecutar() {
	let radio = Number.parseFloat(document.getElementById('radio').value);
	document.getElementById('informacion').innerHTML = `<p>"El perimetro es ${perimetro(radio)}"</p>
    <p>"El area es ${area(radio)}"</p>`;

	if (radio <= 0) {
		document.getElementById(
			'informacion'
		).innerHTML = `<p>"El número ingresado no puede ser cero ni negativo."</p>`;
		return;
	}
}

let area = (radio) => (Math.PI * radio ** 2).toFixed(2);
let perimetro = (radio) => (Math.PI * radio * 2).toFixed(2);

document.getElementById('button').onclick = ejecutar;


/* function Circulo(radio, area, perimetro) {
    this.radio = radio;
    this.area = area;
    this.perimetro = perimetro;
}

function calcular() {
    let radio = parseFloat(document.getElementById('radio').value);
    let area = Math.PI * Math.pow(radio, 2);
    let perimetro = 2 * Math.PI * radio;
    let circ = new Circulo(radio, area.toFixed(3), perimetro.toFixed(3));
    mostrar(circ);
} */