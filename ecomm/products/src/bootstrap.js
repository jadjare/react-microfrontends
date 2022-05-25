import { commerce } from "faker";

let products = "";

for (let i = 0; i < 5; i++) {
  const name = commerce.productName();

  products += `<div>${name}</div>`;
}

document.querySelector("#dev-products").innerHTML = products;

// Context/Situation #1
// We are running this file in development isolation
// We are using our loca index.html file

// Context/Situation #2
// We are running this file in devlopment or production
// through the CONTAINER app
// NO Guarantee that an element with a specified id exists.
// WE DO NOT WANT to try to immediately render the app.
