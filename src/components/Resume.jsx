import React from 'react'

function Resume() {
  return (
    <section id="resume" className="resume section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Resume</h2>
          {/* <p>Seeking a role as a front-end
            developer so I can use my thorough
            knowledge of programming
            frameworks and development
            software. Experienced with all stages
            of the development cycle for
            dynamic web projects. Well-versed in
            numerous programming
            languages including HTML5, CSS,
            JavaScript, Strong background in
            JavaScript Frameworks Like React.</p> */}
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Amreen Khan</h4>
              <p><em>
                Seeking a role as a front-end developer so I can use my thorough knowledge of programming frameworks and development software. Experienced with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages including HTML5, CSS, JavaScript, Strong background in JavaScript Frameworks Like React.</em></p>
              {/* <p>
              <ul>
                <li>Portland par 127,Orlando, FL</li>
                <li>(123) 456-7891</li>
                <li>alice.barkley@example.com</li>
              </ul>
              </p> */}
            </div>

            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Jr. Frontend Developer, Aimfortech Solutions
                Indore MP </h4>
              <h5>Apr 2022 - Present</h5>

              <p>
                <ul>
                  <li>
                    Work with senior developer to manage large, complex design projects for corporate clients.</li>
                  <li>Complete detailed programming and development tasks for front end public and internal websites as well as challenging back-end server code. </li>
                </ul>
              </p>
            </div>
          </div>

<div className="col-lg-6">


            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor of Technology &amp; Computer Science</h4>
              <h5>2017 - 2021</h5>
              <p><em>
                Vindhya Institute of Technology and Science , Indore Madhya Pradesh</em></p>
              <p>University - Rajiv Gandhi Proudyogiki Vishwavidyalaya , Bhopal <br />
                CGPA : 7.32
              </p>
            </div>
            <div className="resume-item">
              <h4>Higher Secondary Education</h4>
              <h5>2016 - 2017</h5>
              <p><em>
                Govt High Secondary School Gandhi Nagar, Indore Madhya Pradesh</em></p>
              <p>12th (Physics, Chemistry and Mathematics)</p>
              <p>Percentage : 76.4</p>
            </div>

          </div>
        </div>

      </div>
    </section>)
}

export default Resume