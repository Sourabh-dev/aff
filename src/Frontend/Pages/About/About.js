import React from 'react';
function App() {
    var BASE_URL = "#"
    var bannerBg = require('../../../images/bg_2.jpg')
    return (
        <div className="block-30 block-30-sm item" style={{ backgroundImage: "url(" + bannerBg + ")" }} data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-10">
                        <span className="subheading-sm">About</span>
                        <h2 className="heading">The Hotel</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
