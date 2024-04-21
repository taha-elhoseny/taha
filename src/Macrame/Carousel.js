import React from 'react'

export default function Carousel() {
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
                    <img src="./images/WhatsApp Unknown 2022-03-31 at 11.03.21 PM/2C505BD7-8624-49D7-9614-6EEBC2E19FDC.jpeg" className=" whats" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="./images/WhatsApp Unknown 2022-03-31 at 11.03.21 PM/ff2f4e1a7ac4bba4f701ccc831eab28c.jpg" className="whats" alt="..."/>
                  </div>
                  <div className="carousel-item">
                    <img src="./images/WhatsApp Unknown 2022-03-31 at 11.03.21 PM/WhatsApp Image 2022-03-28 at 7.25.22 PM.jpeg" className="whats" alt="..."/>
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
