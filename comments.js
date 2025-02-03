// Create web server
// Create a route for comments
// Send back a JSON response of the comments

var express = require('express');
var app = express();
var comments = require('./comments');

app.get('/comments', function(req, res) {
  res.json(comments);
});

app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});

// Run the server
// Visit http://localhost:3000/comments in your browser
// You should see the comments displayed as JSON

// Add a new comment
// Add a new comment to the array of comments in comments.js
// Refresh the page in your browser
// You should see the new comment displayed in the JSON response