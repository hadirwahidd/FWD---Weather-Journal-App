// Empty JS object to act as endpoint for all routes
projectData = {};

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */

const bodyParser = require('body-parser')
// Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initializing the main project folder
app.use(express.static('website'));

// creating a local server
const port = process.env.PORT || 8000;
const host = "localhost";

// check server
app.listen(port, ()=> {
    console.log(`Server is running on ${host}: ${port}`);
});

// Post Route to add incoming data to projectData object
function addProjectData (req,_res) {
    const reqBody = req.body;
    let incomingData = {
        temperature: reqBody.temperature,
        date: reqBody.date,
        userResponse: reqBody.userResponse
    }
    projectData['temperature']= incomingData.temperature;
    projectData['date']= incomingData.date;
    projectData['userResponse']= incomingData.userResponse;
    console.log(projectData);
};
app.post('/add', addProjectData);

// Get route to return project data
function sendProjectData(_request,response) {
    response.send(projectData);
    console.log(projectData);
};
app.get('/all', sendProjectData);
