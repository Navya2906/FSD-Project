const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Server running!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

