import { PASSWORD_OPTIONS } from './constants';
import {
	buttonElement,
	passwordElement,
	passwordLengthElement,
	rangeElement
} from './dom';
import { generateRandomNumber } from './utils';

let allowedCharacters = '';
let finalPassword = '';
let passwordLength = rangeElement.value;

const changeLengthText = () => {
	passwordLengthElement.textContent = `Length: ${rangeElement.value}`;
};

const updatePasswordLength = event => {
	passwordLength = event.target.value;
	changeLengthText();
};

const printFinalPassword = () => {
	passwordElement.value = finalPassword;
};

const generatePassword = () => {
	finalPassword = '';
	for (let index = 0; index < passwordLength; index++) {
		const randomPosition = generateRandomNumber(allowedCharacters.length);
		finalPassword += allowedCharacters.charAt(randomPosition);
	}
	printFinalPassword();
};

const disabledButton = isDisabled => {
	buttonElement.disabled = isDisabled;
};

const getCheckedOptions = () => {
	let isDisabled = true;
	allowedCharacters = '';

	const allCheckboxes = document.querySelectorAll('.input:checked');

	// console.log(allCheckboxes);

	allCheckboxes.forEach(input => {
		const optionId = input.id;
		allowedCharacters += PASSWORD_OPTIONS[optionId];
		isDisabled = false;
	});

	disabledButton(isDisabled);
};

export {
	changeLengthText,
	updatePasswordLength,
	printFinalPassword,
	generatePassword,
	disabledButton,
	getCheckedOptions
};
