/* eslint-disable jsx-a11y/alt-text */
import { CartProvider, useCart } from "react-use-cart";
import { Col, Container, Row } from "reactstrap";
import Navber from "./Navber";
import { NavLink } from "react-router-dom";

function Cart() {
  const {
    cartTotal,
    totalItems,
    emptyCart,
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <div style={{marginTop:"100px"}}>
      <h1 className="text-center" style={{color:"black",fontFamily: "fantasy"}}>Cart ({totalUniqueItems})
      <button className="btn btn-primary" style={{ backgroundColor: "rgba(175 128 98)", borderColor: "black" , borderRadius: "13px", marginLeft: "52px", fontSize:"25px", color:"black"}} onClick={()=>emptyCart( )}>DeleteAllItems</button>
      </h1>
      <Container> 
        <Row>
            <Col md='12'>
            <table className="table table-dark text-center " style={{ backgroundColor: "rgba(175 128 98)", borderColor: "aliceblue", marginTop:"10px"}}>
        <thead>
            <th style={{color:"black", fontFamily:"math", fontWeight:"700",fontSize:"35px"}}>Name</th>
            <th style={{color:"black", fontFamily:"math", fontWeight:"700",fontSize:"35px"}}>Quantity</th>
            <th style={{color:"black", fontFamily:"math", fontWeight:"700",fontSize:"35px"}}>Price</th>
            <th style={{color:"black", fontFamily:"math", fontWeight:"700",fontSize:"35px"}}>Operation</th>
        </thead>
        <tbody>
        {items.map((item) => (
          <tr key={item.id}>
           <td style={{color:"black",fontFamily:"math",fontWeight:"700",fontSize:"22px"}}>{item.quantity} x {item.title}</td>
           <td style={{color:"black",fontFamily:"math",fontWeight:"700",fontSize:"22px"}}>{item.quantity}</td>
           <td style={{color:"black",fontFamily:"math",fontWeight:"700",fontSize:"22px"}}>{item.price*item.quantity} $</td>
           <td> 
            <button className="btn btn-primary" style={{backgroundColor:"black",borderColor:"white"}}
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              >
              -
            </button>
            <button className="btn btn-primary mx-2" style={{backgroundColor:"black",borderColor:"white"}}
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              >
              +
            </button>
            <button className="btn btn-primary" style={{backgroundColor:"black",borderColor:"white"}}
              onClick={() => removeItem(item.id)}>&times;</button>
            </td> 
          </tr>
        ))}

        </tbody>
            </table>
            <h3 style={{color:"black",fontFamily:"math",fontWeight:"700",fontSize:"35px",textAlign:"center",marginTop:"20px"}}>Total Number of Item ({totalItems})</h3>
            <h3 style={{color:"black",fontFamily:"math",fontWeight:"700",fontSize:"35px",textAlign:"center",marginTop:"10px"}}>Total Price Is ({cartTotal})</h3>
            <NavLink className="btn btn-primary" to="/" style={{ backgroundColor: "rgba(175 128 98)", borderColor: "black" , borderRadius: "13px", marginLeft:"480px", fontSize:"25px", color:"black",fontFamily:"fantasy"}}>Back Home</NavLink>
            </Col>
        </Row>
      </Container>
     
    </div>
  );
}

function AllCardPage() {
  return (
    <CartProvider>
      <Navber/>
      <Cart />
    </CartProvider>
  );
}
export default AllCardPage;