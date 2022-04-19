const User=require("../model/user.model")
require('dotenv').config();
const jwt = require('jsonwebtoken');

const newToken=(user)=>{
    return jwt.sign({ user}, process.env.JWT);
}

const register=async(req,res,next)=>{
    try{
        const ip = req.ip;
        let user=await User.findOne({email:req.body.email});
        
        if(user){
            return res.send("user already exist")
        }
        user=await User.create({
            "firstName":req.body.firstName,
    "lastName":req.body.lastName,
    "email":req.body.email,
    "password":req.body.password,
    "ip":req.ip
        });
        const token=newToken(user)
        
        console.log(user)
        return res.send({user,token})
    }
    catch(err){
        return res.send(err.message)
    }
}


const login=async(req, res, next)=>{
    try{
        console.log(req.body)
        let user=await User.findOne({email:req.body.email});

        if(!user){
            return res.send("user donsnot found")
        }

        const match=user.check(req.body.password);
        if(!match){ return res.send("password not matched")}
        const token=newToken(user)

        return res.send({user,token})
    }
    catch(err){
        return res.send(err.message)
    }
}


module.exports ={register,login}