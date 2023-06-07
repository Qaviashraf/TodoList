import { useState } from "react"
import "./todo.css"
import { TodoItem } from "./TodoItem"

export const TodoList = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Learning React"
    }
    
  ])

  const addTask = () => {
    const title = prompt("Enter the task title")
    const newTask = { id: items.length + 1, title }
    const newItems = [...items, newTask]
    setItems(newItems)
  }
  // const delItem=(key) => {
  //   let newTodo = [...TodoList];
  //   newTodo.splice(key,1);
  //   setItems([...newTodo]);
  // }


  return (
    <div>
      <div className="bar">
        <h2 className="heading">Website Todo</h2>
      </div>
      <div className="todo-list shadow-lg">
        {items.map((item) => (
          <TodoItem key={item.id} title={item.title} />
        ))}
      </div>
      <button className="todo-add-btn rounded-md" onClick={addTask}>
        + New Task
      </button>
    </div>
  )
}