const BASE_URL = 'http://localhost:3001';

export function fetchDogs() {
    return fetch(`${BASE_URL}/dogs`)
    .then(resp => resp.json())
    .catch((e) => {
        throw Error(e);
    });
}
