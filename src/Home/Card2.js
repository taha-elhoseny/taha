import React from 'react'
import { Link } from 'react-router-dom'

export default function Card2() {
  return (
    <div>
      {/* <!-- =================== -->
<!-- start card2 section -->
<!-- =================== --> */}
<div className="contanier">
  <div className="row">
    <div className="col-md-6">
      <div className="card card2">
        <img src="./images/mirrors/pr_1_.jpg" className="card-img-top imgcard2" alt="..."/>
        <div className="card-body">
          <Link to="/Mirrors" className="btn btn-primary btn2 GO">mirrors</Link>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="card">
        <img src="./images/plant/WhatsApp Image 2022-03-28 at 7.08.45 PM (3).jpeg" className="card-img-top imgcard2" alt="..."/>
        <div className="card-body">
          <Link to="Plant" className="btn btn-primary btn2 GO">Plant</Link>
        </div>
      </div>
    </div>
  </div>
</div>
{/* <!-- ================ -->
<!-- end card2 section -->
<!-- ================ --> */}

    </div>
  )
}
