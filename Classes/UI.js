import { Product } from "./Product.js";

export class UI{
  productList = [
    new Product("Olej", 5),
    new Product("Kokos", 12)
  ];
  constructor() {
    
  }
  

  ShowProducts() {
    // Represent data in table on DOM Loaded
    console.log(this.productList);
  }

  GetInputProduct() {
    const name = document.querySelector("#name").value;
    const price = parseInt(document.querySelector("#price").value);
    
    return {name, price};
  }
  AddProduct() {
    const productData = this.GetInputProduct();
    const product = new Product(productData.name, productData.price);
    this.productList.push(product);
  }
}