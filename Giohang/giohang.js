let cart = [
  {
    name: "Áo thun Unisex",
    price: 199000,
    quantity: 2,
    image: "https://via.placeholder.com/80",
  },
  {
    name: "Giày sneaker",
    price: 499000,
    quantity: 1,
    image: "https://via.placeholder.com/80",
  },
];



function formatPrice(price) {
  return new Intl.NumberFormat("vi-VN").format(price) + " VNĐ";
}

function updateQuantity(index, change) {
  cart[index].quantity += change;
  if (cart[index].quantity <= 0) {
    removeFromCart(index);
  } else {
    renderCart();
  }
}



function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

function calculateTotal() {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function renderCart() {
  const cartItemsContainer = document.getElementById("cartItems");
  const emptyCartDiv = document.getElementById("emptyCart");
  const cartTotal = document.getElementById("cartTotal");
  const checkoutBtn = document.getElementById("checkoutBtn");

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "";
    emptyCartDiv.style.display = "block";
    cartTotal.style.display = "none";
    checkoutBtn.style.display = "none";
    return;
  }

  emptyCartDiv.style.display = "none";
  cartTotal.style.display = "block";
  checkoutBtn.style.display = "block";

  cartItemsContainer.innerHTML = cart
    .map(
      (item, index) => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-info">
                        <h4>${item.name}</h4>
                        <p class="price">${formatPrice(item.price)}</p>
                        <div class="quantity-controls">
                            <button onclick="updateQuantity(${index}, -1)">-</button>
                            <span>Số lượng: ${item.quantity}</span>
                            <button onclick="updateQuantity(${index}, 1)">+</button>
                        </div>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart(${index})">Xóa</button>
                </div>
            `
    )
    .join("");

  document.getElementById("totalAmount").textContent = formatPrice(
    calculateTotal()
  );
}

// Khởi tạo hiển thị giỏ hàng
renderCart();

// Lưu dữ liệu giỏ hàng để sử dụng trong checkout
window.cartData = cart;
