import { useState, useEffect } from "react";
import Validation  from "./LoginValidation";
import "../css/login.css";
import axios from 'axios'
import { useNavigate } from "react-router-dom";





function Login() {
  const [signUpButton, setSignUpButton] = useState(null);
  const [signInButton, setSignInButton] = useState(null);
  const [container, setContainer] = useState(null);

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')


  const history = useNavigate ()
  const [msg , setMsg] = useState('')


  const Regis = async(e) =>{
    e.preventDefault()

    try{
      await axios.post('http://localhost:3000/Register',{
        name: name,
        email: email,
        password: password,
        confPassword: confPassword
      })
      history.push('/HomePage')
    }catch(error){
      if(error.response){
        setMsg(error.response.data,msg)
      }
    }
  }




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
          <p className="">{msg}</p>
          <form action='' onSubmit={Regis}>
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
            <input type='text' placeholder='Nama'  name="name"  onChange={(e) => setName(e.target.value)} value={name}/>
            {errors.name && <span className="text-danger">{errors.name} </span>}
            <input type='email' placeholder='Email' name="email"  onChange={(e) => setEmail(e.target.value)} value={email}/>
            {errors.email && <span className="text-danger">{errors.email} </span>}
            <input type='password' placeholder='Kata sandi' name="password"  onChange={(e) => setPassword(e.target.value)} value={password}/>
            {errors.password && <span className="text-danger">{errors.password} </span>}
            <input type='password' placeholder='Masukan Ulang Kata sandi' onChange={(e) => setConfPassword(e.target.value)} value={confPassword}/>
            {errors.password && <span className="text-danger">{errors.password} </span>}
            <button type="submit">Daftar</button>
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
