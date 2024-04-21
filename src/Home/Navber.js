/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom';
import { CartProvider,useCart } from 'react-use-cart'
export default function Navber() {
  const {totalItems}=useCart();
  return (
    <CartProvider>
         {/* <!-- ==================== -->
<!-- start navber section -->
<!-- ==================== --> */}
<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top mb-0">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li>
        <img src="./images/logo.jpeg" className="logojpeg animate__animated animate__backInLeft"/>
      </li>
      <li className="nav-item active">
        <Link className="nav-link A1 animate__animated animate__backInLeft" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link A2 animate__animated animate__backInLeft" to="/Macrame">Macrame<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link A2 animate__animated animate__backInLeft" to="/Stand">Stand<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link A2 animate__animated animate__backInLeft" to="/Lamp">Lamp<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link A2 animate__animated animate__backInLeft" to="/Mirrors">Mirrors<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link A2 animate__animated animate__backInLeft" to="/Plant">Plant<span className="sr-only">(current)</span></Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0 animate__animated animate__backInRight">
      <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
      <button type="button" className="btn btn-primary Bot2" data-toggle="button" aria-pressed="false">Search</button>          
    </form>
    <li className="nav-item active">
        <Link className="nav-link A2 animate__animated animate__backInRight" to="/CardPage" style={{marginTop:"-16px"}}><i class="fa-solid fa-cart-plus" style={{color: "#ffffff",}}></i>({totalItems})<span className="sr-only">(current)</span></Link>
      </li>
  </div>
</nav>

{/* <!-- ================== -->
<!-- end navber section -->
<!-- ================== --> */}

    </CartProvider>
  )
}
