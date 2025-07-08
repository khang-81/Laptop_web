-- Xóa database nếu tồn tại và tạo lại
DROP DATABASE IF EXISTS laptopweb;
CREATE DATABASE laptopweb CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE laptopweb;

-- DROP các bảng theo thứ tự ràng buộc
DROP TABLE IF EXISTS order_items;
DROP TABLE IF EXISTS carts;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS news;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS categories;

-- 1. Bảng categories
CREATE TABLE categories (
  category_id INT AUTO_INCREMENT PRIMARY KEY,
  category_name VARCHAR(255) NOT NULL,
  description VARCHAR(500),
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO categories (category_name, description) VALUES
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

-- 2. Bảng users
CREATE TABLE users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL,
  full_name VARCHAR(100),
  phone VARCHAR(20),
  address VARCHAR(255),
  role ENUM('user','admin') NOT NULL DEFAULT 'user',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO users (username, email, password, full_name, phone, address, role) VALUES
('admin','admin@example.com','password123','Nguyễn Văn A','0912345678','Hà Nội','admin'),
('user1','user1@example.com','password123','Lê Thị B','0912345679','Hải Phòng','user'),
('user2','user2@example.com','password123','Trần Văn C','0912345680','Đà Nẵng','user'),
('user3','user3@example.com','password123','Phạm Thị D','0912345681','Huế','user'),
('user4','user4@example.com','password123','Hoàng Văn E','0912345682','Nghệ An','user'),
('user5','user5@example.com','password123','Võ Thị F','0912345683','Quảng Nam','user'),
('user6','user6@example.com','password123','Đặng Văn G','0912345684','Thừa Thiên Huế','user'),
('user7','user7@example.com','password123','Bùi Thị H','0912345685','Thanh Hóa','user'),
('user8','user8@example.com','password123','Ngô Văn I','0912345686','Bình Định','user'),
('user9','user9@example.com','password123','Huỳnh Thị K','0912345687','Khánh Hòa','user'),
('user10','user10@example.com','password123','Phan Văn L','0912345688','Kon Tum','user'),
('user11','user11@example.com','password123','Trịnh Thị M','0912345689','Bình Thuận','user'),
('user12','user12@example.com','password123','Lý Văn N','0912345690','Đắk Lắk','user'),
('user13','user13@example.com','password123','Vũ Thị O','0912345691','Lâm Đồng','user'),
('user14','user14@example.com','password123','Phùng Văn P','0912345692','Gia Lai','user'),
('user15','user15@example.com','password123','Tạ Thị Q','0912345693','Đồng Nai','user'),
('user16','user16@example.com','password123','Đỗ Văn R','0912345694','Bà Rịa–Vũng Tàu','user'),
('user17','user17@example.com','password123','Trần Thị S','0912345695','Hồ Chí Minh','user'),
('user18','user18@example.com','password123','Nguyễn Văn T','0912345696','Cần Thơ','user'),
('user19','user19@example.com','password123','Lê Thị U','0912345697','An Giang','user'),
('user20','user20@example.com','password123','Phạm Văn V','0912345698','Kiên Giang','user');

-- 3. Bảng products
CREATE TABLE products (
  product_id INT AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(255) NOT NULL,
  description VARCHAR(1000),
  price DECIMAL(18,2) NOT NULL,
  stock_quantity INT NOT NULL DEFAULT 0,
  category_id INT,
  image_url VARCHAR(500),
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES categories(category_id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO products (product_name, description, price, stock_quantity, category_id, image_url) VALUES
('Lenovo Ideapad', 'Laptop Lenovo Ideapad Ultrabook 2025', 25990000, 10, 1, 'https://example.com/images/lenovo-ideapad.png'),
('Dell XPS 13', 'Máy tính xách tay Dell XPS 13 dành cho công việc', 28990000, 7, 2, 'https://example.com/images/dell-xps.png'),
('MacBook Air M1', 'Macbook Air M1 với cấu hình mạnh mẽ', 32990000, 15, 6, 'https://example.com/images/macbook-air.png'),
('HP Spectre x360', 'Laptop HP Spectre x360 với màn hình cảm ứng', 35990000, 8, 1, 'https://example.com/images/hp-spectre.png'),
('Acer Predator', 'Laptop gaming Acer Predator cấu hình cao', 44990000, 5, 2, 'https://example.com/images/acer-predator.png'),
('Asus Zenbook', 'Laptop Asus Zenbook cho công việc văn phòng', 21990000, 12, 1, 'https://example.com/images/asus-zenbook.png'),
('MSI GE66 Raider', 'Laptop MSI GE66 Raider cho game thủ', 38990000, 3, 2, 'https://example.com/images/msi-ge66.png'),
('Razer Blade 15', 'Laptop gaming Razer Blade 15 siêu mạnh', 52990000, 4, 2, 'https://example.com/images/razer-blade.png'),
('Dell G5 15', 'Máy tính Dell G5 15 chuyên chơi game', 26990000, 6, 2, 'https://example.com/images/dell-g5.png'),
('ThinkPad X1 Carbon', 'Laptop Lenovo ThinkPad X1 Carbon cho doanh nhân', 47990000, 9, 1, 'https://example.com/images/thinkpad-x1.png'),
('Surface Laptop 4', 'Laptop Surface Laptop 4 dành cho công việc văn phòng', 28990000, 11, 1, 'https://example.com/images/surface-laptop.png'),
('Galaxy Book Pro', 'Laptop Samsung Galaxy Book Pro mỏng nhẹ', 31990000, 14, 1, 'https://example.com/images/galaxy-book.png'),
('MacBook Pro 14', 'MacBook Pro 14 inch với hiệu suất mạnh mẽ', 52990000, 2, 6, 'https://example.com/images/macbook-pro.png'),
('HP Envy x360', 'Laptop HP Envy x360 với màn hình cảm ứng', 30990000, 10, 1, 'https://example.com/images/hp-envy.png'),
('MacBook Pro 16', 'MacBook Pro 16 inch với hiệu suất đồ họa tuyệt vời', 64990000, 3, 6, 'https://example.com/images/macbook-pro-16.png'),
('Dell Inspiron 15', 'Máy tính Dell Inspiron 15 với cấu hình ổn định', 21990000, 20, 1, 'https://example.com/images/dell-inspiron.png'),
('Asus TUF Gaming', 'Laptop Asus TUF Gaming cho game thủ chuyên nghiệp', 38990000, 5, 2, 'https://example.com/images/asus-tuf.png'),
('Legion 5', 'Laptop gaming Lenovo Legion 5 cho game thủ', 46990000, 6, 2, 'https://example.com/images/legion-5.png'),
('MacBook Pro 13', 'MacBook Pro 13 inch cho công việc và đồ họa', 42990000, 8, 6, 'https://example.com/images/macbook-pro-13.png'),
('HP Pavilion 14', 'Laptop HP Pavilion 14 cho công việc văn phòng', 19990000, 10, 1, 'https://example.com/images/hp-pavilion.png');

-- 4. Bảng news
CREATE TABLE news (
  news_id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT,
  published_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  views INT NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO news (title, content, views) VALUES
('Thông Báo Lịch Làm Việc', 'Lịch làm việc dịp lễ 30/4 và 1/5', 1426),
('Đặt Lịch Hẹn Trước', 'Hướng dẫn đặt lịch hẹn để được hỗ trợ kịp thời', 1312),
('Chính Sách Giao Hàng', 'Chính sách giao hàng miễn phí cho đơn hàng trên 1 triệu đồng', 1124),
('Khuyến Mãi Mùa Hè', 'Mua laptop mới giảm ngay 20% trong mùa hè 2025', 1350),
('Bảo Hành Sản Phẩm', 'Thông tin về chế độ bảo hành và bảo trì sản phẩm', 1023),
('Ra Mắt Laptop Mới', 'Laptop XYZ cấu hình mới ra mắt tại sự kiện tháng 5', 1500),
('Sản Phẩm Mới', 'Tìm hiểu các sản phẩm công nghệ mới ra mắt tại cửa hàng', 1200),
('Ưu Đãi Đặc Biệt', 'Giảm giá đặc biệt cho sinh viên và học sinh', 900),
('Hướng Dẫn Đặt Hàng', 'Cách đặt hàng nhanh chóng và tiện lợi qua website', 950),
('Chính Sách Đổi Trả', 'Thông tin về chính sách đổi trả trong 30 ngày', 800),
('Lễ Hội Mua Sắm', 'Lễ hội mua sắm giảm giá đặc biệt dịp cuối năm', 870),
('Laptop Gaming Là Gì', 'Laptop gaming là gì và chọn lựa phù hợp', 1000),
('Đánh Giá Laptop Mới', 'Nhận xét về các dòng laptop ra mắt trong tháng qua', 1100),
('Bảo Mật Website', 'Cam kết bảo mật thông tin khách hàng', 980),
('Hướng Dẫn Sử Dụng', 'Cách sử dụng laptop hiệu quả', 1200),
('Thử Nghiệm Sản Phẩm', 'Tham gia chương trình thử nghiệm laptop mới', 1100),
('Đặt Hàng Trước', 'Ưu đãi khi đặt hàng trước các dòng laptop mới', 980),
('Laptop Giáng Sinh', 'Lựa chọn laptop cho mùa Giáng Sinh với nhiều khuyến mãi', 920),
('Laptop Chính Hãng', 'Mua laptop chính hãng từ thương hiệu uy tín', 1050),
('Cập Nhật Thông Tin', 'Theo dõi các thông tin mới nhất về laptop', 1100);

-- 5. Bảng orders
CREATE TABLE orders (
  order_id INT AUTO_INCREMENT PRIMARY KEY,
  customer_name VARCHAR(255),
  customer_email VARCHAR(255),
  order_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  total_amount DECIMAL(18,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO orders (customer_name, customer_email, total_amount) VALUES
('Trung Tran','trung.tran@example.com',60000000),
('Nguyen Thi Lan','lan.nguyen@example.com',55000000),
('Le Minh Quang','quang.le@example.com',40000000),
('Pham Anh Tuan','tuan.pham@example.com',30000000),
('Nguyen Thi Mai','mai.nguyen@example.com',50000000),
('Tran Minh Tu','tu.tran@example.com',35000000),
('Hoang Thanh Binh','binh.hoang@example.com',42000000),
('Phan Minh Quang','quang.phan@example.com',55000000),
('Nguyen Hoang An','an.nguyen@example.com',48000000),
('Le Thao Vy','vy.le@example.com',60000000),
('Tran Thao My','my.tran@example.com',35000000),
('Nguyen Mai Lan','lanmai.nguyen@example.com',47000000),
('Hoang Thi Thao','thao.hoang@example.com',52000000),
('Phan Minh Mai','maiphan.minh@example.com',39000000),
('Truong Thanh Son','son.truong@example.com',46000000),
('Nguyen Thi Huong','huong.nguyen@example.com',51000000),
('Mai Quang Tu','tuquang.mai@example.com',55000000),
('Le Thi Lan','lanle.thi@example.com',45000000),
('Tran Hoang Lan','lan.tranhoang@example.com',49000000);
('Tran Hoang Ngoc','lan.ngoc@example.com',44000000);
-- 6. Bảng order_items
CREATE TABLE order_items (
  order_item_id INT AUTO_INCREMENT PRIMARY KEY,
  order_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL DEFAULT 1,
  price DECIMAL(18,2) NOT NULL,
  FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO order_items (order_id, product_id, quantity, price) VALUES
(1,1,2,25990000),(2,2,1,28990000),(3,3,3,32990000),(4,4,1,35990000),
(5,5,1,44990000),(6,6,2,21990000),(7,7,2,38990000),(8,8,1,52990000),
(9,9,1,26990000),(10,10,1,47990000),(11,11,1,28990000),(12,12,1,31990000),
(13,13,2,52990000),(14,14,1,64990000),(15,15,2,30990000),(16,16,1,64990000),
(17,17,3,64990000),(18,18,1,21990000),(19,19,2,38990000),(20,20,1,26990000);

-- 7. Bảng carts
CREATE TABLE carts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL DEFAULT 1,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO carts (user_id, product_id, quantity) VALUES
(1,1,1),(2,2,2),(3,3,1),(4,4,3),(5,5,1),
(6,6,2),(7,7,1),(8,8,3),(9,9,1),(10,10,2),
(11,11,1),(12,12,2),(13,13,1),(14,14,3),(15,15,1),
(16,16,2),(17,17,1),(18,18,3),(19,19,1),(20,20,2);
