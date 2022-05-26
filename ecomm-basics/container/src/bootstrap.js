import { mount as mountProduct } from "products/ProductsIndex";
import { mount as mountCart } from "cart/CartShow";

console.log("container");

mountProduct(document.querySelector("#products-container"));
mountCart(document.querySelector("#cart-container"));
