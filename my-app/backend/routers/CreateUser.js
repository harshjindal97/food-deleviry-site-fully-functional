const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const { check, validationResult } = require('express-validator');

// const app = express();

router.post('/createUser',
        [
            check('email', 'not a valid email').isEmail(),
            check('password', 'Password length should be 8 to 10 characters').isLength({ min: 8}) 
        ] , 
    async (req, res)=> {
        const error = validationResult(req);
        console.log(error , "error");
        if (!error.isEmpty()) {
            return res.status(400).json(error)
        }
    try {
        
        await User.create({
            name: req.body.name,
            location: req.body.location,
            email: req.body.email,
            password: req.body.password
        }).then(res.json({success: true}))
        
    } catch (error) {
        console.log(error);
        res.json({success:false});

    }
});

module.exports = router;