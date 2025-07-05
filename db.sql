CREATE DATABASE laptopweb;
USE laptopweb;

-- Tạo bảng categories
CREATE TABLE categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL,
    description VARCHAR(500) CHARACTER SET utf8mb4,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Chèn 20 bản dữ liệu vào bảng categories
INSERT INTO categories (category_name, description)
VALUES 
('Máy tính xách tay', 'Các sản phẩm máy tính xách tay đa dạng, từ cơ bản đến cao cấp'),
('Laptop Gaming - Đồ Họa', 'Laptop chuyên dụng cho game thủ và đồ họa'),
('Laptop Văn phòng', 'Laptop cho công việc văn phòng'),
('Laptop Lập trình', 'Laptop dành cho lập trình viên'),
('Laptop cao cấp', 'Laptop cao cấp với cấu hình mạnh mẽ và thiết kế tinh tế'),
('Apple Macbook', 'Sản phẩm Macbook của Apple'),
('RAM - SSD', 'Lưu trữ RAM và SSD cho máy tính'),
('Máy tính để bàn', 'Các loại máy tính để bàn cho công việc, chơi game'),
('Laptop 2 trong 1', 'Laptop có thể biến thành máy tính bảng'),
('Máy tính học sinh', 'Laptop học sinh với cấu hình vừa phải và giá thành hợp lý'),
('Laptop doanh nhân', 'Máy tính xách tay dành cho doanh nhân với thiết kế sang trọng'),
('Laptop màn hình lớn', 'Laptop với màn hình lớn để phục vụ công việc đa nhiệm'),
('Laptop siêu mỏng', 'Laptop mỏng nhẹ, dễ mang theo'),
('Laptop gaming cao cấp', 'Laptop dành cho game thủ với cấu hình mạnh mẽ'),
('Máy tính chơi game', 'Các loại máy tính để chơi game với hiệu suất cao'),
('Macbook Pro', 'Macbook Pro với thiết kế và hiệu suất mạnh mẽ'),
('Laptop đồ họa', 'Laptop với cấu hình đồ họa mạnh mẽ, phục vụ cho thiết kế và dựng phim'),
('Laptop đa năng', 'Laptop có thể sử dụng cho nhiều mục đích khác nhau'),
('Laptop giá rẻ', 'Các dòng laptop giá rẻ, phù hợp với sinh viên và học sinh'),
('Máy tính All-in-one', 'Máy tính để bàn với thiết kế tích hợp tất cả trong một');

-- Tạo bảng products
CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL,
    description VARCHAR(1000) CHARACTER SET utf8mb4,
    price DECIMAL(18, 2) NOT NULL,
    stock_quantity INT DEFAULT 0,
    category_id INT,
    image_url VARCHAR(500) CHARACTER SET utf8mb4,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

-- Chèn 20 bản dữ liệu vào bảng products
INSERT INTO products (product_name, description, price, stock_quantity, category_id, image_url)
VALUES
('Lenovo Ideapad', 'Laptop Lenovo Ideapad Ultrabook 2025', 25990000, 10, 1, 'https://example.com/images/lenovo-ideapad.png'),
('Dell XPS 13', 'Máy tính xách tay Dell XPS 13 dành cho công việc', 28990000, 7, 2, 'https://example.com/images/dell-xps.png'),
('MacBook Air M1', 'Macbook Air M1 với cấu hình mạnh mẽ', 32990000, 15, 6, 'https://example.com/images/macbook-air.png'),
('HP Spectre x360', 'Laptop HP Spectre x360 với màn hình cảm ứng', 35990000, 8, 1, 'https://example.com/images/hp-spectre.png'),
('Acer Predator', 'Laptop gaming Acer Predator cấu hình cao', 44990000, 5, 2, 'https://example.com/images/acer-predator.png'),
('Asus Zenbook', 'Laptop Asus Zenbook cho công việc văn phòng', 21990000, 12, 1, 'https://example.com/images/asus-zenbook.png'),
('MSI GE66 Raider', 'Laptop MSI GE66 Raider cho game thủ', 38990000, 3, 2, 'https://example.com/images/msi-ge66.png'),
('Razer Blade 15', 'Laptop gaming Razer Blade 15 siêu mạnh', 52990000, 4, 2, 'https://example.com/images/razer-blade.png'),
('Dell G5 15', 'Máy tính Dell G5 15 chuyên chơi game', 26990000, 6, 2, 'https://example.com/images/dell-g5.png'),
('Lenovo ThinkPad X1 Carbon', 'Laptop Lenovo ThinkPad X1 Carbon cho doanh nhân', 47990000, 9, 1, 'https://example.com/images/thinkpad-x1.png'),
('Surface Laptop 4', 'Laptop Surface Laptop 4 dành cho công việc văn phòng', 28990000, 11, 1, 'https://example.com/images/surface-laptop.png'),
('Samsung Galaxy Book Pro', 'Laptop Samsung Galaxy Book Pro mỏng nhẹ', 31990000, 14, 1, 'https://example.com/images/galaxy-book.png'),
('Apple MacBook Pro 14', 'MacBook Pro 14 inch với hiệu suất mạnh mẽ', 52990000, 2, 6, 'https://example.com/images/macbook-pro.png'),
('HP Envy x360', 'Laptop HP Envy x360 với màn hình cảm ứng', 30990000, 10, 1, 'https://example.com/images/hp-envy.png'),
('Apple MacBook Pro 16', 'MacBook Pro 16 inch với hiệu suất đồ họa tuyệt vời', 64990000, 3, 6, 'https://example.com/images/macbook-pro-16.png'),
('Dell Inspiron 15', 'Máy tính Dell Inspiron 15 với cấu hình ổn định', 21990000, 20, 1, 'https://example.com/images/dell-inspiron.png'),
('Asus TUF Gaming', 'Laptop Asus TUF Gaming cho game thủ chuyên nghiệp', 38990000, 5, 2, 'https://example.com/images/asus-tuf.png'),
('Lenovo Legion 5', 'Laptop gaming Lenovo Legion 5 cho game thủ', 46990000, 6, 2, 'https://example.com/images/legion-5.png'),
('MacBook Pro 13', 'MacBook Pro 13 inch cho công việc và đồ họa', 42990000, 8, 6, 'https://example.com/images/macbook-pro-13.png'),
('HP Pavilion 14', 'Laptop HP Pavilion 14 cho công việc văn phòng', 19990000, 10, 1, 'https://example.com/images/hp-pavilion.png');

-- Tạo bảng news
CREATE TABLE news (
    news_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL,
    content TEXT CHARACTER SET utf8mb4,
    published_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    views INT DEFAULT 0
);

-- Chèn 20 bản dữ liệu vào bảng news
INSERT INTO news (title, content, views)
VALUES
('Thông Báo Lịch Làm Việc', 'Lịch làm việc dịp lễ 30/4 và 1/5', 1426),
('Đặt Lịch Hẹn Trước Để Được Hỗ Trợ Tốt Hơn', 'Hướng dẫn đặt lịch hẹn để được hỗ trợ kịp thời', 1312),
('Cập Nhật Chính Sách Mới Về Giao Hàng', 'Chính sách giao hàng miễn phí cho đơn hàng trên 1 triệu đồng', 1124),
('Khuyến Mãi Hè 2025', 'Mua laptop mới giảm ngay 20% trong mùa hè 2025', 1350),
('Bảo Hành Sản Phẩm', 'Thông tin về chế độ bảo hành và bảo trì sản phẩm', 1023),
('Sự Kiện Ra Mắt Laptop Mới', 'Laptop XYZ với cấu hình mới ra mắt tại sự kiện tháng 5', 1500),
('Khám Phá Những Sản Phẩm Mới', 'Tìm hiểu các sản phẩm công nghệ mới ra mắt tại cửa hàng', 1200),
('Chương Trình Ưu Đãi Lớn', 'Giảm giá đặc biệt cho sinh viên và học sinh', 900),
('Hướng Dẫn Đặt Hàng Online', 'Cách đặt hàng nhanh chóng và tiện lợi qua website', 950),
('Chính Sách Đổi Trả Sản Phẩm', 'Thông tin về chính sách đổi trả sản phẩm trong 30 ngày', 800),
('Mua Sắm Cùng Lễ Hội', 'Lễ hội mua sắm giảm giá đặc biệt dịp cuối năm', 870),
('Tìm Hiểu Về Laptop Gaming', 'Laptop gaming là gì và chọn lựa sản phẩm phù hợp', 1000),
('Đánh Giá Các Dòng Laptop Mới', 'Nhận xét về các dòng laptop ra mắt trong tháng qua', 1100),
('Chính Sách Bảo Mật Của Website', 'Cam kết bảo mật thông tin khách hàng khi mua hàng trực tuyến', 980),
('Hướng Dẫn Sử Dụng Laptop', 'Cách sử dụng laptop hiệu quả cho công việc và học tập', 1200),
('Chương Trình Thử Nghiệm Sản Phẩm', 'Tham gia chương trình thử nghiệm laptop mới của chúng tôi', 1100),
('Đặt Hàng Trước Để Nhận Quà Tặng', 'Ưu đãi đặc biệt khi đặt hàng trước các dòng laptop mới', 980),
('Laptop Mới Cho Mùa Giáng Sinh', 'Lựa chọn laptop cho mùa Giáng Sinh với nhiều khuyến mãi hấp dẫn', 920),
('Sản Phẩm Laptop Chính Hãng', 'Mua laptop chính hãng từ các thương hiệu uy tín', 1050),
('Cập Nhật Thông Tin Mới Nhất', 'Theo dõi các thông tin mới nhất về các dòng laptop', 1100);

-- Tạo bảng orders
CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(255) CHARACTER SET utf8mb4,
    customer_email VARCHAR(255) CHARACTER SET utf8mb4,
    order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    total_amount DECIMAL(18, 2) NOT NULL
);

-- Chèn 20 bản dữ liệu vào bảng orders
INSERT INTO orders (customer_name, customer_email, total_amount)
VALUES
('Trung Tran', 'trung.tran@example.com', 60000000),
('Nguyen Thi Lan', 'lan.nguyen@example.com', 55000000),
('Le Minh Quang', 'quang.le@example.com', 40000000),
('Pham Anh Tuan', 'tuan.pham@example.com', 30000000),
('Nguyen Thi Mai', 'mai.nguyen@example.com', 50000000),
('Tran Minh Tu', 'tu.tran@example.com', 35000000),
('Hoang Thanh Binh', 'binh.hoang@example.com', 42000000),
('Phan Minh Quang', 'quang.phan@example.com', 55000000),
('Nguyen Hoang An', 'an.nguyen@example.com', 48000000),
('Le Thao Vy', 'vy.le@example.com', 60000000),
('Tran Thao My', 'my.tran@example.com', 35000000),
('Nguyen Mai Lan', 'lanmai.nguyen@example.com', 47000000),
('Hoang Thi Thao', 'thao.hoang@example.com', 52000000),
('Phan Minh Mai', 'maiphan.minh@example.com', 39000000),
('Truong Thanh Son', 'son.truong@example.com', 46000000),
('Nguyen Thi Huong', 'huong.nguyen@example.com', 51000000),
('Mai Quang Tu', 'tuquang.mai@example.com', 55000000),
('Le Thi Lan', 'lanle.thi@example.com', 45000000),
('Tran Hoang Lan', 'lan.tranhoang@example.com', 49000000);

-- Tạo bảng order_items
CREATE TABLE order_items (
    order_item_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT,
    price DECIMAL(18, 2),
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- Chèn 20 bản dữ liệu vào bảng order_items
INSERT INTO order_items (order_id, product_id, quantity, price)
VALUES
(1, 1, 2, 25990000),
(2, 2, 1, 28990000),
(3, 3, 3, 32990000),
(4, 4, 1, 35990000),
(5, 5, 1, 44990000),
(6, 6, 2, 21990000),
(7, 7, 2, 38990000),
(8, 8, 1, 52990000),
(9, 9, 1, 47990000),
(10, 10, 1, 28990000),
(11, 11, 1, 31990000),
(12, 12, 1, 52990000),
(13, 13, 2, 64990000),
(14, 14, 1, 31990000),
(15, 15, 2, 38990000),
(16, 16, 1, 46990000),
(17, 17, 3, 42990000),
(18, 18, 1, 21990000),
(19, 19, 2, 38990000),
(20, 20, 1, 26990000);


CREATE TABLE carts (
    id INT IDENTITY(1,1) PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT DEFAULT 1,
    created_at DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);