import React, { Component } from 'react';
import EditPupGrade from './EditPupGrades';

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
  }

  // handle change
  handleChange(e) {

  }
  // handle submit

  render() {
    return (
      <div>
        <h2>{this.props.dog.name}</h2>
        <EditPupGrade />
      </div>
    )
    // render pup profile
    // render forms (update)
    // render forms (gradebook)
  }

}

export default PupProfile;
