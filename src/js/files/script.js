// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

document.addEventListener("click", documentActions);

function documentActions(e) {
	const targetElement = e.target
	if (targetElement.closest('[data-parent]')) {
		e.preventDefault()	
	}

}