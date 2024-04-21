import React from 'react'
import { Link } from 'react-router-dom'

export default function Card1() {
  return (
    <div>
      {/* <!-- =================== -->
<!-- start card1 section -->
<!-- =================== --> */}
<div className="contanier">
  <div className="row">
    <div className="col-md-4">
      <div className="card">
        <img src="./images/stand/WhatsApp Image 2022-03-28 at 7.03.10 PM (1).jpeg" className="card-img-top imgcard" alt="..."/>
        <div className="card-body">
          <Link to="/Stand" className="btn btn-primary btn2 GO">Stand</Link>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <img src="./images/lighting lamp/WhatsApp Image 2022-03-28 at 7.18.50 PM (1).jpeg" className="card-img-top imgcard" alt="..."/>
        <div className="card-body">
          <Link to="/Lamp" className="btn btn-primary btn2 GO">Lamp</Link>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <img src="./images/WhatsApp Unknown 2022-03-31 at 11.03.21 PM/WhatsApp Image 2022-03-28 at 7.25.21 PM.jpeg" className="card-img-top imgcard" alt="..."/>
        <div className="card-body">
          <Link to="/Macrame" className="btn btn-primary btn2 GO">Macrame</Link>
        </div>
      </div>
    </div>
  </div>
</div>
{/* <!-- ================ -->
<!-- end card1 section -->
<! */}
    </div>
  )
}
