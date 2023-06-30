-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 30, 2023 at 09:50 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `avepoint`
--

-- --------------------------------------------------------

--
-- Table structure for table `cafes`
--

CREATE TABLE `cafes` (
  `id` varchar(100) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cafes`
--

INSERT INTO `cafes` (`id`, `name`, `description`, `logo`, `location`) VALUES
('daa321d6-1714-11ee-a999-acde48001122', 'Starbucks', 'Discount 50% for breakfast', NULL, 'ToaPayoh, Near MRT'),
('e903912a-1714-11ee-a999-acde48001122', 'MacDonal', 'Discount 50% for Lunch', NULL, 'Bishan, Singapore');

--
-- Triggers `cafes`
--
DELIMITER $$
CREATE TRIGGER `cafes_uuid_trigger` BEFORE INSERT ON `cafes` FOR EACH ROW BEGIN
  SET NEW.id = UUID();
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` varchar(10) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `email_address` varchar(100) DEFAULT NULL,
  `phone_number` varchar(10) DEFAULT NULL,
  `gender` enum('Male','Female') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `name`, `email_address`, `phone_number`, `gender`) VALUES
('UI0000090', 'Linn 2023', 'linn@gmail.com', '93492091', 'Male'),
('UI0000092', 'Linn 2023', 'linn@gmail.com', '93492091', 'Male'),
('UI0000093', 'LINN LIN', 'linlintun1197@gmail.com', '93492091', 'Male');

--
-- Triggers `employees`
--
DELIMITER $$
CREATE TRIGGER `tg_employees_insert` BEFORE INSERT ON `employees` FOR EACH ROW BEGIN
  INSERT INTO employees_sequence VALUES (NULL);
  SET NEW.id = CONCAT('UI', LPAD(LAST_INSERT_ID(), 7, '0'));
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `employees_sequence`
--

CREATE TABLE `employees_sequence` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `employees_sequence`
--

INSERT INTO `employees_sequence` (`id`) VALUES
(84),
(85),
(86),
(87),
(88),
(89),
(90),
(91),
(92),
(93);

-- --------------------------------------------------------

--
-- Table structure for table `employee_cafe`
--

CREATE TABLE `employee_cafe` (
  `employee_id` varchar(10) DEFAULT NULL,
  `cafe_id` varchar(100) DEFAULT NULL,
  `start_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `employee_cafe`
--

INSERT INTO `employee_cafe` (`employee_id`, `cafe_id`, `start_date`) VALUES
('UI0000090', 'daa321d6-1714-11ee-a999-acde48001122', '2023-06-30'),
('UI0000092', 'e903912a-1714-11ee-a999-acde48001122', '2023-06-30'),
('UI0000093', 'e903912a-1714-11ee-a999-acde48001122', '2023-06-30');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cafes`
--
ALTER TABLE `cafes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employees_sequence`
--
ALTER TABLE `employees_sequence`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employee_cafe`
--
ALTER TABLE `employee_cafe`
  ADD UNIQUE KEY `uc_employee_cafe` (`employee_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employees_sequence`
--
ALTER TABLE `employees_sequence`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
