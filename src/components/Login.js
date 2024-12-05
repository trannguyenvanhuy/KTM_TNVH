import React, { useState } from "react";

function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Lỗi hiển thị

  // Hàm xử lý đăng nhập
  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Xóa thông báo lỗi cũ

    // Kiểm tra nếu các trường đăng nhập rỗng
    if (!username || !password) {
      setErrorMessage("Vui lòng nhập tên đăng nhập và mật khẩu!");
      return;
    }

    try {
      // Gửi yêu cầu đăng nhập tới server
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      // Kiểm tra mã phản hồi từ server
      if (!response.ok) {
        // Nếu phản hồi không thành công (lỗi từ backend)
        setErrorMessage("Tên đăng nhập hoặc mật khẩu không đúng!");
        return;
      }

      const data = await response.json();

      // Nếu đăng nhập thành công
      if (data.success) {
        // Lưu thông tin người dùng vào localStorage
        localStorage.setItem("user", JSON.stringify(data.user));
        onLoginSuccess(data.user); // Thực hiện điều hướng hay cập nhật UI sau khi đăng nhập thành công
      } else {
        setErrorMessage("Tên đăng nhập hoặc mật khẩu không đúng!"); // Hiển thị thông báo lỗi nếu không thành công
      }
    } catch (error) {
      console.error("Đăng nhập lỗi:", error);
      setErrorMessage("Đã có lỗi xảy ra. Vui lòng thử lại!");
    }
  };

  return (
    <div>
      <h2>Đăng Nhập</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Tên đăng nhập</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nhập tên đăng nhập"
            required
          />
        </div>
        <div>
          <label>Mật khẩu</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Nhập mật khẩu"
            required
          />
        </div>
        <button type="submit">Đăng nhập</button>
      </form>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
}

export default Login;
