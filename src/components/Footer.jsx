import "../css/footer.css";
import Logo from "/assets/img/LogoRent.png";
import BcaLogo from "/assets/img/logo_bank/bca.png";
import BriLogo from "/assets/img/logo_bank/bri.png";
import BniLogo from "/assets/img/logo_bank/bni.png";
import DanaLogo from "/assets/img/logo_bank/dana.png";
import MandiriLogo from "/assets/img/logo_bank/mandiri.png";

const Footer = () => {
  return (
    <>
      <footer id='footer' className='footer'>
        <div className='container-footer'>
          <div className='row col-lg-12 mb-5'>
            <div className='col-lg-12 col-md-12 footer-inf o'>
              <a href='./' className='logo d-flex align-items-center'>
                <span>
                  {" "}
                  <img src={Logo} alt='logo' />{" "}
                </span>
              </a>
            </div>
          </div>
          <div className='row col-lg-12'>
            <div className='col-lg-4 col-md-12 footer-links '>
              <h4>Hubungi Kami</h4>
              <center>
                <ul>
                  <li>
                    <i className='bi bi-whatsapp fs-4' /> 0234-09874111
                  </li>
                  <li>
                    <i className='bi bi-envelope-fill fs-4' /> mochamadzidan1@gmail.com
                  </li>
                </ul>
              </center>
            </div>
            <div className='col-lg-4 col-6 footer-links '>
              <h4>Pembayaran Melalui</h4>
              <div className='d-flex flex-wrap'>
                <img className='p-2' src={BcaLogo} alt='Bootstrap 5 Logo' />
                <img className='p-2' src={BriLogo} alt='Bootstrap 5 Logo' />
                <img className='p-2' src={BniLogo} alt='Bootstrap 5 Logo' />
                <img className='p-2' src={DanaLogo} alt='Bootstrap 5 Logo' />
                <img className='p-2' src={MandiriLogo} alt='Bootstrap 5 Logo' />
              </div>
            </div>
            <div className='col-lg-4 col-6 footer-links '>
              <h4>Ikuti Kami</h4>
              <div className='social-links d-flex '>
                <a href='#' className='instagram'>
                  <i className='bi bi-instagram' />
                </a>
                <a href='#' className='facebook'>
                  <i className='bi bi-facebook' />
                </a>
                <a href='#' className='twitter'>
                  <i className='bi bi-twitter' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='container pt-3'>
          <div className='copyright'>
            <strong>
              <span>Z-Rental CAR</span>
            </strong>{" "}
            © 2023 - 2024. RoamRise Allright Reserved
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
