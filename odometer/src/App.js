import React, { Component } from 'react';
import Odometer from './Odometer'
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Odometer />
        <Footer />
      </div>
    );
  }
}
export default App;
