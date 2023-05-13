const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const {getCameramanInfoController,updateCameramanInfoController,getSelectedCameramanController } = require('../controllers/cameramanctrl');

router.post('/getCameramanInfo', authMiddleware, getCameramanInfoController);

router.post('/updateCameramanInfo', authMiddleware, updateCameramanInfoController);
router.post('/getSelectedCameraman', authMiddleware, getSelectedCameramanController )
module.exports = router;