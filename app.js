const express = require('express');
const Calculations = require('./calculations');
const app = express();
const fs = require('fs');
const port = 3000;

const jsonData = JSON.parse(fs.readFileSync('data.json', 'utf8'));

var sum = 0;
jsonData.forEach(item => {
  sum += item.value;
});

app.get('/', (req, res) => {

  let result = Calculations.calculateHypotenuse(3, 4);

  fs.readFile('index.html', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error loading template file');
      return;
    }

    // Replace placeholders with concrete values
    const html = data
      .replace('<%= sum %>', sum)
      .replace('<%= result %>', result);

    res.set('Content-Type', 'text/html');
    res.send(html);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
