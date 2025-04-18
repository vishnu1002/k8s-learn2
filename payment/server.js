const express = require('express');
const os = require('os');
const path = require('path');

const app = express();
const PORT = 3001;

app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd()));

app.get(['/', '/payment'], (req, res) => {
  const hostname = os.hostname();
  res.render('index', { hostname });
});

app.listen(PORT, () => {
  console.log(`Payment service is running at http://localhost:${PORT}`);
});
