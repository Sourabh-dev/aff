import React from 'react';

function App() {
  var BASE_URL = "#";
  return (
    <div>
      <div className="site-section bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-7 section-heading">
              <span className="subheading-sm">Reviews</span>
              <h2 className="heading">Guest Reviews</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">

              <div className="block-33">
                <div className="vcard d-flex mb-3">
                  <div className="image align-self-center"><img src="images/person_3.jpg" alt="Person here" /></div>
                    <div className="name-text align-self-center">
                      <h2 className="heading">Martin Newmansfield</h2>
                      <span className="meta">Satisfied Customer</span>
                    </div>
                  </div>
                  <div className="text">
                    <blockquote>
                      <p>&rdquo; Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid. Atque dolore esse veritatis iusto eaque perferendis non dolorem fugiat voluptatibus vitae error ad itaque inventore accusantium tempore dolores sunt. &ldquo;</p>
                    </blockquote>
                  </div>
                </div>

              </div>
              <div className="col-md-6 col-lg-4">

                <div className="block-33">
                  <div className="vcard d-flex mb-3">
                    <div className="image align-self-center"><img src="images/person_2.jpg" alt="Person here" /></div>
                      <div className="name-text align-self-center">
                        <h2 className="heading">Nancy Green</h2>
                        <span className="meta">Satisfied Customer</span>
                      </div>
                    </div>
                    <div className="text">
                      <blockquote>
                        <p>&rdquo; Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid. Atque dolore esse veritatis iusto eaque perferendis non dolorem fugiat voluptatibus vitae error ad itaque inventore accusantium tempore dolores sunt. &ldquo;</p>
                      </blockquote>
                    </div>
                  </div>

                </div>
                <div className="col-md-6 col-lg-4">

                  <div className="block-33">
                    <div className="vcard d-flex mb-3">
                      <div className="image align-self-center"><img src="images/person_1.jpg" alt="Person here" /></div>
                        <div className="name-text align-self-center">
                          <h2 className="heading">Elizabeth Charles</h2>
                          <span className="meta">Satisfied Customer</span>
                        </div>
                      </div>
                      <div className="text">
                        <blockquote>
                          <p>&rdquo; Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid. Atque dolore esse veritatis iusto eaque perferendis non dolorem fugiat voluptatibus vitae error ad itaque inventore accusantium tempore dolores sunt. &ldquo;</p>
                        </blockquote>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>


      <footer className="footer">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6 col-lg-4">
              <h3 className="heading-section">About Us</h3>
              <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid. Atque dolore esse veritatis iusto eaque perferendis non dolorem fugiat voluptatibus vitae error ad itaque inventore accusantium tempore dolores sunt.</p>
              <p><a href={BASE_URL} className="btn btn-primary px-4">Button</a></p>
            </div>
            <div className="col-md-6 col-lg-4"></div>
            <div className="col-md-6 col-lg-4">
              <div className="block-23">
                <h3 className="heading-section">Contact Info</h3>
                  <ul>
                    <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                    <li><a href={BASE_URL}><span className="icon icon-phone"></span><span className="text">+2 392 3929 210</span></a></li>
                    <li><a href={BASE_URL}><span className="icon icon-envelope"></span><span className="text">info@yourdomain.com</span></a></li>
                    <li><span className="icon icon-clock-o"></span><span className="text">Monday &mdash; Friday 8:00am - 5:00pm</span></li>
                  </ul>
                </div>
            </div>
            
            
          </div>
          <div className="row pt-5">
            <div className="col-md-12 text-left">
              <p>
              
                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This Project is made with <i className="icon-heart" aria-hidden="true"></i> by <a href={BASE_URL} className="text-primary">Sourabh</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div id="ftco-loader" className="show fullscreen">
        <svg className="circular" width="48px" height="48px">
        <circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth="4" stroke="#eeeeee"/>
        <circle className="path" cx="24" cy="24" r="22" fill="none" strokeWidth="4" strokeMiterlimit="10" stroke="#F96D00"/>
        </svg>
      </div>
</div>
  );
}

export default App;


