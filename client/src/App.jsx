import React, { Component } from 'react';
import DogsIndex from './components/DogsIndex';
import {fetchDogs} from './services/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
    }
  }

  componentDidMount() {
    fetchDogs()
    .then(data => this.setState({dogs: data.dogs}));
  }

  render() {
    return (
      <div className="App">
        <DogsIndex dogs={this.state.dogs}/>
      </div>
    );
  }
}

export default App;
