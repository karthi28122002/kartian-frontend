import React from 'react'
import "../components style/adminPanelProfile.css";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function AdminPanelProfile() {
  return (
   <section className='Admin-Profile-Section'>
    <div className='profile-section'>
        <h2>Profile</h2>
  
      <table className="table">
            <tbody>
                <tr>
                <th>First Name</th>
                <td>John</td>
                <td>Edit</td>
                </tr>
                <tr>
                <th>Last Name</th>
                <td>Carter</td>
                <td>Edit</td>
                </tr>
                <tr>
                <th>Email</th>
                <td>johncarter@mail.com</td>
                <td>Edit</td>
                </tr>
                <tr>
                <th>Phone Number</th>
                <td>12345678</td>
                <td>Edit</td>
                </tr>
            </tbody>
      </table>
      
    </div>
   </section>
  )
}

export default AdminPanelProfile;
