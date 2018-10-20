const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');

app.engine('html', mustacheExpress());

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
  const data = {
    hello: 'world',
    foo: 'bar'
  };

  res.render('test', data);
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});