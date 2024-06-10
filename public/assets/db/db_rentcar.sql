-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 09 Jun 2024 pada 14.27
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_rentcar`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_armada`
--

CREATE TABLE `tbl_armada` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `type` varchar(10) NOT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `insurance` varchar(10) NOT NULL,
  `driver` varchar(10) NOT NULL,
  `seats` int(11) NOT NULL,
  `luggage` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tbl_armada`
--

INSERT INTO `tbl_armada` (`id`, `name`, `type`, `price`, `image`, `insurance`, `driver`, `seats`, `luggage`) VALUES
(1, 'Avanza New 2024', 'Manual', 500000, 'http://localhost:5000/images/1add82458eb8b0b2b50b05fadcadce13.jpeg', 'Ansuransi', 'Pengemudi', 6, 4),
(4, 'Avanza New 2024', 'Otomatis', 500000, 'http://localhost:5000/images/1add82458eb8b0b2b50b05fadcadce13852024.jpeg', 'Ansuransi', 'Pengemudi', 6, 3),
(5, 'Innova Reborn 2022', 'Otomatis', 400000, 'http://localhost:5000/images/9404f9d85df1655e82408268a59d4334852024.png', 'Ansuransi', 'Pengemudi', 6, 3),
(6, 'Honda Brio 2020', 'Otomatis', 300000, 'http://localhost:5000/images/c98bbd8501d7cd9f7b6165a368dbfd15852024.png', 'Ansuransi', 'Pengemudi', 5, 3),
(7, 'Daihatsu Sigra 2022', 'Manual', 250000, 'http://localhost:5000/images/89eadc18d6897cee1f8a80bd962ccaae852024.png', 'Ansuransi', 'Pengemudi', 5, 3),
(8, 'Toyota Calya 2018', 'Manual', 250000, 'http://localhost:5000/images/90a31fdefd6ef2942c6832717ff2d723852024.png', 'Ansuransi', 'Pengemudi', 5, 3);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_driver`
--

CREATE TABLE `tbl_driver` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `foto` varchar(200) NOT NULL,
  `deskripsi` text NOT NULL,
  `no_telp` varchar(20) NOT NULL,
  `instagram` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tbl_driver`
--

INSERT INTO `tbl_driver` (`id`, `name`, `foto`, `deskripsi`, `no_telp`, `instagram`) VALUES
(2, 'Teguh Deriandri', 'http://localhost:5000/images/driver/61047f9ff5c62795bed1b5208cd575ae.png', 'Teguh adalah sosok yang energik dan penuh semangat. Tubuhnya selalu bugar karena hobinya berolahraga, dan aroma segar selalu tercium dari dirinya.', '+6281267183866', '@teguhder'),
(3, 'Genaya Mahesa', 'http://localhost:5000/images/driver/61047f9ff5c62795bed1b5208cd575ae.png', 'Genay, seorang ekstrovert yang selalu energik, dan senyumnya yang menawan selalu mencerminkan sikapnya yang positif dan optimis.', '+6281267183542', '@satsuriku'),
(4, 'Afrizal Indra Prata', 'http://localhost:5000/images/driver/698224bc1f12c20a1020961cc6d145af.png', 'Afrizal adalah orang dengan kepribadiannya yang ramah dan mudah bergaul. Dia selalu memancarkan aroma segar dan menjaga penampilannya rapi.', '+628778653424', '@aindra_h'),
(5, 'Zidan Pandu P ', 'http://localhost:5000/images/driver/885bff110a908c5892477aaf3650a353.png', 'Zidan adalah orang yang menyenangkan dan mudah bergaul. Dia selalu wangi dan rapi, dan Dia adalah orang yang disiplin dan memiliki prinsip yang kuat', '+6282377627876', '@zidanpandu1');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_users`
--

CREATE TABLE `tbl_users` (
  `id_user` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `no_telp` varchar(20) NOT NULL,
  `refresh_token` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tbl_users`
--

INSERT INTO `tbl_users` (`id_user`, `name`, `email`, `password`, `no_telp`, `refresh_token`) VALUES
(1, 'matien', 'matien@gmail.com', '$2b$10$UyXCOnGoRVHVqja0waP/1eZWAETpqE4alJMi704siPqtPTZwwzROC', '0876723232327', 'aa'),
(2, 'matien', 'matien@gmail.com', '$2b$10$wKn68JK5S8rqesXZ4DkGF.d93uIOEjOTqpCZLAjTnHb1zPSU0noJu', '0876723232327', 'aaa'),
(3, 'matien', 'matien@gmail.com', '$2b$10$2XO/ifySTexeO5P3Hg4NAuGlE2MzYsjNmhZ6SpJdqrAteLCz.d1xO', '0876723232327', 'aaa'),
(4, 'matien', 'matien@gmail.com', '$2b$10$ZBjJaR8/wJjKxMTtbIW7TecsvoruQHLQfQtyLvZlpnKM/.sKfdFP6', '0876723232327', ''),
(5, 'matien', 'matien@gmail.com', '$2b$10$4R2RRVjp2r/GG2Iq8Jq7/uExLGyNnn2WqPVg3OHBFzihf41MPN03W', '0876723232327', ''),
(6, 'aaaaa', 'aaa@gmail.com', '$2b$10$CJxSwXP2QKO1e99Ga7sIieKm.ZGZHfaIdm4dCSHwS.JPTqH3uL6Oa', '09878767', '');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `tbl_armada`
--
ALTER TABLE `tbl_armada`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tbl_driver`
--
ALTER TABLE `tbl_driver`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `tbl_armada`
--
ALTER TABLE `tbl_armada`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `tbl_driver`
--
ALTER TABLE `tbl_driver`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
