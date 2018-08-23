import React, { Component } from 'react';

// UpdateDog Component
// pass props to state for one dog
class UpdateDog extends Component {
    constructor(props) {
        super(props);

        const { selectedDog } = props;
        this.state = {
            id: selectedDog.id,
            owner: selectedDog.owner,
            name: selectedDog.name,
            breed: selectedDog.breed,
            size: selectedDog.size,
            age: selectedDog.age,
            picture: selectedDog.picture,
        };

        // bind handleChange and handleSubmit
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handle submit passes data from state back to App.jsx
    handleSubmit(e) {
        e.preventDefault();
        const data = {
            id: this.state.id,
            owner: this.state.owner,
            name: this.state.name,
            breed: this.state.breed,
            size: this.state.size,
            age: this.state.age,
            picture: this.state.picture,
        }
        this.props.onSubmit(data);
    }

    // handle change and set state
    handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    // render the update dog profile page with pre-set values
    render() {
        return (
            <div>
                <h2> Update Profile </h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Owner:  </label>
                    <input
                        name="owner"
                        value={this.state.owner}
                        onChange={this.handleChange} />
                    <br />
                    <br />
                    <label>Name:  </label>
                    <input
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange} />
                    <br />
                    <br />
                    <label>Breed:  </label>
                    <input
                        name="breed"
                        value={this.state.breed}
                        onChange={this.handleChange} />
                    <br />
                    <br />
                    <label>Size:  </label>
                    <select
                        name="size"
                        value={this.state.size}
                        onChange={this.handleChange} >
                        <option value="small">small</option>
                        <option value="medium">medium</option>
                        <option value="large">large</option>
                    </select>
                    <br />
                    <br />
                    <label>Age:  </label>
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
                    <br />
                    <br />
                    <label>Picture:  </label>
                    <input
                        name="picture"
                        value={this.state.picture}
                        onChange={this.handleChange} />
                    <br />
                    <br />
                    <input type="submit" value="Update Profile" />
                </form>
            </div>
        )
    };
}

export default UpdateDog;
