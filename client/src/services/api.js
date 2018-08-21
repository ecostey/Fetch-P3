const BASE_URL = 'http://localhost:3001';

export function fetchDogs() {
    return fetch(`${BASE_URL}/dogs`)
        .then(resp => resp.json())
        .catch(e => {
            throw Error(e);
        });
}

export function fetchOneDog(id) {
    return fetch(`${BASE_URL}/${id}`)
        .then(resp => resp.json())
        .catch((e) => {
            throw Error(e);
        });
}

export function updateDoggy(dogs) {
    return fetch(`${BASE_URL}/${dogs.id}`)
    .then(resp => resp.json())
    .catch((e) => {
        throw Error(e);
    });
}

export function editDogGrade(dog) {
    const opts = {
        method: 'PUT',
        body: JSON.stringify(dog),
        headers: {
            'Content-Type': 'application/json'
        },
    }
    return fetch(`${BASE_URL}/grades/${dog.id}`, opts)
        .then(resp => resp.json())
        .catch((e) => {
            throw Error(e);
        });
}

export function saveNewDog(dog) {
    const opts = {
      method: 'POST',
      body: JSON.stringify(dog),
      headers: {
        'Content-Type': 'application/json'
      }
    };
}
