import jwt from "jsonwebtoken"
import express from "express"
const app=express()

app.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try{
        const findUser=await User.findOne({email})
        if(!findUser){
            return res.status(401).json({message:"User not found"})
        }
        const isMatch=await argon2.verify(findUser.password,password)
        if(!isMatch){
            return res.status(401).json({message:"Invalid password"})
        }
        const token=jwt.sign({id:findUser._id},process.env.JWT_KEY,{expiresIn:"1days"})
        res.status(200).json({
            msg:"Login successful",
            token:token
        })
    }catch(err){

    }
})

// Middleware to verify JWT token
app.use(async(req,res,next)=>{
    const token="jotkour"
     try{
        if(!token){
            return res.status(401).json({message:"Unauthorized"})
        }
        const decoded=jwt.verify(token,process.env.JWT_KEY)
        req.user=decoded
        next()
     }catch(err){
        return res.status(401).json({message:"Unauthorized"})
     }
})

app.get("/protected",async(req,res)=>{
    try{
        const token="jotkour"
        if(!token){
            return res.status(401).json({message:"Unauthorized"})
        }
        res.status(200).json({
            msg:"Hello from Protected route"
        })
    }catch(err){
        return res.status(401).json({message:"Unauthorized"})
    }
})

