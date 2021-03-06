import React, { Component } from 'react';
import CharacterList from "./components/CharacterList"
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data)
        this.setState({ 
          starwarsChars: data.results,
          next: data.next,
          previous: data.previous
         });
      })
      .catch(err => {
        throw new Error(err);
      });
  };
  handleNext = url => {
    this.getCharacters(url)
  }
  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList characters={this.state.starwarsChars} />
        <button onClick={() => this.handleNext(this.state.previous)}>
            {'<'}
          </button>
        <button onClick={() => this.handleNext(this.state.next)}>
            >
          </button>
      </div>
    );
  }
}

export default App;
