import React from 'react';

//Shows all dogs' grades (pass or fail)
//Displays grades in a table
function GradeBook(props) {
    return (
        <div>
            <p className="gradebooktitle">Gradebook</p>
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
                                    <td className="name">{each.name}</td>
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
            <div className="pawsTile">
           <img src="https://i.imgur.com/kz1PDZx.png?3" alt={'Sorry, No Image 🐾'} />
           <img src="https://i.imgur.com/LSfoaeG.png?2" alt={'Sorry, No Image 🐾'} />
           </div>
        </div>
    )
}

export default GradeBook;

