import React from 'react';


function App() {
	var BASE_URL ="#"
	var bg1 = require('../../../../images/bg_1.jpg')
	var bg2 = require('../../../../images/bg_2.jpg')
	var bg3 = require('../../../../images/bg_3.jpg')

  return (
    <div className="block-31">
	    <div className="owl-carousel loop-block-31 ">
	      <div className="block-30 item" data-stellar-background-ratio="0.5" style={{backgroundImage: "url("+bg1+")"}}>
	        <div className="container">
	          <div className="row align-items-center">
	            <div className="col-md-10">
	              <span className="subheading-sm">Welcome</span>
	              <h2 className="heading">Enjoy a Luxury Experience</h2>
	              <p><a href={BASE_URL} className="btn py-4 px-5 btn-primary">Learn More</a></p>
	            </div>
	          </div>
	        </div>
	      </div>
	      <div className="block-30 item" data-stellar-background-ratio="0.5" style={{backgroundImage: "url("+bg2+")"}}>
	        <div className="container">
	          <div className="row align-items-center">
	            <div className="col-md-10">
	              <span className="subheading-sm">Welcome</span>
	              <h2 className="heading">Simple &amp; Elegant</h2>
	              <p><a href={BASE_URL} className="btn py-4 px-5 btn-primary">Learn More</a></p>
	            </div>
	          </div>
	        </div>
	      </div>
	      <div className="block-30 item" data-stellar-background-ratio="0.5" style={{backgroundImage: "url("+bg3+")"}}>
	        <div className="container">
	          <div className="row align-items-center">
	            <div className="col-md-10">
	              <span className="subheading-sm">Welcome</span>
	              <h2 className="heading">Food &amp; Drinks</h2>
	              <p><a href={BASE_URL} className="btn py-4 px-5 btn-primary">Learn More</a></p>
	            </div>
	          </div>
	        </div>
	      </div>
	    </div>
    </div>
  	);
}

export default App;
