import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Frontend/Header';
import Footer from './Frontend/Footer';
import Home from './Frontend/Pages/Home/Home';
import About from './Frontend/Pages/About/About';
function App() {
  return (
    <Router>
      <div>
        <Header />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
