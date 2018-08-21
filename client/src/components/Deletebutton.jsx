import React from 'react';

function DeleteButton(props) {
            return (
                <div key={props.dog.id}>
                    <p>{props.dog.id}</p>
                    <button onClick={() => props.handleDeleteClick(props.dog.id)}>X</button>
                </div>
            )
}


export default DeleteButton;