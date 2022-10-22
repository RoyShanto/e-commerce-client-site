import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import useAuth from '../hooks/useAuth';
import useAuth from '../hooks/useFirebaseNew';
import './Login.css';



const Login = () => {
    const { user, error, signInUsingGoogle, logOut, registerWithEmailPassword, loginWithEmailPassword } = useAuth();
    
    // const { signInUsingGoogle } = useAuth();
    const [isLogin, setIsLogin] = useState(false);
    const [email, setEmail]= useState('');
    const [pass, setPass]= useState('');
    const [passError, setPassError] = useState('');
    const [name, setName]= useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const redirect_uri = location.state?.from || '/';
    // console.log(user?.displayName);
    
    const handleGoogleLogin = () => {
        // // import { getAuth, signInWithPopup, GoogleAuthProvider  } from "firebase/auth";
        // const provider = new GoogleAuthProvider();
        // const auth = getAuth();
        // signInWithPopup(auth, provider)
        // .then((result) => {
        //     navigate(redirect_uri);
        // }).catch((error) => {    
        // });

        signInUsingGoogle()
            .then(result => {
                console.log(result.user.displayName + ' Log In');
                navigate(redirect_uri);
            })
    }
    const handleEmailChange = e =>{
        setEmail(e.target.value); 
    }
    const handlePasswordChange = e =>{
        setPass(e.target.value);
    }
    const handleNameChange = e =>{
        setName(e.target.value);
    }
    const handleRegistration = e =>{
        // e.preventDefault();
        // console.log(email, pass);
        //registerWithEmailPassword(name, email, pass)
        // .then(result => {
        //     console.log(result.user.displayName + ' Log In');
        //     navigate(redirect_uri);
        // })
        isLogin ? registerWithEmailPassword(name, email, pass) : loginWithEmailPassword(email, pass)
            .then(result => {
                console.log('Find');
                navigate(redirect_uri);
            })
            .catch((error) => {
                isLogin ? setPassError(' ') : setPassError('Something Wrong. Please Try Again');
            });
    }
    const signIn = e => {
        setIsLogin(true);
    }
    const signUp = e => {
        setIsLogin(false);
    }
    return (
        <div>
            <div className="wrapper">
                <div className="logo"> <img src="http://startupeuropeawards.eu/wp-content/uploads/2018/11/ICON_EHEALTH.png" alt=""/> </div>
                {/* <div className="text-center mt-4 name"> Twitter </div> */}
                <form className="p-3 mt-3" onSubmit={handleRegistration}>
                    {isLogin && <div className="form-field d-flex align-items-center"> <span className="far fa-user"></span> <input type="text" name="userName" id="userName" placeholder="Username" onBlur={handleNameChange}/> </div>}
                    <div className="form-field d-flex align-items-center"> <span className="far fa-envelope-open"></span> <input type="email" name="userName" id="userName" placeholder="example@gmail.com" onBlur={handleEmailChange}/> </div>
                    <div className="form-field d-flex align-items-center"> <span className="fas fa-key"></span> <input type="password" name="password" id="pwd" placeholder="Password" onBlur={handlePasswordChange}/> </div> 
                    <button className="btn mt-3" type="submit">{ !isLogin ? 'Login' : 'Sign Up'}</button> 
                    
                    {/* {login ? <button className="btn mt-3" onClick={signInWithEmailPassword}>Login</button> : <button className="btn mt-3" onClick={signUpWithEmailPassword}>Sign Up</button>} */}
                </form>
                <div className="text-center fs-6"> 
                    {isLogin ? 
                    <>Cerate a account <button onClick={signUp} className='btn-bor-remove text-primary'>Sign up</button></> : 
                    <>Already have a account <button onClick={signIn} className='btn-bor-remove text-primary'>Login</button></>}
                </div> 
                {/* <div className="text-center fs-6"> <a href="#">Forget password?</a> or <a href="#">Sign up</a> </div> */}
                <br/>
                <hr className='mt-0' />
                <div>
                    <span>Or Sign In With</span><br/><br/>
                    <i className="fab fa-google fa-2x social-icon" onClick={handleGoogleLogin}></i>
                    <i className="fab fa-facebook-f fa-2x social-icon px-2"></i>
                    <i className="fab fa-twitter fa-2x social-icon"></i>
                </div>
            </div>



        </div>
    );
};

export default Login;