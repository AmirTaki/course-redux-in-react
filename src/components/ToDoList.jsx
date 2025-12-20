import { useSelector } from "react-redux";
import ToDoItem from "./TodoItem";

const ToDoList =  () => {
    const todos = useSelector((store) => store.todos)
    return (
        <ul>
            {todos.map((todo) => {
                return(
                    <ToDoItem key = {todo.id} todo = {todo}/>                  
                )
            })}
        </ul>
    )
}

export default ToDoList;