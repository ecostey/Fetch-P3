import React, { Component } from 'react';

// class component for the create form
// empty state to set state on change
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

    // handle submit function
    // prevent default-reload
    // calling props newDog function and pass state

    handleSubmit(ev) {
        ev.preventDefault();
        this.props.newDog(this.state)
    };

    // handle change function
    // on event target {name and value}

    handleChange(ev) {
        ev.preventDefault();
        const { name, value } = ev.target;
        this.setState({
            [name]: value,
        });
    };

    // renders a create form
    render() {
        return (
            <div>
                <button className="submitNewPup"><a href="">Back</a></button>
                <div className="createForm">
                    <h2 className="pageHeader createformtitle">Add a Dog to Your Class:</h2>
                    <form onSubmit={this.handleSubmit} className="form">
                        <label>Owner's Name:</label>
                        <input
                            type="text"
                            name="owner"
                            value={this.state.owner}
                            onChange={this.handleChange}
                            required />
                        <br />
                        <br />
                        <label>Dog's Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            required />
                        <br />
                        <br />
                        <label>Breed:</label>
                        <input
                            type="text"
                            name="breed"
                            value={this.state.breed}
                            onChange={this.handleChange}
                            required />
                        <br />
                        <br />
                        <label>Size:</label>
                        <select
                            name="size"
                            value={this.state.size}
                            onChange={this.handleChange}
                            required >
                            <option value="" disabled>Choose a size</option>
                            <option value="small">small</option>
                            <option value="medium">medium</option>
                            <option value="large">large</option>
                        </select>
                        <br />
                        <br />
                        <label>Age:</label>
                        <select
                            name="age"
                            value={this.state.age}
                            onChange={this.handleChange}
                            required >
                            <option value="" disabled>Choose the age:</option>
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
                        <label>Add a Picture url:</label>
                        <input
                            type="text"
                            name="picture"
                            value={this.state.picture}
                            onChange={this.handleChange} />
                        <br />
                        <br />
                        <input
                            type="submit"
                            value="Create Pup"
                            className="submitNewPup" />
                    </form>
                </div>
            </div>
        )
    }
}


export default CreateForm;