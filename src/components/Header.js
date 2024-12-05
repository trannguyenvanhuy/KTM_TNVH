import React from "react";
import { Link } from "react-router-dom";

const Header = ({ user }) => {
  return (
    <header>
      <div className="logo-container">
        <div className="logo"></div>
        <div className="shop-name">
          <h1>VH Shop</h1>
        </div>
      </div>
      <nav>
        <Link to="/">Trang chủ</Link>
        <Link to="/contact">Liên hệ</Link>
        {user ? (
          <>
            <span>Xin chào, {user.username}</span>
            <Link to="/cart">Giỏ hàng</Link>
          </>
        ) : (
          <>
            <Link to="/login">Đăng nhập</Link>
            <Link to="/register">Đăng ký</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
