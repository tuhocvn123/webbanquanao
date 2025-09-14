// Dữ liệu mẫu cho đơn hàng
let orderData = [
  {
    name: "Áo thun Unisex",
    price: 199000,
    quantity: 2,
  },
  {
    name: "Giày sneaker",
    price: 499000,
    quantity: 1,
  },
];

function formatPrice(price) {
  return new Intl.NumberFormat("vi-VN").format(price) + " VNĐ";
}

function calculateTotal() {
  return orderData.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

function renderOrderSummary() {
  const orderItemsContainer = document.getElementById("orderItems");

  const itemsHTML = orderData
    .map(
      (item) => `
                <div class="order-item">
                    <span>${item.name} x ${item.quantity}</span>
                    <span>${formatPrice(item.price * item.quantity)}</span>
                </div>
            `
    )
    .join("");

  const totalHTML = `
                <div class="order-item">
                    <span>Tổng cộng</span>
                    <span>${formatPrice(calculateTotal())}</span>
                </div>
            `;

  orderItemsContainer.innerHTML = itemsHTML + totalHTML;
}
// Xử lý form thanh toán
document
  .getElementById("checkoutForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const paymentMethod = document.getElementById("paymentMethod").value;
    const note = document.getElementById("note").value;

    // Validation cơ bản
    if (!fullName || !phone || !address) {
      alert("Vui lòng điền đầy đủ thông tin giao hàng!");
      return;
    }

    // Hiển thị thông báo thành công
    document.getElementById("checkoutForm").style.display = "none";
    document.querySelector(".order-summary").style.display = "none";
    document.getElementById("successMsg").style.display = "block";

    // Xóa giỏ hàng sau khi đặt hàng thành công
    if (window.cartData) {
      window.cartData = [];
    }
  });

// Khởi tạo hiển thị tóm tắt đơn hàng
renderOrderSummary();
