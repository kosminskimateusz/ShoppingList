import { Product } from "./Product.js";
import { Store } from "./Store.js";

export class UI {


  constructor() {
    // localStorage.setItem('productList', JSON.stringify(this.productList));
    // const temp = localStorage.getItem('productList');
    // const objects = JSON.parse(temp);
    // const prods = [];
    // objects.forEach(element => {
    //   prods.push(new Product(element.name, element.price))
    // });
    // console.log("prods: ", prods);
  }

  // AddProductToLocalStorage(product) {
  //   localStorage.setItem('productList', JSON.stringify(this.productList));
  // }

  

  static DisplayProducts() {
    // Represent data in table on DOM Loaded
    const StoredProducts = Store.GetProducts();

    const products = StoredProducts;

    products.forEach((product) =>
      UI.AddProductToList(product));
  }

  // ADD PRODUCT
  static AddProductToList(product) {
    const list = document.querySelector('#product-list');

    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${product.name}</td>
      <td>${product.price}</td>
      <td><a href="#" class="delete-product">Delete</a></td>
    `;

    list.appendChild(row);
  }

  static DeleteProduct(element) {
    if (element.classList.contains('delete-product'))
      element.parentElement.parentElement.remove();
  }

  static ShowAlert(message, className) {
    if (!document.querySelector(`.alert.alert-${className}`)) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.content');
    const form = document.querySelector('#shop-form');
    container.insertBefore(div, form);
    // Vanish in 3 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }
  }

  static ClearFields() {
    document.querySelector('#name').value = '';
    document.querySelector('#price').value = '';
  }

  
}