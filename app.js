const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000; // You can use any available port

const jsonData = JSON.parse(fs.readFileSync('data.json','utf8'));

let sum = 0;
jsonData.forEach(item => {
  sum += item.value; // Assuming 'value' is a key in your JSON data
});

app.get('/', (req, res) => {
    // Read the HTML file and push text into it
    const html = `
    <html>
    <head><title>Calculated Results</title></head>
    <body>
      <h1>Calculated Results</h1>
      <p>Sum of values from JSON data: ${sum}</p>
    </body>
    </html>
  `;

  // Set the Content-Type header to specify HTML
  res.set('Content-Type', 'text/html');
  // Send the generated HTML with calculated results to the client
  res.send(html);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
