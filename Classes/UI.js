import { Product } from "./Product.js";

export class UI {
  productList = [
    new Product("Olej", 5),
    new Product("Kokos", 12)
  ];

  constructor() {
    localStorage.setItem('productList', JSON.stringify(this.productList));
    const temp = localStorage.getItem('productList');
    console.log(JSON.parse(temp));
  }


  ShowProducts() {
    // Represent data in table on DOM Loaded
    const table = document.querySelector("#product-list");
    table.innerHTML = '';
    this.productList.forEach(element => {
      const product = document.createElement('tr');
      product.innerHTML = `
      <td>${element.name}</td>
      <td>${element.price}</td>
      <td><a href="#">DELETE</a></td>
      `;
      table.appendChild(product);
    });
    console.log(this.productList);
  }

  // ADD PRODUCT
  AddProduct() {
    const productData = this.#GetInputProduct();
    if (this.#Validation(productData)) {
      this.#ClearInput();
      const product = new Product(productData.name, parseInt(productData.price));
      this.productList.push(product);
      this.ShowProducts();
    } else {
      alert("Incorrect input");
    }
  }


  #GetInputProduct() {
    const name = document.querySelector("#name").value;
    const price = document.querySelector("#price").value;
    return { name, price };
  }

  // CLEAR INPUT
  #ClearInput() {
    document.querySelector("#name").value = null;
    document.querySelector("#price").value = null;
  }

  // INPUT VALIDATION
  #Validation(data) {
    if (data.name === '' || data.price === '') {
      return false;
    }
    return true;
  }

}