const express = require('express');
const app = express();

// Static assets
app.use(express.static(__dirname + '/build'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => console.log(`Server started on port ${PORT}`));
