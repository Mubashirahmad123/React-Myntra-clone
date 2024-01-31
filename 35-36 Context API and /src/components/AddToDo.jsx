import { useRef} from "react";
import { CgAdd } from "react-icons/cg";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";


function AddToDo() {
  // const [todoName, setTodoName] = useState("");
  // const [DueDate, setDueDate] = useState("");
  const {addNewItem} = useContext(TodoItemsContext);

  const todoNameElement = useRef();
  const dueDateElement = useRef();


  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current += 1;

  // };

  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  //   console.log(`noOfUpdates are :${noOfUpdates.current}`)
  // };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const DueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    console.log(`${todoName} due on: ${DueDate}`)

    addNewItem(todoName, DueDate);
    // setTodoName("");
    // setDueDate("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo here "
            // value={todoName}
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} 
          // value={DueDate} 
          // onChange={handleDateChange}
           />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
          <CgAdd />

          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
