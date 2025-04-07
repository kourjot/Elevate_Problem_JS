import {Todo} from "../model/todoModel.js";
const createTodo=async(req,res)=>{
    try{
        const {name, description}=req.body
        const todo=new Todo({name,description,status:"pending"})
        await todo.save()
        res.status(201).json({message:"Todo created successfully",todo})

    }catch(err){
        res.status(500).json({message:err.message})
    }
}
const getTodos=async(req,res)=>{
    try{
        const todos=await Todo.find()
        res.json(todos)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}
const updateTodo=async(req,res)=>{
    try{
        const {id}=req.params
        const {name,description,status}=req.body
        const updatedTodo=await Todo.findByIdAndUpdate(id,{name,description,status},{new:true})
        if(!updatedTodo){
            return res.status(404).json({message:"Todo not found"})
        }
        res.json(updatedTodo)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}
const deleteTodo=async(req,res)=>{
    try{
       const {id}=req.params
        const deletedTodo=await Todo.findByIdAndDelete(id)
        if(!deletedTodo){
            return res.status(404).json({message:"Todo not found"})
        }
        res.json({message:"Todo deleted successfully"})
    }catch(err){
        res.status(500).json({message:err.message})
    }
}
export {createTodo,updateTodo,getTodos,deleteTodo}