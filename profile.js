const colorBtn = document.querySelector("#color");
const placeBtn = document.querySelector("#place");
const ritualBtn = document.querySelector("#ritual");

function colorAlert(){
    alert("My favorite color is blue.");
}
function placeAlert(){
    alert("My favorite place is Colorado.");
}
function ritualAlert(){
    alert("My favorite ritual is drinking a cup of coffee first thing in the morning while I practice guitar.");
}

colorBtn.addEventListener('click', colorAlert);
placeBtn.addEventListener('click', placeAlert);
ritualBtn.addEventListener('click', ritualAlert);
