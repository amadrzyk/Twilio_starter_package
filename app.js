
var http = require('http');
var express = require('express');

var app = express();

var accountSid = 'YOUR-ACCOUNT-SID';
var authToken = 'YOUR-ACCESS-TOKEN';

var client = require('twilio')(accountSid, authToken);


app.get('/', function (req, res) {
res.send("Hello world!")
})

var port = process.env.PORT || 1337;
/*
 The to numbers and the from numbers are fixed
 The to number is given from Twilio
 The from number is the number authenticated by twilio
 Though if you are a paid customer, you don't need to authenticate
* */
app.get('/pizzatext', function (req, res) {
  client.messages.create({
    to: "+15196946103",
    from: "+12262701627",
    body: "Hello - wanna buy a pizza? =) "
  }, function(err, message) {
    console.log(message.sid);
  });
})

app.get('/pizzacall', function (req, res) {

  client.calls.create({
    url: "http://demo.twilio.com/docs/voice.xml", // Needs to be public url
    to: "+12269275775",
    from: "+12262701627"
  }, function(message) {
    console.log(message.sid);
  });

})

app.listen(port, function() {
  console.log('Our app is running on http://localhost:' + port);
});



module.exports = app;
