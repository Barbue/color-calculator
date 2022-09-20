const prompt = require('prompt-sync')({sigint: true});

let choice = prompt("Do you want to combine or deconstruct a color? ");console.log(choice);

if(choice === "combine"){let color1 = prompt("enter first color: ");let color2 = prompt("enter second color: ")
if(color1 === "red" && color2 === "blue"){console.log("purple")}
else if(color1 === "red" && color2 === "yellow"){console.log("orange")}
else if(color1 === "blue" && color2 === "yellow"){console.log("green")}
else{console.log("error")}}


if(choice === "deconstruct"){let color3 = prompt("enter a single color: ")
if(color3 === "purple"){console.log("red + blue")}
else if(color3 === "orange"){console.log("red + yellow")}
else if(color3 === "green"){console.log("blue + yellow")}
else{console.log("error")}}




