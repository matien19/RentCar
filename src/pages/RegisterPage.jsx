import { useState, useEffect } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import "../css/login.css";
import Validation  from "./LoginValidation";

function Login() {
  const [signUpButton, setSignUpButton] = useState(null);
  const [signInButton, setSignInButton] = useState(null);
  const [container, setContainer] = useState(null);

  const[name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[confPassword, setConfPassword] = useState('')

  const [errors , setErrors] = useState({})


  const history = useNavigate ()
  const [msg , setMsg] = useState('')



  const auth = async(e) =>{
    setErrors(Validation({email, password,}))
    e.preventDefault()

    try{
      await axios.post('http://localhost:3000/login',{
       
        email: email,
        password: password,
        
      })
      history('/HomePage')
    }catch(error){
      if(error.response){
        setMsg(error.response.data,msg)
      }
    }
  }


 
 


  const daftar = async(e) =>{

    e.preventDefault()
    try{
      await axios.post('http://localhost:3000/register',{
       name: name,
       email: email,
       password: password,
       confpassword: confPassword
        
      })
      history('/Sign')
    }catch(error){
      if(error.response){
        console.log(error.response.data,msg)
      }
    }
    console.log(name)
    console.log(email)
    console.log(password)
    console.log(confPassword)
    
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

          <form action='' onSubmit={daftar}> 
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

            <input type="text"  placeholder="Masukan username" value={name} onChange={(e) => setName(e.target.value)}/>
          
            <input type='email' placeholder='Email'  value={email} onChange={(e) => setEmail(e.target.value)} />
           
            <input type='password' placeholder='Kata sandi'  value={password} onChange={(e) => setPassword(e.target.value)} />
       
            <input type='password' placeholder='Kata sandi'  value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
            
            
            <div>
            <button type="submit">Daftar</button>
            </div>
          
          </form>
        </div>



        
        <div className='form-container sign-in-container'>
          <form  onSubmit={auth}> 
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
            <input type='email' placeholder='Email' name='email'value={email} onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <span className="text-danger">{errors.email} </span>}

            <input type='password' placeholder='Kata sandi' name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {errors.password && <span className="text-danger">{errors.password} </span>}
            <a href='#'>Lupa kata sandi?</a>
            <button type="submit">Masuk</button>
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
