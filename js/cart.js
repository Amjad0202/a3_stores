class ShoppingCart {
  constructor() {
    this.items = [];
    this.total = 0;
  }

  addItem(product, quantity = 1) {
    const existingItem = this.items.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ ...product, quantity });
    }
    
    this.updateTotal();
    this.updateCartUI();
  }

  removeItem(productId) {
    this.items = this.items.filter(item => item.id !== productId);
    this.updateTotal();
    this.updateCartUI();
  }

  updateTotal() {
    this.total = this.items.reduce((sum, item) => 
      sum + (item.price * item.quantity), 0);
  }

  updateCartUI() {
    const cartContainer = document.querySelector('.cart-items');
    const totalElement = document.querySelector('.cart-total');
    
    cartContainer.innerHTML = this.items.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="item-details">
          <h4>${item.name}</h4>
          <p>$${item.price} x ${item.quantity}</p>
        </div>
        <button onclick="cart.removeItem(${item.id})">×</button>
      </div>
    `).join('');
    
    totalElement.textContent = `Total: $${this.total.toFixed(2)}`;
  }
}

const cart = new ShoppingCart();