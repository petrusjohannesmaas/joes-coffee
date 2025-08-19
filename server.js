const express = require('express');
const QRCode = require('qrcode');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const baseData = {
  pageTitle: 'Fresh Roasted Coffee',
  pageHeading: 'Small Craft Artisan Roasters.',
  bgImage: '/images/falling-beans.jpg'
};

app.get('/', (req, res) => {
  res.render('index', { ...baseData, qrCode: null });
});

app.post('/generate', async (req, res) => {
  const { firstName, lastName, email } = req.body;
  const data = JSON.stringify({ firstName, lastName, email });

  try {
    const qrCode = await QRCode.toDataURL(data);
    res.render('qr', { qrCode });
  } catch (err) {
    console.error(err);
    res.render('error');
  }
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});