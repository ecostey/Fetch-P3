import React from 'react';

function DogsIndex(props) {
    return (
        <div className="AllDogsPg">
            <h2 className="pageHeader">Class Roster</h2>
            <div className="grid-container">
                {
                    props.dogs.map(dog => (
                        <div key={dog.id} className="grid-item">
                            <img src={dog.picture} alt="🐾 Sorry, no image 🐾" className="pupperPics" />
                            <p className="dogName">{dog.name}</p>
                            <p className="desc">{dog.breed}, {dog.age}yrs</p>
                            <button
                                onClick={(ev) => {
                                    ev.preventDefault();
                                    const grades = props.grades.filter(grades => {
                                        return grades.dogs_id === dog.id
                                    })
                                    props.selectDog(dog, grades)
                                }
                                } >
                                View Dog Detail
                            </button>
                            <button
                                onClick={(ev) => {
                                    ev.preventDefault();
                                    props.newGrade(dog)
                                } } >
                                Add a Grade Card
                            </button>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default DogsIndex;