const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello this is 21JE0457 from Service 1!');
});

app.listen(PORT, () => {
    console.log(`Service 1 running on port ${PORT}`);
});
