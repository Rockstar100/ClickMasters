const JWT = require('jsonwebtoken');
const colors = require('colors');
const userModel = require('../models/userModels');
const jwtt = process.env.JWT_SECRET;

const authMiddleware = async (req, res, next) => {
   try
   {
    const token = req.headers['authorization'].split(" ")[1];

    JWT.verify(token, jwtt, (err, decode) => {
        if (err) {
            return res.status(401).send({
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

const adminMiddleware = async (req, res, next) => {
    authMiddleware(req, res, async () => {
        try {
            const user = await userModel.findById(req.body.userId);
            if (!user || !user.isAdmin) {
                return res.status(403).send({ success: false, message: "Admin access required" });
            }
            next();
        } catch (error) {
            console.log(error);
            res.status(401).send({ success: false, message: `Auth Failed:${error.message}` });
        }
    });
}

module.exports = authMiddleware;
module.exports.adminMiddleware = adminMiddleware;