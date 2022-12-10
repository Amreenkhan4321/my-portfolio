import React from 'react'
import { WiDayCloudyWindy } from "react-icons/wi";
import { GiMedicines } from "react-icons/gi";
import { MdElectricalServices } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";

function Project() {
  return (
<section id="services" className="services section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Projects</h2>
          <p>I have designed projects by using html , css , javascript , react js and bootstrap .</p>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon"><h6><WiDayCloudyWindy/></h6></div>
              <h4 className="title"><a href="">Weather App</a></h4>
              <p className="description">For Weather app we use Weather Api this Api by using fetch method . Users can get weather information by entering the name of city. </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon"><h6><GiMedicines/></h6></div>
              <h4 className="title"><a href="">Vedshree</a></h4>
              <p className="description">Vedshree is designed for all ayurvedic medicine , Customer can view products and consult doctor directly on WhatsApp .
</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon"><h6><MdElectricalServices/></h6></div>
              <h4 className="title"><a href="">ARTF Electricals</a></h4>
              <p className="description">This website designed for provide electricity services.As other things your home electricity networks has got fluctuation and you must need a trustworthy electrician quickly to your door step.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box">
              <div className="icon"><h6><GiShoppingCart/></h6></div>
              <h4 className="title"><a href="">E-Commerce</a></h4>
              <p className="description">This website designed for Online Shopping. Customer can view and buy the product by adding it to the card.</p>
            </div>
          </div>

        </div>

      </div>
    </section>  )
}

export default Project