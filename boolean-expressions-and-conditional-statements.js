const readline = require('readline-sync');

const hasTorch = true;
let hasMap = false; // Changed from const to let

console.log("Welcome, traveler!");
let name = readline.question("What is your name? ");
console.log(`Hello, ${name}. Your journey begins now...\n`);

let hasSword = readline.keyInYNStrict("Do you have a sword?");
if (hasSword) {
  console.log("You have a sword. Good luck on your journey!");
}

let hasCompass = readline.keyInYNStrict("Do you have a compass?"); // Renamed from hascompass
if (hasCompass) {
  console.log("You have a compass. Good luck on your journey!");
}

let path = readline.question("Which path will you take? (left/right) ");
if (path === "left") {
  console.log("You take the left path. You encounter a dragon!");
} else if (path === "right") {
  console.log("You take the right path. You encounter a troll!");
}

if (path === "left" && hasSword) {
  console.log("You slay the dragon with your sword!");
} else if (path === "left" && !hasSword) {
  console.log("You don't have a sword. You are defeated by the dragon!");
}

if (path === "right" && hasCompass) {
  console.log("You use your compass to outsmart the troll!");
} else if (path === "right" && !hasCompass) {
  console.log("You don't have a compass. You are defeated by the troll!");
}

let hasTreasure = false;

let checkInventory = readline.question("Do you want to check your inventory? (yes/no) "); // Fixed syntax error

if (checkInventory === "yes") {
  console.log("You have the following items:");
  if (hasTorch) {
    console.log("- Torch");
  }
  if (hasMap) {
    console.log("- Map");
  }
  if (hasSword) {
    console.log("- Sword");
  }
  if (hasCompass) {
    console.log("- Compass");
  }
}

console.log("\nYou reach a mysterious cave, but it's full of paths that twist and turn."); // Fixed escape sequence and typo
if (!hasMap) {
  console.log("You realize that you need a map to find your way.");
  let goGetMap = readline.keyInYNStrict("Do you want to go back and get the map?");
  if (goGetMap) {
    console.log("You go to the map store and purchase a map.");
    hasMap = true; // Reassigning let variable
  }
} else {
  console.log("You have a map. You continue through the cave.");
}

if (hasTorch && hasMap) {
  console.log("Using your torch to light the way, and your map to find the treasure, you go on a long journey. \nEventually, you find the treasure and win the game! \nHowever, while on your adventure, everyone you love has died. Was it worth it?");
}
else {
  console.log("You don't have the necessary items to find the treasure. But you made many friends along the way! So really, you're a winner.");
}

console.log("Thank you for playing! Goodbye!");
/* 


node boolean-expressions-and-conditional-statements.js

*/