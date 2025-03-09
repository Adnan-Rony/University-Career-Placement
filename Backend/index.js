import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv"

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

//for frontend 
const corsOptions = {
    origin:'http://localhost:5173',
    credentials:true
}

app.use(cors(corsOptions))

const PORT=3000

app.listen(PORT,()=>{
    // connectDB();
    console.log(`Server running at port ${PORT}`);
})