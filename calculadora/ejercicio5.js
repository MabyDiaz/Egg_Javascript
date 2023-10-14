/* 5. Construir un programa que simule un menú de opciones para realizar las cuatro
operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores
numéricos enteros. El usuario, además, debe especificar la operación con el primer
carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división.*/

function calcular(operacion, a, b) {
    switch (operacion.toLowerCase()) {
        case 's':
            return a + b;
            break;
        case 'r':
            return a - b;
            break;
        case 'm':
            return a * b;
            break;
        case 'd':
            if (b === 0) {
                return 'Error, no es posible dividir entre cero.';
            }
            return a / b;
            break;
    }
}

document.getElementById('calculadora-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const operacion = document.getElementById('operacion').value;
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const resultado = calcular(operacion, numero1, numero2);
    document.getElementById('resultado').innerText = 'El resultado es ' + resultado;
});
