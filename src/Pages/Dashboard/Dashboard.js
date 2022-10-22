import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Contact from '../Contact/Contact';
// import Sidebar from '../Shared/Sidebar/Sidebar';
import './Sidebar.css';
const Dashboard = () => {
    return (
        <div className=''>
            <div>
                <input type="checkbox" id="check"/>
                <label htmlFor="check">
                <i className="fas fa-bars" id="btn"></i>
                <i className="fas fa-times" id="cancel"></i>
                </label>
                   <div className="sidebar">
                        <header>My App</header>
                        <ul>
                            <li><a href="#"><i className="fas fa-qrcode"></i>Home</a></li>
                            <li><a href="#"><i className="fas fa-link"></i>Add Admin</a></li>
                            <li><a href="#"><i className="fas fa-stream"></i>Add Product</a></li>
                            <li><a href="#"><i className="fas fa-calendar-week"></i>Manage Products</a></li>
                            <li><a href="#"><i className="far fa-question-circle"></i>Manage All Product</a></li>
                            <li><a href="#"><i className="fas fa-sliders-h"></i>My Orders</a></li>
                            <li><Link to="/dashboard/contact"><i className="far fa-envelope"></i>Contact</Link></li>
                            <li><Link to="/"><i className="far fa-envelope"></i>Home</Link></li>
                        </ul>
                    </div>

                    <section>
                        <Routes>
                            <Route path="/dashboard/contact" element={<Contact />} />
                        </Routes>
                    </section>
            </div>
        </div>
    );
};

export default Dashboard;