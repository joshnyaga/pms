-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 14, 2023 at 05:18 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pms`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `type` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `username`, `password`, `email`, `type`) VALUES
(1, 'Joshua', '12345', 'josh@gmail.com', 'ADMIN'),
(2, 'Javan', '$2b$10$9MqisT1HY7nWWVPYta0.0Oi6qSOgDSMQW0kTNjjhsSokjYuchNL4a', 'javan@gmail.com', 'ADMIN');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `customer_id` int(11) NOT NULL,
  `customer_name` varchar(50) NOT NULL,
  `date_of_purchase` date NOT NULL,
  `gender` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customer_id`, `customer_name`, `date_of_purchase`, `gender`) VALUES
(1, 'Terry Medhurst', '2023-03-16', 'male'),
(2, 'Quigley Sheldon', '2023-03-22', 'male'),
(3, 'Alison Reichert', '2023-03-20', 'female'),
(4, 'Abbott Wyman', '2023-03-22', 'female'),
(5, 'Mueller Durgan', '2023-03-24', 'male'),
(6, 'Eleanora Price', '2023-03-27', 'female');

-- --------------------------------------------------------

--
-- Table structure for table `hospital_details`
--

CREATE TABLE `hospital_details` (
  `hospital_id` int(11) NOT NULL,
  `hospital_name` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `country` varchar(50) NOT NULL,
  `zip_code` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `hospital_details`
--

INSERT INTO `hospital_details` (`hospital_id`, `hospital_name`, `city`, `country`, `zip_code`) VALUES
(1, 'North York General Hospital', 'Toronto', 'Canada', '543534'),
(2, 'Centre hospitalier de l\'Université de Montréal', 'Montreal', 'Canada', '756746'),
(3, 'VCH - Vancouver General Hospital', 'Vancouver', 'Canada', '6854'),
(4, 'Rockyview General Hospital', 'Calgary', 'Canada', '85e756');

-- --------------------------------------------------------

--
-- Table structure for table `medicine_stock`
--

CREATE TABLE `medicine_stock` (
  `medicine_id` int(11) NOT NULL,
  `medicine_name` varchar(50) NOT NULL,
  `details` text NOT NULL,
  `quantity` int(11) NOT NULL,
  `expiry_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `medicine_stock`
--

INSERT INTO `medicine_stock` (`medicine_id`, `medicine_name`, `details`, `quantity`, `expiry_date`) VALUES
(1, 'Amoxicillin', 'Amoxicillin is a penicillin antibiotic that is commonly used to treat different types of bacterial infections, including strep throat, ear infections, pneumonia, and urinary tract infections. It’s considered a first-line treatment due to its effectiveness and low cost.', 5000, '2027-07-21'),
(2, 'Levothyroxine ', 'Levothyroxine is a thyroid replacement hormone that is generally used to treat an under-active thyroid. This condition, known as hypothyroidism, affects nearly 5% of Americans aged 12 years and older. As the most commonly prescribed medication for hypothyroidism, levothyroxine helps to increase the amount of thyroid hormone in the body, thereby managing symptoms such as fatigue, poor memory, weight gain, and depression.', 700, '2029-08-16'),
(3, 'Lisinopril', 'High blood pressure is a common condition that affects approximately 90% of Americans at some point in their lifetime. Lisinopril is often prescribed as a treatment for high blood pressure in adults and children older than 6. \r\n\r\nIt also can be used in combination with other medications to treat heart failure, which affects around 6.2 million adults in the United States. It works by blocking the production of a certain chemical that causes blood vessels to constrict, allowing blood to flow more easily and lowering a person’s overall blood pressure.', 497, '2025-04-17'),
(4, 'Ibuprofen ', 'This nonsteroidal anti-inflammatory drug (NSAID) is a popular medication that can be purchased over the counter or prescribed by a doctor in higher doses. It’s often prescribed to relieve pain and stiffness caused by osteoarthritis and rheumatoid arthritis, which affect over 32.5 million and 1.3 million Americans, respectively. Ibuprofen is also very commonly used for minor aches and pains, as well as fever.', 432, '2030-02-12'),
(5, 'Amphetamine/dextroamphetamine', 'Amphetamine/dextroamphetamine is a stimulant medication commonly prescribed for the treatment of attention deficit hyperactivity disorder (ADHD), which affects approximately 11% of children in the United States, making it one of the most commonly diagnosed childhood disorders. It’s also prescribed in the treatment of narcolepsy, which is estimated to affect between up to 200,000 people in the United States.', 6743, '2025-08-21'),
(6, 'Panadol', 'Pain Killer', 20, '2027-07-21');

-- --------------------------------------------------------

--
-- Table structure for table `pharmacist`
--

CREATE TABLE `pharmacist` (
  `pharmacist_id` int(11) NOT NULL,
  `pharmacist_name` varchar(50) NOT NULL,
  `pharmacist_email` varchar(50) NOT NULL,
  `pharmacist_details` varchar(250) NOT NULL,
  `pharmacist_password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `pharmacist`
--

INSERT INTO `pharmacist` (`pharmacist_id`, `pharmacist_name`, `pharmacist_email`, `pharmacist_details`, `pharmacist_password`) VALUES
(4, 'Marcel Jones', 'marceljones@hotmail.com', 'He is a graduate from Hodeiah University', '21061jones'),
(5, 'Assunta Rath', 'assuntarath@gmail.com', 'She is a hardworking pharmacist with 3 years of experience', 'Assra80002'),
(6, 'Trace Douglas', 'tracedouglas@gmail.com', 'He has had an experience as a medical doctor', 'yeri6r7234'),
(7, 'Enoch Lynch', 'Lynch23@gmail.com', 'He is fresh graduate from University of Sri Jayawardenapura', 'ewf22fds:@');

-- --------------------------------------------------------

--
-- Table structure for table `physician`
--

CREATE TABLE `physician` (
  `physician_id` int(11) NOT NULL,
  `physician_name` varchar(50) NOT NULL,
  `physician_details` varchar(250) NOT NULL,
  `hospital_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `physician`
--

INSERT INTO `physician` (`physician_id`, `physician_name`, `physician_details`, `hospital_id`) VALUES
(1, 'Trycia Fadel', 'One of the best doctors', 1),
(2, 'Bradford Prohaska', 'A medical doctor with a high level of experience', 2),
(3, 'Arely Skiles', 'From west shades valley drive.', 3),
(4, 'Gust Purdy', 'Medical doctor', 4);

-- --------------------------------------------------------

--
-- Table structure for table `prescription`
--

CREATE TABLE `prescription` (
  `prescription_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `pharmacist_id` int(11) NOT NULL,
  `prescription_issue_date` date NOT NULL,
  `prescription_filled_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `prescription`
--

INSERT INTO `prescription` (`prescription_id`, `customer_id`, `pharmacist_id`, `prescription_issue_date`, `prescription_filled_date`) VALUES
(1, 1, 5, '2023-03-14', '2023-03-16'),
(2, 1, 5, '2023-03-14', '2023-03-16'),
(3, 2, 7, '2023-03-21', '2023-03-22'),
(4, 4, 7, '2023-03-21', '2023-03-22'),
(5, 3, 4, '2023-03-17', '2023-03-20'),
(6, 3, 4, '2023-03-17', '2023-03-20'),
(7, 5, 5, '2023-03-23', '2023-03-24'),
(8, 6, 5, '2023-03-24', '2023-03-27');

-- --------------------------------------------------------

--
-- Table structure for table `prescription_item`
--

CREATE TABLE `prescription_item` (
  `drug_id` int(11) NOT NULL,
  `prescription_id` int(11) NOT NULL,
  `medicine_name` varchar(50) NOT NULL,
  `prescription_quantity` int(11) NOT NULL,
  `instructions_to_customers` varchar(250) NOT NULL,
  `date_of_expiry` date NOT NULL,
  `hospital_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `prescription_item`
--

INSERT INTO `prescription_item` (`drug_id`, `prescription_id`, `medicine_name`, `prescription_quantity`, `instructions_to_customers`, `date_of_expiry`, `hospital_id`) VALUES
(1, 1, 'Amoxicillin', 2, '2X3', '2023-06-09', 1),
(2, 2, 'Ibuprofen ', 2, '1X3', '2023-04-22', 2),
(3, 3, 'Lisinopril', 2, '2X1', '2023-05-26', 3),
(4, 4, 'Amphetamine/dextroamphetamine', 2, '3X2', '2023-04-26', 4),
(5, 5, 'Lisinopril', 2, '1X3', '2023-04-28', 2),
(6, 6, 'Levothyroxine ', 2, '3X2', '2023-04-28', 3),
(9, 7, 'Amoxicillin', 2, '1X3', '2023-05-25', 1),
(10, 8, 'Ibuprofen ', 2, '2X1', '2023-05-30', 4);

--
-- Triggers `prescription_item`
--
DELIMITER $$
CREATE TRIGGER `quantityUpdate` AFTER INSERT ON `prescription_item` FOR EACH ROW BEGIN
    UPDATE medicine_stock SET quantity = quantity - NEW.prescription_quantity;      
END
$$
DELIMITER ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `hospital_details`
--
ALTER TABLE `hospital_details`
  ADD PRIMARY KEY (`hospital_id`);

--
-- Indexes for table `medicine_stock`
--
ALTER TABLE `medicine_stock`
  ADD PRIMARY KEY (`medicine_id`),
  ADD KEY `medicine_name` (`medicine_name`);

--
-- Indexes for table `pharmacist`
--
ALTER TABLE `pharmacist`
  ADD PRIMARY KEY (`pharmacist_id`);

--
-- Indexes for table `physician`
--
ALTER TABLE `physician`
  ADD PRIMARY KEY (`physician_id`),
  ADD KEY `hospital_id` (`hospital_id`);

--
-- Indexes for table `prescription`
--
ALTER TABLE `prescription`
  ADD PRIMARY KEY (`prescription_id`),
  ADD KEY `FK1` (`customer_id`),
  ADD KEY `FK2` (`pharmacist_id`);

--
-- Indexes for table `prescription_item`
--
ALTER TABLE `prescription_item`
  ADD PRIMARY KEY (`drug_id`),
  ADD KEY `FK1_prescription_item` (`prescription_id`),
  ADD KEY `FK2_prescription_item` (`hospital_id`),
  ADD KEY `FK3_prescription_item` (`medicine_name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `hospital_details`
--
ALTER TABLE `hospital_details`
  MODIFY `hospital_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `medicine_stock`
--
ALTER TABLE `medicine_stock`
  MODIFY `medicine_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `pharmacist`
--
ALTER TABLE `pharmacist`
  MODIFY `pharmacist_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `physician`
--
ALTER TABLE `physician`
  MODIFY `physician_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `prescription`
--
ALTER TABLE `prescription`
  MODIFY `prescription_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `prescription_item`
--
ALTER TABLE `prescription_item`
  MODIFY `drug_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `physician`
--
ALTER TABLE `physician`
  ADD CONSTRAINT `FK_physicians` FOREIGN KEY (`hospital_id`) REFERENCES `hospital_details` (`hospital_id`);

--
-- Constraints for table `prescription`
--
ALTER TABLE `prescription`
  ADD CONSTRAINT `FK1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`),
  ADD CONSTRAINT `FK2` FOREIGN KEY (`pharmacist_id`) REFERENCES `pharmacist` (`pharmacist_id`);

--
-- Constraints for table `prescription_item`
--
ALTER TABLE `prescription_item`
  ADD CONSTRAINT `FK1_prescription_item` FOREIGN KEY (`prescription_id`) REFERENCES `prescription` (`prescription_id`),
  ADD CONSTRAINT `FK2_prescription_item` FOREIGN KEY (`hospital_id`) REFERENCES `hospital_details` (`hospital_id`),
  ADD CONSTRAINT `FK3_prescription_item` FOREIGN KEY (`medicine_name`) REFERENCES `medicine_stock` (`medicine_name`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
