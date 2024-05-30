import { useState, useEffect } from "react";

import "../css/login.css";

function Login() {
  const [signUpButton, setSignUpButton] = useState(null);
  const [signInButton, setSignInButton] = useState(null);
  const [container, setContainer] = useState(null);

  useEffect(() => {
    setSignUpButton(document.getElementById("signUp"));
    setSignInButton(document.getElementById("signIn"));
    setContainer(document.getElementById("container"));

    if (signUpButton && signInButton && container) {
      signUpButton.addEventListener("click", () => {
        container.classList.add("right-panel-active");
      });

      signInButton.addEventListener("click", () => {
        container.classList.remove("right-panel-active");
      });

      return () => {
        signUpButton.removeEventListener("click", () => {
          container.classList.add("right-panel-active");
        });
        signInButton.removeEventListener("click", () => {
          container.classList.remove("right-panel-active");
        });
      };
    }
  }, [signUpButton, signInButton, container]);

  return (
    <div className='container-login'>
      <div className='container' id='container'>
        <div className='form-container sign-up-container'>
          <form action='#'>
            <h1>Buat Akun</h1>
            <div className='social-container'>
              <a href='#' className='social'>
                <i className='fab fa-facebook-f' />
              </a>
              <a href='#' className='social'>
                <i className='fab fa-google-plus-g' />
              </a>
            </div>
            <span>atau gunakan email Anda untuk pendaftaran</span>
            <input type='text' placeholder='Nama' />
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Kata sandi' />
            <button>Daftar</button>
          </form>
        </div>
        
        <div className='form-container sign-in-container'>
          <form action='#'>
            <h1>Masuk ke Z-Rental Car</h1>
            <div className='social-container'>
              <a href='#' className='social'>
                <i className='fab fa-facebook-f' />
              </a>
              <a href='#' className='social'>
                <i className='fab fa-google-plus-g' />
              </a>
            </div>
            <span>atau gunakan email Anda untuk masuk</span>
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Kata sandi' />
            <a href='#'>Lupa kata sandi?</a>
            <button>Masuk</button>
          </form>
        </div>
        <div className='overlay-container'>
          <div className='overlay'>
            <div className='overlay-panel overlay-left'>
              <h1>Selamat Datang!</h1>
              <p>untuk tetap terhubung dengan kami silahkan login dengan informasi pribadi Anda</p>
              <button className='ghost' id='signIn'>
                Masuk
              </button>
            </div>
            <div className='overlay-panel overlay-right'>
              <h1>Hallo, Team!</h1>
              <p>untuk tetap terhubung dengan kami silahkan login dengan informasi pribadi Anda</p>
              <button className='ghost' id='signUp'>
                Daftar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
