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

app.get('/wholesale', (req, res) => {
  res.render('wholesale', {
    pageTitle: 'Wholesale',
    pageHeading: 'Order in bulk',
    bgImage: '/images/order-banner.png'
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});