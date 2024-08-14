-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 14, 2024 at 05:36 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eccomerce`
--
CREATE DATABASE IF NOT EXISTS `eccomerce` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `eccomerce`;

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `idBooks` char(36) NOT NULL DEFAULT uuid(),
  `Books_name` varchar(45) NOT NULL,
  `price` int(4) NOT NULL,
  `author_libr` varchar(45) NOT NULL,
  `image` varchar(50) NOT NULL,
  `description` varchar(60) NOT NULL,
  `stars` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`idBooks`, `Books_name`, `price`, `author_libr`, `image`, `description`, `stars`) VALUES
('12ab90c0-59eb-11ef-b65e-2c44fd2013ec', 'Mi oscuro Romeo', 10, 'Parker S. Huntington, L.J Shen', 'assets/Books/Libro1.png', 'Description 1', 4),
('cd9c5b51-59ed-11ef-b65e-2c44fd2013ec', 'Amxr', 15, 'César Martínez', 'assets/Books/Libro2.png', 'Description 2', 5),
('cd9d0063-59ed-11ef-b65e-2c44fd2013ec', 'No confies en Asher Hall', 20, 'Myriam M. Lejardi', 'assets/Books/Libro3.png', '', 4),
('cd9d01b6-59ed-11ef-b65e-2c44fd2013ec', 'Tan Poca Vida', 20, 'Hanya Yanagihara', 'assets/Books/Libro4.png', '', 4),
('cd9d0211-59ed-11ef-b65e-2c44fd2013ec', 'Los siete maridos de Evelyn Hugo', 20, 'Taylor Jenkins Reid', 'assets/Books/Libro5.png', '', 4),
('cd9d0269-59ed-11ef-b65e-2c44fd2013ec', 'El color de las cosas invisibles', 20, 'Andrea Longarela', 'assets/Books/Libro6.png', '', 4),
('cd9d02c5-59ed-11ef-b65e-2c44fd2013ec', 'Reiniciados', 20, 'Amy Tintera', 'assets/Books/Libro7.png', '', 4),
('cd9d031b-59ed-11ef-b65e-2c44fd2013ec', 'La letra pequeña', 20, 'Lauren Asher', 'assets/Books/Libro8.png', '', 4),
('cd9d036e-59ed-11ef-b65e-2c44fd2013ec', 'La Biblioteca de la medianoche', 20, 'Matt Haig', 'assets/Books/Libro9.png', '', 4),
('cd9d03c2-59ed-11ef-b65e-2c44fd2013ec', 'Aquiles', 20, 'Madeline Miller', 'assets/Books/Libro10.png', '', 4),
('cd9d0412-59ed-11ef-b65e-2c44fd2013ec', 'Donde viven las Musas', 20, 'Marianela Dos Santos', 'assets/Books/Libro11.png', '', 4);

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

CREATE TABLE `client` (
  `id_client` char(36) NOT NULL DEFAULT uuid(),
  `client_name` varchar(50) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `email` varchar(40) NOT NULL,
  `address` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `client`
--

INSERT INTO `client` (`id_client`, `client_name`, `phone`, `email`, `address`) VALUES
('2490024d-5910-11ef-83b0-2c44fd2013ec', 'Harold Garces', '3117289500', 'davidgarces171@gmail.com', 'calle 13 12-30'),
('bf597b05-5907-11ef-83b0-2c44fd2013ec', 'John Doe', '12345678', 'user@example.com', '1234 Elm Street'),
('e9df7d60-5800-11ef-9ae1-2c44fd2013ec', 'Juan Pérez', '1234567890', 'juan.perez@example.com', 'Calle 123, Ciudad');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `login_id` char(36) NOT NULL DEFAULT uuid(),
  `email` varchar(255) NOT NULL,
  `password` char(255) NOT NULL,
  `client_id` char(36) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`login_id`, `email`, `password`, `client_id`) VALUES
('24a44af4-5910-11ef-83b0-2c44fd2013ec', 'davidgarces171@gmail.com', '$2b$10$s/kNsQHq94so.q4tn1/4P.RT7IRVRKGcEGPTF6IpZV.SrYjNr6gDy', '2490024d-5910-11ef-83b0-2c44fd2013ec'),
('bf6031d4-5907-11ef-83b0-2c44fd2013ec', 'user@example.com', '$2b$10$4PQGYqipSivUJHE5G1ynSuhMl8AMLR.uTWshl62bK961ix4dBNFcu', 'bf597b05-5907-11ef-83b0-2c44fd2013ec'),
('fd2f0c82-5800-11ef-9ae1-2c44fd2013ec', 'juan.perez@example.com', '$2a$12$1vPEK3SKUnW18kixcKtj/uOHOT2bfhO8r3.Zhg5X6cy1ZLh2VmEVu', 'e9df7d60-5800-11ef-9ae1-2c44fd2013ec');

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `id` char(36) NOT NULL DEFAULT uuid(),
  `book_id` char(36) DEFAULT NULL,
  `books_name` varchar(255) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `payment_method_id` char(36) DEFAULT NULL,
  `client_id` char(36) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `payment_method`
--

CREATE TABLE `payment_method` (
  `id_pay_method` char(36) NOT NULL DEFAULT uuid(),
  `pay_metho_name` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`idBooks`);

--
-- Indexes for table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id_client`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`login_id`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`),
  ADD KEY `client_id` (`client_id`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `book_id` (`book_id`),
  ADD KEY `payment_method_id` (`payment_method_id`),
  ADD KEY `client_id` (`client_id`);

--
-- Indexes for table `payment_method`
--
ALTER TABLE `payment_method`
  ADD PRIMARY KEY (`id_pay_method`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `login`
--
ALTER TABLE `login`
  ADD CONSTRAINT `login_ibfk_1` FOREIGN KEY (`client_id`) REFERENCES `client` (`id_client`);

--
-- Constraints for table `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `order_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `books` (`idBooks`),
  ADD CONSTRAINT `order_ibfk_2` FOREIGN KEY (`payment_method_id`) REFERENCES `payment_method` (`id_pay_method`),
  ADD CONSTRAINT `order_ibfk_3` FOREIGN KEY (`client_id`) REFERENCES `client` (`id_client`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
