import React, { Component } from 'react';

class UpdateDog extends Component {
    constructor(props) {
        super(props);

        const { dogs, dog } = props;
        this.state = {
            owner:   this.props.owner,
            name:    this.props.names,
            breed:   this.props.breed,
            size:    this.props.size,
            age:     this.props.age,
            picture: this.props.picture,
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
                    <input
                        name="owner"
                        value={this.state.owner}
                        onChange={this.handleChange} />

                    <input
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange} />

                    <input
                        name="breed"
                        value={this.state.breed}
                        onChange={this.handleChange} />

                    <input
                        name="size"
                        value={this.state.size}
                        onChange={this.handleChange} />

                    <input
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChange} />

                    <input
                        name="picture"
                        value={this.state.picture}
                        onChange={this.handleChange} />

                    )}
                    
                   <input type="submit" value="Pup Profile" />
                   </form>
                   </div>
        )};
}

export default UpdateDog;
