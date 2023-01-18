##Egg.js
A simple library for creating custom keyboard shortcuts (or "easter eggs") for your web pages.

Usage
First, include the easter-egg.js file in your HTML file.

Copy code
<script src="easter-egg.js"></script>
Then, create a new instance of the EasterEgg class:

Copy code
const easterEgg = new EasterEgg();
You can now add easter eggs using the addEgg method. The method takes two arguments: an array of key codes representing the key sequence, and a callback function to be executed when the key sequence is entered:

Copy code
easterEgg.addEgg([38, 38, 40, 40, 37, 39, 37, 39, 66, 65], () => {
  console.log("Konami code entered!");
});
You can add as many eggs as you want and customize it as per your requirement.

API
EasterEgg()
Creates a new instance of the Easter Egg library.

addEgg(keys, fn)
Adds a new easter egg to the library. keys is an array of key codes, representing the key sequence that should trigger the easter egg. fn is the callback function that will be executed when the key sequence is entered.

handleEvent(e)
Handles the keydown event, it checks if the key pressed is not in ignored keys and if the entered keys match any egg key sequence.

ignoredKeys
An array of key codes that will be ignored by the library. By default, the shift key (code 16) is ignored.

Example

``
const easterEgg = new EasterEgg();
easterEgg.addEgg([38, 38, 40, 40, 37, 39, 37, 39, 66, 65], () => {
  console.log("Konami code!");
});
``

This example creates a new instance of the EasterEgg class, and then adds an egg that listens for the Konami code (up, up, down, down, left, right, left, right, B, A) and when the user presses that sequence of keys, the function passed to the addEgg method will be invoked.

Note
This library only handle keydown event, so you will not be able to use it for sequence of keys that involve keyup or keypress events.
