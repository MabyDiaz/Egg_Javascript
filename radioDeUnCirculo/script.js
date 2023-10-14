const submitButton = document.getElementById('submitButton');
const resultElement = document.getElementById('result');

submitButton.addEventListener('click', () => {
	const diameter = parseFloat(document.getElementById('diameter').value);
	const radius = diameter / 2;

	resultElement.textContent = `El radio del círculo es: ${radius}`;
	resultElement.style.color = 'blueviolet';
	resultElement.style.fontWeight = 'bold';
	resultElement.style.marginTop = '10px';
});
