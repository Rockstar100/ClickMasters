const bookingModel = require("../models/bookingModel");
const cameramanModel = require("../models/cameramanModel");
const userModel = require("../models/userModels");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const colors = require('colors');
const jwtt = "XYZ1234567"
const moment = require('moment');
const loginController = async(req,res)=> {
    try{

        const user = await cameramanModel.findOne({email: req.body.email});
        if(!user)
        {
            return res.status(200).send({success: false, message: 'User does not exist'});
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password);

        if(!isMatch)
        {
            return res.status(200).send({success: false, message: 'Incorrect password'});
        }
        const token = jwt.sign({id: user._id}, jwtt, {expiresIn: '1d'});
        res.status(200).send({success: true, message: 'User logged in successfully', token});
        // else{
            
        //     res.status(200).send({success: true, message: 'User logged in successfully', token: token});
        // }


    }
    catch(error)
    {
        console.log(`Error: ${error.message}`.red.underline.bold);
        res.status(500).send({success: false, message: `Internal Server Error:${error.message}`});

    }


}
const authController = async(req,res)=> {
    
    try{
        
        const user = cameramanModel.findById({_id: req.body.userId});
      
     
        try {
            if(!user){
                return res.status(200).send({success: false, message: 'User does not exist'});
            }
            
            const users = await cameramanModel.findOne({_id: req.body.userId});
            res.status(200).send({ success: true, data: users });
            users.password = undefined;
           
            
           
          } catch (error) {
            console.log(error);
            res.status(500).send({ success: false, message: `Internal Server Error:${error.message}`, error });
        
                 
       }

    }
    catch(error)
    {
        console.log(error);
        res.status(500).send({success: false,error});

    }
}

const getCameramanInfoController = async (req, res) => {
    try {
        const cameraman = await cameramanModel.findOne({ userId: req.body.userId });
        res.status(200).send({
            success: true,
            data: cameraman,
            message: "Cameraman info fetched successfully",
        });
    }
    catch (error) {
            console.log(error);
            res.status(500).send({
                success: false,
                error,
                message: "Error while getting cameraman info",
            });
            }
    };
    
const updateCameramanInfoController = async (req, res) => {
    try{

       
        const cameraman = await cameramanModel.findOneAndUpdate(
            { userId: req.body.userId },
            req.body,

        );
        res.status(201).send({
            success: true,
            data: cameraman,
            message: "Cameraman info updated successfully",
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error while updating cameraman info",
        });
    }
}
const getSelectedCameramanController = async(req,res)=> {
    try{
        
        const cameraman = await cameramanModel.findOne({_id:req.body.cameramanId})
        console.log(cameraman)
        res.status(200).send({
            success : true,
            data :cameraman,
            message : "Cameraman fetched successfully",
            })
            
    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success : false,
            error,
            message : "Error while getting cameraman",
            })
    }
}

const cameramanBookingController = async(req,res)=> {
    
    try{
       
        const cameraman = await cameramanModel.findById({_id:req.body.userId})
       
if (cameraman) {
  const bookings = await bookingModel.find({
    cameramanId:cameraman._id})
  res.status(200).send({
    success : true,
    data :bookings,
    message : "Cameraman bookings fetched successfully",
  })
} else {
  res.status(404).send({
    success : false,
    message : "Cameraman not found",
  })
}

    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success : false,
            error,
            message : "Error while getting cameraman bookings",
            })

}
}

const updatestatusController = async(req,res)=> {
    try{

        const{bookingId,status} = req.body
        const bookings = await bookingModel.findByIdAndUpdate(bookingId,{status})
        const user = await userModel.findOne({_id: bookings.userId});
        user.notification.push({
            type: "status updated",
            message: `Your booking status is ${status}`,
            onclickPath: "/cameraman-booking",
          })
            await user.save()
       
        res.status(201).send({
            success : true,
            message : "Status updated successfully",
            })

    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success : false,
            error,
            message : "Error while updating status",
            })
    }
}


module.exports = {
    loginController,
    authController,
    getCameramanInfoController,
    updateCameramanInfoController,
    getSelectedCameramanController,
    cameramanBookingController,
    updatestatusController
}