import React from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from "react-helmet";


//import components
import Header from './Components/Header';
import Carousel from './Components/Carousel';
import Bookings from './Components/Bookings';
import Description from './Components/Description';

//import css
import './style.css';
import './CSS/mediaQueries.css';


function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Taco Not Taco</title>
      </Helmet>
      <Header />
      <Carousel />
      <Description />
      <Bookings />
    </div>
  );
}

export default App;
