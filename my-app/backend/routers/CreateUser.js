const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { check, validationResult } = require('express-validator');
const jwtkey = "mynameisharshjindal";
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

        const olduser = await User.findOne({ email: req.body.email});
        if (!olduser) {
            const salt = await bcrypt.genSalt(10);
        const hashpass = await bcrypt.hash(req.body.password , salt);
        await User.create({
            name: req.body.name,
            location: req.body.location,
            email: req.body.email,
            password: hashpass
        }).then(res.json({success: true}))
        } 
        else{
            res.json({user: "already exists"});
        }
        
        
    } catch (error) {
        console.log(error , "this is the error");
        res.json({success:false});

    }
});

router.post('/loginUser',[
    check('email', 'not a valid email').isEmail()
] ,
 async (req, res)=> {
    // console.log(req.body);
    // res.send({success: true});
    
    let email = req.body.email;
    const error = validationResult(req);
        console.log(error , "error");
        if (!error.isEmpty()) {
            return res.status(400).json(error)
        }
    try {
        
        let user = await User.findOne({email});

        if (!user) {
            console.log("user not found");
            res.send("")
        } else {
            const data = {
                user:{
                    id: user.id
                }
            }
            const token = await jwt.sign(data , jwtkey)
        const isMatch = await bcrypt.compare(req.body.password , user.password);
            // console.log(isMatch);
            // console.log(user.password);
            if (isMatch) {
                
                res.json({success:true , auth:token});
                
            } else {
                res.json({password:"wrong password"});
            }
        }
    } catch (error) {
        console.log(error);
    }
});    



module.exports = router;