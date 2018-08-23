import React, { Component } from 'react';

// PupProfile component passing props to state
class PupProfile extends Component {
  constructor(props) {
    super(props);
    const { dog, dogGrade } = props;
    this.state = {
      id: dog.id,
      owner: dog.owner,
      name: dog.name,
      breed: dog.breed,
      size: dog.size,
      age: dog.age,
      picture: dog.picture,
      dogs_id: dog.id,
      leash_training: dogGrade.leash_training,
      leave_it: dogGrade.leave_it,
      potty_training: dogGrade.potty_training,
      quiet: dogGrade.quiet,
      sit: dogGrade.sit,
      stay: dogGrade.stay,
    }
  }
  
  //Render a dog's profile
  //Display dog's information, picture, and dog's grades.
  render() {
    return (
      <div className="profilePage">
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
            <img src={this.state.picture} alt={'Sorry, No Image 🐾'} height="300" width="300" className="pupperPic" />
            <div className="PPbuttons">
              <button
                onClick={(ev) => {
                  ev.preventDefault();
                  const dogState = this.state;
                  this.props.editDog(dogState)
                }} >
                Edit Pup Info
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
           <p>Leash Training: {this.state.leash_training?"✔️":"💩"}</p>
        <p>Leave It: {this.state.leave_it?"✔️":"💩"}</p>
        <p>Potty Training: {this.state.potty_training?"✔️":"💩"}</p>
        <p>Quiet: {this.state.quiet?"✔️":"💩"}</p>
        <p>Sit: {this.state.sit?"✔️":"💩"}</p>
        <p>Stay: {this.state.stay?"✔️":"💩"}</p>
          </div>
        </div>
      </div>
    );
  }

}


export default PupProfile;
