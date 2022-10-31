import React from "react";

let item;
function randomChoice(itemArray){
  let randomItem = Math.floor(Math.random() * itemArray.length + 1);
  item = itemArray[randomItem]
  removeItem(itemArray, item);
  return item;
};

function removeItem(itemArray, item){

  let itemIndex = itemArray.indexOf(item);

  if(itemIndex != "-1"){
    let newArray = itemArray.splice(itemIndex, 1);
    return item;
  }
  return undefined;
};

// remove item does not need to be exported.
export {randomChoice, removeItem};