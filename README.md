# Fetch
### A Gradebook app for Pupper/Doggo Trainers!

## Project Summary / Idea
Fetch is an app for Pupper trainers to list and grade dogs.

## User Stories
1) As a user I want to add a dog to the list
2) As a user I want to change the grades for a dog
3) As a user I want to delete a dog after it graduates
4) As a user I want to see a dog’s progress
5) As a user I want to keep track of all the dogs on my watch

## Wireframes (see last page)
Landing page- Title, list of dogs, add dog (create) button, & see gradebook button.
<img width="562" alt="screen shot 2018-08-20 at 9 25 15 am" src="https://user-images.githubusercontent.com/34017121/44343156-356b3e00-a45b-11e8-9895-8ebe60109b91.png">

Gradebook page - Displays list of ALL dog’s ‘grades’

<img width="449" alt="screen shot 2018-08-20 at 9 26 16 am" src="https://user-images.githubusercontent.com/34017121/44343168-3dc37900-a45b-11e8-9bdf-6a330dd801f7.png">

Dog Profile page - (find one) list dog details and grades &
Option to update/change dog’s info & grades
Button to delete dog profile, button to go back to landing page
Update Form Page - make updates/corrections to dog’s info, 

<img width="434" alt="screen shot 2018-08-20 at 9 25 58 am" src="https://user-images.githubusercontent.com/34017121/44343164-3a2ff200-a45b-11e8-99cb-3935c5d8dd7e.png">

Button to delete dog profile, button to go back to landing page

<img width="417" alt="screen shot 2018-08-20 at 9 26 06 am" src="https://user-images.githubusercontent.com/34017121/44343167-3c924c00-a45b-11e8-88aa-3a892ec4478a.png">

Update Form Page - make updates/corrections to dog’s info, 
Create Dog page- blank form
<img width="409" alt="screen shot 2018-08-20 at 9 25 31 am" src="https://user-images.githubusercontent.com/34017121/44343160-37cd9800-a45b-11e8-8894-c0f1dfe41437.png">

## ERD
This database has two tables - a Dog table and a Grades table.

<img width="633" alt="screen shot 2018-08-20 at 9 23 05 am" src="https://user-images.githubusercontent.com/34017121/44343032-c988d580-a45a-11e8-97e9-f43b57f18cca.png">

## RESOURCES
- Referenced Drake Talley(Full-Crud, Books and Authors, Boxes Demo(https://git.generalassemb.ly/wdi-nyc-lambda/boxes-demo) and John Master's (Tweedr) lessons

- Logo from captain planet

- Special thanks to Mimi for guidance, logistics, and her presence!!! - <3 The Planeteers

## Code Snippet
Part of the conditional rendering that switches the current view depending on the case.
```JavaScript
 determineWhichToRender() {
    const { currentView } = this.state;
    const { dogs, selectedDog, grades, dogGrade, fetchOne } = this.state;

    switch (currentView) {
      // All dogs view
      case 'All Dogs':
        return <DogsIndex
          grades={grades}
          dogs={dogs}
          oneDog={fetchOne}
          newDog={this.createDog}
          selectDog={this.selectDog}
        />
      // One dog's profile page with all data
      case 'Pup Profile':
        return <PupProfile
          editDog={this.editDog}
          handleDeleteDog={this.handleDeleteDog}
          dog={selectedDog}
          dogGrade={dogGrade}
        />;
      // view to create a dog (form)
      case 'Create Pup':
        return <CreateForm
          newDog={this.createDog}
        />
 ```
 
 This maps through all of our dogs as well as the grades and returns a single dog with all of it's profile information.
 ```JavaScript
 {
                        props.dogs.map(dog => (
                            <div key={dog.id} className="grid-item"
                                onClick={(ev) => {
                                    ev.preventDefault();
                                    const grades = props.grades.filter(grades => {
                                        return grades.dogs_id === dog.id
                                    })
                                    props.selectDog(dog, grades)
                                }}>
 ```
## Dependencies
- react
- body-parser
- cors
- express
- morgan
- nodemon
- pg promise
- es-lint
- heroku
- surge

## Post MVP
1. Would like to add a 3rd table for comments
2. Delete popup
3. Diagonal pawprints

## Contributors:
1. Al (Steelos35)
2. Bo (BoLeeNY)
3. Carol (carolmwang)
4. Liz (ecostey)

Check it out here! --> http://light-animal.surge.sh/
