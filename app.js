import { Product } from "./Classes/Product.js";
import { Store } from "./Classes/Store.js";
import { UI } from "./Classes/UI.js";

document.addEventListener('DOMContentLoaded', UI.DisplayProducts);

document.querySelector('#shop-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const price = document.querySelector('#price').value;

  // Validate
  if (name === '' || price === '') {
    UI.ShowAlert('Fill all fields', 'danger');
  } else {


    const product = new Product(name, price);

    UI.AddProductToList(product);

    Store.AddProduct(product);
    // Show Success message
    UI.ShowAlert('Book Added', 'success');
    UI.ClearFields();
  }
})

document.querySelector('#product-list').addEventListener('click', (e) => {
  UI.DeleteProduct(e.target);

  Store.RemoveProduct(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

  UI.ShowAlert('Book Removed', 'success');
})
