import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

import ToDoItem from "./ToDoItem ";
import styles from "./ToDoItems.module.css";
const ToDoItems = () => {

  const {todoItems} = useContext(TodoItemsContext)
  // const todoItems = contextObj.todoItems
  // console.log(TodoItemsFromContext)

  // console.log(` items from context:${TodoItemsFromContext}`)


  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <ToDoItem
        key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
        ></ToDoItem>
      ))}
    </div>
  );
};

export default ToDoItems;
