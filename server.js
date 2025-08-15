const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', {
    pageTitle: 'Fresh Roasted Coffee',
    pageHeading: 'Small Craft Artisan Roasters.',
    bgImage: '/images/home-banner.jpg'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    pageTitle: 'About',
    pageHeading: 'About',
    bgImage: '/images/scooter.png'
  });
});

app.get('/shop', (req, res) => {
  res.render('shop', {
    pageTitle: 'Shop',
    pageHeading: 'Shop our fresh roasted coffees.',
    bgImage: '/images/shop-banner.png'
  });
});

app.get('/locations', (req, res) => {
  res.render('locations', {
    pageTitle: 'Locations',
    pageHeading: 'Locations',
    bgImage: '/images/locations-banner.png'
  });
});

app.get('/wholesale', (req, res) => {
  res.render('wholesale', {
    pageTitle: 'Wholesale',
    pageHeading: 'Wholesale',
    bgImage: '/images/wholesale-banner.jpg'
  });
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});