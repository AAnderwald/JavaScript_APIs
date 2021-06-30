console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
let feedback = document.getElementById("feedback");
let form = document.getElementById("form");
let search = document.getElementById ("giphSearch");
let img = document.getElementById("gif");


const GIPHY_KEY = "I am blank please put me in to use";        //this is my giphy key this is put here and will be plugged in the fetch

form.addEventListener("submit", fetchGiph);

function fetchGiph(event) {
    event.preventDefault();                                   //prevent the function default. you need this
    
    fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=${GIPHY_KEY}&s=${search.value}`
    )
    .then((data) => data.json())
    .then((parsedData) => {
        img.src = parsedData.data.images.original.url;
        img.alt= parsedData.data.title;
    })
    .catch((error) => {
        console.log(error);
        feedback.textContent = "I'm not working today";
    
    });  
}



