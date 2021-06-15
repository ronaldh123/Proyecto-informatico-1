const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.send('Hello world');
});
app.listen(port);
