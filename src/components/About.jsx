import React from 'react'

function About() {
  return (
<section id="about" className="about">
      <div className="container">

        <div className="row no-gutters">
          <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
          <div className="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch">
            <div className="content d-flex flex-column justify-content-center">
            <div class="section-title">
          
          <h2>About Me</h2>
          {/* <p>I am a Front end developer</p> */}
        </div>
             
              <div class="row">
                <div class="col-lg-6">
                  <ul>
                    <li><i class="bi bi-chevron-right"></i> <strong>Name:</strong> <span>Amreen Khan</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>9109424392</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Indore, India</span></li>
                    <li><i class="bi bi-chevron-right "></i> <strong>Degree:</strong> <span>B.Tech in CS</span></li>

                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul>
                    <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>23</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>amreenkhan4899@gmail</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                  </ul>
                </div>
              </div>
             
            </div>
          </div>
        </div>

      </div>
    </section>  )
}

export default About