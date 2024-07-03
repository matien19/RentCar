import { Link } from "react-router-dom";
import "../css/header.css";
import Logo from "/assets/img/LogoRent.png";

const Header = () => {
  return (
    <>
      <header id='header' className='header d-flex align-items-center fixed-top sticked'>
        <div className='container-fluid container-xl d-flex align-items-center justify-content-between'>
          <a href='./' className='logo'>
            <img src={Logo} alt='logo' />
          </a>
          <i className='mobile-nav-toggle mobile-nav-show bi bi-list' />
          <i className='mobile-nav-toggle mobile-nav-hide d-none bi bi-x' />
          <nav id='navbar' className='navbar'>
            <ul>
              <li>
                <Link to='/' className='active'>
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
                <Link to='/kontak'>Hubungi Kami</Link>
              </li>
            </ul>
          </nav>
          <nav id='navbar2' className='navbar'>
            <ul>
              <li>
                <Link to='/Sign'>Masuk</Link>
              </li>
              <li>
                <Link className='get-a-quote' to='/Sign'>
                  Daftar
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
