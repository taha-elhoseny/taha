import React from 'react'

export default function Carouse() {
  return (
    <div>
        {/* <!-- =================== -->
<!-- start carousel2 section -->
<!-- =================== --> */}
            <div id="carouselExampleIndicators" className="carousel slide ride" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="./images/stand/WhatsApp Image 2022-03-28 at 7.03.09 PM.jpeg" className=" whats" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="./images/stand/WhatsApp Image 2022-03-28 at 7.03.11 PM (1).jpeg" className="whats" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="./images/stand/WhatsApp Image 2022-03-28 at 7.03.11 PM (2).jpeg" className="whats" alt="..."/>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </button>
              </div>
       
{/* <!-- =================== -->
<!-- end carousel2 section -->
<!-- ==================== --> */}

    </div>
  )
}
