import React from 'react';

function App() {
  var BASE_URL = "#";
  var present = window.location.pathname;
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container">
          <a className="navbar-brand" href="index.html">BrightHotel</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> Menu
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active"><a href={BASE_URL} className="nav-link">Home</a></li>
              <li className="nav-item"><a href={BASE_URL} className="nav-link">Rooms</a></li>
              <li className="nav-item"><a href={BASE_URL} className="nav-link">Services</a></li>
              <li className="nav-item" {present == '/about' ? 'active' : ''}><a href='/about' className="nav-link">About Us</a></li>
              <li className="nav-item"><a href={BASE_URL} className="nav-link">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;

