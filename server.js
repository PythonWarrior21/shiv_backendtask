const express = require('express');
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
    
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});