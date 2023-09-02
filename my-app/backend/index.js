const express = require('express');
const mongodb = require('./mongodb');

mongodb();
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('Hello, world')
});

app.use(express.json());
app.use('/api/' , require('./routers/CreateUser'));

app.listen(port , ()=>{
    console.log(`listening on port ${port}`);
});