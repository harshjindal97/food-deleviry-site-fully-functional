const express = require('express');
const router = express.Router();

router.post('/foodData', (req, res)=> {
    try {
        // console.log(global.categories , global.sampledb);
        res.send([global.sampledb,global.categories]);
        // res.json(global.sampledb , global.categories);
        // console.log(global.sampledb , global.categories);
    } catch (error) {
        console.error(error , "this is the error message");
    }
})
 
module.exports = router;