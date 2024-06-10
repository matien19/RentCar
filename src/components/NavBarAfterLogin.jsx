import { Link } from "react-router-dom";
import "../css/header.css";
import axios from "axios";
// import {jwtDecode} from "jwt-decode";
import { useState, useEffect } from "react";
import Logo from "/assets/img/LogoRent.png";

const Header = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fungsi untuk mendapatkan data users dari server
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users");
        setUsers(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <header id='header' className='header d-flex align-items-center fixed-top sticked'>
        <div className='container-fluid container-xl d-flex align-items-center justify-content-between'>
          <a href='./HomePage' className='logo'>
            <img src={Logo} alt='logo' />
          </a>
          <i className='mobile-nav-toggle mobile-nav-show bi bi-list' />
          <i className='mobile-nav-toggle mobile-nav-hide d-none bi bi-x' />
          <nav id='navbar' className='navbar'>
            <ul>
              <li>
                <Link to='/HomePage' className='active'>
                  Beranda
                </Link>
              </li>
              <li>
                <Link to='/armada'>Armada</Link>
              </li>
              <li>
                <Link to='/tentangkami'>Tentang Kami</Link>
              </li>
              <li>
                <Link to='/kontak'>hubungi Kami</Link>
              </li>
            </ul>
          </nav>
          <nav id='navbar2' className='navbar'>
            <ul>
              <li>
                <Link to='/PesananSaya'>Pesanan</Link>
              </li>
              <li>
                <ul>
                  {users.map((user, index) => (
                    <li key={index}>{user.name}</li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
