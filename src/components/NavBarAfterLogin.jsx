import { Link } from "react-router-dom";
import "../css/header.css";


const Header = () => {

  // const [name, setName] = useState("");
  // const [token, setToken] = useState("");

  // const refreshToken = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:3000/token");
  //     setToken(response.data.accessToken);
  //     const decode = jwt_decode(response.data.accessToken);
  //     console.log(decode);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   refreshToken();
  // }, []);

  return (
    <>
      <header id='header' className='header d-flex align-items-center fixed-top sticked'>
        <div className='container-fluid container-xl d-flex align-items-center justify-content-between'>
          <a href='./' className='logo'>
            <img src='assets/img/LogoRent.png' alt='logo' />
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
                <Link to='/Sign'>Pesanan</Link>
              </li>
              <li>
              <li>
                <Link to=''>Angga A</Link>
              </li>
                
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
