const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const userModel = require('../models/userModels');
const { loginController, registerController, authController,applyCameraman,getAllNotificationController,updateController,getAllCameramanController} = require('../controllers/userCtrl');
const authMiddleware = require('../middlewares/authMiddleware');
const { getAllCameraman } = require('../controllers/adminctrl');


const router = express.Router();

router.post('/login', loginController);

router.post('/register', registerController);

router.post('/getUserData',authMiddleware, authController)

// router.post('/apply-cameraman', applyCameraman)

router.post('/apply-cameraman', applyCameraman)

router.post('/get-all-notification',authMiddleware,getAllNotificationController)

router.put("/update",updateController ) 

//get all cameraman
router.get('/getAllCameraman', authMiddleware, getAllCameramanController )

//get selected cameraman


// router.get('/path', async (req, res) => {
//     try {
//       const users = await userModel.find();
//       console.log(users);
//       res.status(200).send({ success: true, data: users });
//     } catch (error) {
//       console.log(error);
//       res.status(500).send({ success: false, message: `Internal Server Error:${error.message}`, error });
//     }
//   });



module.exports = router;