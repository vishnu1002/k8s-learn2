import express from 'express';
import os from 'os';
import path from 'path';

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.set('views', path.join(process.cwd()));

app.get('/', (req, res) => {
  const hostname = os.hostname();
  res.render('index', { hostname });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
