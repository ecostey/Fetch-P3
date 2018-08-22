import React from 'react';

function DogsIndex(props) {
    return (
        <div className="AllDogsPg">
        <h2 className="pageHeader">Roster</h2>
        <div className="grid-container">
            {
                props.dogs.map(dog => (
                    <div key={dog.id} className="grid-item">
                    <br />
                    <img src={dog.picture} alt={dog.name} height="100" width="100"/>
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