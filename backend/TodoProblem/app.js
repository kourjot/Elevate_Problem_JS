import express from "express"
import {connection} from "./config/db.js"
import {router} from "./router/todoRouter.js"
import cors from "cors"
const app=express()
app.use(cors())
app.use(express.json())
app.use(router)
app.get("/",(req,res)=>{
    res.send("Hello World!")
})
app.listen(8080,()=>{
    connection() 
    console.log("Server is running on port http://localhost:8080")
})