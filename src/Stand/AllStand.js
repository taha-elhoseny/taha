/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/alt-text */
import Navber from './Navber'
import Carousel from './Carousel'
import H1 from './H1'
import H2 from './H2'
import Footer from './Footer'
import { Col, Container, Row } from 'reactstrap'
import { CartProvider, useCart } from "react-use-cart";

  function Page() {
    const { addItem } = useCart();
  
    const products = [
        {
            "id": 1,
            "title": "Stand",
            "description": "An apple mobile which is nothing like apple",
            "price": "60",
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            "images": [
                "images/stand/WhatsApp Image 2022-03-28 at 7.03.09 PM.jpeg",
                "https://i.dummyjson.com/data/products/1/2.jpg",
                "https://i.dummyjson.com/data/products/1/3.jpg",
                "https://i.dummyjson.com/data/products/1/4.jpg",
                "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
            ]
        },
        {
            "id": 2,
            "title": "Stand",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "price": "85",
            "discountPercentage": 17.94,
            "rating": 4.44,
            "stock": 34,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
            "images": [
                "images/stand/WhatsApp Image 2022-03-28 at 7.03.11 PM (1).jpeg",
                "https://i.dummyjson.com/data/products/2/2.jpg",
                "https://i.dummyjson.com/data/products/2/3.jpg",
                "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
            ]
        },
        {
            "id": 3,
            "title": "Stand",
            "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
            "price": "62",
            "discountPercentage": 15.46,
            "rating": 4.09,
            "stock": 36,
            "brand": "Samsung",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
            "images": [
                "images/stand/WhatsApp Image 2022-03-28 at 7.03.10 PM (1).jpeg"
            ]
        },
        {
            "id": 4,
            "title": "Stand",
            "description": "OPPO F19 is officially announced on April 2021.",
            "price": "92",
            "discountPercentage": 17.91,
            "rating": 4.3,
            "stock": 123,
            "brand": "OPPO",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
            "images": [
                "images/stand/WhatsApp Image 2022-03-28 at 7.03.10 PM (2).jpeg",
                "https://i.dummyjson.com/data/products/4/2.jpg",
                "https://i.dummyjson.com/data/products/4/3.jpg",
                "https://i.dummyjson.com/data/products/4/4.jpg",
                "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
            ]
        },
        {
            "id": 5,
            "title": "Stand",
            "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            "price": "76",
            "discountPercentage": 10.58,
            "rating": 4.09,
            "stock": 32,
            "brand": "Huawei",
            "category": "smartphones",
            "thumbnail": "images/mirrors/images (1).jfif",
            "images": [
                "images/stand/WhatsApp Image 2022-03-28 at 7.03.10 PM (3).jpeg",
                "https://i.dummyjson.com/data/products/5/2.jpg",
                "https://i.dummyjson.com/data/products/5/3.jpg"
            ]
        },
        {
            "id": 6,
            "title": "Stand",
            "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
            "price": "89",
            "discountPercentage": 11.02,
            "rating": 4.57,
            "stock": 83,
            "brand": "Apple",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
            "images": [
                "images/stand/WhatsApp Image 2022-03-28 at 7.03.10 PM (4).jpeg",
                "https://i.dummyjson.com/data/products/6/2.jpg",
                "https://i.dummyjson.com/data/products/6/3.png",
                "https://i.dummyjson.com/data/products/6/4.jpg"
            ]
        },
        {
            "id": 7,
            "title": "Stand",
            "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
            "price": "85",
            "discountPercentage": 4.15,
            "rating": 4.25,
            "stock": 50,
            "brand": "Samsung",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
            "images": [
                "images/stand/WhatsApp Image 2022-03-28 at 7.03.10 PM.jpeg",
                "https://i.dummyjson.com/data/products/7/2.jpg",
                "https://i.dummyjson.com/data/products/7/3.jpg",
                "https://i.dummyjson.com/data/products/7/thumbnail.jpg"
            ]
        },
        {
            "id": 8,
            "title": "Stand",
            "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
            "price": "85",
            "discountPercentage": 10.23,
            "rating": 4.43,
            "stock": 68,
            "brand": "Microsoft Surface",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
            "images": [
                "images/stand/WhatsApp Image 2022-03-28 at 7.03.11 PM (2).jpeg",
                "https://i.dummyjson.com/data/products/8/2.jpg",
                "https://i.dummyjson.com/data/products/8/3.jpg",
                "https://i.dummyjson.com/data/products/8/4.jpg",
                "https://i.dummyjson.com/data/products/8/thumbnail.jpg"
            ]
        },
        {
            "id": 9,
            "title": "Stand",
            "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
            "price": "85",
            "discountPercentage": 11.83,
            "rating": 4.54,
            "stock": 96,
            "brand": "Infinix",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
            "images": [
                "images/stand/WhatsApp Image 2022-03-28 at 7.03.11 PM.jpeg",
                "https://i.dummyjson.com/data/products/9/2.png",
                "https://i.dummyjson.com/data/products/9/3.png",
                "https://i.dummyjson.com/data/products/9/4.jpg",
                "https://i.dummyjson.com/data/products/9/thumbnail.jpg"
            ]
        }
      
  
      ]
   
  
    return (
      <div>
          <Container>
              <Row>
        {products.map((result) => (
          <Col md="3" key={result.id} className='text-center mb-3 card' style={{width: "18rem;", borderRadius: "9px"}}>
          <img src={result.images[0]} className='img-fluid card-img-top' style={{height:"324px", borderRadius: "9px",marginTop: "10px"}}></img>
          <h4 style={{color:'black', marginTop:'10px'}}>{result.price}</h4>
          <button className='btn btn-primary' onClick={() => addItem(result)}  style={{ backgroundColor: "rgba(246, 163, 135)", borderColor: "aliceblue" , borderRadius: "13px", height: "38px",width: "142px" , marginLeft: "52px"}}>Add to cart</button>
          <br></br>
          </Col>
        ))}
              </Row>
          </Container>
      </div>
    );
  };

  function AllLamp() {
    return (
     
      <CartProvider>
      <Navber/>
      <Carousel/>
      <H1/>
      <Page />
      <H2/>
      <Footer/>
      </CartProvider>
    
    );
  }
export default AllLamp