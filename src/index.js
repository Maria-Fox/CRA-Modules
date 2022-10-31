import React from "react";
import fruits from "./foods";
import {randomChoice, removeItem} from "./helpers"

let randomFruit = randomChoice(fruits);
console.log(`I'd like one ${randomFruit}, please.`);
console.log(`Here you go. One ${randomFruit}`);
console.log(`Delicious! May I have another?`);
console.log(`I'm sorry, we're all out. We have ${fruits} left`)

// otherwise, do a length to say how many fruits are left.

let lengthOfItems = fruits.length;
console.log(`We have ${lengthOfItems} left.`)