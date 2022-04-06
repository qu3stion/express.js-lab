const express = require('express')

const app = express();
// first parameter = "/route"
// second parameter = (req, res)
app.get('/', (req, res) => {
    res.send('Hello World');
});

// host port
app.listen(4000, console.log('listening on port 4000'))