import React, { Component } from 'react';
// maybe needs a change
import { fetchOneDog, updateDoggy, deleteDog } from '../services/api';
import EditPupGrade from './EditPupGrades';
import DeleteButton from './Deletebutton';



class PupProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: '',
      name: '',
      breed: '',
      size: '',
      age: '',
      picture: '',
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
        <EditPupGrade />
        <DeleteButton dogs={this.state.dogs} handleDeleteClick={this.handleDeleteClick} />
      </div>
     
    // render pup profile
    // render forms (update)
    // render forms (gradebook)
    );
  }

}


export default PupProfile;
