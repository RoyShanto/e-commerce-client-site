import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import AuthProvider from '../../../Context/AuthProvider';
// import useAuth from '../../hooks/useAuth';
// import useAuth from '../../hooks/useFirebaseNew';
// import useFirebse from '../../hooks/useFirebase';


const Header = () => {
  // const { user, error, signInUsingGoogle, logOut, registerWithEmailPassword, loginWithEmailPassword } = useAuth();
  // const { error, signInUsingGoogle, logOut, registerWithEmailPassword, loginWithEmailPassword } = useAuth();
  const [isLogin, setIsLogin] = useState(false);
    return ( 
        <div>
           <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-info">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
      
    <img src="http://startupeuropeawards.eu/wp-content/uploads/2018/11/ICON_EHEALTH.png" alt="" height="40" width="40"/>
      &nbsp;E-Health
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/services" className="nav-link">Service</Link>
        </li>
        <li className="nav-item">
        <Link to="/addCategory" className="nav-link">Add Category</Link>
        </li>
        <li className="nav-item">
        <Link to="/addProduct" className="nav-link">Add Product</Link>
        </li>
        <li className="nav-item">
        <Link to="/doctors" className="nav-link">Doctors</Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard/contact" className="nav-link">Contact</Link>
        </li>
        {
          // user?.displayName ? 
          // <li className="nav-item">
          //   <Link to="" className="nav-link" onClick={logOut}>LogOut</Link>
          // </li> : 
          // <li className="nav-item">
          //   <Link to="/login" className="nav-link">Login</Link>
          // </li>
          isLogin?.displayName ? 
          // <li className="nav-item">
          //   <Link to="" className="nav-link" onClick={logOut}>LogOut</Link>
          // </li> : 
          <li className="nav-item">
            <Link to="" className="nav-link" >LogOut</Link>
          </li> : 
          <li className="nav-item">
            <Link to="/login" className="nav-link">Login</Link>
          </li>
        }
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;