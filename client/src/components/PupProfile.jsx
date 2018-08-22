import React, { Component } from 'react';
// maybe needs a change
import { fetchOneDog, updateDoggy, deleteDog, updateGrades } from '../services/api';
import UpdateGrades from './UpdateGrades';
import DeleteButton from './Deletebutton';
import UpdateDog from './UpdateDog';



class PupProfile extends Component {
  constructor(props) {
    super(props);
    const { dogs, dog, grade } = props;
    this.state = {
      dog_id: dog.id,
      id: dog.id,
      owner: dog.owner,
      name: dog.name,
      breed: dog.breed,
      size: dog.size,
      age: dog.age,
      picture: dog.picture,
      stay: grade.stay,
    }

    this.handleDeleteClick = this.handleDeleteClick.bind(this);

  }


  // handle change
  handleChange(e) {

  }
  // handle submit

  // handle delete 
  handleDeleteClick(id) {
    deleteDog(id)
      .then(res => {
        this.fetchOneDog();
      })
  }

  render() {
    return(
      <div>
        <h2>{this.props.dog.name}</h2>
        {/* <UpdateGrades />
        <DeleteButton dogs={this.state.dogs} handleDeleteClick={this.handleDeleteClick} /> */}
        <h2>{this.state.name}</h2>
        <p>Owner: {this.state.owner}</p>
        <p>Breed: {this.state.breed}</p>
        <p>Size: {this.state.size}</p>
        <p>Age: {this.state.age}</p>
        <p>Stay: {this.state.stay}</p>
        <button 
            onClick={(ev) => {
              ev.preventDefault();
              const dogState = this.state;
              this.props.editDog(dogState)}} >
              Edit Dog
            </button>
        <button 
            onClick={(ev) => {
              ev.preventDefault();
              const dogState = this.state;
              this.props.newGrade(dogState)}} >
              New Gradebook
          </button>
      </div>
     
    // render pup profile
    // render forms (update)
    // render forms (gradebook)
    );
  }

}


export default PupProfile;
