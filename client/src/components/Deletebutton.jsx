import React from 'react';

function DeleteButton(props) {
    return (
        props.dogs(dog => {
            return (
                <div key={dog.id}>
                    <p>{dog.id}</p>
                    <button onClick={() => props.handleDeleteClick(dog.id)}>X</button>
                </div>
            )
        })
    );
}


export default DeleteButton;