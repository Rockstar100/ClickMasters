const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/authMiddleware');
const { adminMiddleware } = authMiddleware;
const { getAllUsersController,getAllCameraman, changeAccountStatusController,deleteUserController,deleteCameramanController } = require('../controllers/adminctrl');
//GET Users
router.get('/getAllUsers',adminMiddleware,getAllUsersController)


//Get Cameraman
router.get('/getAllCameraman',adminMiddleware,getAllCameraman)

//Post Account Status
router.post('/changeAccountStatus',adminMiddleware,changeAccountStatusController)

//Delete User
router.delete('/deleteUser',adminMiddleware,deleteUserController)


//Delete Cameraman
router.delete('/deleteCameraman',adminMiddleware,deleteCameramanController)


module.exports = router; 