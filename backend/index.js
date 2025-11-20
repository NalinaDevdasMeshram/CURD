import express from "express";
import dotenv from "dotenv";
import dbconnect from "../backend/utility/db.js";
import router from "./Routes/userRoute.js";
import cors from "cors";
dotenv.config();
const PORT = process.env.PORT;
const server = express();

//middleware
server.use(express.json());
//  cors
server.use(cors());
server.use("/api", router);
//mongodb connect
dbconnect();
server.listen(PORT, () => {
  console.log(`server running on the port ${PORT}`);
});
