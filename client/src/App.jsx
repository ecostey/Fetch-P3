// import react and component class
import React, { Component } from 'react';
// import components
import DogsIndex from './components/DogsIndex';
import UpdateDog from './components/UpdateDog';
import PupProfile from './components/PupProfile';
import CreateForm from './components/CreateForm';
import GradeBook from './components/GradeBook'
import Header from './components/Header';
import CreateGrade from './components/CreateGrade';
import './index.css';
import UpdateGrades from './components/UpdateGrades';
// import styling
import './index.css';

// import functions from api.js
import {
  fetchDogs,
  fetchOneDog,
  updateDoggy,
  fetchOneGrade,
  updateGrades,
  saveNewDog,
  saveNewGrade,
  fetchAllGrades,
  deleteDog,
} from './services/api';

// app component
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: [],
      dogGrade: [],
      dogs: [],
      selectedDog: '',
      currentView: 'All Dogs',
    }

    // bind functions to use this in callback
    this.createDog = this.createDog.bind(this);
    this.createGrade = this.createGrade.bind(this);
    this.updateDoggy = this.updateDoggy.bind(this);
    this.editDogGrades = this.editDogGrades.bind(this);
    this.selectDog = this.selectDog.bind(this);
    this.fetchOne = this.fetchOne.bind(this);
    this.editDog = this.editDog.bind(this);
    this.editGrade = this.editGrade.bind(this);
    this.handleDeleteDog = this.handleDeleteDog.bind(this);
  }

  // when page loads, fetch all dogs and all grades
  componentDidMount() {
    fetchDogs()
      .then(data => this.setState({ dogs: data.dogs }));
    fetchAllGrades()
      .then(data => this.setState({ grades: data.grades }));
  };

  headerRenderToHome() {
    this.setState({
      currentView: 'All Dogs'
    })
  }

  // select one dog & set state
  fetchOne(id) {
    fetchOneDog(id)
      .then(data => this.setState({
        dogs: data.dog,
        currentView: 'Pup Profile'
      }))
  };

  // select dog function
  selectDog(dog, grades) {
    this.setState({
      selectedDog: dog,
      dogGrade: grades[0],
      currentView: 'Pup Profile'
    })
  };
  

  // edit dog function
  editDog(dog) {
    this.setState({
      selectedDog: dog,
      currentView: 'Update Dog'
    })
  }

  // edit grade function
  editGrade(grades) {
    this.setState({
      dogGrade: grades,
      currentView: 'Update Dog'
    })
  }

  // create dog function
  createDog(dog) {
    saveNewDog(dog)
      .then(data => {
        this.setState({
          currentView: 'Create Grade',
          selectedDog: data,
        });
      })
  };

  // create grade function
  createGrade(grade) {
    console.log(grade)
    saveNewGrade(grade)
    .then(data => fetchAllGrades())
    .then(data => {
      console.log(data)
      this.setState({
        grades: data.grades,
        currentView: 'Gradebook',
      });
    })
  };


  // edit dog function
  updateDoggy(dog) {
    updateDoggy(dog)
      .then(data => fetchOneDog(dog.id))
      .then(data => {
        this.setState({
          currentView: 'Pup Profile',
          selectedDog: data
        });
      })
  };

  // delete dog function
  handleDeleteDog(dog) {
    deleteDog(dog)
      .then(data => fetchDogs())
      .then(data => {
        this.setState({
          currentView: 'All Dogs',
          dogs: data.dogs,
        });
      })
  }

  // edit dog grade function
  editDogGrades(dog) {
    updateGrades(dog)
      .then(data => fetchOneGrade(dog.dogs_id))
      .then(data => {
        this.setState({
          currentView: 'Pup Profile',
          dogGrade: data
        })
      })
  }

  // SWITCH statement for which page to view
  determineWhichToRender() {
    const { currentView } = this.state;
    const { dogs, selectedDog, grades, dogGrade } = this.state;

    switch (currentView) {
      case 'All Dogs':
        return <DogsIndex
          grades={this.state.grades}
          dogs={this.state.dogs}
          oneDog={this.fetchOne}
          newDog={this.createDog}
          selectDog={this.selectDog}
          newGrade={this.createGrade}
        />
      case 'Pup Profile':
        return <PupProfile
          editDog={this.editDog}
          handleDeleteDog={this.handleDeleteDog}
          dog={selectedDog}
          dogGrade={dogGrade}
        />;
      case 'Create Pup':
        return <CreateForm
          newDog={this.createDog}
        />
      case 'Update Dog':
        return (
          <div>
            
            <div className="updates-grid-container">
              <div className="updates-grid-cell">
                <UpdateDog
                  dogs={dogs}
                  selectedDog={this.state.selectedDog}
                  onSubmit={this.updateDoggy}
                />
              </div>
              <div className="updates-grid-cell middle-cell">
              <p className="updateDogTitle">{this.state.selectedDog.name}</p>
                <img src='https://i.imgur.com/njer435.png' alt={'Sorry, No Image 🐾'} height="250" width="250" />
              </div>
              <div className="updates-grid-cell">
                <UpdateGrades
                  selectedDog={this.state.selectedDog}
                  grades={dogGrade}
                  onSubmit={this.editDogGrades} />
              </div>
            </div>
          </div>
        )
      case 'Gradebook':
        return <GradeBook grades={this.state.grades} />
      case 'Create Grade':
        return <CreateGrade 
        selectedDog={this.state.selectedDog}
        newGrade={this.createGrade}
        />
    }
  }

  handleLinkClick(link) {
    this.setState({ currentView: link });
  }

  render() {
    const links = [
      'All Dogs',
      'Create Pup',
      'Gradebook'
    ]
    return (
      <div className="App">
        <Header
          homeView={this.headerRenderToHome.bind(this)}
          onClick={this.handleLinkClick.bind(this)}
          links={links} />
        {this.determineWhichToRender()}
      </div>
    );
  }
}

export default App;
