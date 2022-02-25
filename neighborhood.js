console.log("Hello World!");

const restaurantBtn = document.querySelector(".pick-restaurant");

const listOfRestaurants = [
    {name: "Cafe Miriam", location: "2217 E 21st Ave"}, 
    {name: "Stella's Coffee House", location: "1476 S Pearl St"}, {name: "Slater's 50/50", location: "3600 Blake St"}];

function randomRestaurant(){
    const randomVal = Math.floor(Math.random()*        
    (listOfRestaurants.length));
    const restaurant = listOfRestaurants[randomVal];
    return `You should try out ${restaurant.name} which is located at ${restaurant.location}.`;
}

restaurantBtn.addEventListener('click', ()=>{
    alert(randomRestaurant());
})