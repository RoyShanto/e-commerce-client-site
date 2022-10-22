import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
const Login = () => {
    const { signInUsingGoogle, error, registerWithEmailPassword, loginWithEmailPassword } = useFirebase();
    const location = useLocation();
    const navigate = useNavigate();
    const redirect_uri = location.state?.from || '/dashboard';

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passError, setPassError] = useState('');
    const [isLogin, setIsLogin] = useState(false);


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                navigate(redirect_uri);
            })
    }


    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setPassError('password must be 6 characters');
            return;
        }
        else {
            setPassError('');
        }
        isLogin ? registerWithEmailPassword(name, email, password) : loginWithEmailPassword(email, password)
            .then(result => {
                navigate(redirect_uri);
            })
            .catch((error) => {
                isLogin ? setPassError(' ') : setPassError('Something Wrong. Please Try Again');
            });
    }
    const toggoleLogin = e => {
        setIsLogin(e.target.checked);
    }

    return (
        <div className="my-5 pt-5 container">

            <div className="d-flex justify-content-center align-items-center">
                <div className=" p-5 border border-3 border-info">
                    <h2 className="fw-bold">Please {!isLogin ? 'Login' : 'Register'}</h2>
                    <form onSubmit={handleRegistration}>
                        {isLogin && <div><input className="form-control" type="text" name="name" placeholder="Enter Your Name" onBlur={handleNameChange} required /><br /></div>}
                        <input className="mb-2 form-control" type="email" name="email" placeholder="Enter Your Email" onBlur={handleEmailChange} required /><br />
                        <input className="form-control" type="password" name="password" placeholder="Enter Your Password" onBlur={handlePasswordChange} required /><br />
                        <p className="text-danger ">{passError}{error}</p><br />

                        <button className="btn btn-primary" type="submit" >{!isLogin ? 'Login' : 'Register'}</button><br />
                    </form>
                    <p className="text-success">Create a new account <input type="checkbox" onChange={toggoleLogin} /></p>
                    {/* <div>-------or--------</div> */}
                    <hr className="w-70" />
                    <button className="btn btn-primary" onClick={handleGoogleLogin}>Google Sign In</button>
                </div>
            </div>


        </div>
    );
};

export default Login;