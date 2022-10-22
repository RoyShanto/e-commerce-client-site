import React from 'react';
import { Link } from 'react-router-dom';
// import './Sidebar.css';
const Sidebar = () => {
    return (
        <div>
            <input type="checkbox" id="check"/>
            <label htmlFor="check">
            <i className="fas fa-bars" id="btn"></i>
            <i className="fas fa-times" id="cancel"></i>
            </label>
            <div className="sidebar">
                <header>My App</header>
                <ul>
                    <li><a href="#"><i className="fas fa-qrcode"></i>Dashboard</a></li>
                    <li><a href="#"><i className="fas fa-link"></i>Shortcuts</a></li>
                    <li><a href="#"><i className="fas fa-stream"></i>Overview</a></li>
                    <li><a href="#"><i className="fas fa-calendar-week"></i>Events</a></li>
                    <li><a href="#"><i className="far fa-question-circle"></i>About</a></li>
                    <li><a href="#"><i className="fas fa-sliders-h"></i>Services</a></li>
                    <li><Link to="/contact"><i className="far fa-envelope"></i>Contact</Link></li>
                    <li><Link to="/"><i className="far fa-envelope"></i>Home</Link></li>
                </ul>
            </div>
            {/* <section></section> */}


        </div>
    );
};

export default Sidebar;