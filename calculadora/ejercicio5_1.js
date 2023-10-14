function inicializar() {
    document.getElementById('valor1').value = '';
    document.getElementById('valor2').value = '';
    document.getElementById('resultado').textContent = '';
}

function calcular() {
    const valor1 = parseInt(document.getElementById('valor1').value);
    const valor2 = parseInt(document.getElementById('valor2').value);
    const operacion = document.querySelector('input[name="operacion"]:checked').value;
    let resultado;

    switch (operacion) {
        case 'S':
            resultado = valor1 + valor2;
            break;
        case 'R':
            resultado = valor1 - valor2;
            break;
        case 'M':
            resultado = valor1 * valor2;
            break;
        case 'D':
            if (valor2 !== 0) {
                resultado = valor1 / valor2;
            } else {
                resultado = 'Error: división por cero';
            }
            break;
        default:
            resultado = 'Error: operación no válida';
    }

    document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
}
