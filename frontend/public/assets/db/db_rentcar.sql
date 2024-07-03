-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 17 Jun 2024 pada 11.51
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
(2, 'Teguh Deriandri', 'http://localhost:5000/images/driver/teguh.png', 'Teguh sosok yang energik Tubuhnya selalu bugar karena hobinya berolahraga pagi hari.\r\n', '+6281267183866', '@teguhder'),
(3, 'Genaya Mahesa', 'http://localhost:5000/images/driver/genaya.png', 'Genay, seorang ekstrovert yang selalu energik, dan senyumnya yang menawan.', '+6281267183542', '@satsuriku'),
(4, 'Afrizal Indra Prata', 'http://localhost:5000/images/driver/afrizal.png', 'Afrizal adalah orang selalu memancarkan aroma segar dan menjaga penampilannya rapi.', '+628778653424', '@aindra_h'),
(5, 'Zidan Pandu P ', 'http://localhost:5000/images/driver/zidan.png', 'Zidan adalah orang yang mudah bergaul,dia selalu wangi dan rapi.', '+6282377627876', '@zidanpandu1');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_transaksi`
--

CREATE TABLE `tbl_transaksi` (
  `no_transaksi` varchar(100) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_armada` int(11) NOT NULL,
  `id_driver` int(11) NOT NULL,
  `tgl_mulai` date NOT NULL,
  `durasi` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `alamat` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tbl_transaksi`
--

INSERT INTO `tbl_transaksi` (`no_transaksi`, `id_user`, `id_armada`, `id_driver`, `tgl_mulai`, `durasi`, `total`, `alamat`) VALUES
('1720246112057', 13, 4, 4, '2024-06-12', 4, 2000000, 'fdgdfg'),
('1720246112114', 13, 4, 3, '2024-06-13', 4, 2000000, 'mmmmmm'),
('202024612113', 16, 4, 4, '2024-06-19', 3, 1500000, 'Jln Pagojengan No 29 , Paguyangan , Brebes , Jawa Tengah'),
('22024612350', 1, 1, 3, '2024-06-14', 3, 1500000, 'sssd'),
('22024612351', 1, 1, 3, '2024-06-20', 5, 2500000, 'sdasdasxasxasdcdacad daasdsadasdxwesdx'),
('2332024612340', 1, 1, 5, '2024-06-20', 3, 1500000, 'wefE fgfgfgdfgdf fgdf'),
('520246131924', 1, 4, 4, '2024-06-14', 3, 1500000, 'ffdfdsf'),
('62024611205', 1, 5, 3, '2024-06-19', 5, 2000000, 'dfsdfsdcds'),
('620246112221', 1, 5, 4, '2024-06-12', 3, 1200000, 'jln Paguyangan , Pagojengan 08/02, Brebes , Jawa Tengah '),
('6220246112026', 1, 5, 3, '2024-06-19', 2, 800000, 'asdsadasd'),
('622024611204', 1, 5, 4, '2024-06-13', 6, 2400000, 'sadsdss'),
('64420246111957', 1, 5, 4, '2024-06-13', 4, 1600000, 'dsfdsfdsf'),
('6552024611209', 1, 5, 3, '2024-06-21', 4, 1600000, 'asdsadsa'),
('720246131929', 1, 6, 4, '2024-06-21', 3, 900000, 'defeffefeef'),
('73202461238', 1, 6, 4, '2024-06-21', 3, 900000, 'Jln pagojrngan No 40 , Pagojengan RT 08 RW 02 , Paguyangan , Brebes , Jawa Tengah'),
('7520246112340', 1, 6, 3, '2024-06-20', 5, 1500000, 'Jln Paguyangan No 11, Pagojengan RT 08 RW 02, Paguyangan, Brebes , Jawa Tengah '),
('822024617013', 1, 7, 4, '2024-06-27', 3, 750000, 'jhbbik gbjkggigi kjjhkjkjhjnjuig hihkhkkjugu'),
('9320246112144', 1, 8, 4, '2024-06-13', 3, 750000, 'jl. Pagojengan 08/03 Brebes Jawa Tengah');

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
  `refresh_token` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tbl_users`
--

INSERT INTO `tbl_users` (`id_user`, `name`, `email`, `password`, `no_telp`, `refresh_token`) VALUES
(1, 'matien', 'matien@gmail.com', '$2b$10$UyXCOnGoRVHVqja0waP/1eZWAETpqE4alJMi704siPqtPTZwwzROC', '0876723232327', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJtYXRpZW4iLCJlbWFpbCI6Im1hdGllbkBnbWFpbC5jb20iLCJub1RlbHAiOiIwODc2NzIzMjMyMzI3IiwiaWF0IjoxNzE4NTU3OTYxLCJleHAiOjE3MTg2NDQzNjF9.UEZcssJilQcDY09MYv_fQkJyYHEBjaOhldzGJWesSSc'),
(2, 'matien', 'matien@gmail.com', '$2b$10$wKn68JK5S8rqesXZ4DkGF.d93uIOEjOTqpCZLAjTnHb1zPSU0noJu', '0876723232327', 'aaa'),
(3, 'matien', 'matien@gmail.com', '$2b$10$2XO/ifySTexeO5P3Hg4NAuGlE2MzYsjNmhZ6SpJdqrAteLCz.d1xO', '0876723232327', 'aaa'),
(4, 'matien', 'matien@gmail.com', '$2b$10$ZBjJaR8/wJjKxMTtbIW7TecsvoruQHLQfQtyLvZlpnKM/.sKfdFP6', '0876723232327', ''),
(5, 'matien', 'matien@gmail.com', '$2b$10$4R2RRVjp2r/GG2Iq8Jq7/uExLGyNnn2WqPVg3OHBFzihf41MPN03W', '0876723232327', ''),
(6, 'aaaaa', 'aaa@gmail.com', '$2b$10$CJxSwXP2QKO1e99Ga7sIieKm.ZGZHfaIdm4dCSHwS.JPTqH3uL6Oa', '09878767', ''),
(7, 'Tien', 'Tien@gmail.com', '$2b$10$XNtLFlhOQn3IUQwcapNYweCp8ZxAERGnGc6R1NPWGe5fgRE7RsFwe', '098192328138', ''),
(8, 'aan', 'aan@gmail.com', '$2b$10$m5xjCn4FUkCOyR0qUcqEM.dW5p9bluis.PYOOGHXxk7Nl3dC.L1nq', '098192328138', ''),
(9, 'dd', 'dd@gmail.com', '$2b$10$VST4JHU3YGFcBV2pMt/Gduw8geYvlK81a1Oaw7pFiJTY6A2mvyWOi', '098192328138', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjksIm5hbWUiOiJkZCIsImVtYWlsIjoiZGRAZ21haWwuY29tIiwibm9UZWxwIjoiMDk4MTkyMzI4MTM4IiwiaWF0IjoxNzE4MDgwMzk3LCJleHAiOjE3MTgxNjY3OTd9.7k4LAb_NX4OvJipNv9vJ5GHy1pVRtMGseUVe63Iaj5E'),
(10, '', '', '$2b$10$lbXJrgWNdy6ViL5VdkzIneIZWSY4GbHa.1N6ZijyxJ/P6IqDxnBpu', '', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwLCJuYW1lIjoiIiwiZW1haWwiOiIiLCJub1RlbHAiOiIiLCJpYXQiOjE3MTc5OTM1MTEsImV4cCI6MTcxODA3OTkxMX0.FCI_kN7R3nwonEuC685ctF9GT0Feb9uRSQF3z7r-s1s'),
(11, 'aa', 'cc@gmail.com', '$2b$10$B/x26FoYlRfIKfgNL2jcdeqrEXuOmoJLNJaqZ1DzVKqQzC81Qm1tq', '0930492', ''),
(12, 'viki', 'viki@gmail.com', '$2b$10$5gjHkSMhgvw28cuzTUJj6OV71rTiFcVvUCSdDID8RnNJ6BDUzvWAS', '0878234', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyLCJuYW1lIjoidmlraSIsImVtYWlsIjoidmlraUBnbWFpbC5jb20iLCJub1RlbHAiOiIwODc4MjM0IiwiaWF0IjoxNzE3OTkxODc3LCJleHAiOjE3MTgwNzgyNzd9.7IWE0D5vLyNFxHQfQ7fY4SCqb1n723OLsGgUnX1sv08'),
(13, 'asdsad', 'aa@gmail.com', '$2b$10$kqqYIEP6CQQEjPQzb2yVUOdxrCWLnfXhDu9dZ1jAKptOyhVEYIJ86', '233434', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEzLCJuYW1lIjoiYXNkc2FkIiwiZW1haWwiOiJhYUBnbWFpbC5jb20iLCJub1RlbHAiOiIyMzM0MzQiLCJpYXQiOjE3MTgxMTQxNzQsImV4cCI6MTcxODIwMDU3NH0.ydDR3nhWun_cWdEv_7r_PPJ8kziBzUpbSj21RWOuLr8'),
(14, 'edo', 'ed@gmail.com', '$2b$10$rHMnsqRtAVxYQK5F8PoNueZCz77ZJff9mRBF0zqZ1nYJWGrBDAUgW', '0886454342', ''),
(15, 'Yanuar ', 'yanuar@gmail.com', '$2b$10$i2xKrzolw0X4ICTFO8pMJOi12kHbmOamjWlBl/yYHyZON4/tBQMjO', '08767625663', ''),
(16, 'Yanuar', 'yanuar20@gmail.com', '$2b$10$OfixIJvUAJGfBAHFqbYZheryQJkab1ax7k9pM3UUjA2wBMS3.Cjoi', '0871627232', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE2LCJuYW1lIjoiWWFudWFyIiwiZW1haWwiOiJ5YW51YXIyMEBnbWFpbC5jb20iLCJub1RlbHAiOiIwODcxNjI3MjMyIiwiaWF0IjoxNzE4MTY0ODk3LCJleHAiOjE3MTgyNTEyOTd9.Vt18lZ7cTti_mtG4DnO1Lc1nOFHEaOokEccOpbHmTCk');

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
-- Indeks untuk tabel `tbl_transaksi`
--
ALTER TABLE `tbl_transaksi`
  ADD PRIMARY KEY (`no_transaksi`);

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
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
