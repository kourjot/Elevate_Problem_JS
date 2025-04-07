import {connect} from "mongoose"
const connection =async()=>{
    try{
    
    await connect("mongodb://127.0.0.1:27017/TodoBackend")
    console.log("Connected to MongoDB")
    }catch(err){
        console.error("Error connecting to MongoDB", err)
    }
}

export {connection}