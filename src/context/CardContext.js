import React, { createContext, useState } from "react";


const CardContext = createContext();

export function CardProvider({ children }) {
  const a = [
    {
      name :"PSV - AS Roma" ,
      price : 2.74
    },
    {
      name :"Real Madrid - Galatasaray" ,
      price : 4.63
    },
]
  const [items, setItems] = useState(a);
  const [totalPrice, setTotalPrice] = useState([2.74 , 4.63]);

  const addToCard = (name, price) => {
    setItems((prevState) => [...prevState, { name, price }]);
  };
  
  return (
    <CardContext.Provider value={{ items, addToCard,totalPrice }}>
      {children}
    </CardContext.Provider>
  );
}
 export default CardContext;