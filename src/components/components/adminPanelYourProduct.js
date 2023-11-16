import React from 'react'
import "../components style/adminPanelYourProducts.css"
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function AdminPanelYourProduct() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
   <section className='Your-Product-Section'>
    <div className='heading-button'>
      <h3>Your Product's</h3>
      <Button variant="primary" onClick={handleShow}>
        Add Product
      </Button>
    </div>
     <div className='product-card-section'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Brand</th>
              <th>Modal</th>
              <th>Category</th>
              <th>Price</th>
              <th>Description</th>
              <th>Delivery</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Moto G(60)</td>
              <td>Motorola</td>
              <td>6+128 GB</td>
              <td>SmartPhones</td>
              <td>15000</td>
              <td>Motorola Moto G60 ; Resolution, 1080 x 2460 pixels (~395 ppi density) ; OS, Android 11, upgradable to Android 12 ; Chipset, Qualcomm SM7150 Snapdragon 732G (8 nm).</td>
              <td>Free Delivery</td>
              <td>Active</td>
            </tr>
          </tbody>
        </Table>
     </div>

     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Product Name"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Brand</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Select Brand</option>
                    <option value="1">Apple</option>
                    <option value="2">Samsung</option>
                    <option value="3">Redmi</option>
              </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Modal</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Select Variant</option>
                    <option value="1">4 + 64 GB</option>
                    <option value="2">6 + 64 GB</option>
                    <option value="3">6 + 128 Gb</option>
                    <option value="4">8 + 128 Gb</option>
                    <option value="5">8 + 256 Gb</option>
                    <option value="6">12 + 128 Gb</option>
                    <option value="7">12 + 256 Gb</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Category</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Select Category</option>
                    <option value="1">SmartPhones</option>
                    <option value="2">Tablets</option>
                    <option value="3">Laptops</option>
                    <option value="4">Desktops</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter the Price of Product"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder='Enter Product Description' />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Delivery</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Select Category</option>
                    <option value="1">Free Delivery</option>
                    <option value="2">Charges on Delivery</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Discount</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter the Discount of Product"
                autoFocus
              />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
           Add Product
          </Button>
        </Modal.Footer>
      </Modal>
   </section>
  )
}

export default AdminPanelYourProduct;
