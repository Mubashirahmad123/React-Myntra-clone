import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ items }) => {

    let [activeItems, setActiveItems] = useState([]);

    let onBuyButton = (items,event) => {
        let newitems = [...activeItems, items];
        setActiveItems(newitems);
        

    }


    // let foodItems = ['Dal', 'Vegetables', 'Egg', 'Milk', 'Meat','Roti', 'Ghee', 'Bread' ]

    return (
        <ul className="list-group">
            {items.map((items)=> (
               <Item key={items}foodItems={items}  bought={activeItems.includes(items)}handleBuyButton={(event) => onBuyButton(items, event)}></Item>
            ))}

      </ul>
    );
};

export default FoodItems;
