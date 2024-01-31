const ErrorMessage = ({ items }) =>{
    // let foodItems = ['Dal', 'Vegetables', 'Egg', 'Milk', 'Meat','Roti', 'Ghee', 'Bread' ]


    return <>{items.length === 0 && <h3>No items available.</h3>}</>
      
}


export  default ErrorMessage;