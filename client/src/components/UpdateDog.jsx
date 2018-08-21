import React, { Component } from 'react';

class UpdateDog extends Component {
    constructor(props) {
        super(props);

        const { dogs, dog, selectedDog} = props;
        this.state = {
            owner:   selectedDog.owner,
            name:    selectedDog.names,
            breed:   selectedDog.breed,
            size:    selectedDog.size,
            age:     selectedDog.age,
            picture: selectedDog.picture,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // create a handle submit for the form

    handleSubmit(e) {
        e.preventDefault();
        const data = {
            owner:   this.state.owner,
            name:    this.state.names,
            breed:   this.state.breed,
            size:    this.state.breed,
            age:     this.state.age,
            picture: this.state.picture,
        }
        this.props.onSubmit(data);
    }

    handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {

        return (
            <div>
                <h2> Update Dog </h2>
                <form onSubmit={this.handleSubmit}>
                <label>Owner</label>
                    <input
                        name="owner"
                        value={this.state.owner}
                        onChange={this.handleChange} />
                    <label>Name</label>
                    <input
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange} />
                    <label>Breed</label>
                    <input
                        name="breed"
                        value={this.state.breed}
                        onChange={this.handleChange} />
                    <label>Size</label>
                    <input
                        name="size"
                        value={this.state.size}
                        onChange={this.handleChange} />
                    <label>Age</label>
                    <input
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChange} />
                    <label>Picture</label>
                    <input
                        name="picture"
                        value={this.state.picture}
                        onChange={this.handleChange} />

                   <input type="submit" value="Update Profile" />
                   </form>
                   </div>
        )};
}

export default UpdateDog;
