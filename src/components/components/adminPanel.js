import React from 'react'
import "../components style/adminPanel.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function AdminPanel() {
    return (
      <section className='Admin-panel-section'>
        <div className="side-nav-bar">
            <div className="nav-inside">

                <div className="title">
                   <h3>SELLER DASHBOARD</h3>
                </div>

               <div className="nav-content">
                <ul className="nav-list">
                    <li className="list-items"><Link to="/dashboard/profile">Profile</Link></li>
                    <li className="list-items"><Link to="/dashboard/your_products">Product's</Link></li>
                    <li className="list-items"><Link to="">Settings</Link></li>
                    <li className="list-items"><Link to="/">❮ Home</Link></li>
                </ul>
               </div>

            </div>
            
         </div>
      </section>
    );
  }

export default AdminPanel;


{/* <Link to="/" className="nav-link">❮ Home</Link> 

<Link to="/dashboard/profile" className="nav-link">Profile</Link>
<Link to="/dashboard/your_products" className="nav-link">Your Products</Link> */}