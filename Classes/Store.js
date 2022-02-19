export class Store {
  static GetProducts() {
    let products;
    if (localStorage.getItem('products') === null) {
      products = [];
      console.log("Empty array");
    } else {
      products = JSON.parse(localStorage.getItem('products'));
    }

    return products;
  }

  static AddProduct(product) {
    const products = Store.GetProducts();

    products.push(product);

    localStorage.setItem('products', JSON.stringify(products));
  }

  static RemoveProduct(name) {
    const products = Store.GetProducts();

    products.forEach((product, tasa) => {
      console.log(tasa);
      if(product.name === name) {
        products.splice(tasa, 1);
      }
    });

    localStorage.setItem('products', JSON.stringify(products));
  }
}