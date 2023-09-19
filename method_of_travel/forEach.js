const letter = ["a", "b", "c", "a", "b", "a"];

let counter = {};

letter.forEach(travelIntem); // podemos pasar una funcion a parte, por que usa una funcion como parametro

function travelIntem(intem) {
  if (counter[intem]) {
    counter[intem]++;
  } else {
    counter[intem] = 1;
  }
}

console.log(counter)