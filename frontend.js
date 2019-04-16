// setTimeout has confusing syntax that makes this a little scarier than it is but literally the setTimeout(() => { and ), 1000); at end are all just to make the function
// inside of it execute 1000 milliseconds after the file is loaded.
setTimeout(() => {
  // fetch is standard JavaScript out-of-the-box way of MAKING an HTTP request. We are making an HTTP request to the URL, which in this case is localhost.
  // Localhost is basically saying 'my computer'. We are making use of localhost in server.js when we app.listen(8080); That is saying run my code on port 8080 of localhost.
  fetch('http://localhost:8080/data')
  // .then is probably the most complex stuff in here.. it is a "Promise chain" used in order to handle consecutive "asynchronous" actions that need to happen in a certain
  // order for it to go right. YOU DONT NEED TO KNOW THAT AT ALL, JUST RECOGNIZE HOW WE USE .THEN BELOW AND YOU CAN CONTINUE THE CHAIN IF NEEDED.
  .then(function(response) {
    return response.json();
  })
  // myJson is going to have the data that we requested from the server inside of it!!!
  .then(function(myJson) {
    // Uncomment the line below me if you want to see what myJson (the raw data) looks like coming out of the http request.
    // console.log(myJson);

    // This is raw JavaScript that targets the html element with an ID of 'wumbo' (Peep the HTML and see the element with id="wumbo") and then Uses the results of 
    // our fetch request to populate some text.
    document.getElementById('wumbo').innerHTML = myJson.name + ' AKA ' + myJson.alias + ' has a ' + myJson.car + '!!!!';
  });
// This bit here is just closing out the setTimeout, no worries.
}, 1000);
