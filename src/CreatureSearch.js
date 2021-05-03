/* eslint-disable no-unused-vars */
import { Component } from 'react';
import './CreatureSearch.css';

export default class CreatureSearch extends Component {
  state = {
    nameFilter: '',
    sortField: '',
    hornFilter: ''
  }

  handleNameChange = ({ target }) => {
    this.setState({ nameFilter: target.value });
  }

  handleSearchChange = ({ target }) => {
    this.setState({ sortField: target.value });
  }

  handleHornChange = ({ target }) => {
    this.setState({ hornFilter: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState !== this.state) {
      this.props.onSearch(this.state);
    }
  }

  render() {

    const { nameFilter, sortField, hornFilter } = this.state;
    const { horns } = this.props;

    return (

      <form className="CreatureSearch" onSubmit={this.handleSubmit}>

        <input
          name='nameFilter'
          value={nameFilter}
          onChange={this.handleNameChange}
        />

        <select
          name="sortField"
          value={sortField}
          onChange={this.handleSearchChange}
        >
          <option value="">sort...</option>
          <option value='title'>by name</option>
          <option value='horns'>by horns</option>
        </select>

        {/* <select
          name="hornFilter"
          value={hornFilter}
          onChange={this.handleHornChange}
        >
          <option value="">All</option>
          {horns.map(horns => (
            <option key={horns} value={horns}>{horns}</option>
          ))}
        </select> */}

        <button>🔍</button>

      </form>
    );
  }

}