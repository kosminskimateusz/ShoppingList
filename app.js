import { UI } from "./Classes/UI.js";

const ui = new UI();
// ui.ShowProducts();
// ui.AddProduct();

// ui.ShowProducts();

window.addEventListener("DOMContentLoaded", () => {
  ui.ShowProducts();
});

// document.querySelector("#shop-form").addEventListener("submit", () => {
//   ui.AddProduct();
// })

document.querySelector("#submit").addEventListener("click", () => {
  ui.AddProduct();
})
