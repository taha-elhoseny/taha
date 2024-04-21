/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
       {/* <!-- ==================== -->
    <!-- start Footer section -->
    <!-- ==================== --> */}
    <footer>
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" >
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="span">
                                <span>Get connected with us on social networks:</span>
                            <div className="a">
                                <Link to="https://www.facebook.com/ebthal.abdellatef.31 " className="me-4 ">
                                    <i className="fab fa-facebook-f I"></i>
                                  </Link>
                                  <Link to="https://twitter.com/EbThal_Ahmed_?t=o0S7iNsHYR_F8yATjGwBsw&s=08" className="me-4">
                                    <i className="fab fa-twitter I"></i>
                                  </Link>
                                  <Link to="mailto:ebthalabdo49@gmail.com" className="me-4 text-reset">
                                    <i className="fab fa-google I"></i>
                                  </Link>
                                  <Link to="https://instagram.com/ebthal._ahmed?utm_medium=copy_link" className="me-4">
                                    <i className="fab fa-instagram I"></i>
                                  </Link>
                                  <Link to="" className="me-4">
                                    <i className="fab fa-linkedin I"></i>
                                  </Link>
                                  <Link to="" className="me-4">
                                    <i className="fab fa-github I"></i>
                                  </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </section>
          <section className="TOP">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                     <img src="./images/bar.jpeg" alt="logo" className="img"/>
                  <p></p>
                    <h4>it's time to love your piece </h4>
                    <br></br>
                    thank you for welcome<br></br> Accessories Home  
                  <p></p>
                </div>
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                    Products
                  </h6>
                  <p>
                    <Link to="mirror" className="text-reset">Mirrors</Link>
                  </p>
                  <p>
                    <Link to="stand" className="text-reset">Stand</Link>
                  </p>
                  <p>
                    <Link to="portrait" className="text-reset">Portrait</Link>
                  </p>
                  <p>
                    <Link to="light" className="text-reset">Light</Link>
                  </p>
                  <p>
                    <Link to="CLOCK" className="text-reset">Clock</Link>
                  </p>
                  <p>
                    <Link to="makramiya" className="text-reset">Mukramiya</Link>
                  </p>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    Useful links
                  </h6>
                  <p>
                    <Link to="policy" className="text-reset">policy</Link>
                  </p>
                  <p>
                    <Link to="#" className="text-reset">Settings</Link>
                  </p>
                  <p>
                    <Link to="#" className="text-reset">Orders</Link>
                  </p>
                  <p>
                    <Link to="#" className="text-reset">Help</Link>
                  </p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    Contact
                  </h6>
                  <p><i className="fas fa-home me-3"></i> Eastern,,EG</p>
                  <p>
                    <i className="fas fa-envelope me-3"></i>
                    tahaelhoseny379@gmail.com
                  </p>
                  <p><i className="fas fa-phone me-3"></i> +201554979163</p>
                  <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Copyright --> */}
          <div className="Copyright">
            © 2022 Copyright: <i>AH</i> Accessories-home
          </div>
          {/* <!-- Copyright --> */}
        </footer>
    {/* <!-- ================== -->
    <!-- end Footer section -->
    <!-- ================== --> */}

    </div>
  )
}
