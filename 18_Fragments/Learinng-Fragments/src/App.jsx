import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";


function App() {

  // let foodItems = ['Dal', 'Vegetables', 'Egg', 'Milk', 'Meat','Rotis', 'Ghee',  ]
    
  // let textStateArr = useState("Food item entered by user");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1]

  
  
  // let [textToShow, setTextState] = useState();
  let [foodItems, setFoodItems] = useState([])

  // console.log(`Current value of textState:${textToShow}`)



  const onKeyDown =( event) =>{
    if (event.key === "Enter"){
      let newFoodItem = event.target.value
      let newItems=([...foodItems ,newFoodItem])
      setFoodItems(newItems);
      event.target.value=""


    }
    

  }

  // let foodItems = []




  return (
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <FoodInput handleKeyDown={onKeyDown}></FoodInput>
      <ErrorMessage items={foodItems}></ErrorMessage>
      {/* <p>{textToShow}</p> */}
      <FoodItems items={foodItems}></FoodItems>
    </Container>

  )
}

export default App
//  used fragments band props 