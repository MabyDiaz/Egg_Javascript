const messageButton = document.getElementById('messageButton');
const messageDisplay = document.getElementById('messageDisplay');

messageButton.addEventListener('click', () => {
	const message = '¡Hola! Este es un mensaje a elección.';
	messageDisplay.textContent = message;
	messageDisplay.style.color = 'blueviolet';
	messageDisplay.style.fontWeight = 'bold';
	messageDisplay.style.marginTop = '10px';
});
