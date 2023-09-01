const express = require('express');
const router = express.Router();
const User = require('../models/Users');

// const app = express();

router.post('/createUser', async (req, res)=> {
    try {
        await User.create({
            name:"harsh",
            location:"noida",
            email:"harsh@gmail.com",
            password:"123456"
        })
        res.json({success:true});
    } catch (error) {
        console.log(error);
        res.json({success:false});

    }
});

module.exports = router;