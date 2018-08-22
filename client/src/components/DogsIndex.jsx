import React from 'react';

function DogsIndex(props) {
    return (
        <div>
        <h1>Fetch</h1>
        <div>
            {
                props.dogs.map(dog => (
                    <div key={dog.id}>
                    <img src={dog.picture} alt={dog.name} height="100" width="100"/>
                    <p>{dog.name}</p>
                    <p>{dog.breed}, {dog.age}yrs</p>
                    <button 
                        onClick={(ev) => {
                            ev.preventDefault();
                            props.selectDog(dog)}} >
                        View Dog Detail
                    </button>
                    <br />
                    </div>
                ))
            }
        </div>
        </div>
    )
}

export default DogsIndex;