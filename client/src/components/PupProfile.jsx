import React, { Component } from 'react';
// maybe needs a change
import { fetchOneGrade, updateDoggy, deleteDog, updateGrades } from '../services/api';
import UpdateGrades from './UpdateGrades';
// import DeleteButton from './Deletebutton';
import UpdateDog from './UpdateDog';



class PupProfile extends Component {
  constructor(props) {
    super(props);
    const { dogs, dog } = props;
    this.state = {
      id: dog.id,
      owner: dog.owner,
      name: dog.name,
      breed: dog.breed,
      size: dog.size,
      age: dog.age,
      picture: dog.picture,
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
    return(
      <div>
<<<<<<< HEAD
        <h2>{this.props.dog.name}</h2>
        {/* {/* <UpdateGrades /> */}
     
=======
        <h2>{this.state.name}</h2>
        {/* <UpdateGrades />
        <DeleteButton dogs={this.state.dogs} handleDeleteClick={this.handleDeleteClick} /> */}
        <img src={this.state.picture} alt={'🐾 Sorry, No Image 🐾'} height="200" width="200" className="pupperPic"/>
>>>>>>> 70582e31a290971e5a42e644a6736967378e3fa4
        <h2>{this.state.name}</h2>
        <p>Owner: {this.state.owner}</p>
        <p>Breed: {this.state.breed}</p>
        <p>Size: {this.state.size}</p>
        <p>Age: {this.state.age}</p>
        <button 
            onClick={(ev) => {
              ev.preventDefault();
              const dogState = this.state;
              this.props.editDog(dogState)}} >
              Edit Dog
            </button>

            
        <button onClick={(ev) => {
          ev.preventDefault();
          const dog = this.state;
          this.props.handleDeleteDog(dog)}} >
          Delete</button>
      </div>
     
    // render pup profile
    // render forms (update)
    // render forms (gradebook)
    );
  }

}


export default PupProfile;
