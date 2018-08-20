import React, { Component } from 'react';
import DogsIndex from './components/DogsIndex';
import PupProfile from './components/PupProfile';
import {fetchDogs, fetchOneDog} from './services/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
      selectedDog: '',
      currentView: '',
    }
  }

  componentDidMount() {
    fetchDogs()
    .then(data => this.setState({dogs: data.dogs}));
  };

  // select dog function
  fetchOne() {
    fetchOneDog(this.state.dog.id)
    .then(data => this.setState({dog: data.dog}))
  };

  // create dog function
  createDog() {

  }
  // edit dog function

  // delete dog function

  // edit dog grade function

  // select grade function
  selectGrades() {
    
  }
  // create grade function? tbd

  // delete dog function

  // SWITCH statement for which page to view
  determineWhichToRender() {
    const { currentView } = this.state;
    const { dogs, selectedDog } = this.state;

    switch(currentView) {
      case 'Pup Profile':
      return <PupProfile selectedDog={this.selectedDog} grades={this.selectGrades}/>;
      break;
      case 'Gradebook':
      return <Gradebook />
      break;
    }
  }

  render() {
    return (
      <div className="App">
        <DogsIndex dogs={this.state.dogs}/>
        <PupProfile />
      </div>
    );
  }
}

export default App;
