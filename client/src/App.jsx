import React, { Component } from 'react';
import DogsIndex from './components/DogsIndex';
import UpdateDog from './components/UpdateDog';
import PupProfile from './components/PupProfile';
import CreateForm from './components/CreateForm';
import Header from './components/Header';

import {
  fetchDogs, 
  fetchOneDog,
  updateDoggy,
  editDogGrade,
  saveNewDog,
} from './services/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
      selectedDog: '',
      currentView: 'All Dogs',
    }
<<<<<<< HEAD
    this.updateDoggy = this.updateDoggy.bind(this)
    this.fetchOne = this.fetchOne.bind(this)
    this.selectDog = this.selectDog.bind(this)
=======
    this.fetchOne = this.fetchOne.bind(this);
    this.createDog = this.createDog.bind(this);
    this.updateDoggy = this.updateDoggy.bind(this);
    this.editDogGrades = this.editDogGrades.bind(this);

>>>>>>> 961a78de41aa608225d5e487c5bf69633dca01b7
  }

  componentDidMount() {
    fetchDogs()
    .then(data => this.setState({dogs: data.dogs}));
  };

  // select one dog & set state
  fetchOne(id) {
    fetchOneDog(id)
    .then(data => this.setState({
      selectedDog: data.dog,
      currentView: 'Pup Profile'
    }))
  };

  selectDog(dog) {
    this.setState({
      selectedDog: dog,
      currentView: 'Pup Profile'
    })
  }

  // create dog function
  createDog(dog) {
    saveNewDog(dog)
    .then(data => fetchDogs())
    .then(data => {
      this.setState({
        currentView: 'Dog Index',
        selectedDog: data.dog
      });
    });
  };

  
 // edit dog function
  updateDoggy(dog) {
    updateDoggy(dog)
    .then(data => fetchOneDog(dog.id))
    .then(data => {
      this.setState({
        currentView: 'Update Dog',
        selectedDog : data.dog
      });
    })
  };

  // delete dog function

  // edit dog grade function
  editDogGrades(id) {
    editDogGrade(id)
    .then(data => this.fetchOne(id))
    .then(data => {
      this.setState({
        currentView: 'Pup Profile',
        selectedDog: data.dog
      })
    })
  }

  // select grade function
  // create grade function? tbd

  // delete dog function

  // SWITCH statement for which page to view
  determineWhichToRender() {
    const { currentView } = this.state;
    const { dogs, selectedDog } = this.state;

    switch(currentView) {
      case 'All Dogs':
<<<<<<< HEAD
      return <DogsIndex dogs={dogs} oneDog = {this.fetchOne} selectDog={this.selectDog}/>
=======
      return <DogsIndex dogs={this.state.dogs} oneDog={this.fetchOne} newDog={this.createDog} />
>>>>>>> 961a78de41aa608225d5e487c5bf69633dca01b7
      case 'Pup Profile':
      return <PupProfile dogs={dogs} selectedDog={this.selectedDog} />;
      case 'Create Pup':
      return <CreateForm dogs={dogs}/>
      case 'Update Dog':
      const dog = dogs.find(dog => dog.id === selectedDog.id)
      return <UpdateDog dogs={dogs} dog={dog} onSubmit={this.updateDoggy} />
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
