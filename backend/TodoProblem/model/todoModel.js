import {Schema,model} from "mongoose"
const todoSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
})
const Todo=model("Todo",todoSchema)
export {Todo} 