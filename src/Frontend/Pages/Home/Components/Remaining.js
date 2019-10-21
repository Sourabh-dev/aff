import React from 'react';


function App() {
    var BASE_URL = "#"
    var bg2 = require('../../../../images/bg_2.jpg')

    return (
        <div>
            <div className="site-section block-13 bg-light">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-7 section-heading">
                            <span className="subheading-sm">Featured Rooms</span>
                            <h2 className="heading">Rooms &amp; Suites</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, iusto, omnis! Quidem, sint, impedit? Dicta eaque delectus tempora hic, corporis velit doloremque quod quam laborum, nobis iusto autem culpa quaerat!</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="nonloop-block-13 owl-carousel">
                                <div className="item">
                                    <div className="block-34">
                                        <div className="image">
                                            <a href="{{BASE_URL}}"><img src="images/img_1.jpg" alt="Image placeholder" /></a>
                                        </div>
                                        <div className="text">
                                            <h2 className="heading">Bachelor Room</h2>
                                            <div className="price"><sup>$</sup><span className="number">156</span><sub>/per night</sub></div>
                                            <ul className="specs">
                                                <li><strong>Adults:</strong> 1</li>
                                                <li><strong>Categories:</strong> Single</li>
                                                <li><strong>Facilities:</strong> Closet with hangers, HD flat-screen TV, Telephone</li>
                                                <li><strong>Size:</strong> 20m<sup>2</sup></li>
                                                <li><strong>Bed Type:</strong> One bed</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="block-34">
                                        <div className="image">
                                            <a href="{{BASE_URL}}"><img src="images/img_2.jpg" alt="Image placeholder" /></a>
                                        </div>
                                        <div className="text">
                                            <h2 className="heading">Family Room</h2>
                                            <div className="price"><sup>$</sup><span className="number">320</span><sub>/per night</sub></div>
                                            <ul className="specs">
                                                <li><strong>Adults:</strong> 1</li>
                                                <li><strong>Categories:</strong> Single</li>
                                                <li><strong>Facilities:</strong> Closet with hangers, HD flat-screen TV, Telephone</li>
                                                <li><strong>Size:</strong> 20m<sup>2</sup></li>
                                                <li><strong>Bed Type:</strong> One bed</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="block-34">
                                        <div className="image">
                                            <a href="{{BASE_URL}}"><img src="images/img_3.jpg" alt="Image placeholder" /></a>
                                        </div>
                                        <div className="text">
                                            <h2 className="heading">Presidential Room</h2>
                                            <div className="price"><sup>$</sup><span className="number">425</span><sub>/per night</sub></div>
                                            <ul className="specs">
                                                <li><strong>Adults:</strong> 1</li>
                                                <li><strong>Categories:</strong> Single</li>
                                                <li><strong>Facilities:</strong> Closet with hangers, HD flat-screen TV, Telephone</li>
                                                <li><strong>Size:</strong> 20m<sup>2</sup></li>
                                                <li><strong>Bed Type:</strong> One bed</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="block-34">
                                        <div className="image">
                                            <a href="{{BASE_URL}}"><img src="images/img_4.jpg" alt="Image placeholder" /></a>
                                        </div>
                                        <div className="text">
                                            <h2 className="heading">Double Room</h2>
                                            <div className="price"><sup>$</sup><span className="number">525</span><sub>/per night</sub></div>
                                            <ul className="specs">
                                                <li><strong>Adults:</strong> 1</li>
                                                <li><strong>Categories:</strong> Single</li>
                                                <li><strong>Facilities:</strong> Closet with hangers, HD flat-screen TV, Telephone</li>
                                                <li><strong>Size:</strong> 20m<sup>2</sup></li>
                                                <li><strong>Bed Type:</strong> One bed</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="block-34">
                                        <div className="image">
                                            <a href="{{BASE_URL}}"><img src="images/img_5.jpg" alt="Image placeholder" /></a>
                                        </div>
                                        <div className="text">
                                            <h2 className="heading">VIP Room</h2>
                                            <div className="price"><sup>$</sup><span className="number">600</span><sub>/per night</sub></div>
                                            <ul className="specs">
                                                <li><strong>Adults:</strong> 1</li>
                                                <li><strong>Categories:</strong> Single</li>
                                                <li><strong>Facilities:</strong> Closet with hangers, HD flat-screen TV, Telephone</li>
                                                <li><strong>Size:</strong> 20m<sup>2</sup></li>
                                                <li><strong>Bed Type:</strong> One bed</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="block-34">
                                        <div className="image">
                                            <a href="{{BASE_URL}}"><img src="images/img_6.jpg" alt="Image placeholder" /></a>
                                        </div>
                                        <div className="text">
                                            <h2 className="heading">VIP Room</h2>
                                            <div className="price"><sup>$</sup><span className="number">760</span><sub>/per night</sub></div>
                                            <ul className="specs">
                                                <li><strong>Adults:</strong> 1</li>
                                                <li><strong>Categories:</strong> Single</li>
                                                <li><strong>Facilities:</strong> Closet with hangers, HD flat-screen TV, Telephone</li>
                                                <li><strong>Size:</strong> 20m<sup>2</sup></li>
                                                <li><strong>Bed Type:</strong> One bed</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block-30 block-30-sm item" style={{ backgroundImage: "url(" + bg2 + ")" }} data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <h2 className="heading">Quality accommodation that exceeds the expectations</h2>
                            <p><a href="{{BASE_URL}}" className="btn py-4 px-5 btn-primary">Learn More</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App;