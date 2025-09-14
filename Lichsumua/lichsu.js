const history = JSON.parse(localStorage.getItem("orderHistory")) || [];
const tbody = document.querySelector("#historyTable tbody");

if (history.length === 0) {
  tbody.innerHTML = '<tr><td colspan="5">Chưa có đơn hàng nào.</td></tr>';
} else {
  history.forEach((order) => {
    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${order.user}</td>
          <td>${order.name}</td>
          <td>${order.price.toLocaleString()} VNĐ</td>
          <td>${order.quantity}</td>
          <td>${order.time}</td>
        `;
    tbody.appendChild(row);
  });
}
