import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../components style/imageCarousel.css";
import "../components style/mobileProducts.css";
import ImageExample from "../images/Product_img_example.jpg"
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

function MobileProducts() {

  const [access, setAccess] = useState({ productList: [] });

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products?limit=15')
      .then(function (response) {
        console.log('response', response.data);
        setAccess({ productList: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const productListArray = access.productList;

  return (
    <section className='Mobile-product-section'>
      <div className='heading-section-product'>
        <h3>Latest Arrivals</h3>
      </div>
      <Container className='container-box'>
      <Row className='row'>

      {productListArray.map((product, index) => (
        <Col key={index} xs={12} sm={12} md={6} lg={4} xl={4} xxl={3} className='product-card'>
           <img src={product.image} />
           <div className='product-card-body'>
            <strong>{product.title}</strong>
            <p>{product.price}</p>
           </div>
           <div className='buy-now-btn'>
            <Button>BUY NOW</Button>
           </div>
        </Col>
        ))}
  
        </Row>
      </Container>
    </section>
  );
}

export default MobileProducts;


// {productListArray.map((product, index) => (
//   <Card className='product-card' key={index} style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={product.image} />
//       <Card.Body>
//         <Card.Title>{product.title}</Card.Title>
//         <Card.Text>
//          {product.price}
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//   </Card>
//   ))}