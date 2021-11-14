// todo: #################### Utility Functions are time savers ####################
// log = console.log;
// !Abstract functions that you can in many applications

// Benefits:
// ? 1) Add additional functionality not build-in to Javascript
// ? 2) Reduce tedious typing down to a simple function call

// ? Import own models ##########
// import {log, userBase} from utils.js

// ! Or in a utility class as method to call upon
class Utils {
	static myFunction() {
		// do stuff
	}
}
Utils.myFunction();

// * 1) ##########  proper case ##########
const properCase = (string) => {
	// ? Select first character of the string, to upper case | skip the first letter and add lower case to the other one | example in Console log
	return `${string[0].toUpperCase()}${string.slice(1).toLowerCase()}`;
};

// * 2) ##########  Console log ##########
const log = (content) => {
	console.log(content);
};
log(properCase('thisWILWorK'));

// * 3) ##########  Query selector with optional Scope ##########
const select = (selector, scope) => {
	return (scope || document).querySelector(selector);
};

const body = select('body');
log(body);

// * 4) ########## AddEventListener Wrapper ##########
const listen = (target, event, callback, capture = false) => {
	target.addEventListener(event, callback, !!capture);
};

const eventLog = (e) => console.log(e.target);
listen(body, 'click', eventLog);

// * 5) ##########  SanitizerInput ##########

// ! Use text content to clean data for xss attacks
const sanitizerInput = (inputValue) => {
	const div = document.createElement('div');
	div.textContent = inputValue;
	return div.innerHTML;
};
// Escape special characters for the dirtyInput
// Output = app.js:28 &lt;script&gt;alert('xss attack')&lt;/script&gt;&amp;othervalues
const dirtyInput = "<script>alert('xss attack')</script>&othervalues";
const cleanInput = sanitizerInput(dirtyInput);
log(cleanInput);

// * 6) ########## Create an element with an OPTIONAL CSS class ##########
const createElement = (tag, className) => {
	const el = document.createElement(tag);

	// return className ? el.classList.add(className) : el;
	if (className) el.classList.add(className);
	return el;
};

// Create main element with a class of root
const root = createElement('main', 'root');
body.appendChild(root);

// * 7) ########## Delete all Child elements of tag ##########
// ! DELETES THE ALL THE CHILD WITHIN THE PARENT ELEMENT
const deleteChildElements = (parentElement) => {
	let child = parentElement.lastElementChild;
	log(child);
	while (child) {
		parentElement.removeChild(child);
		child = parentElement.lastElementChild;
	}
};

// ! Deletes all li | Add li(child) in the ul(parent) and delete them.
const ul = select('ul');
deleteChildElements(ul);

// * 8) ########## Add Class with optional scope ##########
// ? Add class name to selector | ''
const addClassName = (selector, className, scope) => {
	(scope || document).querySelector(selector).classList.add(className);
};

//  Add th
addClassName('body', 'purple');

// * 8) ########## Get email name ##########

// Strip name before @ from user email | slice(0) starts from the beginning
const getUserNameFromEmail = (email) => {
	return email !== undefined
		? email.slice(0, email.indexOf('@'))
		: 'Cannot read / find email';
};
log(getUserNameFromEmail('mario@gotmail.com'));
