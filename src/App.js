
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Header></Header>

        <main>List goes here</main>

        <Footer></Footer>

      </div>
    );
  }

}

export default App;
