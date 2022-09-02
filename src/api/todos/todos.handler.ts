import {Response, Request, NextFunction} from "express"
import { Todos, TodoWithId, Todo } from "./todos.model";

export async function findAll(req: Request, res: Response<TodoWithId[]>, next: NextFunction) {
    try{
        const todoList = await Todos.find().toArray();
        res.json(todoList)
    }
    catch(error){
        next(error)
    }
}
