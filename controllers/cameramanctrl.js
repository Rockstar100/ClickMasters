const cameramanModel = require("../models/cameramanModel");
const userModel = require("../models/userModels");
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


module.exports = {
    getCameramanInfoController,
    updateCameramanInfoController,
    getSelectedCameramanController
}