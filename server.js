const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', {
    pageTitle: 'Fresh Roasted Coffee',
    pageHeading: 'Small Craft Artisan Roasters.'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    pageTitle: 'About',
    pageHeading: 'About'
  });
});

app.get('/shop', (req, res) => {
  res.render('shop', {
    pageTitle: 'Shop',
    pageHeading: 'Shop'
  });
});


app.get('/locations', (req, res) => {
  res.render('locations', {
    pageTitle: 'Locations',
    pageHeading: 'Locations'
  });
});

app.get('/wholesale', (req, res) => {
  res.render('wholesale', {
    pageTitle: 'Wholesale',
    pageHeading: 'Wholesale'
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});