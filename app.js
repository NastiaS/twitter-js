var express = require( 'express' );
var app = express();
var swig = require('swig');
var morgan = require('morgan');
app.use( morgan('dev') );

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');
swig.setDefaults({ cache: false });

var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.get('/', function (req, res) {
res.render( 'index', {title: 'Hall of Fame', people: people} );
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("server listening and I am modifying something", host, port)

});