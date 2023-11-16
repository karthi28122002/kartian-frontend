import React from 'react';
import "../components style/navbarOne.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faOpencart } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faStore } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

library.add( faOpencart,faUser,faStore,faBagShopping,faMagnifyingGlass)

function NavbarOne() {
  const [fName, setFname] = useState('');
  const [lName, setLName] = useState('');
  const [e_mail, setE_mail] = useState('');
  const [PhNumber, setPhnumber] = useState('');
  const [pass, setPass] = useState('');
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [validEmailError, setValidEmailError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phNumberError, setPhNumberError] = useState(false);
  const [countPhNumberError, setCountPhNumberError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [validPasswordError, setValidPasswordError] = useState(false);
  const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'FirstName') {
      setFname(value);
      if (!value.trim()) {
        setFirstNameError(true);
      }
    } else if (name === 'LastName') {
      setLName(value);
      if (!value.trim()) {
        setLastNameError(true);
      }
    } else if (name === 'EMail') {
      setE_mail(value);
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) {
        setEmailError(true);
      } else if (!emailRegex.test(value)) {
        setValidEmailError(true);
      }
    } else if (name === 'PhoneNumber') {
      setPhnumber(value);
      if (!value.trim()) {
        setPhNumberError(true);
      } else if (value.length < 10) {
        setCountPhNumberError(true);
      }
    } else if (name === 'PassWord') {
      setPass(value);
      if (!value.trim()) {
        setPasswordError(true);
      } else if (value.length < 6) {
        setValidPasswordError(true);
      }
    }
  };

  const validateUser = () => {
    // Reset error states
    setFirstNameError(false);
    setLastNameError(false);
    setValidEmailError(false);
    setEmailError(false);
    setPhNumberError(false);
    setCountPhNumberError(false);
    setPasswordError(false);
    setValidPasswordError(false);

    // Validation logic
    if (!fName.trim()) {
      setFirstNameError(true);
      return;
    }

    if (!lName.trim()) {
      setLastNameError(true);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!e_mail.trim()) {
      setEmailError(true);
      return;
    } else if (!emailRegex.test(e_mail)) {
      setValidEmailError(true);
      return;
    }

    if (!PhNumber.trim()) {
      setPhNumberError(true);
      return;
    } else if (PhNumber.length < 10) {
      setCountPhNumberError(true);
      return;
    }

    if (!pass.trim()) {
      setPasswordError(true);
      return;
    } else if (pass.length < 6) {
      setValidPasswordError(true);
      return;
    }

    const user = {
      firstName: fName,
      lastName: lName,
      email: e_mail,
      phoneNumber: PhNumber,
      password: pass,
    };

          axios.post('http://localhost:5000/user/register', user).then((response) => {
          if (response && response.data && response.data.message) {
            console.log('User registered successfully:', response.data.message);
            // No user information is present in the registration response
            setLgShow(false);
          } else {
            console.error('Invalid response format:', response);
            // Handle the case where the response format is unexpected
          }
        })
        .catch((error) => {
          console.error('Error registering user:', error.response ? error.response.data : error.message);
          // Handle registration error, show error message, etc.
        });

  };

  const history = useNavigate();

  const handleLogin = () => {
    // Reset error states
    setEmailError(false);
    setPasswordError(false);

    // Validation logic for email and password
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!e_mail.trim() || !emailRegex.test(e_mail)) {
      setEmailError(true);
      return;
    }

    if (!pass.trim()) {
      setPasswordError(true);
      return;
    }

    // Send login request to backend
    axios.post('http://localhost:5000/user/login', { email: e_mail, password: pass })
    .then((response) => {
      if (response && response.data && response.data.user && response.data.user.firstName) {
        console.log('User logged in successfully:', response.data);
        setFname(response.data.user.firstName);
        setLgShow(false);

        // Store authentication status and user information in local storage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('user', JSON.stringify(response.data.user));

        // Redirect to the dashboard/profile route
        history.push('/dashboard/profile');
      } else {
        console.error('Invalid response format:', response);
        // Handle the case where the response format is unexpected
      }
    })
    .catch((error) => {
      console.error('Error logging in:', error.response ? error.response.data : error.message);
      // Handle login error, show error message, etc.
    });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <section className='navbar-one-section'>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#"><FontAwesomeIcon icon="fa-brands fa-opencart" /></Navbar.Brand>
            <Form className="d-flex">
              <input type='text' placeholder='Search Products'/>
              <Button><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></Button>
              </Form>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0 navbar-list"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                 {fName ? (
                  <button disabled>
                    Welcome {fName}
                  </button>
                ) : (
                  <button onClick={handleShow}>
                    <span><FontAwesomeIcon icon="fa-solid fa-user" /></span>Sign In / Login
                  </button>
                )}
                <Link to="/dashboard/profile" className='nav-link'>
                        <span><FontAwesomeIcon icon="fa-solid fa-store" /></span>Sell Your Products
                </Link>
                
                <button><span><FontAwesomeIcon icon="fa-solid fa-bag-shopping" /></span>Cart</button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                      <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter Email"
                            autoFocus
                            value={e_mail}
                            name="EMail"
                            onChange={(e) => setE_mail(e.target.value)}
                          />
                          {emailError && <span className="error-text">Email Required</span>}
                          {validEmailError && <span className="error-text">Enter Valid Email</span>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Enter Password"
                            autoFocus
                            value={pass}
                            name="PassWord"
                            onChange={(e) => setPass(e.target.value)}
                          />
                          {passwordError && <span className="error-text">Password Required</span>}
                          {validPasswordError && <span className="error-text">Enter Valid Password</span>}
                        </Form.Group>
                      </Form>
                      <div className='button-center'>
                        <Button onClick={() => setLgShow(true)}>New user? Sign Up</Button>
                      </div>
            </Modal.Body>

              <Modal.Footer>
                <Button onClick={handleLogin}>Login</Button>
              </Modal.Footer>
      </Modal>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Sign Up
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <Form>
                   <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <div className={`inside-form ${firstNameError ? 'error' : ''}`}>
                  <Form.Label>First Name</Form.Label>
                  {firstNameError && <span className="error-text">First Name Required</span>}
                  <Form.Control
                    type="text"
                    placeholder="Enter First Name"
                    autoFocus
                    value={fName}
                    id="firstName"
                    name="FirstName"
                    onChange={handleInputChange}
                  />
                </div>
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <div className={`inside-form ${lastNameError ? 'error' : ''}`}>
                  <Form.Label>Last Name</Form.Label>
                  {lastNameError && <span className="error-text">Last Name Required</span>}
                  <Form.Control
                    type="text"
                    placeholder="Enter Last Name"
                    autoFocus
                    value={lName}
                    id="lastName"
                    name="LastName"
                    onChange={handleInputChange}
                  />
                </div>
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <div className={`inside-form ${emailError || validEmailError ? 'error' : ''}`}>
                  <Form.Label>Email</Form.Label>
                  {emailError && <span className="error-text">Email Required</span>}
                  {validEmailError && <span className="error-text">Enter Valid Email</span>}
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    autoFocus
                    value={e_mail}
                    id="email"
                    name="EMail"
                    onChange={handleInputChange}
                  />
                </div>
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <div className={`inside-form ${phNumberError || countPhNumberError ? 'error' : ''}`}>
                  <Form.Label>Phone Number</Form.Label>
                  {phNumberError && <span className="error-text">Number Required</span>}
                  {countPhNumberError && <span className="error-text">At least 10 Numbers Required</span>}
                  <Form.Control
                    type="number"
                    placeholder="Enter Phone Number"
                    autoFocus
                    value={PhNumber}
                    id="phoneNumber"
                    name="PhoneNumber"
                    onChange={handleInputChange}
                  />
                </div>
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <div className={`inside-form ${passwordError || validPasswordError ? 'error' : ''}`}>
                  <Form.Label>Password</Form.Label>
                  {passwordError && <span className="error-text">Password Required</span>}
                  {validPasswordError && <span className="error-text">Enter Valid Password</span>}
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    autoFocus
                    value={pass}
                    id="passWord"
                    name="PassWord"
                    onChange={handleInputChange}
                  />
                </div>
              </Form.Group>

                </Form>
        </Modal.Body>
        <Modal.Footer>
                <Button variant="primary" onClick={validateUser}>
                  Register
                </Button>
              </Modal.Footer>
      </Modal>
    </section>
    </>
  );
}

export default NavbarOne;