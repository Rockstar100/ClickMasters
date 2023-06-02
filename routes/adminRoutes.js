const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/authMiddleware');
const { getAllUsersController,getAllCameraman, changeAccountStatusController,deleteUserController,deleteCameramanController } = require('../controllers/adminctrl');
//GET Users
router.get('/getAllUsers',authMiddleware,getAllUsersController)


//Get Cameraman
router.get('/getAllCameraman',authMiddleware,getAllCameraman)

//Post Account Status
router.post('/changeAccountStatus',changeAccountStatusController)

//Delete User
router.delete('/deleteUser',authMiddleware,deleteUserController)  


//Delete Cameraman
router.delete('/deleteCameraman',authMiddleware,deleteCameramanController)


module.exports = router; 