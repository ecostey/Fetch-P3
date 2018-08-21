import React from 'react';

function DogsIndex(props) {
    return (
        <div>
        <h1>Fetch</h1>
        <span>
            <button onclick={(e) => {
                e.preventDefault();
                props.createDogView();
            }}>Add New Pup</button>
            <button onclick="">Gradebook</button>
        </span>
        <div>
            {
                props.dogs.map(dog => (
                    <div key={dog.id}>
                    <img src={dog.url} alt={dog.name}/>
                    <p>{dog.name}</p>
                    <p>{dog.breed}, {dog.age}yrs</p>
                    <button 
                        onClick={(ev) => {
                            ev.preventDefault();
                            props.selectDog(dog)}} >
                        View Dog Detail
                    </button>
                    </div>
                ))
            }
        </div>
        </div>
    )
}

export default DogsIndex;