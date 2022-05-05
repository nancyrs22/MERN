import React from 'react';

    
const Groceries = (props) => {
    // esto podría provenir fácilmente de props
    const groceryList = ["pearl onions", "thyme", "cremini mushrooms", "butter"];
    return (
        <ul>{
            groceryList.map( (item, i) => 
                <li key={ i }>{ item }</li>
            )
        }</ul>
    ); 
}
    
export default Groceries;
