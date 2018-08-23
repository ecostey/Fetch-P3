import React, { Component } from 'react';

class CreateGrade extends Component {
    constructor(props) {
        const {selectedDog}= props
        super(props);
        this.state = {
            dogs_id: selectedDog.id,
            leash_training: false,
            leave_it: false,
            potty_training: false,
            quiet: false,
            sit: false,
            stay: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(ev) {
        ev.preventDefault();
        this.props.newGrade(this.state);
    };
    handleChange(e) {
        const { name } = e.target;
        if (e.target.checked) {
        this.setState({[name]: true}) 
        } else {
          this.setState({[name]: false})
        }
      }

    render() {
        return (
            <div>
                <div className="createForm">
                    <h2 className="pageHeader createformtitle">Add a Grade Card to Your Dog:</h2>
                    <form onSubmit={this.handleSubmit} className="form">
                        <label>Leash Training:</label>
                        <input
                            type="checkbox"
                            name="leash_training"
                            value={this.state.leash_training}
                            onChange={this.handleChange} />
                        <br />
                        <br />
                        <label>Leave It:</label>
                        <input
                            type="checkbox"
                            name="leave_it"
                            value={this.state.leave_it}
                            onChange={this.handleChange} />
                        <br />
                        <br />
                        <label>Potty Training:</label>
                        <input
                            type="checkbox"
                            name="potty_training"
                            value={this.state.potty_training}
                            onChange={this.handleChange} />
                        <br />
                        <br />
                        <label>Quiet:</label>
                        <input 
                            type="checkbox"
                            name="quiet"
                            value={this.state.quiet}
                            onChange={this.handleChange} />
                        <br />
                        <br />
                        <label>Sit:</label>
                        <input 
                            type="checkbox"
                            name="sit"
                            value={this.state.sit}
                            onChange={this.handleChange} />
                        <br />
                        <br />
                        <label>Stay:</label>
                        <input
                            type="checkbox"
                            name="stay"
                            value={this.state.stay}
                            onChange={this.handleChange} />
                        <br />
                        <br />
                        <input
                            type="submit"
                            value="Create Grade Card" 
                            className="submitGrade"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateGrade;