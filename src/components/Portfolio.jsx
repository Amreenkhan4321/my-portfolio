import React from 'react'

function Portfolio() {
  return (
<section id="portfolio" className="portfolio section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Seeking a role as a front-end developer so I can use my thorough knowledge of programming frameworks and development software. Experienced with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages including HTML5, CSS, JavaScript, Strong background in JavaScript Frameworks Like React.

</p>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-1.png" className="img-fluid" alt="logo"/>
              <div className="portfolio-info">
                <h4>Web 1</h4>
                <p>Web</p>
              </div>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-1.png" target="_blank" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                <a href="http://artfelectricals.com/" target="_blank" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-2.png" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
              </div>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-2.png" target="_blank" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                <a href="https://www.vedshree.online/" target="_blank" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-3.png" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
              </div>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-3.png" target="_blank" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                <a href="https://amreenkhan4321.github.io/weather-app/" target="_blank" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-4.png" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
              </div>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-4.png" target="_blank" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a>
                <a href="https://quoteg.netlify.app/" target="_blank" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-5.png" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
              </div>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-5.png"  target="_blank" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a>
                <a href="https://my-text-tool.netlify.app/" target="_blank" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-6.png" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Web page 1</h4>
                <p>Web page</p>
              </div>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-6.png" target="_blank" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
                <a href="https://amreenkhan4321.github.io/Realme-India-/" target="_blank" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-7.png" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>App 4</h4>
                <p>App</p>
              </div>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-7.png" target="_blank" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus"></i></a>
                <a href="https://amreenkhan4321.github.io/MyTodo/" target="_blank" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-8.png" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Web page 2</h4>
                <p>Web page</p>
              </div>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-8.png" target="_blank" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus"></i></a>
                <a href="https://amreenkhan4321.github.io/One-Plus/" target="_blank" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-9.png" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
              </div>
              <div className="portfolio-links">
                <a href="assets/img/portfolio/portfolio-9.png" target="_blank" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                <a href="portfolio-details.html" target="_blank" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section> )
}

export default Portfolio