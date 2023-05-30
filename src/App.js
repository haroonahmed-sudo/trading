import React, { useEffect, useState } from 'react';

import Navbar from './navbar';
import FakeNavbar from './FakeNavbar';
import Home from './home';
import Plans from './plans';
import Faqs from './faq';
import Reviews from './reviews';
import Contact from './contact';
import About from './About';
import Footer from './footer';
import Routes from './Routes';
import './assets/scss/themes.scss';
import { useParams } from 'react-router-dom'
import GetStarted from './GetStarted';

const App = () => {
  const { srh } = useParams()
  const rootElement = document.documentElement;
  rootElement.setAttribute('data-layout-mode', 'dark');

  document.title = "Landing | SAFI BHAI WEBSITE";
  const [show, setShow] = useState(true)
  useEffect(() => {
    const checkURL = () => {
      const currentURL = window.location.href;

      const searchString = 'start';
      if (currentURL.includes(searchString)) {
        setShow(false)
        // Perform further actions
      }

    };

    checkURL();
  }, []);
  return (
    <React.Fragment>
      {/* {srh != 1 ? */}
      {show == true ? <Navbar /> : <FakeNavbar />}

      {show == true ? <div className="layout-wrapper landing">
        <Home />
        <Plans />
        <About />
        <Faqs />
        <Reviews />
        <Contact />
        <Footer />
      </div> : <Routes />}

    </React.Fragment>
  );
};

export default App;