import React, { Component } from 'react';

class UpdateGrades extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dogs_id: '',
            potty_training: '',
            stay: '',
            leash_training: '',
            sit: '',
            quiet: '',
            leave_it: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        const data = {
            dogs_id: this.state.dogs_id,
            potty_training: this.state.potty_training,
            stay: this.state.stay,
            leash_training: this.state.leash_training,
            sit: this.state.sit,
            quiet: this.state.quiet,
            leave_it: this.state.leave_it,
        }
        this.props.onSubmit(data);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        const { potty_training, stay, leash_training, sit, quiet, leave_it } = this.state;

        return (
            <div>
                <h2> Update Grades </h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Potty Training:</label>
                    <input
                        type="checkbox"
                        name="Potty Training"
                        value={potty_training}
                        onChange={this.handleChange} />
                    <input
                        type="checkbox"
                        name="Potty Training"
                        value={potty_training}
                        onChange={this.handleChange} />
                    <br />
                    <label>Stay:</label>
                    <input
                        type="checkbox"
                        name="Stay"
                        value={stay}
                        onChange={this.handleChange} />
                    <input
                        type="checkbox"
                        name="Stay"
                        value={!stay}
                        onChange={this.handleChange} />
                    <br />
                    <label>Leash Training:</label>
                    <input
                        type="checkbox"
                        name="Leash Training"
                        value={leash_training}
                        onChange={this.handleChange} />
                    <input
                        type="checkbox"
                        name="Leash Training"
                        value={!leash_training}
                        onChange={this.handleChange} />
                    <br />
                    <label>Sit:</label>
                    <input
                        type="checkbox"
                        name="Sit"
                        value={sit}
                        onChange={this.handleChange} />
                    <input
                        type="checkbox"
                        name="Sit"
                        value={!sit}
                        onChange={this.handleChange} />
                    <br />
                    <label>Quiet:</label>
                    <input
                        type="checkbox"
                        name="Quiet"
                        value={quiet}
                        onChange={this.handleChange} />
                    <input
                        type="checkbox"
                        name="Quiet"
                        value={!quiet}
                        onChange={this.handleChange} />
                    <br />
                    <label>Leave it:</label>
                    <input
                        type="checkbox"
                        name="Leave It"
                        value={leave_it}
                        onChange={this.handleChange} />
                   <input
                        type="checkbox"
                        name="Leave It"
                        value={!leave_it}
                        onChange={this.handleChange} />
                    <br />
                    <input type="submit" value="Update Grades" />
                </form>
            </div>
        )
    };
}

export default UpdateGrades;








