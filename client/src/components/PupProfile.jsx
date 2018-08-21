import React, { Component } from 'react';
// maybe needs a change
import { fetchOneDog, updateDoggy } from '../services/api';
import UpdateDog from './UpdateDog';


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
        <h2>{props.dogs.name}</h2>
        <UpdateDog />
      </div>
    )
    // render pup profile
    // render forms (update)
    // render forms (gradebook)
  }

}

export default PupProfile;
