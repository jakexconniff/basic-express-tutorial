var express = require('express');
var app = express();
var path = require('path');
var cors = require('cors');
// Require is a fancy way to import files in Node.js
// Be careful with JSON, it's pretty easy to get the hang of but it is unforgiving in the syntax. Must be " instead of '
// And you have to respect the comma rules super strictly, as well as the key:value pairing.
// The value of a key can be another key:value pair, or maybe an array, which is one of the things that makes JSON look scarier than it is.
var data = require('./mockData.json');

// This guy right here is BFF / bae. Cors package allows you to make requests to yourself (your initial problem)
app.use(cors());

// allows Express to access the files on this directory as if they were hosted.
app.use(express.static('./'))
// viewed at http://localhost:8080
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + '/index.html'));
});

// This is a mock example of an API route that you would make that allows you to send data.

app.get('/data', (request, response) => {
    // This is just to simulate some randomness / different data being passed to the frontend.
    var randomNum = Math.ceil(Math.random() * 2);
    if (randomNum === 1) {
        // Data is a variable I declared at the top which takes all of the stuff in the mockData folder.
        var personIWant = data.tonyMontana;
    } else {
        var personIWant = data.billCosby;
    }
    return response.json(personIWant);
    // Basically what's going on here is we have an API route that allows other people to ping <OUR IP>/data and make a request for some data.
    // We are taking in that request (and any data they put inside of their request is available in the request parameter) and we use the second parameter
    // response to respond to that request with whatever we want.

    // See frontend.js for an example of how to MAKE an HTTP request. This app.get etc etc is an example of how to SERVE an API, which is responsible for responding to HTTP requests.

})

app.listen(8080);