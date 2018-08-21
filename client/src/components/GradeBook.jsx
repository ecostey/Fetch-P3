import React from 'react';

function gradeList(props) {
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
                        props.grades.map(grades => (
                        <div key={gradebook.dogs_id}>
                            <tr>
                                <td>{dogs.name}</td>
                                <td>{gradebook.potty_training}</td>
                                <td>{gradebook.leash_training}</td>
                                <td>{gradebook.stay}</td>
                                <td>{gradebook.sit}</td>
                                <td>{gradebook.quiet}</td>
                                <td>{gradebook.leave_it}</td>
                            </tr>
                            </div> 
                        ))
                    </table>
                }
            </div>
        </div>
    )
}


export default Gradebook;