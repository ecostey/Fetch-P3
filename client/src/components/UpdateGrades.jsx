import React, { Component } from 'react';

// Update Grades class component
// passing props to state
class UpdateGrades extends Component {
    constructor(props) {
        super(props);

        const { grades } = props;
        this.state = {
            dogs_id: grades.dogs_id,
            potty_training: grades.potty_training,
            stay: grades.stay,
            leash_training: grades.leash_training,
            sit: grades.sit,
            quiet: grades.quiet,
            leave_it: grades.leave_it,
        };

        // bind handleChange and handleSubmit
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    // handle submit, sending state back to App.jsx
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

    // handle change function
    // sets state to true if target is checked
    // sets state to false if target is not clicked
    handleChange(e) {
        const { name } = e.target;
        if (e.target.checked) {
            this.setState({ [name]: true })
        } else {
            this.setState({ [name]: false })
        }
    }

    // render update grades form with pre-set values
    render() {
        const { potty_training, stay, leash_training, sit, quiet, leave_it } = this.state;
        return (
            <div>
                <h2> Update Grades </h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Potty Training:  </label>
                    <input
                        type="checkbox"
                        name="potty_training"
                        defaultChecked={potty_training}
                        value={potty_training}
                        onClick={this.handleChange} />
                    <br />
                    <br />
                    <label>Stay:    </label>
                    <input
                        type="checkbox"
                        name="stay"
                        defaultChecked={stay}
                        value={stay}
                        onChange={this.handleChange} />
                    <br />
                    <br />
                    <label>Leash Training:  </label>
                    <input
                        type="checkbox"
                        name="leash_training"
                        defaultChecked={leash_training}
                        value={leash_training}
                        onChange={this.handleChange} />
                    <br />
                    <br />
                    <label>Sit: </label>
                    <input
                        type="checkbox"
                        name="sit"
                        defaultChecked={sit}
                        value={sit}
                        onChange={this.handleChange} />
                    <br />
                    <br />
                    <label>Quiet:   </label>
                    <input
                        type="checkbox"
                        name="quiet"
                        defaultChecked={quiet}
                        value={quiet}
                        onChange={this.handleChange} />
                    <br />
                    <br />
                    <label>Leave it:    </label>
                    <input
                        type="checkbox"
                        name="leave_it"
                        defaultChecked={leave_it}
                        value={leave_it}
                        onChange={this.handleChange} />
                    <br />
                    <br />
                    <input type="submit" value="Update Grades" />
                </form>
            </div>
        )
    };
}

export default UpdateGrades;








