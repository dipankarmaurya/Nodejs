const jwt = require('jsonwebtoken')
const authenticate =(req,res,next)=>{
    let token =req.header('authorization').split(' ')[1].split('.')[1]
    let id = jwt.verify(token,'secretkey');
    console.log(token,id);
}

module.exports= authenticate;