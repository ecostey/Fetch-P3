import React from 'react';

function GradeBook(props) {
        return (
            <div>
                <h1>Fetch</h1>
                <h2>Gradebook</h2>
                <div>
                    {
                        <table style="width:100%">
                            <tr>
                                <th>Name</th>
                                <th>Potty Training</th>
                                <th>Leash Training</th>
                                <th>Stay</th>
                                <th>Sit</th>
                                <th>Quiet</th>
                                <th>Leave It</th>
                            </tr>
                            props.grades.map(grades => {
                            <div key={props.gradebook.dogs_id}>
                                <tr>
                                    <td>{props.dogs.name}</td>
                                    <td>{props.gradebook.stay}</td>
                                    <td>{props.gradebook.potty_training}</td>
                                    <td>{props.gradebook.leash_training}</td>
                                    <td>{props.gradebook.sit}</td>
                                    <td>{props.gradebook.quiet}</td>
                                    <td>{props.gradebook.leave_it}</td>
                                </tr>
                            </div>
                            })
                    </table>
                    }
                </div>
            </div>
        )
}

export default GradeBook;

