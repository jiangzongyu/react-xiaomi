import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Carousel } from 'element-react';
// import 'element-theme-default';

class App extends Component {
  render() {
    return (
      <div className="block">
          <Carousel>
              {
              [1,2,3,4].map((item, index) => {
                  return (
                  <Carousel.Item key={index}>
                      <h3>{item}</h3>
                  </Carousel.Item>
                  )
              })
              }
          </Carousel>
      </div>
    );
  }
}

export default App;
