// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <div className="top-banner">
        coddeco - tạo dựng thương hiệu tinh dầu chất lượng và cam kết bảo hành đến giọt hương cuối cùng
      </div>
      <nav className="navbar">
        <div className="navbar-brand">CODEDECO</div>
        <ul className="navbar-nav">
          <li><a href="/">Câu chuyện thương hiệu</a></li>
          <li><a href="/">Sản phẩm</a></li>
          <li><a href="/">Phương tiện truyền thông</a></li>
          <li><a href="/">Liên hệ</a></li>
        </ul>
        <div className="navbar-icons">
          <input type="text" placeholder="Tìm kiếm sản phẩm" />
          <a href="/" className="cart-icon">🛒</a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
