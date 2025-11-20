import express from "express";
import {
  CreateUser,
  GetAlluser,
  UpdataUser,
  DeleteUser,
} from "../Controllers/userController.js";
const router = express.Router();

router.post("/create", CreateUser);
router.get("/get", GetAlluser);
router.put("/update/:id", UpdataUser);
router.delete("/delete/:id", DeleteUser);
export default router;
