-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 17 Bulan Mei 2024 pada 14.29
-- Versi server: 10.4.27-MariaDB
-- Versi PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rental`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `denda`
--

CREATE TABLE `denda` (
  `Id_Denda` int(11) NOT NULL,
  `Keterlambatan` decimal(10,2) DEFAULT NULL,
  `Kerusakan` varchar(255) DEFAULT NULL,
  `Tot_Denda` decimal(10,2) DEFAULT NULL,
  `Kd_Mobil` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `kembali`
--

CREATE TABLE `kembali` (
  `Id_Kembali` int(11) NOT NULL,
  `Id_Peminjaman` int(11) DEFAULT NULL,
  `Id_Penyewa` int(11) DEFAULT NULL,
  `Kd_Mobil` varchar(10) DEFAULT NULL,
  `Id_Supir` int(11) DEFAULT NULL,
  `Id_Denda` int(11) DEFAULT NULL,
  `Tgl_Pinjam` date DEFAULT NULL,
  `Tgl_Kembali` date DEFAULT NULL,
  `Dp` decimal(10,2) DEFAULT NULL,
  `Diskon` decimal(5,2) DEFAULT NULL,
  `Total` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `mobil`
--

CREATE TABLE `mobil` (
  `Kd_Mobil` varchar(10) NOT NULL,
  `Nopol` varchar(20) DEFAULT NULL,
  `Warna` varchar(50) DEFAULT NULL,
  `Merk` varchar(100) DEFAULT NULL,
  `Kelas` varchar(50) DEFAULT NULL,
  `Kapasitas` int(11) DEFAULT NULL,
  `Jenis` varchar(50) DEFAULT NULL,
  `Transmisi` varchar(20) DEFAULT NULL,
  `Bahan_Bakar` varchar(20) DEFAULT NULL,
  `Status` varchar(20) DEFAULT NULL,
  `Kondisi` varchar(50) DEFAULT NULL,
  `Stok` int(11) DEFAULT NULL,
  `Harga` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `peminjaman`
--

CREATE TABLE `peminjaman` (
  `Id_Peminjaman` int(11) NOT NULL,
  `Id_Penyewa` int(11) DEFAULT NULL,
  `Kd_Mobil` varchar(10) DEFAULT NULL,
  `Id_Supir` int(11) DEFAULT NULL,
  `Tgl_Pinjam` date DEFAULT NULL,
  `Tgl_Kembali` date DEFAULT NULL,
  `Dp` decimal(10,2) DEFAULT NULL,
  `Diskon` decimal(5,2) DEFAULT NULL,
  `Total` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `penyewa`
--

CREATE TABLE `penyewa` (
  `Id_Penyewa` int(11) NOT NULL,
  `No_KTP` varchar(20) DEFAULT NULL,
  `Nama` varchar(100) DEFAULT NULL,
  `Gender` enum('Laki-laki','Perempuan') DEFAULT NULL,
  `No_Telp` varchar(20) DEFAULT NULL,
  `Alamat` varchar(255) DEFAULT NULL,
  `Pekerjaan` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `supir`
--

CREATE TABLE `supir` (
  `Id_Supir` int(11) NOT NULL,
  `No_KTP` varchar(20) DEFAULT NULL,
  `Nama` varchar(100) DEFAULT NULL,
  `Gender` enum('Laki-laki','Perempuan') DEFAULT NULL,
  `No_Telp` varchar(20) DEFAULT NULL,
  `Status` varchar(50) DEFAULT NULL,
  `Rute` varchar(255) DEFAULT NULL,
  `Biaya` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `denda`
--
ALTER TABLE `denda`
  ADD PRIMARY KEY (`Id_Denda`),
  ADD KEY `Kd_Mobil` (`Kd_Mobil`);

--
-- Indeks untuk tabel `kembali`
--
ALTER TABLE `kembali`
  ADD PRIMARY KEY (`Id_Kembali`),
  ADD KEY `Id_Peminjaman` (`Id_Peminjaman`),
  ADD KEY `Id_Penyewa` (`Id_Penyewa`),
  ADD KEY `Kd_Mobil` (`Kd_Mobil`),
  ADD KEY `Id_Supir` (`Id_Supir`);

--
-- Indeks untuk tabel `mobil`
--
ALTER TABLE `mobil`
  ADD PRIMARY KEY (`Kd_Mobil`);

--
-- Indeks untuk tabel `peminjaman`
--
ALTER TABLE `peminjaman`
  ADD PRIMARY KEY (`Id_Peminjaman`),
  ADD KEY `Id_Penyewa` (`Id_Penyewa`),
  ADD KEY `Kd_Mobil` (`Kd_Mobil`),
  ADD KEY `Id_Supir` (`Id_Supir`);

--
-- Indeks untuk tabel `penyewa`
--
ALTER TABLE `penyewa`
  ADD PRIMARY KEY (`Id_Penyewa`);

--
-- Indeks untuk tabel `supir`
--
ALTER TABLE `supir`
  ADD PRIMARY KEY (`Id_Supir`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `denda`
--
ALTER TABLE `denda`
  MODIFY `Id_Denda` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `kembali`
--
ALTER TABLE `kembali`
  MODIFY `Id_Kembali` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `peminjaman`
--
ALTER TABLE `peminjaman`
  MODIFY `Id_Peminjaman` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `penyewa`
--
ALTER TABLE `penyewa`
  MODIFY `Id_Penyewa` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `supir`
--
ALTER TABLE `supir`
  MODIFY `Id_Supir` int(11) NOT NULL AUTO_INCREMENT;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `denda`
--
ALTER TABLE `denda`
  ADD CONSTRAINT `denda_ibfk_1` FOREIGN KEY (`Kd_Mobil`) REFERENCES `mobil` (`Kd_Mobil`);

--
-- Ketidakleluasaan untuk tabel `kembali`
--
ALTER TABLE `kembali`
  ADD CONSTRAINT `kembali_ibfk_1` FOREIGN KEY (`Id_Peminjaman`) REFERENCES `peminjaman` (`Id_Peminjaman`),
  ADD CONSTRAINT `kembali_ibfk_2` FOREIGN KEY (`Id_Penyewa`) REFERENCES `penyewa` (`Id_Penyewa`),
  ADD CONSTRAINT `kembali_ibfk_3` FOREIGN KEY (`Kd_Mobil`) REFERENCES `mobil` (`Kd_Mobil`),
  ADD CONSTRAINT `kembali_ibfk_4` FOREIGN KEY (`Id_Supir`) REFERENCES `supir` (`Id_Supir`);

--
-- Ketidakleluasaan untuk tabel `peminjaman`
--
ALTER TABLE `peminjaman`
  ADD CONSTRAINT `peminjaman_ibfk_1` FOREIGN KEY (`Id_Penyewa`) REFERENCES `penyewa` (`Id_Penyewa`),
  ADD CONSTRAINT `peminjaman_ibfk_2` FOREIGN KEY (`Kd_Mobil`) REFERENCES `mobil` (`Kd_Mobil`),
  ADD CONSTRAINT `peminjaman_ibfk_3` FOREIGN KEY (`Id_Supir`) REFERENCES `supir` (`Id_Supir`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
