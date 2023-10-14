// 2. Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio
// de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que
// para calcular el área y el perímetro se utilizan las siguientes fórmulas:
// area = PI * radio2
// perimetro = 2 * PI * radio
// el valor de PI = 3,14159263589793

let radio = prompt("Ingrese el valor del radio de una circunferencia:");

let area = Math.PI * radio ** 2;

let perimetro = 2 * Math.PI * radio;

// Mostrar el resultado con 4 decimales utilizando toFixed()
alert(
  "El valor del area de la circunferencia es " +
    area.toFixed(4) +
    "\n El valor del perimetro de la circunferencia es " +
    perimetro.toFixed(4)
);

// Mostrar el resultado con 4 decimales utilizando Math.round() y Math.pow()
/* alert("El valor del area de la circunferencia es " + Math.round(area * Math.pow(10,4))/Math.pow(10,4) + 
"\n El valor del perimetro de la circunferencia es " + Math.round(perimetro * Math.pow(10,4))/Math.pow(10,4) ); */
