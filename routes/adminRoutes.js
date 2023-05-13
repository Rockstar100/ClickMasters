const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/authMiddleware');
const { getAllUsersController,getAllCameraman, changeAccountStatusController } = require('../controllers/adminctrl');
//GET Users
router.get('/getAllUsers',authMiddleware,getAllUsersController)


//Get Cameraman
router.get('/getAllCameraman',authMiddleware,getAllCameraman)

//Post Account Status
router.post('/changeAccountStatus',changeAccountStatusController)

//Delete User

module.exports = router; 