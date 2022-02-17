// Product Class: Represents a product

class Product {
  constructor(name, shop, price) {
    this.name = name;
    this.shop = shop;
    this.price = price;
  }
}

// UI Class: Handle UI Tasks

class UI {
  static displayProducts() {
    const storedProducts = [
      {
        name: 'Pomidor',
        shop: 'Lidl',
        price: '8'
      },
      {
        name: 'Serek',
        shop: 'Lidl',
        price: '3'
      }
    ];

    const products = storedProducts;

    products.forEach((product) => UI.addProductToList(product));
  }

  static addProductToList(product) {
    const list = document.querySelector('#product-list');

    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${product.name}</td>
    <td>${product.shop}</td>
    <td>${product.price}</td>
    <td class="no-border"><a href="#" class="delete-button">X</a></td>
    `;

    list.appendChild(row);
  }

  static deleteProduct(el) {
    if(el.classList.contains('delete-button')) {
      el.parentElement.parentElement.remove();
    }
  }
  static ClearFields() {
    document.querySelector('#name').value = '';
    document.querySelector('#shop').value = '';
    document.querySelector('#price').value = '';
  }
}

// Event: Display Products
document.addEventListener('DOMContentLoaded', UI.displayProducts);

// Event: Add a Product
document.querySelector('#shop-form').addEventListener('submit', (e) => {
  // Get from values
  const name = document.querySelector('#name').value;
  const shop = document.querySelector('#shop').value;
  const price = document.querySelector('#price').value;

  // Instatiate product
  const product = new Product(name, shop, price);

  // Add Product to UI
  UI.addProductToList(product);

  // Clear fields
  UI.ClearFields();
});

// Event: Delete Product
document.querySelector('#product-list').addEventListener('click', (e) => {
  UI.deleteProduct(e.target);
});
