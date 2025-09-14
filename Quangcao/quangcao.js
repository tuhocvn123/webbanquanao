document.getElementById("reviewForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  if (name && message) {
    const reviewContainer = document.createElement("div");
    reviewContainer.className = "review";
    reviewContainer.innerHTML = `<strong>${name}</strong><p>${message}</p>`;
    this.parentNode.insertBefore(reviewContainer, this);
    this.reset();
    alert("Cảm ơn bạn đã gửi đánh giá!");
  }
});
