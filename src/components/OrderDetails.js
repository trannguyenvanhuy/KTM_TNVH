import React from "react";

function OrderDetails() {
  return (
    <section className="order-details">
      <h2>Chi Tiết Đơn Hàng</h2>
      <p>Thông tin chi tiết về đơn hàng sẽ hiển thị ở đây.</p>
      <ul>
        <li>Sản phẩm 1 - 5.000.000 VNĐ</li>
        <li>Sản phẩm 2 - 3.000.000 VNĐ</li>
      </ul>
      <p>Tổng tiền: 8.000.000 VNĐ</p>
    </section>
  );
}

export default OrderDetails;
