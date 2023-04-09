const users = [];

function register() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (username === "" || email === "" || password === "") {
    alert("Vui lòng nhập đầy đủ thông tin.");
    return;
  }

  const user = users.find(user => user.username === username || user.email === email);

  if (user) {
    alert("Tên đăng nhập hoặc email đã được sử dụng.");
  } else {
    users.push({ username, email, password });
    alert("Đăng ký thành công!");
    
    // Lưu thông tin người dùng vào localStorage
    localStorage.setItem(username, JSON.stringify({ email, password }));
  }
}

function validateUsername(username) {
  return username.length >= 10;
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password) {
  return /[A-Z]/.test(password);
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Vui lòng nhập đầy đủ thông tin.");
    return;
  }

  // Lấy thông tin người dùng từ localStorage
  const userInfo = JSON.parse(localStorage.getItem(username));

  if (!userInfo) {
    alert("Tên đăng nhập không đúng.");
  } else if (userInfo.password !== password) {
    alert("Mật khẩu không đúng.");
  } else {
    alert("Đăng nhập thành công!");

    // Chuyển sang trang HTML mới
    window.location.href = "index.html";
  }
}
