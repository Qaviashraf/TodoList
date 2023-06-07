import deleteicon from "../assets/deleteicon.png"
import "./todo.css"
import { TodoList } from "./TodoList"


export const TodoItem = ({ title }) => {
  return (
    <div className="todo-item" id="todo-1">
      <p className="todo-task-title">{title}</p>
      <img className="todo-icon" src={deleteicon} />
    </div>
  )
}