const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
    { username: "user3", password: "password3" }
  ];
  
  function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
      alert("Đăng nhập thành công!");
    } else {
      alert("Tên đăng nhập hoặc mật khẩu không đúng.");
    }
  }
  