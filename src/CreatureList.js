import React, { Component } from 'react';
import CreatureItem from './CreatureItem';
import './CreatureList.css';
import Creatures from './Creatures';

class CreatureList extends Component {

  render() {
    return (
      <ul className="CreatureList">
        {Creatures.map(creature => (
          <CreatureItem key={creature.title} creature={creature} />
        ))}
      </ul>
    );
  }
}
export default CreatureList;