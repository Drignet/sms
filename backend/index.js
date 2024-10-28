import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import studentRoute from "./routes/student.route.js";
import cors from 'cors';

const app = express();
dotenv.config()

const PORT = process.env.PORT || 3000
const DB_STRING = process.env.DB_STRING

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(cors());


//routes
app.use('/api/students', studentRoute);

mongoose.connect(DB_STRING)
.then(() => {
  console.log(`connected to Database`)
  app.listen(PORT, () => {
  console.log(`server Listening at Port ${PORT}`)
})
}).catch((error) => {
  console.log("Failed to connect to Database", error)
})
