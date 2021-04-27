
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreatureSearch from './CreatureSearch';
import CreatureList from './CreatureList';
import creatureData from './Creatures';
import './App.css';


class App extends Component {
  state = {
    creatures: creatureData
  }

  handleSearch = ({ nameFilter, sortField }) => {
    const nameRegex = new RegExp(nameFilter, 'i');

    const searchData = creatureData
      .filter(creature => {
        return !nameFilter || creature.title.match(nameRegex);
      })
      .sort((a, b) => {
        if (a[sortField] < b[sortField]) return -1;
        if (a[sortField] > b[sortField]) return 1;
        return 0;
      });

    this.setState({ creatures: searchData });
  }

  render() {
    const { creatures } = this.state;

    return (
      <div className="App">

        <Header />

        <CreatureSearch onSearch={this.handleSearch} />

        <main>
          <CreatureList creature={creatures} />
        </main>

        <Footer />

      </div>
    );
  }

}

export default App;
