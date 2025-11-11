-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 06, 2025 at 09:32 AM
-- Server version: 11.8.3-MariaDB-log
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u846163676_silentparrot`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_users`
--

CREATE TABLE `admin_users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `full_name` varchar(100) NOT NULL,
  `role` enum('super_admin','admin','editor') DEFAULT 'admin',
  `status` enum('active','inactive') DEFAULT 'active',
  `last_login` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admin_users`
--

INSERT INTO `admin_users` (`id`, `username`, `email`, `password`, `full_name`, `role`, `status`, `last_login`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin@silentparrot.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Super Admin', 'super_admin', 'active', NULL, '2025-11-05 13:04:08', '2025-11-05 13:04:08');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `slug` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `status` enum('active','inactive') DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `slug`, `description`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Mercerized Cotton', 'mercerized', 'Premium mercerized cotton underwear', 'active', '2025-11-05 13:04:08', '2025-11-05 13:04:08'),
(2, 'Everyday Essential', 'everyday-essential', 'Daily comfort essentials', 'active', '2025-11-05 13:04:08', '2025-11-05 13:04:08'),
(3, 'Premium Collection', 'premium', 'Luxury premium collection', 'active', '2025-11-05 13:04:08', '2025-11-05 13:04:08');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `order_number` varchar(50) NOT NULL,
  `customer_name` varchar(100) NOT NULL,
  `customer_email` varchar(100) NOT NULL,
  `customer_phone` varchar(20) NOT NULL,
  `shipping_address` text NOT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `payment_status` enum('pending','paid','failed','refunded') DEFAULT 'pending',
  `order_status` enum('pending','processing','shipped','delivered','cancelled') DEFAULT 'pending',
  `payment_method` varchar(50) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` varchar(50) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `size` varchar(10) NOT NULL,
  `color` varchar(100) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` varchar(50) NOT NULL,
  `name` varchar(255) NOT NULL,
  `category` varchar(100) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `color` varchar(100) NOT NULL,
  `material` varchar(50) DEFAULT NULL,
  `rating` decimal(3,2) DEFAULT 0.00,
  `rating_count` int(11) DEFAULT 0,
  `badge` varchar(50) DEFAULT NULL,
  `is_new` tinyint(1) DEFAULT 0,
  `stock_quantity` int(11) DEFAULT 100,
  `description` text DEFAULT NULL,
  `gender` enum('women','men','unisex') DEFAULT 'women',
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `status` enum('active','inactive','out_of_stock') DEFAULT 'active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `category`, `price`, `color`, `material`, `rating`, `rating_count`, `badge`, `is_new`, `stock_quantity`, `description`, `gender`, `created_at`, `updated_at`, `status`) VALUES
('m1', 'GRIPWARE Cotton Rib Vest', 'vests', 199.00, 'white', 'cotton', 4.50, 234, 'Premium', 1, 150, '100% Cotton Rib Vest with Silvadur Technology for lasting freshness', 'men', '2025-11-05 13:38:05', '2025-11-05 13:38:05', 'active'),
('m2', 'Premium Men\'s Undershirt', 'vests', 249.00, 'white', 'blend', 4.60, 189, 'New', 0, 120, 'Soft Touch Premium Undershirt with Comfort Fit', 'men', '2025-11-05 13:38:05', '2025-11-05 13:38:05', 'active'),
('m3', 'Cotton Rib Vest - White (3-Pack)', 'bundle', 549.00, 'white', 'cotton', 4.40, 298, 'Value Pack', 0, 85, 'Pack of 3 Cotton Rib Vests with Antibacterial Protection', 'men', '2025-11-05 13:38:05', '2025-11-05 13:38:05', 'active'),
('w1', 'SilentParrot 100% Mercerized Cotton Panties - Classic Blue', 'mercerized', 400.00, 'blue', NULL, 4.80, 425, '100% Cotton', 1, 115, NULL, 'women', '2025-11-05 13:04:08', '2025-11-05 13:04:08', 'active'),
('w2', 'SilentParrot Everyday Essential - Cotton Elastane Blend (Pink)', 'everyday-essential', 600.00, 'pink', NULL, 4.60, 312, 'Everyday Essential', 0, 118, NULL, 'women', '2025-11-05 13:04:08', '2025-11-05 13:04:08', 'active'),
('w3', 'SilentParrot Mercerized Cotton Collection - Multi Color Pack', 'mercerized', 799.00, 'multi', NULL, 4.70, 189, '3-Pack Value', 0, 90, NULL, 'women', '2025-11-05 13:04:08', '2025-11-05 13:04:08', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `product_features`
--

CREATE TABLE `product_features` (
  `id` int(11) NOT NULL,
  `product_id` varchar(50) NOT NULL,
  `feature_text` varchar(255) NOT NULL,
  `display_order` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_features`
--

INSERT INTO `product_features` (`id`, `product_id`, `feature_text`, `display_order`, `created_at`) VALUES
(1, 'w1', '100% Mercerized Cotton', 1, '2025-11-05 13:04:09'),
(2, 'w1', 'Anti-bacterial', 2, '2025-11-05 13:04:09'),
(3, 'w1', 'Soft & Breathable', 3, '2025-11-05 13:04:09'),
(4, 'w1', 'Premium Quality', 4, '2025-11-05 13:04:09'),
(5, 'w2', 'Cotton + Elastane', 1, '2025-11-05 13:04:09'),
(6, 'w2', 'Stretch Comfort', 2, '2025-11-05 13:04:09'),
(7, 'w2', 'Perfect Fit', 3, '2025-11-05 13:04:09'),
(8, 'w2', 'All-day Comfort', 4, '2025-11-05 13:04:09'),
(9, 'w3', '3-Pack Bundle', 1, '2025-11-05 13:04:09'),
(10, 'w3', '100% Mercerized Cotton', 2, '2025-11-05 13:04:09'),
(11, 'w3', 'Assorted Colors', 3, '2025-11-05 13:04:09'),
(12, 'w3', 'Premium Quality', 4, '2025-11-05 13:04:09'),
(13, 'm1', '100% Cotton', 1, '2025-11-05 13:38:05'),
(14, 'm1', 'Silvadur Technology', 2, '2025-11-05 13:38:05'),
(15, 'm1', 'Antibacterial', 3, '2025-11-05 13:38:05'),
(16, 'm2', 'Soft Touch', 1, '2025-11-05 13:38:05'),
(17, 'm2', 'Comfort Fit', 2, '2025-11-05 13:38:05'),
(18, 'm2', 'Breathable', 3, '2025-11-05 13:38:05'),
(19, 'm3', '3-Pack', 1, '2025-11-05 13:38:05'),
(20, 'm3', 'Antibacterial Protection', 2, '2025-11-05 13:38:05'),
(21, 'm3', 'Value Savings', 3, '2025-11-05 13:38:05');

-- --------------------------------------------------------

--
-- Table structure for table `product_images`
--

CREATE TABLE `product_images` (
  `id` int(11) NOT NULL,
  `product_id` varchar(50) NOT NULL,
  `image_url` text NOT NULL,
  `is_primary` tinyint(1) DEFAULT 0,
  `display_order` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_images`
--

INSERT INTO `product_images` (`id`, `product_id`, `image_url`, `is_primary`, `display_order`, `created_at`) VALUES
(1, 'w1', 'https://www.silentparrot.in/wp-content/uploads/2025/06/2.jpg', 1, 1, '2025-11-05 13:04:08'),
(2, 'w2', 'https://divasprik.in/test/Silentparrot/frontend/ASSETS/images/womenproduct2.jpg', 1, 1, '2025-11-05 13:04:08'),
(3, 'w3', 'https://www.silentparrot.in/wp-content/uploads/2025/06/1.jpg', 1, 1, '2025-11-05 13:04:08'),
(4, 'm1', 'https://m.media-amazon.com/images/I/61ygRExvr7L._UY1100_.jpg', 1, 1, '2025-11-05 13:38:05'),
(5, 'm2', 'https://poomex.in/content/uploads/2024/04/G2B4457.jpg', 1, 1, '2025-11-05 13:38:05'),
(6, 'm3', 'https://ramrajcotton.in/cdn/shop/files/PACKOF4.jpg?v=1746246385&width=900', 1, 1, '2025-11-05 13:38:05');

-- --------------------------------------------------------

--
-- Table structure for table `product_sizes`
--

CREATE TABLE `product_sizes` (
  `id` int(11) NOT NULL,
  `product_id` varchar(50) NOT NULL,
  `size` varchar(10) NOT NULL,
  `stock_quantity` int(11) DEFAULT 10,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_sizes`
--

INSERT INTO `product_sizes` (`id`, `product_id`, `size`, `stock_quantity`, `created_at`) VALUES
(1, 'w1', 'XS', 15, '2025-11-05 13:04:08'),
(2, 'w1', 'S', 20, '2025-11-05 13:04:08'),
(3, 'w1', 'M', 25, '2025-11-05 13:04:08'),
(4, 'w1', 'L', 20, '2025-11-05 13:04:08'),
(5, 'w1', 'XL', 15, '2025-11-05 13:04:08'),
(6, 'w1', 'XXL', 10, '2025-11-05 13:04:08'),
(7, 'w1', 'XXXL', 10, '2025-11-05 13:04:08'),
(8, 'w2', 'S', 20, '2025-11-05 13:04:08'),
(9, 'w2', 'M', 25, '2025-11-05 13:04:08'),
(10, 'w2', 'L', 20, '2025-11-05 13:04:08'),
(11, 'w2', 'XL', 15, '2025-11-05 13:04:08'),
(12, 'w2', 'XXL', 10, '2025-11-05 13:04:08'),
(13, 'w2', 'XXXL', 8, '2025-11-05 13:04:08'),
(14, 'w3', 'M', 20, '2025-11-05 13:04:08'),
(15, 'w3', 'L', 25, '2025-11-05 13:04:08'),
(16, 'w3', 'XL', 20, '2025-11-05 13:04:08'),
(17, 'w3', 'XXL', 15, '2025-11-05 13:04:08'),
(18, 'w3', 'XXXL', 10, '2025-11-05 13:04:08'),
(19, 'm1', 'S', 25, '2025-11-05 13:38:05'),
(20, 'm1', 'M', 35, '2025-11-05 13:38:05'),
(21, 'm1', 'L', 30, '2025-11-05 13:38:05'),
(22, 'm1', 'XL', 30, '2025-11-05 13:38:05'),
(23, 'm1', 'XXL', 30, '2025-11-05 13:38:05'),
(24, 'm2', 'M', 30, '2025-11-05 13:38:05'),
(25, 'm2', 'L', 30, '2025-11-05 13:38:05'),
(26, 'm2', 'XL', 30, '2025-11-05 13:38:05'),
(27, 'm2', 'XXL', 30, '2025-11-05 13:38:05'),
(28, 'm3', 'S', 15, '2025-11-05 13:38:05'),
(29, 'm3', 'M', 20, '2025-11-05 13:38:05'),
(30, 'm3', 'L', 20, '2025-11-05 13:38:05'),
(31, 'm3', 'XL', 15, '2025-11-05 13:38:05'),
(32, 'm3', 'XXL', 15, '2025-11-05 13:38:05');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_users`
--
ALTER TABLE `admin_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `idx_username` (`username`),
  ADD KEY `idx_status` (`status`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `order_number` (`order_number`),
  ADD KEY `idx_order_number` (`order_number`),
  ADD KEY `idx_customer_email` (`customer_email`),
  ADD KEY `idx_order_status` (`order_status`),
  ADD KEY `idx_payment_status` (`payment_status`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_order` (`order_id`),
  ADD KEY `idx_product` (`product_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_gender` (`gender`),
  ADD KEY `idx_status` (`status`),
  ADD KEY `idx_category` (`category`);

--
-- Indexes for table `product_features`
--
ALTER TABLE `product_features`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_product` (`product_id`);

--
-- Indexes for table `product_images`
--
ALTER TABLE `product_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_product` (`product_id`);

--
-- Indexes for table `product_sizes`
--
ALTER TABLE `product_sizes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_product_size` (`product_id`,`size`),
  ADD KEY `idx_product` (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_users`
--
ALTER TABLE `admin_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product_features`
--
ALTER TABLE `product_features`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `product_images`
--
ALTER TABLE `product_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `product_sizes`
--
ALTER TABLE `product_sizes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `product_features`
--
ALTER TABLE `product_features`
  ADD CONSTRAINT `product_features_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `product_images`
--
ALTER TABLE `product_images`
  ADD CONSTRAINT `product_images_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `product_sizes`
--
ALTER TABLE `product_sizes`
  ADD CONSTRAINT `product_sizes_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
