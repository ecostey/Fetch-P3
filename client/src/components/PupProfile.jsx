import React, { Component } from 'react';
// maybe needs a change
import { fetchOneGrade, updateDoggy, deleteDog, updateGrades } from '../services/api';
import UpdateGrades from './UpdateGrades';
// import DeleteButton from './Deletebutton';
import UpdateDog from './UpdateDog';



class PupProfile extends Component {
  constructor(props) {
    super(props);
    const { dogs, dog, dogGrade } = props;
    this.state = {
      id: dog.id,
      owner: dog.owner,
      name: dog.name,
      breed: dog.breed,
      size: dog.size,
      age: dog.age,
      picture: dog.picture,
      dogs_id: dog.id,
      leash_training: false,
      leave_it: false,
      potty_training: false,
      quiet: false,
      sit: false,
      stay: false,
    }

    // this.handleDeleteClick = this.handleDeleteClick.bind(this);

  }



  // handle change
  handleChange(e) {

  }
  // handle submit

  // handle delete 
  // handleDeleteClick() {
  //   deleteDog()
  //     .then(res => {
  //       this.fetchOneDog();
  //     })
  // }

  render() {
    return (
      <div className="profilePage">
        {/* <UpdateGrades />
        <DeleteButton dogs={this.state.dogs} handleDeleteClick={this.handleDeleteClick} /> */}
        <div className="PPgrid-container">
          {/* <h2>{this.state.name}</h2> */}
          <div className="grid-cell">
            <p>Owner: {this.state.owner}</p><br />
            <p>Breed: {this.state.breed}</p><br />
            <p>Size: {this.state.size}</p><br />
            <p>Age: {this.state.age}</p><br />
            <p>Id: {this.state.dogs_id}</p>
          </div>
          <div className="grid-cell center-cell">
            <p className="profilename">{this.state.name}</p>
            <img src={this.state.picture} alt={'🐾 Sorry, No Image 🐾'} height="300" width="300" className="pupperPic" />
            <div className="PPbuttons">
              <button
                onClick={(ev) => {
                  ev.preventDefault();
                  const dogState = this.state;
                  this.props.editDog(dogState)
                }} >
                Edit Pup Info
              </button>
              <button
                onClick={(ev) => {
                  ev.preventDefault();
                  const dogState = this.state;
                  this.props.newGrade(dogState)
                }} >
                Update Grades
              </button>
              <button onClick={(ev) => {
                ev.preventDefault();
                const dog = this.state;
                this.props.handleDeleteDog(dog)
              }} >
                Delete Profile</button>
            </div>
          </div>
          <div className="grid-cell">
            <p>Leash Training: {this.state.leash_training ? "True" : "False"}</p><br />
            <p>Leave It: {this.state.leave_it ? "True" : "False"}</p><br />
            <p>Potty Training: {this.state.potty_training ? "True" : "False"}</p><br />
            <p>Quiet: {this.state.quiet ? "True" : "False"}</p><br />
            <p>Sit: {this.state.sit ? "True" : "False"}</p><br />
            <p>Stay: {this.state.stay ? "True" : "False"}</p>
          </div>
        </div>

      </div>

      // render pup profile
      // render forms (update)
      // render forms (gradebook)
    );
  }

}


export default PupProfile;
