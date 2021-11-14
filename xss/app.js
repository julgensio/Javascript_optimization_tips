const initApp = async () => {
	const form = document.querySelector('form');
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		processUserInput();
	});
};

document.addEventListener('DOMContentLoaded', initApp);

// Clean input data
const processUserInput = () => {
	const input = document.querySelector('input').value;
	const cleanData = sanitizeInput(input);
	const h1 = document.querySelector('h1');

	h1.innerHTML = cleanData;
};

// Transform inner html to text content
const sanitizeInput = (input) => {
	const div = document.createElement('div');
	div.textContent = input;
	return div.innerHTML;
};
