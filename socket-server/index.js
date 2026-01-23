import { Server } from "socket.io";
import express from "express" 
import {fileURLToPath} from 'node:url'
import { createServer } from "http";
import { dirname,join } from 'node:path';

const app=express()
const server=createServer(app)

const io =new Server(server)

const _dirname=dirname(fileURLToPath(import.meta.url))
console.log(fileURLToPath(import.meta.url));
console.log(_dirname);
app.get("/",(req,res)=>{
    res.sendFile(join(_dirname,"index.html"))
})
const PORT=3000
server.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})