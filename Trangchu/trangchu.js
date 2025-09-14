function toggleSupportBox() {
  const box = document.getElementById("supportBox");
  box.style.display = box.style.display === "flex" ? "none" : "flex";
}

function sendSupportMessage() {
  const input = document.getElementById("supportInput");
  const msg = input.value.trim();
  if (msg === "") return;

  const chatBody = document.getElementById("supportBody");

  const userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.innerText = msg;
  chatBody.appendChild(userMsg);

  // Phản hồi giả lập
  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.className = "message bot";
    botMsg.innerText = "Cảm ơn bạn! Chúng tôi sẽ liên hệ lại sớm.";
    chatBody.appendChild(botMsg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 800);

  input.value = "";
  chatBody.scrollTop = chatBody.scrollHeight;
}

function handleSupportKey(event) {
  if (event.key === "Enter") {
    sendSupportMessage();
  }
}

//================================

function toggleFavorite(element) {
  element.classList.toggle("active");
  element.textContent = element.classList.contains("active") ? "♥" : "♡";
}

//=========================

let currentAd = 0;
const slides = document.querySelectorAll(".ad-slide");

function showNextAd() {
  slides[currentAd].classList.remove("active");
  currentAd = (currentAd + 1) % slides.length;
  slides[currentAd].classList.add("active");
}

setInterval(showNextAd, 4000); // chuyển mỗi 4 giây

//=========================

let cart = [];
let cartCount = 0;

function updateCartCount() {
  document.getElementById("cartCount").textContent = cartCount;
}

function addToCart(productName, price) {
  cart.push({
    name: productName,
    price: price,
    quantity: 1,
  });
  cartCount++;
  updateCartCount();

  // Lưu giỏ hàng vào memory
  window.cartData = cart;

  alert(`Đã thêm "${productName}" vào giỏ hàng!`);
}

function buyNow(productName, price) {
  // Tạo đơn hàng tạm thời
  const orderData = {
    name: productName,
    price: price,
    quantity: 1,
  };

  // Chuyển đến trang thanh toán
  window.location.href = "checkout.html";
}

function filterProducts(category) {
  const products = document.querySelectorAll(".product-card");
  products.forEach((product) => {
    if (
      category === "all" ||
      product.getAttribute("data-category") === category
    ) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

function searchProducts() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const products = document.querySelectorAll(".product-card");

  products.forEach((product) => {
    const productName = product.querySelector("h3").textContent.toLowerCase();
    if (productName.includes(searchTerm)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

// Khởi tạo dữ liệu giỏ hàng
window.cartData = cart;

//=========================

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;
  cart.forEach((item) => (total += item.quantity));
  document.getElementById("cartCount").textContent = total;
}

function addToCart(productName, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existing = cart.find((item) => item.name === productName);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ name: productName, price: price, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(`Đã thêm "${productName}" vào giỏ hàng!`);
}

function buyNow(productName, price) {
  const order = {
    name: productName,
    price: price,
    quantity: 1,
  };
  // Lưu đơn hàng tạm thời
  sessionStorage.setItem("instantOrder", JSON.stringify(order));
  window.location.href = "checkout.html";
}

function filterProducts(category) {
  const products = document.querySelectorAll(".product-card");
  products.forEach((product) => {
    product.style.display =
      category === "all" || product.getAttribute("data-category") === category
        ? "block"
        : "none";
  });
}

function searchProducts() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const products = document.querySelectorAll(".product-card");
  products.forEach((product) => {
    const productName = product.querySelector("h3").textContent.toLowerCase();
    product.style.display = productName.includes(searchTerm) ? "block" : "none";
  });
}

// Cập nhật giỏ hàng khi tải trang
updateCartCount();
