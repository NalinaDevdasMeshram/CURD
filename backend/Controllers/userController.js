import Usermodel from "../models/users.model.js";

// createuser
const CreateUser = async (req, res) => {
  try {
    const { name, fathername, email, phone } = req.body;
    const newUser = new Usermodel({
      name,
      fathername,
      email,
      phone,
    });
    await newUser.save();
    res.status(200).json({
      success: true,
      message: "new user create successfully",
      data: newUser,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "please the correct details",
      data: error,
    });
  }
};

//getuser
const GetAlluser = async (req, res) => {
  try {
    const user = await Usermodel.find();
    if (!user) {
      res
        .status(200)
        .json({ success: true, message: "No user found", total: user.length });
    }
    res.status(200).json({
      success: true,
      message: "Getting all userdata successfull!",
      data: user,
      total: user.length,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "internal server error",
      data: error,
    });
  }
};

//updateuser
const UpdataUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const result = await Usermodel.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "user details update successfully",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "internal server error",
      data: error,
    });
  }
};

//DeleteUser
const DeleteUser = async (req, res) => {
  try {
    const deleteId = req.params.id;
    const deleteUserId = await Usermodel.findByIdAndDelete(deleteId, req.body, {
      new: true,
    });
    if (!deleteUserId) {
      return res.status(404).json({
        success: false,
        message: "No data found from particular id",
      });
    }
    res.status(200).json({
      success: true,
      message: "user delete successfully",
      data: deleteUserId,
    });
  } catch (error) {
    res.status(404).json({
      message: "internal server error",
      data: error,
    });
  }
};

export { CreateUser, GetAlluser, UpdataUser, DeleteUser };
