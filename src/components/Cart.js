import React, { useState } from "react";

const Cart = ({ cart, onOrder }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isOrderSubmitted, setIsOrderSubmitted] = useState(false);

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleOrderSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra các trường thông tin nhận hàng
    if (!name || !address || !phone || !paymentMethod) {
      alert("Vui lòng điền đầy đủ thông tin nhận hàng!");
      return;
    }

    // Gửi thông tin đơn hàng
    const orderData = {
      name,
      address,
      phone,
      paymentMethod,
      items: cart,
      totalAmount,
    };

    // Gọi hàm onOrder từ component cha (App.js hoặc nơi chứa Cart)
    onOrder(orderData);

    setIsOrderSubmitted(true); // Đánh dấu đơn hàng đã được gửi
  };

  return (
    <div className="cart">
      <h2>Giỏ hàng</h2>
      <ul>
        {cart.length > 0 ? (
          cart.map((item) => (
            <li key={item.id}>
              <p>
                {item.name} - {item.quantity} x {item.price} VNĐ
              </p>
            </li>
          ))
        ) : (
          <p>Giỏ hàng của bạn trống.</p>
        )}
      </ul>

      <h3>Tổng cộng: {totalAmount} VNĐ</h3>

      {/* Nếu đơn hàng đã được gửi, hiển thị thông tin đơn hàng */}
      {isOrderSubmitted ? (
        <div className="order-summary">
          <h3>Thông tin đơn hàng</h3>
          <p>
            <strong>Họ và tên:</strong> {name}
          </p>
          <p>
            <strong>Địa chỉ giao hàng:</strong> {address}
          </p>
          <p>
            <strong>Số điện thoại:</strong> {phone}
          </p>
          <p>
            <strong>Phương thức thanh toán:</strong> {paymentMethod}
          </p>
          <p>
            <strong>Tổng cộng:</strong> {totalAmount} VNĐ
          </p>
          <h4>Đặt hàng thành công!</h4>
        </div>
      ) : (
        // Hiển thị form nhập thông tin nhận hàng khi nhấn "Đặt hàng"
        <div className="order-form">
          <h3>Thông tin nhận hàng</h3>
          <form onSubmit={handleOrderSubmit}>
            <div className="form-group">
              <label htmlFor="name">Họ và tên:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Địa chỉ giao hàng:</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Số điện thoại:</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="paymentMethod">Phương thức thanh toán:</label>
              <select
                id="paymentMethod"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                required
              >
                <option value="">Chọn phương thức thanh toán</option>
                <option value="COD">Thanh toán khi nhận hàng (COD)</option>
                <option value="credit">Thanh toán qua thẻ tín dụng</option>
              </select>
            </div>

            <button type="submit">Đặt hàng</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Cart;
