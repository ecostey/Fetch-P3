import React, { Component } from 'react';

class UpdateBook extends Component {
    constructor(props) {
        super(props);

        const { owner, name, breed, size, age, picture } = props;
        this.state = {
            owner: dog.owner,
            name: dog.names,
            breed: dog.breed,
            size: dog.breed,
            age: dog.age,
            picture: dog.picture,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bing(this);
    }

    // create a handle submit for the form

    handleSubmit(e) {
        e.preventDefault();
        const data = {
            owner: this.state.owner,
            name: this.state.names,
            breed: this.state.breed,
            size: this.state.breed,
            age: this.state.age,
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
        const { owner, name, breed, size, age, picture } = this.state;

        return (
            <div>
                <h2> Update Dog </h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name="Owner"
                        value={owner}
                        onChange={this.handleChange} />

                    <input
                        name="Name"
                        value={name}
                        onChange={this.handleChange} />

                    <input
                        name="Breed"
                        value={breed}
                        onChange={this.handleChange} />

                    <input
                        name="Size"
                        value={size}
                        onChange={this.handleChange} />

                    <input
                        name="Age"
                        value={age}
                        onChange={this.handleChange} />

                    <input
                        name="Picture"
                        value={picture}
                        onChange={this.handleChange} />

                    )}
                    
                    <input type="submit" value="Update Profile" />
                    </form>
                    </div>
        )};
}

export default UpdateBook;