import React from 'react'

function Contact() {
  return (
<section id="contact" className="contact section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Went to get in touch?  We'd love to here from you. Here's how you can reach us...</p>
        </div>

        <div className="row">

          <div className="col-lg-4 col-md-4">
            <div className="contact-about">
              <h3>Amreen</h3>
              <p>If you wish to get in touch do not hesitate to inbox me. <br /><br />lets connect!!</p>
              <div className="social-links">
                {/* <a href="#" className="twitter"><i className="bi bi-twitter"></i></a> */}
                <a target="_blank" href="https://www.facebook.com/profile.php?id=100027619694771" className="facebook"><i className="bi bi-facebook"></i></a>
                <a target="_blank" href="https://www.instagram.com/_amreenkhan786_/" className="instagram"><i className="bi bi-instagram"></i></a>
                <a target="_blank" href="https://www.linkedin.com/in/amreen-khan-349469238" className="linkedin"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="info">
              <div className="d-flex align-items-center">
                <i className="bi bi-geo-alt"></i>
                <p>90 ,Gandhi Nagar<br/>Indore .</p>
              </div>

              <div className="d-flex align-items-center mt-4">
                <i className="bi bi-envelope"></i>
                <p>amreenkhan4899@gmail.com</p>
              </div>

              <div className="d-flex align-items-center mt-4">
                <i className="bi bi-phone"></i>
                <p>9109424392</p>
              </div>

            </div>
          </div>

          <div className="col-lg-5 col-md-8">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
              </div>
              <div className="form-group mt-3">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>  )
}

export default Contact