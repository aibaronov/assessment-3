console.log("hello world");

const nameInput = document.querySelector("#name-input");

const submitBtn = document.querySelector("#submit-button");
submitBtn.addEventListener("click", ()=>{
	alert(`Thank you! Form has been submitted successfully.`);
	nameInput.textContent = '';

})



const imageSelector = document.querySelector("img");


imageSelector.addEventListener("mouseover", ()=>{
	alert("You're really awesome!");
});

function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);