const highlightButton = document.getElementById('highlightButton');
const paragraph = document.getElementById('paragraph');

highlightButton.addEventListener('click', () => {
	const textContent = paragraph.textContent.replace(/\n/g, ' ');
	const words = textContent.split(' ');

	const highlightedWords = words
		.map((word) => {
			if (word.length > 8) {
				return `<span class="highlighted">${word}</span>`;
			} else {
				return word;
			}
		})
		.join(' ');

	paragraph.innerHTML = highlightedWords;
});
