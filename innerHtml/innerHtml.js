const initApp = async () => {
	const btn1 = document.getElementById('1');
	btn1.addEventListener('click', createParas1);

	const btn2 = document.getElementById('2');
	btn2.addEventListener('click', createParas2);
};

document.addEventListener('DOMContentLoaded', initApp);

// ! Performance duration check by the amount of (500) elements that are loaded in the DOM using innerHTML
const createParas1 = () => {
	const start = new Date();

	const main = document.querySelector('main');

	let i = 0;
	while (i < 500) {
		main.innerHTML += `<p>My value is ${i}</p>`;
		i++;
	}

	const duration = Date.now() - start;
	console.log(`Duration: ${duration}`);
};

// ! Performance duration check by the amount of (1000) elements that are loaded in the DOM using fragment
const createParas2 = () => {
	const start = new Date();

	const main = document.querySelector('main');
	const fragment = document.createDocumentFragment();

	let i = 0;

	while (i < 10000) {
		const p = document.createElement('p');
		p.textContent = `My value is ${i}`;
		fragment.append(p);
		i++;
	}
	main.append(fragment);

	const duration = Date.now() - start;
	console.log(`Duration: ${duration}`);
};
