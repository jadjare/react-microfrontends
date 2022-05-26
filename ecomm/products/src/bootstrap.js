import { commerce } from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = commerce.productName();

    products += `<div>${name}</div>`;
  }
  el.innerHTML = products;
  //ReactDOM.render(<App />, el);
};

// Context/Situation #1
// We are running this file in development isolation
// We are using our loca index.html file
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");

  if (el) mount(el);
}

// Context/Situation #2
// We are running this file in devlopment or production
// through the CONTAINER app
// NO Guarantee that an element with a specified id exists.
// WE DO NOT WANT to try to immediately render the app.
export { mount };
