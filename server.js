const express = require('express');
const { json } = require('express/lib/response');
const app = express();
const port = 3000;

app.use(express.json());

const users = [
    {name: 'Alice', age: 25, id: 1},
    {name: 'Bob', age: 30, id: 2},
    {name: 'Charlie', age: 35, id: 3},
    {name: 'David', age: 40, id: 4},
    {name: 'Eve', age: 45, id: 5}
]

const tasks = [];

//TODO
app.post('/tasks', (req, res) => {
// userID forced to be integer field

    // Data is coming as a struct with the three fields aformentioned
    // title description, userid
    // struct data data; not actual code but just assuming its called
    // data
    // ive made a variable to validate the userid exists

    bool matches;
    // users.length - not in c but assuming it exists as well


    // go through all user ids to check if it matches any 
    // existing user id
    for (int i = 0; i < users.length; i++){
        if (data.userId == user[i].id){
            matches = true;
            break;
        }

    } 
    // check if title exists, 
    if (data.title == "\b") {
        return 400
        // chec if user id exists
    } else if (data.userId == "\b"){
        return 400
        // check if matches
    } else if (matches = false){
        return 404  
    }

    // tasks array of structs, each of the struct 
    //woudl have the 4 aformentioned fields
    // length of current tasks = tlength;

    //add all fo these into the tasks array

    tasks[tlength].title = data.title;
    tasks[tlength].description = description;
    tasks[tlength].userId = userId;
    // assuming no deletes a unique 
    // id would always be length + 1

    tasks[tlength].taskNum = tlength + 1;

});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});