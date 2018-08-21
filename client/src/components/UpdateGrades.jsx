import React, { Component } from 'react';

class UpdateGrades extends Component {
    constructor(props) {
        super(props);

        this.state = {
            potty_training: grades.potty_training,
            stay:           grades.stay,
            leash_training: grades.leash_training,
            sit:            grades.sit,
            quiet:          grades.quiet,
            leave_it:       grades.leave_it,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        const data = {
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
        e.preventDefault();
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
                    <input
                        name="Potty Training"
                        value={potty_training}
                        onChange={this.handleChange} />

                    <input
                        name="Stay"
                        value={stay}
                        onChange={this.handleChange} />

                    <input
                        name="Leash Training"
                        value={leash_training}
                        onChange={this.handleChange} />

                    <input
                        name="Sit"
                        value={sit}
                        onChange={this.handleChange} />

                    <input
                        name="Quiet"
                        value={quiet}
                        onChange={this.handleChange} />

                    <input
                        name="Leave It"
                        value={leave_it}
                        onChange={this.handleChange} />

                    )}
                    
                    <input type="submit" value="Update Grades" />
                    </form>
                    </div>
        )};
}

export default UpdateGrades;








