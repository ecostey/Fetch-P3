const BASE_URL = 'http://localhost:3001';

export function fetchDogs() {
    return fetch(`${BASE_URL}/dogs`)
    .then(resp => resp.json())
    .catch((e) => {
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
    return fetch(`${BASE_URL}/${id}`)
    .then(resp => resp.json())
    .catch((e) => {
        throw Error(e);
    });
}