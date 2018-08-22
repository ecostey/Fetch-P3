import React, { Component } from 'react';

class CreateForm extends Component {
    constructor(props) {
        super(props); 
            this.state = {
                owner: '',
                name: '',
                breed: '',
                size: '',
                age: '',
                picture: ''
            };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

handleSubmit(ev) {
    ev.preventDefault();
    this.props.newDog(this.state)
    // .then(createDog(this.state))
};
handleChange(ev) {
    ev.preventDefault();
    const { name, value } = ev.target;
    this.setState({
        [name]: value,
    });
};


render() {
    return (
        <div className="createForm">
            <button><a href="">Back</a></button>
            <h2>Add a Dog to Your Class:</h2>
            <form onSubmit={this.handleSubmit} >
                <h4>Owner's Name:</h4>
                <input
                    type="text"
                    name="owner"
                    value={this.state.owner}
                    onChange={this.handleChange} />
                <h4>Dog's Name:</h4>
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange} />
                <h4>Breed:</h4>
                <input
                    type="text"
                    name="breed"
                    value={this.state.breed}
                    onChange={this.handleChange} />
                <h4>Size:</h4>
                <select
                    name="size"
                    value={this.state.size}
                    onChange={this.handleChange} >
                    <option value="small">small</option>
                    <option value="medium">medium</option>
                    <option value="large">large</option>
                </select>
                <h4>Age:</h4>
                <select
                    name="age"
                    value={this.state.age}
                    onChange={this.handleChange} >
                    <option value="1">1yr</option>
                    <option value="2">2yrs</option>
                    <option value="3">3yrs</option>
                    <option value="4">4yrs</option>
                    <option value="5">5yrs</option>
                    <option value="6">6yrs</option>
                    <option value="7">7yrs</option>
                    <option value="8">8yrs</option>
                    <option value="9">9yrs</option>
                </select>
                <h4>Add a Picture url:</h4>
                <input
                    type="text"
                    name="picture"
                    value={this.state.picture}
                    onChange={this.handleChange} />
                <input
                    type="submit"
                    value="Create Pup" />
            </form>
        </div>
    )
}
}


export default CreateForm;