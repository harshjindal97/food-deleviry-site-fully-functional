const express = require('express');
const mongodb = require('./mongodb');

mongodb();
const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept");
    next();
})

const port = 8000;

app.get('/', (req, res) => {
    res.send('Hello, world')
});

app.use('/api/' , require('./routers/CreateUser'));
app.use('/api/' , require('./routers/DisplayData'));

app.listen(port , ()=>{
    console.log(`listening on port ${port}`);
});