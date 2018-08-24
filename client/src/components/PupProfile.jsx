import React, { Component } from 'react';

// PupProfile component passing props to state
class PupProfile extends Component {
  constructor(props) {
    super(props);
    const { dog, dogGrade } = props;
    this.state = {
      id: dog.id || dogGrade.dogs_id,
      owner: dog.owner || dogGrade.owner,
      name: dog.name || dogGrade.name,
      breed: dog.breed || dogGrade.breed,
      size: dog.size || dogGrade.size,
      age: dog.age || dogGrade.age,
      picture: dog.picture || dogGrade.picture,
      dogs_id: dog.id || dogGrade.dogs_id,
      leash_training: dogGrade.leash_training || dog.leash_training,
      leave_it: dogGrade.leave_it || dog.leave_it,
      potty_training: dogGrade.potty_training || dog.potty_training,
      quiet: dogGrade.quiet || dog.quiet,
      sit: dogGrade.sit || dog.sit,
      stay: dogGrade.stay || dog.stay,
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
            <p>Leash Training: {this.state.leash_training ? "✔️" : "💩"}</p>
            <br />
            <p>Leave It: {this.state.leave_it ? "✔️" : "💩"}</p>
            <br />
            <p>Potty Training: {this.state.potty_training ? "✔️" : "💩"}</p>
            <br />
            <p>Quiet: {this.state.quiet ? "✔️" : "💩"}</p>
            <br />
            <p>Sit: {this.state.sit ? "✔️" : "💩"}</p>
            <br />
            <p>Stay: {this.state.stay ? "✔️" : "💩"}</p>
          </div>
        </div>
      </div>
    );
  }

}


export default PupProfile;
