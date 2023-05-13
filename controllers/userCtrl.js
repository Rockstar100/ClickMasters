const userModel = require('../models/userModels');
const cameramanModel = require('../models/cameramanModel')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const colors = require('colors');
const jwtt = "XYZ1234567"
const registerController = async(req,res)=> {
    try{
        const existingUser = await userModel.findOne({email: req.body.email});
        if(existingUser)
        {
            return res.status(200).send({success: false, message: 'User already exists'});
        }
        const salt = await bcrypt.genSalt(10);
        const password = req.body.password;
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password = hashedPassword;
        const newUser = await userModel.create(req.body);

        await newUser.save();

        res.status(201).send({success: true, message: 'User created successfully'});


        



    }
    catch(error)
    {
        console.log(`Error: ${error.message}`.red.underline.bold);
        res.status(500).send({success: false, message: `Internal Server Error:${error.message}`});

    }
}
const loginController = async(req,res)=> {
    try{

        const user = await userModel.findOne({email: req.body.email});
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
        
        const user = userModel.findById({_id: req.body.userId});
      
        
       
     
        try {
            if(!user){
                return res.status(200).send({success: false, message: 'User does not exist'});
            }
            
            const users = await userModel.findOne({_id: req.body.userId});
            res.status(200).send({ success: true, data: users });
            users.password = undefined;
           
            
           
          } catch (error) {
            console.log(error);
            res.status(500).send({ success: false, message: `Internal Server Error:${error.message}`, error });
          

    //         res.status(200).send({
    //             success: true,

    //             data:{
    //                 name: user.name,
                   
    //                 email: user.email,
    //             },
    //              message: 'User logged in successfully'});
                 
       }

    }
    catch(error)
    {
        console.log(error);
        res.status(500).send({success: false,error});

    }
}

// const applyCameraman = async (req, res) => {
//     try {
//       const newCameraman = await cameramanModel({
//         ...req.body,
//         status: "pending"
//       })
//       await newCameraman.save()
  
//       const adminUser = await userModel.findOne({ isAdmin: true })
//       const notification = adminUser.notification
//       notification.push({
//         type: "Photographer Request",
//         message: `${newCameraman.name} has applied to be a photographer.`,
//         data: {
//           id: newCameraman._id,
//           name: newCameraman.name,
//           email: newCameraman.email,
//           phone: newCameraman.phone,
//           address: newCameraman.address,
//           status: newCameraman.status,
//           onClickPath: '/admin/photographer'
//         }
//       })
//       await userModel.findByIdAndUpdate(adminUser._id, { notification })
  
//       res.status(201).send({
//         success: true,
//         message: "Applied for Photographer",
//         data: newCameraman
//       })
  
//     } catch (error) {
//       console.log(error)
//       res.status(500).send({
//         success: false,
//         error,
//         message: "Error while applying for Photographer"
//       })
//     }
//   }
const applyCameraman = async (req, res) => {
    try {
      const newCameraman = await cameramanModel({...req.body, status: "pending"})
      await newCameraman.save()
  
      const adminUsers = await userModel.find({isAdmin: true})
      const notification = {
        type: "Photographer Request",
        message: `${newCameraman.name} Has Applied for photographer`,
        data: newCameraman,
      }
  
      for (const adminUser of adminUsers) {
        adminUser.notification.push(notification)
        await adminUser.save()
      }
  
      res.status(201).send({
        success: true,
        message: "Applied for Photographer",
        data: newCameraman,
      })
    } catch (error) {
      console.log(error)
      res.status(500).send({
        success: false,
        error,
        message: "Error while applying for Photographer",
      })
    }
  }
const getAllNotificationController = async(req,res)=> {
    try{

        const user = userModel.findOne({_id: req.body.userId});
        
        
        const seennotification = user.seennotification
        const notification = user.notification
        seennotification.push(...notification)
        user.notification = []
        user.seennotification = notification
        const updatedUser = await user.save()
        res.status(200).send({
            success : true,
            data : updatedUser,
            message : "Notification fetched successfully",
        })


    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success : false,
            error,
            message : "Error while getting notification",
         })
    }
}

const updateController = async(req,res)=> {
    try{
        const user = userModel.findOne({_id: req.body.userId});

        if(!user){
            return res.status(200).send({success: false, message: 'User does not exist'});
        }
        else{

            const body = req.body
            //update
            userModel.updateOne(req.body.userId,body,{new:true},(err,doc)=>{
                if(err){
                    console.log(err)
                    res.status(500).send({
                        success : false,
                      
                        message : "Error while updating user",
                        })
                }
                else{
                    res.status(200).send({
                        success : true,
                        data : doc,
                        message : "User updated successfully",
                        })
                }

            })
        }
        

    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success : false,
            error,
            message : "Error while updating user",
            })
    }
}

const getAllCameramanController = async(req,res)=> {
    try{
        const cameraman = await cameramanModel.find({status:"approved"})
        res.status(200).send({
            success : true,
            data : cameraman,
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




module.exports = {  
    loginController,
    registerController,
    authController,
    applyCameraman,
    getAllNotificationController,
    updateController,
    getAllCameramanController,
  
}
