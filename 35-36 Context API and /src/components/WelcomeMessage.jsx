import styles from "./WelcomeMessage.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMessage = () => {
  const {todoItems} = useContext(TodoItemsContext);
//   const todoItems = contextObj.todoItems


  return (
    todoItems.length === 0 && <p className={styles.welcome}>Enjoy your day</p>
  );
};

export default WelcomeMessage;
