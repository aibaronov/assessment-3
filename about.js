console.log("hello world");

const nameInput = document.querySelector("#name-input");

const submitBtn = document.querySelector("#submit-button");

// submitBtn.addEventListener("click", ()=>{
// 	alert(`Thank you! Form has been submitted successfully.`);
// 	nameInput.textContent = '';

// })

const imageSelector = document.querySelector("img");


imageSelector.addEventListener("mouseover", ()=>{
	alert("You're really awesome!");
});

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Thank you! Form has been submitted successfully!");
}


let form = document.querySelector('form#contact');

submitBtn.addEventListener('click', handleSubmit);