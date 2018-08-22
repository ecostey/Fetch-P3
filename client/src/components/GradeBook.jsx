import React from 'react';

function GradeBook(props) {
    return (
        <div>
            <h2 className="pageHeader">Gradebook</h2>
            <div>
                <table style={{ width: '75%', textAlign: 'center' }}>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Potty Training</th>
                            <th>Leash Training</th>
                            <th>Stay</th>
                            <th>Sit</th>
                            <th>Quiet</th>
                            <th>Leave It</th>
                        </tr>
                        {props.grades.map(each => {
                            return (
                                <tr key={each.dogs_id}>
                                    <td>{each.name}</td>
                                    <td>{each.potty_training? '✔️' : '❌'}</td>
                                    <td>{each.leash_training? '✔️' : '❌'}</td>
                                    <td>{each.stay? '✔️' : '❌'}</td>
                                    <td>{each.sit? '✔️' : '❌'}</td>
                                    <td>{each.quiet? '✔️' : '❌'}</td>
                                    <td>{each.leave_it? '✔️' : '❌'}</td>
                                </tr>
                        )})}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default GradeBook;

