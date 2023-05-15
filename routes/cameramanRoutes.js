const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const {getCameramanInfoController,updateCameramanInfoController,getSelectedCameramanController,cameramanBookingController,updatestatusController, loginController, authController } = require('../controllers/cameramanctrl');
router.post('/login', loginController);
router.post('/getData',authMiddleware, authController)

router.post('/getCameramanInfo', authMiddleware, getCameramanInfoController);

router.post('/updateCameramanInfo', authMiddleware, updateCameramanInfoController);
router.post('/getSelectedCameraman', authMiddleware, getSelectedCameramanController )
router.get('/cameraman-bookings', authMiddleware, cameramanBookingController )
router.post('/update-status', authMiddleware, updatestatusController);
module.exports = router;