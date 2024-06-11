import { Link } from "react-router-dom";
import "../css/header.css";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";
import Logo from "/assets/img/LogoRent.png";

const Header = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token", { withCredentials: true });
      const decoded = jwtDecode(response.data.accessToken);
      setName(decoded.name);
    } catch (error) {
      console.log(error);
    }
  };

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
                <Dropdown>
                  <Dropdown.Toggle variant='light' id='dropdown-basic'>
                    <i className='fas fa-user'></i> {name}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href='/InformasiAkun'>
                      <i className='fas fa-cog'></i> Pengaturan
                    </Dropdown.Item>
                    <Dropdown.Item href='/logout'>
                      <i className='fas fa-sign-out-alt'></i> Keluar
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
