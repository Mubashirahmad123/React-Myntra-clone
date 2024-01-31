import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItems from "./components/ToDoItems";
import WelcomeMessage from "./components/WelcomeMessage";

import "./App.css";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    // console.log(`New item Added: ${itemName} Date:${itemDueDate}`);

    // setTodoItems((currValue) => {
    //   const newTodoItems = [
    //     ...currValue,
    //     { name: itemName, dueDate: itemDueDate },
    //   ];

    //   return newTodoItems

    // });
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };
  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    // console.log(`Item Deleted:${todoItemName}`)
  };

  // const defaultTodoItems = [{ name: 'gym', dueDate: 'Today' }]

  return (
    <TodoItemsContext.Provider value={{
      todoItems: todoItems, addNewItem:addNewItem, deleteItem:deleteItem}}>

    <center className="todo-container">
      <AppName />
      <AddToDo/>
      <WelcomeMessage /*todoItems={todoItems}*/></WelcomeMessage>
      <ToDoItems></ToDoItems>
    </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
