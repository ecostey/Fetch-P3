// set base_url -- heroku url OR localhost
const BASE_URL = 
//process.env.REACT_APP_BASE_URL ||
 'http://localhost:3001';

//fetch all dogs
export function fetchDogs() {
    return fetch(`${BASE_URL}/dogs`)
        .then(resp => {
            let ret = resp.json()
            console.log(ret)
            return ret
        }).catch(e => {
            // throw Error(e);
            console.log("FETCHDOGS: An error occurred")
        });
}

// fetch all grades
export function fetchAllGrades() {
    return fetch(`${BASE_URL}/grades`)
        .then(resp => {
           return resp.json()})
        .catch(e => {
            throw Error(e);
        });
}

// fetch one grade by id
export function fetchOneGrade(id) {
    return fetch(`${BASE_URL}/grades/${id}`)
    .then(resp => resp.json())
    .catch((e) => {
        throw Error(e)
    })
}

// fetch one dog by id
export function fetchOneDog(id) {
    return fetch(`${BASE_URL}/dogs/${id}`)
        .then(resp => resp.json());
}

// update one dog
export function updateDoggy(dogs) {
    const opts = {
        method: 'PUT',
        body: JSON.stringify(dogs),
        headers: {
          'Content-Type': 'application/json'
        }
      };
    return fetch(`${BASE_URL}/dogs/${dogs.id}`, opts)
    .then(resp => resp.json());
}

// update one grade
export function updateGrades(dog) {
    const opts = {
        method: 'PUT',
        body: JSON.stringify(dog),
        headers: {
            'Content-Type': 'application/json'
        },
    }
    return fetch(`${BASE_URL}/grades/${dog.dogs_id}`, opts)
        .then(resp => resp.json());
}

// create one dog
export function saveNewDog(dog) {
    const opts = {
        method: 'POST',
        body: JSON.stringify(dog),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return fetch(`${BASE_URL}/dogs`, opts)
        .then(resp => resp.json())
        .catch(err => {
            throw Error(err);
        });
}

// create new gradebook for dog
export function saveNewGrade(grade) {
    const opts = {
        method: 'POST',
        body: JSON.stringify(grade),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return fetch(`${BASE_URL}/grades`, opts)
        .then(resp => resp.json())
        .catch(err => {
            throw Error(err);
        });
}

// delete one dog
export function deleteDog(dog) {
    const opts = {
        method: 'Delete',
    }
    return fetch(`${BASE_URL}/dogs/${dog.id}`, opts)
    .catch ((e) => {
        throw Error(e);
    });
}
