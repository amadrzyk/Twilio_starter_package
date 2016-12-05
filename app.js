
var http = require('http');
var express = require('express');

var app = express();

var accountSid = 'ACd7c06ebd2e690d16b1d0ca7b47bfae01';
var authToken = 'd913d5b8ed7da636bd996e8d32eec699';

var client = require('twilio')(accountSid, authToken);


app.get('/', function (req, res) {
res.send("Hello world!")
})

var port = process.env.PORT || 8080;

//The to numbers and the from numbers are fixed:
//The to number is given from Twilio
//The from number is the number authenticated by twilio
//Though if you are a paid customer, you don't need to authenticate
app.get('/pizzatext', function (req, res) {
  client.messages.create({
    to: "+12269275775",
    from: "+12262701627",
    body: "Hello I wanna buy a pizza please =) "
  }, function(err, message) {
    console.log(message.sid);
  });
})

app.get('/pizzacall', function (req, res) {

  client.calls.create({
    url: "http://demo.twilio.com/docs/voice.xml", // Needs to be public url?
    to: "+12269275775",
    from: "+12262701627"
  }, function(message) {
    console.log(message.sid);
  });

})

app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});

//
// http.createServer(app).listen(1338, function () {
//   console.log("Express server listening on port 1338");
// });

module.exports = app;
