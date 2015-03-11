var express = require( 'express' );
var app = express();
var morgan = require('morgan');
app.use( morgan('dev') );

app.get('/', function (req, res) {
  res.send('Hello World!' + "Yep, it works!")
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("server listening and I am modifying something", host, port)

});

// "test"