// This program will generate a random quote by piecing together 3 random phrases.

// Arrays for phrases

const subject = ["To Truly Win ", "The Key to Success ", "Sometimes the Best Path forward "];
const action = ["is to revel in ", "is not always ", "is only 1 piece of "];
const ending = ["the puzzle.", "crushing your enemies.", "live, laugh, love."];

// Randomly generate quote

console.log(subject[Math.floor(Math.random() * 3)] + action[Math.floor(Math.random() * 3)] + ending[Math.floor(Math.random() * 3)]);