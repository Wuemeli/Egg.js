// Create a new instance of the EasterEgg class
const easterEgg = new EasterEgg();

// Add an egg that listens for the Konami code
easterEgg.addEgg([38, 38, 40, 40, 37, 39, 37, 39, 66, 65], () => {
  console.log("Konami code entered!");
});

// Add an egg that listens for the letter "B"
easterEgg.addEgg([66], () => {
  console.log("B was pressed!");
});

// Add an event listener to a button that adds an egg that listens for the letter "H"
document.querySelector("#some-button").addEventListener("click", () => {
  easterEgg.addEgg([72], () => {
    console.log("H was pressed!");
  });
});

// Remove an egg with a specific key sequence
easterEgg.removeEgg([66]);

// Clear all the eggs
easterEgg.clearEggs();

// Set the keys to be ignored
easterEgg.setIgnoredKeys([16]);

// Check if a specific egg exists
console.log(easterEgg.hasEgg([38, 38, 40, 40, 37, 39, 37, 39, 66, 65]));

// Execute a specific egg
easterEgg.executeEgg([38, 38, 40, 40, 37, 39, 37, 39, 66, 65]);


//This code creates a new instance of the EasterEgg class, adds an egg that listens for the Konami code, 
//adds an egg that listens for the letter "B", adds an event listener to a button that adds an egg that listens for the letter "H", 
//removes the egg with the key sequence of the letter "B", clears all eggs, sets the shift key to be ignored and also check if a specific egg exists and execute the egg.
//You can change the key sequence and the function passed to the addEgg method to suit your specific needs.