const JWT = require('jsonwebtoken');
const colors = require('colors');
const userModel = require('../models/userModels');
const jwtt = process.env.JWT_SECRET;
module.exports = async (req, res, next) => {
   try
   {
    const token = req.headers['authorization'].split(" ")[1];
    
    JWT.verify(token, jwtt, (err, decode) => {
        if (err) {
            return res.status(200).send({
                success: false,
                message: "Unauthorized"
            });
        } else {
            req.body.userId= decode.id
            
            next();
        }
    });
   }
    catch(error)
    {
        console.log(error);
        res.status(401).send({success: false, message: `Auth Failed:${error.message}`});

    }
}