import React from 'react';


function App() {
    var bannerImages = ['images/bg_1.jpg', 'images/bg_2.jpg', 'images/bg_3.jpg'];
    var BASE_URL = "#"
    var bg1 = require('../../../../images/bg_1.jpg')
    var bg2 = require('../../../../images/bg_2.jpg')
    var bg3 = require('../../../../images/bg_3.jpg')

    return (
        <div className="container">
            <div className="row mb-5">
                <div className="col-md-12">

                    <div className="block-32">
                        <form action="#">
                            <div className="row">
                                <div className="col-md-6 mb-3 mb-lg-0 col-lg-3">
                                    <label for="checkin">Check In</label>
                                    <div className="field-icon-wrap">
                                        <div className="icon"><span className="icon-calendar"></span></div>
                                        <input type="text" id="checkin_date" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3 mb-lg-0 col-lg-3">
                                        <label for="checkin">Check Out</label>
                                        <div className="field-icon-wrap">
                                            <div className="icon"><span className="icon-calendar"></span></div>
                                            <input type="text" id="checkout_date" className="form-control" />
                                        </div>
                                        </div>
                                        <div className="col-md-6 mb-3 mb-md-0 col-lg-3">
                                            <div className="row">
                                                <div className="col-md-6 mb-3 mb-md-0">
                                                    <label for="checkin">Adults</label>
                                                    <div className="field-icon-wrap">
                                                        <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                                        <select name="" id="" className="form-control">
                                                            <option value="">1</option>
                                                            <option value="">2</option>
                                                            <option value="">3</option>
                                                            <option value="">4+</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-3 mb-md-0">
                                                    <label for="checkin">Children</label>
                                                    <div className="field-icon-wrap">
                                                        <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                                        <select name="" id="" className="form-control">
                                                            <option value="">1</option>
                                                            <option value="">2</option>
                                                            <option value="">3</option>
                                                            <option value="">4+</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 align-self-end">
                                            <button className="btn btn-primary btn-block">Check Availabilty</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="row site-section">
                        <div className="col-md-12">
                            <div className="row mb-5">
                                <div className="col-md-7 section-heading">
                                    <span className="subheading-sm">Services</span>
                                    <h2 className="heading">Facilities &amp; Services</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="media block-6">
                                <div className="icon"><span className="flaticon-double-bed"></span></div>
                                <div className="media-body">
                                    <h3 className="heading">Luxury Rooms</h3>
                                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="media block-6">
                                <div className="icon"><span className="flaticon-wifi"></span></div>
                                <div className="media-body">
                                    <h3 className="heading">Fast &amp; Free Wifi</h3>
                                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="media block-6">
                                <div className="icon"><span className="flaticon-customer-service"></span></div>
                                <div className="media-body">
                                    <h3 className="heading">Call Us 24/7</h3>
                                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="media block-6">
                                <div className="icon"><span className="flaticon-taxi"></span></div>
                                <div className="media-body">
                                    <h3 className="heading">Travel Accomodation</h3>
                                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="media block-6">
                                <div className="icon"><span className="flaticon-credit-card"></span></div>
                                <div className="media-body">
                                    <h3 className="heading">Accepts Credit Card</h3>
                                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="media block-6">
                                <div className="icon"><span className="flaticon-dinner"></span></div>
                                <div className="media-body">
                                    <h3 className="heading">Restaurant</h3>
                                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                );
}
export default App;