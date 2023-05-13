const cameramanModel = require('../models/cameramanModel')
const userModel = require('../models/userModels')

const getAllUsersController = async(req,res) =>{

    try{
        const users = await userModel.find({})
        res.status(200).send ({
            sucess:true,
            message: 'user data',
            data:users
        })

    }
    catch (error){

        console.log(error)
        res.status(500).send ({
          sucess : false,
          message : 'error while fetching users' ,
          error 
        })

    }

}

const getAllCameraman =async(req,res)=>{
    try{
        const cameraman = await cameramanModel.find({})
        res.status(200).send ({
            sucess:true,
            message: 'cameraman data',
            data:cameraman
        })

    }
    catch (error){

        console.log(error)
        res.status(500).send ({
          sucess : false,
          message : 'error while fetching cameraman' ,
          error 
        })

    }

}

const changeAccountStatusController = async (req, res) => {
    try {
      const { cameramanid, status } = req.body;
      console.log(req.body);
      const cameraman = await cameramanModel.findByIdAndUpdate(
       cameramanid,
        {status}
      );
      // const cameraman = await cameramanModel.findByIdAndUpdate(
      //   { _id: cameramanid },
      //   { status: status }
      // );
      const user = await userModel.findOne({ _id: cameraman.userId });

      if (user) {
        const notification = user.notification;
        notification.push({
          type: "Account Status",
          message: `Your account status is ${status}`,
          onClickPath: "/notification",
        });
        user.isPhotographer = status === "approved" ? true : false;
        await user.save();
      }
   
      
      res.status(201).send({
        success: true,
        message: "Approved cameraman",
        data: cameraman,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "error while fetching cameraman",
        error,
      });
    }
  };
module.exports = { 
    getAllUsersController,
    getAllCameraman,
    changeAccountStatusController
}