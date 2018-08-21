import React from 'react';

function DogsIndex(props) {
    return (
        <div>
        <h1>Fetch</h1>
        <span>
            <button onClick="">Add New Pup</button>
            <button onClick="">Gradebook</button>
        </span>
        <div>
            {
                props.dogs.map(dogs => (
                    <div key={dogs.id}>
                    <img src={dogs.url} alt={dogs.name}/>
                    <p>{dogs.name}</p>
                    <p>{dogs.breed}, {dogs.age}yrs</p>
                    </div>
                ))
            }
        </div>
        </div>
    )
}

export default DogsIndex;