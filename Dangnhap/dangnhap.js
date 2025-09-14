
// Initialize Swiper
const swiper = new Swiper(".swiper-container", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-prev",
    prevEl: ".swiper-button-next",
  },
});

// Check if already logged in
if (sessionStorage.getItem("isLoggedIn") === "true") {
  window.location.href = "../Trangchu/trangchu.html";
}

// Toggle Password Visibility
document.getElementById("togglePassword").addEventListener("click", () => {
  const passwordInput = document.getElementById("password");
  const toggleButton = document.getElementById("togglePassword");
  const type = passwordInput.type === "password" ? "text" : "password";
  passwordInput.type = type;
  toggleButton.textContent = type === "password" ? "Hiện" : "Ẩn";
});

// Handle Login Form Submission
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorDiv = document.getElementById("error");
  const loginButton = document.getElementById("loginButton");

  loginButton.disabled = true;
  loginButton.textContent = "Đang đăng nhập...";

  // Simulate server delay
  setTimeout(() => {
    if (username === "admin" && password === "123456") {
      errorDiv.classList.add("hidden");
      errorDiv.textContent = "";
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("username", username);
      alert("Đăng nhập thành công!");
      window.location.href = "../Trangchu/trangchu.html";
    } else {
      errorDiv.classList.remove("hidden");
      errorDiv.textContent = "Sai tên đăng nhập hoặc mật khẩu!";
      loginButton.disabled = false;
      loginButton.textContent = "Đăng Nhập";
    }
  }, 1000);
});
