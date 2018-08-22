import React from 'react';

function DogsIndex(props) {
    return (
        <div>
        <h1>Fetch</h1>
        <div>
            {
                props.dogs.map(dog => (
                    <div key={dog.id}>
                    <img src={dog.picture} alt="🐾 sorry no image 🐾" height="100" width="100"/>
                    <p>{dog.name}</p>
                    <p>{dog.breed}, {dog.age}yrs</p>
                    <button 
                        onClick={(ev) => {
                            ev.preventDefault();
                            const grades = props.grades.filter(grades => {
                                return grades.dogs_id === dog.id
                            })
                            props.selectDog(dog, grades)}
                            } >
                        View Dog Detail
                    </button>
                    <br />
                    </div>
            ))}
        </div>
        </div>
    )
}

export default DogsIndex;