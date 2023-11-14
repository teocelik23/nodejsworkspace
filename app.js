const express = require('express');
const Calculations = require('./calculations');
const app = express();
const fs = require('fs');
const port = 3000;

const jsonData = JSON.parse(fs.readFileSync('data.json', 'utf8'));

let sum = 0;
jsonData.forEach(item => {
  sum += item.value;
});

app.get('/', (req, res) => {
  const calculator = new Calculations();

  // Use specific values for sum and result
  const concreteSum = 15;
  const concreteResult = 5;

  fs.readFile('index.html', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error loading template file');
      return;
    }

    // Replace placeholders with concrete values
    const html = data
      .replace('<%= sum %>', concreteSum)
      .replace('<%= result %>', concreteResult);

    res.set('Content-Type', 'text/html');
    res.send(html);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
