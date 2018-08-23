import React from 'react';

//Shows all dogs' grades (pass or fail)
//Displays grades in a table
function GradeBook(props) {
    return (
        <div>
            <h2 className="gradebooktitle">Gradebook</h2>
            <div>
                <table className="gradeTable">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Potty<br />Training</th>
                            <th>Leash<br />Training</th>
                            <th>Stay</th>
                            <th>Sit</th>
                            <th>Quiet</th>
                            <th>Leave It</th>
                        </tr>
                        {props.grades.map(each => {
                            return (
                                <tr key={each.dogs_id}>
                                    <td className="name"
                                    onClick={(ev) => {
                                        console.log(each)
                                        ev.preventDefault();
                                        const dogs = props.dogs.filter(dogs => {
                                            return dogs.id === each.dogs_id
                                        })
                                        props.selectDog(each, dogs)
                                        console.log(dogs)
                                    }}>>{each.name}</td>
                                    <td>{each.potty_training ? '✔️' : '-'}</td>
                                    <td>{each.leash_training ? '✔️' : '-'}</td>
                                    <td>{each.stay ? '✔️' : '-'}</td>
                                    <td>{each.sit ? '✔️' : '-'}</td>
                                    <td>{each.quiet ? '✔️' : '-'}</td>
                                    <td>{each.leave_it ? '✔️' : '-'}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default GradeBook;

