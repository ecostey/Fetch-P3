import React, { Component } from 'react';
import DogsIndex from './components/DogsIndex';
import UpdateDog from './components/UpdateDog';
import PupProfile from './components/PupProfile';
import CreateForm from './components/CreateForm';
import Gradebook from './components/Gradebook'
import Header from './components/Header';

import {
  fetchDogs, 
  fetchOneDog,
  updateDoggy,
  updateGrades,
  saveNewDog,
  fetchAllGrades,
} from './services/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      dogs: [],
      selectedDog: '',
      currentView: 'All Dogs',
    }
    this.fetchOne = this.fetchOne.bind(this);
    this.createDog = this.createDog.bind(this);
    this.updateDoggy = this.updateDoggy.bind(this);
    this.editDogGrades = this.editDogGrades.bind(this);
    this.selectDog = this.selectDog.bind(this);
    this.editDog = this.editDog.bind(this);

  }

  componentDidMount() {
    fetchDogs()
    .then(data => this.setState({dogs: data.dogs}));
    fetchAllGrades()
    .then(data => this.setState({grades: data.grades}));
  };

  // select one dog & set state
  fetchOne(id) {
    fetchOneDog(id)
    .then(data => this.setState({
      dogs: data.dog,
      currentView: 'Pup Profile'
    }))
  };

  selectDog(dog) {
    this.setState({
      selectedDog: dog,
      currentView: 'Pup Profile'
    })
  };

  editDog(dog) {
    this.setState({
      selectedDog: dog,
      currentView: 'Update Dog'
    })
  }

  // create dog function
  createDog(dog) {
    saveNewDog(dog)
    .then(data => fetchDogs())
    .then(data => {
      this.setState({
        currentView: 'All Dogs',
        dogs: data.dogs
      });
    })
  };

  
 // edit dog function
  updateDoggy(dog) {
    updateDoggy(dog)
    .then(data => fetchDogs())
    .then(data => {
      this.setState({
        currentView: 'All Dogs',
        dogs : data.dogs
      });
    })
  };

  // delete dog function

  // edit dog grade function
  editDogGrades(id) {
    updateGrades(id)
    .then(data => this.fetchOne(id))
    .then(data => {
      this.setState({
        currentView: 'Pup Profile',
        dogs: data.dog
      })
    })
  }

  // select grade function
  // create grade function? tbd


  // SWITCH statement for which page to view
  determineWhichToRender() {
    const { currentView } = this.state;
    const { dogs, selectedDog } = this.state;

    switch(currentView) {
      case 'All Dogs':
      return <DogsIndex 
        dogs={this.state.dogs} 
        oneDog={this.fetchOne} 
        newDog={this.createDog}
        selectDog={this.selectDog} />
      case 'Pup Profile':
      const dog = dogs.find(dog => dog.id === selectedDog.id)
      return <PupProfile 
      dogs={dogs} 
      editDog={this.editDog}
      dog={dog}
       />;
      case 'Create Pup':
      return <CreateForm  newDog={this.createDog} />
      case 'Update Dog':
      return <UpdateDog 
      dogs={dogs} 
      dog={dog} 
      selectedDog={this.state.selectedDog}
      onSubmit={this.updateDoggy} />
      // case 'Gradebook':
      // return <Gradebook />
    }
  }

  handleLinkClick(link) {
    this.setState({ currentView: link });
  }

  render() {
    const links = [
      'All Dogs',
      'Pup Profile',
      'Create Pup',
      'Update Dog'
    ]
    return (
      <div className="App">
        <Header
          onClick={this.handleLinkClick.bind(this)}
          links={links} />
        {this.determineWhichToRender()}
      </div>
    );
  }
}

export default App;
