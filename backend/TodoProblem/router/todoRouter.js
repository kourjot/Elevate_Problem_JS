import {Router} from "express"
import {createTodo,updateTodo,getTodos,deleteTodo} from "../controller/todoController.js"
const router=Router()
router.post("/createTodo",createTodo)
router.get("/getTodos",getTodos)
router.put("/updateTodo/:id",updateTodo)
router.delete("/deleteTodo/:id",deleteTodo)
export{router}