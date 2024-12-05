import React, { useState } from "react";

function ProductList({ addToCart }) {
  // Mảng giả định các sản phẩm
  const products = [
    {
      id: 1,
      name: "Laptop Dell",
      price: 15000000,
      imageUrl:
        "https://th.bing.com/th/id/OIP.HVJO47zHrDiXjKUyD5mLXAHaHa?w=191&h=191&c=7&r=0&o=5&pid=1.7",
      description: "Laptop mạnh mẽ với cấu hình cao.",
    },
    {
      id: 2,
      name: "Điện thoại iPhone",
      price: 220000000,
      imageUrl:
        "https://th.bing.com/th/id/OIP.lNeZztIjL3RGIWZDkihuggHaHa?w=204&h=204&c=7&r=0&o=5&pid=1.7",
      description: "Điện thoại cao cấp của Apple.",
    },
    {
      id: 3,
      name: "Máy tính bảng Samsung",
      price: 12000000,
      imageUrl:
        "https://th.bing.com/th/id/OIP.yaLT4PKwdLcmfRWFRsoCvAHaE8?w=247&h=180&c=7&r=0&o=5&pid=1.7",
      description: "Máy tính bảng cho công việc và giải trí.",
    },
    {
      id: 4,
      name: "Tai nghe Sony",
      price: 3000000,
      imageUrl:
        "https://th.bing.com/th/id/OIP.W7OKdAI7XB3vzZetdECruwHaHa?w=219&h=219&c=7&r=0&o=5&pid=1.7",
      description: "Tai nghe chất lượng cao từ Sony.",
    },
    {
      id: 5,
      name: "Màn hình LG",
      price: 5000000,
      imageUrl:
        "https://th.bing.com/th/id/OIP.079UIGfWKBDBgohdSJbDlQHaE4?w=296&h=196&c=7&r=0&o=5&pid=1.7",
      description: "Màn hình rộng, chất lượng hình ảnh tuyệt vời.",
    },
    {
      id: 6,
      name: "Máy chiếu Epson",
      price: 8500000,
      imageUrl:
        "https://th.bing.com/th/id/OIP.iC07dR-1sVih9BtsT5oRsQHaE8?w=234&h=180&c=7&r=0&o=5&pid=1.7",
      description: "Máy chiếu độ phân giải cao.",
    },
    {
      id: 7,
      name: "Laptop HP",
      price: 13000000,
      imageUrl:
        "https://th.bing.com/th/id/OIP.Pk803VvjW-Om_ynLdawvxQHaGI?w=226&h=187&c=7&r=0&o=5&pid=1.7",
      description: "Laptop đa năng, bền bỉ cho công việc văn phòng.",
    },
    {
      id: 8,
      name: "Điện thoại Samsung",
      price: 1800000,
      imageUrl:
        "https://th.bing.com/th/id/OIP.n9zGaemTtMEbPSmVDLi8cwHaHa?w=179&h=180&c=7&r=0&o=5&pid=1.7",
      description: "Điện thoại với camera chất lượng cao.",
    },
    {
      id: 9,
      name: "Tablet Apple",
      price: 16000000,
      imageUrl:
        "https://th.bing.com/th/id/OIP.pwNP1BQakxHhHXOimPgL9AHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7",
      description: "Máy tính bảng cao cấp từ Apple.",
    },
    {
      id: 10,
      name: "Máy tính để bàn",
      price: 1100000,
      imageUrl:
        "https://th.bing.com/th/id/OIP.CYP9rRZnFVQkGv6jixCNHwHaFL?w=252&h=180&c=7&r=0&o=5&pid=1.7",
      description: "PC mạnh mẽ, phục vụ làm việc văn phòng và giải trí.",
    },
    {
      id: 11,
      name: "Chuột Logitech",
      price: 100000,
      imageUrl:
        "https://th.bing.com/th/id/OIP._IZo7kA6pcKF8qq28H87YgHaHa?w=199&h=199&c=7&r=0&o=5&pid=1.7",
      description: "Chuột không dây, độ bền cao.",
    },
    {
      id: 12,
      name: "Bàn phím cơ Corsair",
      price: 200000,
      imageUrl:
        "https://th.bing.com/th/id/OIP.QxG3Lhas5zeLEx8x7EUvgQHaHa?w=180&h=180&c=7&r=0&o=5&pid=1.7",
      description: "Bàn phím cơ, phím gõ cực kỳ nhạy.",
    },
    {
      id: 13,
      name: "Camera hành trình GoPro",
      price: 4500000,
      imageUrl:
        "https://th.bing.com/th/id/OIP.46QLYkrG6dW0frLNM0JUmQHaEK?w=301&h=180&c=7&r=0&o=5&pid=1.7",
      description: "Camera chống nước, ghi hình độ phân giải cao.",
    },
    {
      id: 14,
      name: "Loa Bose",
      price: 3500000,
      imageUrl:
        "https://th.bing.com/th/id/OIP.98TvqcHvhRKkslSO4PG83gHaHa?w=204&h=204&c=7&r=0&o=5&pid=1.7",
      description: "Loa Bluetooth với âm thanh sống động.",
    },
    {
      id: 15,
      name: "Tai nghe AirPods",
      price: 700000,
      imageUrl:
        "https://th.bing.com/th/id/OIP.9GB4dTG_ktQQ2lJS_qNFPwHaHa?w=181&h=181&c=7&r=0&o=5&pid=1.7",
      description: "Tai nghe không dây, chất âm tuyệt vời.",
    },
    {
      id: 16,
      name: "Máy tính bảng Microsoft Surface",
      price: 2400000,
      imageUrl:
        "https://th.bing.com/th/id/OIP.iR6IALvRFhpTg9o9St65CwHaEo?w=237&h=180&c=7&r=0&o=5&pid=1.7",
      description: "Máy tính bảng mạnh mẽ từ Microsoft.",
    },
    {
      id: 17,
      name: "Sạc dự phòng Anker",
      price: 100000,
      imageUrl:
        "https://th.bing.com/th/id/OIP.6KOBPcb99r_cqkMAP7KZsQHaHa?w=179&h=180&c=7&r=0&o=5&pid=1.7",
      description: "Sạc dự phòng dung lượng cao, tiện lợi.",
    },
    {
      id: 18,
      name: "Smartwatch Fitbit",
      price: 40000,
      imageUrl:
        "https://th.bing.com/th/id/OIP.6xQn0pHjLkLmZtoGGjNNcgHaJf?w=158&h=202&c=7&r=0&o=5&pid=1.7",
      description: "Đồng hồ thông minh theo dõi sức khỏe.",
    },
    {
      id: 19,
      name: "Camera an ninh Hikvision",
      price: 550000,
      imageUrl:
        "https://th.bing.com/th/id/OIP.6U4-vWAo2hlSb122JWNsfAHaHa?w=197&h=197&c=7&r=0&o=5&pid=1.7",
      description: "Camera an ninh giám sát chất lượng cao.",
    },
    {
      id: 20,
      name: "Ổ cứng ngoài Seagate",
      price: 30500,
      imageUrl:
        "https://th.bing.com/th/id/OIP.qwbMUjavdho-2UKjnAsjEwHaHa?w=218&h=218&c=7&r=0&o=5&pid=1.7",
      description: "Ổ cứng di động dung lượng lớn.",
    },
    // Các sản phẩm mới bạn yêu cầu thêm
    {
      id: 21,
      name: "Máy ảnh Canon EOS",
      price: 250000,
      imageUrl:
        "https://th.bing.com/th/id/OIP.L9hu3LaBhGTEv8QpGsezrwHaHD?w=182&h=180&c=7&r=0&o=5&pid=1.7",
      description: "Máy ảnh DSLR chuyên nghiệp của Canon.",
    },
    {
      id: 22,
      name: "Nồi cơm điện Panasonic",
      price: 200000,
      imageUrl:
        "https://th.bing.com/th/id/OIP.BgIMhPxXErkHYQ-d_kFPeQHaHa?w=165&h=180&c=7&r=0&o=5&pid=1.7",
      description: "Nồi cơm điện thông minh, tiết kiệm điện.",
    },
    {
      id: 23,
      name: "Máy sấy tóc Philips",
      price: 150000,
      imageUrl:
        "https://th.bing.com/th/id/OIP.RJpOntkdcDScFkKpKs2bXgHaHa?w=220&h=220&c=7&r=0&o=5&pid=1.7",
      description: "Máy sấy tóc với công nghệ ion, làm tóc mềm mượt.",
    },
    {
      id: 24,
      name: "Đồng hồ Casio",
      price: 35000,
      imageUrl:
        "https://th.bing.com/th/id/OIP.UnYFrpTZdb9SvYX6YDPFGgHaHa?w=197&h=197&c=7&r=0&o=5&pid=1.7",
      description: "Đồng hồ đeo tay nam tính, thời trang từ Casio.",
    },
  ];

  const [searchTerm, setSearchTerm] = useState(""); // Từ khóa tìm kiếm
  const [sortOrder, setSortOrder] = useState("asc"); // Để sắp xếp theo giá (asc hoặc desc)

  // Lọc sản phẩm theo tên
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sắp xếp sản phẩm theo giá
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price - b.price; // Sắp xếp tăng dần
    } else {
      return b.price - a.price; // Sắp xếp giảm dần
    }
  });

  return (
    <section className="product-list">
      <h2>Danh sách sản phẩm</h2>

      {/* Tìm kiếm */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Sắp xếp theo giá */}
      <div className="sort-by-price">
        <select
          onChange={(e) => setSortOrder(e.target.value)}
          value={sortOrder}
        >
          <option value="asc">Sắp xếp theo giá: Tăng dần</option>
          <option value="desc">Sắp xếp theo giá: Giảm dần</option>
        </select>
      </div>

      {/* Hiển thị sản phẩm */}
      <div className="products">
        {sortedProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price} VNĐ</p>
            <button onClick={() => addToCart(product)}>
              Thêm vào giỏ hàng
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductList;
